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
                this.set_name("bottomFrame");
                this.set_classname("bottomFrame");
                this.set_titletext("bottomFrame");
                this._setFormPosition(0,0,1250,40);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0%", "8", null, "28", "0.08%", null, this);
            obj.set_taborder("0");
            obj.set_text("서울병원정보시스템 2016@Seoulsoft All Right Reserved.");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 9 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 40, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("bottomFrame");
            		p.set_titletext("bottomFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("bottomFrame.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("bottomFrame.xfdl");

       
    };
}
)();
