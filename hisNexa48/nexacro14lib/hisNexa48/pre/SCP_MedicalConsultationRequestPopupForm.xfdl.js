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
                this.set_name("SCP_MedicalConsultationRequestPopupForm");
                this.set_classname("SCP_MedicalConsultationRequestPopupForm");
                this.set_titletext("협의진료의뢰");
                this._setFormPosition(0,0,689,695);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findMedDrList</Col><Col id=\"URL\">his::hrs/emp/findEmpList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callbackFunc</Col><Col id=\"outData\">dsMedDr=gdsEmp</Col></Row><Row><Col id=\"serviceID\">findPatInfo</Col><Col id=\"URL\">his::hdm/foreign/findPat.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row><Row><Col id=\"serviceID\">batchMedicalConsultationRequestProcess</Col><Col id=\"URL\">his::msv/mcm/patientservice/batchMedicalConsultationRequestProcess.do</Col><Col id=\"inData\">dsMedicalConsultationRequest=dsMedicalConsultationRequest:u</Col><Col id=\"callbackFunc\">callbackFunc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedDr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMedDept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patDiv\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"cfrnTrmtNo\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDate\" type=\"STRING\" size=\"256\"/><Column id=\"trmtTime\" type=\"STRING\" size=\"256\"/><Column id=\"trmtDept\" type=\"STRING\" size=\"256\"/><Column id=\"hroom\" type=\"STRING\" size=\"256\"/><Column id=\"mtDoct\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDate\" type=\"STRING\" size=\"256\"/><Column id=\"hopeDoct\" type=\"STRING\" size=\"256\"/><Column id=\"callYN\" type=\"STRING\" size=\"256\"/><Column id=\"adrYN\" type=\"STRING\" size=\"256\"/><Column id=\"emeYN\" type=\"STRING\" size=\"256\"/><Column id=\"ward\" type=\"STRING\" size=\"256\"/><Column id=\"respDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDoct\" type=\"STRING\" size=\"256\"/><Column id=\"respDate\" type=\"STRING\" size=\"256\"/><Column id=\"respCon\" type=\"STRING\" size=\"256\"/><Column id=\"respType\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoct\" type=\"STRING\" size=\"256\"/><Column id=\"askingDept\" type=\"STRING\" size=\"256\"/><Column id=\"askingDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"askingDate\" type=\"STRING\" size=\"256\"/><Column id=\"askingDiv\" type=\"STRING\" size=\"256\"/><Column id=\"askingCon\" type=\"STRING\" size=\"256\"/><Column id=\"askingCau\" type=\"STRING\" size=\"256\"/><Column id=\"askingDoctNm\" type=\"STRING\" size=\"256\"/><Column id=\"respDept\" type=\"STRING\" size=\"256\"/><Column id=\"respDeptNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPat", this);
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("autoInsertedDiv", "absolute", "2.47%", "24", null, "79", "2.32%", null, this);
            obj.set_taborder("56");
            obj.style.set_background("#cfd8dcff");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "12", "6", "66", "29", null, null, this.autoInsertedDiv);
            obj.set_taborder("0");
            obj.set_text("환자번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Gulim");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "12", "38", "66", "29", null, null, this.autoInsertedDiv);
            obj.set_taborder("1");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Gulim");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "234", "6", "70", "29", null, null, this.autoInsertedDiv);
            obj.set_taborder("2");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Gulim");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Calendar("askingDateCal", "absolute", "80", "42", "141", "21", null, null, this.autoInsertedDiv);
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f3f3f3ff");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            obj = new Edit("patNoEd", "absolute", "79", "10", "69", "21", null, null, this.autoInsertedDiv);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f3f3f3ff");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Edit("sexAgeEd", "absolute", "548", "10", "79", "21", null, null, this.autoInsertedDiv);
            obj.set_taborder("5");
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "471", "6", "74", "29", null, null, this.autoInsertedDiv);
            obj.set_taborder("6");
            obj.set_text("성별/나이");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("left middle");
            obj.style.set_font("9 Gulim");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Edit("patNameEd", "absolute", "149", "10", "79", "21", null, null, this.autoInsertedDiv);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f3f3f3ff");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new Edit("frontResiNoEd", "absolute", "305", "10", "66", "21", null, null, this.autoInsertedDiv);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f3f3f3ff");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            this.autoInsertedDiv.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "56.71%", "10", null, "21", "28.96%", null, this.autoInsertedDiv);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f3f3f3ff");
            obj.style.setStyleValue("color", "disabled", "dimgray");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_mask("@{@@@@@@}");
            obj.set_type("string");
            this.autoInsertedDiv.addChild(obj.name, obj);

            obj = new Div("buttonDiv", "absolute", "3.05%", "619", null, "45", "2.32%", null, this);
            obj.set_taborder("57");
            obj.style.set_background("#cfd8dcff");
            this.addChild(obj.name, obj);
            obj = new Button("closeBtn", "absolute", "551", "6", "90", "32", null, null, this.buttonDiv);
            obj.set_taborder("0");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.buttonDiv.addChild(obj.name, obj);
            obj = new Button("saveBtn", "absolute", "459", "6", "90", "32", null, null, this.buttonDiv);
            obj.set_taborder("1");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.buttonDiv.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "2.61%", "115", null, "493", "2.18%", null, this);
            obj.set_taborder("58");
            obj.set_text("Div00");
            obj.style.set_background("#eceff1ff");
            this.addChild(obj.name, obj);
            obj = new Calendar("hopeDateCal", "absolute", "131", "15", "141", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj = new Static("Static21", "absolute", "20", "12", "107", "29", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("희망일자");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Div("askingDiv", "absolute", "1.68%", "44", null, "72", "2.13%", null, this.Div00);
            obj.set_taborder("9");
            obj.style.set_background("#cfd8dcff");
            obj.style.set_border("1 solid black");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "10", "7", "107", "29", null, null, this.Div00.askingDiv);
            obj.set_taborder("27");
            obj.set_text("응답과");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("9 Gulim");
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "10", "35", "107", "29", null, null, this.Div00.askingDiv);
            obj.set_taborder("28");
            obj.set_text("응급여부");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("9 Gulim");
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj = new Radio("emeRadio", "absolute", "121", "39", "141", "21", null, null, this.Div00.askingDiv);
            this.Div00.askingDiv.addChild(obj.name, obj);
            var emeRadio_innerdataset = new Dataset("emeRadio_innerdataset", this.Div00.askingDiv.emeRadio);
            emeRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">응급</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비응급</Col></Row></Rows>");
            obj.set_innerdataset(emeRadio_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj = new Combo("medDeptCombo", "absolute", "120", "11", "141", "21", null, null, this.Div00.askingDiv);
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("@dsMedDept");
            obj.set_codecolumn("deptNm");
            obj.set_datacolumn("deptNm");
            obj = new Static("Static15", "absolute", "273", "35", "107", "29", null, null, this.Div00.askingDiv);
            obj.set_taborder("31");
            obj.set_text("의뢰유형");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("9 Gulim");
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "273", "7", "107", "29", null, null, this.Div00.askingDiv);
            obj.set_taborder("32");
            obj.set_text("응답의사");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_font("9 Gulim");
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj = new Combo("medDrCombo", "absolute", "385", "11", "141", "21", null, null, this.Div00.askingDiv);
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_innerdataset("@dsMedDr");
            obj.set_codecolumn("empNm");
            obj.set_datacolumn("empNm");
            obj = new Radio("callRadio", "absolute", "383", "37", "141", "21", null, null, this.Div00.askingDiv);
            this.Div00.askingDiv.addChild(obj.name, obj);
            var callRadio_innerdataset = new Dataset("callRadio_innerdataset", this.Div00.askingDiv.callRadio);
            callRadio_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">왕진유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">왕진무</Col></Row></Rows>");
            obj.set_innerdataset(callRadio_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj = new CheckBox("adrCheck", "absolute", "545", "37", "60", "20", null, null, this.Div00.askingDiv);
            obj.set_taborder("35");
            obj.set_text("ADR");
            obj.style.set_font("9 Gulim");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div00.askingDiv.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "13", "134", "624", "29", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("진료소견");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "1.98%", "162", null, "141", "2.9%", null, this.Div00);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "1.98%", "338", null, "141", "2.9%", null, this.Div00);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13", "310", "624", "29", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_DetailLabel01");
            obj.style.set_background("#78909cff");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 79, this.autoInsertedDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.autoInsertedDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 45, this.buttonDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("57");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.buttonDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 72, this.Div00.askingDiv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("#cfd8dcff");
            		p.style.set_border("1 solid black");

            	}
            );
            this.Div00.askingDiv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 493, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_text("Div00");
            		p.style.set_background("#eceff1ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 689, 695, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("SCP_MedicalConsultationRequestPopupForm");
            		p.set_titletext("협의진료의뢰");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","autoInsertedDiv.patNoEd","value","dsMedicalConsultationRequest","patNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","autoInsertedDiv.patNameEd","value","dsMedicalConsultationRequest","patNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","autoInsertedDiv.frontResiNoEd","value","dsPat","rrn1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","autoInsertedDiv.askingDateCal","value","dsMedicalConsultationRequest","askingDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.hopeDateCal","value","dsMedicalConsultationRequest","hopeDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.askingDiv.medDeptCombo","value","dsMedicalConsultationRequest","respDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.askingDiv.medDrCombo","value","dsMedicalConsultationRequest","respDoctNm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.askingDiv.emeRadio","value","dsMedicalConsultationRequest","emeYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.askingDiv.callRadio","value","dsMedicalConsultationRequest","callYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.askingDiv.adrCheck","value","dsMedicalConsultationRequest","adrYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.TextArea00","value","dsMedicalConsultationRequest","askingCon");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div00.TextArea01","value","dsMedicalConsultationRequest","askingCau");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","autoInsertedDiv.sexAgeEd","value","dsPat","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","autoInsertedDiv.MaskEdit00","value","dsPat","rrn2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SCP_MedicalConsultationRequestPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.addIncludeScript("SCP_MedicalConsultationRequestPopupForm.xfdl", "scripts::wonScripts.xjs");
        this.registerScript("SCP_MedicalConsultationRequestPopupForm.xfdl", function() {
         
        /**************************************************************************************************
        *                                         공통 Script Include                                     *
        ***************************************************************************************************/

        //include "scripts::commonScripts.xjs";
        //include "scripts::wonScripts.xjs";
        /***************************************************************************************************/
        var mode;
        var rowposition;
        this.SCP_MedicalConsultationRequestPopupForm_onload = function(obj,e)
        {		var nRow=this.dsService.findRow("serviceID","findMedDrList");
        		this.dsService.setColumn(nRow,"argument","jobrk=의사");
        		this.gfnService("findMedDrList");
        		var patNo=this.parent.patNo;
        		mode=this.parent.mode;
        		
        		if(mode=="modify"){
        			this.dsMedicalConsultationRequest.copyData(this.parent.ds);
        			rowposition=this.parent.rowposition;
        			this.dsMedicalConsultationRequest.set_rowposition(rowposition);
        	
        		}else if(mode=="register"){
        			//this.autoInsertedDiv.askingDateCal.set_value(sYear+sMonth+sDate);
        			
        	}
        		var nRow=this.dsService.findRow("serviceID","findPatInfo");
        		this.dsService.setColumn(nRow,"argument","patNo="+patNo);
        		this.gfnService("findPatInfo");
        }
        this.callbackFunc = function(svcID,ErrorCode,ErrorMsg){
           if (ErrorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n" + ErrorMsg);
           } else {
              // 트랜잭션 완료
               trace("===== " + svcID + " 트랜잭션 성공 =====\n");
              if(svcID=="findMedDrList"){
        		this.dsMedDr.set_keystring("deptNm"); 
        		var rowCnt=this.dsMedDr.getRowCount();
        		var deptNm="";
        		for(var i=0;i<rowCnt;i++){
        			if(deptNm!=this.dsMedDr.getColumn(i,"deptNm")){
        				deptNm=this.dsMedDr.getColumn(i,"deptNm");
        				var nRow=this.dsMedDept.addRow();
        				this.dsMedDept.setColumn(nRow,"deptNm",deptNm);
        			}
        		}
        		this.dsMedDr.set_keystring(""); 
              }else if(svcID=="findPatInfo"){
        		var patNo=this.dsPat.getColumn(0,"patNo");
        		var patNm=this.dsPat.getColumn(0,"patNm");
        		if(mode=="register"){
        		var row=this.dsMedicalConsultationRequest.addRow();
        		var today=new Date();
        		var sYear=today.getFullYear().toString();
        		var sMonth=(today.getMonth()+1).toString().padLeft(2,"0");
        		var sDate=(today.getDate()).toString().padLeft(2,"0");

        		this.dsMedicalConsultationRequest.setColumn(row,"askingDate",sYear+sMonth+sDate);
        		this.dsMedicalConsultationRequest.setColumn(row,"patNo",patNo);
        		this.dsMedicalConsultationRequest.setColumn(row,"patNm",patNm);
        		
        		this.dsMedicalConsultationRequest.setColumn(row,"cfrnTrmtNo","2");
        		this.dsMedicalConsultationRequest.setColumn(row,"askingDoct",application.gdsEmp.getColumn("empNo"));
        		this.dsMedicalConsultationRequest.setColumn(row,"askingDoctNm",application.gdsEmp.getColumn("empNm"));
        		this.dsMedicalConsultationRequest.setColumn(row,"askingDept",application.gdsEmp.getColumn("deptCd"));
        		this.dsMedicalConsultationRequest.setColumn(row,"askingDeptNm",application.gdsEmp.getColumn("deptNm"));
        		}
              }
           }
        }

        this.Div00_askingDiv_medDeptCombo_oncloseup = function(obj,e)
        {
        	this.dsMedDr.filter("deptNm=='"+obj.value+"'");
        }

        this.buttonDiv_saveBtn_onclick = function(obj,e)
        {
        		this.gfnService("batchMedicalConsultationRequestProcess");

        }

        
        this.buttonDiv_closeBtn_onclick = function(obj,e)
        {	
        	if(mode=="modify"){
        	if(this.dsMedicalConsultationRequest.getRowType(rowposition)==1){
        	this.opener.dsMedicalConsultationRequest.deleteAll();
        	this.opener.dsMedicalConsultationRequest.copyData(this.dsMedicalConsultationRequest);
        	}
        	
        	this.opener.dsMedicalConsultationRequest.set_rowposition(rowposition);
        	}
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.SCP_MedicalConsultationRequestPopupForm_onload, this);
            this.buttonDiv.closeBtn.addEventHandler("onclick", this.buttonDiv_closeBtn_onclick, this);
            this.buttonDiv.saveBtn.addEventHandler("onclick", this.buttonDiv_saveBtn_onclick, this);
            this.Div00.askingDiv.medDeptCombo.addEventHandler("oncloseup", this.Div00_askingDiv_medDeptCombo_oncloseup, this);

        };

        this.loadIncludeScript("SCP_MedicalConsultationRequestPopupForm.xfdl");

       
    };
}
)();
