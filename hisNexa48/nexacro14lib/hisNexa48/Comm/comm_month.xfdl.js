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
                this.set_name("comm_month");
                this.set_classname("comm_periodCalendar");
                this.set_titletext("월달력");
                this._setFormPosition(0,0,172,29);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj._setContents("<ColumnInfo><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_month", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1개월</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3개월</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">6개월</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">1년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new PopupDiv("pdv_calendar", "absolute", "0", "31", "195", "173", null, null, this);
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bdbdbdff");
            this.addChild(obj.name, obj);
            obj = new Button("btn_prev", "absolute", "10", "10", "30", "30", null, null, this.pdv_calendar);
            obj.set_taborder("0");
            obj.set_text("◀");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", null, "10", "30", "30", "10", null, this.pdv_calendar);
            obj.set_taborder("1");
            obj.set_text("▶");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Static("stc_year", "absolute", "60", "10", null, "30", "60", null, this.pdv_calendar);
            obj.set_taborder("2");
            obj.set_text("stc_year");
            obj.style.set_align("center middle");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_1", "absolute", "10", "50", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("3");
            obj.set_text("1");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_2", "absolute", "55", "50", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("4");
            obj.set_text("2");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_3", "absolute", "100", "50", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("5");
            obj.set_text("3");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_4", "absolute", "145", "50", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("6");
            obj.set_text("4");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_5", "absolute", "10", "90", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("7");
            obj.set_text("5");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_6", "absolute", "55", "90", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("8");
            obj.set_text("6");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_7", "absolute", "100", "90", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("9");
            obj.set_text("7");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_8", "absolute", "145", "90", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("10");
            obj.set_text("8");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_9", "absolute", "10", "130", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("11");
            obj.set_text("9");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_10", "absolute", "55", "130", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("12");
            obj.set_text("10");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_11", "absolute", "100", "130", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("13");
            obj.set_text("11");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Button("btn_12", "absolute", "145", "130", "38", "30", null, null, this.pdv_calendar);
            obj.set_taborder("14");
            obj.set_text("12");
            this.pdv_calendar.addChild(obj.name, obj);
            obj = new Edit("edt_year", "absolute", "52", "10", null, "30", "50", null, this.pdv_calendar);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.style.set_border("0 none #bdbdbdff");
            obj.style.set_align("center middle");
            this.pdv_calendar.addChild(obj.name, obj);

            obj = new Button("btn_prev", "absolute", "0", "0", "30", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("◀");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next", "absolute", null, "0", "30", "30", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("▶");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_month", "absolute", "30", "0", null, null, "30", "0", this);
            obj.set_taborder("3");
            obj.set_text("2016년 11월");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 195, 173, this.pdv_calendar,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #bdbdbdff");

            	}
            );
            this.pdv_calendar.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 172, 29, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comm_periodCalendar");
            		p.set_titletext("월달력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comm_month.xfdl", function() {
        /**************************************************************************************************
         * 01. 업무구분				: 
         * 02. 화 면 명				: 
         * 03. 화면설명				:  
         * 04. 관련 화면 및 서비스	: 
         * 05. 관련 테이블명			: 
         * 06. 작 성 자				: 
         * 07. 작 성 일				: 
         * 08. 수정이력
         **************************************************************************************************
         *    수정일            이름        사유
         **************************************************************************************************
         *    
         *************************************************************************************************/

        //-------------------------------------------------------------------------------------------------
        // 1. 공통함수 include
        //-------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // Form 전역변수 선언
        //-------------------------------------------------------------------------------------------------
        this.yyyymm 	= null;

        this.pThis 	= null;
        this.fCallback 	= null;
        //-------------------------------------------------------------------------------------------------
        // 2. Form 함수 정의
        //-------------------------------------------------------------------------------------------------
        this.form_onload = function(obj,e)
        {
        	if(obj.scrollbars != "none") obj.set_scrollbars("none");
        }

        //-------------------------------------------------------------------------------------------------
        // 3. Transaction 함수 정의
        //-------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // 4. User 함수 정의
        //-------------------------------------------------------------------------------------------------

        //콜백이 필요한경우 설정필요함
        this.init = function(form,config,fCallback)
        {	
        	this.pThis 	= form;
        	this.fCallback 	= fCallback;
        	
        	if(!Eco.isEmpty(config.yyyymm)) this.set_yyyymm(config.yyyymm);
        }

        this.clear = function()
        {
        	this.cal_month.set_value(undefined);
        	this.yyyymm = null;
        }

        this.validate = function()
        {
        	return true;
        }

        this.set_yyyymm = function(date)
        {	
        	if(typeof(date) == "object"){
        		this.yyyymm = Eco.date.getMaskFormatString(date, "yyyyMM");
        	}else{
        		this.yyyymm = date.substring(0, 6);
        	}
        	
        	this.stc_month.set_text(this.getMonthText(this.yyyymm));
        	
        	this._set_yyyymm(this.yyyymm);
        }

        this.getMonthText = function(yyyymm)
        {
        	var year = yyyymm.substring(0, 4);
        	var month = yyyymm.substring(4, 6);
        	
        	return year + "년 "+month+"월";
        }

        this.set_readonly = function(b)
        {
        	this.cal_month.set_readonly(b);
        }

        this.set_cssclass = function(css)
        {
        	this.cal_month.set_cssclass(css);
        }

        //-------------------------------------------------------------------------------------------------
        // 5. Event 함수 정의
        //------------------------------------------------------------------------------------------------
        this._set_yyyymm = function(yyyymm)
        {
        	var year = yyyymm.substring(0, 4);
        	var month = parseInt(yyyymm.substring(4, 6));

        	this.pdv_calendar.edt_year.set_value(year);
        	this.pdv_calendar.components["btn_"+month].setFocus();
        }

        //PopupDiv오픈
        this.fn_dropdown = function()
        {	
        	var p_width = this.pdv_calendar.getOffsetWidth();
        	var f_width = this.getOffsetWidth();
        	
        	var offset = parseInt((f_width - p_width) / 2);
        	
        	this.pdv_calendar.trackPopupByComponent(this, offset, this.getOffsetHeight()+2);
        	
        	return;
        	
        	if(!Eco.isEmpty(this.fCallback))
        	{
        		this.fCallback.call(this.pThis, this.yyyymm, "dropdown");
        	}
        }

        //팝업닫힐 경우
        this.fn_close = function()
        {
        	//callback이 존재한경우 콜백함수호출
        	if(!Eco.isEmpty(this.fCallback))
        	{
        		this.fCallback.call(this.pThis, this.yyyymm, "closeup");
        	}
        }

        this.year_btn_onclick = function(obj,e)
        {
        	var year = parseInt(this.pdv_calendar.edt_year.value);
        	if(obj.name == "btn_prev")
        	{
        		year -= 1;
        	}
        	else if(obj.name == "btn_next")
        	{
        		year += 1;
        	}
        	this.pdv_calendar.edt_year.set_value(year);
        }

        this.month_btn_onclick = function(obj,e)
        {
        	var month = obj.name.replace("btn_", "").padLeft(2, "0");

        	this.yyyymm = this.pdv_calendar.edt_year.value + month;
        	this.set_yyyymm(this.yyyymm);
        	//this.cal_month.set_value(this.yyyymm);
        	this.pdv_calendar.closePopup();
        }

        this.pdv_calendar_oncloseup = function(obj,e)
        {
        	this.fn_close();
        }

        this.stc_month_onclick = function(obj,e)
        {
        	this.fn_dropdown();
        }

        this.month_move_onclick = function(obj,e)
        {
        	var yyyymm = this.yyyymm;
        	var year = parseInt(yyyymm.substring(0, 4));
        	var month = parseInt(yyyymm.substring(4, 6));

        	if(obj.name == "btn_prev")
        	{
        		month -= 1;
        	}
        	else if(obj.name == "btn_next")
        	{
        		month += 1;
        	}
        	if(month == 0)
        	{
        		year -= 1;
        		month = 12;
        	}
        	else if(month == 13)
        	{
        		year += 1;
        		month = 1;
        	}
        	this.yyyymm = year + month.toString().padLeft(2, "0");
        	this.set_yyyymm(this.yyyymm);
        	
        	if(!Eco.isEmpty(this.fCallback))
        	{
        		this.fCallback.call(this.pThis, this.yyyymm, "onchanged");
        	}
        }

        
        // this.cal_month_oncloseup = function(obj:Calendar, e:nexacro.CalendarCloseUpEventInfo)
        // {
        // 	
        // }
        // 
        // this.cal_month_ondropdown = function(obj:Calendar, e:nexacro.EventInfo)
        // {
        // 	this.fn_dropdown();
        // 	return false;	
        // }
        // 
        // this.cal_month_onchanged = function(obj:Calendar, e:nexacro.ChangeEventInfo)
        // {
        // 	this.yyyymm = Eco.date.getMaskFormatString(e.postvalue, "yyyyMM");
        // }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_date.addEventHandler("cancolumnchange", this.ds_date_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.pdv_calendar.addEventHandler("oncloseup", this.pdv_calendar_oncloseup, this);
            this.pdv_calendar.btn_prev.addEventHandler("onclick", this.year_btn_onclick, this);
            this.pdv_calendar.btn_next.addEventHandler("onclick", this.year_btn_onclick, this);
            this.pdv_calendar.btn_1.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_2.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_3.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_4.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_5.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_6.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_7.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_8.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_9.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_10.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_11.addEventHandler("onclick", this.month_btn_onclick, this);
            this.pdv_calendar.btn_12.addEventHandler("onclick", this.month_btn_onclick, this);
            this.btn_prev.addEventHandler("onclick", this.month_move_onclick, this);
            this.btn_next.addEventHandler("onclick", this.month_move_onclick, this);
            this.stc_month.addEventHandler("onclick", this.stc_month_onclick, this);

        };

        this.loadIncludeScript("comm_month.xfdl");

       
    };
}
)();
