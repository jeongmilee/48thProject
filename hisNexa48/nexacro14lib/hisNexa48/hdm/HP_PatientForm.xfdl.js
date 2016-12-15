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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPatientList</Col><Col id=\"URL\">his::hdm/patient/findPatientList.do</Col><Col id=\"outData\">dsPatient=dsPatient</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">Patient_CallbackFunc</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchPatientProcess</Col><Col id=\"URL\">his::hdm/patient/batchPatientProcess.do</Col><Col id=\"inData\">dsPatient=dsPatient:U</Col><Col id=\"callbackFunc\">Patient_CallbackFunc</Col><Col id=\"outData\"/><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatient", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn1\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">patNo</Col><Col id=\"data\">환자번호</Col></Row><Row><Col id=\"code\">patNm</Col><Col id=\"data\">성함</Col></Row><Row><Col id=\"code\">age</Col><Col id=\"data\">나이</Col></Row><Row><Col id=\"code\">gender</Col><Col id=\"data\">성별</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "74.41%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("환자정보 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 돋움");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("Div00", "fixed", "1.95%", "64", null, "686", "46.68%", null, this);
            obj.set_taborder("43");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            obj.style.set_color("#b0bec5ff");
            obj.set_applystyletype("cascade,keep");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "2.48%", "47", null, "628", "2.48%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("dsPatient");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"나이\"/><Cell col=\"3\" text=\"성별\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:patNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:age\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:gender\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("searchWardCombo", "absolute", "23.09%", "9", "100", "28", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("white");
            obj.set_displaynulltext("선택");

            obj = new Div("Div01", "absolute", "54.3%", "64", null, "686", "1.76%", null, this);
            obj.set_taborder("87");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc", "absolute", "55.37%", "106", null, "28", "34.67%", null, this);
            obj.set_taborder("90");
            obj.set_text("성명");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "65.72%", "106", "151", "28", null, null, this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Static("rrnStc", "absolute", "55.37%", "138", null, "28", "34.67%", null, this);
            obj.set_taborder("92");
            obj.set_text("주민번호");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn1Ed", "absolute", "65.72%", "138", "151", "28", null, null, this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn2Ed", "absolute", "82.32%", "138", "151", "28", null, null, this);
            obj.set_taborder("94");
            this.addChild(obj.name, obj);

            obj = new Edit("zipEd", "absolute", "65.72%", "170", "151", "28", null, null, this);
            obj.set_taborder("95");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("zipStc", "absolute", "55.37%", "170", null, "28", "34.67%", null, this);
            obj.set_taborder("96");
            obj.set_text("우편번호");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("addrStc", "absolute", "55.37%", "202", null, "28", "34.67%", null, this);
            obj.set_taborder("97");
            obj.set_text("주소");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("addrEd", "absolute", "65.72%", "202", null, "28", "2.93%", null, this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Edit("telEd", "absolute", "65.72%", "234", "151", "28", null, null, this);
            obj.set_taborder("99");
            this.addChild(obj.name, obj);

            obj = new Static("telStc", "absolute", "55.37%", "234", null, "28", "34.67%", null, this);
            obj.set_taborder("100");
            obj.set_text("연락처");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("smsNoStc", "absolute", "55.37%", "266", null, "28", "34.67%", null, this);
            obj.set_taborder("101");
            obj.set_text("SMS");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("smsNoEd", "absolute", "65.72%", "266", "151", "28", null, null, this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);

            obj = new Static("recNwDateStc", "absolute", "55.37%", "331", null, "28", "34.67%", null, this);
            obj.set_taborder("103");
            obj.set_text("최근내원일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("recNwDateCal", "absolute", "65.72%", "332", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("104");

            obj = new Static("barrAssStc", "absolute", "55.37%", "363", null, "28", "34.67%", null, this);
            obj.set_taborder("105");
            obj.set_text("장애종별");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("barrAssCombo", "absolute", "65.82%", "364", "151", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_innerdataset("@dsBarrAssCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Calendar("deathDateCal", "absolute", "65.72%", "396", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("107");

            obj = new Static("deathDateStc", "absolute", "55.37%", "395", null, "28", "34.67%", null, this);
            obj.set_taborder("108");
            obj.set_text("사망일시");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("certfctNoStc", "absolute", "55.37%", "427", null, "28", "34.67%", null, this);
            obj.set_taborder("109");
            obj.set_text("의료보험증");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("certfctNoEd", "absolute", "65.72%", "427", "151", "28", null, null, this);
            obj.set_taborder("110");
            this.addChild(obj.name, obj);

            obj = new Edit("insuNmEd", "absolute", "65.72%", "459", "151", "28", null, null, this);
            obj.set_taborder("111");
            this.addChild(obj.name, obj);

            obj = new Static("insuNmStc", "absolute", "55.37%", "459", null, "28", "34.67%", null, this);
            obj.set_taborder("112");
            obj.set_text("피보험자명");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("insuRrnStc", "absolute", "55.37%", "491", null, "28", "34.67%", null, this);
            obj.set_taborder("113");
            obj.set_text("주민번호");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("insuRrn1Ed", "absolute", "65.72%", "491", "151", "28", null, null, this);
            obj.set_taborder("114");
            this.addChild(obj.name, obj);

            obj = new Edit("insuRrn2Ed", "absolute", "82.32%", "491", "151", "28", null, null, this);
            obj.set_taborder("115");
            this.addChild(obj.name, obj);

            obj = new Calendar("applyEndDateCal", "absolute", "82.32%", "524", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("116");

            obj = new Calendar("applyStartDateCal", "absolute", "65.72%", "524", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("117");

            obj = new Static("applyStc", "absolute", "55.37%", "523", null, "28", "34.67%", null, this);
            obj.set_taborder("118");
            obj.set_text("적용기간");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("noteStc", "absolute", "55.37%", "555", null, "28", "34.67%", null, this);
            obj.set_taborder("119");
            obj.set_text("메모");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("noteTextArea", "absolute", "65.72%", "555", null, "141", "2.93%", null, this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Static("smsReceiverStc", "absolute", "55.37%", "299", null, "28", "34.67%", null, this);
            obj.set_taborder("124");
            obj.set_text("SMS 수신인");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("smsReceiverEd", "absolute", "65.72%", "299", "151", "28", null, null, this);
            obj.set_taborder("125");
            this.addChild(obj.name, obj);

            obj = new CheckBox("smsCheck", "absolute", "82.23%", "267", null, "26", "15.53%", null, this);
            obj.set_taborder("126");
            obj.style.set_buttonalign("center middle");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("addPatBtn", "absolute", "80.76%", "711", null, "28", "11.62%", null, this);
            obj.set_taborder("127");
            obj.set_text("저장");
            obj.style.set_background("#37474fff");
            obj.style.set_border("1 solid #263238ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "81.05%", "139", null, "26", "17.87%", null, this);
            obj.set_taborder("128");
            obj.set_text("-");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "81.05%", "492", null, "26", "17.87%", null, this);
            obj.set_taborder("129");
            obj.set_text("-");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "81.05%", "524", null, "26", "17.87%", null, this);
            obj.set_taborder("130");
            obj.set_text("-");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("addPatBtn00", "absolute", "89.36%", "711", null, "28", "3.03%", null, this);
            obj.set_taborder("131");
            obj.set_text("삭제");
            obj.style.set_background("#37474fff");
            obj.style.set_border("1 solid #263238ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "843", "170", "58", "28", null, null, this);
            obj.set_taborder("133");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "84.38%", "267", null, "27", "5.27%", null, this);
            obj.set_taborder("134");
            obj.set_text("문자알림 수신허용");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "487", "74", "45", "28", null, null, this);
            obj.set_taborder("135");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "385", "74", "45", "28", null, null, this);
            obj.set_taborder("136");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "248", "74", "131", "28", null, null, this);
            obj.set_taborder("137");
            obj.set_displaynulltext("입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "35", "79", "94", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("환자정보 검색");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "436", "74", "45", "28", null, null, this);
            obj.set_taborder("139");
            obj.set_text("재설정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc00", "absolute", "55.37%", "74", null, "28", "34.67%", null, this);
            obj.set_taborder("140");
            obj.set_text("환자번호");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd00", "absolute", "65.72%", "74", "151", "28", null, null, this);
            obj.set_taborder("141");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 686, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");
            		p.style.set_color("#b0bec5ff");
            		p.set_applystyletype("cascade,keep");
            		p.set_visible("true");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 686, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("87");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","patNmEd","value","dsPatient","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rrn1Ed","value","dsPatient","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","rrn2Ed","value","dsPatient","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","zipEd","value","dsPatient","zip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","addrEd","value","dsPatient","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","telEd","value","dsPatient","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","smsNoEd","value","dsPatient","smsReceiveNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","recNwDateCal","value","dsPatient","recNwDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","barrAssCombo","value","dsPatient","barrAss");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","deathDateCal","value","dsPatient","deathDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","certfctNoEd","value","dsPatient","certfctNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","insuNmEd","value","dsPatient","insuNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","insuRrn1Ed","value","dsPatient","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","insuRrn2Ed","value","dsPatient","insuRrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","applyEndDateCal","value","dsPatient","applyEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","applyStartDateCal","value","dsPatient","applyStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","noteTextArea","value","dsPatient","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","smsReceiverEd","value","dsPatient","smsReceiver");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","smsCheck","value","dsPatient","smsReceiveYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","patNmEd00","value","dsPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HP_PatientForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HP_PatientForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 외래환자관리 및 외래진료접수관리                             		        *
        *                                                                   			*
        * @Path			원무 - 환자정보등록									 		*
        * @Description 	환자정보를 등록한다					*
        * @Author		최민하						 								*
        * 									 											*
        * Created on	2015. 6. 16.                           		 					*
        *									 											*
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";

        

        /***************************************************************************************************
        *                                          dsService 호출                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  this.gfnService(" ",false);   
        +-------------------------------------------------------------------------------------------------*/

        
        this.gfnService("findPatientList",false);

        
        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        

        

        /***************************************************************************************************
        *                                         조회조건 EVENT START                                    *
        /*-------------------------------------------------------------------------------------------------+
        >>  onkeyDown EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	this.gfnService("batchPatientProcess",false);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	var swc=this.Div00.searchWardCombo.value;
        	var edit00=this.Edit00.value
        	this.dsPatient.filter("");
        	this.dsPatient.filter(swc+"=="+edit00);  
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.dsPatient.filter("");
        }

        
        this.Button03_onclick = function(obj,e)
        {		
        	var rowCount = this.dsPatient.getRowCount();
        	var patNo=this.dsPatient.getColumn(rowCount-1,"patNo");
        	this.dsPatient.addRow();
        	this.dsPatient.setColumn(rowCount,"patNo",parseInt(patNo)+1);
        }

        

        /***************************************************************************************************
        *                                          그리드 클릭 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        /***************************************************************************************************
        *                                          콜백 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        
        this.Patient_CallbackFunc = function(svcID,ErrorCode,ErrorMsg){

           if (ErrorCode < 1) {
              alert(svcID + "가 처리되지 않았습니다");
           } else {
              alert(svcID + "의 처리가 완료되었습니다");
           }
        }

        

        this.patNmStc00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.titleDiv.titleStc.addEventHandler("onclick", this.titleDiv_titleStc_onclick, this);
            this.Div00.Grid00.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.smsReceiverStc.addEventHandler("onclick", this.smsReceiverStc_onclick, this);
            this.addPatBtn.addEventHandler("onclick", this.clickBtn, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.addPatBtn00.addEventHandler("onclick", this.clickBtn, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.patNmStc00.addEventHandler("onclick", this.patNmStc00_onclick, this);

        };

        this.loadIncludeScript("HP_PatientForm.xfdl");

       
    };
}
)();
