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
                this.set_name("HM_FinalCandidateInfoSystemForm");
                this.set_classname("HM_FinalCandidateInfoSystemForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">FinSufcandiList</Col><Col id=\"URL\">his::hrs/emp/findFinSufcandiList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsHmFinSufcandi=dsHmFinSufcandi</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">mngntFinSufcandi</Col><Col id=\"URL\">his::hrs/emp/mngntFinSufcandi.do</Col><Col id=\"inData\">dsHmFinSufcandi=dsHmFinSufcandi:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHmFinSufcandi", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"workPlace\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"pstep\" type=\"STRING\" size=\"256\"/><Column id=\"vtrYn\" type=\"STRING\" size=\"256\"/><Column id=\"disperYn\" type=\"STRING\" size=\"256\"/><Column id=\"fornerYn\" type=\"STRING\" size=\"256\"/><Column id=\"resCty\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"takeNum\" type=\"STRING\" size=\"256\"/><Column id=\"employSeq\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0.72%", "717", null, "38", "0.88%", null, this);
            obj.set_taborder("2");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0.72%", "60", null, "654", "0.8%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "11", "63", "1225", "518", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsHmFinSufcandi");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"83\"/><Column size=\"146\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#eceff1ff;\" text=\"No\"/><Cell col=\"1\" style=\"background:#eceff1ff;\" text=\"신규사원번호\"/><Cell col=\"2\" style=\"background:#eceff1ff;\" text=\"사원명\"/><Cell col=\"3\" style=\"background:#eceff1ff;\" text=\"고용구분\"/><Cell col=\"4\" style=\"background:#eceff1ff;\" text=\"주민등록번호\"/><Cell col=\"5\" style=\"background:#eceff1ff;\" text=\"성별\"/><Cell col=\"6\" style=\"background:#eceff1ff;\" text=\"생년월일\"/><Cell col=\"7\" style=\"background:#eceff1ff;\" text=\"휴대번호\"/><Cell col=\"8\" style=\"background:#eceff1ff;\" text=\"근무지\"/><Cell col=\"9\" style=\"background:#eceff1ff;\" text=\"호봉\"/><Cell col=\"10\" style=\"background:#eceff1ff;\" text=\"거주국\"/><Cell col=\"11\" style=\"background:#eceff1ff;\" text=\"상태\"/><Cell col=\"12\" style=\"background:#eceff1ff;\" text=\"응시번호\"/></Band><Band id=\"body\"><Cell style=\"background: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:empNo\"/><Cell col=\"2\" edittype=\"normal\" style=\"background: ;\" text=\"bind:empNm\"/><Cell col=\"3\" edittype=\"normal\" style=\"background: ;\" text=\"bind:hireDiv\"/><Cell col=\"4\" edittype=\"normal\" style=\"background: ;\" text=\"bind:rrn\"/><Cell col=\"5\" edittype=\"normal\" style=\"background: ;\" text=\"bind:gender\"/><Cell col=\"6\" edittype=\"normal\" style=\"background: ;\" text=\"bind:birthday\"/><Cell col=\"7\" edittype=\"normal\" style=\"background: ;\" text=\"bind:phone\"/><Cell col=\"8\" edittype=\"normal\" style=\"background: ;\" text=\"bind:workPlace\"/><Cell col=\"9\" edittype=\"normal\" style=\"background: ;\" text=\"bind:pstep\"/><Cell col=\"10\" edittype=\"normal\" style=\"background: ;\" text=\"bind:resCty\"/><Cell col=\"11\" edittype=\"normal\" style=\"background: ;\" text=\"bind:sts\"/><Cell col=\"12\" edittype=\"none\" style=\"background: ;\" expr=\"bind:takeNum\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("07Stc", "absolute", "507", "679", "100", "30", null, null, this);
            obj.set_taborder("9");
            obj.set_text("성  별");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("10Stc", "absolute", "735", "679", "100", "30", null, null, this);
            obj.set_taborder("10");
            obj.set_text("근무지 ");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("08Stc", "absolute", "256", "615", "100", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("생년월일");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("04Stc", "absolute", "507", "583", "100", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("고용구분");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empNameEd", "absolute", "119", "583", "115", "30", null, null, this);
            obj.set_taborder("13");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("06Stc", "absolute", "256", "583", "100", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_text("주민등록번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("genderRadio", "absolute", "615", "679", "86", "30", null, null, this);
            this.addChild(obj.name, obj);
            var genderRadio_innerdataset = new Dataset("genderRadio_innerdataset", this.genderRadio);
            genderRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(genderRadio_innerdataset);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");

            obj = new Static("11Stc", "absolute", "734", "583", "101", "30", null, null, this);
            obj.set_taborder("16");
            obj.set_text("직 급");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("13Stc", "absolute", "1008", "647", "100", "30", null, null, this);
            obj.set_taborder("17");
            obj.set_text("장애여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("14Stc", "absolute", "1008", "615", "100", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_text("보훈여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("02Stc", "absolute", "16", "615", "100", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("신규 사원번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("05Stc", "absolute", "507", "647", "100", "30", null, null, this);
            obj.set_taborder("20");
            obj.set_text("휴대전화번호");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("03Stc", "absolute", "16", "583", "100", "30", null, null, this);
            obj.set_taborder("21");
            obj.set_text("성 명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("empNoEd", "absolute", "119", "615", "115", "30", null, null, this);
            obj.set_taborder("22");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("17Stc", "absolute", "1008", "679", "100", "30", null, null, this);
            obj.set_taborder("23");
            obj.set_text("외국인여부");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Radio("disperYnRadio", "absolute", "1111", "647", "115", "30", null, null, this);
            this.addChild(obj.name, obj);
            var disperYnRadio_innerdataset = new Dataset("disperYnRadio_innerdataset", this.disperYnRadio);
            disperYnRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(disperYnRadio_innerdataset);
            obj.set_taborder("24");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaRadio");

            obj = new Radio("vtrYnRadio", "absolute", "1111", "615", "114", "30", null, null, this);
            this.addChild(obj.name, obj);
            var vtrYnRadio_innerdataset = new Dataset("vtrYnRadio_innerdataset", this.vtrYnRadio);
            vtrYnRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(vtrYnRadio_innerdataset);
            obj.set_taborder("25");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaRadio");

            obj = new Calendar("birthdayCal", "absolute", "359", "615", "126", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");

            obj = new MaskEdit("empRrnEd", "absolute", "359", "583", "126", "30", null, null, this);
            obj.set_taborder("27");
            obj.set_type("string");
            obj.set_mask("######'-'#######");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaMaskEdt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("phoneMaskEd", "absolute", "610", "647", "105", "30", null, null, this);
            obj.set_taborder("28");
            obj.set_type("string");
            obj.set_mask("###'-'####'-'####");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaMaskEdt");
            this.addChild(obj.name, obj);

            obj = new Radio("disperYnRadio00", "absolute", "1111", "679", "114", "30", null, null, this);
            this.addChild(obj.name, obj);
            var disperYnRadio00_innerdataset = new Dataset("disperYnRadio00_innerdataset", this.disperYnRadio00);
            disperYnRadio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">아니요</Col></Row></Rows>");
            obj.set_innerdataset(disperYnRadio00_innerdataset);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_font("9 Dotum");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaRadio");

            obj = new Static("18Stc", "absolute", "1008", "583", "100", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("상태");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("hireDivCombo", "absolute", "1111", "583", "110", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo_innerdataset = new Dataset("hireDivCombo_innerdataset", this.hireDivCombo);
            hireDivCombo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">불합격</Col><Col id=\"datacolumn\">불합격</Col></Row><Row><Col id=\"codecolumn\">1차합격</Col><Col id=\"datacolumn\">1차합격</Col></Row><Row><Col id=\"codecolumn\">발령</Col><Col id=\"datacolumn\">발령</Col></Row><Row><Col id=\"codecolumn\">최종합격</Col><Col id=\"datacolumn\">최종합격</Col></Row><Row><Col id=\"codecolumn\">저장</Col><Col id=\"datacolumn\">저장</Col></Row><Row><Col id=\"codecolumn\">2차합격</Col><Col id=\"datacolumn\">2차합격</Col></Row><Row><Col id=\"codecolumn\">응시중</Col><Col id=\"datacolumn\">응시중</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCal");

            obj = new Combo("hireDivCombo00", "absolute", "610", "583", "105", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo00_innerdataset = new Dataset("hireDivCombo00_innerdataset", this.hireDivCombo00);
            hireDivCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">정규직</Col><Col id=\"datacolumn\">정규직</Col></Row><Row><Col id=\"codecolumn\">비정규직</Col><Col id=\"datacolumn\">비정규직</Col></Row><Row><Col id=\"codecolumn\">별정직</Col><Col id=\"datacolumn\">별정직</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo00_innerdataset);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCal");

            obj = new Static("15Stc", "absolute", "507", "615", "100", "30", null, null, this);
            obj.set_taborder("33");
            obj.set_text("호봉");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Combo("hireDivCombo01", "absolute", "610", "615", "105", "30", null, null, this);
            this.addChild(obj.name, obj);
            var hireDivCombo01_innerdataset = new Dataset("hireDivCombo01_innerdataset", this.hireDivCombo01);
            hireDivCombo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1호봉</Col><Col id=\"datacolumn\">1호봉</Col></Row><Row><Col id=\"codecolumn\">2호봉</Col><Col id=\"datacolumn\">2호봉</Col></Row><Row><Col id=\"codecolumn\">3호봉</Col><Col id=\"datacolumn\">3호봉</Col></Row><Row><Col id=\"codecolumn\">4호봉</Col><Col id=\"datacolumn\">4호봉</Col></Row><Row><Col id=\"codecolumn\">5호봉</Col><Col id=\"datacolumn\">5호봉</Col></Row><Row><Col id=\"codecolumn\">6호봉</Col><Col id=\"datacolumn\">6호봉</Col></Row><Row><Col id=\"codecolumn\">7호봉</Col><Col id=\"datacolumn\">7호봉</Col></Row><Row><Col id=\"codecolumn\">8호봉</Col><Col id=\"datacolumn\">8호봉</Col></Row><Row><Col id=\"codecolumn\">9호봉</Col><Col id=\"datacolumn\">9호봉</Col></Row><Row><Col id=\"codecolumn\">10호봉</Col><Col id=\"datacolumn\">10호봉</Col></Row></Rows>");
            obj.set_innerdataset(hireDivCombo01_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaCal");

            obj = new Static("16Stc", "absolute", "735", "615", "100", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_text("거주국");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("20Stc", "absolute", "735", "647", "100", "30", null, null, this);
            obj.set_taborder("36");
            obj.set_text("부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("10Stc00", "absolute", "16", "647", "101", "62", null, null, this);
            obj.set_taborder("37");
            obj.set_text("주  소");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("workPlaceEd", "absolute", "838", "679", "119", "30", null, null, this);
            obj.set_taborder("40");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("jobrkEd", "absolute", "838", "583", "119", "30", null, null, this);
            obj.set_taborder("41");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("nantEd", "absolute", "838", "615", "119", "30", null, null, this);
            obj.set_taborder("43");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("deptNmEd", "absolute", "838", "647", "119", "30", null, null, this);
            obj.set_taborder("45");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("editAddrDetail", "absolute", "120", "679", "365", "30", null, null, this);
            obj.set_taborder("47");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("editAddr", "absolute", "208", "647", "243", "30", null, null, this);
            obj.set_taborder("48");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("editZipCode", "absolute", "9.6%", "647", null, "28", "83.68%", null, this);
            obj.set_taborder("61");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn03", "absolute", "959", "678", "30", "30", null, null, this);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "959", "645", "30", "30", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn01", "absolute", "959", "614", "30", "30", null, null, this);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn02", "absolute", "959", "582", "30", "30", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.84%", "7", null, "41", "85.76%", null, this);
            obj.set_taborder("67");
            obj.set_text("최종합격자관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("middle");
            obj.style.set_font("antialias 16 arial");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchEmp", "absolute", "1178", "21", "58", "23", null, null, this);
            obj.set_taborder("68");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("register01", "absolute", "976", "723", "62", "25", null, null, this);
            obj.set_taborder("69");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("remove", "absolute", "1040", "723", "62", "25", null, null, this);
            obj.set_taborder("70");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("mngnt", "absolute", "1104", "723", "62", "25", null, null, this);
            obj.set_taborder("71");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00", "absolute", "1167", "723", "62", "25", null, null, this);
            obj.set_taborder("72");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn10", "absolute", "455", "646", "30", "30", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 654, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div01");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HM_FinalCandidateInfoSystemForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","empNameEd","value","dsHmFinSufcandi","empNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","genderRadio","value","dsHmFinSufcandi","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","empNoEd","value","dsHmFinSufcandi","empNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","disperYnRadio","value","dsHmFinSufcandi","disperYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","vtrYnRadio","value","dsHmFinSufcandi","vtrYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","birthdayCal","value","dsHmFinSufcandi","birthday");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","empRrnEd","value","dsHmFinSufcandi","rrn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","phoneMaskEd","value","dsHmFinSufcandi","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","disperYnRadio00","value","dsHmFinSufcandi","fornerYn");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","hireDivCombo","value","dsHmFinSufcandi","sts");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","hireDivCombo","text","dsHmFinSufcandi","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","hireDivCombo00","value","dsHmFinSufcandi","hireDiv");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","hireDivCombo01","value","dsHmFinSufcandi","pstep");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","workPlaceEd","value","dsHmFinSufcandi","workPlace");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","jobrkEd","value","dsHmFinSufcandi","jobrk");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","nantEd","value","dsHmFinSufcandi","resCty");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","deptNmEd","value","dsHmFinSufcandi","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","editAddrDetail","value","dsHmFinSufcandi","detailAddr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","editAddr","value","dsHmFinSufcandi","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","editZipCode","value","dsHmFinSufcandi","zipCd");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HM_FinalCandidateInfoSystemForm.xfdl", "scripts::commonTran.xjs");
        this.addIncludeScript("HM_FinalCandidateInfoSystemForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HM_FinalCandidateInfoSystemForm.xfdl", "scripts::commonUtil.xjs");
        this.addIncludeScript("HM_FinalCandidateInfoSystemForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HM_FinalCandidateInfoSystemForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 최종합격자관리                                                  *
        *                                                                   *
        * @Path		    최종합격자정보관리        	                    *
        * @Description  최종합격자정보 조회,등록,수정,삭제 화면        *
        * @Author		최창근   					                        *
        * 								                                    *
        * Created on 2016. 6. 7.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonTran.xjs";
        //include "scripts::commonScripts.xjs";  
        //include "scripts::commonUtil.xjs";
        //include "scripts::commonScripts.xjs";  

        
        // 최종합격자정보 조회
        this.btn_searchEmp_onclick = function(obj,e)
        { 	confirm("합격자정보를 조회하하시겠습니까?");
        	this.gfnService("FinSufcandiList");}
        	
        	
        	
        // 최종합격자정보 그리드 행추가
        this.btn_insertEmp_onclick = function(obj,e)

        { this.dsHmFinSufcandi.addRow(); }

        

        // 최종합격자정보 그리드 행삭제
        this.btn_deleteEmp_onclick = function(obj,e)
        { this.dsHmFinSufcandi.deleteRow( this.dsHmFinSufcandi.rowposition); }

        

        // 최종합격자정보 일괄처리
        this.btn_saveAll_onclick = function(obj,e)
        {       confirm("최종합격정보를 처리하하시겠습니까?");
        		this.gfnService("mngntFinSufcandi");}

        

        // 폼 닫기
        this.exitFxAstBtn_onclick = function(obj,e)
        { this.close();}

        
         
        // 직급 검색버튼
        this.btn_empDeptPopup00_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP074"/*,"1"*/);// 뒤에칸에는 시퀀스가 가야하는데 여기선 안쓰니 비워도되는듯
             this.setCode = function(code,arrRtn){this.jobrkEd.set_value(arrRtn[1]);}//이부분 안되면 뒤에 팝업안뜬다 안뜰땐 뒷부분 다 주석하고해보자
        }

        
        // 거주국가 검색버튼
        this.btn_empDeptPopup01_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP099"/*,"1"*/); 
             this.setCode = function(code,arrRtn){this.nantEd.set_value(arrRtn[1]);} 
        }

        // 부서 검색버튼
        this.btn_empDeptPopup02_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP500"/*,"1"*/); 
             this.setCode = function(code,arrRtn){this.deptNmEd.set_value(arrRtn[1]);} 
        }

        
        // 근무지 검색버튼
        this.btn_empMajorPopup_onclick = function(obj,e)
        {	 var arr = this.gfnCodePopup("GP121"/*,"1"*/); 
             this.setCode = function(code,arrRtn){this.workPlaceEd.set_value(arrRtn[1]);} 
        }
         
         
         
        // 주소 검색버튼
        this.div_empInfo2_btn_findZip_onclick = function(obj,e)
        { var arr = this.gfnPostPopup(); 
           this.setPost = function(zipCode,addr,addrDetail){    
        									   this.editZipCode.set_value(zipCode); 
        									   this.editAddr.set_value(addr); 
        									   this.editAddrDetail.set_value(addrDetail);}
        }

        
         
        // 콜백
         this.CallbackFunc = function(trid,errcd,errmsg){
        	
        	if(trid =="FinSufcandiList"){ 
        		if(errcd == 1){       alert("최종합격자정보가 조회되었습니다");
        		}else{                alert("최종합격자정보가 존재하지 않습니다");
        		}
        		
        	}else if(trid == "mngntFinSufcandi"){
        		if(errcd == 1){       alert("최종합격자정보가 일괄처리 되었습니다");
        							this.reload();
        		}else{                alert("변경된 내용을 처리하지 못했습니다");
        		} } }

        

         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.empNameEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.genderRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.empNoEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.disperYnRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.vtrYnRadio.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.disperYnRadio00.addEventHandler("onitemclick", this.Div01_Div02_Radio00_onitemclick, this);
            this.workPlaceEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.nantEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.deptNmEd.addEventHandler("onkeyup", this.durationEdt_onkeyup, this);
            this.DelBtn03.addEventHandler("onclick", this.btn_empMajorPopup_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.btn_empDeptPopup02_onclick, this);
            this.DelBtn01.addEventHandler("onclick", this.btn_empDeptPopup01_onclick, this);
            this.DelBtn02.addEventHandler("onclick", this.btn_empDeptPopup00_onclick, this);
            this.btn_searchEmp.addEventHandler("onclick", this.btn_searchEmp_onclick, this);
            this.register01.addEventHandler("onclick", this.btn_insertEmp_onclick, this);
            this.remove.addEventHandler("onclick", this.btn_deleteEmp_onclick, this);
            this.mngnt.addEventHandler("onclick", this.btn_saveAll_onclick, this);
            this.btnClose00.addEventHandler("onclick", this.exitFxAstBtn_onclick, this);
            this.DelBtn10.addEventHandler("onclick", this.div_empInfo2_btn_findZip_onclick, this);

        };

        this.loadIncludeScript("HM_FinalCandidateInfoSystemForm.xfdl");

       
    };
}
)();
