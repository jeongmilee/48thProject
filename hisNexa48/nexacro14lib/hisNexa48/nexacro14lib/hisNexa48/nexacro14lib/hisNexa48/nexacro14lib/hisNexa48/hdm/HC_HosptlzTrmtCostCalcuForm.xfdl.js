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
                this.set_name("WH_HosptlzTrmtCostCalcuForm");
                this.set_classname("WH_HosptlzTrmtCostCalcuForm");
                this.set_titletext("입원진료비 계산");
                this.set_name("HC_HosptlzTrmtCostCalcuForm");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("#cfd8dcff");

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findHosptlzTrmtCost</Col><Col id=\"URL\">his::hdm/consultationfee/findInpatientPayment.do</Col><Col id=\"outData\">dshosptlzPat=dshosptlzPat dsHosptlzTrmtCost=dsHosptlzTrmtCost</Col></Row><Row><Col id=\"serviceID\">calcuHosptlzTrmtCost</Col><Col id=\"URL\">his::hdm/consultationfee/calcuInpatientPayment.do</Col><Col id=\"outData\">dshosptlzPat=dshosptlzPat dsHosptlzTrmtCost=dsHosptlzTrmtCost</Col></Row><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\">gdsEmp=dsHmEmp</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"0\"/><Column id=\"patNm\" type=\"STRING\" size=\"0\"/><Column id=\"rrn1\" type=\"STRING\" size=\"0\"/><Column id=\"rrn2\" type=\"STRING\" size=\"0\"/><Column id=\"gender\" type=\"STRING\" size=\"0\"/><Column id=\"age\" type=\"STRING\" size=\"0\"/><Column id=\"tel\" type=\"STRING\" size=\"0\"/><Column id=\"note\" type=\"STRING\" size=\"0\"/><Column id=\"grtorNm\" type=\"STRING\" size=\"0\"/><Column id=\"grtorRrn\" type=\"STRING\" size=\"0\"/><Column id=\"grtorTel\" type=\"STRING\" size=\"0\"/><Column id=\"rship\" type=\"STRING\" size=\"0\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"0\"/><Column id=\"ward\" type=\"STRING\" size=\"0\"/><Column id=\"hroom\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzRoute\" type=\"STRING\" size=\"0\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"0\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"0\"/><Column id=\"expCd\" type=\"STRING\" size=\"0\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"0\"/><Column id=\"receState\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"0\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0.64%", "145", null, "28", "93.68%", null, this);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "6.32%", "145", null, "28", "81.04%", null, this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.64%", "177", null, "28", "93.68%", null, this);
            obj.set_taborder("2");
            obj.set_text("주민번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0.64%", "209", null, "28", "93.68%", null, this);
            obj.set_taborder("3");
            obj.set_text("성별");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("genderEd", "absolute", "6.32%", "209", null, "28", "84.96%", null, this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0.64%", "241", null, "28", "93.68%", null, this);
            obj.set_taborder("5");
            obj.set_text("나이");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("ageEd", "absolute", "6.32%", "241", null, "28", "84.96%", null, this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0.64%", "273", null, "28", "93.68%", null, this);
            obj.set_taborder("7");
            obj.set_text("진료과");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("trmtDeptCdEd", "absolute", "6.32%", "273", null, "28", "84.96%", null, this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("trmtDeptNmEd", "absolute", "15.6%", "273", null, "28", "75.84%", null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0.64%", "305", null, "28", "93.68%", null, this);
            obj.set_taborder("10");
            obj.set_text("병동");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("wardEd", "absolute", "6.32%", "305", null, "28", "84.96%", null, this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("wardNmEd", "absolute", "15.6%", "305", null, "28", "75.84%", null, this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0.64%", "369", null, "28", "93.68%", null, this);
            obj.set_taborder("13");
            obj.set_text("입원경로");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzRouteCdEd", "absolute", "6.32%", "369", null, "28", "84.96%", null, this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("hosptlzRouteNmEd", "absolute", "15.6%", "369", null, "28", "75.84%", null, this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0.64%", "401", null, "28", "93.68%", null, this);
            obj.set_taborder("16");
            obj.set_text("퇴원일자");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("trmtCostHistGrid", "absolute", "0.56%", "480", null, "267", "70.8%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("dsHosptlzTrmtCost");
            obj.set_scrollbars("autohorz");
            obj.set_useselcolor("false");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"72\"/></Columns><Rows><Row size=\"52\"/><Row size=\"52\"/><Row size=\"52\"/><Row size=\"52\"/><Row size=\"52\"/></Rows><Band id=\"body\"><Cell celltype=\"head\" text=\"총 진료비\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)+dataset.getSum(&quot;parseInt(nonSal)&quot;)\" editautoselect=\"false\"/><Cell row=\"1\" celltype=\"head\" text=\"급여 총금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)\" editautoselect=\"false\"/><Cell row=\"2\" celltype=\"head\" text=\"비급여 금액\"/><Cell row=\"2\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(nonSal)&quot;)\" editautoselect=\"false\"/><Cell row=\"3\" celltype=\"head\" text=\"본인부담금\"/><Cell row=\"3\" col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)*0.2+dataset.getSum(&quot;parseInt(nonSal)&quot;)\" mask=\"9,999\" editautoselect=\"false\"/><Cell row=\"4\" celltype=\"head\" text=\"기수납액\"/><Cell row=\"4\" col=\"1\" displaytype=\"number\" text=\"0\" editautoselect=\"false\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("dscgDayCal", "absolute", "6.32%", "402", null, "26", "84.24%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.getSetter("class").set("AreaCal");

            obj = new Grid("hosptlzHistGrid", "absolute", "29.36%", "99", null, "133", "0.8%", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("dshosptlzPat");
            obj.set_scrollbars("autohorz");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"72\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\" style=\"cellcolor:#333333ff;\"><Cell colspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"입원기간\"/><Cell col=\"2\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"진료과\"/><Cell col=\"3\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"담당의\"/><Cell col=\"4\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"환자상태\"/><Cell col=\"5\" rowspan=\"2\" style=\"background:#455a64ff;color:white;\" text=\"수납상태\"/><Cell row=\"1\" style=\"background:#455a64ff;color:white;\" text=\"입원일자\"/><Cell row=\"1\" col=\"1\" style=\"background:#455a64ff;color:white;\" text=\"퇴원일자\"/></Band><Band id=\"body\" style=\"selectbackground:#607d8bff;\"><Cell displaytype=\"date\" text=\"bind:hosptlzDate\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:dscgDate\"/><Cell col=\"2\" text=\"bind:trmtDept\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:trmtDoct\" combodataset=\"dsHmEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:dscgGubun\" combodataset=\"dsDscgGubun\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"5\" text=\"bind:receState\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("trmtCostDtlHistGrid", "absolute", "29.52%", "280", null, "462", "0.64%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsHosptlzTrmtCost");
            obj.set_scrollbars("autohorz");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"147\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"62\"/></Columns><Rows><Row size=\"48\" band=\"head\"/><Row size=\"24\"/><Row size=\"0\" band=\"summ\"/><Row size=\"48\" band=\"summ\"/></Rows><Band id=\"head\" style=\"cellcolor:#333333ff;\"><Cell celltype=\"head\" displaytype=\"normal\" style=\"background:#455a64ff;color:white;\" text=\"항목\"/><Cell col=\"1\" displaytype=\"normal\" style=\"background:#455a64ff;color:white;\" text=\"급여\"/><Cell col=\"2\" displaytype=\"normal\" style=\"background:#455a64ff;color:white;\" text=\"비급여\"/><Cell col=\"3\" displaytype=\"normal\" style=\"background:#455a64ff;color:white;\" text=\"총 진료비\"/></Band><Band id=\"body\"><Cell text=\"bind:exmntAtc\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:sal\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:nonSal\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:toNumber(sal)+toNumber(nonSal)\"/></Band><Band id=\"summary\"><Cell displaytype=\"normal\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell row=\"1\" celltype=\"head\" style=\"background:#263238ff;color:white;\" text=\"합계\"/><Cell row=\"1\" col=\"1\" celltype=\"head\" displaytype=\"number\" style=\"background:#263238ff;color:white;\" expr=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)\"/><Cell row=\"1\" col=\"2\" celltype=\"head\" displaytype=\"number\" style=\"background:#263238ff;color:white;\" expr=\"expr:dataset.getSum(&quot;parseInt(nonSal)&quot;)\"/><Cell row=\"1\" col=\"3\" celltype=\"head\" displaytype=\"number\" style=\"background:#263238ff;color:white;\" expr=\"expr:dataset.getSum(&quot;parseInt(sal)&quot;)+dataset.getSum(&quot;parseInt(nonSal)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0.64%", "114", null, "28", "93.68%", null, this);
            obj.set_taborder("21");
            obj.set_text("등록번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoCdEd", "absolute", "6.32%", "114", null, "28", "84.96%", null, this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            obj.set_value("선택해주세요");
            this.addChild(obj.name, obj);

            obj = new Button("trmtCostCalcuBtn", "absolute", "91.12%", "241", null, "30", "0.96%", null, this);
            obj.set_taborder("23");
            obj.set_text("입원진료비계산");
            obj.getSetter("class").set("AreaBtn");
            obj.style.set_background("#848484ff");
            obj.style.set_color("cornsilk");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn1Ed", "absolute", "6.32%", "177", null, "28", "87.12%", null, this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn2Ed", "absolute", "13.92%", "177", null, "28", "77.84%", null, this);
            obj.set_taborder("25");
            obj.set_password("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("titleEdt00", "absolute", "13.12%", "177", null, "26", "85.52%", null, this);
            obj.set_taborder("26");
            obj.set_text("-");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0.64%", "337", null, "28", "93.68%", null, this);
            obj.set_taborder("27");
            obj.set_text("병실");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("wardEdt00", "absolute", "6.32%", "337", null, "28", "84.96%", null, this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("hroomNmEd", "absolute", "15.6%", "337", null, "28", "75.84%", null, this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("patNoBtn", "absolute", "15.6%", "115", null, "23", "82.24%", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("PBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 none @gradation");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_shadow("outer 0,0 0 gray");
            obj.getSetter("class").set("PBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0.48%", "8", null, "52", "-0.4%", null, this);
            obj.set_taborder("33");
            obj.set_text("입원진료비 계산");
            obj.style.set_background("#90a4aeff stretch");
            obj.style.set_color("#37474fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 arial");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "1.68%", "74", null, "27", "81.28%", null, this);
            obj.set_taborder("34");
            obj.set_text("환자 정보");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "1.04%", "445", null, "27", "81.92%", null, this);
            obj.set_taborder("35");
            obj.set_text("진료비 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "29.6%", "68", null, "27", "53.36%", null, this);
            obj.set_taborder("36");
            obj.set_text("입원 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "29.68%", "241", null, "27", "53.28%", null, this);
            obj.set_taborder("37");
            obj.set_text("진료비 상세 내역");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_HosptlzTrmtCostCalcuForm");
            		p.set_titletext("입원진료비 계산");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","patNmEd","value","dshosptlzPat","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","genderEd","value","dshosptlzPat","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ageEd","value","dshosptlzPat","age");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","trmtDeptCdEd","value","dshosptlzPat","trmtDept");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","wardEd","value","dshosptlzPat","ward");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","hosptlzRouteCdEd","value","dshosptlzPat","hosptlzRoute");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","dscgDayCal","value","dshosptlzPat","dscgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","rrn1Ed","value","dshosptlzPat","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rrn2Ed","value","dshosptlzPat","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","wardEdt00","value","dshosptlzPat","hroom");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HC_HosptlzTrmtCostCalcuForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HC_HosptlzTrmtCostCalcuForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HC_HosptlzTrmtCostCalcuForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 입원 진료비 관리                                                          	*
        *                                                                               *
        * @Path		    WH_HosptlzTrmtCostCalcuFor                     	                *
        * @Description 	입원진료비 계산              	   	                            *
        * @Author	    박영희( modification by 강현준)					            *
        * 									                                            *
        * Created on 2016. 11. 25.                             		                    *
        *									                                            *
        ********************************************************************************/

        

        /**************************************************************************************************
        *                                    공통 Script Include                                         *
        **************************************************************************************************/
        //include "scripts::commonScripts.xjs";  
        //include "scripts::wonScripts.xjs";

        this.outpaReceiptNo;                     // 외래접수번호
        this.hosptlzReceiptNo;                   // 입원접수번호

        

        /**************************************************************************************************
        *                                       onload event                                              *
        **************************************************************************************************/
        this.WH_HosptlzTrmtCostCalcuForm_onload = function(obj,e)
        {
           this.gfnBind();   
           this.gfnService("empInfo");
           this.dsHmEmp.filter("jobrk=='의사'");
        }

        this.matchCdNm = function()
        {
           var trmtDept = this.dshosptlzPat.getColumn(0, "trmtDept");
           var ward = this.dshosptlzPat.getColumn(0, "ward");
           var hroom = this.dshosptlzPat.getColumn(0, "hroom");
           var hosptlzRoute = this.dshosptlzPat.getColumn(0, "hosptlzRoute");
           
           var trmtDeptNm = this.dsGP080.lookup("code", trmtDept, "bigValue");
           var wardNm = this.dsSC070.lookup("code", ward, "value");
           var hroomNm = this.dsSC071.lookup("code", hroom, "value");
           var hosptlzRouteNm = this.dsMD020.lookup("code", hosptlzRoute, "value");
           
           this.trmtDeptNmEd.set_value(trmtDeptNm);
           this.wardNmEd.set_value(wardNm);
           this.hroomNmEd.set_value(hroomNm);
           this.hosptlzRouteNmEd.set_value(hosptlzRouteNm);
        }

        

        
        /**************************************************************************************************
        *                               환자번호 조회 button click event                                 *
        ***************************************************************************************************/

        
        this.patNoCdEd_oneditclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(pat)
        {	
        	alert(pat[4]+', '+pat[5]);
           this.patNoCdEd.set_value(pat[0]);
           this.outpaReceiptNo = pat[4];
           this.hosptlzReceiptNo = pat[5];
        }

        		
        	var argument = 'outpaReceiptNo='+this.outpaReceiptNo; ;
        	this.dsService.setColumn(0,"argument",argument);
        }

        

        
        /**************************************************************************************************
        *                                 환자 조회 button click event                                   *
        ***************************************************************************************************/

        this.patNoBtn_onclick = function(obj,e)
        {
        	var patNo = this.patNoCdEd.value;
           
           if(this.gfnIsNull(patNo)){
              alert("환자등록번호를 입력하세요.");
              return;
           }else if(this.gfnIsNull(this.hosptlzReceiptNo)){
              alert("입원환자가 아닙니다");
              return;
           }else{
              var argument = 'outpaReceiptNo='+this.outpaReceiptNo;
              this.dsService.setColumn(0,"argument",argument);
              this.gfnService("findHosptlzTrmtCost", false);
              this.matchCdNm();
           }
        }

        

        /**************************************************************************************************
        *                               입원진료비 계산 button click event                               *
        ***************************************************************************************************/
        this.trmtCostCalcuBtn_onclick = function(obj,e)
        {
        	 var patNo = this.patNoCdEd.value;
        	if(this.gfnIsNull(patNo)){
        		alert("환자등록번호를 입력하세요.");
        		return;
        	}else if(this.dsHosptlzTrmtCost.getRowCount() != 0){
        		alert("입원진료비 계산이 완료 되었습니다");
        	}else{
        		var argument = 'outpaReceiptNo='+this.outpaReceiptNo+' hosptlzReceiptNo='+this.hosptlzReceiptNo+' patNo='+patNo;
        				   
        		this.dsService.setColumn(1, "argument", argument);
        				   
        		this.gfnService("calcuHosptlzTrmtCost", false);
        	}
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHmEmp.addEventHandler("onrowposchanged", this.ds_emp_onrowposchanged, this);
            this.addEventHandler("onload", this.WH_HosptlzTrmtCostCalcuForm_onload, this);
            this.patNoCdEd.addEventHandler("oneditclick", this.patNoCdEd_oneditclick, this);
            this.trmtCostCalcuBtn.addEventHandler("onclick", this.trmtCostCalcuBtn_onclick, this);
            this.patNoBtn.addEventHandler("onclick", this.patNoBtn_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);

        };

        this.loadIncludeScript("HC_HosptlzTrmtCostCalcuForm.xfdl");

       
    };
}
)();
