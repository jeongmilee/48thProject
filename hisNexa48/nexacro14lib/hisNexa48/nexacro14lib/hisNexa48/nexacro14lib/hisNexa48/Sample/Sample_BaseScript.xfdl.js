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
                this.set_name("Sample_BaseScript");
                this.set_classname("Sample_BaseScript");
                this.set_titletext("스크립트 정의");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ 스크립트 정의");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "88", null, null, "10", "10", this);
            obj.set_taborder("1");
            obj.set_text("/***********************************************************************************\r\n * 01. 업무구분 : 샘플\r\n * 02. 메뉴명   : \r\n * 03. 메뉴설명 :  (트랜잭션,엑셀익스포트&&임포트)\r\n * 04. 작성일   : \r\n * 05. 작성자   : \r\n * 06. 수정이력 : \r\n ***********************************************************************************\r\n *     수정일     작성자   내용\r\n ***********************************************************************************\r\n *     \r\n **********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* 폼 전역변수 선언부\t\t\t\t\t\t\t\t\t\t\t\t               \r\n***********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* include 선언부  \t\t\t\t\t\t\t\t\t\t\t\t\t               *\r\n***********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* Form Event\r\n***********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* Transaction Function\r\n***********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* 사용자 Function\r\n***********************************************************************************/\r\n\r\n/***********************************************************************************\r\n* Component Event Function\r\n***********************************************************************************/");
            obj.style.set_linespace("5");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_BaseScript");
            		p.set_titletext("스크립트 정의");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_BaseScript.xfdl", function() {
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
        	
        	//link test용
        	trace("work form onload > " + Iject.Mdi.get_argument(this).param);
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
        	//link test용
        	trace("work form redraw > " + Iject.Mdi.get_argument(this).param);
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
        				this.fn_search();
        			break;
        		
        		case "save" : 
        				this.fn_save();
        			break;
        		
        		default :
        			break;
        	}
        }

        /**
         * 컴포넌트 초기화(그리드 Sort, Dataset 등)
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_clear = function()
        {

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
        	return true;
        }
        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        /**
         * transaction function 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_search = function()
        {

        }

        /**
         * transaction function 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_save = function()
        {

        }

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        /**
         * 사용자 함수
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_user = function(param)
        {
        }

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        /**
         * 버튼 클릭 이벤트
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.Button00_onclick = function(obj,e)
        {
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("Sample_BaseScript.xfdl");

       
    };
}
)();
