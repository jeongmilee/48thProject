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
                this.set_name("WS_PatPopupForm");
                this.set_classname("WS_PatPopupForm");
                this.set_titletext("환자등록번호 조회");
                this._setFormPosition(0,0,700,390);
            }
            this.style.set_background("#cfd8dcff");

            
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findPatList</Col><Col id=\"URL\">his::hdm/foreign/findPatList.do</Col><Col id=\"outData\">dsPat=dsPat</Col><Col id=\"inData\"/></Row></Rows>");
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


            
            // UI Components Initialize
            obj = new Edit("patNmEd", "absolute", "18.29%", "62", null, "30", "67.43%", null, this);
            obj.set_taborder("1");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("telEd", "absolute", "51.43%", "62", null, "30", "19.57%", null, this);
            obj.set_taborder("2");
            obj.style.set_font("돋움,9,antialias");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn1Ed", "absolute", "18.29%", "100", null, "30", "67.43%", null, this);
            obj.set_taborder("3");
            obj.set_maxlength("6");
            obj.style.set_align("center middle");
            obj.style.set_font("antialias 9 돋움");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("patGrid", "absolute", "4%", "143", null, "212", "4.43%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsPat");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\" style=\"cellbackground:#455a64ff;cellcolor:white;\"><Cell text=\"등록번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" colspan=\"3\" text=\"주민등록번호\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/></Band><Band id=\"body\" style=\"selectbackground:#b0bec5ff;selectcolor:black;\"><Cell text=\"bind:patNo\"/><Cell col=\"1\" text=\"bind:patNm\"/><Cell col=\"2\" text=\"bind:rrn1\"/><Cell col=\"3\" text=\"-\"/><Cell col=\"4\" text=\"bind:rrn2\"/><Cell col=\"5\" text=\"bind:tel\"/><Cell col=\"6\" text=\"bind:addr\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("rrn2Ed", "absolute", "37.14%", "100", null, "30", "49.43%", null, this);
            obj.set_taborder("5");
            obj.set_password("true");
            obj.set_maxlength("7");
            obj.style.set_align("center middle");
            obj.style.set_font("antialias 9 돋움");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "34.71%", "100", null, "27", "62%", null, this);
            obj.set_taborder("6");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "3.86%", "62", null, "30", "82.71%", null, this);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "4%", "100", null, "30", "82.57%", null, this);
            obj.set_taborder("9");
            obj.set_text("주민등록번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "37.14%", "62", null, "30", "49.43%", null, this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.style.set_background("#455a64ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn", "absolute", "81.86%", "59", null, "34", "13.29%", null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::miniSearchBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "0", null, "60", "0%", null, this);
            obj.set_taborder("12");
            obj.set_text("환자등록번호 조회");
            obj.style.set_background("#90a4aeff stretch");
            obj.style.set_color("#37474fff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 20 Arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 390, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WS_PatPopupForm");
            		p.set_titletext("환자등록번호 조회");
            		p.style.set_background("#cfd8dcff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("WS_PatPopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("WS_PatPopupForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    WS_PatPopupForm.xfdl                  	                        *
        * @Description 	환자등록번호 조회									   	        *
        * @Author	    임행섭( modification by 강현준) 테스트테스트				            *
        * 									                                            *
        * Created on 2016.11.25.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        
        this.searchBtn_onclick = function(obj,e)
        {
        	var patNm=this.patNmEd.value;
        	var tel=this.telEd.value;
        	var rrn1=this.rrn1Ed.value;
        	var rrn2=this.rrn2Ed.value;
        	var argument='patNm='+patNm+' tel='+tel+' rrn1='+rrn1+' rrn2='+rrn2;
        	this.dsService.setColumn(0,"argument",argument);
        	this.gfnService("findPatList",true);
        }

        this.patGrid_oncelldblclick = function(obj,e)
        {
        	var arrRtn = new Array;
        	var i=0;
        	
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"patNo");  // 환자등록번호 0
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"patNm");  // 환자명 1 
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"rrn1");   // 주민번호 앞 생년월일
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"rrn2");   // 주민번호 뒷자리
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"outpaReceiptNo");	// 외래접수번호
        	arrRtn[i++] = this.dsPat.getColumn(e.row,"hosptlzReceiptNo");	// 입원접수번호
        	this.opener.setPatInfo(arrRtn);
        	this.close();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.patGrid.addEventHandler("oncelldblclick", this.patGrid_oncelldblclick, this);
            this.searchBtn.addEventHandler("onclick", this.searchBtn_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("WS_PatPopupForm.xfdl");

       
    };
}
)();
