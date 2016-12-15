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
                this.set_name("Sample_CommonComp");
                this.set_classname("Sample_CommonComp");
                this.set_titletext("공통컴포넌트");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_multicombo", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">1</Col><Col id=\"DATA\">DDDD</Col></Row><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">2</Col><Col id=\"DATA\">EEEE</Col></Row><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">3</Col><Col id=\"DATA\">FFFF</Col></Row><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">4</Col><Col id=\"DATA\">HHHH</Col></Row><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">5</Col><Col id=\"DATA\">IIIII</Col></Row><Row><Col id=\"GROUP\">UNIT</Col><Col id=\"CODE\">6</Col><Col id=\"DATA\">JJJJ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ 공통컴포넌트");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "10", "68", null, "76", "10", null, this);
            obj.set_text("기간달력");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("xdiv_period", "absolute", "55", "96", "601", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("Comm::comm_period.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "712", "96", "120", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "10", "172", null, "76", "10", null, this);
            obj.set_text("월달력");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("xdiv_month", "absolute", "55", "200", "137", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_url("Comm::comm_month.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "216", "200", "120", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox02", "absolute", "10", "276", null, "76", "10", null, this);
            obj.set_text("멀티콤보");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("xdiv_combo", "absolute", "56", "300", "200", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("xdiv_combo");
            obj.set_url("Comm::comm_multicombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "288", "300", "120", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_CommonComp");
            		p.set_titletext("공통컴포넌트");

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
        this.registerScript("Sample_CommonComp.xfdl", function() {
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

        	/** 기간달력 초기설정
        	 * config 속성
        	 * viewradio 	: 기간선택 Radio 보이기/숨기기
        	 * fromdate 	: 시작날짜 초기설정값
        	 * todate 		: 종료날짜 초기설정값
        	 */
        	//var config = {viewradio:false};
        	var config = {viewradio:false, fromdate:"20160101", todate:Iject.Util.today()};
        	this.xdiv_period.init(this, config, function(fromdate, todate, type){
        		trace("callback >>> fromdate = "+fromdate + " / todate = "+todate + " / type = "+type);
        	});
        	

        	/** 월달력 초기설정
        	 * config 속성
        	 * yyyymm 	: 년월 초기설정값
        	 */	
        	var config = {yyyymm:"201601"};
        	this.xdiv_month.init(this, config, function(yyyymm, type){
        		trace("callback >>> yyyymm = "+yyyymm + " / type = "+type);
        	});
        	

        	/** 멀티콤보 초기설정
        	 * config 속성
        	 * innerdataset(필수) 	: 콤보 리스트에 보여줄 innerdataset
        	 * value 				: 초기설정 코드값
        	 * codecolumn 			: innerdataset의 codecolumn값(default : CODE)
        	 * datacolumn 			: innerdataset의 datacolumn값(default : DATA)
        	 * checkcolumn 			: 체크박스에 바인딩 컬럼값 (default : _chk)
        	 * rowcount 			: 리스트의 최대 row 수(default : 10)
        	 * delimeter 			: value 및 text의 구분 문자(default : ",")
        	 */	
        	var config = {innerdataset:this.ds_multicombo, value:"1,4,5", codecolumn:"CODE", datacolumn:"DATA", checkcolumn:"_chk", rowcount:15, delimeter:","};
        	this.xdiv_combo.init(this, config, function(value, data, type){
        		trace("callback >>> value = "+value + " / data = "+data + " / type = "+type);
        	});
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
        	this.alert("fromdate = "+this.xdiv_period.fromdate + " / type = " + typeof(this.xdiv_period.fromdate));
        	
        	this.alert("todate = "+this.xdiv_period.todate + " / type = " + typeof(this.xdiv_period.todate));
        	
        	this.alert("set_fromdate");
        	this.xdiv_period.set_fromdate("20160101");
        	
        	this.alert("set_todate");
        	this.xdiv_period.set_todate("20160101");
        	
        	this.alert("set_date");
        	this.xdiv_period.set_date("20160101", "20160101");
        	
        	this.alert("clear");
        	this.xdiv_period.clear();
        	
        	this.alert("readonly");
        	this.xdiv_period.set_readonly(true);
        		
        	this.alert("set_cssclass");
        	this.xdiv_period.set_cssclass("");	
        		
        	this.alert("validate");
        	var rtn = this.xdiv_period.validate();		
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.alert("yyyymm = "+this.xdiv_month.yyyymm + " / type = " + typeof(this.xdiv_month.yyyymm));
        	
        	this.alert("set_yyyymm");
        	this.xdiv_month.set_yyyymm("201601");
        	
        	this.alert("clear");
        	this.xdiv_month.clear();
        	
        	this.alert("readonly");
        	this.xdiv_month.set_readonly(true);
        		
        	this.alert("set_cssclass");
        	this.xdiv_month.set_cssclass("");	
        		
        	this.alert("validate");
        	var rtn = this.xdiv_month.validate();		
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.alert("value = "+this.xdiv_combo.value + " / text = " + this.xdiv_combo.text);
        	
        	this.alert("set_value");
        	this.xdiv_combo.set_value("1,2,3");
        	
        	this.alert("clear");
        	this.xdiv_combo.clear();
        	
        	this.alert("enable");
        	this.xdiv_combo.set_enable(false);
        		
        	this.alert("set_cssclass");
        	this.xdiv_combo.set_cssclass("");	
        		
        	this.alert("validate");
        	var rtn = this.xdiv_combo.validate();		
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.GroupBox01.addEventHandler("onlbuttondown", this.GroupBox01_onlbuttondown, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample_CommonComp.xfdl");
        this.loadPreloadList();
       
    };
}
)();
