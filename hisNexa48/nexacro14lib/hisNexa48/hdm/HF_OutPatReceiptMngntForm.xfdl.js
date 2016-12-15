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
                this.set_name("WS_OutPatReceiptMngntForm");
                this.set_classname("WS_OutPatReceiptMngntForm");
                this.set_titletext("외래관리");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("#cfd8dcff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReceiptHist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"trmtYb\" type=\"STRING\" size=\"256\"/><Column id=\"prescYb\" type=\"STRING\" size=\"256\"/><Column id=\"regDept\" type=\"STRING\" size=\"256\"/><Column id=\"cngDept\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGenderCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">남</Col><Col id=\"value\">남</Col></Row><Row><Col id=\"code\">여</Col><Col id=\"value\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBarrAssCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">지체장애</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">뇌병변장애</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">시각장애</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">청각장애</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">언어장애</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">신장장애</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">심장장애</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"value\">간장애</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"value\">호흡기장애</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"value\">장루.요루장애</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"value\">간질장애</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"value\">지적장애</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"value\">자폐성장애</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"value\">정신장애</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNtTt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">초진</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">재진</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">일반</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">건강보험</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">급여1종</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">의료보험</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::hdm/foreign/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">outPatReceiptMngntCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::hdm/foreign/findDiagnosisReceiptList.do</Col><Col id=\"outData\">dsOutpaReceipt=dsOutpaReceipt</Col><Col id=\"callbackFunc\">outPatReceiptMngntCallbackFunc</Col></Row><Row><Col id=\"serviceID\">registerReceipt</Col><Col id=\"URL\">his::hdm/foreign/registerDiagnosisReceipt.do</Col><Col id=\"inData\">dsOutpaReceipt=dsOutpaReceipt:U</Col><Col id=\"callbackFunc\">outPatReceiptMngntCallbackFunc</Col></Row><Row><Col id=\"serviceID\">removeReceipt</Col><Col id=\"URL\">his::hdm/foreign/removeDiagnosisReceipt.do</Col><Col id=\"inData\">dsOutpaReceipt=dsOutpaReceipt:U</Col><Col id=\"callbackFunc\">outPatReceiptMngntCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findPatList</Col><Col id=\"URL\">his::hdm/foreign/findPatList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">outPatReceiptMngntCallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
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

            obj = new Dataset("dsOutpaReceipt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzRsvtYb\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"trmtYb\" type=\"STRING\" size=\"256\"/><Column id=\"prescYb\" type=\"STRING\" size=\"256\"/><Column id=\"regDept\" type=\"STRING\" size=\"256\"/><Column id=\"cngDept\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"expNm\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNwDiv", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">원무접수</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">진료과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#90a4aeff stretch");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "45.6%", "0", null, "60", "44.16%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("외래관리");
            obj.style.set_color("#37474fff");
            obj.style.set_font("bold 20 돋움체");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("WS_OutPatReceiptMngnDiv", "absolute", "1.07%", "65", null, "693", "0.78%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new GroupBox("patMngntGroupBox", "absolute", "0.9%", "11", null, "640", "55.02%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_text("환자조회");
            obj.set_taborder("152");
            obj.style.set_titleimage("URL('theme://images/img_grouptitle_D.png')");
            obj.style.set_background("#90a4aeff");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_color("#37474fff");
            obj.style.set_font("bold 14 돋움");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new GroupBox("receiptGroupBox", "absolute", "45.87%", "11", null, "640", "0.7%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_text("외래환자 접수등록");
            obj.set_taborder("153");
            obj.style.set_titleimage("URL('theme://images/img_grouptitle_D.png')");
            obj.style.set_background("#90a4aeff");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_color("#37474fff");
            obj.style.set_font("bold 14 돋움체");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("patNoStc", "absolute", "1.79%", "46", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("154");
            obj.set_text("환자등록번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("patNmStc", "absolute", "1.79%", "78", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("155");
            obj.set_text("성명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("rrnStc", "absolute", "1.79%", "110", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("156");
            obj.set_text("주민번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("zipStc", "absolute", "1.79%", "142", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("157");
            obj.set_text("우편번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("addrStc", "absolute", "1.79%", "174", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("158");
            obj.set_text("주소");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("telStc", "absolute", "1.79%", "206", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("159");
            obj.set_text("연락처");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("smsNoStc", "absolute", "1.79%", "238", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("160");
            obj.set_text("SMS");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("recNwDateStc", "absolute", "1.79%", "270", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("161");
            obj.set_text("최근내원일");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("barrAssStc", "absolute", "1.79%", "302", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("162");
            obj.set_text("장애종별");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("deathDateStc", "absolute", "1.79%", "334", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("163");
            obj.set_text("사망일시");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("certfctNoStc", "absolute", "1.79%", "366", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("164");
            obj.set_text("의료보험증");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("insuNmStc", "absolute", "1.79%", "398", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("165");
            obj.set_text("피보험자명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("insuRrnStc", "absolute", "1.79%", "430", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("166");
            obj.set_text("주민번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("applyStc", "absolute", "1.79%", "462", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("167");
            obj.set_text("적용기간");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("noteStc", "absolute", "1.79%", "494", null, "28", "88.26%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("168");
            obj.set_text("메모");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "12.14%", "46", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("169");
            obj.set_value("선택해주세요");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Button("searchPatNoBtn", "absolute", "22.39%", "44", null, "32", "75.02%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("170");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "12.14%", "78", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("173");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("rrn1Ed", "absolute", "12.14%", "110", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("174");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("zipEd", "absolute", "12.14%", "142", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("175");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("addrEd", "absolute", "12.14%", "174", null, "28", "56.52%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("176");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("telEd", "absolute", "12.14%", "206", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("177");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("smsNoEd", "absolute", "12.14%", "238", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("178");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("certfctNoEd", "absolute", "12.14%", "366", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("179");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("insuNmEd", "absolute", "12.14%", "398", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("180");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("insuRrn1Ed", "absolute", "12.14%", "430", null, "28", "78.11%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("181");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("noteTextArea", "absolute", "12.14%", "494", null, "148", "55.82%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("182");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Button("addReceiptBtn", "absolute", "82.64%", "658", null, "28", "9.62%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("185");
            obj.set_text("진료접수등록");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Button("delReceiptBtn", "absolute", "91.04%", "658", null, "28", "1.22%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("186");
            obj.set_text("진료접수취소");
            obj.style.set_background("#848484ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 10 돋움");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "21.99%", "111", null, "26", "77.01%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("187");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("rrn2Ed", "absolute", "23.28%", "110", null, "28", "66.97%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("188");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Radio("genderRadio", "absolute", "34.13%", "111", null, "27", "58.61%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("189");
            obj.set_columncount("2");
            obj.set_innerdataset("dsGenderCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_buttonimage("URL('theme://images/btn_radio_N.png')");
            obj = new CheckBox("smsCheck", "absolute", "22.39%", "239", null, "26", "75.32%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("191");
            obj.style.set_buttonalign("center middle");
            obj.style.set_align("center middle");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("smsReceiverStc", "absolute", "24.68%", "238", null, "28", "65.37%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("192");
            obj.set_text("관계");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("smsReceiverEd", "absolute", "35.02%", "238", null, "28", "55.82%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("193");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Calendar("recNwDateCal", "absolute", "12.14%", "271", null, "27", "78.01%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("194");
            obj = new Calendar("deathDateCal", "absolute", "12.14%", "335", null, "27", "78.01%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("195");
            obj = new Combo("barrAssCombo", "absolute", "12.24%", "303", null, "26", "78.01%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("198");
            obj.set_innerdataset("dsBarrAssCode");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj = new Calendar("applyStartDateCal", "absolute", "12.14%", "463", null, "27", "78.01%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("199");
            obj = new Calendar("applyEndDateCal", "absolute", "23.28%", "463", null, "27", "66.87%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("200");
            obj = new Static("Static02", "absolute", "21.99%", "463", null, "26", "77.01%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("201");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("trmtDeptStc", "absolute", "46.87%", "46", null, "28", "45.17%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("202");
            obj.set_text("진료과");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("expStc", "absolute", "46.87%", "78", null, "28", "45.17%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("203");
            obj.set_text("진료의사");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("patNoStc16", "absolute", "46.86%", "141", null, "28", "45.15%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("204");
            obj.set_text("감면사항");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("expCdEd", "absolute", "55.26%", "141", null, "28", "39.2%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("207");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Button("searchExpCdBtn", "absolute", "61.21%", "139", null, "32", "36.19%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("210");
            obj.set_cssclass("AddBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDeptNmEd", "absolute", "64.18%", "46", null, "28", "25.37%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("211");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctNmEd", "absolute", "64.18%", "78", null, "28", "25.37%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("212");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("expNmEd", "absolute", "64.14%", "141", null, "28", "25.35%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("213");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("ntTtStc", "absolute", "76.82%", "46", null, "28", "15.12%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("214");
            obj.set_text("초/재진");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("nwDivStc", "absolute", "76.82%", "78", null, "28", "15.12%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("215");
            obj.set_text("내원구분");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("trmtDateStc", "absolute", "76.85%", "142", null, "28", "15.16%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("216");
            obj.set_text("진료일시");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Combo("ntTtCombo", "absolute", "85.27%", "47", null, "26", "2.99%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("217");
            obj.set_innerdataset("dsNtTt");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Static("patTypeStc", "absolute", "76.85%", "110", null, "28", "15.16%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("218");
            obj.set_text("환자유형");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Combo("nwDivCombo", "absolute", "85.27%", "79", null, "26", "2.99%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("219");
            obj.set_innerdataset("dsNwDiv");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Combo("patTypeCombo", "absolute", "85.25%", "111", null, "26", "3.02%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("220");
            obj.set_innerdataset("dsPatType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj = new Calendar("trmtDateCal", "absolute", "85.25%", "143", null, "27", "3.02%", null, this.WS_OutPatReceiptMngnDiv);
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj.set_taborder("221");
            obj = new Static("trmtHistTitleStc", "absolute", "46.87%", "190", null, "28", "43.18%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("222");
            obj.set_text("수진이력");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Grid("trmtHistGrid", "absolute", "46.87%", "222", null, "188", "1.39%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("223");
            obj.set_binddataset("dsReceiptHist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#455a64ff;color:white;\" text=\"진료일자\"/><Cell col=\"1\" style=\"background:#455a64ff;color:white;\" text=\"진료과\"/><Cell col=\"2\" style=\"background:#455a64ff;color:white;\" text=\"진료의사\"/><Cell col=\"3\" style=\"background:#455a64ff;color:white;\" text=\"유형\"/><Cell col=\"4\" style=\"background:#455a64ff;color:white;\" text=\"입원여부\"/><Cell col=\"5\" style=\"background:#455a64ff;color:white;\" text=\"진단명\"/></Band><Band id=\"body\" style=\"selectbackground:#b0bec5ff;selectcolor:black;\"><Cell text=\"bind:trmtDate\"/><Cell col=\"1\" text=\"bind:trmtDeptNm\"/><Cell col=\"2\" text=\"bind:trmtDoct\"/><Cell col=\"3\" text=\"bind:patType\"/><Cell col=\"4\" text=\"bind:hosptlzYb\"/><Cell col=\"5\" text=\"bind:dgnsNm\"/></Band></Format></Formats>");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Static("noTrmtHistTitleStc", "absolute", "46.86%", "422", null, "28", "41.73%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("224");
            obj.set_text("당일&미진료 접수내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Grid("noTrmtHistGrid", "absolute", "46.87%", "454", null, "188", "1.39%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("225");
            obj.set_binddataset("dsOutpaReceipt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#455a64ff;color:white;\" text=\"접수번호\"/><Cell col=\"1\" style=\"background:#455a64ff;color:white;\" text=\"접수일자\"/><Cell col=\"2\" style=\"background:#455a64ff;color:white;\" text=\"진료일자\"/><Cell col=\"3\" style=\"background:#455a64ff;color:white;\" text=\"환자명\"/><Cell col=\"4\" style=\"background:#455a64ff;color:white;\" text=\"진료과\"/><Cell col=\"5\" style=\"background:#455a64ff;color:white;\" text=\"진료의사\"/><Cell col=\"6\" style=\"background:#455a64ff;color:white;\" text=\"유형\"/></Band><Band id=\"body\" style=\"selectbackground:#b0bec5ff;selectcolor:black;\"><Cell text=\"bind:outpaReceiptNo\"/><Cell col=\"1\" text=\"bind:receiptDate\"/><Cell col=\"2\" text=\"bind:trmtDate\"/><Cell col=\"3\" text=\"bind:patNm\"/><Cell col=\"4\" text=\"bind:trmtDeptNm\"/><Cell col=\"5\" text=\"bind:trmtDoctNm\"/><Cell col=\"6\" text=\"bind:patType\"/></Band></Format></Formats>");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Button("trmtSchBtn", "absolute", "66.5%", "112", null, "23", "25.35%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("226");
            obj.set_text("진료일정조회");
            obj.style.set_background("#848484ff");
            obj.style.set_color("ivory");
            obj.style.set_font("bold 10 Arial Narrow");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("trmtTimeEdit", "absolute", "85.25%", "175", null, "27", "3.02%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("227");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctCdEd", "absolute", "55.26%", "78", null, "28", "39.2%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("228");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDeptCdEd", "absolute", "55.26%", "46", null, "28", "39.2%", null, this.WS_OutPatReceiptMngnDiv);
            obj.set_taborder("229");
            obj.set_readonly("true");
            this.WS_OutPatReceiptMngnDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#90a4aeff stretch");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 693, this.WS_OutPatReceiptMngnDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.WS_OutPatReceiptMngnDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WS_OutPatReceiptMngntForm");
            		p.set_titletext("외래관리");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","WS_OutPatReceiptMngnDiv.patNmEd","value","dsPat","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","WS_OutPatReceiptMngnDiv.rrn1Ed","value","dsPat","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","WS_OutPatReceiptMngnDiv.rrn2Ed","value","dsPat","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","WS_OutPatReceiptMngnDiv.genderRadio","value","dsPat","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","WS_OutPatReceiptMngnDiv.zipEd","value","dsPat","zip");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","WS_OutPatReceiptMngnDiv.addrEd","value","dsPat","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","WS_OutPatReceiptMngnDiv.telEd","value","dsPat","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","WS_OutPatReceiptMngnDiv.smsNoEd","value","dsPat","smsReceiveNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","WS_OutPatReceiptMngnDiv.smsCheck","value","dsPat","smsReceiveYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","WS_OutPatReceiptMngnDiv.smsReceiverEd","value","dsPat","smsReceiver");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","WS_OutPatReceiptMngnDiv.recNwDateCal","value","dsPat","recNwDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","WS_OutPatReceiptMngnDiv.barrAssCombo","value","dsPat","barrAss");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","WS_OutPatReceiptMngnDiv.deathDateCal","value","dsPat","deathDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","WS_OutPatReceiptMngnDiv.certfctNoEd","value","dsPat","certfctNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","WS_OutPatReceiptMngnDiv.insuNmEd","value","dsPat","insuNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","WS_OutPatReceiptMngnDiv.insuRrn1Ed","value","dsPat","insuRrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","WS_OutPatReceiptMngnDiv.applyStartDateCal","value","dsPat","applyStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","WS_OutPatReceiptMngnDiv.applyEndDateCal","value","dsPat","applyEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","WS_OutPatReceiptMngnDiv.noteTextArea","value","dsPat","note");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HF_OutPatReceiptMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HF_OutPatReceiptMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HF_OutPatReceiptMngntForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 외래관리 및 진료접수관리                             		                *
        *                                                                   			*
        * @Path			원무 - 외래관리									 	     	*
        * @Description 	외래환자등록 및 수정, 외래진료접수 관리					*
        * @Author		강현준						 								    *
        * 									 											*
        * Created on	2016. 11. 25.                           		 				*
        *									 											*
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        var receiptFlag=0;

        /***************************************************************************************************
        *                                         조회조건 EVENT START                                    *
        /*-------------------------------------------------------------------------------------------------+
        >>  onkeyDown EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.edOnkeyDown = function(obj,e){
        	if(e.keycode==13){		
        		this.clickSearchBtn();
        	}				
        }

        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj){	
        	switch(obj){ 
        		case this.WS_OutPatReceiptMngnDiv.searchTrmtDeptCdBtn:	//진료과 검색
        			this.clickSearchTrmtDeptCdBtn();
        			break;
        		case this.WS_OutPatReceiptMngnDiv.searchTrmtDoctCdBtn:	//진료의사 검색
        			this.clickSearchTrmtDoctCdBtn();
        			break;
        		case this.WS_OutPatReceiptMngnDiv.searchExpCdBtn:	    //감면대상 검색
        			this.clickSearchExpCdBtn();
        			break;
        		case this.WS_OutPatReceiptMngnDiv.delReceiptBtn:	    //접수취소
        			this.clickDelReceiptBtn();
        			break;
        		case this.WS_OutPatReceiptMngnDiv.addReceiptBtn:	    //접수등록
        			this.clickAddReceiptBtn();
        			break;
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >> 진료과,진료의사,감면사항 검색 팝업의 그리드를 더블클릭할 때 호출하는 함수
        +-------------------------------------------------------------------------------------------------*/

        this.setCode = function(code,arr){
        	switch(code){
        		case "GP080":
        			this.WS_OutPatReceiptMngnDiv.trmtDeptCdEd.set_value(arr[0]);
        			this.WS_OutPatReceiptMngnDiv.trmtDeptNmEd.set_value(arr[1]);
        			break;
        		case "MD001":
        			this.WS_OutPatReceiptMngnDiv.expCdEd.set_value(arr[0]);
        			this.WS_OutPatReceiptMngnDiv.expNmEd.set_value(arr[1]);
        			break;
        	}
        }
        this.setDoct = function(arr){
        	this.WS_OutPatReceiptMngnDiv.trmtDoctCdEd.set_value(arr[0]);
        	this.WS_OutPatReceiptMngnDiv.trmtDoctNmEd.set_value(arr[1]);
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/
             

        
        this.clickSearchTrmtDeptCdBtn = function(){	//진료과 조회
        	this.gfnCodePopup("GP080");
        }  
        this.clickSearchTrmtDoctCdBtn = function(){	//진료의사 조회
        	if(this.WS_OutPatReceiptMngnDiv.trmtDeptCdEd.value==null){
        		alert("진료과를 선택해주세요");
        	}else{
        		this.gfnDoctPopup(this.WS_OutPatReceiptMngnDiv.trmtDeptCdEd.value,this.WS_OutPatReceiptMngnDiv.trmtDeptNmEd.value);
        	}
        }
        this.clickSearchExpCdBtn = function(){
        	this.gfnCodePopup("MD001");
        }

        /*-------------------------------------------------------------------------------------------------+
        >> 접수취소
        +-------------------------------------------------------------------------------------------------*/

        this.clickDelReceiptBtn = function(){
        	this.dsOutpaReceipt.deleteRow(this.dsOutpaReceipt.rowposition);
        	this.gfnService("removeReceipt","false");
        }

        /*-------------------------------------------------------------------------------------------------+
        >> 접수등록
        +-------------------------------------------------------------------------------------------------*/

        this.clickAddReceiptBtn = function(){
        	var addRow = this.dsOutpaReceipt.addRow();
        	this.dsOutpaReceipt.setColumn(addRow,"patNo",this.WS_OutPatReceiptMngnDiv.patNoEd.value);
        	this.dsOutpaReceipt.setColumn(addRow,"receiptDate",this.gfnLocalDate());
        	this.dsOutpaReceipt.setColumn(addRow,"trmtDept",this.WS_OutPatReceiptMngnDiv.trmtDeptCdEd.value);
        	this.dsOutpaReceipt.setColumn(addRow,"trmtDoct",this.WS_OutPatReceiptMngnDiv.trmtDoctCdEd.value);
        	this.dsOutpaReceipt.setColumn(addRow,"expCd",this.WS_OutPatReceiptMngnDiv.expCdEd.value);
        	this.dsOutpaReceipt.setColumn(addRow,"ntTtYb",this.WS_OutPatReceiptMngnDiv.ntTtCombo.text);
        	this.dsOutpaReceipt.setColumn(addRow,"nwDiv",this.WS_OutPatReceiptMngnDiv.nwDivCombo.text);
        	this.dsOutpaReceipt.setColumn(addRow,"trmtDate",this.WS_OutPatReceiptMngnDiv.trmtDateCal.value);
        	this.dsOutpaReceipt.setColumn(addRow,"patType",this.WS_OutPatReceiptMngnDiv.patTypeCombo.text);	
        	this.dsOutpaReceipt.setColumn(addRow,"trmtTime",this.WS_OutPatReceiptMngnDiv.trmtTimeEdit.value);
        	this.dsOutpaReceipt.setColumn(addRow,"trmtYb",'N');
        	
        	this.gfnService("registerReceipt","true");
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  grid EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.WS_OutPatReceiptMngnDiv.noTrmtHistGrid_oncellclick = function(obj,e){
        	this.WS_OutPatReceiptMngnDiv.delReceiptBtn.set_visible(true);
        }

        /***************************************************************************************************
        *                                       CallBack Function Start                                    *
        ***************************************************************************************************/

        this.outPatReceiptMngntCallbackFunc = function(svcID,errorCode,errorMsg){
        	if(errorCode<0) {
        		this.gfnErrorPopup(svcID, errorMsg);
        	}else{
        		if(svcID=="findPat"){
        			if(this.dsPat.rowcount==0){
        				alert("조건에 맞는 환자조회 결과가 없습니다.");
        				receiptFlag=0;
        			}else{				
        				this.WS_OutPatReceiptMngnDiv.patNoEd.set_value(this.dsPat.getColumn(0,'patNo'));				
        				this.dsService.setColumn(1,"argument",'patNo='+this.dsPat.getColumn(0,'patNo'));
        				this.gfnService("findReceiptList","false");
        				receiptFlag=1;
        			}
        		}else if(svcID=="findReceiptList"){			
        			this.dsReceiptHist.copyData(this.dsOutpaReceipt);
        			this.dsOutpaReceipt.filter("trmtYb=='N'");
        			this.dsReceiptHist.filter("trmtYb=='Y'");
        			receiptFlag=1;
        		}else if(svcID=="findLastPatNo"){
        			this.WS_OutPatReceiptMngnDiv.patNoEd.set_value(this.dsPat.getColumn(0,'patNo'));
        		}else if(svcID="registerReceipt"){
        			this.gfnService("findReceiptList","false");
        		}
        		else if(svcID="removeReceipt"){
        			this.gfnService("findReceiptList","false");
        		}
        	}
        }

        

        this.WS_OutPatReceiptMngnDiv_patNoEd_oneditclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){
        		this.WS_OutPatReceiptMngnDiv.patNoEd.set_value(arrRtn[0]);
        	}
        }

        this.WS_OutPatReceiptMngnDiv_searchPatNoBtn_onclick = function(obj,e)
        {
        	if(this.WS_OutPatReceiptMngnDiv.patNoEd.value==null){
        		alert("조회할 환자를 선택하세요!");
        		return;
        	}
        	this.dsService.setColumn(0,"argument",'patNo='+this.WS_OutPatReceiptMngnDiv.patNoEd.value);
        	this.dsPat.clearData();
        	this.gfnService("findPat","false");	
        }

        this.WS_OutPatReceiptMngnDiv_trmtSchBtn_onclick = function(obj,e)
        {
        	application.open(
        	   "의사진료일정팝업",
        	   "hdm::HF_DoctTrmtSchdMngntForm.xfdl",
        	   this.parent,
        	   {},
        	   "showtitlebar=true showstatusbar=false",
        	   200, 300,
        	   this
           );
           
           this.setTrmtInfo = function(arrTrmt){
        		this.WS_OutPatReceiptMngnDiv.trmtDeptNmEd.set_value(arrTrmt[0]);		
        		this.WS_OutPatReceiptMngnDiv.trmtDoctNmEd.set_value(arrTrmt[1]);
        		this.WS_OutPatReceiptMngnDiv.trmtDoctCdEd.set_value(arrTrmt[2]);
        		this.WS_OutPatReceiptMngnDiv.trmtDeptCdEd.set_value(arrTrmt[3]);
        		this.WS_OutPatReceiptMngnDiv.trmtTimeEdit.set_value(arrTrmt[4]);
        	}
        	
        	this.setDate = function(date){
        		this.WS_OutPatReceiptMngnDiv.trmtDateCal.set_value(date);
        		}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.WS_OutPatReceiptMngnDiv.patMngntGroupBox.addEventHandler("onlbuttondown", this.WS_OutPatReceiptMngnDiv_patMngntGroupBox_onlbuttondown, this);
            this.WS_OutPatReceiptMngnDiv.patNoEd.addEventHandler("oneditclick", this.WS_OutPatReceiptMngnDiv_patNoEd_oneditclick, this);
            this.WS_OutPatReceiptMngnDiv.searchPatNoBtn.addEventHandler("onclick", this.WS_OutPatReceiptMngnDiv_searchPatNoBtn_onclick, this);
            this.WS_OutPatReceiptMngnDiv.addReceiptBtn.addEventHandler("onclick", this.clickBtn, this);
            this.WS_OutPatReceiptMngnDiv.delReceiptBtn.addEventHandler("onclick", this.clickBtn, this);
            this.WS_OutPatReceiptMngnDiv.searchExpCdBtn.addEventHandler("onclick", this.clickBtn, this);
            this.WS_OutPatReceiptMngnDiv.trmtSchBtn.addEventHandler("onclick", this.WS_OutPatReceiptMngnDiv_trmtSchBtn_onclick, this);

        };

        this.loadIncludeScript("HF_OutPatReceiptMngntForm.xfdl");

       
    };
}
)();
