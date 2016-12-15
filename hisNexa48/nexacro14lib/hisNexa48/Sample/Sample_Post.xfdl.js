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
                this.set_name("Sample_Post");
                this.set_classname("Sample_Post");
                this.set_titletext("Send Post");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "12", "97", "120", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Send Post");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "156", "99", "436", "189", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("2");
            obj.set_text("@ Webbrowser Post 전송");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Post");
            		p.set_titletext("Send Post");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample_Post.xfdl", "Lib::WebbrowserSendPost.xjs");
        this.registerScript("Sample_Post.xfdl", function() {
        //include "Lib::WebbrowserSendPost.xjs"

        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_sendPost(this, this.WebBrowser00, "http://localhost:9503/postdata_test.jsp", "aa=1111&bb=2222");	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample_Post.xfdl");

       
    };
}
)();
