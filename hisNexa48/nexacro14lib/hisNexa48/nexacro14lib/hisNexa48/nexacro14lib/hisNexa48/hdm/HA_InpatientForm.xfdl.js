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
                this.set_name("WH_JwjSearchForm");
                this.set_classname("WH_JwjSearchForm");
                this.set_titletext("WH_JwjSearchForm");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">empInfo</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row><Row><Col id=\"serviceID\">findJwjList</Col><Col id=\"URL\">his::won/base/findJwjList.do</Col><Col id=\"outData\">dsJwj=dsJwj</Col><Col id=\"callbackFunc\">gfnCallbackFunc</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"dsName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">SC070</Col><Col id=\"dsName\">dsWard</Col></Row><Row><Col id=\"code\">GP080</Col><Col id=\"dsName\">dsTrmtDept</Col></Row><Row><Col id=\"dsName\">dsGA043</Col><Col id=\"code\">GA043</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWard", this);
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

            obj = new Dataset("dsTrmtDept", this);
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

            obj = new Dataset("gdsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsJwj", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"hosptlzDate\" type=\"STRING\" size=\"256\"/><Column id=\"jwDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"dscgDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0%", "0", "1200", "60", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar4.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.8%", "-4", null, "60", "81.68%", null, this);
            obj.set_taborder("1");
            obj.set_text("재원환자조회");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("baseDiv", "absolute", "2.24%", "64", null, "91", "1.68%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#edececff");
            obj.style.set_border("1 solid lightsteelblue");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("patStc", "absolute", "3.28%", "75", null, "28", "87.84%", null, this);
            obj.set_taborder("3");
            obj.set_text("환자등록번호");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("wardCombo", "absolute", "45.84%", "79", null, "28", "44.72%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_innerdataset("@dsWard");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.style.set_background("transparent");

            obj = new Edit("patNmEd", "absolute", "24.48%", "78", null, "28", "66.32%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("searchJwjBtn", "absolute", "1129", "113", "74", "32", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("searchChangeSalBtn");
            this.addChild(obj.name, obj);

            obj = new Static("deptStc", "absolute", "60.8%", "116", null, "28", "30.48%", null, this);
            obj.set_taborder("8");
            obj.set_text("담당의사");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("trmtStc", "absolute", "36.48%", "116", null, "28", "54.8%", null, this);
            obj.set_taborder("9");
            obj.set_text("진료과");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("hospStc", "absolute", "3.28%", "115", null, "28", "87.84%", null, this);
            obj.set_taborder("10");
            obj.set_text("입원일자");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "12.56%", "76", null, "28", "78.24%", null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("patBtn", "absolute", "272", "76", "32", "32", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("patBtn");
            obj.style.set_background("@gradation URL('img::miniSearchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("patBtn");
            this.addChild(obj.name, obj);

            obj = new Static("wardStc", "absolute", "36.32%", "79", null, "28", "54.96%", null, this);
            obj.set_taborder("14");
            obj.set_text("병동");
            obj.style.set_background("antiquewhite");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("respDoctNmCombo", "absolute", "70.32%", "116", null, "28", "18.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@gdsEmp");
            obj.set_codecolumn("empNo");
            obj.set_datacolumn("empNm");
            obj.style.set_background("transparent");

            obj = new Combo("trmtDeptNmCombo", "absolute", "45.84%", "116", null, "28", "43.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@dsTrmtDept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("bigValue");
            obj.style.set_background("transparent");

            obj = new Calendar("hosptlzStartDateCal", "absolute", "12.56%", "115", null, "30", "77.6%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Calendar("hosptlzEndDateCal", "absolute", "24.08%", "115", null, "30", "66.08%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");

            obj = new Static("Stc", "absolute", "22.88%", "116", null, "28", "75.36%", null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.style.set_border("1 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Grid("expTgmGrid", "absolute", "2.24%", "161", null, "575", "1.68%", null, this);
            obj.set_taborder("20");
            obj.set_binddataset("dsJwj");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"환자등록번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"성별\"/><Cell col=\"5\" text=\"나이\"/><Cell col=\"6\" text=\"진료과\"/><Cell col=\"7\" text=\"담당의사\"/><Cell col=\"8\" text=\"병동\"/><Cell col=\"9\" text=\"병실\"/><Cell col=\"10\" text=\"입원일\"/><Cell col=\"11\" text=\"퇴원일\"/><Cell col=\"12\" text=\"주소\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:patNo\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" edittype=\"mask\" text=\"bind:rrn1\" mask=\"##/##/##\"/><Cell col=\"4\" text=\"bind:gender\"/><Cell col=\"5\" text=\"bind:age\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:trmtDept\" combodataset=\"dsTrmtDept\" combocodecol=\"code\" combodatacol=\"bigValue\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:trmtDoct\" combodataset=\"gdsEmp\" combocodecol=\"empNo\" combodatacol=\"empNm\"/><Cell col=\"8\" text=\"bind:ward\"/><Cell col=\"9\" text=\"bind:hroom\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:hosptlzDate\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:dscgDate\"/><Cell col=\"12\" text=\"bind:addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WH_JwjSearchForm");
            		p.set_titletext("WH_JwjSearchForm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HA_InpatientForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("HA_InpatientForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("HA_InpatientForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 원무 재원환자조회 관리                           				*
        *                                                                   *
        * @Path		    재원환자조회 관리      							*
        * @Description  조건검색으로 현재 재원환자 현황을 파악한다.	*
        * @Author		김민욱   					                        *
        * 								                                    *
        * Created on 2016. 11.  29.                             		        *
        *								                                    *
        ********************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";

        var deptCd;

        this.WH_JwjSearchForm_onload = function(obj,e){
        	this.gfnBind();
        	this.gfnService("empInfo", false);
        	this.gdsEmp.filter(this.gfnLike("jobrk", "의사"));
        }

        //환자등록번호조회
        this.patBtn_onclick = function(obj,e){
        	this.gfnPatPopup();
        	this.setPatInfo = function(arrRtn){ 
        		this.patNoEd.set_value(arrRtn[0]);  
        		this.patNmEd.set_value(arrRtn[1]);  									
        	}
        }

        //진료과별 의사 필터링
        this.trmtDeptNmCombo_oncloseup = function(obj,e){
        	deptCd = this.trmtDeptNmCombo.value;
        	this.gdsEmp.filter(this.gfnLike("deptCd", deptCd));
        }

        //재원환자조회
        this.searchJwjBtn_onclick = function(obj,e){
        	var patNo = this.patNoEd.value;              
        	var patNm = this.patNmEd.value;              
        	var ward = this.wardCombo.value;             
        	var start = this.hosptlzStartDateCal.value;  
        	var end =  this.hosptlzEndDateCal.value;    
        	var respDoctNm = this.respDoctNmCombo.value;  
        	
        	if(patNo == null){
        		alert("환자등록번호 선택 후 조회하십시오.");		
        	}else{	
        		var argument = "patNo='"+patNo+"' patNm='"+patNm+"' ward='"+ward+"' deptCd='"+deptCd
        						+"' start='"+start+"' end='"+end+"' respDoctNm='"+respDoctNm+"'";

        		var row = this.dsService.findRow('serviceID' , "findJwjList");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("findJwjList",false);   
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.gdsEmp.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            this.addEventHandler("onload", this.WH_JwjSearchForm_onload, this);
            this.searchJwjBtn.addEventHandler("onclick", this.searchJwjBtn_onclick, this);
            this.patBtn.addEventHandler("onclick", this.patBtn_onclick, this);
            this.trmtDeptNmCombo.addEventHandler("oncloseup", this.trmtDeptNmCombo_oncloseup, this);

        };

        this.loadIncludeScript("HA_InpatientForm.xfdl");

       
    };
}
)();
