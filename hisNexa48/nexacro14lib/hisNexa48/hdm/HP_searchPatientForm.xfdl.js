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
                this._setFormPosition(0,0,483,681);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPatientList</Col><Col id=\"URL\">his::hdm/patient/findPatientList.do</Col><Col id=\"outData\">dsPatient=dsPatient</Col><Col id=\"inData\"/><Col id=\"callbackFunc\">Patient_CallbackFunc</Col><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">batchPatientProcess</Col><Col id=\"URL\">his::hdm/patient/batchPatientProcess.do</Col><Col id=\"inData\">dsPatient=dsPatient:U</Col><Col id=\"callbackFunc\">Patient_CallbackFunc</Col><Col id=\"outData\"/><Col id=\"argument\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPatient", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"patNo\" type=\"STRING\" size=\"256\"/><Column id=\"patNm\" type=\"STRING\" size=\"256\"/><Column id=\"rrn1\" type=\"STRING\" size=\"256\"/><Column id=\"rrn2\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"barrAss\" type=\"STRING\" size=\"256\"/><Column id=\"dtlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"zip\" type=\"STRING\" size=\"256\"/><Column id=\"deathDate\" type=\"STRING\" size=\"256\"/><Column id=\"note\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveYb\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiveNo\" type=\"STRING\" size=\"256\"/><Column id=\"smsReceiver\" type=\"STRING\" size=\"256\"/><Column id=\"recNwDate\" type=\"STRING\" size=\"256\"/><Column id=\"estbGiho\" type=\"STRING\" size=\"256\"/><Column id=\"certfctNo\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn\" type=\"STRING\" size=\"256\"/><Column id=\"insuRrn1\" type=\"STRING\" size=\"256\"/><Column id=\"insuNm\" type=\"STRING\" size=\"256\"/><Column id=\"applyStartDate\" type=\"STRING\" size=\"256\"/><Column id=\"applyEndDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("Div00", "fixed", "1.24%", "9", null, "667", "1.24%", null, this);
            obj.set_taborder("43");
            obj.style.set_background("#eceff1ff");
            obj.style.set_border("1 solid #b0bec5ff");
            obj.style.set_color("#b0bec5ff");
            obj.set_applystyletype("cascade,keep");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "2.57%", "47", null, "578", "2.14%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("dsPatient");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"환자번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"나이\"/><Cell col=\"3\" text=\"성별\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:patNo\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:patNm\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:age\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:gender\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("searchWardCombo", "absolute", "25.59%", "9", "100", "28", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsWardCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_background("white");
            obj.set_displaynulltext("선택");

            obj = new Button("Button00", "absolute", "369", "18", "45", "28", null, null, this);
            obj.set_taborder("136");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "233", "19", "131", "28", null, null, this);
            obj.set_taborder("137");
            obj.set_displaynulltext("입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "23", "22", "94", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_text("환자정보 검색");
            obj.set_cssclass("sta_WF_SubTitle1");
            obj.style.set_font("bold 9 돋움");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "420", "18", "45", "28", null, null, this);
            obj.set_taborder("139");
            obj.set_text("재설정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("addPatBtn", "absolute", "88.61%", "641", null, "28", "3.73%", null, this);
            obj.set_taborder("140");
            obj.set_text("선택");
            obj.style.set_background("#37474fff");
            obj.style.set_border("1 solid #263238ff");
            obj.style.set_color("white");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_font("bold 10 돋움");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 667, this.Div00,
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
            obj = new Layout("default", "", 483, 681, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HP_searchPatientForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HP_searchPatientForm.xfdl", function() {
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

        
        this.gfnService("findPatientList",false);

        
        /**************************************************************************************************
        *                                         화면 변수 선언부                                      *
        ***************************************************************************************************/

        
        var patNo="";
        var patNm="";
        var rrn1="";

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

        

        this.Button00_onclick = function(obj,e)
        {
        	var swc=this.Div00.searchWardCombo.value;
        	var edit00=this.Edit00.value
        	this.dsPatient.filter("");
        	this.dsPatient.filter(swc+"=="+edit00);  
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	this.dsPatient.filter("");
        	
        	
        	
        }

        
        this.Button03_onclick = function(obj,e)
        {		
        	var rowCount = this.dsPatient.getRowCount();
        	var patNo=this.dsPatient.getColumn(rowCount-1,"patNo");
        	this.dsPatient.addRow();
        	this.dsPatient.setColumn(rowCount,"patNo",parseInt(patNo)+1);
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

        

        
        this.Patient_CallbackFunc = function(svcID,ErrorCode,ErrorMsg){

           if (ErrorCode < 1) {
              alert(svcID + "가 처리되지 않았습니다");
           } else {
              alert(svcID + "의 처리가 완료되었습니다");
           }
        }

        

        this.patGrid_oncellclick = function(obj,e)
        {
        	patNo=this.dsPatient.getColumn(obj.currentrow,"patNo");
        	patNm=this.dsPatient.getColumn(obj.currentrow,"patNm");
        	rrn1=this.dsPatient.getColumn(obj.currentrow,"rrn1");
        }

        this.clickBtn = function(obj,e)
        {
        	var rowCount = this.opener.dsCheckPatient.getRowCount();
        	
        	for(var i=0;i<rowCount;i++){
        	var forPatNo=this.opener.dsCheckPatient.getColumn(i,"patNo");
        		if(forPatNo==patNo){
        		alert("이미 존재하는 환자번호입니다.");
        		this.opener.dsCheckPatient.filter("patNo=="+forPatNo);
        		alert(forPatNo);
        		this.close();
        		}
        	}
        	
        		this.opener.dsCheckPatient.addRow();
        		this.opener.dsCheckPatient.setColumn(rowCount,"patNo",patNo);
        		this.opener.dsCheckPatient.setColumn(rowCount,"patNm",patNm);
        		this.opener.dsCheckPatient.setColumn(rowCount,"rrn1",rrn1);
        		
        		var rowCount2 = this.opener.dsCheckPatient.getRowCount();
        		for(var i=0;i<rowCount2;i++){
        		var forPatNo=this.opener.dsCheckPatient.getColumn(i,"patNo");
        		if(forPatNo==null){
        		this.opener.dsCheckPatient.deleteRow(i);	
        		}
        	} 	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.Grid00.addEventHandler("oncellclick", this.patGrid_oncellclick, this);
            this.Div00.Grid00.addEventHandler("oncelldblclick", this.Div00_Grid00_oncelldblclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.addPatBtn.addEventHandler("onclick", this.clickBtn, this);

        };

        this.loadIncludeScript("HP_searchPatientForm.xfdl");

       
    };
}
)();
