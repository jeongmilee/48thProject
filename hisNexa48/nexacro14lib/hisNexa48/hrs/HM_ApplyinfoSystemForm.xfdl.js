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
                this.set_name("HM_ApplyInfoSystemForm");
                this.set_classname("HM_ApplyInfoSystemForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHmJoinCandi", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"employYear\" type=\"STRING\" size=\"256\"/><Column id=\"employNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"takeNum\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"major\" type=\"STRING\" size=\"256\"/><Column id=\"originSchool\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"vtrYn\" type=\"STRING\" size=\"256\"/><Column id=\"disperYn\" type=\"STRING\" size=\"256\"/><Column id=\"addScore\" type=\"STRING\" size=\"256\"/><Column id=\"docScrScore\" type=\"STRING\" size=\"256\"/><Column id=\"prgsPhase\" type=\"STRING\" size=\"256\"/><Column id=\"exp\" type=\"STRING\" size=\"256\"/><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"addrDetail\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">joincandiList</Col><Col id=\"URL\">his::hrs/emp/findJoinCandiList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmJoinCandi=dsHmJoinCandi</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">joinCandiScoreList</Col><Col id=\"URL\">his::hrs/emp/findJoinCandiScore.do</Col><Col id=\"outData\">dsHmJoinCandiScore=dsHmJoinCandiScore</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">mngntJoinCandi</Col><Col id=\"URL\">his::hrs/emp/mngntJoinCandi.do</Col><Col id=\"inData\">dsHmJoinCandi=dsHmJoinCandi:U dsHmJoinCandiScore=dsHmJoinCandiScore:U</Col><Col id=\"outData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmJoinCandiScore", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"takeNum\" type=\"STRING\" size=\"256\"/><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"subjectCd\" type=\"STRING\" size=\"256\"/><Column id=\"itverScore\" type=\"STRING\" size=\"256\"/><Column id=\"subjectScore\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("YnType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"license_type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"license_type\">Y</Col></Row><Row><Col id=\"license_type\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0.72%", "719", null, "40", "0.8%", null, this);
            obj.set_taborder("0");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("normal 0 0");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0.72%", "60", null, "651", "0.8%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("01Stc", "absolute", "15", "66", "100", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("채용년도");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("applySpin", "absolute", "121", "66", "77", "30", null, null, this);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "99", "799", "606", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsHmJoinCandi");
            obj.set_autofittype("col");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"174\"/><Column size=\"54\"/><Column size=\"61\"/><Column size=\"168\"/><Column size=\"148\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"65\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#eceff1ff;\" text=\"No\"/><Cell col=\"1\" style=\"align:center;background:#eceff1ff;\" text=\"채용명\"/><Cell col=\"2\" style=\"align:center;background:#eceff1ff;\" text=\"응시번호\"/><Cell col=\"3\" style=\"align:center;background:#eceff1ff;\" text=\"성명\"/><Cell col=\"4\" style=\"align:center;background:#eceff1ff;\" text=\"주소\"/><Cell col=\"5\" style=\"align:center;background:#eceff1ff;\" text=\"상세주소\"/><Cell col=\"6\" style=\"align:center;background:#eceff1ff;\" text=\"보훈여부\"/><Cell col=\"7\" style=\"align:center;background:#eceff1ff;\" text=\"장애여부\"/><Cell col=\"8\" style=\"align:center;background:#eceff1ff;\" text=\"채용시퀀스\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:center;\" text=\"bind:employNm\" editdisplay=\"edit\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:center;\" text=\"bind:takeNum\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:center;\" text=\"bind:empNm\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:addr\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:addrDetail\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:vtrYn\" combodataset=\"YnType\" combocodecol=\"license_type\" combodatacol=\"license_type\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:disperYn\" combodataset=\"YnType\" combocodecol=\"license_type\" combodatacol=\"license_type\"/><Cell col=\"8\" edittype=\"normal\" style=\"align:center;\" text=\"bind:employSeq\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("02Stc", "absolute", "822", "136", "86", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("채용년도");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Spin("employYearSpin", "absolute", "909", "136", "98", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaSpin");
            this.addChild(obj.name, obj);

            obj = new Static("07Stc", "absolute", "1031", "199", "86", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("성  별");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("09Stc", "absolute", "822", "230", "86", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("생년월일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "910", "464", "287", "241", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsHmJoinCandiScore");
            obj.set_autofittype("col");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"77\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#eceff1ff;\" text=\"No\"/><Cell col=\"1\" style=\"align:center;background:#eceff1ff;\" text=\"응시번호\"/><Cell col=\"2\" style=\"align:center;background:#eceff1ff;\" text=\"면접점수\"/><Cell col=\"3\" style=\"align:center;background:#eceff1ff;\" text=\"과목점수\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:takeNum\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:itverScore\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:subjectScore\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("04Stc", "absolute", "822", "104", "86", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("채용명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("03Stc", "absolute", "1031", "136", "86", "30", null, null, this);
            obj.set_taborder("13");
            obj.set_text("고용구분");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("06Stc", "absolute", "822", "199", "86", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("주민번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("05Stc", "absolute", "822", "168", "86", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_text("성  명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRadio", "absolute", "1123", "199", "82", "30", null, null, this);
            this.addChild(obj.name, obj);
            var genderRadio_innerdataset = new Dataset("genderRadio_innerdataset", this.genderRadio);
            genderRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(genderRadio_innerdataset);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaRadio");

            obj = new Static("08Stc", "absolute", "822", "261", "86", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("출신학교");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("10Stc", "absolute", "822", "323", "86", "77", null, null, this);
            obj.set_taborder("18");
            obj.set_text("주  소");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("vtrYnRadio", "absolute", "914", "402", "71", "30", null, null, this);
            this.addChild(obj.name, obj);
            var vtrYnRadio_innerdataset = new Dataset("vtrYnRadio_innerdataset", this.vtrYnRadio);
            vtrYnRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(vtrYnRadio_innerdataset);
            obj.set_taborder("19");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaRadio");

            obj = new Static("11Stc", "absolute", "1031", "401", "86", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_text("장애 여부");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("12Stc", "absolute", "822", "401", "86", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_text("보훈 여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("disperYnRadio", "absolute", "1123", "402", "70", "30", null, null, this);
            this.addChild(obj.name, obj);
            var disperYnRadio_innerdataset = new Dataset("disperYnRadio_innerdataset", this.disperYnRadio);
            disperYnRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(disperYnRadio_innerdataset);
            obj.set_taborder("22");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaRadio");

            obj = new Static("14Stc", "absolute", "1031", "432", "85", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_text("가산점");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("addScoreEd", "absolute", "1118", "432", "79", "30", null, null, this);
            obj.set_taborder("24");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("15Stc", "absolute", "822", "464", "86", "241", null, null, this);
            obj.set_taborder("25");
            obj.set_text("점  수");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empNameEd", "absolute", "909", "168", "98", "30", null, null, this);
            obj.set_taborder("28");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("employNameEd", "absolute", "909", "104", "318", "30", null, null, this);
            obj.set_taborder("29");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("takeNumEd", "absolute", "1118", "168", "109", "30", null, null, this);
            obj.set_taborder("30");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("16Stc", "absolute", "822", "432", "86", "30", null, null, this);
            obj.set_taborder("31");
            obj.set_text("채용시퀀스");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("employSeqEd", "absolute", "910", "432", "104", "30", null, null, this);
            obj.set_taborder("32");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("13Stc", "absolute", "1031", "230", "86", "30", null, null, this);
            obj.set_taborder("33");
            obj.set_text("휴대전화번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("phoneEd", "absolute", "1118", "230", "109", "30", null, null, this);
            obj.set_taborder("34");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Calendar("birthdayCal", "absolute", "909", "230", "113", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCal");

            obj = new Combo("hireDivCombo", "absolute", "1118", "136", "110", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo_innerdataset = new Dataset("hireDivCombo_innerdataset", this.hireDivCombo);
            hireDivCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">정규직</Col><Col id=\"datacolumn\">정규직</Col></Row><Row><Col id=\"codecolumn\">비정규직</Col><Col id=\"datacolumn\">비정규직</Col></Row><Row><Col id=\"codecolumn\">별정직</Col><Col id=\"datacolumn\">별정직</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCombo");

            obj = new Edit("mjEd", "absolute", "909", "292", "287", "30", null, null, this);
            obj.set_taborder("39");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("mjEd001", "absolute", "909", "261", "287", "30", null, null, this);
            obj.set_taborder("41");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("07Stc00", "absolute", "822", "292", "86", "30", null, null, this);
            obj.set_taborder("47");
            obj.set_text("전 공");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("editZip01", "absolute", "909", "368", "320", "31", null, null, this);
            obj.set_taborder("48");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("editZip", "absolute", "72.72%", "66", null, "31", "3.2%", null, this);
            obj.set_taborder("49");
            obj.set_value("주소와상세주소값 두줄을 한줄저장을위한텍스트");
            obj.set_visible("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Edit("editZip00", "absolute", "992", "331", "204", "30", null, null, this);
            obj.set_taborder("50");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("rrnEd", "absolute", "72.72%", "199", "98", "30", null, null, this);
            obj.set_taborder("51");
            obj.set_type("string");
            obj.set_mask("######'-'#######");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_color("#46463dff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("05Stc00", "absolute", "1031", "168", "86", "30", null, null, this);
            obj.set_taborder("52");
            obj.set_text("응시번호");
            obj.style.set_background("#c4d2daff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("editZip02", "absolute", "910", "331", "77", "30", null, null, this);
            obj.set_taborder("64");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_joinCandiSch", "absolute", "203", "69", "58", "23", null, null, this);
            obj.set_taborder("65");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "absolute", "1169", "724", "62", "25", null, null, this);
            obj.set_taborder("66");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("mngnt", "absolute", "1106", "724", "62", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("remove", "absolute", "1042", "724", "62", "25", null, null, this);
            obj.set_taborder("68");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("register", "absolute", "978", "724", "62", "25", null, null, this);
            obj.set_taborder("69");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("scoreAdd", "absolute", "1201", "464", "33", "25", null, null, this);
            obj.set_taborder("70");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.84%", "7", null, "41", "85.76%", null, this);
            obj.set_taborder("71");
            obj.set_text("입사지원자관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findZip", "absolute", "1199", "330", "30", "30", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("majorPopup", "absolute", "1198", "292", "30", "30", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_ApplyInfoSystemForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item43","employYearSpin","value","dsHmJoinCandi","employYear");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","genderRadio","value","dsHmJoinCandi","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","vtrYnRadio","value","dsHmJoinCandi","vtrYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","disperYnRadio","value","dsHmJoinCandi","disperYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","addScoreEd","value","dsHmJoinCandi","addScore");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","empNameEd","value","dsHmJoinCandi","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","employNameEd","value","dsHmJoinCandi","employNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","takeNumEd","value","dsHmJoinCandi","takeNum");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","employSeqEd","value","dsHmJoinCandi","employSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","phoneEd","value","dsHmJoinCandi","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","birthdayCal","value","dsHmJoinCandi","birthday");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","hireDivCombo","value","dsHmJoinCandi","hireDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","mjEd","value","dsHmJoinCandi","major");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","mjEd001","value","dsHmJoinCandi","originSchool");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","editZip","value","dsHmJoinCandi","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","rrnEd","value","dsHmJoinCandi","rrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","rrnEd","visible","dsHmJoinCandi","rrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","editZip01","value","dsHmJoinCandi","addrDetail");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","editZip02","value","dsHmJoinCandi","zipCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","editZip00","value","dsHmJoinCandi","addr");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_ApplyinfoSystemForm.xfdl", "scripts::commonTran.xjs");
        this.addIncludeScript("HM_ApplyinfoSystemForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HM_ApplyinfoSystemForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("HM_ApplyinfoSystemForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HM_ApplyinfoSystemForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 입사지원자관리                                                  *
        *                                                                   *
        * @Path		    입사지원 정보관리        	                        *
        * @Description  입사지원정보 조회,등록,수정,삭제 화면          *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 6. 7.                             		        *
        *								                                    *
        ********************************************************************/
        //include "scripts::commonTran.xjs";
        //include "scripts::commonScripts.xjs";  
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonScripts.xjs";  

        //날짜받아오는 구문========================================================================================================================
        var sDate;//지금의 날짜임          여기선언하고 아래에 가져다쓴다
        var sYear;//지금의 년도임
        ///날짜관련부분임 많이쓰임 
        //이부분 추가 시켰음 엑플은 그냥되는데 넥사는 이거 추가해둬야함 날짜 가져오는 함수 이부분 좋음 기억합시당
        this.toFormatString = function(dt,fmt) {    
              return fmt.replace(/(Y|y|m|d|h|H|i|s|am|pm)/gi,
                  function($1){
                      switch ($1){	 
                          case 'Y' :   return dt.getFullYear();
                          case 'y' :   return dt.getFullYear().toString().substr(2);
                          case 'm' :   return (dt.getMonth()+1).toString().padLeft(2,"0");//끝자리 01이면 1만 나와서 저렇게 적어주었다
                          case 'd' :   return dt.getDate().toString().padLeft(2,"0");     //끝자리 01이면 1만 나와서 저렇게 적어주었다
                          case 'h' :   return (h = dt.getHours() % 12) ? h : 12;
                          case 'H' :   return dt.getHours();
                          case 'i' :   return dt.getMinutes();
                          case 's' :   return dt.getSeconds();
                          case 'am':   return dt.getHours() < 12 ? 'am' : 'pm';
                          case 'pm':   return dt.getHours() < 12 ? 'am' : 'pm';
                    }
                } 
            );
        }
        //=============================================================================================================================================

        //주소조회
        this.btn_findZip_onclick = function(obj,e)
        {  var arr = this.gfnPostPopup();    // alert(arr);//문법맞으면 트루펄스 나옴
          this.setPost = function(postNum,addr,detailAddr){
           this.editZip02.set_value(postNum);
           this.editZip00.set_value(addr);
           this.editZip01.set_value(detailAddr);						 
          }
        }

        
        //조회버튼
        // function vrfcFxAstBtn_onclick(obj:Button,  e:ClickEventInfo) {  gfnService("joincandiList"); }
        this.vrfcFxAstBtn_onclick = function(obj,e)
        {	 }

        
        //그리드 클릭시
        this.Div01_Grid00_oncellclick = function(obj,e){
        		
        		var employSeq = this.dsHmJoinCandi.getColumn(this.dsHmJoinCandi.rowposition,"employSeq");
        		
        		var argument = 'employSeq='+employSeq;
        		this.dsService.setColumn(1,"argument",argument);
        		//alert(argument);
        		this.gfnService("joinCandiScoreList");
        	
        	  
        }

        

        // 행추가
        this.Div01_Div02_Button11_onclick = function(obj,e)
        {	this.dsHmJoinCandiScore.addRow(); 
        	this.dsHmJoinCandiScore.setColumn(this.dsHmJoinCandiScore.rowposition, "employSeq", sDate);//날짜들어간다

        }
         
        // 행삭제

        this.Div01_Div02_Button13_onclick = function(obj,e)
        {  } 

        // 콜백
        this.CallbackFunc=function(trid,errcd,errmsg){	
        	if(trid =="joincandiList"){
        		if(errcd == 1){ 
        		
                        var employSeq = this.dsHmJoinCandi.getColumn(this.dsHmJoinCandi.rowposition,"employSeq");
        		
        				var argument = 'employSeq='+employSeq;
        				this.dsService.setColumn(1,"argument",argument);
        				//alert(argument);
        				this.gfnService("joinCandiScoreList");
                       
        		}else{
        			alert("지원자정보가 존재하지 않습니다");
        		}
        	}else if(trid == "joinCandiScoreList"){
        		if(errcd == 1){

        			}else{
        			alert("선택한 지원자의 정보가 존재하지 않습니다");
        		}
        	}else if(trid == "mngntJoinCandi"){
        		if(errcd == 1){
        			alert("입사지원자정보가 일괄처리 되었습니다");
        			}else{
        			alert("변경된 사항이 처리되지 못했습니다");
        		}
        	}	
        } 

        // 전공버튼 GP090
        this.majorPopup_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP090"/*,"1"*/);// 뒤에칸에는 시퀀스가 가야하는데 여기선 안쓰니 비워도되는듯
             this.setCode = function(code,arrRtn){this.mjEd.set_value(arrRtn[1]);}//이부분 안되면 뒤에 팝업안뜬다 안뜰땐 뒷부분 다 주석하고해보자
        }

        
        // 학교버튼 GP052 갑자기 넥사 화면이 꺼질때 디비에서 특수키를 찾는다
        this.empMajorPopup_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP052"/*,"1"*/);// 뒤에칸에는 시퀀스가 가야하는데 여기선 안쓰니 비워도되는듯
         	 this.setCode = function(code,arrRtn){this.mjEd001.set_value(arrRtn[1]);}//이부분 안되면 뒤에 팝업안뜬다 안뜰땐 뒷부분 다 주석하고해보자
        // 학교쪽 디비에서 특수기호가 있으면 오류가난다 여기에서는 & 키가 있어서 오류남 고치기위해서는 아래처럼 &기호를 찾아서 오류안나는 기호로 인터넷 찾아서 고쳐주면된다
        // Texas A&M Univ.(보건물리) 가운데 &를 넥사로 가져올때 xml로 변환시키는데 이때 오류나면서 꺼진다  
        // Texas A&AMP;M Univ.(보건물리)  이걸 xml파일로 변환시킬때 사용하려면 &AMP; 이걸로 앞에처럼 적어주면 잘나온다.
        }

        this.btn_joinCandiSch_onclick = function(obj,e)
        {
        	this.gfnService("joincandiList");
        }

        this.HM_ApplyInfoSystemForm_onload = function(obj,e)
        {
        		var objDate = new Date();
            //var sDate = this.toFormatString(objDate,"%Y%m%d");//원래는 이렇게있었다 이렇게 위에다가 선언안하고 여기 적으면 아래서 사용못다고 여기함수부분 다른 실행부분도  다 실행안된다 	                                                                                                                                               
                sDate = this.toFormatString(objDate,"Ymd"); //"Y"+"m"+"d"이렇게 적어도되고 앞처럼적어도되고  현재 또는 지정한 로케일, 지정한 형식의 문자열로 변환된 날짜를 반환합니다
                sYear = this.toFormatString(objDate,"Y");  //alert(sYear);     alert(sDate);
           this.applySpin.set_value(sYear);  //년도넣는곳에 지금의 년도를 미리 넣어둔다 
        }

        this.register_onclick = function(obj,e)
        {

        	if(this.dsHmJoinCandi.findRow("employSeq",sDate) == -1){
        	this.dsHmJoinCandi.addRow(); 
        	this.dsHmJoinCandi.setColumn(this.dsHmJoinCandi.rowposition, "employSeq", sDate);
        	this.employYearSpin.set_value(sYear); //년도넣는곳에 지금의 년도를 미리 넣어둔다 
            this.editZip00.set_value("");   this.editZip01.set_value(""); // /가 없으면 빈칸이 나와서if문적었고 데이터셋이 아니라 주소상세부분이 빌때는 빈칸나오면 전값이 남아있기 때문에 임의로 지워줘야 한다
        	              var employSeq = this.dsHmJoinCandi.getColumn(this.dsHmJoinCandi.rowposition,"employSeq");
        		
        				var argument = 'employSeq='+employSeq;
        				this.dsService.setColumn(1,"argument",argument);
        				//alert(argument);
        				this.gfnService("joinCandiScoreList"); 
        	}
        }

        this.remove_onclick = function(obj,e)
        {
        	this.dsHmJoinCandi.deleteRow(this.dsHmJoinCandi.rowposition); 
        	              var employSeq = this.dsHmJoinCandi.getColumn(this.dsHmJoinCandi.rowposition,"employSeq");
        		
        				var argument = 'employSeq='+employSeq;
        				this.dsService.setColumn(1,"argument",argument);
        				//alert(argument);
        				this.gfnService("joinCandiScoreList"); 
        }

        this.mngnt_onclick = function(obj,e)
        {
        		confirm("입사지원정보를 처리하시겠습니까?");
        	this.gfnService("mngntJoinCandi");
        }

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        }

        //점수행추가
        this.scoreAdd_onclick = function(obj,e)
        {
        	if(this.dsHmJoinCandiScore.getRowCount() == 0){
        	var takeNum = this.dsHmJoinCandi.getColumn(this.dsHmJoinCandi.rowposition,"takeNum");
        	if(takeNum == null){alert("응시번호를 입력하세요"); return;}
        	this.dsHmJoinCandiScore.addRow(); 
        	this.dsHmJoinCandiScore.setColumn(this.dsHmJoinCandiScore.rowposition, "employSeq", sDate);//날짜들어간다
        	this.dsHmJoinCandiScore.setColumn(this.dsHmJoinCandiScore.rowposition, "takeNum", takeNum);//응시번호들어간다
        	//var seq = this.dsHmJoinCandiScore.getColumn(this.dsHmJoinCandiScore.rowposition, "employSeq");//alert(seq);// //오늘날짜 들어갔는지 확인
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HM_ApplyInfoSystemForm_onload, this);
            this.Grid00.addEventHandler("oncellclick", this.Div01_Grid00_oncellclick, this);
            this.genderRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.vtrYnRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.disperYnRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.empNameEd.addEventHandler("oneditclick", this.empNameEd_oneditclick, this);
            this.employSeqEd.addEventHandler("oneditclick", this.Div01_Div02_astCodeEdt10_oneditclick, this);
            this.phoneEd.addEventHandler("oneditclick", this.Div01_Div02_astCodeEdt14_oneditclick, this);
            this.btn_joinCandiSch.addEventHandler("onclick", this.btn_joinCandiSch_onclick, this);
            this.btnClose.addEventHandler("onclick", this.btnClose_onclick, this);
            this.mngnt.addEventHandler("onclick", this.mngnt_onclick, this);
            this.remove.addEventHandler("onclick", this.remove_onclick, this);
            this.register.addEventHandler("onclick", this.register_onclick, this);
            this.scoreAdd.addEventHandler("onclick", this.scoreAdd_onclick, this);
            this.btn_findZip.addEventHandler("onclick", this.btn_findZip_onclick, this);
            this.majorPopup.addEventHandler("onclick", this.majorPopup_onclick, this);

        };

        this.loadIncludeScript("HM_ApplyinfoSystemForm.xfdl");

       
    };
}
)();
