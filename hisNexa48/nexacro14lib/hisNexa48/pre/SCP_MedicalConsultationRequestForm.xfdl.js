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
                this.set_name("MQ_CfrcTrmtAskingForm");
                this.set_classname("MC_CfrcTrmtAskingForm");
                this.set_titletext("협의진료 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedicalConsultationRequestList</Col><Col id=\"URL\">his::msv/mcm/patientservice/findMedicalConsultationRequestList.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsMedicalConsultationRequest=dsMedicalConsultationRequest</Col></Row><Row><Col id=\"serviceID\">batchMedicalConsultationRequestProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchMedicalConsultationRequestProcess.do</Col><Col id=\"inData\">dsMedicalConsultationRequest=dsMedicalConsultationRequest:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedicalConsultationRequest", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"cfrnTrmtNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTime\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"mtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDate\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoct\" type=\"STRING\" size=\"256\"/><Column id=\"callYN\" type=\"STRING\" size=\"256\"/><Column id=\"adrYN\" type=\"STRING\" size=\"256\"/><Column id=\"emeYN\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"RespDoct\" type=\"STRING\" size=\"256\"/><Column id=\"respDate\" type=\"STRING\" size=\"256\"/><Column id=\"respCon\" type=\"STRING\" size=\"256\"/><Column id=\"respType\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoct\" type=\"STRING\" size=\"256\"/><Column id=\"askingDept\" type=\"STRING\" size=\"256\"/><Column id=\"askingDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"askingDate\" type=\"STRING\" size=\"256\"/><Column id=\"askingDiv\" type=\"STRING\" size=\"256\"/><Column id=\"askingCon\" type=\"STRING\" size=\"256\"/><Column id=\"askingCau\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDeptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEmeYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">응급</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">비응급</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCallYN", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">왕진유</Col><Col id=\"code\">Y</Col></Row><Row><Col id=\"name\">왕진무</Col><Col id=\"code\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatDiv", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">O</Col><Col id=\"value\">외래</Col></Row><Row><Col id=\"code\">E</Col><Col id=\"value\">응급</Col></Row><Row><Col id=\"code\">I</Col><Col id=\"value\">입원</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("topDiv", "absolute", "0.64%", "74", null, "48", "1.12%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Radio("AskingHopeRadio", "absolute", "7.41%", "9", "150", "30", null, null, this.topDiv);
            this.topDiv.addChild(obj.name, obj);
            var AskingHopeRadio_innerdataset = new Dataset("AskingHopeRadio_innerdataset", this.topDiv.AskingHopeRadio);
            AskingHopeRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">asking</Col><Col id=\"datacolumn\">의뢰일</Col></Row><Row><Col id=\"codecolumn\">hope</Col><Col id=\"datacolumn\">희망일</Col></Row></Rows>");
            obj.set_innerdataset(AskingHopeRadio_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 돋움");
            obj = new Calendar("startDateCal", "absolute", "20.85%", "9", "150", "30", null, null, this.topDiv);
            this.topDiv.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("ctrtDateSelStc03", "absolute", "33.47%", "9", null, "30", "63.52%", null, this.topDiv);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.style.set_background("transparent");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("20 돋움");
            obj.getSetter("class").set("AreaStc");
            this.topDiv.addChild(obj.name, obj);
            obj = new Calendar("endDateCal", "absolute", "36.73%", "9", "150", "30", null, null, this.topDiv);
            this.topDiv.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_autoskip("true");
            obj.style.set_padding("0 0 0 0");
            obj = new Static("ctrtDateSelStc00", "absolute", "52.04%", "9", null, "30", "41.37%", null, this.topDiv);
            obj.set_taborder("5");
            obj.set_text("조회조건");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.topDiv.addChild(obj.name, obj);
            obj = new Radio("occurRadio", "absolute", "59.61%", "9", null, "30", "22.39%", null, this.topDiv);
            this.topDiv.addChild(obj.name, obj);
            var occurRadio_innerdataset = new Dataset("occurRadio_innerdataset", this.topDiv.occurRadio);
            occurRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">실시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미실시</Col></Row></Rows>");
            obj.set_innerdataset(occurRadio_innerdataset);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 돋움");
            obj = new Static("ctrtDateSelStc01", "absolute", "1.79%", "9", "60", "30", null, null, this.topDiv);
            obj.set_taborder("8");
            obj.set_text("진료일");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.topDiv.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "91.78%", "8", null, "32", "0.9%", null, this.topDiv);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.topDiv.addChild(obj.name, obj);

            obj = new Div("centerDiv", "absolute", "0.48%", "133", null, "585", "1.12%", null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Grid("surgGrid", "absolute", "1.79%", "12", null, "527", "36.75%", null, this.centerDiv);
            obj.set_taborder("0");
            obj.set_binddataset("dsMedicalConsultationRequest");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:#cfd8dcff;font:9 돋움;\" text=\"의뢰일\"/><Cell col=\"1\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"구분\"/><Cell col=\"2\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"환자명\"/><Cell col=\"3\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"등록번호\"/><Cell col=\"4\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"의뢰과\"/><Cell col=\"5\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"의뢰의\"/><Cell col=\"6\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"응답과\"/><Cell col=\"7\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"응답의\"/><Cell col=\"8\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"유형\"/><Cell col=\"9\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"응급\"/><Cell col=\"10\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"ADR\"/><Cell col=\"11\" style=\"background:#cfd8dcff;font:9 돋움;\" text=\"실시\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:askingDate\" mask=\"@@@@/@@/@@\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:patDiv\" combodataset=\"dsPatDiv\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:patNm\"/><Cell col=\"3\" text=\"bind:cfrnTrmtNo\"/><Cell col=\"4\" text=\"bind:askingDeptNm\"/><Cell col=\"5\" text=\"bind:askingDoctNm\"/><Cell col=\"6\" text=\"bind:respDeptNm\"/><Cell col=\"7\" text=\"bind:respDoctNm\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:callYN\" combodataset=\"dsCallYN\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:emeYN\" combodataset=\"dsEmeYN\" combocodecol=\"code\" combodatacol=\"name\" calendardisplay=\"display\"/><Cell col=\"10\" celltype=\"none\" displaytype=\"normal\" edittype=\"none\" text=\"bind:adrYN\" calendardisplay=\"display\"/><Cell col=\"11\" text=\"bind:respDate\" expr=\"expr:(respDate == null) ? &quot;N&quot; : &quot;Y&quot;\"/></Band></Format></Formats>");
            this.centerDiv.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "64.07%", "10", null, "526", "0.73%", null, this.centerDiv);
            obj.set_taborder("1");
            obj.style.set_background("#cfd8dcff");
            this.centerDiv.addChild(obj.name, obj);
            obj = new Static("ctrtDateSelStc02", "absolute", "3.7%", "53", "400", "30", null, null, this.centerDiv.Div00);
            obj.set_taborder("0");
            obj.set_text("진 료 소 견");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new TextArea("askingConArea", "absolute", "3.7%", "83", "400", "100", null, null, this.centerDiv.Div00);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new TextArea("askingCauArea", "absolute", "3.7%", "217", "400", "100", null, null, this.centerDiv.Div00);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new TextArea("respConArea", "absolute", "3.7%", "396", "400", "100", null, null, this.centerDiv.Div00);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new Static("ctrtDateSelStc00", "absolute", "3.7%", "194", "400", "25", null, null, this.centerDiv.Div00);
            obj.set_taborder("4");
            obj.set_text("사          유");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new Static("ctrtDateSelStc01", "absolute", "3.7%", "366", "400", "30", null, null, this.centerDiv.Div00);
            obj.set_taborder("5");
            obj.set_text("회          신");
            obj.style.set_background("#78909cff");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("10 돋움");
            obj.getSetter("class").set("AreaStc");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "4.85%", "20", "60", "21", null, null, this.centerDiv.Div00);
            obj.set_taborder("6");
            obj.set_text("의뢰내용");
            obj.style.set_font("9 돋움");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "4.85%", "332", "60", "21", null, null, this.centerDiv.Div00);
            obj.set_taborder("7");
            obj.set_text("회신내용");
            obj.style.set_font("9 돋움");
            this.centerDiv.Div00.addChild(obj.name, obj);
            obj = new Button("delMedicalConsultationRequestBtn", "absolute", "1125", "547", "90", "32", null, null, this.centerDiv);
            obj.set_taborder("8");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::cancelBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.centerDiv.addChild(obj.name, obj);
            obj = new Button("modiMedicalConsultationRequestBtn", "absolute", "1029", "547", "90", "32", null, null, this.centerDiv);
            obj.set_taborder("9");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::reviseBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.centerDiv.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.72%", "-3", null, "60", "81.76%", null, this);
            obj.set_taborder("2");
            obj.set_text("권한관리");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 다음_Regular");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "0.64%", "2", null, "60", "63.36%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("transparent URL('img::miniTitleBar1.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.36%", "5", null, "60", "75.68%", null, this);
            obj.set_taborder("4");
            obj.set_text("협의진료의뢰내역");
            obj.style.set_color("#6c6c6cff");
            obj.style.set_font("bold 20 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1228, 45, this.topDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.topDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 526, this.centerDiv.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.centerDiv.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1230, 585, this.centerDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.centerDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 450, 60, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("transparent URL('img::miniTitleBar1.jpg')");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MC_CfrcTrmtAskingForm");
            		p.set_titletext("협의진료 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","","","gdsPrcsReceipt","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("dsGubun","","","gdsPrcsReceipt","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div03.Div00.respConArea","value","dsCfrnTrmt","respCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div03.Div00.askingCauArea","value","dsCfrnTrmt","askingCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div03.Div00.askingConArea","value","dsCfrnTrmt","askingCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","centerDiv.Div00.askingCauArea","value","dsMedicalConsultationRequest","askingCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","centerDiv.Div00.askingConArea","value","dsMedicalConsultationRequest","askingCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","centerDiv.Div00.respConArea","value","dsMedicalConsultationRequest","respCon");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_MedicalConsultationRequestForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_MedicalConsultationRequestForm.xfdl", "scripts::commonBind.xjs");
        this.registerScript("SCP_MedicalConsultationRequestForm.xfdl", function() {
         /********************************************************************************
        *                                                                               *
        * 				            												    *
        *                                                                               *
        * @Path		    협의진료 관리   							                 	*
        * @Description  협의진료 관리 							 	                *
        * 																				*
                                    		                    *
        *									                                            *
        ********************************************************************************/
        /********************************************************************************
         공통스크립트 include
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";
        //include "scripts::commonBind.xjs";

        this.MC_CfrcTrmtAskingForm_onload = function(obj,e)
        {

        }

        //조회
        this.topDiv_searchBtn_onclick = function(obj,e)
        {

        	var startDate=this.topDiv.startDateCal.value;
        	var endDate=this.topDiv.endDateCal.value;
        	var askingHopeRadio=this.topDiv.AskingHopeRadio.value;
        	var occurRadio=this.topDiv.occurRadio.value;
        	alert(occurRadio);
        	var argument = 'startDate='+startDate+' endDate='+endDate+' askingHopeRadio='+askingHopeRadio+' occurRadio='+occurRadio;
        	this.dsService.setColumn(0,"argument",argument);
        	
        	this.gfnService("findMedicalConsultationRequestList"); //협의진료 조회
        }

        
        this.centerDiv_saveBtn_onclick = function(obj,e)
        {
        	//this.gfnService("batchMedicalConsultationRequestProcess"); //저장
        }

        this.centerDiv_delCfrnTrmtBtn_onclick = function(obj,e)
        {
        	//this.dsCfrnTrmt.deleteRow(this.dsCfrnTrmt.rowposition);
        }

        

        this.centerDiv_modiMedicalConsultationRequestBtn_onclick = function(obj,e)
        {
        	var resDate=this.dsMedicalConsultationRequest.getColumn(this.dsMedicalConsultationRequest.rowposition,"respDate");
        	var patNo=this.dsMedicalConsultationRequest.getColumn(this.dsMedicalConsultationRequest.rowposition,"patNo");
        	var rowposition=this.dsMedicalConsultationRequest.rowposition;
        	if(resDate!=null){
        		alert("회신을 받을 경우는 수정할 수 없습니다");
        	}else{
        		application.open("SCP_MedicalConsultationRequestPopupForm","pre::SCP_MedicalConsultationRequestPopupForm.xfdl",this.parent,{"patNo":patNo,"mode":"modify","ds":this.dsMedicalConsultationRequest,"rowposition":rowposition},"showtitlebar=true showstatusbar=false", 0, 0, 800, 443, this);
        	}
        }

        this.centerDiv_delMedicalConsultationRequestBtn_onclick = function(obj,e)
        {	var resDate=this.dsMedicalConsultationRequest.getColumn(this.dsMedicalConsultationRequest.rowposition,"respDate");
        	if(resDate!=null){
        		alert("회신을 받을 경우는 취소할 수 없습니다");
        	}else{
        	this.dsMedicalConsultationRequest.deleteRow(this.dsMedicalConsultationRequest.rowposition);
        	var bOK=application.confirm("저장하시겠습니까");
        	if(bOK){
        	
        	this.gfnService("batchMedicalConsultationRequestProcess");}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MC_CfrcTrmtAskingForm_onload, this);
            this.topDiv.AskingHopeRadio.addEventHandler("onitemclick", this.TopDiv_Radio01_onitemclick, this);
            this.topDiv.ctrtDateSelStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.topDiv.ctrtDateSelStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.topDiv.ctrtDateSelStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.topDiv.searchBtn.addEventHandler("onclick", this.topDiv_searchBtn_onclick, this);
            this.centerDiv.surgGrid.addEventHandler("oncelldblclick", this.surgGrid_oncelldblclick, this);
            this.centerDiv.Div00.ctrtDateSelStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.centerDiv.Div00.ctrtDateSelStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.centerDiv.Div00.ctrtDateSelStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.centerDiv.delMedicalConsultationRequestBtn.addEventHandler("onclick", this.centerDiv_delMedicalConsultationRequestBtn_onclick, this);
            this.centerDiv.modiMedicalConsultationRequestBtn.addEventHandler("onclick", this.centerDiv_modiMedicalConsultationRequestBtn_onclick, this);

        };

        this.loadIncludeScript("SCP_MedicalConsultationRequestForm.xfdl");

       
    };
}
)();
