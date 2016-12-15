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
                this.set_name("HM_ReportForm");
                this.set_classname("HM_ReportForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,552,796);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("main", "absolute", "1.09%", "57", null, "729", "1.63%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid indigo");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("AreaShp");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "0.96%", "7", "523", "714", null, null, this.main);
            obj.set_taborder("0");
            this.main.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", "552", "51", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8.33%", "-3", null, "51", "37.14%", null, this);
            obj.set_taborder("5");
            obj.set_text("인사기록카드");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 729, this.main,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid indigo");
            		p.style.set_bordertype("round 5 5");
            		p.set_cssclass("AreaShp");

            	}
            );
            this.main.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 552, 796, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_ReportForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_ReportForm.xfdl", "scripts::commonTran.xjs");
        this.addIncludeScript("HM_ReportForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HM_ReportForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("HM_ReportForm.xfdl", "scripts::commonHrsPopup.xjs");
        this.addIncludeScript("HM_ReportForm.xfdl", "scripts::commonDrPopup.xjs");
        this.registerScript("HM_ReportForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사기록카드                                                    *
        *                                                                   *
        * @Path		    인사기록카드 출력                                 *
        * @Description  인사기록카드 팝업 화면                           *
        * @Author		김재현  				                            *
        * 								                                    *
        * Created on 2016. 2. 04.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTran.xjs";
        //include "scripts::commonScripts.xjs";  
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonHrsPopup.xjs";
        //include "scripts::commonDrPopup.xjs";

        
        this.HM_ReportForm_oninit = function(obj,e)
        {

        alert(this.parent.selectEmp);
        //this.main.WebBrowser00.set_url("http://192.168.1.135/his/hrs/emp/findEmpReport.do?empCode="+this.parent.selectEmp);
        this.main.WebBrowser00.set_url("http://192.168.1.3:8282/his/hrs/emp/findEmpReport.do?empCode="+this.parent.selectEmp);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.HM_ReportForm_oninit, this);

        };

        this.loadIncludeScript("HM_ReportForm.xfdl");

       
    };
}
)();
