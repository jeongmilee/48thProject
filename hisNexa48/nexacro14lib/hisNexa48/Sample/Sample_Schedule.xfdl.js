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
                this.set_name("Sample_Schedule");
                this.set_classname("Sample_Schedule");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_schedule", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트1</Col><Col id=\"SEQ\">1</Col><Col id=\"TIME\">12</Col><Col id=\"CONTENTS\">테스트a</Col></Row><Row><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트2</Col><Col id=\"SEQ\">2</Col><Col id=\"TIME\">15</Col><Col id=\"CONTENTS\">테스트b</Col></Row><Row><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트3</Col><Col id=\"SEQ\">3</Col><Col id=\"TIME\">16</Col><Col id=\"CONTENTS\">테스트c</Col></Row><Row><Col id=\"SEQ\">4</Col><Col id=\"TIME\">12</Col><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트4</Col><Col id=\"CONTENTS\">테스트d</Col></Row><Row><Col id=\"SEQ\">5</Col><Col id=\"TIME\">14</Col><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트5</Col><Col id=\"CONTENTS\">테스트e</Col></Row><Row><Col id=\"SEQ\">6</Col><Col id=\"TIME\">15</Col><Col id=\"YYYYMMDD\">20161103</Col><Col id=\"SUBJECT\">테스트6</Col><Col id=\"CONTENTS\">테스트f</Col></Row><Row><Col id=\"YYYYMMDD\">20161107</Col><Col id=\"SUBJECT\">테스트1</Col><Col id=\"CONTENTS\">테스트a</Col><Col id=\"TIME\">12</Col><Col id=\"SEQ\">7</Col></Row><Row><Col id=\"YYYYMMDD\">20161107</Col><Col id=\"SUBJECT\">테스트2</Col><Col id=\"CONTENTS\">테스트b</Col><Col id=\"TIME\">15</Col><Col id=\"SEQ\">8</Col></Row><Row><Col id=\"YYYYMMDD\">20161107</Col><Col id=\"SUBJECT\">테스트3</Col><Col id=\"CONTENTS\">테스트c</Col><Col id=\"TIME\">16</Col><Col id=\"SEQ\">9</Col></Row><Row><Col id=\"YYYYMMDD\">20161114</Col><Col id=\"SUBJECT\">테스트5</Col><Col id=\"CONTENTS\">테스트e</Col><Col id=\"TIME\">14</Col><Col id=\"SEQ\">10</Col></Row><Row><Col id=\"YYYYMMDD\">20161001</Col><Col id=\"SUBJECT\">테스트5</Col><Col id=\"CONTENTS\">테스트e</Col><Col id=\"TIME\">14</Col><Col id=\"SEQ\">11</Col></Row><Row><Col id=\"YYYYMMDD\">20161001</Col><Col id=\"SUBJECT\">테스트6</Col><Col id=\"CONTENTS\">테스트e</Col><Col id=\"TIME\">14</Col><Col id=\"SEQ\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ 스케줄러");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_schedule", "absolute", "10", "98", null, null, "10", "10", this);
            obj.set_taborder("1");
            obj.set_text("div_schedule");
            obj.set_url("Comm::comm_schedule.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("xdiv_month", "absolute", "24", "61", "190", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("Comm::comm_month.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Schedule");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Comm::comm_schedule.xfdl");
            this._addPreloadList("fdl", "Comm::comm_month.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_Schedule.xfdl", function() {
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
        	
        	//월달력 초기화
        	var config = {yyyymm:Iject.Util.today()};
        	this.xdiv_month.init(this, config, function(yyyymm, type){
        		//값 변경시 달력 그리기
        		this.div_schedule.draw(yyyymm, this.ds_schedule);
        	});
        	
        	//달력 초기화
        	/*
        	 * datecolumn 		- 일자 컬럼
        	 * subjectcolumn 	- 스케줄 제목컬럼
        	 * keycolumn 		- 스케줄 key
        	 */
        	var oConfig = {datecolumn:"YYYYMMDD", subjectcolumn:"SUBJECT", keycolumn:"SEQ"};
        	this.div_schedule.init(this, oConfig, function(id, value){
        		//일정클릭시
        		if(id == "click"){
        			trace(">>> schedule key value = "+value);
        			//to-do
        			//업무에 해당하는 일정등록/수정 팝업오픈
        			//팝업콜백에서 일정 추가 및 저장
        			//달력 다시 그리기
        		}
        		//일정 신규등록시
        		else if(id == "new"){
        		}
        	});
        	
        	//달력 그리기
        	this.div_schedule.draw(this.xdiv_month.yyyymm, this.ds_schedule);
        }

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("Sample_Schedule.xfdl");
        this.loadPreloadList();
       
    };
}
)();
