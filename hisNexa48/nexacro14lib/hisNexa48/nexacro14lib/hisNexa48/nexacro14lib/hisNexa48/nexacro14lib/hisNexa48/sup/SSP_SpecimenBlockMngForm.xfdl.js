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
                this.set_name("SSE_SpecimenBlockMngForm");
                this.set_classname("SSE_SpecimenBlockMngForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "23", "24", null, "40", "700", null, this);
            obj.set_taborder("0");
            obj.set_text("검체블록관리");
            obj.style.set_font("bold 20 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.34%", "80", null, "33", "88.87%", null, this);
            obj.set_taborder("1");
            obj.set_text("검체번호");
            obj.style.set_background("floralwhite");
            obj.style.set_border("2 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "11.72%", "80", null, "33", "78.52%", null, this);
            obj.set_taborder("2");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "22.17%", "80", null, "33", "73.44%", null, this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.34%", "136", null, "572", "2.15%", null, this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"134\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"검체번호\"/><Cell col=\"1\" text=\"검체블록코드\"/><Cell col=\"2\" text=\"제작일\"/><Cell col=\"3\" text=\"제작시간\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"환자번호\"/><Cell col=\"6\" text=\"환자명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "90.92%", "720", null, "32", "2.25%", null, this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "83.11%", "720", null, "32", "10.06%", null, this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "75.29%", "720", null, "32", "17.87%", null, this);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "90.92%", "80", null, "33", "2.25%", null, this);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SSE_SpecimenBlockMngForm");
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

        this.loadIncludeScript("SSP_SpecimenBlockMngForm.xfdl");

       
    };
}
)();
