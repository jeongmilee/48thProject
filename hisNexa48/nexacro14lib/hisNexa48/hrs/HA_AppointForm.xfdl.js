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
                this.set_name("HA_AppointForm");
                this.set_classname("HA_AppointForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1280,768);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAppointInfo</Col><Col id=\"URL\">his::hrs/appoint/findAppointInfo.do</Col><Col id=\"outData\">dsAppointInfo=dsAppointInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUseYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAppointInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtSubject\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"appmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobclNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobrkNm\" type=\"STRING\" size=\"256\"/><Column id=\"appmtJobtt\" type=\"STRING\" size=\"256\"/><Column id=\"appmtPstep\" type=\"STRING\" size=\"256\"/><Column id=\"yyPstep\" type=\"STRING\" size=\"256\"/><Column id=\"pay\" type=\"STRING\" size=\"256\"/><Column id=\"reason\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"baseAppmtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div02", "absolute", "0.68%", "40", null, "657", "0.88%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "50", "44", "86", "30", null, null, this);
            obj.set_taborder("1");
            obj.set_text("부서");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "287", "44", "86", "30", null, null, this);
            obj.set_taborder("2");
            obj.set_text("사번");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "375", "44", "133", "30", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "521", "44", "86", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "609", "44", "144", "30", null, null, this);
            obj.set_taborder("5");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "767", "44", "86", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("발령기간");
            obj.style.set_background("#b0bec5ff");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("black");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "138", "44", "133", "30", null, null, this);
            obj.set_taborder("7");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "18", "80", "1241", "612", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsAppointInfo");
            obj.set_autofittype("col");
            obj.style.set_bordertype("normal 0 0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"align:center;background:#cfd8dcff;\" text=\"사원번호\"/><Cell col=\"1\" style=\"align:center;background:#cfd8dcff;\" text=\"사원명\"/><Cell col=\"2\" style=\"align:center;background:#cfd8dcff;\" text=\"발령구분\"/><Cell col=\"3\" style=\"align:center;background:#cfd8dcff;\" text=\"발령일자\"/><Cell col=\"4\" style=\"align:center;background:#cfd8dcff;\" text=\"발령부서\"/><Cell col=\"5\" style=\"align:center;background:#cfd8dcff;\" text=\"발령직종\"/><Cell col=\"6\" style=\"align:center;background:#cfd8dcff;\" text=\"발령직급\"/><Cell col=\"7\" style=\"align:center;background:#cfd8dcff;\" text=\"발령직위\"/><Cell col=\"8\" style=\"align:center;background:#cfd8dcff;\" text=\"발령호봉\"/><Cell col=\"9\" style=\"align:center;background:#cfd8dcff;\" text=\"연봉\"/><Cell col=\"10\" style=\"align:center;background:#cfd8dcff;\" text=\"급여\"/><Cell col=\"11\" style=\"align:center;background:#cfd8dcff;\" text=\"사유\"/><Cell col=\"12\" style=\"align:center;background:#cfd8dcff;\" text=\"비고\"/><Cell col=\"13\" style=\"align:center;background:#cfd8dcff;\" text=\"발령근거\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:empNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:empNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:appmtSubject\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:appmtDate\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:appmtDeptNm\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:appmtJobclNm\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:appmtJobrkNm\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:appmtJobtt\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:appmtPstep\"/><Cell col=\"9\" style=\"align:center;\" text=\"bind:yyPstep\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:pay\"/><Cell col=\"11\" style=\"align:center;\" text=\"bind:reason\"/><Cell col=\"12\" style=\"align:center;\" text=\"bind:note\"/><Cell col=\"13\" style=\"align:center;\" text=\"bind:baseAppmtNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "855", "44", "138", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");

            obj = new Calendar("Calendar01", "absolute", "1017", "45", "138", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            obj.style.set_border("1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");

            obj = new Static("Static04", "absolute", "956", "46", "39", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("   ~");
            obj.style.set_color("#46463dff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("titleStc", "absolute", "34", "7", "190", "26", null, null, this);
            obj.set_taborder("14");
            obj.set_text("발령상세조회");
            obj.style.set_color("yellowgreen");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 14 돋움");
            obj.getSetter("class").set("TStc");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0.68%", "703", null, "40", "0.78%", null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 solid black");
            obj.style.set_bordertype("normal 0 0");
            obj.set_cssclass("TStc");
            this.addChild(obj.name, obj);

            obj = new Button("serchAppmt_btn", "absolute", "1160", "48", "58", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.style.set_background("#455a64ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1260, 657, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div01");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HA_AppointForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HA_AppointForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HA_AppointForm.xfdl", function() {
        /********************************************************************
        *                                                                   *
        * 발령내역관리                                                    *
        *                                                                   *
        * @Path		    발령내역관리        	                            *
        * @Description  발령내역 조회 화면                                *
        * @Author		김재현  					                        *
        * 								                                    *
        * Created on 2016. 2. 21.                             		        *
        *								                                    *
        ********************************************************************/
        //include "scripts::commonScripts.xjs";

         
        /*function serchAppmt_btn_onclick(obj:Button,  e:ClickEventInfo)
        {
        	var dept=Edit03.value;
        	var empno=Edit02.value;
        	var empnm=Edit00.value;
        	var startDay=Calendar00.value;
        	var endDay=Calendar01.value;
        	
        	alert(dept);
        	alert(empnm);
        	var argument = 'deptCode='+dept+' empNo='+empno+' empNm='+empnm+' startDay='+startDay+' endDay='+endDay;
        	dsService.setColumn(0,"argument",argument);
        	gfnService("findAppointInfo");
        }*/
        this.serchAppmt_btn_onclick = function(obj,e)
        {
        	var dept=this.Edit03.value;
        	var empno=this.Edit02.value;
        	var empnm=this.Edit00.value;
        	var startDay=this.Calendar00.value;
        	var endDay=this.Calendar01.value;
        	
        	//alert(dept);
        	//alert(empnm);
        	var argument = 'deptCode='+dept+' empNo='+empno+' empNm='+empnm+' startDay='+startDay+' endDay='+endDay;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findAppointInfo");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.titleStc.addEventHandler("onclick", this.titleStc_onclick, this);
            this.serchAppmt_btn.addEventHandler("onclick", this.serchAppmt_btn_onclick, this);

        };

        this.loadIncludeScript("HA_AppointForm.xfdl");

       
    };
}
)();
