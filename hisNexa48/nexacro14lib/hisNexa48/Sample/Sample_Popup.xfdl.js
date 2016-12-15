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
                this.set_name("Sample_Popup");
                this.set_classname("Sample_Popup");
                this.set_titletext("팝업");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rtn_1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rtn_2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Modal / Modeless Popup");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "16", "87", "212", "39", null, null, this);
            obj.set_taborder("1");
            obj.set_text("모달(Modal) 팝업창 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "16", "145", "212", "39", null, null, this);
            obj.set_taborder("2");
            obj.set_text("모달(Modaless) 팝업창 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "16", "197", "212", "39", null, null, this);
            obj.set_taborder("3");
            obj.set_text("팝업닫고 열기");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_return", "absolute", "248", "88", null, "436", "10", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Popup");
            		p.set_titletext("팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Popup.xfdl", function() {
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

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/
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
        this.form_onload = function (obj,e)
        {
          
            //폼로드시 공통함수 
        	Iject.formOnload(obj);
        }

        /**
         * 모달(Modal) 팝업창 오픈
         * @return 
         * @example
         *
         * @memberOf Iject
         */
        this.Button00_onclick = function(obj,e)
        {
        	this.txa_return.set_value("");
        // 	this.ds_rtn_1.clear();
        // 	this.ds_rtn_2.clear();
        	
        	//Modal Popup 속성 설정
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

        		switch(Eco._toString.call(variant))
        		{
        			case "[object Array]" :
        				var txt = "";
        				for( var i = 0; i < variant.length; i++)
        				{
        					txt += "[" + i + "]===> variant : " + variant[i] + "\n";
        					//txt += "[" + i + "]===> variant : " + variant[i].saveXML() + "\n";
        				}
        				this.txa_return.set_value(txt);
        			break;

        			case "[object Object]" :
        				//this.txa_return.set_value(Eco.Json._objectToString(variant));
        				trace(variant.key1);
        				trace(variant.key2);
        				trace(variant.key3.saveXML());
        			break;

        			default :				
        				this.txa_return.set_value(variant);
        			break;
        		} 
        	});
        }

        //modaless 창 close
        this.Button02_onclick = function(obj,e)
        {
        	var args ={arg1:'1111111111111111111', arg2:'2222222222222222222222222'}; 

        	Iject.open(this, "StringReturnSample", "Sample::Sample_Popup_P.xfdl", args);
        }

        //팝업닫고 열기
        this.Button01_onclick = function(obj,e)
        {
        	var args ={arg1:'1111111111111111111', arg2:'2222222222222222222222222'}; 
        	
        	//팝업창의 오픈여부 확인
        	if(Eco.isEmpty(this.getOwnerFrame().all["StringReturnSample"])==false)
        	{
        		this.getOwnerFrame().all["StringReturnSample"].form.close();
        	}
        	
        	Iject.open(this,"StringReturnSample","Sample::Sample_Popup_P.xfdl",args);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Sample_Popup.xfdl");

       
    };
}
)();
