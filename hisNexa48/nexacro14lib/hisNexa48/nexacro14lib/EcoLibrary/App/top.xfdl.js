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
                this.set_name("top");
                this.set_classname("top");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1280,70);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_cssclass("TF_sta_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home", "absolute", "20", "29", "52", "41", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("TF_btn_Home");
            this.addChild(obj.name, obj);

            obj = new Div("div_title", "absolute", "76", "29", null, "41", "0", null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            obj.set_url("App::titleButton.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1280, 70, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("top");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "App::titleButton.xfdl");
        };
        
        // User Script
        this.registerScript("top.xfdl", function() {

        this.namespaceList = [];

        this.top_onload = function(obj,e)
        {
        	this.showHome();
        	
        	this.div_title.itemChangeCallBack(this, this.titleChanged);
        	this.div_title.itemCloseCallBack(this, this.titleClosed);
        }

        this.btn_home_onclick = function(obj,e)
        {
        	this.showHome();
        }

        this.showHome = function()
        {
        	var frameSet = application.mainframe.HFrameSet.VFrameSet.FrameSet;	
        	var name = "homeFrame";
        	var frame = frameSet.frames[name];
        	
        	if ( frame )
        	{
        		frame.setFocus();
        	}
        	else
        	{
        		frame = new ChildFrame();
        		frame.init(name, "absolute", 0, 0, null, null, 0, 0);
        		frame.set_formurl("App::main.xfdl");
        		frame.set_showtitlebar(false);
        		frame.set_openstatus("maximize");
        		frameSet.addChild(name, frame);
        		frame.show();
        	}
        	
        	this.div_title.setItemIndex(-1);
        	this.btn_home.setSelectStatus(true);
        }

        this.setTitle = function(namespace)
        {
        	this.btn_home.setSelectStatus(false);
        	
        	var index = Eco.array.indexOf(this.namespaceList, namespace);
        	if ( index < 0 )
        	{
        		this.namespaceList.push(namespace);
        		
        		var idx = namespace.lastIndexOf(".")+1;
        		var title = namespace.substr(idx);
        		
        		this.div_title.addItem(title);
        	}
        	else
        	{
        		this.div_title.setItemIndex(index);
        	}
        }

        this.titleChanged = function(text,preindex,postindex)
        {
        	var namespace = this.namespaceList[postindex];
        	var menuFrame = application.mainframe.HFrameSet.menuFrame;
        	
        	menuFrame.form.showWork(namespace);
        }

        this.titleClosed = function(text,removeindex,nextindex)
        {
        	var namespace = this.namespaceList[removeindex];
        	var menuFrame = application.mainframe.HFrameSet.menuFrame;
        	
        	menuFrame.form.removeWork(namespace);
        	
        	Eco.array.removeAt(this.namespaceList, removeindex);
        	
        	if ( this.namespaceList.length == 0 )
        	{
        		this.btn_home.click();
        	}
        	else
        	{
        		namespace = this.namespaceList[nextindex];
        		
        		if ( namespace )
        		{
        			menuFrame.form.showWork(namespace);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.top_onload, this);
            this.btn_home.addEventHandler("onclick", this.btn_home_onclick, this);

        };

        this.loadIncludeScript("top.xfdl");
        this.loadPreloadList();
       
    };
}
)();
