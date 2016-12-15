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
                this.set_name("SSE_SpecimenBlockPopupForm");
                this.set_classname("SSE_SpecimenBlockPopupForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "23", "24", null, "40", "61", null, this);
            obj.set_taborder("0");
            obj.set_text("검체번호 검색");
            obj.style.set_font("bold 20 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "77.5%", "80", null, "33", "5.75%", null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "6%", "129", null, "352", "23", null, this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSE_SpecimenBlockPopupForm");
            		p.set_titletext("New Form");

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

        this.loadIncludeScript("SSP_SpecimenBlockPopupForm.xfdl");

       
    };
}
)();
