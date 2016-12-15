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
                this.set_name("Sample_ReadWrite");
                this.set_classname("Sample_ReadWrite");
                this.set_titletext("파일 읽기/쓰기");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">aaa</Col><Col id=\"Column3\">@@@</Col></Row><Row><Col id=\"Column0\">222</Col><Col id=\"Column1\">라마바</Col><Col id=\"Column2\">bbb</Col><Col id=\"Column3\">!!!!</Col></Row><Row><Col id=\"Column0\">333</Col><Col id=\"Column1\">사아자</Col><Col id=\"Column2\">ccc</Col><Col id=\"Column3\">%%%</Col></Row><Row><Col id=\"Column0\">444</Col><Col id=\"Column1\">카타파</Col><Col id=\"Column2\">ddd</Col><Col id=\"Column3\">####</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inner", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">aaa</Col><Col id=\"data\">콤보데이타1</Col></Row><Row><Col id=\"code\">ddd</Col><Col id=\"data\">콤보데이타2</Col></Row><Row><Col id=\"code\">bbb</Col><Col id=\"data\">콤보데이타3</Col></Row><Row><Col id=\"code\">ccc</Col><Col id=\"data\">콤보데이타4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Read / Write");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "30", "98", "120", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Read");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "196", "98", "120", "50", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Write");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "391", "93", "565", "234", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "31", "440", "337", "193", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"ds_inner\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "192", "374", "180", "50", null, null, this);
            obj.set_taborder("5");
            obj.set_text("그리드(데이타셋) 문자열");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "391", "414", "565", "123", null, null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02", "absolute", "391", "581", "565", "123", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "389", "375", "258", "36", null, null, this);
            obj.set_taborder("8");
            obj.set_text("데이타셋 값 을 문자열로 반환");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "389", "551", "258", "36", null, null, this);
            obj.set_taborder("9");
            obj.set_text("그리드 값 을 문자열로 반환");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_ReadWrite");
            		p.set_titletext("파일 읽기/쓰기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample_ReadWrite.xfdl", "Lib::FileReadWrite.xjs");
        this.registerScript("Sample_ReadWrite.xfdl", function() {
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
        //include "Lib::FileReadWrite.xjs"

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

        this.Button00_onclick = function(obj,e)
        {
        	/*
        	config 속성
        		filepath : 파일의 경로(null인경우 파일다이얼로그 오픈)
        		filename : 파일명
        		directory : 기본디렉토리명(%MYDOCUMENT% , %DOCUMENT%, %USERAPP%, %INSTALLROOT%)
        	*/	
        				
        	//파일선택
        	//var config = {directory:"%DOCUMENT%"};
        	//파일지정
        	var config = {filepath:"C:/hira/DDMD/sam/in/", filename:"test11.sam"};
        	this.gfn_readFile(this, config, function(rtn){
        		trace("gfn_readFile  callback = "+rtn);
        		this.TextArea00.set_value(rtn);
        	});
        }

        this.Button01_onclick = function(obj,e)
        {
        	/*
        	config 속성
        		filepath : 파일의 경로(null인경우 파일다이얼로그 오픈)
        		filename : 파일명
        		directory : 기본디렉토리명(%MYDOCUMENT% , %DOCUMENT%, %USERAPP%, %INSTALLROOT%)
        		recordvalue : 파일에 기록한 값
        	*/		
        	
        	//파일선택
        	//var config = {directory:"%DOCUMENT%", filename:"test.txt", recordvalue:"fwfequr389hruhuiafhuvuafhewufhwuef"};
        	//파일지정
        	var config = {recordvalue:"fwfequr389hruhuiafhuvuafhewufhwuef", filepath:"C:/hira/DDMD/sam/in/", filename:"test11.sam"};
        	this.gfn_writeFile(this, config, function(rtn){
        		trace("gfn_writeFile  callback = "+rtn);
        	});
        }

        this.Button02_onclick = function(obj,e)
        {
        	/**
        	* 데이타셋을 구분자를 포함한 문자열로 반환
        	* @param {dataset} dataset object
        	* @param {string} delimeter 구분자값(defualt : 공백)
        	*/
        	var rtn = this.gfn_datasetToString(this.Dataset00);
        	this.TextArea01.set_value(rtn);
        	
        	/**
        	* 그리드의 값을 구분자를 포함한 문자열로 반환
        	* @param {dataset} dataset 	object
        	* @param {string} delimeter 구분자값(defualt : 공백)
        	* @param {string} type  	그리드의 value 또는 text값 설정(default : value)
        	*/
        	rtn = this.gfn_gridToString(this.Grid00, null, "text");
        	this.TextArea02.set_value(rtn);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample_ReadWrite.xfdl");

       
    };
}
)();
