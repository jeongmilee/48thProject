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
                this.set_name("Sample_Transaction");
                this.set_classname("Work");
                this.set_titletext("Transaction");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
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
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGUP\" type=\"STRING\" size=\"256\"/><Column id=\"IPSA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sabun\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"jikgup\" type=\"STRING\" size=\"256\"/><Column id=\"ipsa_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"DATE\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"marry\" type=\"STRING\" size=\"256\"/><Column id=\"salary\" type=\"STRING\" size=\"256\"/><Column id=\"smemo\" type=\"STRING\" size=\"256\"/><Column id=\"edit_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "10", "124", null, "220", "10", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SABUN\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"JIKGUP\"/><Cell col=\"4\" text=\"IPSA_DATE\"/><Cell col=\"5\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:SABUN\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:NAME\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:DEPT\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:JIKGUP\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:IPSA_DATE\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "67", "79", "23", "91", null, this);
            obj.set_taborder("18");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list2", "absolute", "10", "384", null, null, "10", "10", this);
            obj.set_taborder("21");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"name\"/><Cell col=\"2\" disptype=\"normal\" text=\"dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"email\"/><Cell col=\"6\" disptype=\"normal\" text=\"sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"edit_color\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:email\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:edit_color\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "33", "360", "120", "24", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_total_cnt2", "absolute", "9", "362", "20", "20", null, null, this);
            obj.set_taborder("25");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("27");
            obj.set_text("@ Transaction");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "16.7%", "93", null, "20", "69.63%", null, this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "33", "96", "120", "23", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Records Found");
            this.addChild(obj.name, obj);

            obj = new Static("sta_total_cnt", "absolute", "10", "96", "20", "23", null, null, this);
            obj.set_taborder("30");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grd_add", "absolute", null, "103", "66", "12", "78", null, this);
            obj.set_taborder("31");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grd_del", "absolute", null, "103", "67", "12", "15", null, this);
            obj.set_taborder("32");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "67", "79", "23", "11", null, this);
            obj.set_taborder("33");
            obj.set_text("저장");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("Transaction");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Transaction.xfdl", function() {
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
        				this.fn_search("search_test");
        			break;
        		
        		case "save" : 
        				this.fn_save("save_test");
        			break;
        		
        		default :
        			break;
        	}
        }

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        
        this.fv_arg1 = ""; //서버에서 전달받을 파라미터(초기화 해주어야함)

        /**
         * 조회
         * @memberOf public
         */
        this.fn_search = function(svcid)
        {
        	switch(svcid)
        	{
        		case "search_test":
        			trace("JSESSIONID = "+application.JSESSIONID);
        			// 조회조건(Condition)
        			this.ds_cond.clear();
        			this.ds_cond.addColumn("sabun", "string");
        			this.ds_cond.addRow();

        			this.ds_cond.setColumn(0, "sabun", this.Edit00.value);
        			
        			//transaction 파라미터 설정
        			var oConfig =  {
        						svcid : svcid,				
        						svcurl : application.services["svcpms"].url, //동일한 시스템인 경우 생략가능
        						controller : "test.do",			 
        						inds :["ds_Search=ds_cond"],
        						outds :["ds_list=ds_Master"],			     
        						args  : ["in_var1=test11111"],
        						async : true    // 비동기여부 (true : async  false: sync)	  
        					}; 
        			
        			//공통 transaction 함수 호츨   //function callback 
        			Iject.transaction(this, oConfig, function(svcid, errorcode, errormsg){  		
        				
        				if(errorcode < 0) return;
        				trace(this.ds_list.saveXML());
        				
        				this.fn_setToalCnt();
        				
        				//서버에서 전달받을 파라미터
        				trace("this.fv_arg1 = "+this.fv_arg1);
        			});
        			break;		
        		
        		default : 
        			break;
        	}
        }

        /**
         * 저장
         * @memberOf public
         */
        this.fn_save = function(svcid)
        {
        	switch(svcid)
        	{
        		case "save_test" :
        			//transaction 파라미터 설정
        			var oConfig =  {
        						svcid : svcid,
        						svcurl : application.services["svcpms"].url,
        						controller : "testsave.do",			 
        						inds :["ds_Master=ds_list:U"],
        						outds :["ds_list=ds_Master"],			     
        						args  : [""],
        						async : true    // 비동기여부 (true : async  false: sync)	  
        					}; 
        			
        			//공통 transaction 함수 호츨   //function callback 
        			Iject.transaction(this, oConfig, function(svcid, errorcode, errormsg){   
        				
        				if(errorcode < 0) return;		
        				
        				this.fn_setToalCnt();
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
         * set total result count
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_setToalCnt = function()
        {
        	this.sta_total_cnt.set_text(this.ds_list.rowcount);
        }

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        /**
         * 조회 유형 1 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.btn_search1_onclick = function(obj,e)
        {
        	this.fn_search("search_test");
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save("save_test");
        }

        this.btn_grd_add_onclick = function(obj,e)
        {
        	this.ds_list.addRow();
        }

        this.btn_grd_del_onclick = function(obj,e)
        {
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        }

        
        // this.Button00_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var cookie = this.gfn_getCookie("JSESSIONID");
        // 	trace("JSESSIONID = "+cookie);
        // }
        //  
        // this.gfn_setCookie = function ( cName, cValue, cDay )
        // {
        // 	var expire = new Date();
        // 	expire.setDate(expire.getDate() + cDay);
        // 	cookies = cName + '=' + cValue + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        // 	if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        // 	document.cookie = cookies;
        // }
        //  
        // this.gfn_getCookie = function (cName)
        // {
        //    var name = cName + "=";
        //    var arrList = document.cookie.split(';'); 
        //    trace("cookies  = "+arrList);
        //    for( var i=0; i < arrList.length;  i++ ) 
        //    {
        //       var c = arrList[i].trim();
        //       if ( c.indexOf(name) == 0 ) return c.substring( name.length, c.length );
        //    }
        //    return "";
        // }
        //  
        // this.gfn_delCookie = function (cName) {
        //     this.gfn_setCookie(cName, '', -1);
        // }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search1_onclick, this);
            this.btn_grd_add.addEventHandler("onclick", this.btn_grd_add_onclick, this);
            this.btn_grd_del.addEventHandler("onclick", this.btn_grd_del_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("Sample_Transaction.xfdl");

       
    };
}
)();
