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
                this.set_name("main");
                this.set_classname("main");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("main");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("main.xfdl", function() {

        
        this.main_onload = function(obj,e)
        {
        	var x = 20;
        	var y = 50;
        	var gap = 20;
        	var w = 182;
        	var h = 182;
        	var col = 5;
        	var cssClass = "MF_btn_IconList";
        	
        	var curX = x;
        	var curY = y;
        	var ds = application.mainframe.HFrameSet.menuFrame.form.ds_menu;
        	var btn, name, namespace, background;
        	var c = 0;
        	
        	for (var i=0,len=ds.rowcount; i<len; i++)
        	{
        		namespace = ds.getColumn(i, "namespace");
        		
        		if ( Eco.isEmpty(namespace) ) continue;
        		
        		if ( c > 0 && c % col == 0 )
        		{
        			curX = x;
        			curY += h + gap;
        		}
        		
        		name = ds.getColumn(i, "name");
        		background = ds.getColumn(i, "mainIconBackground");
        		
        		btn = new Button();
        		btn.init("btn_icon_"+name, "absolute", curX, curY, w, h);
        		
        		btn.set_text(name);
        		btn.set_cssclass(cssClass);
        		btn.style.set_background(background);
        		btn.style.set_background_position("center middle");
        		
        		btn.addEventHandler("onclick", this.onButtonClick, this);
        		this.addChild(btn.name, btn);
        		btn.show();
        		
        		btn._namespace = namespace;
        		
        		curX += w + gap;
        		
        		c++;
        	}
        	
        	// 하단 공백 표시를 위함.
        	var comp = new Static();
        	comp.init("st_bottom", "absolute", 0, curY+h+20, 1, 1);
        	comp.style.set_background("red");
        	comp.style.set_border("0 none");
        	this.addChild(comp.name, comp);
        	comp.show();
        	
        	this.resetScroll();	
        }

        this.onButtonClick = function(obj,e)
        {
        	var namespace = obj._namespace;
        	
        	application.mainframe.HFrameSet.VFrameSet.topFrame.form.setTitle(namespace);	
        	application.mainframe.HFrameSet.menuFrame.form.showWork(namespace);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.main_onload, this);

        };

        this.loadIncludeScript("main.xfdl");

       
    };
}
)();
