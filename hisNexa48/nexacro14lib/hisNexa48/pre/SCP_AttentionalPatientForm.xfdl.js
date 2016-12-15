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
                this.set_name("SCP_AttentionalPatientForm");
                this.set_classname("MA_AdrForm");
                this.set_titletext("관심환자관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAttentionalPatientList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAttentionalPatientList.do</Col><Col id=\"callbackFunc\">callbackFunc</Col><Col id=\"outData\">dsAttentionalPatient=dsAttentionalPatient</Col><Col id=\"inData\"/></Row><Row><Col id=\"serviceID\">findAttentionalFieldList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAttentionalFieldList.do</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">callbackFunc</Col><Col id=\"outData\">dsAttentionalField=dsAttentionalField</Col></Row><Row><Col id=\"serviceID\">batchAttentionalFieldProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchAttentionalFieldProcess.do</Col><Col id=\"inData\">dsAttentionalField=dsRegAttentionalField:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">registerAttentionalPatient</Col><Col id=\"URL\">his::msv/mcm/patientservice/registerAttentionalPatient.do</Col><Col id=\"inData\">dsAttentionalPatient=dsRegAttentionalPatient:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">batchAttentionalPatientProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchAttentionalPatientProcess.do</Col><Col id=\"inData\">dsAttentionalPatient=dsAttentionalPatient:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttentionalPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalFieldName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalDiv\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalContent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttentionalField", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalFieldSeq\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalFieldName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRegAttentionalPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalFieldName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalDiv\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalContent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttFieldCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalFieldName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRegAttentionalField", this);
            obj._setContents("<ColumnInfo><Column id=\"attentionalFieldSeq\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalFieldName\" type=\"STRING\" size=\"256\"/><Column id=\"attentionalDiv\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("regAttPatDiv", "absolute", "2%", "66", "381", "398", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("pNameStc", "absolute", "2.37%", "46", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("20");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.64%", "124", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("21");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "28.76%", "46", "94", "30", null, null, this.regAttPatDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.64%", "163", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("28");
            obj.set_text("관심분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc01", "absolute", "2.64%", "202", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("29");
            obj.set_text("등록일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc02", "absolute", "2.64%", "241", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("30");
            obj.set_text("종료일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc03", "absolute", "2.64%", "280", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("31");
            obj.set_text("관심내역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Calendar("startDateCal", "absolute", "28.5%", "202", null, "30", "22.69%", null, this.regAttPatDiv);
            this.regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Calendar("endDateCal", "absolute", "28.5%", "241", null, "30", "22.69%", null, this.regAttPatDiv);
            this.regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Combo("attDivCombo", "absolute", "28.5%", "163", null, "30", "22.69%", null, this.regAttPatDiv);
            this.regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.style.set_font("9 돋움");
            obj.set_innerdataset("@dsAttentionalField");
            obj.set_codecolumn("attentionalDiv");
            obj.set_datacolumn("attentionalDiv");
            obj = new Edit("patNoEd", "absolute", "28.76%", "85", "94", "30", null, null, this.regAttPatDiv);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaEdt");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("pNameStc00", "absolute", "2.37%", "85", null, "30", "74.93%", null, this.regAttPatDiv);
            obj.set_taborder("37");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttPatDiv.addChild(obj.name, obj);
            obj = new Combo("attFieldCombo", "absolute", "28.5%", "123", null, "30", "22.69%", null, this.regAttPatDiv);
            this.regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_codecolumn("attentionalFieldName");
            obj.set_datacolumn("attentionalFieldName");
            obj.style.set_font("9 돋움");
            obj.set_innerdataset("@dsAttFieldCombo");

            obj = new Div("attPatDiv", "absolute", "33.92%", "67", "805", "670", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "12.95%", "47", null, "30", "73.97%", null, this.attPatDiv);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNoEd", "absolute", "30.51%", "47", null, "30", "55.67%", null, this.attPatDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            obj.set_enable("false");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Grid("attPatientGrid", "absolute", "0.87%", "89", null, "563", "2.24%", null, this.attPatDiv);
            obj.set_taborder("13");
            obj.set_binddataset("dsAttentionalPatient");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"80\"/><Column size=\"239\"/><Column size=\"71\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"등록번호\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"환자번호\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"이름\"/><Cell col=\"3\" style=\"align:center;background:#cfd8dcff;\" text=\"관심영역\"/><Cell col=\"4\" style=\"align:center;background:#cfd8dcff;\" text=\"관심분류\"/><Cell col=\"5\" style=\"align:center;background:#cfd8dcff;\" text=\"관심내역\"/><Cell col=\"6\" style=\"align:center;background:#cfd8dcff;\" text=\"시작일자\"/><Cell col=\"7\" style=\"align:center;background:#cfd8dcff;\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:attentionalRegNo\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center;\" text=\"bind:patName\"/><Cell col=\"3\" edittype=\"combo\" style=\"align:center;\" text=\"bind:attentionalFieldName\" combodataset=\"dsAttFieldCombo\" combocodecol=\"attentionalFieldName\" combodatacol=\"attentionalFieldName\"/><Cell col=\"4\" edittype=\"combo\" style=\"align:center;\" text=\"bind:attentionalDiv\" combodataset=\"dsAttentionalField\" combocodecol=\"attentionalFieldName\" combodatacol=\"attentionalDiv\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:center;\" text=\"bind:attentionalContent\"/><Cell col=\"6\" edittype=\"date\" style=\"align:center;\" text=\"bind:startDate\"/><Cell col=\"7\" edittype=\"date\" style=\"align:center;\" text=\"bind:endDate\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "0.87%", "6", null, "30", "2.24%", null, this.attPatDiv);
            obj.set_taborder("15");
            obj.set_text("   관심환자조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.attPatDiv);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.attPatDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.87%", "47", null, "30", "87.8%", null, this.attPatDiv);
            obj.set_taborder("20");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attPatDiv.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "10.8%", "350", null, "104", "68.4%", null, this);
            obj.set_taborder("16");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("regAttDiv", "absolute", "1.92%", "472", "381", "264", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.9%", "41", null, "30", "74.67%", null, this.regAttDiv);
            obj.set_taborder("37");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.9%", "76", null, "30", "74.67%", null, this.regAttDiv);
            obj.set_taborder("41");
            obj.set_text("분류명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.regAttDiv.addChild(obj.name, obj);
            obj = new Combo("attFieldCombo", "absolute", "28.76%", "41", null, "30", "22.43%", null, this.regAttDiv);
            this.regAttDiv.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.set_codecolumn("attentionalFieldName");
            obj.set_datacolumn("attentionalFieldName");
            obj.style.set_font("9 돋움");
            obj.set_innerdataset("@dsAttFieldCombo");
            obj = new Edit("attDivEd", "absolute", "28.76%", "76", "166", "30", null, null, this.regAttDiv);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.regAttDiv.addChild(obj.name, obj);

            obj = new Static("regAttStc", "absolute", "2.8%", "74", null, "30", "68.08%", null, this);
            obj.set_taborder("19");
            obj.set_text("   관심환자등록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "2.72%", "480", null, "30", "68.24%", null, this);
            obj.set_taborder("20");
            obj.set_text("   관심분류등록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchAttBtn", "absolute", "827", "77", "58", "23", null, null, this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("addAttFieldBtn", "absolute", "308", "552", "45", "25", null, null, this);
            obj.set_taborder("28");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("saveAttFieldBtn", "absolute", "299", "482", "45", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("deleteAttFieldBtn", "absolute", "344", "482", "45", "25", null, null, this);
            obj.set_taborder("30");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("regAttBtn", "absolute", "299", "76", "45", "25", null, null, this);
            obj.set_taborder("32");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("clearRegAttBtn", "absolute", "344", "76", "45", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("deleteAttPatientBtn", "absolute", "885", "76", "58", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("searchAttPatBtn", "absolute", "232", "113", "30", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("searchAttBtnForSch", "absolute", "636", "115", "30", "30", null, null, this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "2.88%", "589", null, "131", "68.4%", null, this);
            obj.set_taborder("37");
            obj.set_binddataset("dsRegAttentionalField");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"No\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"분류명\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:attentionalFieldSeq\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:center;\" text=\"bind:attentionalDiv\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.84%", "7", null, "41", "85.76%", null, this);
            obj.set_taborder("38");
            obj.set_text("관심환자관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("saveAttPatientBtn", "absolute", "943", "76", "62", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 381, 398, this.regAttPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.regAttPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 670, this.attPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.attPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 381, 264, this.regAttDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.regAttDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MA_AdrForm");
            		p.set_titletext("관심환자관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","patDiv.prscNoEdit","value","dsAdr","prescNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","patDiv.diseaseNmEdit","value","dsAdr","diseaseNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","patDiv.patGenderCombo","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","adrDiv.writeDateCal","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","adrDiv.writeDateCal00","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","adrDiv.patGenderCombo","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","adrDiv.patGenderCombo00","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","patDiv.patGenderCombo00","value","dsAdr","patGender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","SCP_regAttPatDiv.attFieldCombo","innerdataset","dsAttentionalPatient","ATTENDTIONAL_FIELD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","SCP_regAttPatDiv.attDivCombo","innerdataset","dsAttentionalPatient","ATTENDTIONAL_DIV");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","SCP_regAttPatDiv.endDateCal","innerdataset","dsAttentionalPatient","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","SCP_regAttPatDiv.startDateCal","innerdataset","dsAttentionalPatient","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","regAttPatDiv.patNmEd","value","dsRegAttentionalPatient","patName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","regAttPatDiv.patNoEd","value","dsRegAttentionalPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","regAttPatDiv.startDateCal","value","dsRegAttentionalPatient","startDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","regAttPatDiv.endDateCal","value","dsRegAttentionalPatient","endDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","TextArea00","value","dsRegAttentionalPatient","attentionalContent");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","regAttPatDiv.attFieldCombo","value","dsRegAttentionalPatient","attentionalFieldName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","regAttPatDiv.attDivCombo","value","dsRegAttentionalPatient","attentionalDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_AttentionalPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_AttentionalPatientForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_AttentionalPatientForm.xfdl", function() {
        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        
        /*-------------------------------------------------------------------------------------------------+
        >>  										Form Onload
        +-------------------------------------------------------------------------------------------------*/
        this.SCP_AttentionalPatientForm_onload = function(obj,e)
        {
        	this.gfnService("findAttentionalFieldList","false");

        }

        this.callbackFunc = function(svcID,ErrorCode,ErrorMsg){
           if (ErrorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n" + ErrorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
        		if(svcID=="findAttentionalFieldList"){
        		this.dsAttentionalField.set_keystring("attentionalFieldName"); 
        		var rowCnt=this.dsAttentionalField.getRowCount();
        		var attentionalFieldName="";
        			for(var i=0;i<rowCnt;i++){
        			if(attentionalFieldName!=this.dsAttentionalField.getColumn(i,"attentionalFieldName")){
        				attentionalFieldName=this.dsAttentionalField.getColumn(i,"attentionalFieldName");
        				var nRow=this.dsAttFieldCombo.addRow();
        				this.dsAttFieldCombo.setColumn(nRow,"attentionalFieldName",attentionalFieldName);
        				}
        			}
        		this.dsAttentionalField.set_keystring(""); 
              }
        }
        }
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	switch(obj){ 
        		case this.searchAttPatBtn:	  // 관심환자 등록을 위한 환자 조회
        			this.clickSearchAttPatBtn();
        			break;
        		case this.searchAttBtnForSch: // 관심환자 조회를 위한 환자 조회
        			this.clickSearchAttBtnForSch();
        			break;
        		case this.deleteAttPatientBtn:// 관심환자 삭제
        			this.clickDeleteAttPatientBtn();
        			break;
        		case this.saveAttPatientBtn:  // 관심환자 저장
        			this.clickSaveAttPatientBtn();
        			break;
        		case this.regAttBtn:  		  // 관심환자 등록
        			this.clickRegAttBtn();
        			break;
        		case this.clearRegAttBtn: 	  // 관심환자 등록 시 데이터 초기화
        			this.clickClearRegAttBtn();
        			break;
        		case this.searchAttBtn: 	  // 관심환자 조회
        			this.clickSearchAttBtn();
        			break;
        		case this.addAttFieldBtn: 	  // 관심영역 추가
        			this.clickAddAttFieldBtn();
        			break;
        		case this.deleteAttFieldBtn:  // 관심영역 삭제
        			this.clickDeleteAttFieldBtn();
        			break;
        		case this.saveAttFieldBtn:    // 관심영역 저장
        			this.clickSaveAttFieldBtn();
        			break;
        	
        	}	
        }

        
        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/

        this.clickSearchAttBtn = function () {
        	var patNoEd=this.attPatDiv.patNoEd.value;
        	var argument = 'patNo='+patNoEd;
        	var serviceRow = this.dsService.findRow("serviceID", "findAttentionalPatientList");
        	this.dsService.setColumn(serviceRow,"argument",argument);
        	this.gfnService("findAttentionalPatientList","false");
        }

        this.clickSearchAttPatBtn = function () {
        	if(this.dsRegAttentionalPatient.rowcount>0){
        		if(this.confirm("다시하시겠습니까 ?"))
        			this.reload();
        		else
        			return;
        	}
        	this.dsRegAttentionalPatient.addRow();
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        	this.regAttPatDiv.patNoEd.set_value(arrRtn[0]);                              
        	this.regAttPatDiv.patNmEd.set_value(arrRtn[1]);   
        	}
        }

        this.clickSearchAttBtnForSch = function () {
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        	this.attPatDiv.patNmEd.set_value(arrRtn[1]);   
            this.attPatDiv.patNoEd.set_value(arrRtn[0]);                              
        	}
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  행 추가,삭제
        +-------------------------------------------------------------------------------------------------*/
        this.clickAddAttFieldBtn = function(obj,e)
        {
        	var fieldNm=this.regAttDiv.attFieldCombo.value;
        	var attDiv=this.regAttDiv.attDivEd.value;
        	if (fieldNm==null || attDiv ==null ){
        		if(fieldNm==null && attDiv ==null )
        			alert("관심영역과 분류명은 필수항목입니다");
        		else if(fieldNm==null)
        			alert("관심영역은 필수항목입니다");
        		else if(attDiv==null)
        			alert("분류명은 필수항목입니다");
        	}else{
        			this.dsRegAttentionalField.addRow();
        			var rowIdx=this.dsRegAttentionalField.getRowCount();
        			this.dsRegAttentionalField.setColumn(rowIdx-1,"attentionalDiv",attDiv);
        			this.dsRegAttentionalField.setColumn(rowIdx-1,"attentionalFieldName",fieldNm);
        		}
        }

        this.clickDeleteAttFieldBtn = function(obj,e)
        {
        	this.dsRegAttentionalField.deleteRow(this.dsRegAttentionalField.rowposition);
        }

        this.clickDeleteAttPatientBtn = function(obj,e)
        {
        	this.dsAttentionalPatient.deleteRow(this.dsAttentionalPatient.rowposition);
        }
        /*-------------------------------------------------------------------------------------------------+
        >>  저장
        +-------------------------------------------------------------------------------------------------*/
        this.clickRegAttBtn = function()
        {
        	var attField = this.regAttPatDiv.attFieldCombo.value;
        	var attDiv = this.regAttPatDiv.attDivCombo.text;
        	this.gfnService("registerAttentionalPatient","false");
        	this.reload();
        }

        this.clickSaveAttFieldBtn = function ()
        {
        	this.gfnService("batchAttentionalFieldProcess","false");
        	this.reload();
        }

        this.clickSaveAttPatientBtn = function ()
        {
        	var startDate=this.attPatDiv.attPatientGrid.getCellText(this.dsAttentionalPatient.rowposition,6);
        	var endDate=this.attPatDiv.attPatientGrid.getCellText(this.dsAttentionalPatient.rowposition,7);
        	if (endDate-startDate < 0){
        		alert("종료일자가 시작일자보다 빠릅니다.");
        		return;
        	}
        	this.gfnService("batchAttentionalPatientProcess","false");
        	this.reload();
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  COMBO EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.regAttDiv_attFieldEd_oncloseup = function(obj,e)
        {
        	this.dsRegAttentionalField.copyData(this.dsAttentionalField);
        	var ftr=this.regAttDiv.attFieldCombo.value;
        	this.dsRegAttentionalField.filter("attentionalFieldName=='"+ftr+"'");
        }

        this.regAttPatDiv_attFieldCombo_oncloseup = function(obj,e)
        {
        	var ftr=this.regAttPatDiv.attFieldCombo.value;
        	this.dsAttentionalField.filter("attentionalFieldName=='"+ftr+"'");
        }

        /*-------------------------------------------------------------------------------------------------+
        >>  초기화
        +-------------------------------------------------------------------------------------------------*/
        this.clickClearRegAttBtn = function ()
        {
        	this.dsRegAttentionalPatient.clearData();
        	this.regAttPatDiv.attFieldCombo.set_value(null);
        	this.regAttPatDiv.attDivCombo.set_value(null);
        	this.dsAttentionalField.filter("attentionalFieldName=='###'");
        }
        /*-------------------------------------------------------------------------------------------------+
        >>  GRID EVENT
        +-------------------------------------------------------------------------------------------------*/
        this.attPatDiv_attPatientGrid_ondropdown = function(obj,e)
        {
        	this.dsAttentionalField.filter("attentionalFieldName=='"+this.attPatDiv.attPatientGrid.getCellText(this.dsAttentionalPatient.rowposition,3)+"'");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_AttentionalPatientForm_onload, this);
            this.regAttPatDiv.pNameStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.fieldStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.fieldStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.fieldStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.pNameStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttPatDiv.attFieldCombo.addEventHandler("oncloseup", this.regAttPatDiv_attFieldCombo_oncloseup, this);
            this.attPatDiv.attPatientGrid.addEventHandler("ondropdown", this.attPatDiv_attPatientGrid_ondropdown, this);
            this.attPatDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attPatDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.attPatDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttDiv.attFieldCombo.addEventHandler("oncloseup", this.regAttDiv_attFieldEd_oncloseup, this);
            this.regAttStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.searchAttBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addAttFieldBtn.addEventHandler("onclick", this.clickBtn, this);
            this.saveAttFieldBtn.addEventHandler("onclick", this.clickBtn, this);
            this.deleteAttFieldBtn.addEventHandler("onclick", this.clickBtn, this);
            this.regAttBtn.addEventHandler("onclick", this.clickBtn, this);
            this.clearRegAttBtn.addEventHandler("onclick", this.clickBtn, this);
            this.deleteAttPatientBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchAttPatBtn.addEventHandler("onclick", this.clickBtn, this);
            this.searchAttBtnForSch.addEventHandler("onclick", this.clickBtn, this);
            this.saveAttPatientBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("SCP_AttentionalPatientForm.xfdl");

       
    };
}
)();
