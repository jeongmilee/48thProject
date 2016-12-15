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
                this.set_name("HA_AppmForm");
                this.set_classname("HA_AppmForm");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGP010", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP072", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAppmtEmpList</Col><Col id=\"URL\">his::hrs/appoint/findSerchList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsDept=dsDept</Col><Col id=\"argument\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findEmpList</Col><Col id=\"URL\">his::hrs/appoint/findEmpList.do</Col><Col id=\"outData\">dsHmEmp=gdsEmp</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">insertAppoint</Col><Col id=\"URL\">his::hrs/appoint/registerAppoint.do</Col><Col id=\"inData\">dsAppoint=dsAppoint:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">findAppmtList</Col><Col id=\"URL\">his::hrs/appoint/findAppmtList.do</Col><Col id=\"outData\">dsAppoint=dsAppoint</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">insertAppointDetail</Col><Col id=\"URL\">his::hrs/appoint/registerAppointDetail.do</Col><Col id=\"inData\">dsAppointDetail=dsAppointDetail:U</Col><Col id=\"outData\"/><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"serviceID\">modifyAppointDetail</Col><Col id=\"URL\">his::hrs/appoint/modifyAppointDetail.do</Col><Col id=\"inData\">dsAppointDetail=dsAppointDetail:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row><Row><Col id=\"URL\">his::hrs/appoint/modifyAppointEmp.do</Col><Col id=\"serviceID\">modifyAppointEmp</Col><Col id=\"inData\">dsAppointDetail=dsAppointDetail:U</Col><Col id=\"callbackFunc\">CallbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppointDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"appmtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"currDept\" type=\"STRING\" size=\"256\"/><Column id=\"currDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtPstep\" type=\"STRING\" size=\"256\"/><Column id=\"baseAppmtCd\" type=\"STRING\" size=\"256\"/><Column id=\"baseAppmtNm\" type=\"STRING\" size=\"256\"/><Column id=\"yyPstep\" type=\"STRING\" size=\"256\"/><Column id=\"pay\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobtt\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobcl\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobclNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobrk\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobrkNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"cheack\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">GP075</Col><Col id=\"dsName\">dsGP075</Col></Row><Row><Col id=\"code\">GP010</Col><Col id=\"dsName\">dsGP010</Col></Row><Row><Col id=\"code\">GP072</Col><Col id=\"dsName\">dsGP072</Col></Row><Row><Col id=\"code\">GP070</Col><Col id=\"dsName\">dsGP070</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP075", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGP070", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"bigValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppoint", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"appmtSeq\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDiv\" type=\"STRING\" size=\"256\"/><Column id=\"appmtSubject\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"transDept\" type=\"STRING\" size=\"256\"/><Column id=\"transDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"appmtyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"sectionManagerNm\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div07", "absolute", "25.6%", "512", null, "186", "0.4%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "25.6%", "268", null, "212", "0.48%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "25.6%", "39", null, "196", "0.48%", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Grid("emp_grid", "absolute", "326", "45", "913", "185", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsHmEmp");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"73\"/><Column size=\"71\"/><Column size=\"121\"/><Column size=\"99\"/><Column size=\"33\"/><Column size=\"64\"/><Column size=\"43\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"사원번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"사원명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"직종\"/><Cell col=\"3\" style=\"background:#cfd8dcff;\" text=\"직위\"/><Cell col=\"4\" style=\"background:#cfd8dcff;\" text=\"직급\"/><Cell col=\"5\" style=\"background:#cfd8dcff;\" text=\"호봉\"/><Cell col=\"6\" style=\"background:#cfd8dcff;\" text=\"입사일\"/><Cell col=\"7\" style=\"background:#cfd8dcff;\" text=\"재직상태\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:empNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:empNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:jobcl\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:jobtt\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:jobrk\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:payStep\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:hireDate\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:workStatus\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0.72%", "38", null, "660", "74.56%", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Edit("empno", "absolute", "182", "46", "69", "30", null, null, this);
            obj.set_taborder("6");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("empName", "absolute", "56", "46", "76", "30", null, null, this);
            obj.set_taborder("7");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "12", "46", "43", "30", null, null, this);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("dept_grid", "absolute", "12", "80", "300", "613", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsDept");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"320\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:deptNm\" treestartlevel=\"0\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("appo_grid", "absolute", "326", "273", "913", "199", null, null, this);
            obj.set_taborder("12");
            obj.set_binddataset("dsAppoint");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"92\"/><Column size=\"191\"/><Column size=\"53\"/><Column size=\"112\"/><Column size=\"24\"/><Column size=\"50\"/><Column size=\"108\"/><Column size=\"24\"/><Column size=\"154\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;\" text=\"사원번호\"/><Cell col=\"1\" style=\"background:#cfd8dcff;\" text=\"사원명\"/><Cell col=\"2\" style=\"background:#cfd8dcff;\" text=\"발령호수\"/><Cell col=\"3\" colspan=\"3\" style=\"background:#cfd8dcff;\" text=\"발신부서코드/명\"/><Cell col=\"6\" colspan=\"3\" style=\"background:#cfd8dcff;\" text=\"발령구분코드/명\"/><Cell col=\"9\" style=\"background:#cfd8dcff;\" text=\"발령적용일자\"/><Cell col=\"10\" style=\"background:#cfd8dcff;\" text=\"발령상태\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:empNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:empNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:appmtSeq\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:transDept\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:transDeptNm\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"align:center;controlbackground:@gradation URL('img::img_WF_Expand.png');\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:appmtDiv\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:appmtSubject\" expandsize=\"13\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align:center;selectbackground: ;controlbackground:@gradation URL('img::img_WF_Expand.png');\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:appmtDate\" suppress=\"0\" combodisplay=\"edit\" calendardisplay=\"edit\" calendardisplaynulltext=\"기입필수\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:appmtyn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("appo_grid00", "absolute", "326", "517", "913", "176", null, null, this);
            obj.set_taborder("13");
            obj.set_binddataset("dsAppointDetail");
            obj.set_autofittype("col");
            obj.getSetter("class").set("AreaGrid");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"63\"/><Column size=\"65\"/><Column size=\"127\"/><Column size=\"121\"/><Column size=\"23\"/><Column size=\"70\"/><Column size=\"52\"/><Column size=\"98\"/><Column size=\"130\"/><Column size=\"145\"/><Column size=\"25\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background:#cfd8dcff;\" editautoselect=\"false\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"사원명\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;color:black;\" text=\"발령직종명\"/><Cell col=\"3\" style=\"align:center;background:#cfd8dcff;\" text=\"발령직위\"/><Cell col=\"4\" colspan=\"2\" style=\"align:center;background:#cfd8dcff;color:black;\" text=\"발령직급\"/><Cell col=\"6\" style=\"align:center;background:#cfd8dcff;\" text=\"발령급여\"/><Cell col=\"7\" style=\"align:center;background:#cfd8dcff;\" text=\"발령호봉\"/><Cell col=\"8\" style=\"align:center;background:#cfd8dcff;\" text=\"발령근거\"/><Cell col=\"9\" style=\"align:center;background:#cfd8dcff;\" text=\"현부서\"/><Cell col=\"10\" colspan=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"발령부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:cheack\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:empNm\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:appmtJobclNm\" combodataset=\"dsGP070\" combocodecol=\"code\" combodatacol=\"bigValue\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:appmtJobtt\" combodataset=\"dsGP072\" combocodecol=\"code\" combodatacol=\"bigValue\" combodisplay=\"edit\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:appmtJobrkNm\"/><Cell col=\"5\" displaytype=\"button\" edittype=\"button\" style=\"align:center;controlbackground:@gradation URL('img::img_WF_Expand.png') no-repeat;\"/><Cell col=\"6\" displaytype=\"decoratetext\" edittype=\"normal\" style=\"align:center;\" text=\"bind:pay\" editdisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:appmtPstep\" combodataset=\"dsGP075\" combocodecol=\"code\" combodatacol=\"bigValue\" combodisplay=\"display\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"normal\" style=\"align:center;\" text=\"bind:baseAppmtNm\" editdisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"normal\" style=\"align:center;\" text=\"bind:currDeptNm\" editdisplay=\"edit\" calendardisplay=\"edit\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:appmtDeptNm\"/><Cell col=\"11\" displaytype=\"button\" edittype=\"button\" style=\"align:center;controlbackground:@gradation URL('img::img_WF_Expand.png');\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "0.68%", "701", null, "38", "0.39%", null, this);
            obj.set_taborder("18");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "44.63%", "708", null, "26", "47.46%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("dsGP075");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.set_visible("false");
            obj.style.set_bordertype("normal 0 0");

            obj = new Static("Static03", "absolute", "136", "46", "43", "30", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사번");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc00", "absolute", "0.72%", "6", null, "34", "74.56%", null, this);
            obj.set_taborder("36");
            obj.set_text("   부서목록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc01", "absolute", "25.6%", "6", null, "34", "0.48%", null, this);
            obj.set_taborder("37");
            obj.set_text("   사원목록");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc02", "absolute", "25.6%", "234", null, "34", "0.48%", null, this);
            obj.set_taborder("38");
            obj.set_text("   발령내역");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("regAttStc03", "absolute", "25.6%", "478", null, "34", "0.48%", null, this);
            obj.set_taborder("43");
            obj.set_text("   발령상세");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("left middle");
            obj.style.set_font("9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Button("addAppmt", "absolute", "82.64%", "238", null, "26", "10.72%", null, this);
            obj.set_taborder("44");
            obj.set_text("행추가");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("delAppmt", "absolute", "75.92%", "238", null, "27", "17.36%", null, this);
            obj.set_taborder("45");
            obj.set_text("행삭제");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn", "absolute", "254", "50", "58", "23", null, null, this);
            obj.set_taborder("47");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("delDetail", "absolute", "72.08%", "704", null, "30", "21.36%", null, this);
            obj.set_taborder("48");
            obj.set_text("상세삭제");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("appointBtn", "absolute", "78.8%", "704", null, "30", "14.56%", null, this);
            obj.set_taborder("49");
            obj.set_text("발령");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsertAppioint", "absolute", "85.52%", "704", null, "30", "7.84%", null, this);
            obj.set_taborder("50");
            obj.set_text("저장");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button42", "absolute", "92.48%", "704", null, "30", "0.88%", null, this);
            obj.set_taborder("51");
            obj.set_text("닫기");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("serchAppmt_btn", "absolute", "1181", "239", "58", "23", null, null, this);
            obj.set_taborder("52");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HA_AppmForm");
            		p.set_titletext("New Form");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Combo00","value","dsAppointDetail","appmtPstep");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HA_AppmForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HA_AppmForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 인사발령관리                                                    *
        *                                                                   *
        * @Path		    인사발령관리       	                  		    *
        * @Description  인사발령 조회,등록 화면          			    *
        * @Author		최창근 					                        *
        * 								                                    *
        * Created on    2016.5.31                          		       		*
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";

        this.appoGridROw;
        var empNo;
        var empNm;
        var copyAppmtNo;

        
        this.search_btn_onclick = function(obj,e)
        {
        	var empNo=this.empno.value;
        	var empNa=this.empName.value;
        	var argument = 'empNo='+empNo+' empNm='+empNa;
        	this.dsService.setColumn(1,"argument",argument);
        	var aa=	this.dsService.getColumn(1,"argument");  //alert(aa);//디비에 가져가는 argument값 3개 나타난다
        	this.gfnService("findEmpList");//2번째 그리드 불러주는거임
        }

        this.dept_grid_oncellclick = function(obj,e)
        {
        		var deptCd=this.dsDept.getColumn(e.row,"deptCd");
        	var argument = 'deptCd='+deptCd;
        	this.dsService.setColumn(1,"argument",argument);
        	this.gfnService("findEmpList");//2번째 그리드 불러주는거임
        }

        this.addAppmt_onclick = function(obj,e)
        {
        var dt;
        		var choiceEmp = this.dsHmEmp.rowposition; //alert(choiceEmp);        //행순번
         
        	if(choiceEmp==-1){   alert("사원선택후 행추가가 가능합니다."); //선택안하면 -1
        	}else{
        						var addAppmt=this.dsAppoint.addRow();
        						    copyAppmtNo=addAppmt;//차가된 행의 순번이 저장되고 아래에서 그 번호로 데이터 값을 저장한다
        						dt = this.gfnDate("yy-mm"); 
        						 trace("==============서버시간 ===========" + dt);//발령호수인데 이대로적자 뒤에가서 날짜받아온다
        					  	    empNo=this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNo");
        					  	    
        					  	    
        						    empNm=this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"empNm");
        						var deptnm=this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"deptNm");
        						var deptcd=this.dsHmEmp.getColumn(this.dsHmEmp.rowposition,"deptCd");
        						
        						this.dsAppoint.setColumn(addAppmt,"empNo",empNo);
        						this.dsAppoint.setColumn(addAppmt,"appmtSeq",dt);
        						this.dsAppoint.setColumn(addAppmt,"empNm",empNm);
        						this.dsAppoint.setColumn(addAppmt,"deptNm",deptnm);
        						this.dsAppoint.setColumn(addAppmt,"deptCd",deptcd);
        						this.dsAppoint.setColumn(addAppmt,"appmtyn","N");
        						
        						//3번쨰 그리드 발령상세에서 가져간다
        						var cheakcurrDept=this.dsAppoint.getColumn(e.row,"currDept");
        						alert(cheakcurrDept);
        	}
        }

        this.delAppmt_onclick = function(obj,e)
        {
        	this.dsAppoint.deleteRow(this.dsAppoint.rowposition);
        }

        this.serchAppmt_btn_onclick = function(obj,e)
        {
        	this.dsAppoint.clearData();
        	var appmtseq = this.appmtSeq.value;
        	
        	var argument = 'appmtSeq='+appmtseq;
        	this.dsService.setColumn(3,"argument",argument);
        	this.gfnService("findAppmtList");
        }

        this.appo_grid_onlbuttonup = function(obj,e)
        {
        		var clickGrid=e.col;
        	var appoGridRow=e.row;

        	if(clickGrid=='8'){//////////////////////////////////// 조회팝업뜬다 발령구분
        	
        	 var arr = this.gfnCodePopup("GP016");
        	 //this.dsAppoint.setColumn(appoGridRow,"appmtDiv",arr[0]);
        	 //this.dsAppoint.setColumn(appoGridRow,"appmtSubject",arr[1]);	 
        	 
        	}else if(clickGrid=='5'){/////////////////////////////// 조회팝업뜬다 발신부서코드
        	 var arr = this.gfnCodePopup("GP500","dept");
        	 trace(arr[0]+arr[1]);
        	 //this.dsAppoint.setColumn(appoGridRow,"transDept",arr[0]);
        	 //this.dsAppoint.setColumn(appoGridRow,"transDeptNm",arr[1]);
        	}
        }

        this.appo_grid_oncellclick = function(obj,e)
        {
        		var clickCol=e.row;
        	var clickCell=e.cell;

        	var appmtseq=this.dsAppoint.getColumn(clickCol,"appmtSeq");
        	var empnm=this.dsAppoint.getColumn(clickCol,"empNm");
        	var empno=this.dsAppoint.getColumn(clickCol,"empNo");
        	var cheakEmpNo=this.dsAppoint.getColumn(clickCol,"empNo");//발령정보그리드 내용 발령상세로가져오기
        	var deptnm=this.dsAppoint.getColumn(clickCol,"deptNm");
        	
        	var deptcd=this.dsAppoint.getColumn(clickCol,"deptCd");
        	var appmtYn=this.dsAppoint.getColumn(clickCol,"appmtyn");	
        	var cheakAppmtSubject=this.dsAppoint.getColumn(clickCol,"appmtSubject");//발령정보그리드 내용 발령상세로가져오기
        	var cheakAppmtDiv=this.dsAppoint.getColumn(clickCol,"appmtDiv");//발령정보그리드 내용 발령상세로가져오기
        	var findrow=this.dsAppointDetail.findRow("empNo",cheakEmpNo);   //바로해도되는데 왜??
             alert(findrow); //가 있으면 -1이 나온다 그거땜시 이거만듬 아래서 사용한다
        	 alert(deptnm);

        		if(clickCell==1){//////////사원명 클릭시
        			if(appmtYn=="N"){
        							if(findrow==-1){ var addRow=this.dsAppointDetail.addRow();
        											this.dsAppointDetail.setColumn(addRow,"appmtSeq",appmtseq);
        											this.dsAppointDetail.setColumn(addRow,"empNm",empnm);
        											this.dsAppointDetail.setColumn(addRow,"empNo",empno);
        											this.dsAppointDetail.setColumn(addRow,"currDeptNm",deptnm);
        											this.dsAppointDetail.setColumn(addRow,"currDept",deptcd);
        											this.dsAppointDetail.setColumn(addRow,"baseAppmtNm",cheakAppmtSubject);//위에서 만든거 넣음
        											this.dsAppointDetail.setColumn(addRow,"baseAppmtCd",cheakAppmtDiv);
        											alert(323);
        											}
        			}else{     alert("이미발령된 사원입니다.");
        			} }
        }

        

        //보낸값 받아서 해당칸에 세팅한다
        this.setCode = function(code,arrRtn,args){
        	// alert(arrRtn[0]);
        	 switch(code){
        // 		case "GP075":this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtPstep",arrRtn[1]);
        // 		break;
        			
        // 		case "GP010":this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"baseAppmtCd",arrRtn[0]);
        // 		this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"baseAppmtNm",arrRtn[1]);	
        // 		break;
        // 		
        // 		case "GP072":this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtJobtt",arrRtn[1]);
        // 		break;
        // 		
        // 		case "GP070": this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtJobcl",arrRtn[0]);
        // 	    this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtJobclNm",arrRtn[1]);
        // 		break;
        		
        		case "GP074":this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtJobrk",arrRtn[0]);
        					 this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtJobrkNm",arrRtn[1]);
        					 alert("asdf"+arrRtn[0]+arrRtn[1]);
        					 break;
        		
        		case "GP500":
        			switch(args){
        				case "deptDetail" : this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtDept",arrRtn[0]);
        									this.dsAppointDetail.setColumn(this.dsAppointDetail.rowposition,"appmtDeptNm",arrRtn[1]);
        									break;
        				case "dept" 	  : this.dsAppoint.setColumn(this.dsAppoint.rowposition,"transDept",arrRtn[0]);
        									this.dsAppoint.setColumn(this.dsAppoint.rowposition,"transDeptNm",arrRtn[1]);
        									break;
        			}
        			break;
          		case "GP016":this.dsAppoint.setColumn(this.dsAppoint.rowposition,"appmtDiv",arrRtn[0]);
        					 this.dsAppoint.setColumn(this.dsAppoint.rowposition,"appmtSubject",arrRtn[1]);	
        					 break;
        	 }
        	 
        }

        this.appo_grid00_oncellclick = function(obj,e)
        {
        		var clickcol=e.col;
        	var clickrow=e.row;
        	if(clickcol=='2'){//////////호봉 받는다
        //	 var arr = this.gfn_CodePopup("GP075");
        	// this.dsAppointDetail.setColumn(clickrow,"appmtPstep",arr[1]);
        	 
        // 	}else if(clickcol=='3'){//////////발령근거부서                            GP016 발령근거
        // 	 var arr = this.gfn_CodePopup("GP010");
        // 	 this.dsAppointDetail.setColumn(clickrow,"baseAppmtCd",arr[0]);
        //	 this.dsAppointDetail.setColumn(clickrow,"baseAppmtNm",arr[1]);	
        //	}else if(clickcol=='6'){//////////발령직위
        //	 var arr = this.gfn_CodePopup("GP072");
        //	 this.dsAppointDetail.setColumn(clickrow,"appmtJobtt",arr[1]);
        //	}else if(clickcol=='7'){/////////발령직종
        // 	 var arr = this.gfn_CodePopup("GP070");
        //	 this.dsAppointDetail.setColumn(clickrow,"appmtJobcl",arr[0]);
        //	 this.dsAppointDetail.setColumn(clickrow,"appmtJobclNm",arr[1]);
          	}else if(clickcol=='5'){/////////발령직급
          	 var arr = this.gfnCodePopup("GP074");
         	 //this.dsAppointDetail.setColumn(clickrow,"appmtJobrk",arr[0]);
         	// this.dsAppointDetail.setColumn(clickrow,"appmtJobrkNm",arr[1]);
          	}else if(clickcol=='11'){/////////발령부서
         	 var arr = this.gfnCodePopup("GP500","deptDetail");
        	//this. dsAppointDetail.setColumn(clickrow,"appmtDept",arr[0]);
        	// this.dsAppointDetail.setColumn(clickrow,"appmtDeptNm",arr[1]);
         
         
        	}
        }

        this.appo_grid00_onenterdown = function(obj,e)
        {
        	var col=e.col;
        	var clickrow=e.row;
        	var pay=this.dsAppointDetail.getColumn(clickrow,"pay");
        	var yypstep=pay*12;
        	if(col=='6'){
        	this.dsAppointDetail.setColumn(clickrow,"yyPstep",yypstep);
        		alert("연봉이 설정되었습니다."); // alert(yypstep);
        	}
        }

        this.Button09_onclick = function(obj,e)
        {
        }

        this.delDetail_onclick = function(obj,e)
        {
        	this.dsAppointDetail.deleteRow(this.dsAppointDetail.rowposition);
        }

        this.btnInsertAppioint_onclick = function(obj,e)
        {
        		for(i=0;i<this.dsAppoint.getRowCount();i++){
        		var appmtDiv=this.dsAppoint.getColumn(i,"appmtDiv");
        		var appmtDate=this.dsAppoint.getColumn(i,"appmtDate");
        		var transDept=this.dsAppoint.getColumn(i,"transDept");
        		if(appmtDiv==null){
        			return alert("발령구분은 반드시 입력하셔야 합니다.");
        		}else if(appmtDate==null){
        			return alert("발령일자는 반드시 입력하셔야 합니다.");
        		}else if(transDept==null){
        			return alert("발신부서는 반드시 입력하셔야 합니다.");
        		}	
        	}
        	this.gfnService("insertAppoint");
        }

        
        // 닫기 버튼 
        /*function Button42_onclick(obj:Button,  e:ClickEventInfo)
        {
        	close();
        }*/
        this.Button42_onclick = function(obj,e)
        {
        	this.close();
        }

        

        

        // 콜백
        this.CallbackFunc = function(trid,errcd,errmsg){
        	
        	if(trid =="findAppmtEmpList"){
        	
        		if(errcd == 1){
        			alert("부서목록 검색 성공");
        		}else{
        			alert("부서목록 검색 실패");
        		}
        	}else if(trid == "findEmpList"){
        		if(errcd == 1){
        			alert("사원목록이 검색 성공");
        			}else{
        			alert("사원목록이 검색 실패");
        		}		
        	}else if(trid == "findAppmtList"){
        		if(errcd == 1){
        			alert("발령정보 검색 성공");
        			}else{
        			alert("발령정보 검색 실패");
        		}
        	}else if(trid == "insertAppointDetail"){
        		if(errcd == 1){ 	                //alert(global.http.RecvHttpStr); //받을때  //SendHttpStr 이건 보낼때
        			alert("발령상세 저장");
        			}else{                           //    alert(global.http.RecvHttpStr);
        			alert("발령상세 저장 실패");
        		}
        	}else if(trid == "modifyAppointEmp"){
        		if(errcd == 1){
        			alert(" 되었습니다");
        			}else{
        			alert(" 않습니다");
        		}
        	}else if(trid == "insertAppoint"){
        		if(errcd == 1){
        			alert("발령 저장 성공");
        			}else{
        			alert("발령 실패");
        		}
        	}
        }

        this.HA_AppmForm_onload = function(obj,e)
        {
        	this.gfnBind();
        }

        
        this.HA_AppmForm_oninit = function(obj,e)
        {

        	
        	this.gfnService("findAppmtEmpList");
        	this.gfnService("findEmpList");
        }

        //발령버튼
        this.appointBtn_onclick = function(obj,e)
        {
        	
        	//var grEmpPms=application.gdsEmp.getColumn(0,"pms");
        	//var grEmpPaystep=application.gdsEmp.getColumn(0,"payStep");
        	var cheackNum=0;
        	var appmtseq;
        	var empname;
        // 	if(grEmpPms!="admin"|| grEmpPaystep<2){  alert("발령권한이 없습니다.");  return false;
        //	}else{
        			for(i=0;i<this.dsAppointDetail.getRowCount();i++){
        							var c = 1;
        							trace(c++);
        							var cheakAppmt=this.dsAppointDetail.getColumn(i,"cheack");
        							alert(cheakAppmt);
        							var appointRow=this.dsAppoint.findRow("empNo",this.dsAppointDetail.getColumn(i,"empNo")); 
        							this.dsAppoint.setColumn(appointRow,"appmtyn","Y");
        						if(cheakAppmt==1){        cheackNum++;       }     	
        						}
        		
        			var trueOrfalse=confirm("발령등록 하시겠습니까?");
        			if(trueOrfalse==true){    			    this.gfnService("insertAppoint");
        													this.gfnService("insertAppointDetail"); //alert(global.http.SendHttpStr); //SendHttpStr
        													this.gfnService("modifyAppointEmp");    //alert(global.http.SendHttpStr); //SendHttpStr
        			}else{      			 return false; }	
        //	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HA_AppmForm_onload, this);
            this.addEventHandler("oninit", this.HA_AppmForm_oninit, this);
            this.dept_grid.addEventHandler("oncellclick", this.dept_grid_oncellclick, this);
            this.appo_grid.addEventHandler("onlbuttonup", this.appo_grid_onlbuttonup, this);
            this.appo_grid.addEventHandler("oncellclick", this.appo_grid_oncellclick, this);
            this.appo_grid00.addEventHandler("oncellclick", this.appo_grid00_oncellclick, this);
            this.appo_grid00.addEventHandler("onenterdown", this.appo_grid00_onenterdown, this);
            this.regAttStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.regAttStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.addAppmt.addEventHandler("onclick", this.addAppmt_onclick, this);
            this.delAppmt.addEventHandler("onclick", this.delAppmt_onclick, this);
            this.search_btn.addEventHandler("onclick", this.search_btn_onclick, this);
            this.delDetail.addEventHandler("onclick", this.delDetail_onclick, this);
            this.appointBtn.addEventHandler("onclick", this.btnInsertAppioint_onclick, this);
            this.btnInsertAppioint.addEventHandler("onclick", this.btnInsertAppioint_onclick, this);
            this.Button42.addEventHandler("onclick", this.Button42_onclick, this);
            this.serchAppmt_btn.addEventHandler("onclick", this.serchAppmt_btn_onclick, this);

        };

        this.loadIncludeScript("HA_AppmForm.xfdl");

       
    };
}
)();
