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
                this.set_name("HF_DoctTrmtSchdMngntForm");
                this.set_classname("HF_DoctTrmtSchdMngntForm");
                this.set_titletext("의사진료일정조회");
                this._setFormPosition(0,0,1250,768);
            }
            this.style.set_background("#cfd8dcff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCfrnTrmt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"cfrnTrmtNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTime\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"mtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDate\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoct\" type=\"STRING\" size=\"256\"/><Column id=\"callYN\" type=\"STRING\" size=\"256\"/><Column id=\"adrYN\" type=\"STRING\" size=\"256\"/><Column id=\"emeYN\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"RespDoct\" type=\"STRING\" size=\"256\"/><Column id=\"respDate\" type=\"STRING\" size=\"256\"/><Column id=\"respCon\" type=\"STRING\" size=\"256\"/><Column id=\"respType\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoct\" type=\"STRING\" size=\"256\"/><Column id=\"askingDept\" type=\"STRING\" size=\"256\"/><Column id=\"askingDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"askingDate\" type=\"STRING\" size=\"256\"/><Column id=\"askingDiv\" type=\"STRING\" size=\"256\"/><Column id=\"askingCon\" type=\"STRING\" size=\"256\"/><Column id=\"askingCau\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDeptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetailAM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetailFM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">batchTrmtTypeProcess</Col><Col id=\"URL\">erp47::med/base/batchTrmtTypeProcess.do</Col><Col id=\"inData\">dsTrmtSchdType=dsTrmtSchdType:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">batchTrmtTypeDetailAMProcess</Col><Col id=\"URL\">erp47::med/base/batchTrmtTypeDetailAMProcess.do</Col><Col id=\"inData\">dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetailAM:u</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"inData\">dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetailFM:u</Col><Col id=\"URL\">erp47::med/base/batchTrmtTypeDetailFMProcess.do</Col><Col id=\"serviceID\">batchTrmtTypeDetailFMProcess</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findTrmtTypeList</Col><Col id=\"URL\">erp47::med/base/findTrmtTypeList.do</Col><Col id=\"outData\">dsTrmtSchdType=dsTrmtSchdType dsTrmtSchdTypeDetail=dsTrmtSchdTypeDetail</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">applyType</Col><Col id=\"URL\">erp47::med/base/callApplyType.do</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findCalendarList</Col><Col id=\"URL\">his::hdm/foreign/findCalendarList.do</Col><Col id=\"outData\">dsCalendar=dsCalendar</Col></Row><Row><Col id=\"serviceID\">findTrmtSchdList</Col><Col id=\"URL\">his::hdm/foreign/findTrmtSchdList.do</Col><Col id=\"outData\">dsTrmtSchd=dsTrmtSchd</Col></Row><Row><Col id=\"serviceID\">findApplyHistoryList</Col><Col id=\"URL\">his::hdm/foreign/findApplyHistoryList.do</Col><Col id=\"outData\">dsApplyHistory=dsApplyHistory</Col></Row><Row><Col id=\"serviceID\">findDoctResptMsgList</Col><Col id=\"URL\">erp47::med/request/findDoctResptMsgList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsCfrnTrmt=dsCfrnTrmt</Col><Col id=\"argument\">[Undefined]</Col><Col id=\"callbackFunc\">[Undefined]</Col></Row><Row><Col id=\"serviceID\">findEmpList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col><Col id=\"callbackFunc\">callback</Col></Row><Row><Col id=\"serviceID\">findSchCnt</Col><Col id=\"URL\">his::hdm/foreign/findDayScheduleList.do</Col><Col id=\"outData\">dsDaySchedule=dsDaySchedule</Col><Col id=\"callbackFunc\">callback</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"meddate\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"rsvcnt\" type=\"STRING\" size=\"256\"/><Column id=\"examtm\" type=\"STRING\" size=\"256\"/><Column id=\"ampmflag\" type=\"STRING\" size=\"256\"/><Column id=\"rsvposcnt\" type=\"STRING\" size=\"256\"/><Column id=\"totcnt\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsApplyHistory", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDayOfWeek", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">일</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">월</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">화</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">수</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">목</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">금</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">토</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("trmtStandard", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"day\" type=\"STRING\" size=\"256\"/><Column id=\"a\" type=\"STRING\" size=\"256\"/><Column id=\"p\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNm\" type=\"STRING\" size=\"256\"/><Column id=\"amUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"fmUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"amStime\" type=\"STRING\" size=\"256\"/><Column id=\"amEtime\" type=\"STRING\" size=\"256\"/><Column id=\"fmStime\" type=\"STRING\" size=\"256\"/><Column id=\"fmEtime\" type=\"STRING\" size=\"256\"/><Column id=\"amIntv\" type=\"STRING\" size=\"256\"/><Column id=\"fmIntv\" type=\"STRING\" size=\"256\"/><Column id=\"amHandle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"fmHandle\" type=\"INT\" size=\"256\"/><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thurs\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTrmtSchdTypeDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"amFmDiv\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"handle\" type=\"STRING\" size=\"256\"/><Column id=\"diffDeptReser\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTypeNo\" type=\"STRING\" size=\"256\"/><Column id=\"dayOfWeek\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"DOW1\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT1\" type=\"STRING\" size=\"256\"/><Column id=\"AM1\" type=\"STRING\" size=\"256\"/><Column id=\"PM1\" type=\"STRING\" size=\"256\"/><Column id=\"DOW2\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT2\" type=\"STRING\" size=\"256\"/><Column id=\"AM2\" type=\"STRING\" size=\"256\"/><Column id=\"PM2\" type=\"STRING\" size=\"256\"/><Column id=\"DOW3\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT3\" type=\"STRING\" size=\"256\"/><Column id=\"AM3\" type=\"STRING\" size=\"256\"/><Column id=\"PM3\" type=\"STRING\" size=\"256\"/><Column id=\"DOW4\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT4\" type=\"STRING\" size=\"256\"/><Column id=\"AM4\" type=\"STRING\" size=\"256\"/><Column id=\"PM4\" type=\"STRING\" size=\"256\"/><Column id=\"DOW5\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT5\" type=\"STRING\" size=\"256\"/><Column id=\"AM5\" type=\"STRING\" size=\"256\"/><Column id=\"PM5\" type=\"STRING\" size=\"256\"/><Column id=\"DOW6\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT6\" type=\"STRING\" size=\"256\"/><Column id=\"AM6\" type=\"STRING\" size=\"256\"/><Column id=\"PM6\" type=\"STRING\" size=\"256\"/><Column id=\"DOW7\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT7\" type=\"STRING\" size=\"256\"/><Column id=\"AM7\" type=\"STRING\" size=\"256\"/><Column id=\"PM7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("gdsEmp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDaySchedule", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"medDate\" type=\"STRING\" size=\"256\"/><Column id=\"amRsvCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmRsvCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmTotCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "22.88%", "374", null, "364", "65.84%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("trmtStandard");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요일\"/><Cell col=\"1\" text=\"A\"/><Cell col=\"2\" text=\"P\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" text=\"bind:day\" combodataset=\"dsDayOfWeek\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:comp.parent.dsTrmtSchd.getColumn(0, &quot;amHandle&quot;)\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:comp.parent.dsTrmtSchd.getColumn(0, &quot;fmHandle&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "52.4%", "374", null, "364", "29.92%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTrmtSchdTypeDetailFM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"오후시간\"/><Cell col=\"1\" text=\"총원\"/><Cell col=\"2\" text=\"타과예약\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:time\" mask=\"@@:@@\"/><Cell col=\"1\" text=\"bind:handle\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:diffDeptReser\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"오후합계\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(handle)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "34.32%", "374", null, "363", "47.76%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsTrmtSchdTypeDetailAM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"오전시간\"/><Cell col=\"1\" text=\"총원\"/><Cell col=\"2\" text=\"타과예약\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:time\" mask=\"@@:@@\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:handle\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:diffDeptReser\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"오전합계\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;parseInt(handle)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "5", null, "46", "-0.16%", null, this);
            obj.set_taborder("7");
            obj.set_text("의사진료일정");
            obj.style.set_background("#90a4aeff stretch");
            obj.style.set_color("#37474fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 굴림");
            this.addChild(obj.name, obj);

            obj = new Div("doctschdDiv", "absolute", "0.48%", "67", null, "701", "0.88%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Grid("typeGrid", "absolute", "1.46%", "183", null, "492", "79.04%", null, this.doctschdDiv);
            obj.set_taborder("158");
            obj.set_binddataset("gdsEmp");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("black");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"color: ;\" text=\"진료과\"/><Cell col=\"1\" text=\"의사명\"/><Cell col=\"2\" text=\"의사코드\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" style=\"align:center;color:black;color2:black;\" text=\"bind:deptNm\" expandshow=\"hide\" expandsize=\"15\"/><Cell col=\"1\" text=\"bind:empNm\"/><Cell col=\"2\" text=\"bind:empNo\"/></Band></Format></Formats>");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "33.96%", "75", null, "21", "49.8%", null, this.doctschdDiv);
            obj.set_taborder("174");
            obj.set_text("일별 예약현황");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Grid("reserGrid", "absolute", "64.74%", "22", null, "646", "0.49%", null, this.doctschdDiv);
            obj.set_taborder("176");
            obj.set_binddataset("dsTrmtSchd");
            obj.set_autofittype("col");
            obj.style.set_border("1px solid #808080ff");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"99\"/><Column size=\"104\"/><Column size=\"75\"/><Column size=\"42\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"시간\"/><Cell col=\"1\" style=\"background: ;\" text=\"예약인원현황\"/><Cell col=\"2\" style=\"background: ;\" text=\"예약가능인원\"/><Cell col=\"3\" text=\"오전/오후\"/><Cell col=\"4\" text=\"총원\"/><Cell col=\"5\" text=\"설명\"/></Band><Band id=\"body\" style=\"selectbackground:#b0bec5ff;selectcolor:black;\"><Cell displaytype=\"text\" style=\"background2: ;\" text=\"bind:examtm\" mask=\"@@:@@\"/><Cell col=\"1\" style=\"background2: ;\" text=\"bind:rsvcnt\"/><Cell col=\"2\" style=\"background2: ;\" expr=\"expr:parseInt(totcnt)-parseInt(rsvcnt)\"/><Cell col=\"3\" text=\"bind:ampmflag\"/><Cell col=\"4\" text=\"bind:totcnt\"/><Cell col=\"5\" text=\"bind:comments\"/></Band></Format></Formats>");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "1.95%", "23", null, "93", "79.94%", null, this.doctschdDiv);
            obj.set_taborder("177");
            obj.style.set_align("center middle");
            obj.style.set_border("3 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.5%", "-34", null, "20", "72.35%", null, this.doctschdDiv.Div00);
            obj.set_taborder("52");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.49%", "-34", null, "20", "67.28%", null, this.doctschdDiv.Div00);
            obj.set_taborder("53");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "35.02%", "-34", null, "20", "61.75%", null, this.doctschdDiv.Div00);
            obj.set_taborder("54");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "41.01%", "-34", null, "20", "55.76%", null, this.doctschdDiv.Div00);
            obj.set_taborder("55");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "47.93%", "-34", null, "20", "48.85%", null, this.doctschdDiv.Div00);
            obj.set_taborder("56");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "53.92%", "-34", null, "20", "42.86%", null, this.doctschdDiv.Div00);
            obj.set_taborder("57");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.91%", "-34", null, "20", "37.33%", null, this.doctschdDiv.Div00);
            obj.set_taborder("58");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.9%", "-34", null, "20", "31.34%", null, this.doctschdDiv.Div00);
            obj.set_taborder("59");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "23.96%", "-56", null, "29", "28.11%", null, this.doctschdDiv.Div00);
            obj.set_taborder("60");
            obj.style.set_align("center middle");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#dcdeffff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("9 Dotum");
            obj.set_cssclass("TStc");
            this.doctschdDiv.Div00.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox", "absolute", "23.53%", "-34", null, "20", "72.55%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("80");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox", "absolute", "29.41%", "-34", null, "20", "66.67%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("81");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox", "absolute", "35.29%", "-34", null, "20", "61.76%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("82");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox", "absolute", "41.18%", "-34", null, "20", "55.88%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("83");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox", "absolute", "48.04%", "-34", null, "20", "49.02%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("84");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox", "absolute", "53.92%", "-34", null, "20", "43.14%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("85");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox", "absolute", "59.8%", "-34", null, "20", "37.25%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("86");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox", "absolute", "65.69%", "-34", null, "20", "31.37%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("87");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("satCheckBox00", "absolute", "86.27%", "6", null, "20", "5.88%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("88");
            obj.set_text("토");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("friCheckBox00", "absolute", "74.51%", "6", null, "20", "16.67%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("89");
            obj.set_text("금");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("thursCheckBox00", "absolute", "63.73%", "6", null, "20", "28.43%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("90");
            obj.set_text("목");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("wedCheckBox00", "absolute", "51.96%", "6", null, "20", "39.22%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("91");
            obj.set_text("수");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("tueCheckBox00", "absolute", "40.2%", "6", null, "20", "50.98%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("92");
            obj.set_text("화");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("center middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("monCheckBox00", "absolute", "29.41%", "6", null, "20", "61.76%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("93");
            obj.set_text("월");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#000000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("sunCheckBox00", "absolute", "17.65%", "6", null, "20", "73.53%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("94");
            obj.set_text("일");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("#ff0000ff");
            obj.style.set_align("left middle");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new CheckBox("allCheckBox00", "absolute", "6.86%", "6", null, "20", "85.29%", null, this.doctschdDiv.Div00.Div02);
            obj.set_taborder("95");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonsize("15");
            obj.style.set_color("#223762ff");
            obj.style.set_font("돋움,9,bold");
            obj.getSetter("class").set("AreaCheck");
            this.doctschdDiv.Div00.Div02.addChild(obj.name, obj);
            obj = new Button("searchEmpBtn", "absolute", "16.9%", "70", null, "30", "80.67%", null, this.doctschdDiv);
            obj.set_taborder("178");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("deptNmEd", "absolute", "7.96%", "36", null, "30", "83.92%", null, this.doctschdDiv);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("empNmEd", "absolute", "7.96%", "71", null, "30", "83.92%", null, this.doctschdDiv);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv00", "absolute", "3.17%", "72", null, "27", "92.77%", null, this.doctschdDiv);
            obj.set_taborder("181");
            obj.set_text("진료의");
            obj.set_wordwrap("char");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Static("stDiv14", "absolute", "3.17%", "37", null, "27", "92.77%", null, this.doctschdDiv);
            obj.set_taborder("182");
            obj.set_text("진료과");
            obj.set_wordwrap("char");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("deptCdEd", "absolute", "21.28%", "36", null, "26", "70.59%", null, this.doctschdDiv);
            obj.set_taborder("183");
            obj.set_visible("false");
            this.doctschdDiv.addChild(obj.name, obj);
            obj = new Edit("empNoEd", "absolute", "21.28%", "75", null, "29", "70.59%", null, this.doctschdDiv);
            obj.set_taborder("184");
            obj.set_visible("false");
            this.doctschdDiv.addChild(obj.name, obj);

            obj = new Grid("grdCalendar", "absolute", "22.88%", "265", null, "448", "37.04%", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"48\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"20\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:lightcoral;font:11 돋움;\" text=\"일\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"월\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"화\"/><Cell col=\"6\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"수\"/><Cell col=\"8\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"목\"/><Cell col=\"10\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"금\"/><Cell col=\"12\" colspan=\"2\" style=\"background:lightsteelblue;font:11 돋움;\" text=\"토\"/></Band><Band id=\"body\" style=\"selectbackground:#CFD8DC;cellbackground2:#ffffffff;\"><Cell rowspan=\"3\" colspan=\"2\"><Cell style=\"color:red;color2:red;font:12 arial;\" text=\"bind:DOW1\"/><Cell col=\"1\" text=\"bind:TEXT1\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM1\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM1\"/></Cell><Cell col=\"2\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW2\"/><Cell col=\"1\" text=\"bind:TEXT2\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM2\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM2\"/></Cell><Cell col=\"4\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW3\"/><Cell col=\"1\" text=\"bind:TEXT3\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM3\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM3\"/></Cell><Cell col=\"6\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW4\"/><Cell col=\"1\" text=\"bind:TEXT4\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM4\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM4\"/></Cell><Cell col=\"8\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW5\"/><Cell col=\"1\" text=\"bind:TEXT5\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM5\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM5\"/></Cell><Cell col=\"10\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW6\"/><Cell col=\"1\" text=\"bind:TEXT6\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM6\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM6\"/></Cell><Cell col=\"12\" rowspan=\"3\" colspan=\"2\" style=\"background: ;\"><Cell style=\"color:blue;color2:blue;font:12 arial;\" text=\"bind:DOW7\"/><Cell col=\"1\" text=\"bind:TEXT7\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM7\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM7\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("preMonthBtn", "absolute", "30.56%", "190", null, "32", "66.32%", null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::miniBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("stYear", "absolute", "35.36%", "192", null, "27", "59.76%", null, this);
            obj.set_taborder("12");
            obj.style.set_align("middle");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "41.28%", "190", null, "28", "56.8%", null, this);
            obj.set_taborder("13");
            obj.set_text("년");
            obj.style.set_font("11 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("stMonth", "absolute", "42.72%", "192", null, "27", "53.28%", null, this);
            obj.set_taborder("14");
            obj.style.set_align("middle");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "47.6%", "190", null, "28", "50.48%", null, this);
            obj.set_taborder("15");
            obj.set_text("월");
            obj.style.set_font("11 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("nextMonthBtn", "absolute", "51.2%", "188", null, "32", "45.76%", null, this);
            obj.set_taborder("16");
            obj.style.set_background("@gradation URL('img::miniBtn2.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.doctschdDiv.Div00.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("60");
            		p.style.set_align("center middle");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div00.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 93, this.doctschdDiv.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("177");
            		p.style.set_align("center middle");
            		p.style.set_border("3 solid #808080ff");
            		p.style.set_color("#dcdeffff");
            		p.style.set_bordertype("round 5 5");
            		p.style.set_font("9 Dotum");
            		p.set_cssclass("TStc");

            	}
            );
            this.doctschdDiv.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1228, 45, this.doctschdDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("#edececff");
            		p.style.set_border("1 solid lightsteelblue");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.doctschdDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HF_DoctTrmtSchdMngntForm");
            		p.set_titletext("의사진료일정조회");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HF_DoctTrmtSchdMngntForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HF_DoctTrmtSchdMngntForm.xfdl", "scripts::supScripts.xjs");
        this.addIncludeScript("HF_DoctTrmtSchdMngntForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HF_DoctTrmtSchdMngntForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";  
        //include "scripts::supScripts.xjs";
        //include "scripts::wonScripts.xjs";

        var deptno;
        var deptnm;
        var empno;
        var empnm;

        /********************************************************************************
        @Description 	트랜잭션 콜백
        ********************************************************************************/
        this.CallbackFunc = function(trid,errcd,errmsg)
        {
        	//alert(trid)
        	if(errcd<0)
        	{
        	    alert(errcd+errmsg)
        		//this.gfnErrorPopup(trid, errmsg);
        		return;
        	//}
        	//if(trid=="batchTrmtTypeProcess"){
        	//alert("batchTrmtTypeDetailAMProcess받아오기")
        	//	this.gfnService("batchTrmtTypeDetailAMProcess");
        	}else if(trid=="batchTrmtTypeDetailAMProcess"){
        		this.gfnService("batchTrmtTypeDetailFMProcess");
        	}else if(trid=="batchTrmtTypeDetailFMProcess"){
        		this.gfnService("findTrmtTypeList");
        	}else if(trid=="findTrmtTypeList"){
        		this.dsTrmtSchdTypeDetail.filter("amFmDiv=='오전'");
        		this.dsTrmtSchdTypeDetailAM.copyData(this.dsTrmtSchdTypeDetail,true);
        		this.dsTrmtSchdTypeDetail.filter("amFmDiv=='오후'");
        		this.dsTrmtSchdTypeDetailFM.copyData(this.dsTrmtSchdTypeDetail,true);
        		this.allfilter();
        		
        		
        	}else if(trid=="applyType"){
        		if(empno!=null||empno!=undefined){
        			this.findTrmtSchd();
        			this.findApplyHistory();
        		}
        	}else if(trid=="findCalendarList"){
        	
        	}else if(trid=="findTrmtSchdList"){
        		this.dsTrmtSchd.filter("day=='바보'");
        	}
        }

        
        /********************************************************************************
        @Description 	trmtstandard새로 생성 am,fm필터링
        ********************************************************************************/

        this.allfilter = function()
        {
        	this.trmtStandard.deleteAll();
        	var typeNo=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	this.addTrmtStandard(typeNo);
        	var tsrow=this.trmtStandard.rowposition;
        	if(tsrow==-1)
        		return;
        	var day=this.trmtStandard.getColumn(tsrow,"day");
        	this.dsTrmtSchdTypeDetailAM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+day+"'");
        	this.dsTrmtSchdTypeDetailFM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+day+"'");
        }

        
        /********************************************************************************
        @Description 	trmtstandard 추가
        ********************************************************************************/

        this.addTrmtStandard = function(typeNo)
        {
        	for(var i=1;i<8;i++){
        		this.dsTrmtSchdTypeDetailAM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+i+"'");
        		this.dsTrmtSchdTypeDetailFM.filter("trmtTypeNo=='"+typeNo+"' && dayOfWeek=='"+i+"'");
        		var amCount=this.dsTrmtSchdTypeDetailAM.rowcount;
        		var fmCount=this.dsTrmtSchdTypeDetailFM.rowcount;
        		if(amCount!=0 || fmCount!=0){
        			var addedRow=this.trmtStandard.addRow();
        			this.trmtStandard.setColumn(addedRow,"day",i);
        		}
        	}
        }

        

        /********************************************************************************
        @Description 	emp 조회 선택된 emp정보 들고오기
        ********************************************************************************/

        this.searchEmpBtn_onclick = function(obj,e)
        {
        		this.gfnDoctPopup();
        		this.setDoct = function(arrRtn){ 
        		empno=arrRtn[0];
        		empnm=arrRtn[1];
        		this.doctschdDiv.empNoEd.set_value(arrRtn[0]);
        		this.doctschdDiv.empNmEd.set_value(arrRtn[1]);
        		this.doctschdDiv.deptNmEd.set_value(arrRtn[2]);
        		this.doctschdDiv.deptCdEd.set_value(arrRtn[3]);
        		//alert(empnm);
        		
        		//this.dsService.setColumn(3,"argument","empNo="+empno);
        		//this.gfnService("findTrmtTypeList"); //진료일정타입 조회
        		this.dsService.setColumn(10,"argument","empNo="+empno);
        		this.gfnService("findSchCnt");
        		
        		//달력 셋팅
        		var sDate=this.lfn_GetSysDate();
        		this.fn_MakeCalendar(sDate);
        		//진료일정 조회
        		this.findTrmtSchd();
        		
        		this.findApplyHistory();
        		}	
        }

        /********************************************************************************
        @Description 	type적용이력 가져오기
        ********************************************************************************/

        this.findApplyHistory = function(){
        	if(empno==null||empno==undefined)
        		return;
        	this.dsService.setColumn(7,"argument","empNo="+empno);
        	this.gfnService("findApplyHistoryList"); //날짜조회
        	//trace(this.dsApplyHistory.saveXML());
        }

        /********************************************************************************
        @Description 	스케줄 조회
        ********************************************************************************/

        this.findTrmtSchd = function (){
        	var year=this.stYear.text;
        	var month=this.stMonth.text;
        	var yearMonth=year+""+month;
        	//alert(yearMonth);
        	var param="empNo="+empno+" yearMonth="+yearMonth;
        	this.dsService.setColumn(6,"argument",param);
        	this.gfnService("findTrmtSchdList");//진료일정 조회
        }

        /********************************************************************************
        @Description 	allCheckBox이벤트
        ********************************************************************************/
        //전체
        this.allCheckBox_onchanged = function(obj,e)
        {
        	var addedrow=this.dsTrmtSchdType.rowposition;
        	if(addedrow==-1)
        		return;
        	if(obj.value==0)
        		this.dayCheckChange(addedrow,"0");
        	else
        		this.dayCheckChange(addedrow,"1");
        }

        /********************************************************************************
        @Description 	월~일 체크박스 체인지
        ********************************************************************************/

        this.dayCheckChange = function (addedrow,value){
        	this.dsTrmtSchdType.setColumn(addedrow,"sun",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"mon",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"tue",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"wed",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"thurs",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"fri",value);
        	this.dsTrmtSchdType.setColumn(addedrow,"sat",value);
        }

        /********************************************************************************
        @Description 	타임 입력시 숫자만 입력하도록 이벤트
        ********************************************************************************/

        this.timeMaskEdt_onkeydown = function(obj,e)
        {
        	var keycode=e.keycode;
        	if(keycode<48||keycode>57)
        		return;
        }

        /********************************************************************************
        @Description 	간격 총원 입력시 숫자만 입력하도록 이벤트
        ********************************************************************************/

        this.edt_onkeydown = function(obj,e)
        {
        	var keycode=e.keycode;
        	if(keycode<48||keycode>57)
        		return;
        }

        
        /********************************************************************************
        @Description 	am fm 필터
        ********************************************************************************/

        this.detailFilter = function(){
        	var day=this.trmtStandard.getColumn(this.trmtStandard.rowposition,"day");
        	alert("데이 : "+day);
        	var trmtno=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	this.dsTrmtSchdTypeDetailAM.filter("dayOfWeek=='"+day+"' && trmtTypeNo=='"+trmtno+"'");
        	this.dsTrmtSchdTypeDetailFM.filter("dayOfWeek=='"+day+"' && trmtTypeNo=='"+trmtno+"'");
        }

        /********************************************************************************
        @Description 	am생성
        ********************************************************************************/

        this.createAmGrid = function(arr)
         {
        	var len = arr.length;
        	var statTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amStime");
        	var endTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amEtime");
        	var intv=parseInt(this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amIntv"));
        	if(intv==undefined || intv>60 || intv==0){
        		alert("오전 간격을 수정하십시오");
        		return;
        	}
        	var shour=parseInt(statTime.substr(0,2));
        	var smi=parseInt(statTime.substr(2,2));
        	var ehour=parseInt(endTime.substr(0,2));
        	var emi=parseInt(endTime.substr(2,2));
        	if(shour==undefined || shour>12){
        		alert("오전시작시간을 수정하십시오 0~12");
        		return;
        	}
        	if(ehour==undefined || ehour>12){
        		alert("오전종료시간을 수정하십시오 0~12");
        		return;
        	}
        	if(smi==undefined || smi>60){
        		alert("오전시작 분을 수정하십시오 0~60");
        		return;
        	}
        	if(emi==undefined || emi>60){
        		alert("오전종료 분을 수정하십시오 0~60");
        		return;
        	}
        	var startTime=(shour*60)+smi;
        	var worktime = (ehour*60)+emi-(shour*60)-smi;
        	
        	if(worktime<0 || worktime==0){
        		alert("오전시간설정을 다시 시작해주세용");
        		return;
        	}
        	var handle = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"amHandle");
        	var trmtTypeNo = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	if(handle==undefined||handle==""){
        		alert("총원을 설정해주세요");
        		return;
        	}
        	for(var i=0;i<len;i++){
        		for(var incresedTime=0;incresedTime<worktime;incresedTime+=intv){
        			var uptime=startTime+incresedTime;
        			var hour=Math.floor(uptime/60);
        			var mi=uptime%60;
        			
        			var strHour=(hour+"").padLeft(2, "0");
        			var strMi=(mi+"").padLeft(2, "0");
        			var hourmi=strHour+strMi;
        			var amrow=this.dsTrmtSchdTypeDetailAM.addRow();
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"dayOfWeek",arr[i]);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"time",hourmi);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"trmtTypeNo",trmtTypeNo);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"amFmDiv","오전");
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"handle",handle);
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"diffDeptReser","0");
        			this.dsTrmtSchdTypeDetailAM.setColumn(amrow,"empNo",empno);
        		}
        	}
         }

         /********************************************************************************
        @Description 	fm 생성
        ********************************************************************************/

        this.createFmGrid = function (arr)
        {
        	var len = arr.length;
        	var statTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmStime");
        	var endTime=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmEtime");
        	var intv=parseInt(this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmIntv"));
        	if(intv==undefined || intv>60 || intv==0){
        		alert("오후 간격을 수정하십시오");
        		return;
        	}
        	var shour=parseInt(statTime.substr(0,2));
        	var smi=parseInt(statTime.substr(2,2));
        	var ehour=parseInt(endTime.substr(0,2));
        	var emi=parseInt(endTime.substr(2,2));
        	if(shour==undefined || shour>23 || shour<12){
        		alert("오후시작시간을 수정하십시오 12~24");
        		return;
        	}
        	if(ehour==undefined || ehour>24 || ehour<12){
        		alert("오후종료시간을 수정하십시오 12~24");
        		return;
        	}
        	if(smi==undefined || smi>60){
        		alert("오후시작 분을 수정하십시오 0~60");
        		return;
        	}
        	if(emi==undefined || emi>60){
        		alert("오후종료 분을 수정하십시오 0~60");
        		return;
        	}
        	var startTime=(shour*60)+smi;
        	var worktime = (ehour*60)+emi-(shour*60)-smi;
        	
        	if(worktime<0 || worktime==0){
        		alert("오전시간설정을 다시 시작해주세용");
        		return;
        	}
        	var handle = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"fmHandle");
        	var trmtTypeNo = this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	if(handle==undefined||handle==""){
        		alert("총원을 설정해주세요");
        		return;
        	}
        	for(var i=0;i<len;i++){
        		for(var incresedTime=0;incresedTime<worktime;incresedTime+=intv){
        			var uptime=startTime+incresedTime;
        			var hour=Math.floor(uptime/60);
        			var mi=uptime%60;
        			
        			var strHour=(hour+"").padLeft(2, "0");
        			var strMi=(mi+"").padLeft(2, "0");
        			var hourmi=strHour+strMi;
        			var amrow=this.dsTrmtSchdTypeDetailFM.addRow();
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"dayOfWeek",arr[i]);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"time",hourmi);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"trmtTypeNo",trmtTypeNo);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"amFmDiv","오후");
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"handle",handle);
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"diffDeptReser","0");
        			this.dsTrmtSchdTypeDetailFM.setColumn(amrow,"empNo",empno);
        		}
        	}

        }

        /********************************************************************************
        @Description 	clear버튼 클릭 시 이벤트
        ********************************************************************************/
        //요일 초기화
        this.deleteAllDetailBtn_onclick = function(obj,e)
        {
        	this.dsTrmtSchdTypeDetailFM.deleteAll();
        	this.dsTrmtSchdTypeDetailAM.deleteAll();
        	this.trmtStandard.deleteAll();
        }

        /********************************************************************************
        @Description 	그리드 클릭시 필터
        ********************************************************************************/
        //진료별 상세 기준 그리드
        this.dayGrid_oncellclick = function(obj,e)
        {
        	this.detailFilter();
        }

        /********************************************************************************
        @Description 	type베치
        ********************************************************************************/

        this.saveTrmtTypeBtn_onclick = function(obj,e)
        {
            
        	this.gfnService("batchTrmtTypeProcess");
        	trace(this.dsTrmtSchdType.saveXML());
        }

        /********************************************************************************
        @Description 	type삭제
        ********************************************************************************/

        this.delTypeBtn_onclick = function(obj,e)
        {
        	this.dsTrmtSchdType.deleteRow(this.dsTrmtSchdType.rowposition);
        }

        
        /********************************************************************************
        @Description 	type선택시 필터
        ********************************************************************************/

        this.typeGrid_oncellclick = function(obj,e)
        {
        	this.allfilter();
        }

        /********************************************************************************
        @Description 	type을 실 일정에 적용
        ********************************************************************************/
        this.applyTypeBtn_onclick = function(obj,e)
        {
        	var typeNo=this.dsTrmtSchdType.getColumn(this.dsTrmtSchdType.rowposition,"trmtTypeNo");
        	alert(typeNo)
        	var sday=this.doctschdDiv.sdayCal.value;
        	alert(sday)
        	var eday=this.doctschdDiv.edayCal.value;
        	
        	if(sday>=eday){
        		alert("기간설정을 다시해주세요");
        		return;
        	}
        	if(sday==undefined||eday==undefined){
        		alert("기간설정을 다시해주세요");
        		return;
        	}
        	if(typeNo==undefined){
        		alert("타입을 선택하여 적용하십시오");
        		return;
        	}
        	var param="sday="+sday+" eday="+eday+" typeNo="+typeNo+" empNo="+empno;
        	this.dsService.setColumn(4,"argument",param);
        	this.gfnService("applyType");
        	
        }

        /********************************************************************************
        @Description 	폼 온로드시 이벤트
        ********************************************************************************/
        this.MB_DoctTrmtSchdMngntForm_onload = function(obj,e)
        { /*
        	var gdsEmpNo = application.gdsEmp.getColumn(0, "empNo");
        	//alert(gdsEmpNo+"gdsEmpNo");
        	var argument = 'gdsEmpNo='+gdsEmpNo;
        	this.dsService.setColumn(8,"argument",argument);
        	this.gfnService("findDoctResptMsgList", false);
        		
        	if(this.dsCfrnTrmt.rowcount==0){
        		alert("조건에 맞는 회신 결과가 없습니다.");
        		this.cfrnTrmtRespBtn.set_visible(false);
        	}else{
        		alert("되는가?");
        		this.cfrnTrmtRespBtn.set_visible(true);
            }
           
        	var yearMonth=this.gfnDate("yyyymm");
        	var year=yearMonth.substr(0,4);
        	var month=yearMonth.substr(4,2);
        	this.doctschdDiv.Div01.stYear.set_text(year);
        	this.doctschdDiv.Div01.stMonth.set_text(month);
        	alert(yearMonth);
        	this.dsService.setColumn(5,"argument","yearMonth="+yearMonth);
        	
        	this.gfnService("findCalendarList");
        	*/
        	this.dsService.setColumn(0,"argument","jobrk=의사");
        	this.gfnService("findEmpList");
        	
        	
        }

        
        /********************************************************************************
        @Description 	달력 클릭시 일정 필터
        ********************************************************************************/

        
        this.grdCalendar_oncellclick = function(obj,e)
        {
        	var day=obj.getSubCellText(e.row,e.cell,0);
        	
        	 if(day.toString().length == 1)
        	{
        	day = "0" + day;	}
        	var year=this.stYear.text;
        	var month=this.stMonth.text;
        	var date=year+month+day;
        	
        	this.dsTrmtSchd.filter("meddate=='"+date+"'");
        	this.opener.setDate(date);
        	//trace(this.dsTrmtSchd.saveXML());
        }

        /*******************************************************************************/

        var L_SYSDATE;
        this.lfn_GetSysDate = function(sFormatYn)   //현재날짜를 리턴하는 함수 parameter에 "Y"를 전달하면 년-월-일로 반환
        {
            //var sUrl;
            //var sArgument;
            var sSysDate;

            //sUrl = G_SERVICEURL + "/CommonCtrl.do";	    
        	//sArgument += " service=" + "sysCommonSvc";
        	//sArgument += " method="  + "selectSysDate";
        	
            //http.Sync = true;
            
            //L_SYSDATEERRYN = "N";
            
            //transaction("getSysDate", sURL, "", " ", sArgument, "lfn_GetSysDateCallBack");
           
            //http.Sync = false;

            // 서버 날짜 조회시 에러가 발생하면 PC 날짜로 리턴
            //if (L_SYSDATEERRYN == "Y") {
               var objDate = new Date();
               var sYear=objDate.getFullYear()+"";//년
               var sMonth=objDate.getMonth()+1+"";//월
               if(sMonth.toString().length == 1)
        	{
        	sMonth = "0" + sMonth;
        	}
               var sDate=objDate.getDate()+"";//일
                 if(sDate.toString().length == 1)
        	{
        	sDate = "0" + sDate;
        	}
               L_SYSDATE = sYear+sMonth+sDate;
              // alert(L_SYSDATE);
            //}
            
           if (sFormatYn == "Y" || sFormatYn == "y") {    
                sSysDate = L_SYSDATE.substr(0, 4) + "-" + L_SYSDATE.substr(4, 2) + "-" + L_SYSDATE.substr(6, 2);
           } else {
               sSysDate = L_SYSDATE;
           }
        	return sSysDate;
        }

        
        //function lfn_IsDate(val)  //날짜 적합성 구하기
        //{    
         //   if (lfn_IsNumber(val) != true)
         //   {
         //       return false;
         //   }
            
          // if (trim(val).length != 8) 
            //{
            //    return false;
           // }
            
           // if (getDay(val) == -1)
           // {
           //     return false;
           // }
            
           // return true;
        //}
        this.lfn_GetLastDate = function(val)   //마지막 날짜 구하기
        {
            var sDate;

            if (val.length == 6)
            {
                sDate = val + '01';
            } else if (val.length == 8) {
                sDate = val;
            }
        	var objDate=new Date();
        	objDate.setYear(sDate.substr(0,4));
        	objDate.setMonth(sDate.substr(4,2)-1,1);
        	objDate.addMonth(1);
        	objDate.addDate(-1);
        	var last_date  = objDate.getDate();
        // 	if(sMonth.toString().length == 1)
        // 	{
        // 		sMonth = "0" + sMonth;
        //     }
        //     if(sDate.toString().length == 1)
        //     {
        //        sDate = "0" + sDate;
        //     }
        //     last_date = last_date+sMonth+sDate;
        	 return last_date;
        }
        this.fn_MakeCalendar = function(sDate)
         {
        			sYYYY = sDate.substr(0,4);
        			sMM = sDate.substr(4,2);
        		    sDD = sDate.substr(6,2);
        			this.stYear.set_text(sYYYY);
        			this.stMonth.set_text(sMM);
        		  //  fn_SetMonthCalendar(sYYYYMM);
        		            
        		    // 1일~말일까지 표시
        			this.dsCalendar.clearData();
        		    var sLastDay = this.lfn_GetLastDate(sDate);
        		     var objDate=new Date();
        		        objDate.setYear(sYYYY);
        		        objDate.setMonth(sMM-1);
        		   //grdCalendar.Redraw = false;    
        		    var nRow = this.dsCalendar.addRow();    		    
        		    for(var i=1; i<= parseInt(sLastDay); i++) {         //1일 ~ 말일		        
        				objDate.setDate(i);
        		        var nDow = parseInt(objDate.getDay());                  //GetDay() : 0=일,1=월,2=화,..,6=토		        
        		        var rtdate = parseInt(objDate.getDate());		         
        		        if(rtdate.toString().length == 1){
        				rtdate = "0" + rtdate;
        				}
        		        var day = this.dsDaySchedule.findRow("medDate", sYYYY+sMM+rtdate);
        		        var am = this.dsDaySchedule.getColumn(day, "amRsvCnt");		        
        		        var am1 = this.dsDaySchedule.getColumn(day, "amTotCnt");
        		        var pm = this.dsDaySchedule.getColumn(day, "pmRsvCnt");
        		        var pm1 = this.dsDaySchedule.getColumn(day, "pmTotCnt");
        		        //alert(am+", "+am1+", "+pm+", "+pm1);		        
        		        this.dsCalendar.setColumn(nRow,"DOW"+(nDow+1),i);		        
        		        this.dsCalendar.setColumn(nRow, "AM"+(nDow+1), am+"/"+am1);
        		        this.dsCalendar.setColumn(nRow, "PM"+(nDow+1), pm+"/"+pm1);
        		        
        		        if (nDow == 6&&i!=sLastDay) nRow = this.dsCalendar.addRow();      //토요일이면 다음행 추가    
        		        
        		    }
        		            
        // 		    //지정일자 디폴트로 보이기
        // 		    if (ToNumber(sDD) > ToNumber(sLastDay)) {
        // 				sDD = sLastDay;  //말일을 초과지정한 경우는 말일로.
        // 		    }
        // 		    
        // 		    var nRow, nCol;
        // 		    var bFind = False;
        // 		    for (nRow=0; nRow<6; nRow++) {
        // 		        for (nCol=0; nCol<grdCalendar.GetCellCount("Body"); nCol++) {
        // 		            if (ToNumber(grdCalendar.GetCellText("Body",nRow,nCol)) == ToNumber(sDD)) {
        // 		                bFind = True;
        // 		                break;
        // 		            }    
        // 		        }
        // 		        if (bFind) break;
        // 		    }
        // 		        
        // 		    if (bFind) {
        // 		        dsCalendar.row = nRow;
        // 		        grdCalendar.SetCellPos(nCol);
        // 		    }
        // 		    
        // 		    grdCalendar.Redraw = true;    
        }
        		

        this.nextMonthBtn_onclick = function(obj,e)
        {
        	var sYYYY=this.stYear.text;
        	var sMM=this.stMonth.text;
        	if(sMM==12){
        		sMM=1;
        		sYYYY=parseInt(sYYYY)+1;
        		this.stYear.set_text(sYYYY);
        	}else{
        		sMM=parseInt(sMM)+1;
        	}
        	this.stMonth.set_text(sMM);
        	if(sMM.toString().length == 1)
        	{
        	sMM = "0" + sMM;
        	}
        	this.fn_MakeCalendar(sYYYY+""+sMM);
        	
        }

        this.preMonthBtn_onclick = function(obj,e)
        {
        	var sYYYY=this.stYear.text;
        	var sMM=this.stMonth.text;
        	if(sMM==1){
        		sMM=12;
        		sYYYY=parseInt(sYYYY)-1;
        		this.stYear.set_text(sYYYY);
        	}else{
        		sMM=parseInt(sMM)-1;
        	}
        	this.stMonth.set_text(sMM);
        	if(sMM.toString().length == 1)
        	{
        	sMM = "0" + sMM;
        	}
        	this.fn_MakeCalendar(sYYYY+""+sMM);

        }

        
        this.doctschdDiv_reserGrid_oncelldblclick = function(obj,e)
        {
        	var arrTrmt = new Array;
        	var i=0;
        	
        	arrTrmt[i++] = this.doctschdDiv.deptNmEd.value;  // 진료과 0
        	arrTrmt[i++] = this.doctschdDiv.empNmEd.value;   // 진료의 1 
        	arrTrmt[i++] = this.doctschdDiv.empNoEd.value;   // 진료의번호 2
        	arrTrmt[i++] = this.doctschdDiv.deptCdEd.value;  // 진료과코드번호 3
        	arrTrmt[i++] = this.dsTrmtSchd.getColumn(e.row, "examtm");  //진료시간 4
        	this.opener.setTrmtInfo(arrTrmt);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MB_DoctTrmtSchdMngntForm_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.dayGrid_oncellclick, this);
            this.doctschdDiv.reserGrid.addEventHandler("oncelldblclick", this.doctschdDiv_reserGrid_oncelldblclick, this);
            this.doctschdDiv.Div00.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div00.Div02.allCheckBox.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.Div00.Div02.allCheckBox00.addEventHandler("onchanged", this.allCheckBox_onchanged, this);
            this.doctschdDiv.searchEmpBtn.addEventHandler("onclick", this.searchEmpBtn_onclick, this);
            this.doctschdDiv.stDiv00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.doctschdDiv.stDiv14.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.grdCalendar.addEventHandler("oncellclick", this.grdCalendar_oncellclick, this);
            this.preMonthBtn.addEventHandler("onclick", this.preMonthBtn_onclick, this);
            this.nextMonthBtn.addEventHandler("onclick", this.nextMonthBtn_onclick, this);

        };

        this.loadIncludeScript("HF_DoctTrmtSchdMngntForm.xfdl");

       
    };
}
)();
