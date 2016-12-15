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
                this.set_name("SCP_AdrForm");
                this.set_classname("MA_AdrForm");
                this.set_titletext("약물유해반응 관리");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAdr", this);
            obj._setContents("<ColumnInfo><Column id=\"adrNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"patAge\" type=\"STRING\" size=\"256\"/><Column id=\"patGender\" type=\"STRING\" size=\"256\"/><Column id=\"prescNo\" type=\"STRING\" size=\"256\"/><Column id=\"diseaseNm\" type=\"STRING\" size=\"256\"/><Column id=\"writerNo\" type=\"STRING\" size=\"256\"/><Column id=\"writerNm\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/><Column id=\"writerJob\" type=\"STRING\" size=\"256\"/><Column id=\"drugNo\" type=\"STRING\" size=\"256\"/><Column id=\"drugNm\" type=\"STRING\" size=\"256\"/><Column id=\"manifacture\" type=\"STRING\" size=\"256\"/><Column id=\"usage\" type=\"STRING\" size=\"256\"/><Column id=\"capct\" type=\"STRING\" size=\"256\"/><Column id=\"injcStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"injcPurp\" type=\"STRING\" size=\"256\"/><Column id=\"rvlStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"rvlRecogDate\" type=\"STRING\" size=\"256\"/><Column id=\"afterInjcRvl\" type=\"STRING\" size=\"256\"/><Column id=\"symptom\" type=\"STRING\" size=\"256\"/><Column id=\"prog\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntNm\" type=\"STRING\" size=\"256\"/><Column id=\"rltnExmntVal\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"reinjcReact\" type=\"STRING\" size=\"256\"/><Column id=\"opinion\" type=\"STRING\" size=\"256\"/><Column id=\"reportYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAdrList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findAdrList.do</Col><Col id=\"callbackFunc\">adrCallback</Col><Col id=\"outData\">dsAdr=dsAdr</Col></Row><Row><Col id=\"serviceID\">batchAdrProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchAdrProcess.do</Col><Col id=\"inData\">dsAdr=dsAdr:u</Col><Col id=\"callbackFunc\">adrCallback</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::won/outPatMngnt/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"callbackFunc\">patCallback</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"outpaReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzReceiptNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("adrDiv", "absolute", "1.92%", "66", "381", "104", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "2.9%", "17", null, "30", "74.41%", null, this.adrDiv);
            obj.set_taborder("20");
            obj.set_text("작성자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "3.17%", "57", null, "30", "74.41%", null, this.adrDiv);
            obj.set_taborder("21");
            obj.set_text("작성일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Calendar("writeDateCal", "absolute", "28.23%", "57", null, "31", "30.87%", null, this.adrDiv);
            this.adrDiv.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_font("9 돋움");
            obj = new Edit("doctNmEd", "absolute", "67.02%", "18", "115", "30", null, null, this.adrDiv);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.adrDiv.addChild(obj.name, obj);
            obj = new Edit("doctNoEd", "absolute", "28.23%", "17", "100", "30", null, null, this.adrDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.adrDiv.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.92%", "232", null, "520", "67.6%", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("dsAdr");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#eceff1ff;\" text=\"adrNo\"/><Cell col=\"1\" style=\"background:#eceff1ff;\" text=\"patNo\"/><Cell col=\"2\" style=\"background:#eceff1ff;\" text=\"prescNo\"/><Cell col=\"3\" style=\"background:#eceff1ff;\" text=\"writeDate\"/><Cell col=\"4\" style=\"background:#eceff1ff;\" text=\"drugNm\"/></Band><Band id=\"body\"><Cell text=\"bind:adrNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:patNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:prescNo\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:writeDate\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:drugNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("writerDiv", "absolute", "33.92%", "149", "805", "45", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "7", null, "30", "88.04%", null, this.writerDiv);
            obj.set_taborder("0");
            obj.set_text("작성일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "27.02%", "7", null, "30", "61.64%", null, this.writerDiv);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "65.5%", "7", null, "30", "23.16%", null, this.writerDiv);
            obj.set_taborder("2");
            obj.set_text("자격");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Calendar("writeDateCal", "absolute", "12.7%", "7", "110", "30", null, null, this.writerDiv);
            this.writerDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Edit("writerNoEdit", "absolute", "38.98%", "7", null, "30", "49.81%", null, this.writerDiv);
            obj.set_taborder("4");
            obj.style.set_font("9 돋움");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Edit("writerNmEdit", "absolute", "50.93%", "7", null, "30", "35.74%", null, this.writerDiv);
            obj.set_taborder("5");
            obj.style.set_font("9 돋움");
            this.writerDiv.addChild(obj.name, obj);
            obj = new Radio("writerJobRadio", "absolute", "78.33%", "10", null, "25", "0.75%", null, this.writerDiv);
            this.writerDiv.addChild(obj.name, obj);
            var writerJobRadio_innerdataset = new Dataset("writerJobRadio_innerdataset", this.writerDiv.writerJobRadio);
            writerJobRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">의사</Col><Col id=\"datacolumn\">의   사</Col></Row><Row><Col id=\"codecolumn\">간호사</Col><Col id=\"datacolumn\">간호사</Col></Row><Row><Col id=\"codecolumn\">약사</Col><Col id=\"datacolumn\">약   사</Col></Row></Rows>");
            obj.set_innerdataset(writerJobRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj.style.set_align("center middle");
            obj.set_value("doctor");
            obj.set_index("-1");

            obj = new Div("adrDiv02", "absolute", "33.92%", "401", "805", "80", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.63%", "6", null, "30", "88.1%", null, this.adrDiv02);
            obj.set_taborder("0");
            obj.set_text("주증상");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "41", null, "30", "88.04%", null, this.adrDiv02);
            obj.set_taborder("1");
            obj.set_text("관련검사명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "63.26%", "41", null, "30", "25.65%", null, this.adrDiv02);
            obj.set_taborder("2");
            obj.set_text("관련검사 수치");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.58%", "6", null, "30", "0.75%", null, this.adrDiv02);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "12.58%", "41", null, "30", "45.33%", null, this.adrDiv02);
            obj.set_taborder("4");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "75.34%", "41", null, "30", "13.45%", null, this.adrDiv02);
            obj.set_taborder("5");
            obj.style.set_font("9 돋움");
            this.adrDiv02.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "87.3%", "41", null, "30", "0.75%", null, this.adrDiv02);
            this.adrDiv02.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.adrDiv02.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">×10^3/㎕</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">×10^6/㎕</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">fL</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">pg</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">%</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">g/㎗</Col></Row><Row><Col id=\"codecolumn\">G</Col><Col id=\"datacolumn\">㎎/㎗</Col></Row><Row><Col id=\"codecolumn\">H</Col><Col id=\"datacolumn\">IU/ℓ</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");

            obj = new Div("adrDiv03", "absolute", "33.92%", "604", "805", "148", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "7", null, "30", "88.04%", null, this.adrDiv03);
            obj.set_taborder("0");
            obj.set_text("종합소견");
            obj.style.set_background("#c4d2daff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv03.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "0.62%", "42", null, "97", "0.62%", null, this.adrDiv03);
            obj.set_taborder("1");
            obj.style.set_font("9 돋움");
            this.adrDiv03.addChild(obj.name, obj);

            obj = new Div("drugDiv", "absolute", "33.92%", "199", "805", "114", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.63%", "5", null, "30", "88.1%", null, this.drugDiv);
            obj.set_taborder("0");
            obj.set_text("약물코드");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "27.27%", "5", null, "30", "61.52%", null, this.drugDiv);
            obj.set_taborder("1");
            obj.set_text("약물명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "73.85%", "5", null, "30", "14.82%", null, this.drugDiv);
            obj.set_taborder("2");
            obj.set_text("제조사");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc03", "absolute", "46.45%", "41", null, "30", "42.34%", null, this.drugDiv);
            obj.set_taborder("3");
            obj.set_text("용법");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "73.85%", "41", null, "30", "14.69%", null, this.drugDiv);
            obj.set_taborder("4");
            obj.set_text("용량");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc05", "absolute", "0.62%", "41", null, "30", "88.04%", null, this.drugDiv);
            obj.set_taborder("5");
            obj.set_text("투약기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc06", "absolute", "0.62%", "77", null, "30", "88.17%", null, this.drugDiv);
            obj.set_taborder("6");
            obj.set_text("투약목적");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "12.7%", "41", "110", "30", null, null, this.drugDiv);
            this.drugDiv.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("Calendar00", "absolute", "29.51%", "41", "110", "30", null, null, this.drugDiv);
            this.drugDiv.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("drugNoEdit", "absolute", "12.7%", "5", null, "30", "74.22%", null, this.drugDiv);
            obj.set_taborder("9");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("drugNmEdit", "absolute", "39.23%", "5", null, "30", "28.27%", null, this.drugDiv);
            obj.set_taborder("10");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("manifactureEdit", "absolute", "85.93%", "5", null, "30", "0.75%", null, this.drugDiv);
            obj.set_taborder("11");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "58.41%", "41", null, "30", "28.27%", null, this.drugDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85.93%", "41", null, "30", "0.75%", null, this.drugDiv);
            obj.set_taborder("13");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.7%", "77", null, "30", "0.75%", null, this.drugDiv);
            obj.set_taborder("14");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "27.4%", "41", null, "30", "70.61%", null, this.drugDiv);
            obj.set_taborder("15");
            obj.set_text("~");
            obj.style.set_font("9 돋움");
            this.drugDiv.addChild(obj.name, obj);

            obj = new Div("revealDiv", "absolute", "33.92%", "318", "805", "78", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "30.14%", "5", null, "30", "58.53%", null, this.revealDiv);
            obj.set_taborder("0");
            obj.set_text("발현기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "41", null, "30", "84.93%", null, this.revealDiv);
            obj.set_taborder("1");
            obj.set_text("투약 후 발현시기");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.62%", "5", null, "30", "88.04%", null, this.revealDiv);
            obj.set_taborder("2");
            obj.set_text("발현인지일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "12.58%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar00", "absolute", "42.22%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "58.9%", "5", "110", "30", null, null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("inoutRadio", "absolute", "23.16%", "44", null, "25", "51.31%", null, this.revealDiv);
            this.revealDiv.addChild(obj.name, obj);
            var inoutRadio_innerdataset = new Dataset("inoutRadio_innerdataset", this.revealDiv.inoutRadio);
            inoutRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">HOUR</Col><Col id=\"datacolumn\">시간 후</Col></Row><Row><Col id=\"codecolumn\">DAY</Col><Col id=\"datacolumn\">일 후</Col></Row><Row><Col id=\"codecolumn\">MONTH</Col><Col id=\"datacolumn\">개월 후</Col></Row></Rows>");
            obj.set_innerdataset(inoutRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj.set_index("0");
            obj = new Edit("Edit03", "absolute", "15.94%", "41", null, "30", "78.46%", null, this.revealDiv);
            obj.set_taborder("7");
            obj.style.set_font("9 돋움");
            this.revealDiv.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "56.91%", "5", null, "30", "40.72%", null, this.revealDiv);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.style.set_font("9 돋움");
            this.revealDiv.addChild(obj.name, obj);

            obj = new Div("patDiv", "absolute", "33.92%", "66", "805", "78", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Edit("patNoEdit", "absolute", "12.7%", "40", null, "30", "74.22%", null, this.patDiv);
            obj.set_taborder("0");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "40", null, "30", "88.04%", null, this.patDiv);
            obj.set_taborder("1");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "5", null, "30", "88.04%", null, this.patDiv);
            obj.set_taborder("2");
            obj.set_text("처방번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("prscNoEdit", "absolute", "12.7%", "5", null, "30", "74.22%", null, this.patDiv);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEdit", "absolute", "27.02%", "40", null, "30", "54.67%", null, this.patDiv);
            obj.set_taborder("6");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "47.95%", "40", null, "30", "40.72%", null, this.patDiv);
            obj.set_taborder("7");
            obj.set_text("성별");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Combo("patGenderCombo", "absolute", "60.02%", "40", null, "30", "28.02%", null, this.patDiv);
            this.patDiv.addChild(obj.name, obj);
            var patGenderCombo_innerdataset = new Dataset("patGenderCombo_innerdataset", this.patDiv.patGenderCombo);
            patGenderCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Static("subCodeStc03", "absolute", "73.85%", "40", null, "30", "14.82%", null, this.patDiv);
            obj.set_taborder("9");
            obj.set_text("연령");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("patAgeEdit", "absolute", "85.93%", "40", null, "30", "0.75%", null, this.patDiv);
            obj.set_taborder("10");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc04", "absolute", "32.75%", "5", null, "30", "55.92%", null, this.patDiv);
            obj.set_taborder("11");
            obj.set_text("진단명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("diseaseNmEdit", "absolute", "44.71%", "5", null, "30", "0.75%", null, this.patDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);

            obj = new Div("adrDiv00", "absolute", "33.92%", "485", "805", "114", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.62%", "6", null, "30", "88.04%", null, this.adrDiv00);
            obj.set_taborder("3");
            obj.set_text("경과내용");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.62%", "42", null, "30", "88.04%", null, this.adrDiv00);
            obj.set_taborder("4");
            obj.set_text("조치내용");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.62%", "78", null, "30", "88.17%", null, this.adrDiv00);
            obj.set_taborder("5");
            obj.set_text("재투여시 반응");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "12.58%", "6", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("6");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "12.7%", "44", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("7");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "12.58%", "78", null, "30", "0.75%", null, this.adrDiv00);
            obj.set_taborder("8");
            obj.style.set_font("9 돋움");
            this.adrDiv00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.84%", "7", null, "41", "85.76%", null, this);
            obj.set_taborder("16");
            obj.set_text("약물유해반응");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("searchAdrBtn", "absolute", "294", "128", "58", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "219", "199", "62", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "281", "199", "62", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("findWriterBtn", "absolute", "239", "85", "30", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("prscSearchBtn", "absolute", "642", "72", "30", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "876", "443", "30", "30", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("batchBtn", "absolute", "343", "199", "62", "25", null, null, this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 381, 104, this.adrDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 45, this.writerDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("whitesmoke");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.writerDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 80, this.adrDiv02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 148, this.adrDiv03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 114, this.drugDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.drugDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 78, this.revealDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.revealDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 78, this.patDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.patDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 114, this.adrDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.adrDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MA_AdrForm");
            		p.set_titletext("약물유해반응 관리");

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
            obj = new BindItem("item3","patDiv.patAgeEdit","value","dsAdr","patAge");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","writerDiv.writeDateCal","value","dsAdr","writeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","patDiv.patNoEdit","value","dsAdr","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","patDiv.patNmEdit","value","dsAdr","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","writerDiv.writerNoEdit","value","dsAdr","writerNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","writerDiv.writerNmEdit","value","dsAdr","writerNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","writerDiv.writerJobRadio","value","dsAdr","writerJob");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","drugDiv.manifactureEdit","value","dsAdr","manifacture");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","drugDiv.Edit04","value","dsAdr","capct");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","drugDiv.Edit03","value","dsAdr","usage");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","drugDiv.drugNmEdit","value","dsAdr","drugNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","drugDiv.Calendar00","value","dsAdr","injcEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","drugDiv.drugNoEdit","value","dsAdr","drugNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","drugDiv.Calendar01","value","dsAdr","injcStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","drugDiv.Edit05","value","dsAdr","injcPurp");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","revealDiv.Calendar01","value","dsAdr","rvlRecogDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","revealDiv.Calendar00","value","dsAdr","rvlStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","revealDiv.Calendar02","value","dsAdr","rvlEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","revealDiv.Edit03","value","dsAdr","afterInjcRvl");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","adrDiv02.Edit05","value","dsAdr","symptom");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","adrDiv02.Edit00","value","dsAdr","rltnExmntNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","adrDiv02.Edit01","value","dsAdr","rltnExmntVal");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","adrDiv00.Edit05","value","dsAdr","prog");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","adrDiv00.Edit00","value","dsAdr","action");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","adrDiv00.Edit01","value","dsAdr","reinjcReact");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","adrDiv03.TextArea00","value","dsAdr","opinion");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_AdrForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_AdrForm.xfdl", "scripts::medScripts.xjs");
        this.registerScript("SCP_AdrForm.xfdl", function() {
        //include "scripts::commonScripts.xjs"
        //include "scripts::medScripts.xjs"

        this.adrDiv_searchAdrBtn_onclick = function(obj,e)
        {
        	this.gfnService("findAdrList");
        }

        this.delBtn_onclick = function(obj,e)
        {
        	this.dsAdr.deleteRow(this.dsAdr.rowposition);
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.dsAdr.addRow();
        	this.writerDiv.writeDateCal.set_value(this.gfnLocalDate());
        	this.writerDiv.writerNoEdit.set_value(application.gdsEmp.getColumn(0, "empNo"));
        	this.writerDiv.writerNmEdit.set_value(application.gdsEmp.getColumn(0, "empNm"));
        	this.writerDiv.writerJobRadio.set_value(application.gdsEmp.getColumn(0, "jobrk"));
        }

        this.batchBtn_onclick = function(obj,e)
        {
        	this.gfnService("batchAdrProcess");
        }

        
        this.patDiv_prscSearchBtn_onclick = function(obj,e)
        {
        	this.medOpenDrugPrscDialog();
        }

        this.setDrugPrscInfo = function(arrRtn) 
        {
        	this.patDiv.prscNoEdit.set_value(arrRtn[0]);			// 처방번호 세팅
        	this.patDiv.diseaseNmEdit.set_value(arrRtn[1]);			// 진단명 세팅
        	this.patDiv.patNoEdit.set_value(arrRtn[2]);				// 환자번호 세팅
        	
        	this.dsPat.clearData();
        	this.dsService.setColumn(2, 4, "patNo=" + arrRtn[2]);
        	this.gfnService("findPat");
        	
        	this.drugDiv.drugNoEdit.set_value(arrRtn[3]);
        	
        	var drugNm = arrRtn[4].slice(1, arrRtn[4].lastIndexOf("("));
        	var manifacture = arrRtn[4].slice(arrRtn[4].lastIndexOf("(") + 1, arrRtn[4].length - 1);
        	
        	this.drugDiv.drugNmEdit.set_value(drugNm);
        	this.drugDiv.manifactureEdit.set_value(manifacture);
        }

        this.patCallback = function(svcID,errorCode,errorMsg)
        {
        	//trace(this.dsPat.saveXML());
        	this.patDiv.patNmEdit.set_value(this.dsPat.getColumn(0, "patNm"));
        	this.patDiv.patAgeEdit.set_value(this.dsPat.getColumn(0, "age"));
        	this.patDiv.patGenderCombo.set_value(this.dsPat.getColumn(0, "gender"));
        }

        this.findWriterBtn_onclick = function(obj,e)
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
        	this.adrDiv.doctNoEd.set_value(arrRtn[0]);
        	this.adrDiv.doctNmEd.set_value(arrRtn[1]);                
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.adrDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.writerDiv.writerJobRadio.addEventHandler("onitemclick", this.adrDiv01_inoutRadio_onitemclick, this);
            this.adrDiv02.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv02.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv02.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv03.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc05.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.drugDiv.subCodeStc06.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.revealDiv.inoutRadio.addEventHandler("onitemclick", this.adrDiv05_inoutRadio_onitemclick, this);
            this.patDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.adrDiv00.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchAdrBtn.addEventHandler("onclick", this.adrDiv_searchAdrBtn_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.findWriterBtn.addEventHandler("onclick", this.findWriterBtn_onclick, this);
            this.prscSearchBtn.addEventHandler("onclick", this.patDiv_prscSearchBtn_onclick, this);
            this.Button01.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.batchBtn.addEventHandler("onclick", this.batchBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_AdrForm.xfdl");

       
    };
}
)();
