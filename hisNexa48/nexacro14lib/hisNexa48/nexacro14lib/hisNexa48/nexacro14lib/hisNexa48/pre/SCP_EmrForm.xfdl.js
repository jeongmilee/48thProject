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
                this.set_name("SC_EmrForm");
                this.set_classname("SC_EmrForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findEmrList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findEmrList.do</Col><Col id=\"callbackFunc\">findEmrCallback</Col><Col id=\"outData\">dsEmr=dsEmr</Col><Col id=\"inData\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmr", this);
            obj._setContents("<ColumnInfo><Column id=\"adrNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"patAge\" type=\"STRING\" size=\"256\"/><Column id=\"patGender\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"writerNo\" type=\"STRING\" size=\"256\"/><Column id=\"writerNm\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"writerJob\" type=\"STRING\" size=\"256\"/><Column id=\"drugNo\" type=\"STRING\" size=\"256\"/><Column id=\"drugNm\" type=\"STRING\" size=\"256\"/><Column id=\"manifacture\" type=\"STRING\" size=\"256\"/><Column id=\"usage\" type=\"STRING\" size=\"256\"/><Column id=\"capct\" type=\"STRING\" size=\"256\"/><Column id=\"injcStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcPurp\" type=\"STRING\" size=\"256\"/><Column id=\"rvlStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlRecogDate\" type=\"STRING\" size=\"256\"/><Column id=\"afterInjcRvl\" type=\"STRING\" size=\"256\"/><Column id=\"symptom\" type=\"STRING\" size=\"256\"/><Column id=\"prog\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntVal\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"reinjcReact\" type=\"STRING\" size=\"256\"/><Column id=\"opinion\" type=\"STRING\" size=\"256\"/><Column id=\"reportYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("emrTab", "absolute", "2.64%", "152", null, "604", "3.52%", null, this);
            obj.set_tooltiptype("hover");
            obj.set_taborder("33");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#b0bec5ff");
            obj.style.set_buttonborder("1 solid #455a64ff");
            obj.style.set_showextrabutton("false");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #607d8bff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.style.setStyleValue("buttonbackground", "selected", "#78909cff");
            obj.set_focusacceptable("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("medTp", this.emrTab);
            obj.set_text("진단기록");
            this.emrTab.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.09%", "6", null, "558", "0%", null, this.emrTab.medTp);
            obj.set_taborder("60");
            obj.style.set_background("#eceff1ff");
            this.emrTab.medTp.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.51%", "37", "374", "142", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("9");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"70\"/><Column size=\"61\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"항목\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"측정치\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"단위\"/></Band><Band id=\"body\"><Cell style=\"align:center;font:bold 9 arial;\" text=\"혈압(수축기)\"/><Cell col=\"1\" style=\"align:center;\"/><Cell col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"1\" style=\"align:center;font:bold 9 arial;\" text=\"혈압(이완기)\"/><Cell row=\"1\" col=\"1\" style=\"align:center;\"/><Cell row=\"1\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"mmHg\"/><Cell row=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"맥박\"/><Cell row=\"2\" col=\"1\" style=\"align:center;\"/><Cell row=\"2\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"3\" style=\"align:center;font:bold 9 arial;\" text=\"호흡수\"/><Cell row=\"3\" col=\"1\" style=\"align:center;\"/><Cell row=\"3\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"/min\"/><Cell row=\"4\" style=\"align:center;font:bold 9 arial;\" text=\"체온\"/><Cell row=\"4\" col=\"1\" style=\"align:center;\"/><Cell row=\"4\" col=\"2\" style=\"align:center;font:bold 9 arial;\" text=\"℃\"/></Band></Format></Formats>");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc01", "absolute", "33.1%", "4", "380", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("10");
            obj.set_text("   S/O/P MEMO");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc02", "absolute", "66.12%", "4", "386", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("11");
            obj.set_text("   PACS");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "33.1%", "38", "380", "143", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("12");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0.51%", "224", "1154", "328", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("13");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"250\"/><Column size=\"77\"/><Column size=\"52\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"상병코드\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"상병명\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"수술여부\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"진료일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;font:bold 9 arial;\"/><Cell col=\"1\" style=\"align:center;\"/><Cell col=\"2\" style=\"align:center;font:bold 9 arial;\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc03", "absolute", "0.51%", "192", "1154", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("14");
            obj.set_text("   상병내역");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc00", "absolute", "0.51%", "4", "374", "34", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("15");
            obj.set_text("   기초검사");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "66.12%", "38", "386", "143", null, null, this.emrTab.medTp.Div00);
            obj.set_taborder("16");
            this.emrTab.medTp.Div00.addChild(obj.name, obj);
            obj = new Tabpage("prscTp", this.emrTab);
            obj.set_text("처방기록");
            this.emrTab.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.09%", "2", null, "556", "0.52%", null, this.emrTab.prscTp);
            obj.set_taborder("4");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.addChild(obj.name, obj);
            obj = new Static("regAttStc04", "absolute", "0.35%", "9", "1153", "33", null, null, this.emrTab.prscTp.Div00);
            obj.set_taborder("0");
            obj.set_text("   처방내역");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid03", "absolute", "0.35%", "41", "1153", "337", null, null, this.emrTab.prscTp.Div00);
            obj.set_taborder("1");
            obj.set_binddataset("dsBaseExam");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"99\"/><Column size=\"91\"/><Column size=\"250\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"처방일자\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"진료과\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"처방항목\"/><Cell col=\"3\" style=\"align:center;background:#cfd8dcff;\" text=\"처방명\"/><Cell col=\"4\" style=\"align:center;background:#cfd8dcff;\" text=\"진료의사명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" style=\"align:center;font:bold 9 arial;\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"align:center;font:bold 9 arial;\"/><Cell col=\"4\" style=\"align:center;\"/></Band></Format></Formats>");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Static("regAttStc", "absolute", "0.43%", "381", "1152", "33", null, null, this.emrTab.prscTp.Div00);
            obj.set_taborder("2");
            obj.set_text("   처방상세");
            obj.style.set_background("#90a4aeff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Tab("Tab00", "absolute", "0.43%", "414", null, "139", "0%", null, this.emrTab.prscTp.Div00);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#cfd8dcff");
            obj.style.set_showextrabutton("false");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #607d8bff");
            obj.style.setStyleValue("buttonbackground", "selected", "#b0bec5ff");
            this.emrTab.prscTp.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("투약");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.17%", "2", null, "99", "0.35%", null, this.emrTab.prscTp.Div00.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.05%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("0");
            obj.set_text("용량");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "10.05%", "57", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("1");
            obj.set_text("복용법");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.73%", "57", "224", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.73%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "22.9%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("4");
            obj.set_text("단위");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "28.41%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "35.66%", "57", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("6");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "35.66%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("7");
            obj.set_text("횟수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "41.26%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd03", "absolute", "41.43%", "57", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "48.78%", "57", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("10");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "48.78%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("11");
            obj.set_text("일수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "54.28%", "57", "380", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "54.28%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "61.71%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("14");
            obj.set_text("PRN");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd07", "absolute", "67.31%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "74.56%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("16");
            obj.set_text("응급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd05", "absolute", "80.24%", "15", "83", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("검사");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.17%", "4", null, "97", "0.26%", null, this.emrTab.prscTp.Div00.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.04%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("0");
            obj.set_text("응급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.72%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "22.88%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("2");
            obj.set_text("PRN");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "28.47%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "35.63%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("4");
            obj.set_text("야간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "41.31%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "48.73%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("6");
            obj.set_text("검사일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "54.32%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "61.75%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("8");
            obj.set_text("횟수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd07", "absolute", "67.34%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "74.59%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("10");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd05", "absolute", "80.26%", "15", "83", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "10.04%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("12");
            obj.set_text("선택진료");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.72%", "55", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc09", "absolute", "22.88%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("14");
            obj.set_text("검체보관");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd09", "absolute", "28.47%", "55", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "35.63%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("16");
            obj.set_text("항생제");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd03", "absolute", "41.48%", "55", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "48.73%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("18");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "54.32%", "55", "380", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("처치");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.09%", "2", null, "98", "0.26%", null, this.emrTab.prscTp.Div00.Tab00.tabpage3);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.03%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("0");
            obj.set_text("응급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.79%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "22.86%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("2");
            obj.set_text("재수술");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "28.45%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "35.69%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("4");
            obj.set_text("야간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "41.27%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "48.78%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("6");
            obj.set_text("횟수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "54.28%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "61.69%", "17", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("8");
            obj.set_text("시작시간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd07", "absolute", "67.36%", "16", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "10.03%", "57", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("10");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.79%", "57", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "22.86%", "56", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("12");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "28.53%", "55", "530", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("재료");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.26%", "4", null, "97", "0.35%", null, this.emrTab.prscTp.Div00.Tab00.tabpage4);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "48.91%", "53", "294", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "42.87%", "53", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("1");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd03", "absolute", "28.61%", "53", "159", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "23.1%", "53", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("3");
            obj.set_text("시행장소");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.92%", "53", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "10.06%", "53", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("5");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.03%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("6");
            obj.set_text("응급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.92%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "23.1%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("8");
            obj.set_text("재수술");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "28.61%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "35.78%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("10");
            obj.set_text("야간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "41.47%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "48.91%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("12");
            obj.set_text("수량");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "54.51%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "61.85%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("14");
            obj.set_text("시작시간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd07", "absolute", "67.45%", "15", "82", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("재활");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.17%", "3", null, "97", "0.35%", null, this.emrTab.prscTp.Div00.Tab00.tabpage5);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "15.82%", "53", "587", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "10.05%", "53", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("1");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.03%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("2");
            obj.set_text("재활부위");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.82%", "15", "143", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "28.5%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("4");
            obj.set_text("선택진료");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "34.09%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "41.43%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("6");
            obj.set_text("재활일수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "47.03%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "54.11%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("8");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "59.7%", "15", "86", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.emrTab.prscTp.Div00.Tab00);
            obj.set_text("수혈");
            this.emrTab.prscTp.Div00.Tab00.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0.17%", "2", null, "101", "0.26%", null, this.emrTab.prscTp.Div00.Tab00.tabpage6);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "10.03%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("0");
            obj.set_text("응급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd02", "absolute", "15.72%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "22.88%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("2");
            obj.set_text("수량");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd00", "absolute", "28.47%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "35.55%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("4");
            obj.set_text("헌혈자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd04", "absolute", "41.31%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "48.73%", "15", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("6");
            obj.set_text("횟수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd06", "absolute", "54.32%", "15", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc07", "absolute", "61.75%", "17", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("8");
            obj.set_text("시작시간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd07", "absolute", "67.25%", "16", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "10.04%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("10");
            obj.set_text("보험");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd01", "absolute", "15.72%", "55", "78", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "22.88%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("12");
            obj.set_text("시행장소");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd03", "absolute", "28.47%", "55", "144", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "41.31%", "55", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("14");
            obj.set_text("사용목적");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd05", "absolute", "46.81%", "55", "165", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Static("subCodeStc08", "absolute", "61.75%", "54", "60", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("16");
            obj.set_text("특기사항");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);
            obj = new Edit("searchDeptEd08", "absolute", "67.34%", "55", "216", "30", null, null, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.68%", "8", null, "41", "85.92%", null, this);
            obj.set_taborder("41");
            obj.set_text("EMR");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("patInfoDiv", "absolute", "2.56%", "52", "1175", "92", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.patInfoDiv);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.43%", "41", "60", "30", null, null, this.patInfoDiv);
            obj.set_taborder("26");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "5.88%", "41", "78", "30", null, null, this.patInfoDiv);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "15.77%", "41", "60", "30", null, null, this.patInfoDiv);
            obj.set_taborder("31");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "21.23%", "41", "78", "30", null, null, this.patInfoDiv);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Radio("inoutRadio", "absolute", "79.88%", "44", null, "25", "6.31%", null, this.patInfoDiv);
            this.patInfoDiv.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.patInfoDiv.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">입원</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">외래</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("38");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.set_index("0");
            obj = new Static("subCodeStc07", "absolute", "28.39%", "41", null, "30", "64.02%", null, this.patInfoDiv);
            obj.set_taborder("40");
            obj.set_text("진료일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Calendar("trmtDateCal", "absolute", "36.23%", "41", null, "31", "53.28%", null, this.patInfoDiv);
            this.patInfoDiv.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_bordertype("normal 0 0");
            obj = new Static("subCodeStc06", "absolute", "47.23%", "41", null, "30", "45.35%", null, this.patInfoDiv);
            obj.set_taborder("42");
            obj.set_text("진료의");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctNmEd", "absolute", "54.99%", "41", "74", "30", null, null, this.patInfoDiv);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "70.76%", "41", null, "30", "26.68%", null, this.patInfoDiv);
            obj.set_taborder("45");
            obj.set_text("과");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctDeptEd", "absolute", "73.66%", "41", "67", "30", null, null, this.patInfoDiv);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Static("regAttStc00", "absolute", "0%", "-1", null, "34", "0%", null, this.patInfoDiv);
            obj.set_taborder("47");
            obj.set_text("   환자정보");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchAttPatBtn00", "absolute", "150", "41", "30", "30", null, null, this.patInfoDiv);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchEmrBtn", "absolute", "1098", "45", "58", "23", null, null, this.patInfoDiv);
            obj.set_taborder("49");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Button("searchDoctorBtn", "absolute", "722", "41", "30", "30", null, null, this.patInfoDiv);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.patInfoDiv.addChild(obj.name, obj);
            obj = new Edit("doctNoEd", "absolute", "64.28%", "41", "69", "30", null, null, this.patInfoDiv);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.patInfoDiv.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 558, this.emrTab.medTp.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("60");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.medTp.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 430, 208, this.emrTab.medTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("진단기록");

            	}
            );
            this.emrTab.medTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("투약");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 97, this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("검사");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 98, this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage3,
            	//-- Layout function
            	function(p) {
            		p.set_text("처치");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 97, this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage4,
            	//-- Layout function
            	function(p) {
            		p.set_text("재료");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 97, this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage5,
            	//-- Layout function
            	function(p) {
            		p.set_text("재활");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage5.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 101, this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp.Div00.Tab00.tabpage6,
            	//-- Layout function
            	function(p) {
            		p.set_text("수혈");

            	}
            );
            this.emrTab.prscTp.Div00.Tab00.tabpage6.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 556, this.emrTab.prscTp.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.emrTab.prscTp.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.emrTab.prscTp,
            	//-- Layout function
            	function(p) {
            		p.set_text("처방기록");

            	}
            );
            this.emrTab.prscTp.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1175, 92, this.patInfoDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("42");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.patInfoDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SC_EmrForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("SCP_EmrForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_EmrForm.xfdl", function() {
        /********************************************************************************                                                                            
        @Path			진료처방 공통(Medication Base)              				   				
        @Description	EMR 관리 화면				
        @Author	  		왕민혁				    			                        								                                            
        @Create         2016. 12. 07.                             		                    				                                            
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/
        //include "scripts::commonScripts.xjs";  
        //include "scripts::hrsScripts.xjs";
        //include "scripts::wonScripts.xjs";

        
        /*-------------------------------------------------------------------------------------------------+
        >>  										Button Click, Popup 
        +-------------------------------------------------------------------------------------------------*/
        // 환자조회
        this.attPatDiv_searchAttPatBtn00_onclick = function(obj,e)
        {
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        	this.patInfoDiv.patNoEd.set_value(arrRtn[0]);    
        	this.patInfoDiv.patNmEd.set_value(arrRtn[1]);               
        	}
        }

        // 진료의 조회
        this.patInfoDiv_searchDoctorBtn_onclick = function(obj,e)
        {
        	return application.open(
        			"CM_DoctPopupForm",
        			"com::CM_DoctPopupForm.xfdl",
        			this.parent,
        			{},
        			"showtitlebar=true showstatusbar=false",
        			110, 110,
        			this
        	);
        }

        this.setDoct = function(arrRtn){ 
        	this.patInfoDiv.doctNoEd.set_value(arrRtn[0]);
        	this.patInfoDiv.doctNmEd.set_value(arrRtn[1]);    
        	this.patInfoDiv.doctDeptEd.set_value(arrRtn[2]);               
        }

        // EMR 조회
        this.patInfoDiv_searchEmrBtn_onclick = function(obj,e)
        {
        	this.dsEmr.clearData();
        	var patNo=this.patInfoDiv.patNoEd.value;
        	var trmtDate=this.patInfoDiv.trmtDateCal.value;
        	var doctNo=this.patInfoDiv.doctNoEd.value;
        	var doctDept=this.patInfoDiv.doctDeptEd.value;
        	var inOut=this.patInfoDiv.inoutRadio.text;
        	var argument = 'patNo='+patNo+' trmtDate='+trmtDate+' doctNo='+doctNo+' doctDept='+doctDept+' inOut='+inOut; 
        	var serviceRow = this.dsService.findRow("serviceID", "findEmrList");
        	
        	this.dsService.setColumn(serviceRow,"argument",argument);
        	this.gfnService("findEmrList","false");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.emrTab.medTp.Div00.regAttStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.medTp.Div00.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.regAttStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.regAttStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage1.Div00.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc09.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage2.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage3.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage4.Div00.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage5.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.emrTab.prscTp.Div00.Tab00.tabpage6.Div00.subCodeStc08.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.patInfoDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.inoutRadio.addEventHandler("onitemchanged", this.inoutRadio_onitemchanged, this);
            this.patInfoDiv.subCodeStc07.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.doctDeptEd.addEventHandler("oneditclick", this.trmtDeptEd_oneditclick, this);
            this.patInfoDiv.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patInfoDiv.searchAttPatBtn00.addEventHandler("onclick", this.attPatDiv_searchAttPatBtn00_onclick, this);
            this.patInfoDiv.searchEmrBtn.addEventHandler("onclick", this.patInfoDiv_searchEmrBtn_onclick, this);
            this.patInfoDiv.searchDoctorBtn.addEventHandler("onclick", this.patInfoDiv_searchDoctorBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_EmrForm.xfdl");

       
    };
}
)();
