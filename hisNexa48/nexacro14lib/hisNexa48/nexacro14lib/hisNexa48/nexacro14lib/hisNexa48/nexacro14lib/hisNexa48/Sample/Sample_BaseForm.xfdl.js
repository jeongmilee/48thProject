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
                this.set_name("Sample_BaseForm");
                this.set_classname("Sample_BaseForm");
                this.set_titletext("기본화면");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"in_val1\" type=\"STRING\" size=\"100\"/><Column id=\"in_val2\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"in_val2\"/><Col id=\"in_val1\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUP\" type=\"STRING\" size=\"256\"/><Column id=\"IPSA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IMG\">http://localhost:9503/nexa/img/icecream.png</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUP\" type=\"STRING\" size=\"256\"/><Column id=\"IPSA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "113", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("div_search");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "15", "104", "42", "124", null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "24", "20", "40", "29", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("사번");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_sabun", "absolute", "65", "20", "103", "29", null, null, this.div_search);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "267", "20", "118", "29", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            obj = new Div("xdiv_period", "absolute", "66", "67", "316", "29", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("Comm::comm_period.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("xdiv_month", "absolute", "464", "64", "137", "29", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("Comm::comm_month.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("xdiv_combo", "absolute", "464", "20", "200", "29", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("xdiv_combo");
            obj.set_applystyletype("apply");
            obj.set_url("Comm::comm_multicombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "24", "63", "43", "36", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("기간");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "200", "20", "56", "29", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("유형");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "400", "20", "56", "29", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("유형2");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "400", "64", "56", "29", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("년월");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "15", "104", "42", "12", null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_body", "absolute", "0", "122", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_text("div_body");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "42", null, null, "0", "0", this.div_body);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"83\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"75\"/></Rows><Band id=\"head\"><Cell text=\"SABUN\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"JIKGUP\"/><Cell col=\"4\" text=\"IPSA_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SABUN\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:DEPT\" expandshow=\"hide\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:JIKGUP\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:IPSA_DATE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:SALARY\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" text=\"팝업\"/><Cell col=\"7\" displaytype=\"button\" edittype=\"button\" text=\"링크\"/><Cell col=\"8\" displaytype=\"image\" style=\"background:EXPR(comp.parent.parent.get_image(currow));background2:EXPR(comp.parent.parent.get_image(currow));\"/></Band></Format></Formats>");
            this.div_body.addChild(obj.name, obj);
            obj = new Button("btn_ExcelExport", "absolute", null, "11", "76", "23", "84", null, this.div_body);
            obj.set_taborder("1");
            obj.set_text("엑셀Export");
            this.div_body.addChild(obj.name, obj);
            obj = new Button("btn_ExcelImport", "absolute", null, "10", "74", "23", "1", null, this.div_body);
            obj.set_taborder("2");
            obj.set_text("엑셀Import");
            this.div_body.addChild(obj.name, obj);
            obj = new Button("btn_grd_add", "absolute", null, "15", "66", "12", "230", null, this.div_body);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.div_body.addChild(obj.name, obj);
            obj = new Button("btn_grd_del", "absolute", null, "15", "67", "12", "167", null, this.div_body);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.div_body.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 113, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("div_search");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 646, this.div_body,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("div_body");

            	}
            );
            this.div_body.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_BaseForm");
            		p.set_titletext("기본화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Comm::comm_period.xfdl");
            this._addPreloadList("fdl", "Comm::comm_month.xfdl");
            this._addPreloadList("fdl", "Comm::comm_multicombo.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_BaseForm.xfdl", function() {
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

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.form_onload = function(obj,e)
        {
        	//기본 공통  함수 초기화
        	Iject.formOnload(obj);
        	
        	//오픈 시 전달된 파라미터 받기
        	//팝업이 아닌 경우
        	if(Iject.Util.isForm(obj) == "M")
        	{
        		var args = Iject.Mdi.get_argument(obj);
        	}
        	//팝업인경우
        	else
        	{
        		trace(" this.parent.args : " +this.parent.args);
        	}
        	this.fn_init();
        }

        /**
         * form 초기화 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_init = function()
        {
        	//공통코드 설정
            var config = [
        		{group:"TYPE", dataset:"ds_type00", component:this.div_search.Combo00, selecttype:"A"}
        		,{group:"UNIT", dataset:"ds_unit"}
            ];
            
        	Iject.Form.setCommCode(this, config);
        	
        	//기간달력 초기화
        	config = {viewradio:false, fromdate:"20160101", todate:Iject.Util.today()};
        	this.div_search.xdiv_period.init(this, config, function(fromdate, todate, type){
        		
        	});
        	
        	//월달력 초기화
        	config = {yyyymm:"20160101"};
        	this.div_search.xdiv_month.init(this, config, function(yyyymm, type){
        		
        	});
        	
        	//멀티콤보 초기화
        	config = {innerdataset:this.ds_unit, value:"1,4,5"};
        	this.div_search.xdiv_combo.init(this, config, function(value, data, type){
        		
        	});	
        	
        	//그리드 기능 설정
        	config = { copypaste:true, checkall:true, sorting:true };
        	Iject.Grid.init(this, this.div_body.grd_list, config);
        }

        /**
         * form redraw - 이미 오픈된 경우, 메뉴 재선택 시 호출되는 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_redraw = function()
        {
        	trace("work form redraw > " + Iject.Mdi.get_argument(this).param);
        }

        /**
         * 공통영역에서 호출하는 함수
         * @param {string} type - 구분자 ( 조회, 저장, 삭제 등등)
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_call = function(type)
        {
        	switch(type)
        	{
        		case "search" : 
        				this.fn_clear();
        				this.fn_search("search_test");
        			break;
        		
        		case "save" : 
        				this.fn_save("save_test");
        			break;
        		
        		default :
        			break;
        	}
        }

        /**
         * 조회 전 컴포넌트 초기화(그리드 Sort, Dataset 등)
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_clear = function()
        {
        	//그리드 소팅 초기화
        	Iject.Grid.clearAllSort(this.div_body.grd_list);
        }

        /**
         * 화면 닫기 전 호출
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_close = function()
        {
        	//true or false
        	return Iject.Util.isNotUpdated(this.ds_list);
        	
        	//변경사항 체크 이외의 메시지인 경우, 메세지 내용 직접입력!!
        	return "리턴메세지입력시!!";
        }
        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        /**
         * transaction function 
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_search = function(svcid)
        {
        	switch(svcid)
        	{
        		case "search_test" :
        			//to-do : validation check
        			var valid = 	
        				[
        					{component:this.div_search.Combo00, title:this.div_search.Static02}
        				];		
        			if (!Iject.Util.validate(this, valid)) return false;

        			// 조회조건
        			this.ds_search.clear();
        			this.ds_search.addColumn("sabun", "string");
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "sabun", this.div_search.edt_sabun.value);
        			
        			//조회
        			var oConfig =  {
        						svcid : svcid,				
        						svcurl : application.services["svcpms"].url, //동일한 시스템인 경우 생략가능
        						controller : "test.do",			 
        						inds :["ds_Search=ds_search"],
        						outds :["ds_list=ds_Master"],			     
        						args  : ["in_var1=test11111"],
        						async : true    // 비동기여부 (true : async  false: sync)	  
        					}; 
        			
        			Iject.transaction(this, oConfig, function(svcid, errorcode, errormsg){  		
        				if(errorcode < 0) return;				
        			});
        			break;
        	}
        }

        /**
         * transaction function 
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_save = function(svcid)
        {
        	switch(svcid)
        	{
        		case "save_test" :
        			//to-do : validation check
        			var valid = 	
        				[
        					{component:this.div_body.grd_list, bindcolumn:"SABUN"}
        				];
        				
        			if (!Iject.Util.validate(this, valid)) return false;
        			
        			//저장 전 확인
        			Iject.confirmP(this, "저장하시겠습니까?", null, null, function(svcid, variant){
        				if(variant)
        				{
        					//저장
        					var oConfig =  {
        								svcid : svcid,
        								controller : "testsave.do",			 
        								inds :["ds_Master=ds_list:U"],
        								outds :["ds_list=ds_Master"],			     
        								args  : [""],
        								async : true    // 비동기여부 (true : async  false: sync)	  
        							}; 
        					
        					Iject.transaction(this, oConfig, function(svcid, errorcode, errormsg){
        						if(errorcode < 0) return;	
        					});
        				}
        			});	
        			break;
        			
        		default : 
        			break;
        	}
        }

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        /**
         * 그리드 이미지 처리
         * ※ 셀에 이미지는 stretch 처리를 지원하지않아서 background 로 처리한다.
         * @memberOf this
         */
        this.get_image = function(row)
        {
        	var url = this.ds_list.getColumn(row, "IMG");
        	if(Eco.isEmpty(url)) return "";
        	return "URL('"+url+"') stretch";
        }

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        /**
         * 조회 버튼 클릭 이벤트
         * @memberOf this
         */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_call("search");
        }
        /**
         * 저장 버튼 클릭 이벤트
         * @memberOf this
         */
        this.div_search_btn_save_onclick = function(obj,e)
        {
        	this.fn_call("save");
        }
        /**
         * 행추가
         * @memberOf this
         */
        this.btn_grd_add_onclick = function(obj,e)
        {
        	this.ds_list.addRow();
        }

        /**
         * 행삭제
         * @memberOf this
         */
        this.btn_grd_del_onclick = function(obj,e)
        {
        	Iject.confirmP(this, "삭제하시겠습니까?", null, null, function(svcid, variant){
        		if(variant) 
        			this.ds_list.deleteRow(this.ds_list.rowposition);
        	});	
        }

        /**
         * 엑셀다운로드
         * @memberOf this
         */
        this.btn_ExcelExport_onclick = function(obj,e)
        {
        	Iject.exportExcel(this, this.div_body.grd_list);
        }

        /**
         * 엑셀업로드
         * @memberOf this
         */
        this.btn_ExcelImport_onclick = function(obj,e)
        {
        	var sSheet = "body=sheet1!A2;";
        	var ds = this.ds_list;
        	Iject.importExcel(this, sSheet, ds);
        }

        /**
         * 팝업
         * @memberOf this
         */
        this.div_body_grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		var oData ={
        			id  : "popup_sample",             //callback id
        			url : "Sample::Sample_Popup_P.xfdl",   //url
        			showtitlebar : true,     //title bar
        			autosize  : true,       //autosize
        			resizable    : false,       //resize
        			showtatusbar : false,     //statusbar
        			openalign    : "center middle",  //align
        			args :  {arg1:'1111111111111111111', arg2:'2222222222222222222222222'}    
        		};
        		
        		//Modal Popup 오픈			//callback
        		Iject.showModal(this, oData, function(svcid, variant){
        		});
        	}
        	//업무화면 내에서 다른 화면 호출 시
        	else if(e.cell == 7)
        	{
        		var menuurl = "Sample::Sample_BaseScript.xfdl";
        		var menutitle = "기본스크립트";
        		var args = {param : "test_"+e.row};
        		Iject.Mdi.link(menuurl, menutitle, args);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_search.btn_save.addEventHandler("onclick", this.div_search_btn_save_onclick, this);
            this.div_body.grd_list.addEventHandler("oncellclick", this.div_body_grd_list_oncellclick, this);
            this.div_body.btn_ExcelExport.addEventHandler("onclick", this.btn_ExcelExport_onclick, this);
            this.div_body.btn_ExcelImport.addEventHandler("onclick", this.btn_ExcelImport_onclick, this);
            this.div_body.btn_grd_add.addEventHandler("onclick", this.btn_grd_add_onclick, this);
            this.div_body.btn_grd_del.addEventHandler("onclick", this.btn_grd_del_onclick, this);

        };

        this.loadIncludeScript("Sample_BaseForm.xfdl");
        this.loadPreloadList();
       
    };
}
)();
