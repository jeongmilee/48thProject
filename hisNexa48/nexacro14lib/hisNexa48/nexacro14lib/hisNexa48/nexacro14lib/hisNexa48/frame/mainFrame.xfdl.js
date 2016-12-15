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
                this.set_name("mainFrame");
                this.set_classname("mainFrame");
                this.set_titletext("mainFrame");
                this._setFormPosition(0,0,1250,774);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 774, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("mainFrame");
            		p.set_titletext("mainFrame");

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

        this.loadIncludeScript("mainFrame.xfdl");

       
    };
}
)();
