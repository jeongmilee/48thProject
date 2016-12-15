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
                this.set_name("bottom");
                this.set_classname("bottom");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1004,23);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", null, "23", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("ⓒ Copyright 2015 Nexaweb. All right reserved");
            obj.style.set_border("1 solid #ccccccff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_padding("0 0 1 0");
            obj.style.set_align("center middle");
            obj.style.set_font("antialias 7 Verdana, antialias 7 malgun gothic");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1004, 23, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bottom");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("bottom.xfdl");

       
    };
}
)();
