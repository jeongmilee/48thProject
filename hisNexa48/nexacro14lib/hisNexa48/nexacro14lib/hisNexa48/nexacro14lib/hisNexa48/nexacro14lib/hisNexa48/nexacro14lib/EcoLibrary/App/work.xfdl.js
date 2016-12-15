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
                this.set_name("work");
                this.set_classname("work");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_sample", "absolute", "0", "50", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_cssclass("WF_div_View");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "20", "16", "984", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("WF_sta_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_doc", "absolute", "848", "13", "156", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Document");
            obj.set_cssclass("WF_btn_Help");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("work");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("work.xfdl", function() {

        this.work_onload = function(obj,e)
        {
        	var namespace = this.getOwnerFrame()._namespace;		
        	if ( namespace )
        	{
        		this.st_title.set_text(namespace);
        		
        		var idx = namespace.lastIndexOf(".")+1;		
        		var sampleFileName = namespace.substr(idx) + ".xfdl";
        		
        		this.div_sample.set_async(false);
        		this.div_sample.set_url("Sample::"+sampleFileName);
        		
        		// 하단 공백 표시를 위함.
        		var max = 0;
        		var bottom;
        		var comps = this.div_sample.components;
        		for ( var i=0,len=comps.length; i<len; i++)
        		{
        			bottom = comps[i].getOffsetBottom();
        			max = Math.max(max, bottom);
        		}
        		
        		var comp = new Static();
        		comp.init("st_bottom", "absolute", 0, max+20, 1, 1);
        		comp.style.set_background("transparent");
        		comp.style.set_border("0 none");
        		this.div_sample.addChild(comp.name, comp);
        		comp.show();
        		
        		this.div_sample.resetScroll();
        	}
        }

        this.btn_doc_onclick = function(obj,e)
        {
        	var docFileName = this.getOwnerFrame()._namespace;
        	if ( docFileName )
        	{
        		var ds = application.mainframe.HFrameSet.menuFrame.form.ds_menu;		
        		var diffName = ds.lookup("namespace", docFileName, "docFileName");
        		
        		if ( !Eco.isEmpty(diffName) )
        		{
        			docFileName = diffName;
        		}
        		
        		var docUrl = this._getRefFormBaseUrl();
        		docUrl = docUrl.replace("/App/", "/Doc/");
        		docUrl = docUrl + docFileName + ".html";
        		
        		system.execBrowser(docUrl);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.work_onload, this);
            this.btn_doc.addEventHandler("onclick", this.btn_doc_onclick, this);

        };

        this.loadIncludeScript("work.xfdl");

       
    };
}
)();
