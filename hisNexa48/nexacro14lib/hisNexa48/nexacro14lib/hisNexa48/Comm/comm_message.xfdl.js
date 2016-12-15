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
                this.set_name("comm_message");
                this.set_classname("comm_message");
                this.set_titletext("메세지");
                this._setFormPosition(0,0,300,200);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_bottom", "absolute", "0", "150", null, "50", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_confirm", "absolute", "47", "11", "94", "28", null, null, this.div_bottom);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_visible("false");
            this.div_bottom.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", "101", "11", "93", "28", null, null, this.div_bottom);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.div_bottom.addChild(obj.name, obj);
            obj = new Button("btn_cancel", "absolute", "154", "11", "92", "28", null, null, this.div_bottom);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_visible("false");
            this.div_bottom.addChild(obj.name, obj);

            obj = new Static("stc_title", "absolute", "0", "0", null, "35", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("Title");
            obj.style.set_padding("0 0 0 10");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_msg", "absolute", "10", "35", null, "115", "10", null, this);
            obj.set_taborder("4");
            obj.style.set_linespace("5");
            obj.style.set_border("0 none #bdbdbdff");
            obj.set_readonly("true");
            obj.set_wordwrap("char");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.div_bottom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");

            	}
            );
            this.div_bottom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 300, 200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comm_message");
            		p.set_titletext("메세지");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comm_message.xfdl", function() {
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
        this.form_onload = function(obj,e)
        {
        	//폼초기화
        	Iject.formOnload(obj);
        		
        	var title = this.parent.caption;
        	var type = this.parent.type;	
        	var msg = this.parent.msg;

        	//타이틀설정
        	this.stc_title.set_text(title);
        	
        	//버튼제어
        	if(type == "alert")
        	{
        		this.div_bottom.btn_close.set_visible(true);
        		this.div_bottom.btn_close.setFocus();
        		this.div_bottom.btn_confirm.set_visible(false);
        		this.div_bottom.btn_cancel.set_visible(false);
        	}
        	else if(type == "confirm")
        	{
        		this.div_bottom.btn_close.set_visible(false);
        		this.div_bottom.btn_confirm.set_visible(true);
        		this.div_bottom.btn_confirm.setFocus();
        		this.div_bottom.btn_cancel.set_visible(true);
        	}

        	//메세지 설정 및 높이값 구하기
        	this.txa_msg.set_value(msg);
        	this.txa_msg.set_height(40);

        	var height = Eco.XComp.PositionSize.getScrollHeight(this.txa_msg) + 20;

        	var MAX_HEIGHT = 100;
        	if(height > MAX_HEIGHT) height = MAX_HEIGHT;
        	
        	this.txa_msg.set_height(height);
        	this.div_bottom.set_top(parseInt(this.txa_msg.top) + parseInt(this.txa_msg.height));
        	
        	var TITLE_HEIGHT = parseInt(this.stc_title.height);
        	var MSG_HEIGHT = height;
        	var BTN_HEIGHT = parseInt(this.div_bottom.height);
        	
        	//팝업창 사이즈 조정
        	this.getOwnerFrame().set_height(TITLE_HEIGHT + MSG_HEIGHT + BTN_HEIGHT);
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
        this.Button00_onclick = function(obj,e)
        {
        	Iject.close(this, true);
        }

        this.div_bottom_btn_confirm_onclick = function(obj,e)
        {
        	Iject.close(this, true);
        }

        this.div_bottom_btn_cancel_onclick = function(obj,e)
        {
        	Iject.close(this, false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_bottom.btn_confirm.addEventHandler("onclick", this.div_bottom_btn_confirm_onclick, this);
            this.div_bottom.btn_close.addEventHandler("onclick", this.Button00_onclick, this);
            this.div_bottom.btn_cancel.addEventHandler("onclick", this.div_bottom_btn_cancel_onclick, this);

        };

        this.loadIncludeScript("comm_message.xfdl");

       
    };
}
)();
