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
                this.set_name("Guide2");
                this.set_classname("Guide2");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("#888888ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button24", "absolute", "256", "51", "188", "36", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Tab_normal");
            obj.set_cssclass("btn_MDI_01");
            this.addChild(obj.name, obj);

            obj = new Button("Button25", "absolute", "32", "51", "188", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Tab_selceted");
            obj.set_cssclass("btn_MDI_02");
            this.addChild(obj.name, obj);

            obj = new Button("Button26", "absolute", "202", "66", "7", "7", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_03");
            this.addChild(obj.name, obj);

            obj = new Button("Button27", "absolute", "427", "66", "7", "7", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "9.38%", "142", null, "58", "73.34%", null, this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            obj.set_cssclass("btn_MDI_02");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide2");
            		p.set_titletext("New Form");
            		p.style.set_background("#888888ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide2.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  
         * 04. 작성일   : 
         * 05. 작성자   : 
         * 06. 수정이력 : 
         ***********************************************************************************
         *     수정일     작성자   내용
         ***********************************************************************************
         *     
         ***********************************************************************************
        */
        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/

        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/

        
        this.form_onload = function (obj,e)
        {
            Iject.formOnload(obj);
        } 
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("Guide2.xfdl");

       
    };
}
)();
