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
                this.set_name("MB_EmrForm");
                this.set_classname("MB_PrcsMngntForm");
                this.set_titletext("EMR");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPatientDs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientDsCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"surYn\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBaseType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BaseType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BaseType\">VitalSign</Col></Row><Row><Col id=\"BaseType\">Intake&amp;Out</Col></Row><Row><Col id=\"BaseType\">Weight&amp;기타측정</Col></Row><Row><Col id=\"BaseType\">Observation</Col></Row><Row><Col id=\"BaseType\">Activity</Col></Row><Row><Col id=\"BaseType\">Position</Col></Row><Row><Col id=\"BaseType\">RespiratoryCare</Col></Row><Row><Col id=\"BaseType\">Tube&amp;Cath</Col></Row><Row><Col id=\"BaseType\">면역및위생</Col></Row><Row><Col id=\"BaseType\">검사및처치</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMaterialType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MaterialType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MaterialType\">PRISMA ST SET(한국갬브로)</Col></Row><Row><Col id=\"MaterialType\">GARD BLUE QUAD CVC</Col></Row><Row><Col id=\"MaterialType\">솜붕대 6&quot;</Col></Row><Row><Col id=\"MaterialType\">탄력붕대(10CM X 215CM)4&quot;</Col></Row><Row><Col id=\"MaterialType\">PROCARE-2 FA URO(65MM)</Col></Row><Row><Col id=\"MaterialType\">NATURA POUCH BAG(투명/45MM)</Col></Row><Row><Col id=\"MaterialType\">GAUZE(5X5, 5장)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYnType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ynType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ynType\">Y</Col></Row><Row><Col id=\"ynType\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDeptType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"deptType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"deptType\">마취통증의학과</Col></Row><Row><Col id=\"deptType\">병리과</Col></Row><Row><Col id=\"deptType\">사이버나이프센타</Col></Row><Row><Col id=\"deptType\">진단검사의학과</Col></Row><Row><Col id=\"deptType\">피부과</Col></Row><Row><Col id=\"deptType\">치과</Col></Row><Row><Col id=\"deptType\">이비인후과</Col></Row><Row><Col id=\"deptType\">외과</Col></Row><Row><Col id=\"deptType\">산부인과</Col></Row><Row><Col id=\"deptType\">내과</Col></Row><Row><Col id=\"deptType\">핵의학과</Col></Row><Row><Col id=\"deptType\">신경정신과</Col></Row><Row><Col id=\"deptType\">신경과</Col></Row><Row><Col id=\"deptType\">신경외과</Col></Row><Row><Col id=\"deptType\">정형외과</Col></Row><Row><Col id=\"deptType\">안과</Col></Row><Row><Col id=\"deptType\">소아청소년과</Col></Row><Row><Col id=\"deptType\">영상의학과</Col></Row><Row><Col id=\"deptType\">방사선종양학과</Col></Row><Row><Col id=\"deptType\">흉부외과</Col></Row><Row><Col id=\"deptType\">비뇨기과</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findFeeCdList</Col><Col id=\"URL\">his::won/baseInfo/findFeeListEMR.do</Col><Col id=\"outData\">dsFeeCd=dsFee</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">emrCallback</Col></Row><Row><Col id=\"serviceID\">findReceiptList</Col><Col id=\"URL\">his::won/outPatMngnt/findReceiptList.do</Col><Col id=\"outData\">dsOutpaReceipt=dsOutpaReceipt</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">emrCallback</Col></Row><Row><Col id=\"serviceID\">findPatientDsPrscList</Col><Col id=\"URL\">his::med/base/findPatientDsPrscList.do</Col><Col id=\"outData\">dsPatientDs=dsPatientDs dsPatientPrsc=dsPatientPrsc</Col><Col id=\"callbackFunc\">emrCallback</Col></Row><Row><Col id=\"serviceID\">findDiseaseList</Col><Col id=\"URL\">his::med/base/findDiseaseList.do</Col><Col id=\"outData\">dsDisease=dsDisease</Col><Col id=\"callbackFunc\">emrCallback</Col></Row><Row><Col id=\"serviceID\">findBaseExamList</Col><Col id=\"URL\">his::med/base/findBaseExamList.do</Col><Col id=\"outData\">dsBaseExam=dsBaseExam</Col><Col id=\"callbackFunc\">emrCallback</Col></Row><Row><Col id=\"serviceID\">batchEmr</Col><Col id=\"URL\">his::med/base/batchEmrProcess.do</Col><Col id=\"callbackFunc\">emrCallback</Col><Col id=\"inData\">dsOutpaReceipt=dsOutpaReceipt:u dsBaseExam=dsBaseExam:u dsPatientDs=dsPatientDs:u dsPatientPrsc=dsPatientPrsc:u</Col></Row><Row><Col id=\"serviceID\">reportEmr</Col><Col id=\"URL\">his::med/base/reportEmr.do</Col><Col id=\"callbackFunc\">emrCallback</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisNmType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"deptType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"deptType\">GOL001</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFeeCd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"applyPridStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"applyPridEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"lgGrp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientPrsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseCd\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrp\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"256\"/><Column id=\"prescGubun\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"doctNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzYb\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"trmtYb\" type=\"STRING\" size=\"256\"/><Column id=\"prescYb\" type=\"STRING\" size=\"256\"/><Column id=\"regDept\" type=\"STRING\" size=\"256\"/><Column id=\"cngDept\" type=\"STRING\" size=\"256\"/><Column id=\"receiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"dgnsNm\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"expCd\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBaseExam", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"systolicPressure\" type=\"STRING\" size=\"256\"/><Column id=\"diastolicPressure\" type=\"STRING\" size=\"256\"/><Column id=\"pulse\" type=\"STRING\" size=\"256\"/><Column id=\"respirationRate\" type=\"STRING\" size=\"256\"/><Column id=\"bodyTemp\" type=\"STRING\" size=\"256\"/><Column id=\"sopMemo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatientPrscCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"prescDate\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseCd\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"feeCd\" type=\"STRING\" size=\"256\"/><Column id=\"feeNm\" type=\"STRING\" size=\"256\"/><Column id=\"bigGrp\" type=\"STRING\" size=\"256\"/><Column id=\"midGrp\" type=\"STRING\" size=\"256\"/><Column id=\"smGrp\" type=\"STRING\" size=\"256\"/><Column id=\"cost\" type=\"STRING\" size=\"256\"/><Column id=\"uniqueNtc\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/><Column id=\"dscgGubun\" type=\"STRING\" size=\"256\"/><Column id=\"prescGubun\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"doctNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMediType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"mediEng\" type=\"STRING\" size=\"256\"/><Column id=\"mediKor\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"mediEng\">PROPIV</Col><Col id=\"mediKor\">비유피-4정 20mg(제일)</Col></Row><Row><Col id=\"mediEng\">SOLIFE10</Col><Col id=\"mediKor\">베시케어정 10mg(한국아스텔라스)</Col></Row><Row><Col id=\"mediEng\">SOLIFE5</Col><Col id=\"mediKor\">베시케어정 5mg(한국아스텔라스)</Col></Row><Row><Col id=\"mediEng\">TOLTERO4</Col><Col id=\"mediKor\">톨테로스SR 캡슐 4mg(LG CI)</Col></Row><Row><Col id=\"mediEng\">XOXYBUTY</Col><Col id=\"mediKor\">디트로판정 5mg(동화)</Col></Row><Row><Col id=\"mediEng\">TROSPIUM</Col><Col id=\"mediKor\">스파스몰리트당의정 20mg(부광)</Col></Row><Row><Col id=\"mediEng\">XTOLTERO</Col><Col id=\"mediKor\">디트루시톨서방캡슐 2mg(Prizer)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRadiologyType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Radiology\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Radiology\">단순 X선 촬영</Col></Row><Row><Col id=\"Radiology\">투시조영</Col></Row><Row><Col id=\"Radiology\">CT</Col></Row><Row><Col id=\"Radiology\">MR</Col></Row><Row><Col id=\"Radiology\">조영제</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTransfusionType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Transfusion\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Transfusion\">WholeBlood(320cc)</Col></Row><Row><Col id=\"Transfusion\">PackedRedCells(320cc)</Col></Row><Row><Col id=\"Transfusion\">PackedRedCells(400cc)</Col></Row><Row><Col id=\"Transfusion\">FreshFrozenPlasma</Col></Row><Row><Col id=\"Transfusion\">Cryoprecipitate(320cc)</Col></Row><Row><Col id=\"Transfusion\">Cryoprecipitate(400cc)</Col></Row><Row><Col id=\"Transfusion\">PlateletConcentrate(320cc)</Col></Row><Row><Col id=\"Transfusion\">PlateletConcentrate(400cc)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTherapyType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TherapyType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TherapyType\">Cryotherapy</Col></Row><Row><Col id=\"TherapyType\">심층열치료</Col></Row><Row><Col id=\"TherapyType\">T.E.N.S.</Col></Row><Row><Col id=\"TherapyType\">SimpleTherapeuticExercise(1day)</Col></Row><Row><Col id=\"TherapyType\">HotPack</Col></Row><Row><Col id=\"TherapyType\">UltrasoundTherapy(1day)</Col></Row><Row><Col id=\"TherapyType\">Diathermy</Col></Row><Row><Col id=\"TherapyType\">WILLIAM'S Exercise</Col></Row><Row><Col id=\"TherapyType\">Q.S.E</Col></Row><Row><Col id=\"TherapyType\">SIMPLE EXERCISE(OTHERS)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDisease", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"lv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1248", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.81%", "-5", null, "60", "81.65%", null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("EMR");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("antialias 20 맑은 고딕");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("patientDiv", "absolute", "1.04%", "191", "427", "84", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc", "absolute", "68%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("36");
            obj.set_text("입원여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Combo("hosCombo", "absolute", "82.82%", "45", "70", "29", null, null, this.patientDiv);
            this.patientDiv.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");
            obj = new Edit("searchDeptEd04", "absolute", "48.94%", "44", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "34.35%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("39");
            obj.set_text("유형");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "68%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("40");
            obj.set_text("진료여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "34.35%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("42");
            obj.set_text("등록번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "48.94%", "8", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.94%", "7", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("44");
            obj.set_text("환자명");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "15.29%", "8", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "0.94%", "44", "60", "30", null, null, this.patientDiv);
            obj.set_taborder("46");
            obj.set_text("초/재진");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.29%", "44", "78", "30", null, null, this.patientDiv);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.patientDiv.addChild(obj.name, obj);
            obj = new Combo("trmtCombo", "absolute", "82.82%", "8", "70", "29", null, null, this.patientDiv);
            this.patientDiv.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_innerdataset("dsYnType");
            obj.set_codecolumn("ynType");
            obj.set_datacolumn("ynType");

            obj = new Div("trmtDiv", "absolute", "1.04%", "111", "426", "46", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "75.47%", "6", null, "30", "17.69%", null, this.trmtDiv);
            obj.set_taborder("13");
            obj.set_text("과");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "42.45%", "6", null, "30", "43.4%", null, this.trmtDiv);
            obj.set_taborder("14");
            obj.set_text("진료의");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "1.18%", "6", null, "30", "85.85%", null, this.trmtDiv);
            obj.set_taborder("15");
            obj.set_text("진료일");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Calendar("trmtDateCal", "absolute", "14.62%", "5", null, "31", "58.02%", null, this.trmtDiv);
            this.trmtDiv.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd");
            obj = new Edit("trmtDeptEd", "absolute", "82.78%", "6", "67", "30", null, null, this.trmtDiv);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.trmtDiv.addChild(obj.name, obj);
            obj = new Edit("trmtDoctEd", "absolute", "57.08%", "6", "74", "30", null, null, this.trmtDiv);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            this.trmtDiv.addChild(obj.name, obj);

            obj = new Static("titleStc00", "absolute", "13", "80", "116", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_text("진료 정보");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Static("titleStc01", "absolute", "13", "163", "116", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_text("환자 정보");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Button("registerBtn", "absolute", "1020", "712", "90", "32", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn", "absolute", "1141", "712", "90", "32", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "346", "712", "90", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("patGrid", "absolute", "24", "336", "401", "351", null, null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsOutpaReceipt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"환자번호\"/><Cell col=\"2\" text=\"환자명\"/><Cell col=\"3\" text=\"환자유형\"/><Cell col=\"4\" text=\"초/재진여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:patType\"/><Cell col=\"4\" text=\"bind:ntTtYb\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"background:gainsboro;\" text=\"인원\"/><Cell col=\"3\" colspan=\"2\" style=\"background:gainsboro;\" expr=\"expr:dataset.getRowCount()\" mask=\"##명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("inoutRadio", "absolute", "1.04%", "288", null, "25", "85.2%", null, this);
            this.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("13");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Tab("medTab", "absolute", "36.16%", "81", null, "612", "1.52%", null, this);
            obj.set_taborder("14");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttongradation("liner 0,0 #feffffff 0,100 #e1e1dfff [60% #f2f2efff][70% #ecece9ff]");
            obj.style.set_buttonbordertype("round 3 3  lefttop righttop");
            obj.style.set_showextrabutton("true");
            obj.style.set_background("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("13 Dotum");
            this.addChild(obj.name, obj);
            obj = new Tabpage("reportTp", this.medTab);
            obj.set_text("진단");
            this.medTab.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.26%", "185", null, "30", "0.26%", null, this.medTab.reportTp);
            obj.set_taborder("48");
            obj.set_tabstop("false");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "3", "33", "266", "147", null, null, this.medTab.reportTp);
            obj.set_taborder("49");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.getSetter("hideendline").set("col");
            obj.set_useselcolor("false");
            obj.getSetter("mergeview").set("fullview");
            obj.style.set_border("1px solid azure");
            obj.style.set_font("9 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"124\"/><Column size=\"42\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"항목\"/><Cell col=\"1\" style=\"color: ;\" text=\"측정치\"/><Cell col=\"2\" text=\"단위\"/></Band><Band id=\"body\"><Cell style=\"background: ;font:bold 9 휴먼고딕;\" text=\"혈압(수축기)\"/><Cell col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:systolicPressure\"/><Cell col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"1\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"혈압(이완기)\"/><Cell row=\"1\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:diastolicPressure\"/><Cell row=\"1\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"2\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"맥박\"/><Cell row=\"2\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:pulse\"/><Cell row=\"2\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"3\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"호흡수\"/><Cell row=\"3\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:respirationRate\"/><Cell row=\"3\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"4\" style=\"background: ;font:bold 9 휴먼고딕;\" text=\"체온\"/><Cell row=\"4\" col=\"1\" edittype=\"normal\" style=\"background: ;\" text=\"bind:bodyTemp\"/><Cell row=\"4\" col=\"2\" style=\"background: ;font:bold 9 arial;\" text=\"℃\"/></Band></Format></Formats>");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new TextArea("expArea", "absolute", "271", "33", "182", "147", null, null, this.medTab.reportTp);
            obj.set_taborder("50");
            obj.style.set_font("맑은 고딕,10,bold antialias");
            obj.getSetter("class").set("AreaArea");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Grid("diseaseGrid", "absolute", "3", "218", "772", "160", null, null, this.medTab.reportTp);
            obj.set_taborder("51");
            obj.set_binddataset("dsPatientDs");
            obj.set_autofittype("col");
            obj.style.set_font("9 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"320\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상병코드\"/><Cell col=\"1\" text=\"상병명\"/><Cell col=\"2\" text=\"수술여부\"/><Cell col=\"3\" text=\"진료과\"/><Cell col=\"4\" text=\"진료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeNm\"/><Cell col=\"2\" text=\"bind:surYn\"/><Cell col=\"3\" text=\"bind:dept\"/><Cell col=\"4\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "11", "188", "176", "26", null, null, this.medTab.reportTp);
            obj.set_taborder("52");
            obj.set_text("상병내역");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "0.26%", "384", null, "30", "0.26%", null, this.medTab.reportTp);
            obj.set_taborder("53");
            obj.set_tabstop("false");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "11", "388", "176", "26", null, null, this.medTab.reportTp);
            obj.set_taborder("54");
            obj.set_text("처방내역");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "34.88%", "3", null, "30", "41.06%", null, this.medTab.reportTp);
            obj.set_taborder("55");
            obj.set_tabstop("false");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Static("titleStc00", "absolute", "10", "2", "142", "26", null, null, this.medTab.reportTp.Div02);
            obj.set_taborder("0");
            obj.set_text("S/O/P MEMO");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.reportTp.Div02.addChild(obj.name, obj);
            obj = new Div("Div04", "absolute", "59.33%", "3", null, "30", "0.39%", null, this.medTab.reportTp);
            obj.set_taborder("56");
            obj.set_tabstop("false");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Static("titleStc00", "absolute", "10", "2", "116", "26", null, null, this.medTab.reportTp.Div04);
            obj.set_taborder("12");
            obj.set_text("PACS");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("left middle");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.reportTp.Div04.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "203", "3", "100", "24", null, null, this.medTab.reportTp.Div04);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "2 solid darkblue #acffefff");
            obj.getSetter("class").set("AreaEdt");
            this.medTab.reportTp.Div04.addChild(obj.name, obj);
            obj = new Grid("PrscGrid", "absolute", "3", "418", "771", "160", null, null, this.medTab.reportTp);
            obj.set_taborder("57");
            obj.set_binddataset("dsPatientPrsc");
            obj.set_autofittype("col");
            obj.style.set_font("9 Dotum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"222\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"진료과\"/><Cell col=\"1\" text=\"진료의사명\"/><Cell col=\"2\" text=\"처방명\"/><Cell col=\"3\" text=\"처방일자\"/></Band><Band id=\"body\"><Cell text=\"bind:dept\"/><Cell col=\"1\" text=\"bind:doctNm\"/><Cell col=\"2\" text=\"bind:feeNm\"/><Cell col=\"3\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Div("Div05", "absolute", "59.33%", "34", null, "146", "0.9%", null, this.medTab.reportTp);
            obj.set_taborder("58");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0.39%", "3", null, "30", "65.38%", null, this.medTab.reportTp);
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.medTab.reportTp.addChild(obj.name, obj);
            obj = new Static("titleStc00", "absolute", "10", "2", "116", "26", null, null, this.medTab.reportTp.Div03);
            obj.set_taborder("0");
            obj.set_text("기초검사");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.reportTp.Div03.addChild(obj.name, obj);
            obj = new Tabpage("prscTp", this.medTab);
            obj.set_text("처방");
            this.medTab.addChild(obj.name, obj);
            obj = new Div("diseaseDiv", "absolute", "0.26%", "2", null, "30", "0.64%", null, this.medTab.prscTp);
            obj.set_taborder("32");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("TStc");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Button("diseaseAddBtn", "absolute", "576", "3", "80", "23", null, null, this.medTab.prscTp.diseaseDiv);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.style.set_background("@gradation");
            obj.getSetter("class").set("AddBtn");
            this.medTab.prscTp.diseaseDiv.addChild(obj.name, obj);
            obj = new Button("diseaseDelBtn", "absolute", "664", "3", "80", "23", null, null, this.medTab.prscTp.diseaseDiv);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.getSetter("class").set("DelBtn");
            this.medTab.prscTp.diseaseDiv.addChild(obj.name, obj);
            obj = new Static("titleStc00", "absolute", "23", "6", "217", "26", null, null, this.medTab.prscTp);
            obj.set_taborder("33");
            obj.set_text("상병내역등록");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Grid("diseaseGrid", "absolute", "4", "34", "768", "162", null, null, this.medTab.prscTp);
            obj.set_taborder("34");
            obj.set_binddataset("dsPatientDs");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"246\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상병코드\"/><Cell col=\"1\" text=\"상병명\"/><Cell col=\"2\" text=\"수술여부\"/><Cell col=\"3\" text=\"진료과\"/><Cell col=\"4\" text=\"환자번호\"/><Cell col=\"5\" text=\"처방일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expand\" text=\"bind:code\" expandshow=\"show\" expandchar=\"...\"/><Cell col=\"1\" text=\"bind:codeNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:surYn\" combodataset=\"dsYnType\" combocodecol=\"ynType\" combodatacol=\"ynType\"/><Cell col=\"3\" text=\"bind:dept\"/><Cell col=\"4\" text=\"bind:patNo\"/><Cell col=\"5\" text=\"bind:prescDate\"/></Band></Format></Formats>");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Div("prscDiv", "absolute", "45.69%", "200", null, "30", "0.64%", null, this.medTab.prscTp);
            obj.set_taborder("35");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("TStc");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Button("prscDelBtn", "absolute", "317", "3", "80", "23", null, null, this.medTab.prscTp.prscDiv);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.getSetter("class").set("DelBtn");
            this.medTab.prscTp.prscDiv.addChild(obj.name, obj);
            obj = new Grid("patientGrid", "absolute", "356", "232", "416", "348", null, null, this.medTab.prscTp);
            obj.set_taborder("36");
            obj.set_binddataset("dsPatientPrsc");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"374\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"처방명\"/></Band><Band id=\"body\"><Cell text=\"bind:feeCd\"/><Cell col=\"1\" text=\"bind:feeNm\"/></Band></Format></Formats>");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Grid("presGrid", "absolute", "4", "232", "347", "348", null, null, this.medTab.prscTp);
            obj.set_taborder("37");
            obj.set_binddataset("dsFeeCd");
            obj.set_autofittype("col");
            obj.style.set_font("9 arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/></Band><Band id=\"body\"><Cell text=\"bind:feeNm\"/></Band></Format></Formats>");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Div("prscTypeDiv", "absolute", "0.39%", "200", null, "30", "54.83%", null, this.medTab.prscTp);
            obj.set_taborder("38");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("TStc");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "15", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("36");
            obj.set_text("투약");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "68", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("37");
            obj.set_text("검사");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "121", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("38");
            obj.set_text("수혈");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "174", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("39");
            obj.set_text("처치");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "227", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("40");
            obj.set_text("재료");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "281", "3", "50", "23", null, null, this.medTab.prscTp.prscTypeDiv);
            obj.set_taborder("41");
            obj.set_text("재활");
            obj.getSetter("class").set("AreaBtn");
            this.medTab.prscTp.prscTypeDiv.addChild(obj.name, obj);
            obj = new Static("titleStc01", "absolute", "380", "202", "186", "26", null, null, this.medTab.prscTp);
            obj.set_taborder("39");
            obj.set_text("처방내역");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.prscTp.addChild(obj.name, obj);
            obj = new Tabpage("chartTp", this.medTab);
            obj.set_text("차트");
            this.medTab.addChild(obj.name, obj);
            obj = new Div("chartDiv", "absolute", "0.39%", "2", null, "30", "0.51%", null, this.medTab.chartTp);
            obj.set_taborder("11");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("round 5 5");
            obj.set_cssclass("TStc");
            this.medTab.chartTp.addChild(obj.name, obj);
            obj = new Button("reportBtn", "absolute", "88.28%", "3", null, "23", "1.3%", null, this.medTab.chartTp.chartDiv);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.medTab.chartTp.chartDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "72.66%", "4", null, "22", "12.24%", null, this.medTab.chartTp.chartDiv);
            obj.set_taborder("9");
            this.medTab.chartTp.chartDiv.addChild(obj.name, obj);
            obj = new WebBrowser("emrBrowser", "absolute", "3", "36", "768", "538", null, null, this.medTab.chartTp);
            obj.set_taborder("12");
            this.medTab.chartTp.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "25", "6", "198", "26", null, null, this.medTab.chartTp);
            obj.set_taborder("13");
            obj.set_text("환자 등록번호");
            obj.style.set_color("dimgray");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("antialias bold 14 맑은 고딕");
            obj.getSetter("class").set("TStc");
            this.medTab.chartTp.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1248, 60, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar4.jpg')");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 427, 84, this.patientDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.patientDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 426, 46, this.trmtDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.trmtDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.reportTp.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("55");
            		p.set_tabstop("false");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.reportTp.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.reportTp.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.set_tabstop("false");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.reportTp.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.reportTp.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("59");
            		p.set_tabstop("false");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.reportTp.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 430, 208, this.medTab.reportTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("진단");

            	}
            );
            this.medTab.reportTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.prscTp.diseaseDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.prscTp.diseaseDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.prscTp.prscDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.prscTp.prscDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.prscTp.prscTypeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.prscTp.prscTypeDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.medTab.prscTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("처방");

            	}
            );
            this.medTab.prscTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 30, this.medTab.chartTp.chartDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_border("1 solid black");
            		p.style.set_bordertype("round 5 5");
            		p.set_cssclass("TStc");

            	}
            );
            this.medTab.chartTp.chartDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.medTab.chartTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("차트");

            	}
            );
            this.medTab.chartTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MB_PrcsMngntForm");
            		p.set_titletext("EMR");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","medTab.reportTp.expArea","value","dsBaseExam","sopMemo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div04.searchDeptEd00","value","dsOutpaReceipt","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div04.searchDeptEd02","value","dsOutpaReceipt","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div04.searchDeptEd03","value","dsOutpaReceipt","trmtYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div04.searchDeptEd01","value","dsOutpaReceipt","ntTtYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div04.searchDeptEd04","value","dsOutpaReceipt","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div04.hosCombo","value","dsOutpaReceipt","hosptlzYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","patientDiv.searchDeptEd00","value","dsOutpaReceipt","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","patientDiv.searchDeptEd02","value","dsOutpaReceipt","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","patientDiv.searchDeptEd01","value","dsOutpaReceipt","ntTtYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","patientDiv.searchDeptEd04","value","dsOutpaReceipt","patType");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","patientDiv.hosCombo","value","dsOutpaReceipt","hosptlzYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","patientDiv.trmtCombo","value","dsOutpaReceipt","trmtYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MB_EmrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("MB_EmrForm.xfdl", "scripts::hrsScripts.xjs");
        this.registerScript("MB_EmrForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	EMR 관리 화면				
        @Author	  		임행섭				    			                        								                                            
        @Create         2016. 6. 13.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";  
        //include "scripts::hrsScripts.xjs";

        var patNo = "";
        var dept;
        var empNo;
        var smCd;
        var prescDt; 			// 상병내역등록이랑 처방내역 등록때 시퀀스만들때 사용한다 날짜시분초
        var searchDate = null;
        var diCode;
        var diCodeNm;
        var receiptNo;          // 외래접수번호
        var prescNo;
        var sDate = null     			// 오늘날짜      
                                                                                                                                                        
                                                                                                                                                            
        // 화면 로딩시
        this.MB_EmrForm_onload = function(obj,e)
        {

        	empNo = application.gdsEmp.getColumn(0, "empNo");
        	this.trmtDiv.trmtDoctEd.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.trmtDiv.trmtDeptEd.set_value(application.gdsEmp.getColumn(0, "deptNm"));

        	//searchDate = this.gfnLocalDate();
        	//searchDate = "20160401";
        	//sDate = searchDate;
        	//this.trmtDiv.trmtDateCal.set_value(searchDate.replace(/-/g, ""));
        }

        
        // 조회버튼 클릭시 
        this.searchBtn_onclick = function(obj,e)
        {

        	searchDate = null;
        // 	this.dsService.setColumn(1,"argument","trmtDoct=43000 trmtDate="+searchDate+" gubun=N");//n은 입원유무 43000은 현재 차트에 들어온 의사번호를 뜻한다 나중에 로그인의사번호 받아서  넣으면된다
        	this.dsService.setColumn(1, "argument", "trmtDoct=" + empNo + " trmtDate=" + searchDate);
        	//var trmtDoct = application.gdsEmp.getColumn(0, "empNo"); //alert(trmtDoct); /*"43000"*/
         	//this.dsService.setColumn(1, "argument", "trmtDoct=" + trmtDoct + " trmtDate=" + searchDate);  //담당의 번호가 들어간다
          	this.gfnService("findReceiptList");
        }

        // 환자그리드 클릭시
        this.patGrid_oncellclick = function(obj,e)
        {
        	prescDt = this.gfnFormatDate("YmdHis");
        	patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        	receiptNo=this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "outpaReceiptNo");
        	
        	//기초검사정보조회
        	this.dsService.setColumn(4, "argument","patNo="+patNo);
        	this.gfnService("findBaseExamList");             
        	//상병내역조회
            this.dsService.setColumn(2,"argument","patNo="+patNo);
            this.gfnService("findPatientDsPrscList"); 
            
        	this.medTab.chartTp.chartDiv.patNoEd.set_value(patNo); //pdf파일칸에 미리 선택한 환자번호 넣어두기
        }

        // 입원/외래 라디오버튼 클릭시 
        this.inoutRadio_onitemchanged = function(obj,e)
        {
        	var radio = this.inoutRadio.value;
        	if (radio == "") {
        	    this.dsOutpaReceipt.filter("");    
            } else {
                this.dsOutpaReceipt.filter("prescYb=='" + radio + "'");
            }
        }

        /****** 진단탭 *****/

        // 진단탭 상병내역 그리드 클릭시   
        this.medTab_reportTp_diseaseGrid_oncellclick = function(obj,e)
        {
        	// 해당 상병에 대한 처방 필터링
        	var diseaseCode = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "code");   
        	var prescDate   = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescDate");  
        	var patNo       = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "patNo"); 

        	this.dsPatientPrsc.filter("patNo=='"+patNo+"' && prescDate=='"+prescDate+"' && diseaseCd =='"+diseaseCode+"'");
        }

        /***** 여기까지 진단 탭 *****/

        
        /***** 처방 탭 *****/

        
        // 처방탭 상병내역 그리드 클릭시
        this.medTab_prscTp_diseaseGrid_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) { 
        		var diseaseType = application.open("상병코드검색",
        										   "med::MB_DiseasePopupForm.xfdl", 
        										   this.parent,
        										   {},
        										   "showtitlebar=true showstatusbar=false",
        										   700, 100, 250, 300
        										  );	
         
        		this.setDsCode = function(arrRtn) { 
        			// 같은 상병코드가 같은 날에 있을때 등록불가 설정
        			for (var i = 0; i < this.dsPatientDs.getRowCount(); i++) {   
        				var check = this.dsPatientDs.getColumn(i, "code");  
        				var sDateCheck = this.dsPatientDs.getColumn(i, "prescDate");
        				if (arrRtn[0] == check && sDate == sDateCheck) {
        					alert("기준일에 동일한 상병이 이미 등록되어있습니다");
        					return;
        				}
        			}
        			this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "code", arrRtn[0]);
        			this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "codeNm", arrRtn[1]);
        			
        			diCode   = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "code");   	  // 상병코드
        			diCodeNm = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "codeNm");	  // 상병명
        			patNo    = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "patNo"); 	  // 환자번호
        			dept 	 = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "dept");	  // 진료과
        			prescNo  = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescNo");	  // 처방번호
        			var pDate  = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescDate"); // 처방일
        			// 해당 상병에 대한 처방 필터링
        			this.dsPatientPrsc.filter("patNo=='"+patNo+"' && prescDate=='"+pDate+"' && diseaseCd =='"+diCode+"'");
        		} 
        	}	
        }

        // 처방탭 상병내역등록 버튼 클릭시
        this.medTab_prscTp_diseaseDiv_diseaseAddBtn_onclick = function(obj,e)
        {
        	//여기에서 날짜시분초로 상병 내역등록시 시퀀스만들고 처방내역은 이 시퀀스뒤에 처방내역 만들때 줄번호를 붙여 시퀀스를 만든다
        	prescDt = this.gfnFormatDate("YmdHis");

        	if (this.gfnIsNull(patNo)) {
        		alert("환자를 선택해주세요");
        		return;
        	} else {
        		this.dsPatientDs.addRow();        // 상병내역 추가 
        	   	this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "patNo", patNo);
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "dept", this.trmtDeptEd.value);
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescDate", prescDt);   
        		this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescNo", prescNo);
        	}
        }

        // 처방탭 상병내역삭제 버튼 클릭시
        this.medTab_prscTp_diseaseDiv_diseaseDelBtn_onclick = function(obj,e)
        {
        	this.dsPatientDs.deleteRow(this.dsPatientDs.rowposition);
        }

        // 처방탭 처방내역삭제 버튼 클릭시
        this.medTab_prscTp_prscDiv_prscDelBtn_onclick = function(obj,e)
        {
        	this.dsPatientPrsc.deleteRow(this.dsPatientPrsc.rowposition);
        }
         
        // 처방버튼 클릭시
        this.medTab_prscTp_prscTypeDiv_prscBtn_onclick = function(obj,e)
        {
        	// [투약] [검사] [수혈] [처치] [재료] [재활]
        	switch (obj.text) {
        		case "투약" :
        			smCd = 1;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "투약항목");
        			this.dsService.setColumn(0, "argument", "smCd=1");
        			this.gfnService("findFeeCdList");
        			break;
        		case "검사" :
        			smCd = 2;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "검사항목");
        			this.dsService.setColumn(0, "argument", "smCd=2");
        			this.gfnService("findFeeCdList");
        			break;
        		case "수혈" :
        			smCd = 3;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "수혈항목");
        			this.dsService.setColumn(0, "argument", "smCd=3");
        			this.gfnService("findFeeCdList");
        			break;
        		case "처치" :
        			smCd = 4;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "처치항목");
        			this.dsService.setColumn(0, "argument", "smCd=4");
        			this.gfnService("findFeeCdList");
        			break;
        		case "재료" :
        			smCd = 5;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "재료항목");
        			this.dsService.setColumn(0, "argument", "smCd=5");
        			this.gfnService("findFeeCdList");
        			break;
        		case "재활" :
        			smCd = 6;
        			this.medTab.prscTp.presGrid.setCellProperty("head", "0", "text", "재활항목");
        			this.dsService.setColumn(0, "argument", "smCd=6");
        			this.gfnService("findFeeCdList");
        			break;
        	}
        }

        // 처방탭 처방그리드 더블클릭시
        this.medTab_prscTp_presGrid_oncelldblclick = function(obj,e)
        {	
            dept = this.trmtDiv.trmtDeptEd.value;
        	this.dsPatientPrsc.addRow();
        	
         	if (this.gfnIsNull(prescDt)) {
        		// 처방전 시퀀스 생성(처방일-5자리순번)
         		prescSeqNo = (this.dsPatientPrsc.getRowCount()).toString().padLeft(5, "0");
        		prescNo = prescDt + "-" + prescSeqNo;
        		alert(prescNo);
         	} else {
        		prescNo = this.dsPatientDs.getColumn(this.dsPatientDs.rowposition, "prescNo");
         		prescSeqNo = (this.dsPatientPrsc.getRowCount()).toString().padLeft(5,"0");
        		prescNo = prescDt + "-" + prescSeqNo; 
        		alert(prescNo);  
        	}
        	
            this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "doctNm", this.trmtDiv.trmtDoctEd.value);  // 진료의명
            this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "patNo", patNo);                       	// 환자번호
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescNo", prescNo);                   	// 처방번호
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescDate", sDate);                   	// 처방일(오늘날짜)
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "prescGubun", smCd);                   	// 코드
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseCd", diCode);                  	// 상병코드
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "diseaseNm", diCodeNm);                	// 상병명
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "dept", this.trmtDiv.trmtDeptEd.value);   	// 진료과
        	this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, "outpaReceiptNo", receiptNo);          	// 접수번호

        	var arrRtn = new Array();
        	for (var i = 0; i < this.dsFeeCd.getColCount(); i++) {		
        		var colName = this.dsFeeCd.getColID(i);   
        		var colVal = this.dsFeeCd.getColumn(this.dsFeeCd.rowposition, colName);
        		arrRtn[i] = "\n" + i + " " + colName + " " + colVal;
        		this.dsPatientPrsc.setColumn(this.dsPatientPrsc.rowposition, colName, colVal);
        	}  
        	trace(this.dsPatientPrsc.saveXML());
        	this.dsPatientPrsc.setColumn(this.medTab.prscTp.patientGrid.currentrow, "uniqueNtc", this.dsBaseExam.getColumn(0, "sopMemo"));
        }

        
        /***** 차트탭 *****/

        // 차트탭 조회 클릭시
        this.medTab_chartTp_chartDiv_reportBtn_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.medTab.chartTp.chartDiv.patNoEd.value)) { 
        		alert("환자번호를 선택해주세요");
        		return;
        	}
        	this.medTab.chartTp.emrBrowser.set_url("http://localhost:8282/his/med/base/reportEmr.do?format=pdf&patNo=" + this.medTab.chartTp.chartDiv.patNoEd.value);
        	this.medTab.chartTp.emrBrowser.reload();
        	//this.medTab.chartTp.emrBrowser.set_url("http://localhost/erp45/med/mc/findEmrReport.do?patCode="+this.medTab.tabpage4.Div00.emrReport.value);//값에 담긴 환자번호 보낸다
        	//this.medTab.chartTp.emrBrowser.url = "http://localhost/ERP44/med/mc/findEmrReport.do?format=pdf";
        	//gfnService("reportEmr");
        }
          
        /***** 여기까지 차트탭 *****/  
          
          
        /***** 화면 하단구역 *****/

        // 닫기버튼 클릭시
        this.closeBtn_onclick = function(obj,e)
        {
        	this.close();
        }

        // 등록버튼 클릭시
        this.registerBtn_onclick = function(obj,e)
        { 
          	var hosYn = this.patientDiv.hosCombo.value;
        	var diseaseNm = this.dsPatientDs.getColumn(0, "codeNm");
        	var trmtDept = this.trmtDiv.trmtDeptEd.value;
        	for (var i = 0; i < this.dsPatientDs.getRowCount(); i++) {
        	   this.dsPatientDs.setColumn(i, "gubun", hosYn);  
        	}
        	
        	if (this.dsPatientDs.getRowCount != 0) {
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "trmtYb", "Y");   
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "prescYb", "Y");
        		this.dsOutpaReceipt.setColumn(this.dsOutpaReceipt.rowposition, "dgnsNm", diseaseNm);
        		//this.dsPatientDs.setColumn(this.dsPatientDs.rowposition, "prescNo", prescNo);
        	} 
        	
          	if (confirm("EMR 등록 하시겠습니까?")) {
        		this.gfnService("batchEmr");			
        	} 
        } 
         	
        // EMR 트랜잭션 콜백함수
        this.emrCallback = function(serviceID,errorCode,errorMsg)
        {
        	if (errorCode < 0) {
        		this.gfnErrorPopup(serviceID, errorCode, errorMsg);
        	} else {
        		if (serviceID == "findReceiptList") {
        			patNo = this.dsOutpaReceipt.getColumn(this.dsOutpaReceipt.rowposition, "patNo");
        		    this.patGrid.patGrid_oncellclick;
        		} else if (serviceID == "findBaseExamList") {
        			if (this.dsBaseExam.getRowCount()==0) this.dsBaseExam.addRow();
        			this.dsBaseExam.setColumn(this.dsBaseExam.rowposition, "patNo", patNo);
        		} else if (serviceID == "batchEmrList") {
        			alert("EMR이 정상적으로 등록되었습니다.");
        		}
        	}
        }

        
        // ❖S: patient’s symptoms and complaints
        // ❖O: patient's height, weight, temperature, pulse, blood pressure, visual acuity, etc.
        // ❖A: new lab data and results of studies, reports, assessments
        // ❖P: the current formulation and plan for the patient
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPatientDs.addEventHandler("onvaluechanged", this.dsDisease_onvaluechanged, this);
            this.addEventHandler("onload", this.MB_EmrForm_onload, this);
            this.patientDiv.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patientDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.trmtDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.titleStc01.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.registerBtn.addEventHandler("onclick", this.registerBtn_onclick, this);
            this.closeBtn.addEventHandler("onclick", this.closeBtn_onclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.patGrid.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.medTab.reportTp.diseaseGrid.addEventHandler("oncellclick", this.medTab_reportTp_diseaseGrid_oncellclick, this);
            this.medTab.reportTp.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.medTab.reportTp.Static01.addEventHandler("onclick", this.Static00_onclick, this);
            this.medTab.reportTp.Div02.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.medTab.reportTp.Div04.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.medTab.reportTp.Div03.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.medTab.prscTp.diseaseDiv.diseaseAddBtn.addEventHandler("onclick", this.medTab_prscTp_diseaseDiv_diseaseAddBtn_onclick, this);
            this.medTab.prscTp.diseaseDiv.diseaseDelBtn.addEventHandler("onclick", this.medTab_prscTp_diseaseDiv_diseaseDelBtn_onclick, this);
            this.medTab.prscTp.titleStc00.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.medTab.prscTp.diseaseGrid.addEventHandler("oncellclick", this.medTab_prscTp_diseaseGrid_oncellclick, this);
            this.medTab.prscTp.prscDiv.prscDelBtn.addEventHandler("onclick", this.medTab_prscTp_prscDiv_prscDelBtn_onclick, this);
            this.medTab.prscTp.presGrid.addEventHandler("oncelldblclick", this.medTab_prscTp_presGrid_oncelldblclick, this);
            this.medTab.prscTp.prscTypeDiv.Button00.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.prscTypeDiv.Button01.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.prscTypeDiv.Button02.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.prscTypeDiv.Button03.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.prscTypeDiv.Button04.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.prscTypeDiv.Button05.addEventHandler("onclick", this.medTab_prscTp_prscTypeDiv_prscBtn_onclick, this);
            this.medTab.prscTp.titleStc01.addEventHandler("onclick", this.titleStc00_onclick, this);
            this.medTab.chartTp.chartDiv.reportBtn.addEventHandler("onclick", this.medTab_chartTp_chartDiv_reportBtn_onclick, this);
            this.medTab.chartTp.chartDiv.patNoEd.addEventHandler("oneditclick", this.medTab_tabpage4_Div00_emrReport_oneditclick, this);
            this.medTab.chartTp.emrBrowser.addEventHandler("onerror", this.medTab_tabpage4_WebBrowser00_onerror, this);

        };

        this.loadIncludeScript("MB_EmrForm.xfdl");

       
    };
}
)();
