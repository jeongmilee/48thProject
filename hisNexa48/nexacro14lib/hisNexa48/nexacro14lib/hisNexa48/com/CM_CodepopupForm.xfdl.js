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
                this.set_name("CM_CodepopupForm");
                this.set_classname("CM_CodepopupForm");
                this.set_titletext("코드");
                this._setFormPosition(0,0,400,500);
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodePopupList</Col><Col id=\"URL\">his::com/findCodePopupList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">callback</Col><Col id=\"outData\">dsCode=dsCode</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0.25%", "0", null, "60", "1%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13.92%", "-4", null, "60", "54.18%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("코드도움");
            obj.style.set_color("dodgerblue");
            obj.style.set_font("bold antialias 20 맑은 고딕");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "18%", "72", null, "27", "60.25%", null, this);
            obj.set_taborder("1");
            obj.set_text("코드명");
            obj.style.set_background("papayawhip");
            obj.style.set_color("black");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("codeNameEdit", "absolute", "44.25%", "74", null, "27", "17.5%", null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("CdpopupGrid", "absolute", "7.25%", "72", null, "411", "7%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"203\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("transparent URL('img::titleBar1.jpg')");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 400, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_CodepopupForm");
            		p.set_titletext("코드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_CodepopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_CodepopupForm.xfdl", function() {
        //include "scripts::commonScripts.xjs";

        this.CdpopupGrid_oncelldblclick = function(obj,e)
        {
        	//그리드 셀 더블클릭시,값을 배열에 담아서 팝업폼 호출한 부모프레임에 전달한다.
        	//부모프레임에서는 같은이름의 함수를 만들어 배열값을 받아 셋팅하기만 하면된다.
        	
        	var arrRtn = new Array();
        	
        		arrRtn[0] = this.dsCode.getColumn(e.row,"code");
        		arrRtn[1] = this.dsCode.getColumn(e.row,"codeName");
        	
        		this.opener.setCode(this.parent.code, arrRtn, this.parent.args);
        		//부모프레임에서 setCode 라는 Function을 만들어서 받자.
        		//여기서 this.parent.code 는 부모프레임에서의 변수 code 를 뜻한다.
        		
        		//alert("코드팝업폼"+arrRtn[0]);
        		this.close();
        	
        }

        this.CM_CodepopupForm_onload = function(obj,e)
        {
        	//팝업폼 뜨기전에 미리 넘겨받은 코드로  dsService에 셋팅해서 
        	//해당하는 코드목록 가져오기.

        
        	this.dsService.setColumn(0, "argument", "code=" + this.parent.code);
            
            alert(this.parent.code);
            
            this.gfnService("findCodePopupList");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_CodepopupForm_onload, this);
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.CdpopupGrid.addEventHandler("oncelldblclick", this.CdpopupGrid_oncelldblclick, this);

        };

        this.loadIncludeScript("CM_CodepopupForm.xfdl");

       
    };
}
)();
