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
                this.set_name("Sample_Validation");
                this.set_classname("Sample_Validation");
                this.set_titletext("유효성체크");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox01", "absolute", "10", "77", null, "243", "10", null, this);
            obj.set_text("필수입력 체크");
            obj.set_taborder("90");
            obj.set_titlealign("topleft");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "10", "349", null, "347", "10", null, this);
            obj.set_text("유효성 체크");
            obj.set_taborder("89");
            obj.set_titlealign("topleft");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ 유효성체크");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "32", "112", "187", "46", null, null, this);
            obj.set_taborder("2");
            obj.set_text("필수입력 검사");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "120", "195", "127", "21", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "120", "232", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">aa</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">bb</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Calendar("Calendar00", "absolute", "120", "272", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Static("Static01", "absolute", "25", "191", "87", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "25", "228", "87", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "296", "193", "461", "98", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"날짜\"/><Cell col=\"2\" text=\"작성자\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "277", "376", "99", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("isEmail");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "163", "376", "111", "21", null, null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "432", "376", "47", "21", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "392", "376", "36", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "277", "408", "99", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("isKoreanChar");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "163", "408", "111", "21", null, null, this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "432", "408", "47", "21", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "392", "408", "36", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "277", "440", "99", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("isSSN");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "163", "440", "111", "21", null, null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "432", "440", "47", "21", null, null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "392", "440", "36", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "277", "472", "99", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("isCompRegNo");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "163", "472", "111", "21", null, null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "432", "472", "47", "21", null, null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "392", "472", "36", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "277", "504", "99", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("isCorpRegNo");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "163", "504", "111", "21", null, null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10", "absolute", "432", "504", "47", "21", null, null, this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "392", "504", "36", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "277", "536", "99", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("isFrnrIdNo");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "163", "536", "111", "21", null, null, this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "432", "536", "47", "21", null, null, this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "392", "536", "36", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "277", "568", "99", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("isCardNo");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "163", "568", "111", "21", null, null, this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "432", "568", "47", "21", null, null, this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "392", "568", "36", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "277", "600", "99", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("isHandPhone");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "163", "600", "111", "21", null, null, this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "432", "600", "47", "21", null, null, this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "392", "600", "36", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "277", "632", "99", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("isPhone");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit23", "absolute", "163", "632", "111", "21", null, null, this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit24", "absolute", "432", "632", "47", "21", null, null, this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "392", "632", "36", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "759", "376", "91", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("isMonth");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit25", "absolute", "637", "376", "111", "21", null, null, this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit26", "absolute", "906", "376", "47", "21", null, null, this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "866", "376", "36", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "759", "408", "91", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("isTime");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit27", "absolute", "637", "408", "111", "21", null, null, this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28", "absolute", "906", "408", "47", "21", null, null, this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "866", "408", "36", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", "759", "440", "91", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("isDigit");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29", "absolute", "637", "440", "111", "21", null, null, this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30", "absolute", "906", "440", "47", "21", null, null, this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "866", "440", "36", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", "759", "472", "91", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("isNum");
            obj.style.set_padding("1 0 0 10");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31", "absolute", "637", "472", "111", "21", null, null, this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32", "absolute", "906", "472", "47", "21", null, null, this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "866", "472", "36", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("결과 = ");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "64", "376", "92", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("이메일");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "64", "408", "92", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("한글");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "64", "440", "92", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("주민번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "64", "472", "92", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("사업자등록번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "64", "504", "92", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("법인 등록번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "64", "536", "92", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("외국인 등록번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "64", "568", "92", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("카드번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "27", "600", "129", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("핸드폰(모바일)번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "64", "632", "92", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("일반 전화번호");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "538", "376", "92", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("년월");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "538", "408", "92", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("시간");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "538", "440", "92", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_text("숫자");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "538", "472", "92", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_text("숫자형식");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Validation");
            		p.set_titletext("유효성체크");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Validation.xfdl", function() {
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

        //필수입력 여부 검사
        this.Button01_onclick = function(obj,e)
        {
        	var valid = 	
        		[
        			{component:this.Edit00, title:this.Static01}
        			,{component:this.Combo00, title:this.Static02}
        			,{component:this.Calendar00, title:"조회기간"}
        		];
        		
        	if (!Iject.Util.validate(this, valid)) return false;
        	
        	var valid = 	
        		[
        			{component:this.Grid00, bindcolumn:"Column0"}
        			,{component:this.Grid00, bindcolumn:"Column1", title:"구분"}
        			,{component:this.Grid00, bindcolumn:"Column2"}
        		];
        		
        	if (!Iject.Util.validate(this, valid)) return false;
        	
        	trace("유효성검사 성공!!!");
        }

        this.Edit01.set_value("hongkildong@naver.com");
        this.Button02_onclick = function(obj,e)
        {
        	//이메일
        	var rtn = Iject.Util.isEmail(this.Edit01.value);
        	this.Edit02.set_value(rtn);
        }

        this.Edit03.set_value("한글");
        this.Button03_onclick = function(obj,e)
        {
        	//한글
        	rtn = Iject.Util.isKoreanChar(this.Edit03.value);
        	this.Edit04.set_value(rtn);
        }

        this.Edit05.set_value("800818-1554549");
        this.Button04_onclick = function(obj,e)
        {
        	//주민등록번호
        	rtn = Iject.Util.isSSN(this.Edit05.value);
        	this.Edit06.set_value(rtn);	
        }

        this.Edit07.set_value("122-13-55464");
        this.Button05_onclick = function(obj,e)
        {
        	//사업자등록번호
        	rtn = Iject.Util.isCompRegNo(this.Edit07.value);
        	this.Edit08.set_value(rtn);	
        }

        this.Edit09.set_value("110111-2021395");
        this.Button06_onclick = function(obj,e)
        {
        	//법인 등록번호 확인
        	rtn = Iject.Util.isCorpRegNo(this.Edit09.value);
        	this.Edit10.set_value(rtn);	
        }

        this.Edit11.set_value("990101-5020063");
        this.Button07_onclick = function(obj,e)
        {
        	//외국인 등록번호
        	rtn = Iject.Util.isFrnrIdNo(this.Edit11.value);
        	this.Edit12.set_value(rtn);	
        }

        this.Edit13.set_value("3779-880333-88282");
        this.Button08_onclick = function(obj,e)
        {
        	//카드번호
        	rtn = Iject.Util.isCardNo(this.Edit13.value);
        	this.Edit14.set_value(rtn);	
        }

        this.Edit15.set_value("010-2123-1111");
        this.Button09_onclick = function(obj,e)
        {
        	//핸드폰(모바일)번호
        	rtn = Iject.Util.isHandPhone(this.Edit15.value);
        	this.Edit16.set_value(rtn);
        }

        this.Edit23.set_value("02-2123-1111");
        this.Button13_onclick = function(obj,e)
        {
        	//일반 전화번호, 15XX-XXXX도 체크
        	rtn = Iject.Util.isPhone(this.Edit23.value);
        	this.Edit24.set_value(rtn);
        }

        this.Edit25.set_value("20160101");
        this.Button14_onclick = function(obj,e)
        {
        	//년월 정합성 체크
        	rtn = Iject.Util.isMonth(this.Edit25.value);
        	this.Edit26.set_value(rtn);
        }

        this.Edit27.set_value("120101");
        this.Button15_onclick = function(obj,e)
        {
        	//시간 정합성 체크
        	rtn = Iject.Util.isTime(this.Edit27.value);
        	this.Edit28.set_value(rtn);
        }

        this.Edit29.set_value("120101");
        this.Button16_onclick = function(obj,e)
        {
        	//숫자 정합성 체크
        	rtn = Iject.Util.isDigit(this.Edit29.value);
        	this.Edit30.set_value(rtn);
        }

        this.Edit31.set_value("120101");
        this.Button17_onclick = function(obj,e)
        {
        	//문자열이 숫자형식에 맞는지 여부 체크
        	rtn = Iject.Util.isNum(this.Edit31.value);
        	this.Edit32.set_value(rtn);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);
            this.Button13.addEventHandler("onclick", this.Button13_onclick, this);
            this.Button14.addEventHandler("onclick", this.Button14_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.Button16.addEventHandler("onclick", this.Button16_onclick, this);
            this.Button17.addEventHandler("onclick", this.Button17_onclick, this);

        };

        this.loadIncludeScript("Sample_Validation.xfdl");

       
    };
}
)();
