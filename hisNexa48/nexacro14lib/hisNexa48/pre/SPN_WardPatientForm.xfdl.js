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
                this.set_name("SPN_WardPatientForm");
                this.set_classname("SPN_WardPatientForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWardPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"WARD\" type=\"STRING\" size=\"256\"/><Column id=\"HROOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HROOM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DOCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PATIENT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "40.63%", "72", null, "680", "0.59%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.5%", "2", null, "45", "0.5%", null, this.Div01);
            obj.set_taborder("0");
            obj.set_text("   가나다라마바사아자차타카파하늘이 보우하사");
            obj.style.set_background("#78909cff");
            obj.style.set_color("white");
            obj.style.set_font("10 Dotum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "1.17%", "72", null, "680", "59.77%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_gradation("linear 0,0 black 100,100 black");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.5%", "2", null, "45", "0.5%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("   병동환자조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("white");
            obj.style.set_font("10 Dotum");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "56.03%", "66", "39", "39", null, null, this.Div00);
            obj.set_taborder("1");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_bordertype("round 3 3");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "102.26%", "7", null, "45", "-100.75%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("   병동환자조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("white");
            obj.style.set_font("10 Dotum");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("wardPatientGrid", "absolute", "1.86%", "204", null, "540", "60.55%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWardPatient");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background:#b0bec5ff;\" text=\"WARD\"/><Cell col=\"1\" style=\"background:#b0bec5ff;\" text=\"HROOM_NO\"/><Cell col=\"2\" style=\"background:#b0bec5ff;\" text=\"HROOM\"/><Cell col=\"3\" style=\"background:#b0bec5ff;\" text=\"DEPT\"/><Cell col=\"4\" style=\"background:#b0bec5ff;\" text=\"DOCT_NM\"/><Cell col=\"5\" style=\"background:#b0bec5ff;\" text=\"PATIENT_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:WARD\"/><Cell col=\"1\" text=\"bind:HROOM_NO\"/><Cell col=\"2\" text=\"bind:HROOM\"/><Cell col=\"3\" text=\"bind:DEPT\"/><Cell col=\"4\" text=\"bind:DOCT_NM\"/><Cell col=\"5\" text=\"bind:PATIENT_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"background:#b0bec5ff;\" text=\"총인원\"/><Cell col=\"5\" style=\"background:#b0bec5ff;\" expr=\"expr:dataset.getrowcount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "51.07%", "204", null, "540", "1.56%", null, this);
            obj.set_taborder("2");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("WardCombo", "absolute", "8.79%", "139", null, "39", "77.64%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Static("Static00", "absolute", "2.05%", "139", null, "39", "91.99%", null, this);
            obj.set_taborder("5");
            obj.set_text("병동");
            obj.style.set_background("#b9bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "41.5%", "284", null, "460", "49.8%", null, this);
            obj.set_taborder("8");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "-1.07%", "9", null, "59", "-0.68%", null, this);
            obj.set_taborder("10");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            obj.style.set_font("11 Dotum");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.28%", "5", null, "45", "82.41%", null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("병동환자관리");
            obj.style.set_align("center middle");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 680, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 680, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div00");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_gradation("linear 0,0 black 100,100 black");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1006, 45, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_align("left middle");
            		p.style.set_background("transparent URL('img::titleBar2.jpg')");
            		p.style.set_font("11 Dotum");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SPN_WardPatientForm");
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

        this.loadIncludeScript("SPN_WardPatientForm.xfdl");

       
    };
}
)();
