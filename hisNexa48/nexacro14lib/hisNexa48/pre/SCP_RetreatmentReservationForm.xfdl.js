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
                this.set_name("SCP_RetreatmentReservationForm");
                this.set_classname("외래재진예약");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1200,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"DOW1\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT1\" type=\"STRING\" size=\"256\"/><Column id=\"AM1\" type=\"STRING\" size=\"256\"/><Column id=\"PM1\" type=\"STRING\" size=\"256\"/><Column id=\"DOW2\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT2\" type=\"STRING\" size=\"256\"/><Column id=\"AM2\" type=\"STRING\" size=\"256\"/><Column id=\"PM2\" type=\"STRING\" size=\"256\"/><Column id=\"DOW3\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT3\" type=\"STRING\" size=\"256\"/><Column id=\"AM3\" type=\"STRING\" size=\"256\"/><Column id=\"PM3\" type=\"STRING\" size=\"256\"/><Column id=\"DOW4\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT4\" type=\"STRING\" size=\"256\"/><Column id=\"AM4\" type=\"STRING\" size=\"256\"/><Column id=\"PM4\" type=\"STRING\" size=\"256\"/><Column id=\"DOW5\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT5\" type=\"STRING\" size=\"256\"/><Column id=\"AM5\" type=\"STRING\" size=\"256\"/><Column id=\"PM5\" type=\"STRING\" size=\"256\"/><Column id=\"DOW6\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT6\" type=\"STRING\" size=\"256\"/><Column id=\"AM6\" type=\"STRING\" size=\"256\"/><Column id=\"PM6\" type=\"STRING\" size=\"256\"/><Column id=\"DOW7\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT7\" type=\"STRING\" size=\"256\"/><Column id=\"AM7\" type=\"STRING\" size=\"256\"/><Column id=\"PM7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findDayScheduleList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findDayScheduleList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsDaySchedule=dsDaySchedule</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">findMedDrList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"outData\">dsMedDr=gdsEmp</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">findTimeScheduleList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findTimeScheduleList.do</Col><Col id=\"outData\">dsTimeSchedule=dsTimeSchedule dsRsvPat=dsRsvPat</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"URL\">his::msv/mcm/patientservice/findRsvByPatList.do</Col><Col id=\"serviceID\">findRsvByPatList</Col><Col id=\"outData\">dsPatRsvInfo=dsRsvPat</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTimeSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"medDate\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"rsvCnt\" type=\"STRING\" size=\"256\"/><Column id=\"totCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amPmFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedDr", this);
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
            obj._setContents("<ColumnInfo><Column id=\"medDate\" type=\"STRING\" size=\"256\"/><Column id=\"amRsvCnt\" type=\"STRING\" size=\"256\"/><Column id=\"amTotCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmRsvCnt\" type=\"STRING\" size=\"256\"/><Column id=\"pmTotCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRsvPat", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"medDate\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatRsvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"medDr\" type=\"STRING\" size=\"256\"/><Column id=\"medDate\" type=\"STRING\" size=\"256\"/><Column id=\"examTm\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"patType\" type=\"STRING\" size=\"256\"/><Column id=\"trmtCostCalcuYb\" type=\"STRING\" size=\"256\"/><Column id=\"ntTtYb\" type=\"STRING\" size=\"256\"/><Column id=\"nwDiv\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedDrGridComboData", this);
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


            
            // UI Components Initialize
            obj = new Grid("calendarGrid", "absolute", "2.5%", "272", null, "448", "55.33%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCalendar");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"48\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"30\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"20\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"일\"/><Cell col=\"2\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"월\"/><Cell col=\"4\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"화\"/><Cell col=\"6\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"수\"/><Cell col=\"8\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"목\"/><Cell col=\"10\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"금\"/><Cell col=\"12\" colspan=\"2\" style=\"background:#cfd8dcff;font:11 돋움;\" text=\"토\"/></Band><Band id=\"body\" style=\"cellbackground2:#ffffffff;\"><Cell rowspan=\"3\" colspan=\"2\"><Cell style=\"color:red;color2:red;font:12 arial;\" text=\"bind:DOW1\"/><Cell col=\"1\" text=\"bind:TEXT1\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM1\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM1\"/></Cell><Cell col=\"2\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW2\"/><Cell col=\"1\" text=\"bind:TEXT2\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM2\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM2\"/></Cell><Cell col=\"4\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW3\"/><Cell col=\"1\" text=\"bind:TEXT3\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM3\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM3\"/></Cell><Cell col=\"6\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW4\"/><Cell col=\"1\" text=\"bind:TEXT4\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM4\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM4\"/></Cell><Cell col=\"8\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW5\"/><Cell col=\"1\" text=\"bind:TEXT5\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM5\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM5\"/></Cell><Cell col=\"10\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:#90a4aeff;color2:#90a4aeff;font:12 arial;\" text=\"bind:DOW6\"/><Cell col=\"1\" text=\"bind:TEXT6\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM6\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM6\"/></Cell><Cell col=\"12\" rowspan=\"3\" colspan=\"2\"><Cell style=\"color:blue;color2:blue;font:12 arial;\" text=\"bind:DOW7\"/><Cell col=\"1\" text=\"bind:TEXT7\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"bind:AM7\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" text=\"bind:PM7\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "1.56%", "16", null, "60", "62.5%", null, this);
            obj.set_taborder("15");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14.4%", "5", null, "46", "15.22%", null, this.Div06);
            obj.set_taborder("0");
            obj.set_text("외래재진예약");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 돋움");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "21.75%", "226", null, "28", "76.25%", null, this);
            obj.set_taborder("16");
            obj.set_text("년");
            obj.style.set_font("11 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "28.08%", "226", null, "28", "70%", null, this);
            obj.set_taborder("17");
            obj.set_text("월");
            obj.style.set_font("11 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("yearStc", "absolute", "15.83%", "228", null, "27", "79.25%", null, this);
            obj.set_taborder("18");
            obj.style.set_align("middle");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Static("monthStc", "absolute", "23.25%", "228", null, "27", "72.75%", null, this);
            obj.set_taborder("19");
            obj.style.set_align("middle");
            obj.style.set_font("11 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "48%", "195", null, "91", "2.17%", null, this);
            obj.set_taborder("27");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPatRsvInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"91\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"61\"/><Column size=\"116\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"예약일\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"예약시간\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"진료과\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"진료의\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"수납\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"특기사항\"/></Band><Band id=\"body\"><Cell text=\"bind:medDate\"/><Cell col=\"1\" edittype=\"mask\" text=\"bind:examTm\" mask=\"##:##\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:medDr\" combodataset=\"dsMedDrGridComboData\" combocodecol=\"empNo\" combodatacol=\"deptNm\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:medDr\" combodataset=\"dsMedDrGridComboData\" combocodecol=\"empNo\" combodatacol=\"empNm\" combodisplay=\"edit\"/><Cell col=\"4\" text=\"bind:trmtCostCalcuYb\"/><Cell col=\"5\" text=\"bind:note\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("DayScheduleGrid", "absolute", "48.17%", "349", null, "371", "36.17%", null, this);
            obj.set_taborder("28");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTimeSchedule");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"34\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"39\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 arial;\" text=\"시간\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 arial;\" text=\"예약\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:9 arial;\" text=\"가능\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:9 arial;\" text=\"A/P\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:9 arial;\" text=\"타과\"/></Band><Band id=\"body\"><Cell edittype=\"mask\" text=\"bind:examTm\" mask=\"##:##\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:rsvCnt\"/><Cell col=\"2\" expr=\"expr:parseInt(totCnt)-parseInt(rsvCnt)\"/><Cell col=\"3\" text=\"bind:amPmFlag\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("rsvPatGrid", "absolute", "64.83%", "350", null, "176", "2.17%", null, this);
            obj.set_taborder("29");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRsvPat");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"61\"/><Column size=\"87\"/><Column size=\"88\"/><Column size=\"87\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"시간\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"성명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"등록번호\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"Sex/Age\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"환자유형\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"수납\"/></Band><Band id=\"body\"><Cell edittype=\"mask\" text=\"bind:examTm\" mask=\"##:##\"/><Cell col=\"1\" text=\"bind:patNm\"/><Cell col=\"2\" text=\"bind:patNo\"/><Cell col=\"3\" expr=\"expr:gender+&quot;/&quot;+age\"/><Cell col=\"4\" text=\"bind:patType\"/><Cell col=\"5\" text=\"bind:trmtCostCalcuYb\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv02", "absolute", "64.83%", "585", "74", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("특기사항");
            obj.set_wordwrap("char");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd02", "absolute", "71.33%", "655", "129", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.style.set_background("#fbf8f1ff");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "71.58%", "582", null, "63", "2.17%", null, this);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv03", "absolute", "64.83%", "654", "74", "30", null, null, this);
            obj.set_taborder("33");
            obj.set_text("핸드폰");
            obj.set_wordwrap("char");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv04", "absolute", "64.83%", "541", "74", "30", null, null, this);
            obj.set_taborder("34");
            obj.set_text("초진/재진");
            obj.set_wordwrap("char");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd03", "absolute", "71.33%", "542", "129", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.style.set_background("#fbf8f1ff");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("stDiv05", "absolute", "82.5%", "541", "74", "30", null, null, this);
            obj.set_taborder("37");
            obj.set_text("내원구분");
            obj.set_wordwrap("char");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "89%", "540", null, "31", "2.17%", null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">원무접수</Col><Col id=\"datacolumn\">원무접수</Col></Row><Row><Col id=\"codecolumn\">진료과접수</Col><Col id=\"datacolumn\">진료과접수</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Button("DelBtn30", "absolute", "1064", "723", "110", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reserveXBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "964", "723", "90", "32", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn23", "absolute", "867", "723", "90", "32", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reserveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "2.25%", "146", null, "30", "55.25%", null, this);
            obj.set_taborder("42");
            obj.set_text("  월간 예약현황");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "48.33%", "146", null, "30", "2.17%", null, this);
            obj.set_taborder("43");
            obj.set_text("  개인 예약현황");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "48%", "307", null, "30", "36.08%", null, this);
            obj.set_taborder("44");
            obj.set_text("  일별 예약현황");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "64.83%", "307", null, "30", "2.17%", null, this);
            obj.set_taborder("46");
            obj.set_text("  시간대별 예약환자");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "32", "88", null, "43", "26", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("div_WF_SearchBg");
            obj.style.set_background("#90a4aeff");
            this.addChild(obj.name, obj);
            obj = new Edit("medDeptEd", "absolute", "104", "10", "132", "21", null, null, this.div_Search);
            obj.set_taborder("22");
            obj.set_cssclass("edt_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("searchMedDrBtn", "absolute", "235", "10", "21", "21", null, null, this.div_Search);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("MedDrCombo", "absolute", "371", "10", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@dsMedDr");
            obj.set_codecolumn("empNo");
            obj.set_datacolumn("empNm");
            obj = new Static("Static01", "absolute", "19", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("26");
            obj.set_text("진료과");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_font("9 돋움");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "286", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("27");
            obj.set_text("진료의");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_font("9 돋움");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "553", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("28");
            obj.set_text("환자등록번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            obj.style.set_font("9 돋움");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("searchTrmtSchBtn", "absolute", null, "8", "60", "25", "11", null, this.div_Search);
            obj.set_taborder("29");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#37474fff");
            this.div_Search.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "648", "10", "132", "21", null, null, this.div_Search);
            obj.set_taborder("30");
            obj.set_cssclass("edt_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("searchPatBtn", "absolute", "779", "10", "21", "21", null, null, this.div_Search);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("nextMonthBtn", "absolute", "374", "222", "29", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("preMonthBtn", "absolute", "162", "222", "29", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1152, 43, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_cssclass("div_WF_SearchBg");
            		p.style.set_background("#90a4aeff");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1200, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("외래재진예약");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","TextArea00","value","dsRsvPat","note");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","deptNmEd02","value","dsRsvPat","tel");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo00","value","dsRsvPat","nwDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","deptNmEd03","value","dsRsvPat","ntTtYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_RetreatmentReservationForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_RetreatmentReservationForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_RetreatmentReservationForm.xfdl", function() {
         
        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        

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

        this.SCP_RetreatmentReservationForm_onload = function(obj,e)
        {	var sDate=this.lfn_GetSysDate();
        	this.fn_MakeCalendar(sDate);
        	this.gfnService("findMedDrList");
        	
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
        			this.yearStc.set_text(sYYYY);
        			this.monthStc.set_text(sMM);
        		  //  fn_SetMonthCalendar(sYYYYMM);
        		            
        		    // 1일~말일까지 표시
        			this.dsCalendar.clearData();
        		    var sLastDay = this.lfn_GetLastDate(sDate);
        		     var objDate=new Date();
        		        objDate.setYear(sYYYY);
        		        objDate.setMonth(sMM-1);
        		   //grdCalendar.Redraw = false;    
        		    var nRow = this.dsCalendar.addRow();    
        		    var amRsvCnt;//오전예약인원
        			var amTotCnt;//오전총원
        			var pmRsvCnt;//오후예약인원
        			var pmTotCnt;//오후총원
        		    for(var i=1; i<= parseInt(sLastDay); i++) {         //1일 ~ 말일
        				objDate.setDate(i);
        				var dd=i;
        				  if(dd.toString().length == 1)
        					{
        					dd = "0" + dd;
        					}
        				
        		        var nDow = parseInt(objDate.getDay());                  //GetDay() : 0=일,1=월,2=화,..,6=토
        		        
        		        this.dsCalendar.setColumn(nRow,"DOW"+(nDow+1),i) ;
        				var row=this.dsDaySchedule.findRow("medDate",sYYYY+sMM+dd);
        				
        				if(row!=-1){
        					amRsvCnt=this.dsDaySchedule.getColumn(row,"amRsvCnt");
        					amTotCnt=this.dsDaySchedule.getColumn(row,"amTotCnt");
        					pmRsvCnt=this.dsDaySchedule.getColumn(row,"pmRsvCnt");
        					pmTotCnt=this.dsDaySchedule.getColumn(row,"pmTotCnt");
        					if(amTotCnt){
        					this.dsCalendar.setColumn(nRow,"AM"+(nDow+1),amRsvCnt+"/"+amTotCnt);}
        					if(pmTotCnt){
        					this.dsCalendar.setColumn(nRow,"PM"+(nDow+1),pmRsvCnt+"/"+pmTotCnt);}
        				}
        		        if (nDow == 6&&i!=sLastDay) nRow = this.dsCalendar.addRow();      //토요일이면 다음행 추가               
        		    }
        		    this.calendarGrid_setCellPosToday();

        }
        		
        this.calendarGrid_setCellPosToday=function()
        {
        	//지정일자 디폴트로 보이기
        	var objDate=new Date();
        	var sDD=objDate.getDate();
        	var sLastDay=this.lfn_GetLastDate(this.lfn_GetSysDate());
        	            
        	    
            if ( sDD > parseInt(sLastDay) ) {
        		sDD = sLastDay;  //말일을 초과지정한 경우는 말일로.
        	}
           
              var nRow, nCol;
              var bFind = false;
              for (nRow=0; nRow<6; nRow++) {
         	         for (nCol=0; nCol<this.calendarGrid.getCellCount("Body"); nCol++) {
        				//alert(this.calendarGrid.getSubCellText(nRow,nCol,0));
        	            if (parseInt(this.calendarGrid.getSubCellText(nRow,nCol,0)) == parseInt(sDD)) {
         		                bFind = true;
         		                break;
         		            }    
        	        }
        		        if (bFind) break;
        	       }
            
        			if (bFind) {
        				//alert(nRow);
        		        this.calendarGrid.selectRow(nRow);
        				this.calendarGrid.setCellPos(nCol);
        	    }
        	    if(this.div_Search.MedDrCombo.value){
        			this.getTimeScheduleList(nRow,nCol);
        	    }
        	
        }

        this.nextMonthBtn_onclick = function(obj,e)
        {
        	var sYYYY=this.yearStc.text;
        	var sMM=this.monthStc.text;
        	if(sMM==12){
        		sMM=1;
        		sYYYY=parseInt(sYYYY)+1;
        		this.yearStc.set_text(sYYYY);
        	}else{
        		sMM=parseInt(sMM)+1;
        	}
        	this.monthStc.set_text(sMM);
        	if(sMM.toString().length == 1)
        	{
        	sMM = "0" + sMM;
        	}
        	this.fn_MakeCalendar(sYYYY+""+sMM);
        	
        }

        this.preMonthBtn_onclick = function(obj,e)
        {
        	var sYYYY=this.yearStc.text;
        	var sMM=this.monthStc.text;
        	if(sMM==1){
        		sMM=12;
        		sYYYY=parseInt(sYYYY)-1;
        		this.yearStc.set_text(sYYYY);
        	}else{
        		sMM=parseInt(sMM)-1;
        	}
        	this.monthStc.set_text(sMM);
        	if(sMM.toString().length == 1)
        	{
        	sMM = "0" + sMM;
        	}
        	this.fn_MakeCalendar(sYYYY+""+sMM);

        }

        this.callbackFunc = function(svcID,ErrorCode,ErrorMsg){
           if (ErrorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n" + ErrorMsg);
           } else {
              // 트랜잭션 완료
               trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(svcID=="findDayScheduleList"){
        		var sDate=this.lfn_GetSysDate();
        		this.fn_MakeCalendar(sDate);
        		this.gfnService("findRsvByPatList",false);
        		
              }else if(svcID=="findMedDrList"){
        		this.dsMedDrGridComboData.copyData(this.dsMedDr);
              }else if(svcID=="findTimeScheduleList"){
              }else if(svcID=="findRsvByPatList"){
              }
           }
        }
        this.calendarGrid_oncellclick = function(obj,e)
        {	
        	var row=e.row;
        	var cell=e.cell;
        	this.getTimeScheduleList(row,cell);
        }
        this.getTimeScheduleList=function(row,cell)
        {
        var sYear=this.yearStc.text;
        	var sMonth=this.monthStc.text;
        	var sDate=(this.calendarGrid.getSubCellText(row,cell,0)).padLeft(2,"0"); 
        	var date=sYear+sMonth+sDate;
        	var empNo=this.div_Search.MedDrCombo.value;
        	var argument="empNo="+empNo+" date="+date;
        	var nRow=this.dsService.findRow("serviceID","findTimeScheduleList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("findTimeScheduleList",false);	

        }
        this.div_Search_searchMedDrBtn_onclick = function(obj,e)
        {
        	application.open("CM_DoctPopupForm","com::CM_DoctPopupForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false", 0, 0, 800, 443, this);
        }

        this.div_Search_searchPatBtn_onclick = function(obj,e)
        {
        	application.open("WS_PatPopupForm","hdm::WS_PatPopupForm.xfdl",this.parent,{},"showtitlebar=true showstatusbar=false", 0, 0, 800, 443, this);
        }

        this.setDoct = function(arr)
        {
        	this.div_Search.medDeptEd.set_value(arr[2]);
        	this.dsMedDr.filter("deptNm=='"+arr[2]+"'");
        	this.div_Search.MedDrCombo.set_value(arr[0]);
        	
        }
        this.div_Search_searchTrmtSchBtn_onclick = function(obj,e)
        {	
        	var empNo=this.div_Search.MedDrCombo.value;
        	var patNo=this.div_Search.patNoEd.value;
        	var argument="empNo="+empNo+" patNo="+patNo;
        	var nRow=this.dsService.findRow("serviceID","findDayScheduleList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	nRow=this.dsService.findRow("serviceID","findRsvByPatList");
        	this.dsService.setColumn(nRow,"argument",argument);
        	this.gfnService("findDayScheduleList",false);
        	
        	
        }

        this.dsTimeSchedule_onrowposchanged = function(obj,e)
        {
        	var examTm=obj.getColumn(obj.rowposition,"examTm");
        	this.dsRsvPat.filter("examTm=='"+examTm+"'");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTimeSchedule.addEventHandler("onrowposchanged", this.dsTimeSchedule_onrowposchanged, this);
            this.addEventHandler("onload", this.SCP_RetreatmentReservationForm_onload, this);
            this.calendarGrid.addEventHandler("oncellclick", this.calendarGrid_oncellclick, this);
            this.stDiv02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stDiv03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stDiv04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.stDiv05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.DelBtn30.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.DelBtn23.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.div_Search.searchMedDrBtn.addEventHandler("onclick", this.div_Search_searchMedDrBtn_onclick, this);
            this.div_Search.searchTrmtSchBtn.addEventHandler("onclick", this.div_Search_searchTrmtSchBtn_onclick, this);
            this.div_Search.searchPatBtn.addEventHandler("onclick", this.div_Search_searchPatBtn_onclick, this);
            this.nextMonthBtn.addEventHandler("onclick", this.nextMonthBtn_onclick, this);
            this.preMonthBtn.addEventHandler("onclick", this.preMonthBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_RetreatmentReservationForm.xfdl");

       
    };
}
)();
