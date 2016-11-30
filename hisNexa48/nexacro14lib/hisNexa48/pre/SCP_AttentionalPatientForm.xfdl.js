﻿(function()
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAdrList</Col><Col id=\"URL\">his::med/adr/findAdrList.do</Col><Col id=\"callbackFunc\">adrCallback</Col><Col id=\"outData\">dsAdr=dsAdr</Col></Row><Row><Col id=\"serviceID\">batchAdrProcess</Col><Col id=\"URL\">his::med/adr/batchAdrProcess.do</Col><Col id=\"inData\">dsAdr=dsAdr:u</Col><Col id=\"callbackFunc\">adrCallback</Col></Row><Row><Col id=\"serviceID\">findPat</Col><Col id=\"URL\">his::won/outPatMngnt/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"callbackFunc\">patCallback</Col></Row></Rows>");
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

            obj = new Dataset("dsAttentionalPatient", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTENDTIONAL_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PAT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDTIONAL_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDTIONAL_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAttentionalCode", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTENTIONAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENTIONAL_CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0.16%", "0", "1249", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-5", null, "60", "71.84%", null, this);
            obj.set_taborder("1");
            obj.set_text("관심환자관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("SCP_regAttPatDiv", "absolute", "2%", "66", "381", "398", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("pNameStc", "absolute", "2.37%", "46", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("20");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.64%", "124", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("21");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Edit("patNmEd", "absolute", "28.76%", "46", "94", "30", null, null, this.SCP_regAttPatDiv);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.64%", "163", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("28");
            obj.set_text("관심분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc01", "absolute", "2.64%", "202", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("29");
            obj.set_text("등록일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc02", "absolute", "2.64%", "241", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("30");
            obj.set_text("종료일자");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc03", "absolute", "2.64%", "280", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("31");
            obj.set_text("관심내역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Calendar("writeDateCal", "absolute", "28.5%", "202", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Calendar("writeDateCal00", "absolute", "28.5%", "241", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_autoskip("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("9 돋움");
            obj = new Combo("patGenderCombo", "absolute", "28.5%", "163", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            var patGenderCombo_innerdataset = new Dataset("patGenderCombo_innerdataset", this.SCP_regAttPatDiv.patGenderCombo);
            patGenderCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Combo("patGenderCombo00", "absolute", "28.5%", "124", null, "30", "22.69%", null, this.SCP_regAttPatDiv);
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            var patGenderCombo00_innerdataset = new Dataset("patGenderCombo00_innerdataset", this.SCP_regAttPatDiv.patGenderCombo00);
            patGenderCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo00_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Edit("patNoEd", "absolute", "28.76%", "85", "94", "30", null, null, this.SCP_regAttPatDiv);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaEdt");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Static("pNameStc00", "absolute", "2.37%", "85", null, "30", "74.93%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("37");
            obj.set_text("환자번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);
            obj = new Button("searchPatNoBtn", "absolute", "55.67%", "50", null, "22", "32.98%", null, this.SCP_regAttPatDiv);
            obj.set_taborder("38");
            obj.set_text("조회");
            obj.style.set_bordertype("normal 3 3");
            this.SCP_regAttPatDiv.addChild(obj.name, obj);

            obj = new Div("patDiv", "absolute", "33.92%", "67", "805", "670", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("subCodeStc02", "absolute", "0.87%", "82", null, "30", "87.8%", null, this.patDiv);
            obj.set_taborder("1");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc00", "absolute", "0.87%", "47", null, "30", "87.8%", null, this.patDiv);
            obj.set_taborder("2");
            obj.set_text("환자명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Edit("prscNoEdit", "absolute", "12.95%", "47", null, "30", "73.97%", null, this.patDiv);
            obj.set_taborder("3");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Static("subCodeStc01", "absolute", "0.87%", "121", null, "30", "87.8%", null, this.patDiv);
            obj.set_taborder("7");
            obj.set_text("관심분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Combo("patGenderCombo", "absolute", "12.95%", "82", null, "30", "58.53%", null, this.patDiv);
            this.patDiv.addChild(obj.name, obj);
            var patGenderCombo_innerdataset = new Dataset("patGenderCombo_innerdataset", this.patDiv.patGenderCombo);
            patGenderCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Edit("diseaseNmEdit", "absolute", "33%", "47", null, "30", "53.18%", null, this.patDiv);
            obj.set_taborder("12");
            obj.style.set_font("9 돋움");
            this.patDiv.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.87%", "164", null, "488", "2.24%", null, this.patDiv);
            obj.set_taborder("13");
            obj.set_binddataset("dsAdr");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"89\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"등록번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"이름\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"관심영역\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"관심분류\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"시작일자\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:patNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:prescNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:writeDate\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:drugNm\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.patDiv.addChild(obj.name, obj);
            obj = new Combo("patGenderCombo00", "absolute", "12.95%", "121", null, "30", "58.53%", null, this.patDiv);
            this.patDiv.addChild(obj.name, obj);
            var patGenderCombo00_innerdataset = new Dataset("patGenderCombo00_innerdataset", this.patDiv.patGenderCombo00);
            patGenderCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo00_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Static("subCodeStc03", "absolute", "0.87%", "6", null, "30", "2.24%", null, this.patDiv);
            obj.set_taborder("15");
            obj.set_text("   관심환자조회");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.patDiv.addChild(obj.name, obj);
            obj = new Button("DelBtn02", "absolute", "-188", "45", "32", "32", null, null, this.patDiv);
            obj.set_taborder("19");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::ic_search_black_24dp_2x.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_font("9 돋움");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.patDiv.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "410", "48", "58", "25", null, null, this.patDiv);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            this.patDiv.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "10.8%", "350", null, "104", "68.4%", null, this);
            obj.set_taborder("16");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Div("attCodeDiv", "absolute", "1.92%", "472", "381", "264", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);
            obj = new Static("fieldStc", "absolute", "2.37%", "41", null, "30", "75.2%", null, this.attCodeDiv);
            obj.set_taborder("37");
            obj.set_text("관심영역");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attCodeDiv.addChild(obj.name, obj);
            obj = new Static("fieldStc00", "absolute", "2.37%", "76", null, "30", "75.2%", null, this.attCodeDiv);
            obj.set_taborder("41");
            obj.set_text("관심분류");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.attCodeDiv.addChild(obj.name, obj);
            obj = new Combo("patGenderCombo00", "absolute", "28.76%", "41", null, "30", "22.43%", null, this.attCodeDiv);
            this.attCodeDiv.addChild(obj.name, obj);
            var patGenderCombo00_innerdataset = new Dataset("patGenderCombo00_innerdataset", this.attCodeDiv.patGenderCombo00);
            patGenderCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여성</Col></Row></Rows>");
            obj.set_innerdataset(patGenderCombo00_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 돋움");
            obj = new Edit("trmtDoctEd", "absolute", "28.76%", "76", "166", "30", null, null, this.attCodeDiv);
            obj.set_taborder("49");
            obj.set_enable("false");
            obj.getSetter("class").set("AreaEdt");
            obj.style.set_font("9 돋움");
            this.attCodeDiv.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.72%", "584", null, "140", "68.48%", null, this);
            obj.set_taborder("18");
            obj.set_binddataset("dsAdr");
            obj.set_autofittype("col");
            obj.style.set_font("9 돋움");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"207\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"분류코드\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"분류명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:adrNo\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:patNo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "2.8%", "74", null, "30", "68.08%", null, this);
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
            obj.set_text("   관심분류코드");
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

            obj = new Button("searchAttCodeBtn", "absolute", "275", "483", "58", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "280", "77", "58", "25", null, null, this);
            obj.set_taborder("27");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 381, 398, this.SCP_regAttPatDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.SCP_regAttPatDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 805, 670, this.patDiv,
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
            obj = new Layout("default", "", 381, 264, this.attCodeDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_font("9 돋움");

            	}
            );
            this.attCodeDiv.addLayout(obj.name, obj);

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
            obj = new BindItem("item29","TextArea00","value","dsAdr","opinion");
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

        

        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	switch(obj){ 
        		case this.SCP_regAttPatDiv.searchPatNoBtn: 	    //환자 검색
        			this.clickSearchPatNoBtn();
        			break;
        		case this.SCP_attCodeDiv.searchAttCodeBtn: 	    //환자 검색
        			this.clickSearchAttCodeBtn();
        			break;
        	}
        }

        
        /*-------------------------------------------------------------------------------------------------+
        >>  조회
        +-------------------------------------------------------------------------------------------------*/

        
        this.clickSearchPatNoBtn = function(){	//환자등록번호조회
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){
        		this.SCP_regAttPatDiv.patNoEd.set_value(arrRtn[0]);
        	}
        }

        this.clickSearchAttCodeBtn =function () {

        	alert("빨리가라");
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.SCP_regAttPatDiv.pNameStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.fieldStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.pNameStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.SCP_regAttPatDiv.searchPatNoBtn.addEventHandler("onclick", this.clickBtn, this);
            this.patDiv.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.patDiv.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.attCodeDiv.fieldStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.attCodeDiv.fieldStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.searchAttCodeBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("SCP_AttentionalPatientForm.xfdl");

       
    };
}
)();
