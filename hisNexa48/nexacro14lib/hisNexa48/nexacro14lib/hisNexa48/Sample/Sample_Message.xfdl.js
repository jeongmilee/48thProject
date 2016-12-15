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
                this.set_name("Sample_Message");
                this.set_classname("Sample_Message");
                this.set_titletext("Message ( Alert / Confirm )");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Message ( Alert / Confirm )");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "14", "108", "99", "34", null, null, this);
            obj.set_taborder("1");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "141", "108", "99", "35", null, null, this);
            obj.set_taborder("2");
            obj.set_text("confirm");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "73", "359", "31", null, null, this);
            obj.set_taborder("3");
            obj.set_text("# 브라우저 기본 Alert / Confirm");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "14", "196", "99", "34", null, null, this);
            obj.set_taborder("4");
            obj.set_text("alertP");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "141", "196", "99", "35", null, null, this);
            obj.set_taborder("5");
            obj.set_text("confirmP");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "161", "359", "31", null, null, this);
            obj.set_taborder("6");
            obj.set_text("# 모달 팝업 Alert / Confirm");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Message");
            		p.set_titletext("Message ( Alert / Confirm )");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Message.xfdl", function() {
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

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/
         
        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	/**
        	 * @param {string} message( 코드 | 사용자문자열)
        	 * @param {string} title caption message
        	 * @param {array}  치환문자배열({0}, {1}.. 문자를 치환)
        	 */
        	Iject.alert("success.select");
        	
        	Iject.alert("에러발생!!", "에러");
        	
        	Iject.alert("fail.common.sql", "", [-900, "invalid query string"]);
        }

        this.Button01_onclick = function(obj,e)
        {
        	/**
        	 * @param {string} message( 코드 | 사용자문자열)
        	 * @param {string} title caption message
        	 * @param {array}  치환문자배열({0}, {1}.. 문자를 치환)
        	 */
        	Iject.confirm("comm.print.barcode");
        	
        	Iject.confirm("에러발생!!", "에러");
        	
        	Iject.confirm("fail.common.sql", "", [-900, "invalid query string"]);	
        }

        this.Button02_onclick = function(obj,e)
        {
        	/**
        	 * @param {form} form object
        	 * @param {string} message( 코드 | 사용자문자열)
        	 * @param {string} title caption message
        	 * @param {array}  치환문자배열({0}, {1}.. 문자를 치환)
        	 * @param {function}  callback 함수
        	 */
        	
        	Iject.alertP(this, "success.select", null, null, function(svcid, variant){
        		trace("alertP callback!!!");
        	});
        		
        // 	Iject.alertP(this, "에러발생!!", "에러", null, function(svcid, variant){
        // 		trace("alertP callback!!!");
        // 	});
        // 	
        // 	Iject.alertP(this, "fail.common.sql", "", [-900, "invalid query string"], function(svcid, variant){
        // 		trace("alertP callback!!!");
        // 	});

        //test용 삭제필요!!
        // 	var sText = "afeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwefafeawgwaefwefwef";
        // 	var sText = "afefaewfewfewfewfwfwefewfwefwefewfwefewfewefewfwefewewfwefwefwefewfwefewfewanfhijwefhlwehgewufhweufhweiufhweuifhweuifhweuihfewuifhwuf";
        // 	Iject.alertP(this, sText, null, null, function(svcid, variant){
        // 		trace("alertP callback!!!");
        // 	});
        }

        this.Button03_onclick = function(obj,e)
        {
        	/**
        	 * @param {form} form object
        	 * @param {string} message( 코드 | 사용자문자열)
        	 * @param {string} title caption message
        	 * @param {array}  치환문자배열({0}, {1}.. 문자를 치환)
        	 * @param {function}  callback 함수
        	 */	 
        	Iject.confirmP(this, "success.select", null, null, function(svcid, variant){
        		trace("confirmP callback!!! = " + variant);
        	});
        	
        // 	Iject.confirmP(this, "에러발생!!", "에러", null, function(svcid, variant){
        // 		trace("confirmP callback!!! = " + variant);
        // 	});
        // 	
        // 	Iject.confirmP(this, "fail.common.sql", "", [-900, "invalid query string"], function(svcid, variant){
        // 		trace("confirmP callback!!! = " + variant);
        // 	});		
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);

        };

        this.loadIncludeScript("Sample_Message.xfdl");

       
    };
}
)();
