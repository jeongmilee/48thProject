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
                this.set_name("comm_schedule");
                this.set_classname("comm_schedule");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,910,606);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_item", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_set", "absolute", "0", "0", null, "40", "0", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_cal", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_text("div_cal");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_daily", "absolute", "923", "29", "180", "258", null, null, this);
            obj.set_text("pdv_daily");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", null, "0", "30", "24", "0", null, this.pdv_daily);
            obj.set_taborder("0");
            obj.set_text("X");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_font("bold 10 Gulim");
            this.pdv_daily.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 40, this.div_set,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_set.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 180, 258, this.pdv_daily,
            	//-- Layout function
            	function(p) {
            		p.set_text("pdv_daily");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.pdv_daily.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 910, 606, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comm_schedule");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comm_schedule.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 샘플
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  
         * 04. 작성일   : 
         * 05. 작성자   : 
         * 06. 수정이력 : 
         ***********************************************************************************
         *     수정일     작성자   내용
         ***********************************************************************************
         *     
         **********************************************************************************/

        
        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/

        
        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/
        var _SUN_COLOR = "red";
        var _SAT_COLOR = "blue";
        var _DFT_COLOR = "black";

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         * @memberOf this
         */
        this.form_onload = function(obj,e)
        {
        	this.fn_init();
        }

        /**
         * form 초기화 함수(calendar 컴포넌트 동적생성)
         * @return 
         * @example
         * @memberOf this
         */
        this.fn_init = function()
        {
        	pComp = this.div_cal;	
        	
        	pComp.set_enableevent(false);
        	
        	var width = pComp.getOffsetWidth();
        	var height = pComp.getOffsetHeight();
        	var title_height = 40;
        	
        	//가로 7, 세로 6 분할
        	var comp_w = Math.round(width / 7);
        	var comp_h = Math.round((height - title_height) / 6);
        	
        	var comp_l = 0, comp_t = 0;
        	var comp_idx = 0;
        	
        	//요일 타이틀 생성
        	for(var i = 0; i < 7; i++)
        	{
        		this.createTitle(pComp, "stc_title_"+i, comp_l, comp_t, comp_w, title_height, i);
        		comp_l += comp_w - 1; // border 중복처리
        	}
        	
        	//달력 일자별로 div 생성
        	comp_l = 0;
        	comp_t = title_height - 1;
        	
        	for(var i = 0; i < 6; i++)
        	{
        		for(var j = 0; j < 7; j++)
        		{
        			this.createDay(pComp, "div_day_"+comp_idx, comp_l, comp_t, comp_w, comp_h, comp_idx);
        			comp_idx++;
        			comp_l += comp_w - 1;
        		}
        		comp_l = 0;
        		comp_t += comp_h - 1;
        	}
        	pComp.set_enableevent(true);
        }

        /**
         * form onsize event
         * @return 
         * @example
         * @memberOf this
         */
        this.form_onsize = function(obj,e)
        {
        	var pComp = this.div_cal;
        	
        	var width = pComp.getOffsetWidth();
        	var height = pComp.getOffsetHeight();
        	var title_height = 40;
        	
        	var floor = this.day_floor;
        	
        	//가로 7, 세로 6 분할
        	var comp_w = Math.round(width / 7);
        	var comp_h = Math.round((height - title_height) / floor);
        	var comp_l = 0, comp_t = 0;	
        	
        	//요일 타이틀 리사이즈
        	var comp;
        	for(var i = 0; i < 7; i++)
        	{
        		comp = pComp.components["stc_title_"+i];
        		comp.set_left(comp_l);
        		comp.set_top(comp_t);
        		comp.set_width(comp_w);
        		comp.set_height(title_height);
        		comp_l += comp_w - 1;
        	}
        	//달력 일자 div 리사이즈
        	comp_l = 0;
        	comp_t = title_height - 1;
        	var comp_idx = 0;
        	
        	for(var i = 0; i < 6; i++)
        	{
        		for(var j = 0; j < 7; j++)
        		{
        			comp = pComp.components["div_day_"+comp_idx];
        			
        			if(floor == i) comp.set_visible(false);
        			else comp.set_visible(true);
        			
        			comp.set_left(comp_l);
        			comp.set_top(comp_t);
        			comp.set_width(comp_w);
        			comp.set_height(comp_h);
        			comp_idx++;
        			comp_l += comp_w - 1;
        		}
        		comp_l = 0;
        		comp_t += comp_h - 1;
        	}
        }
        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        /**
         * 컴포넌트 초기화 함수(사용자 함수)
         * @return 
         * @example
         * @memberOf this
         */
        this.init = function(pThis,config,callback)
        {
        	this.pThis = pThis;
        	this.item_config = config;
        	this.callback = callback;
        }

        /**
         * 달력 날짜 설정 및 스케줄 생성(사용자함수)
         * @return 
         * @example
         * @memberOf this
         */
        this.draw = function(yyyymm,dsItem)
        {
        	var pComp = this.div_cal;
        	
        	//스케줄 데이타셋 복사
        	this.ds_item.copyData(dsItem);
        	
        	//달력 일자 및 스케줄 초기화
        	this.clear();
        	
        	if(yyyymm.length > 6) yyyymm = yyyymm.substring(0, 6);
        	
        	//일자 설정
        	//시작요일
        	var start_day = Eco.date.getDay(yyyymm+"01");
        	//마지막 날짜
        	var last_date = Eco.date.getLastDayOfMonth(yyyymm+"01");
        	
        	//달력이 몇단구성인지 저장
        	this.day_floor = parseInt((last_date + start_day - 1) / 7) + 1;
        	
        	for( i = 1, day = start_day ; i <= last_date ; i++ )
        	{
        		comp = pComp.components["div_day_"+day];
        		comp.div_day.stc_day.set_text(i);
        		comp.div_day.stc_day.set_visible(true);
        		day++;
        	}
        	
        	//스케줄내역 추가
        	this.set_items(yyyymm);
        	
        	this.form_onsize();
        }

        /**
         * 달력에 스케줄 내역 추가
         * @return 
         * @example
         * @memberOf this
         */
        this.set_items = function(yyyymm)
        {
        	//스케줄 정보 
        	var config = this.item_config;
        	
        	var datecolumn = config.datecolumn;
        	var subjectcolumn = config.subjectcolumn;
        	var keycolumn= config.keycolumn;
        	
        	this.ds_item.set_enableevent(false);
        	
        	//일자별 스케줄 내역 생성
        	var pComp = this.div_cal, comp;
        	var date, dd;
        	for(var i = 0; i < 42; i++)
        	{
        		comp = pComp.components["div_day_"+i];
        		dd = comp.div_day.stc_day.text;
        		if(!Eco.isEmpty(dd))
        		{
        			date = yyyymm + dd.padLeft(2, "0");
        			
        			this.ds_item.filter(datecolumn+"=='"+date+"'");
        			//trace(datecolumn+"=='"+date+"'" + " / rowcount = " +this.ds_item.rowcount); 
        			//item수 저장
        			comp.div_items._item_count = this.ds_item.rowcount;
        			
        			//확장버튼 보이기/숨기기
        			if(this.ds_item.rowcount > 0) 	comp.div_day.btn_ext.set_visible(true);
        			else 							comp.div_day.btn_ext.set_visible(false);
        			
        			//item생성
        			for(var j = 0; j < this.ds_item.rowcount; j++)
        			{				
        				this.createItem(comp.div_items, this.ds_item.getColumn(j, subjectcolumn), this.ds_item.getColumn(j, keycolumn), j);
        			}
        		}
        	}
        	this.ds_item.filter("");
        	this.ds_item.set_enableevent(true);
        }

        /**
         * 달력 일자 및 스케줄 초기화
         * @return 
         * @example
         * @memberOf this
         */
        this.clear = function()
        {
        	var pComp = this.div_cal, comp, div_day, idx, item;
        	for(var i = 0; i < 42; i++)
        	{
        		comp = pComp.components["div_day_"+i];
        		comp.div_day.stc_day.set_text("");
        		comp.div_day.stc_day.set_visible(false);
        		idx = i % 7;
        		if(idx == 0) 		comp.div_day.stc_day.style.set_color(_SUN_COLOR);
        		else if(idx == 6) 	comp.div_day.stc_day.style.set_color(_SAT_COLOR);
        		else 				comp.div_day.stc_day.style.set_color(_DFT_COLOR);
        		
        		comp.div_day.btn_ext.set_visible(false);
        		
        		//스케줄 내역 삭제
        		for(var j = comp.div_items.components.length - 1; j >= 0; j--)
        		{
        			item = comp.div_items.removeChild(comp.div_items.components[j].name);
        			item.destroy();
        			item = null;
        		}
        	}
        }
        /**
         * 달력요일 타이틀 생성
         * @return 
         * @example
         * @memberOf this
         */
        this.createTitle = function(pComp,id,left,top,width,height,idx)
        {
        	var stc_day = Iject.Form.getXComp(pComp, "Static", id, left, top, width, height);
        		stc_day.style.set_border("1 solid #E1E1E1");
        		stc_day.style.set_background("#FAFAFA");
        		stc_day.style.set_font("bold 10 gulim");
        		stc_day.style.set_align("center middle");
        		idx = idx % 7;
        		if(idx == 0) 		stc_day.style.set_color(_SUN_COLOR);
        		else if(idx == 6) 	stc_day.style.set_color(_SAT_COLOR);
        		else 				stc_day.style.set_color(_DFT_COLOR);		
        		
        		stc_day.set_text(Eco.date.weekName[idx]);
        }

        /**
         * 달력날짜생성
         * @return 
         * @example
         * @memberOf this
         */
        this.createDay = function(pComp,id,left,top,width,height,idx)
        {
        	var day_height = 20;
        	var list_height = height - day_height;
        	var item_height = 20, item_top = 5, item_offset = 5;
        	//일자 Div 생성
        	var div = Iject.Form.getXComp(pComp, "Div", id, left, top, width, height);
        		div.style.set_border("1 solid #E1E1E1");
        		div.set_scrollbars("none");
        	//상단 Div 생성(날짜 및 확장버튼)
        	var div_day = Iject.Form.getXComp(div, "Div", "div_day", 0, 0, null, day_height, 0, null);
        	//날짜 생성
        	var stc_day = Iject.Form.getXComp(div_day, "Static", "stc_day", 10, 0, 20, day_height);
        		stc_day.set_visible(false);
        		stc_day.style.set_font("bold 11 gulim");
        		idx = idx % 7;
        		if(idx == 0) 		stc_day.style.set_color(_SUN_COLOR);
        		else if(idx == 6) 	stc_day.style.set_color(_SAT_COLOR);
        		else 				stc_day.style.set_color(_DFT_COLOR);
        	//확장버튼 생성
        	var btn_ext = Iject.Form.getXComp(div_day, "Button", "btn_ext", null, 0, day_height, day_height, 5, null);
        		btn_ext.set_text("▼");
        		btn_ext.style.set_border("0 none");
        		btn_ext.style.set_background("#ffffff");
        		btn_ext.set_visible(false);
        		
        	//스케줄내역 Div 생성
        	var div_items = Iject.Form.getXComp(div, "Div", "div_items", 0, day_height, null, null, 0, 2);
        		div_items.set_scrollbars("none");	
        }

        /**
         * 스케줄 생성
         * @return 
         * @example
         * @memberOf this
         */
        this.createItem = function(pComp,subject,item_key,idx)
        {
        	var item_id = "stc_item_"+idx;
        	var item_l = 5, item_t = 2, item_h = 20, item_r = 5, item_margin = 2;
        	
        	item_t += (item_h+item_margin) * idx;
        	
        	item = Iject.Form.getXComp(pComp, "Static", item_id, item_l, item_t, null, item_h, item_r, null);
        	item._item_key = item_key;
        	item.set_text(subject);
        	item.style.set_border("1 solid #C2C2C2");
        	item.style.set_bordertype("round 3 3");
        	item.style.set_padding("0 5 0 5");
        	
        	//item 클릭시 key값 전달
        	item.addEventHandler("onclick", function(obj,e){	
        		var item_key = obj._item_key;
        		if(!Eco.isEmpty(this.callback))
        		{
        			this.callback.call(this.pThis, "click", item_key);
        		}
        	},  this);
        }

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.form_onsize, this);
            this.pdv_daily.btn_next.addEventHandler("onclick", this.month_move_onclick, this);

        };

        this.loadIncludeScript("comm_schedule.xfdl");

       
    };
}
)();
