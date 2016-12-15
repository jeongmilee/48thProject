(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("titleButton");
                this.set_classname("titleButton");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,600,41);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_prev", "absolute", null, "4", "32", "32", "56", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("TF_btn_MDIPrev");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next", "absolute", null, "4", "32", "32", "20", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("TF_btn_MDINext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 41, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("titleButton");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("titleButton.xfdl", function() {

        this.itemIndex = -1;

        this._itemNameHistory = [];

        this._itemNames = [];
        this._itemComps = [];

        this._itemStartIndex = -1;
        this._itemEndIndex = -1;

        this._itemGap = 4;

        this.titleButton_onload = function(obj,e)
        {
        	
        }

        this.titleButton_onsize = function(obj,e)
        {
        	this.arrangeItem();
        }

        this.itemChangeCallBack = function(scope,callback)
        {
        	this._itemChangeCallBackScope = scope;
        	this._itemChangeCallBack = callback;
        }

        this.itemCloseCallBack = function(scope,callback)
        {
        	this._itemCloseCallBackScope = scope;
        	this._itemCloseCallBack = callback;
        }

        this.addItem = function(text)
        {
        	var name = Eco.getUniqueId();
        	var comps = this.makeButton(name, text);
        	
        	this._itemNames.push(name);
        	this._itemComps.push(comps);

        	var index = this._itemNames.length - 1;
        	
        	this.setItemIndex(index);
        }

        this.insertItem = function(index,text)
        {
        	if ( index < 0 ) return false;
        	
        	if ( index > this._itemNames.length )
        	{
        		this.addItem(text);
        		return;
        	}
        	
        	var name = Eco.getUniqueId();
        	var comps = this.makeButton(name, text);
        	
        	Eco.array.insertAt(this._itemNames, index, name);
        	Eco.array.insertAt(this._itemComps, index, comps);
        	
        	this.setItemIndex(index);
        }

        this.removeItem = function(index)
        {
        	if ( index < 0 || index > this._itemNames.length ) return false;
        	
        	var curItemName = this._itemNames[this.itemIndex];
        	
        	var comp;
        	var comps = this._itemComps[index];
        	var itemName = comps[0]._itemName;
        	
        	comp = this.removeChild(comps[0].name);
        	comp.destroy();
        	comp = null;
        	
        	comp = this.removeChild(comps[1].name);
        	comp.destroy();
        	comp = null;
        	
        	Eco.array.removeAt(this._itemNames, index);
        	Eco.array.removeAt(this._itemComps, index);
        	
        	var history = this._itemNameHistory;
        	for (var i=history.length-1; i>=0; i--)
        	{
        		if ( history[i] == itemName )
        		{
        			Eco.array.removeAt(history, i);
        		}
        	}
        	
        	var nextIndex = -1;
        	if ( this.itemIndex == index )
        	{
        		var prevItemName = "";
        		
        		if ( history.length > 0 )
        		{
        			prevItemName = history[history.length-1];
        		}
        		
        		if ( !Eco.isEmpty(prevItemName) )
        		{
        			var itemNames = this._itemNames;
        			for (var i=0,len=itemNames.length; i<len; i++)
        			{
        				if ( itemNames[i] == prevItemName )
        				{
        					nextIndex = i;
        				}
        			}
        		}
        	}
        	else
        	{
        		nextIndex = Eco.array.indexOf(this._itemNames, curItemName);
        	}
        	
        	if ( nextIndex == this.itemIndex )
        	{
        		this.arrangeItem();
        	}
        	else
        	{
        		this.setItemIndex(nextIndex);
        	}
        	
        	return nextIndex;	
        }

        this.makeButton = function(name,text)
        {
        	var comps = [];
        	var btn = new Button();
        	btn.init("btn_"+name, "absolute", 0, 0, 10, 41);
        	btn.set_cssclass("TF_btn_MDI");
        	btn.set_text(text);
        	this.addChild(btn.name, btn);
        	btn.set_visible(false);
        	btn.setSelectStatus(false);
        	btn.addEventHandler("onclick", this.onButtonClick, this);
        	btn.show();
        	btn._itemName = name;
        	
        	var size = Eco.XComp.PositionSize.getTextSize(btn);		
        	btn.set_width(size[0] + 60);
        	
        	comps.push(btn);
        	
        	btn = new Button();
        	btn.init("btn_close_"+name, "absolute", 0, 0, 17, 17);	
        	btn.set_cssclass("TF_btn_MDIClose");
        	this.addChild(btn.name, btn);
        	btn.set_visible(false);
        	btn.setSelectStatus(false);
        	btn.addEventHandler("onclick", this.onCloseButtonClick, this);
        	btn.show();
        	btn._itemName = name;
        	
        	comps.push(btn);
        	
        	return comps;
        }

        this.onButtonClick = function(obj,e)
        {
        	var index = Eco.array.indexOf(this._itemNames, obj._itemName);
        	var preIdx = this.itemIndex;
        	
        	if ( index == preIdx ) return;
        	
        	this.setItemIndex(index);

        	var scope = this._itemChangeCallBackScope;
        	var func = this._itemChangeCallBack;
        	
        	if ( scope && func )
        	{
        		func.call(scope || this.parent, obj.text, preIdx, index);
        	}
        }

        this.onCloseButtonClick = function(obj,e)
        {
        	var index = Eco.array.indexOf(this._itemNames, obj._itemName);
        	
        	var nextIndex = this.removeItem(index);
        	
        	var scope = this._itemCloseCallBackScope;
        	var func = this._itemCloseCallBack;
        	
        	if ( scope && func )
        	{
        		func.call(scope || this.parent, obj.text, index, nextIndex);
        	}	
        }

        this.setItemIndex = function(index)
        {
        	if ( this.itemIndex != index )
        	{
        		if ( index == -1 )
        		{
        			var comps = this._itemComps;
        			if ( comps.length > 0 )
        			{
        				for (var i=0,len=comps.length; i<len; i++)
        				{
        					comps[i][0].setSelectStatus(false);
        				}
        			}
        			else
        			{
        				this.itemIndex = index;
        			}
        			return;
        		}
        		
        		var itemName = this._itemNames[index];
        		this._itemNameHistory.push(itemName);
        		this.itemIndex = index;
        		this.arrangeItem();
        	}
        }

        this.arrangeItem = function()
        {
        	var gap = this._itemGap;
        	var thisWidth = this.getOffsetWidth();
        	var itemWidth = [];
        	var w, width = 0;
        	var itemComps = this._itemComps;
        	var itemCnt = itemComps.length;
        	var showSpin = false;
        		
        	for (var i=0; i<itemCnt; i++)
        	{
        		w = itemComps[i][0].getOffsetWidth();
        		itemWidth.push(w);
        		
        		width += w;
        		if ( i < itemCnt-1 )
        		{
        			width += gap;
        		}
        		if ( width > thisWidth )
        		{
        			showSpin = true;
        		}
        	}
        	
        	if ( showSpin )
        	{
        		var itemIndex = this.itemIndex;
        		var btnAreaWidth = thisWidth - (thisWidth - this.btn_prev.getOffsetLeft());		
        		
        		var start = 0;
        		var end = itemIndex;
        		var w = 0;
        		for (var i=itemIndex; i>-1; i--)
        		{
        			w += itemWidth[i];

        			if ( w > btnAreaWidth )
        			{
        				start = i+1;
        				break;
        			}
        			
        			w += gap;
        		}
        		
        		for (var i=(end+1); i<itemCnt; i++)
        		{
        			w += itemWidth[i];
        			if ( w > btnAreaWidth )
        			{
        				end = i-1;
        				break;
        			}	
        			w += gap;
        		}
        		
        		this.btn_prev.set_visible(true);
        		this.btn_next.set_visible(true);

        		this.drawItem(start, end);
        	}
        	else
        	{	
        		this.drawItem(0, itemComps.length-1);
        		
        		this.btn_prev.set_visible(false);
        		this.btn_next.set_visible(false);		
        	}
        }

        this.drawItem = function(start,end)
        {
        	this._itemStartIndex = start;
        	this._itemEndIndex = end;
        	
        	var gap = this._itemGap;
        	var comp, comp2;
        	var x = 0, y = 0;
        	var x2 = 0, y2 = 0;
        	var itemComps = this._itemComps;
        	var itemCnt = itemComps.length;
        	var itemIndex = this.itemIndex;
        	
        	for (var i=0; i<itemCnt; i++)
        	{
        		comp = itemComps[i][0];
        		comp2 = itemComps[i][1];
        		
        		if ( i < start || i > end )		
        		{
        			comp.set_visible(false);
        			comp2.set_visible(false);
        			continue;
        		}
        		
        		comp.move(x, y);
        		
        		x2 = x + (comp.getOffsetWidth() - comp2.getOffsetWidth()) - 10;
        		y2 = y + Math.round((comp.getOffsetHeight() - comp2.getOffsetHeight())/2);
        		
        		comp2.move(x2, y2);	
        		
        		x += comp.getOffsetWidth() + gap;
        					
        		comp.set_visible(true);
        		comp2.set_visible(true);

        		comp.setSelectStatus((i == itemIndex));
        	}
        	
        	if ( start > 0 )
        	{
        		this.btn_prev.set_enable(true);
        	}
        	else
        	{
        		this.btn_prev.set_enable(false);
        	}
        	
        	if ( end < itemCnt - 1 )
        	{
        		this.btn_next.set_enable(true);
        	}
        	else
        	{
        		this.btn_next.set_enable(true);
        		this.btn_next.set_enable(false);
        	}
        }

        this.btn_prev_onclick = function(obj,e)
        {
        	var itemStartIndex = this._itemStartIndex;
        	if ( itemStartIndex > 0 )
        	{
        		var thisWidth = this.getOffsetWidth();
        		var btnAreaWidth = thisWidth - (thisWidth - this.btn_prev.getOffsetLeft());	
        		var itemComps = this._itemComps;
        		var itemCnt = itemComps.length;
        		
        		var start = itemStartIndex - 1;
        		var end = itemCnt - 1;
        		var gap = this._itemGap;
        		var width = 0;
        		for (var i=start; i<itemCnt; i++)
        		{
        			width += itemComps[i][0].getOffsetWidth();
        			
        			if ( width > btnAreaWidth )
        			{
        				end = i - 1;
        				break;
        			}
        			if ( i < itemCnt-1 )
        			{
        				width += gap;
        			}
        		}
        		
        		this.drawItem(start, end);		
        	}
        }

        this.btn_next_onclick = function(obj,e)
        {
        	var itemEndIndex = this._itemEndIndex;
        	if ( itemEndIndex < this._itemNames.length -1 )
        	{
        		var thisWidth = this.getOffsetWidth();
        		var btnAreaWidth = thisWidth - (thisWidth - this.btn_prev.getOffsetLeft());	
        		var itemComps = this._itemComps;
        		var itemCnt = itemComps.length;
        		
        		var start = 0;
        		var end = itemEndIndex + 1;
        		var gap = this._itemGap;
        		var width = 0;

        		for (var i=end; i>-1; i--)
        		{
        			width += itemComps[i][0].getOffsetWidth();

        			if ( width > btnAreaWidth )
        			{
        				start = i+1;
        				break;
        			}
        			
        			width += gap;
        		}
        		
        		for (var i=(end+1); i<itemCnt; i++)
        		{
        			width += itemComps[i][0].getOffsetWidth();
        			if ( width > btnAreaWidth )
        			{
        				end = i-1;
        				break;
        			}
        			width += gap;
        		}
        		
        		this.drawItem(start, end);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.titleButton_onload, this);
            this.addEventHandler("onsize", this.titleButton_onsize, this);
            this.btn_prev.addEventHandler("onclick", this.btn_prev_onclick, this);
            this.btn_next.addEventHandler("onclick", this.btn_next_onclick, this);

        };

        this.loadIncludeScript("titleButton.xfdl");

       
    };
}
)();
