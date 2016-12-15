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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCheckPatientList</Col><Col id=\"URL\">his::hdm/patient/findCheckPatientList.do</Col><Col id=\"outData\">dsCheckPatient=dsCheckPatient</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">CheckPatient_CallbackFunc</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchCheckPatientProcess</Col><Col id=\"URL\">his::hdm/patient/batchCheckPatientProcess.do</Col><Col id=\"inData\">dsCheckPatient=dsCheckPatient:U</Col><Col id=\"callbackFunc\">CheckPatient_CallbackFunc</Col><Col id=\"outData\"/><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCheckPatient", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"checkPatSeq\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"postStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"postEndDate\" type=\"STRING\" size=\"256\"/><Column id=\"importance\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"finModDate\" type=\"STRING\" size=\"256\"/><Column id=\"regWorker\" type=\"STRING\" size=\"256\"/><Column id=\"finModWorker\" type=\"STRING\" size=\"256\"/><Column id=\"receiptYb\" type=\"STRING\" size=\"256\"/><Column id=\"othersDelPossYb\" type=\"STRING\" size=\"256\"/><Column id=\"checkNtc\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsWardCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">patNo</Col><Col id=\"data\">환자번호</Col></Row><Row><Col id=\"code\">patNm</Col><Col id=\"data\">성함</Col></Row><Row><Col id=\"code\">age</Col><Col id=\"data\">나이</Col></Row><Row><Col id=\"code\">gender</Col><Col id=\"data\">성별</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsImpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">상</Col><Col id=\"data\">상</Col></Row><Row><Col id=\"code\">중</Col><Col id=\"data\">중</Col></Row><Row><Col id=\"code\">하</Col><Col id=\"data\">하</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYn1", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">가능</Col><Col id=\"data\">가능</Col></Row><Row><Col id=\"code\">불가</Col><Col id=\"data\">불가</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYn2", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">접수</Col><Col id=\"data\">접수</Col></Row><Row><Col id=\"code\">미접수</Col><Col id=\"data\">미접수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("titleDiv", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("titleStc", "absolute", "4.79%", "-4", null, "60", "74.41%", null, this.titleDiv);
            obj.set_taborder("0");
            obj.set_text("체크환자 관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 맑은 고딕");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("Div00", "fixed", "1.95%", "64", null, "686", "46.68%", null, this);
            obj.set_taborder("43");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            obj.style.set_color("#b0bec5ff");
            obj.set_applystyletype("cascade,keep");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "2.48%", "47", null, "628", "2.48%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("dsCheckPatient");
            obj.set_autofittype("col");
            obj.style.set_align("center middle");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"73\"/><Column size=\"58\"/><Column size=\"217\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자번호\"/><Cell col=\"1\" text=\"환자이름\"/><Cell col=\"2\" text=\"중요도\"/><Cell col=\"3\" text=\"체크사항\"/><Cell col=\"4\" text=\"생년월일\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:patNo\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:patNm\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:importance\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:checkNtc\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:rrn1\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("searchWardCombo", "absolute", "23.09%", "9", "100", "28", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("white");
            obj.set_displaynulltext("선택");

            obj = new Div("Div01", "absolute", "54.3%", "64", null, "686", "1.76%", null, this);
            obj.set_taborder("87");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc", "absolute", "55.37%", "106", null, "28", "34.67%", null, this);
            obj.set_taborder("90");
            obj.set_text("성명");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd", "absolute", "65.72%", "106", "151", "28", null, null, this);
            obj.set_taborder("91");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("recNwDateStc", "absolute", "55.37%", "137", null, "28", "34.67%", null, this);
            obj.set_taborder("103");
            obj.set_text("게시 시작일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("recNwDateCal", "absolute", "65.72%", "138", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("104");

            obj = new Static("barrAssStc", "absolute", "55.37%", "201", null, "28", "34.67%", null, this);
            obj.set_taborder("105");
            obj.set_text("중요도");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("barrAssCombo", "absolute", "65.82%", "202", "151", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_innerdataset("@dsImpCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_index("-1");

            obj = new Calendar("deathDateCal", "absolute", "65.72%", "233", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("107");

            obj = new Static("deathDateStc", "absolute", "55.37%", "232", null, "28", "34.67%", null, this);
            obj.set_taborder("108");
            obj.set_text("등록일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Calendar("applyStartDateCal", "absolute", "65.72%", "265", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("117");

            obj = new Static("applyStc", "absolute", "55.37%", "264", null, "28", "34.67%", null, this);
            obj.set_taborder("118");
            obj.set_text("최종 수정일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("noteStc", "absolute", "55.37%", "423", null, "32", "34.67%", null, this);
            obj.set_taborder("119");
            obj.set_text("체크사항");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("noteTextArea", "absolute", "65.72%", "423", null, "280", "2.93%", null, this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Button("addPatBtn", "absolute", "80.76%", "711", null, "28", "11.62%", null, this);
            obj.set_taborder("127");
            obj.set_text("저장");
            obj.style.set_background("#37474fff");
            obj.style.set_border("1 solid #263238ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("addPatBtn00", "absolute", "89.36%", "711", null, "28", "3.03%", null, this);
            obj.set_taborder("131");
            obj.set_text("삭제");
            obj.style.set_background("#37474fff");
            obj.style.set_border("1 solid #263238ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "487", "74", "45", "28", null, null, this);
            obj.set_taborder("135");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "385", "74", "45", "28", null, null, this);
            obj.set_taborder("136");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "248", "74", "131", "28", null, null, this);
            obj.set_taborder("137");
            obj.set_displaynulltext("입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "35", "79", "94", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("환자정보 검색");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "436", "74", "45", "28", null, null, this);
            obj.set_taborder("139");
            obj.set_text("재설정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc00", "absolute", "55.37%", "74", null, "28", "34.67%", null, this);
            obj.set_taborder("140");
            obj.set_text("환자번호");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNoEd", "absolute", "65.72%", "74", "151", "28", null, null, this);
            obj.set_taborder("141");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("recNwDateCal00", "absolute", "65.72%", "170", "151", "27", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("148");

            obj = new Static("recNwDateStc00", "absolute", "55.37%", "169", null, "28", "34.67%", null, this);
            obj.set_taborder("149");
            obj.set_text("게시 종료일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc01", "absolute", "55.37%", "296", null, "28", "34.67%", null, this);
            obj.set_taborder("150");
            obj.set_text("등록자");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd00", "absolute", "65.72%", "296", "151", "28", null, null, this);
            obj.set_taborder("151");
            this.addChild(obj.name, obj);

            obj = new Static("patNmStc02", "absolute", "55.47%", "328", null, "28", "34.57%", null, this);
            obj.set_taborder("152");
            obj.set_text("최종 수정자");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Edit("patNmEd01", "absolute", "65.82%", "328", "151", "28", null, null, this);
            obj.set_taborder("153");
            this.addChild(obj.name, obj);

            obj = new Static("barrAssStc00", "absolute", "55.37%", "360", null, "28", "34.67%", null, this);
            obj.set_taborder("156");
            obj.set_text("접수여부");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("barrAssCombo00", "absolute", "65.82%", "361", "151", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("157");
            obj.set_innerdataset("@dsYn2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Static("barrAssStc01", "absolute", "55.37%", "391", null, "28", "34.67%", null, this);
            obj.set_taborder("158");
            obj.set_text("삭제가능여부");
            obj.style.set_background("#78909cff");
            obj.style.set_color("ivory");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Combo("barrAssCombo01", "absolute", "65.82%", "392", "151", "26", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("159");
            obj.set_innerdataset("@dsYn1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.titleDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("transparent URL('img::titleBar5.jpg')");

            	}
            );
            this.titleDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 686, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");
            		p.style.set_color("#b0bec5ff");
            		p.set_applystyletype("cascade,keep");
            		p.set_visible("true");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 686, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("87");
            		p.style.set_background("#eceff1ff");
            		p.style.set_border("1 solid #b0bec5ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","recNwDateCal00","value","dsCheckPatient","postEndDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","patNoEd","value","dsCheckPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","patNmEd","value","dsCheckPatient","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","recNwDateCal","value","dsCheckPatient","postStartDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","barrAssCombo","value","dsCheckPatient","importance");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","deathDateCal","value","dsCheckPatient","regDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","applyStartDateCal","value","dsCheckPatient","finModDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","noteTextArea","value","dsCheckPatient","checkNtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","patNoEd","value","dsCheckPatient","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","patNmEd00","value","dsCheckPatient","regWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","patNmEd01","value","dsCheckPatient","finModWorker");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","barrAssCombo00","value","dsCheckPatient","receiptYb");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","barrAssCombo01","value","dsCheckPatient","othersDelPossYb");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HP_CheckPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HP_CheckPatientForm.xfdl", function() {
        /********************************************************************************
        *                                               			                    *
        * 외래환자관리 및 외래진료접수관리                             		        *
        *                                                                   			*
        * @Path			원무 - 환자정보등록									 		*
        * @Description 	환자정보를 등록한다					*
        * @Author		최민하						 								*
        * 									 											*
        * Created on	2015. 6. 16.                           		 					*
        *									 											*
        ********************************************************************************/

        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";

        

        /***************************************************************************************************
        *                                          dsService 호출                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  this.gfnService(" ",false);   
        +-------------------------------------------------------------------------------------------------*/

        
        this.gfnService("findCheckPatientList",false);

        
        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        

        

        /***************************************************************************************************
        *                                         조회조건 EVENT START                                    *
        /*-------------------------------------------------------------------------------------------------+
        >>  onkeyDown EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        

        
        /***************************************************************************************************
        *                                          버튼 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        this.clickBtn = function(obj,e)
        {
        	this.gfnService("batchCheckPatientProcess",false);
        }

        
        this.Button00_onclick = function(obj,e)
        {
        	var swc=this.Div00.searchWardCombo.value;
        	var edit00=this.Edit00.value
        	this.dsCheckPatient.filter("");
        	this.dsCheckPatient.filter(swc+"=="+edit00);  
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.dsCheckPatient.filter("");
        }

        
        this.Button03_onclick = function(obj,e)
        {		                         
                    this.dsCheckPatient.filter("");
        	application.open("modeless", "hdm::HP_searchPatientForm.xfdl", this.getOwnerFrame(), {mode:'modeless'}, "", 400, 200);
        }

        

        /***************************************************************************************************
        *                                          그리드 클릭 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        /***************************************************************************************************
        *                                          콜백 EVENT START                                       *
        /*-------------------------------------------------------------------------------------------------+
        >>  click EVENT
        +-------------------------------------------------------------------------------------------------*/

        

        
        this.CheckPatient_CallbackFunc = function(svcID,ErrorCode,ErrorMsg){

           if (ErrorCode < 1) {
              alert(svcID + "가 처리되지 않았습니다");
           } else {
              alert(svcID + "의 처리가 완료되었습니다");
           }
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.titleDiv.titleStc.addEventHandler("onclick", this.titleDiv_titleStc_onclick, this);
            this.Div00.Grid00.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.recNwDateStc.addEventHandler("onclick", this.recNwDateStc_onclick, this);
            this.addPatBtn.addEventHandler("onclick", this.clickBtn, this);
            this.addPatBtn00.addEventHandler("onclick", this.clickBtn, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.patNmStc00.addEventHandler("onclick", this.patNmStc00_onclick, this);

        };

        this.loadIncludeScript("HP_CheckPatientForm.xfdl");

       
    };
}
)();
