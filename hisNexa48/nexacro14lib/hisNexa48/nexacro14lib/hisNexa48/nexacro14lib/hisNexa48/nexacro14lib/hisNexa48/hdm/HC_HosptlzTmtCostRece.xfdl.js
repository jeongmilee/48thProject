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
                this.set_name("HC_HosptlzTmtCostRece");
                this.set_classname("HC_HosptlzTmtCostRece");
                this.set_titletext("입원진료비 수납");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("#cfd8dcff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD020", this);
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

            obj = new Dataset("dsSC070", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmEmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSC071", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzPatRece", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"receState\" type=\"STRING\" size=\"256\"/><Column id=\"receDate\" type=\"STRING\" size=\"256\"/><Column id=\"receType\" type=\"STRING\" size=\"256\"/><Column id=\"receAmt\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"alrdReceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"recp\" type=\"STRING\" size=\"256\"/><Column id=\"procWorker\" type=\"STRING\" size=\"256\"/><Column id=\"outAmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsReceType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">현금</Col></Row><Row><Col id=\"value\">카드</Col></Row><Row><Col id=\"value\">계좌이체</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHosptlzTrmtCost</Col><Col id=\"URL\">his::hdm/consultationfee/findInpatientPayment.do</Col><Col id=\"outData\">dshosptlzPat=dshosptlzPat dsHosptlzTrmtCost=dsHosptlzTrmtCost</Col></Row><Row><Col id=\"serviceID\">findHosptlzPatRece</Col><Col id=\"URL\">his::hdm/consultationfee/findHosptlzPatRece.do</Col><Col id=\"outData\">dsHosptlzPatRece=dsHosptlzPatRece</Col><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">callHosptlzPatRece</Col><Col id=\"URL\">his::hdm/consultationfee/callHosptlzPatRece.do</Col><Col id=\"inData\">dsHosptlzPatRece=dsHosptlzPatRece:u</Col><Col id=\"outData\">dsHosptlzPatRece=dsHosptlzPatRece dshosptlzPat=dshosptlzPat dsHosptlzTrmtCost=dsHosptlzTrmtCost</Col></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">gdsEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBindCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsGP080</Col></Row><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsSC070</Col></Row><Row><Col id=\"code\">SC071</Col><Col id=\"dsName\">dsSC071</Col></Row><Row><Col id=\"code\">MD020</Col><Col id=\"dsName\">dsMD020</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP080", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDscgGubun", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">입원</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">퇴원</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">가퇴원</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dshosptlzPat", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"0\"/><Column id=\"gender\" type=\"STRING\" size=\"0\"/><Column id=\"age\" type=\"STRING\" size=\"0\"/><Column id=\"tel\" type=\"STRING\" size=\"0\"/><Column id=\"note\" type=\"STRING\" size=\"0\"/><Column id=\"grtorNm\" type=\"STRING\" size=\"0\"/><Column id=\"grtorRrn\" type=\"STRING\" size=\"0\"/><Column id=\"grtorTel\" type=\"STRING\" size=\"0\"/><Column id=\"rship\" type=\"STRING\" size=\"0\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"0\"/><Column id=\"hroom\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzRoute\" type=\"STRING\" size=\"0\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"0\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"0\"/><Column id=\"expCd\" type=\"STRING\" size=\"0\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"0\"/><Column id=\"receState\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHosptlzTrmtCost", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"hosptlzTrmtCostSeq\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"0\"/><Column id=\"patNo\" type=\"STRING\" size=\"0\"/><Column id=\"exmntAtc\" type=\"STRING\" size=\"0\"/><Column id=\"sal\" type=\"STRING\" size=\"0\"/><Column id=\"nonSal\" type=\"STRING\" size=\"256\"/><Column id=\"expAmt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("trmtCostHistGrid", "absolute", "29.28%", "396", null, "322", "36.08%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsHosptlzTrmtCost");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"227\"/><Column size=\"211\"/></Columns><Rows><Row size=\"72\"/><Row size=\"80\"/><Row size=\"87\"/><Row size=\"83\"/></Rows><Band id=\"body\"><Cell celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"총 진료비\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)+dataset.getSum(&quot;parseInt(nonSal)&quot;)\"/><Cell row=\"1\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"급여 총금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)\"/><Cell row=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"비급여 금액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(nonSal)&quot;)\"/><Cell row=\"3\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"본인부담금\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)*0.2+dataset.getSum(&quot;parseInt(nonSal)&quot;)\" mask=\"9,999\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("receHistGrid", "absolute", "63.92%", "396", null, "368", "0.56%", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("dsHosptlzPatRece");
            obj.set_scrollbars("autohorz");
            obj.set_useselcolor("false");
            obj.style.set_color("#5f5f5fff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"115\"/><Column size=\"295\"/></Columns><Rows><Row size=\"42\"/><Row size=\"46\"/><Row size=\"47\"/><Row size=\"48\"/><Row size=\"47\"/><Row size=\"43\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"수납일자\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"mask\" text=\"bind:receDate\" mask=\"@@@@-@@-@@\"/><Cell row=\"1\" colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"수납유형\"/><Cell row=\"1\" col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:receType\" combodataset=\"dsReceType\" combocodecol=\"value\" combodatacol=\"value\"/><Cell row=\"2\" colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"기수납액\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" edittype=\"text\" text=\"bind:alrdReceAmt\"/><Cell row=\"3\" colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"수납금액\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" edittype=\"text\" text=\"bind:receAmt\"/><Cell row=\"4\" colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"수납자\"/><Cell row=\"4\" col=\"2\" edittype=\"text\" text=\"bind:recp\"/><Cell row=\"5\" colspan=\"2\" celltype=\"head\" style=\"background:#455a64ff;color:white;\" text=\"처리자\"/><Cell row=\"5\" col=\"2\" edittype=\"text\" text=\"bind:procWorker\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "611", null, "150", "72.48%", null, this);
            obj.set_taborder("2");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "11.97%", "17", null, "28", "61.27%", null, this.Div02);
            obj.set_taborder("26");
            obj.set_text("보증인성명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("grtorNmEdt", "absolute", "38.73%", "17", null, "28", "21.48%", null, this.Div02);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "11.97%", "49", null, "28", "61.27%", null, this.Div02);
            obj.set_taborder("28");
            obj.set_text("환 자 관 계");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("patRship", "absolute", "38.95%", "49", null, "28", "21.51%", null, this.Div02);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "11.97%", "81", null, "28", "61.27%", null, this.Div02);
            obj.set_taborder("30");
            obj.set_text("보증인주민번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("grtorRrnEdt", "absolute", "38.73%", "81", null, "28", "18.31%", null, this.Div02);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "11.97%", "113", null, "28", "61.27%", null, this.Div02);
            obj.set_taborder("32");
            obj.set_text("보증인전화번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("grtorPhonNoEdt", "absolute", "38.73%", "113", null, "28", "18.31%", null, this.Div02);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("receHistGrid00", "absolute", "29.36%", "718", null, "47", "36.08%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsHosptlzPatRece");
            obj.set_scrollbars("autohorz");
            obj.set_useselcolor("false");
            obj.style.set_color("#5f5f5fff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"331\"/></Columns><Rows><Row size=\"47\"/></Rows><Band id=\"body\"><Cell celltype=\"head\" style=\"background:#263238ff;color:white;\" text=\"미수금액\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" text=\"bind:outAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("trmtCostReceBtn", "absolute", "91.5%", "361", null, "30", "0.68%", null, this);
            obj.set_taborder("4");
            obj.set_text("수납");
            obj.set_cssclass("ApBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("cornsilk");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("ApBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("hosptlzHistGrid", "absolute", "29.3%", "112", null, "244", "0.68%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dshosptlzPat");
            obj.set_scrollbars("autohorz");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"72\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"입원기간\"/><Cell col=\"2\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"진료과\"/><Cell col=\"3\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"담당의\"/><Cell col=\"4\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"환자상태\"/><Cell col=\"5\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"수납상태\"/><Cell row=\"1\" style=\"background:#455a64ff;color:white;\" text=\"입원일자\"/><Cell row=\"1\" col=\"1\" style=\"background:#455a64ff;color:white;\" text=\"퇴원일자\"/></Band><Band id=\"body\" style=\"selectbackground:#607d8bff;\"><Cell displaytype=\"date\" text=\"bind:hosptlzDate\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:dscgDate\"/><Cell col=\"2\" text=\"bind:trmtDept\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:trmtDoct\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:dscgGubun\" combodataset=\"dsDscgGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" text=\"bind:receState\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "4", null, "60", "-0.48%", null, this);
            obj.set_taborder("7");
            obj.set_text("입원진료비 수납");
            obj.style.set_background("#90a4aeff stretch");
            obj.style.set_color("#37474fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 arial");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.07%", "82", null, "27", "81.93%", null, this);
            obj.set_taborder("8");
            obj.set_text("환자 정보");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "29%", "81", null, "26", "53.91%", null, this);
            obj.set_taborder("9");
            obj.set_text("입원 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "29.3%", "364", null, "27", "53.71%", null, this);
            obj.set_taborder("10");
            obj.set_text("진료 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "64.26%", "364", null, "27", "18.75%", null, this);
            obj.set_taborder("11");
            obj.set_text("수납 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "5.12%", "587", null, "27", "77.84%", null, this);
            obj.set_taborder("12");
            obj.set_text("보증인 정보");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.68%", "112", null, "470", "71.58%", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Edit("patNoCdEd", "absolute", "23.94%", "10", null, "28", "53.52%", null, this.Div01);
            obj.set_taborder("138");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            obj.set_value("선택해주세요");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "2.46%", "10", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("139");
            obj.set_text("등록번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "2.46%", "41", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("140");
            obj.set_text("성명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "23.59%", "41", null, "28", "29.93%", null, this.Div01);
            obj.set_taborder("141");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.46%", "73", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("142");
            obj.set_text("주민번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "2.46%", "105", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("143");
            obj.set_text("성별");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("genderEd", "absolute", "23.94%", "105", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("144");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("ageEd", "absolute", "23.94%", "137", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("145");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "2.46%", "137", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("146");
            obj.set_text("나이");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "2.46%", "169", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("147");
            obj.set_text("휴대폰");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("phonNoEdt", "absolute", "23.94%", "169", null, "28", "25%", null, this.Div01);
            obj.set_taborder("148");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "2.46%", "233", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("149");
            obj.set_text("진료과");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("trmtDeptCdEd", "absolute", "23.94%", "233", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("150");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("trmtDeptNmEd", "absolute", "57.04%", "233", null, "28", "11.27%", null, this.Div01);
            obj.set_taborder("151");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("hroomNmEd", "absolute", "57.04%", "297", null, "28", "11.27%", null, this.Div01);
            obj.set_taborder("152");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("hroomEd", "absolute", "23.94%", "297", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("153");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "2.46%", "297", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("154");
            obj.set_text("병실");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "2.46%", "329", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("155");
            obj.set_text("입원경로");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("hosptlzRouteCdEd", "absolute", "23.94%", "329", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("156");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("hosptlzRouteNmEd", "absolute", "57.04%", "329", null, "28", "11.27%", null, this.Div01);
            obj.set_taborder("157");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Calendar("dscgPlnDayCal", "absolute", "23.94%", "362", null, "26", "41.2%", null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_readonly("true");
            obj.style.set_align("left");
            obj.getSetter("class").set("AreaCal");
            obj = new Static("Static10", "absolute", "2.46%", "361", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("159");
            obj.set_text("퇴원예정일");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "2.46%", "201", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("160");
            obj.set_text("환자유형");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("patTypeCdEdt", "absolute", "23.94%", "201", null, "28", "44.01%", null, this.Div01);
            obj.set_taborder("161");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "2.46%", "393", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("162");
            obj.set_text("메모");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("noteArea", "absolute", "23.94%", "393", null, "71", "1.76%", null, this.Div01);
            obj.set_taborder("163");
            obj.set_readonly("true");
            obj.style.set_align("left");
            obj.getSetter("class").set("AreaArea");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("titleEdt05", "absolute", "52.82%", "73", null, "26", "41.9%", null, this.Div01);
            obj.set_taborder("164");
            obj.set_text("-");
            obj.getSetter("class").set("TStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("rrn1Ed", "absolute", "23.94%", "73", null, "28", "51.06%", null, this.Div01);
            obj.set_taborder("165");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("rrn2Ed", "absolute", "57.75%", "73", null, "28", "17.61%", null, this.Div01);
            obj.set_taborder("166");
            obj.set_password("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.46%", "265", null, "28", "77.11%", null, this.Div01);
            obj.set_taborder("167");
            obj.set_text("병동");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("wardEd", "absolute", "23.94%", "265", null, "28", "42.96%", null, this.Div01);
            obj.set_taborder("168");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("wardNmEd", "absolute", "59.51%", "265", null, "28", "7.75%", null, this.Div01);
            obj.set_taborder("169");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("patNoBtn", "absolute", "49.65%", "10", null, "25", "42.61%", null, this.Div01);
            obj.set_taborder("170");
            obj.set_cssclass("PBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 solid @gradation");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_shadow("outer 0,0 0 gray");
            obj.getSetter("class").set("PBtn");
            this.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 150, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 470, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HC_HosptlzTmtCostRece");
            		p.set_titletext("입원진료비 수납");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.patNmEd","value","dshosptlzPat","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.rrn1Ed","value","dshosptlzPat","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.rrn2Ed","value","dshosptlzPat","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.genderEd","value","dshosptlzPat","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.ageEd","value","dshosptlzPat","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.phonNoEdt","value","dshosptlzPat","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.patTypeCdEdt","value","dshosptlzPat","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div01.trmtDeptCdEd","value","dshosptlzPat","trmtDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.wardEd","value","dshosptlzPat","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div01.hroomEd","value","dshosptlzPat","hroom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div01.hosptlzRouteCdEd","value","dshosptlzPat","hosptlzRoute");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.dscgPlnDayCal","value","dshosptlzPat","dscgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div01.noteArea","value","dshosptlzPat","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div02.grtorNmEdt","value","dshosptlzPat","grtorNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div02.patRship","value","dshosptlzPat","rship");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div02.grtorRrnEdt","value","dshosptlzPat","grtorRrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div02.grtorPhonNoEdt","value","dshosptlzPat","grtorTel");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HC_HosptlzTmtCostRece.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HC_HosptlzTmtCostRece.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HC_HosptlzTmtCostRece.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 입원진료비 수납 관리                                                    	*
        *                                                                               *
        * @Path		    WH_HosptlzTmtCostRece.xfdl                     	                *
        * @Description 	입원진료비 수납 관리                	   	                    *
        * @Author	    박영희	(modification by 강현준)				                *
        * 									                                            *
        * Created on 2016. 11. 25.                             		                    *
        *									                                            *
        ********************************************************************************/

        

        /**************************************************************************************************
        *                                          import                                                 *
        **************************************************************************************************/
        //include "scripts::commonScripts.xjs";           // 공통 스크립트
        //include "scripts::wonScripts.xjs";

        this.outpaReceiptNo;							// 외래접수번호
        this.hosptlzReceiptNo;						    // 입원접수번호

        

        
        /**************************************************************************************************
        *                                       onload event                                              *
        **************************************************************************************************/
        this.WH_HosptlzTmtCostRece_onload = function(obj,e)
        {
        	this.gfnService("empInfo");
        	this.gfnBind();
        	this.dsHmEmp.filter("jobrk=='의사'");
        }

        

        this.matchCdNm = function(){
        	var trmtDept = this.dshosptlzPat.getColumn(0, "trmtDept");
        	var ward = this.dshosptlzPat.getColumn(0, "ward");
        	var hroom = this.dshosptlzPat.getColumn(0, "hroom");
        	var hosptlzRoute = this.dshosptlzPat.getColumn(0, "hosptlzRoute");
        	var trmtDeptNm = this.dsGP080.lookup("code", trmtDept, "bigValue");
        	var wardNm = this.dsSC070.lookup("code", ward, "value");
        	var hroomNm = this.dsSC071.lookup("code", hroom, "value");
        	var hosptlzRouteNm = this.dsMD020.lookup("code", hosptlzRoute, "value");
        	
        	this.Div01.trmtDeptNmEd.set_value(trmtDeptNm);
        	this.Div01.wardNmEd.set_value(wardNm);
        	this.Div01.hroomNmEd.set_value(hroomNm);
        	this.Div01.hosptlzRouteNmEd.set_value(hosptlzRouteNm);
        }

        

        /***************************************************************************************************
        *                                 환자번호 검색 Button click event                               *
        ***************************************************************************************************/
        this.Div01_patNoCdEd_oneditclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(pat)
        {
        	alert(pat[4]+", "+pat[5]);
           this.Div01.patNoCdEd.set_value(pat[0]);
           this.outpaReceiptNo = pat[4];
           this.hosptlzReceiptNo = pat[5];
        }
        }

        

        
        /**************************************************************************************************
        *                                 환자 조회 button click event                                   *
        ***************************************************************************************************/
        this.Div01_patNoBtn_onclick = function(obj,e)
        {
        	var patNo = this.Div01.patNoCdEd.value;
        	if(patNo==null){
        		alert("환자등록번호를 입력하세요.");
        		return;
        	}else if(this.hosptlzReceiptNo==null){
        		alert("입원환자가 아닙니다");
        		return;
        	}else{
        		var argument = 'outpaReceiptNo='+this.outpaReceiptNo;
        		this.dsService.setColumn(0,"argument",argument);
        		this.gfnService("findHosptlzTrmtCost","false");		
        		
        		var argument1 = 'hosptlzReceiptNo='+this.hosptlzReceiptNo;
        		alert(argument1);
        		this.dsService.setColumn(1, "argument", argument1);
        		this.gfnService("findHosptlzPatRece","false");
        		this.matchCdNm();
        	}
        }

        

        /**************************************************************************************************
        *                                    수납 button click event                                      *
        ***************************************************************************************************/
        this.trmtCostReceBtn_onclick = function(obj,e)
        {
        	var patNo = this.Div01.patNoCdEd.value;

        	if(this._isNull(patNo)){
        		alert("환자등록번호를 입력하세요.");
        		return;
        	}else if(this.dsHosptlzPatRece.getColumn(0, "receState") == 'Y'){
        		alert("수납이 완료되었습니다");
        	}else{
        		var argument = 'hosptlzReceiptNo='+hosptlzReceiptNo;
        			
        		this.dsService.setColumn(2, "argument", argument);
        			
        		this.gfnService("callHosptlzPatRece", "false");
        	}
        }

        

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.addEventHandler("onload", this.WH_HosptlzTmtCostRece_onload, this);
            this.trmtCostReceBtn.addEventHandler("onclick", this.trmtCostReceBtn_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.Div01.patNoCdEd.addEventHandler("oneditclick", this.Div01_patNoCdEd_oneditclick, this);
            this.Div01.patNoBtn.addEventHandler("onclick", this.Div01_patNoBtn_onclick, this);

        };

        this.loadIncludeScript("HC_HosptlzTmtCostRece.xfdl");

       
    };
}
)();
