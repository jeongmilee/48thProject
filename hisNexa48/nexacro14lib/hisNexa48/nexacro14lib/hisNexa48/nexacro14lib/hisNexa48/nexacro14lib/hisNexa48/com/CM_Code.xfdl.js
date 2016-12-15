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
                this.set_name("CM_Code");
                this.set_classname("CM_Code");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1250,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSubCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"subcode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"subcode\">GD</Col></Row><Row><Col id=\"subcode\">HS</Col></Row><Row><Col id=\"subcode\">GF</Col></Row><Row><Col id=\"subcode\">SP</Col></Row><Row><Col id=\"subcode\">AC</Col></Row><Row><Col id=\"subcode\">MD</Col></Row><Row><Col id=\"subcode\">GA</Col></Row><Row><Col id=\"subcode\">GP</Col></Row><Row><Col id=\"subcode\">GB</Col></Row><Row><Col id=\"subcode\">GS</Col></Row><Row><Col id=\"subcode\">SC</Col></Row><Row><Col id=\"subcode\">CM</Col></Row><Row><Col id=\"subcode\">CL</Col></Row><Row><Col id=\"subcode\">HSP</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"detailCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"subCode\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"editId\" type=\"STRING\" size=\"256\"/><Column id=\"editIp\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"regIp\" type=\"STRING\" size=\"256\"/><Column id=\"detailCodeName\" type=\"STRING\" size=\"256\"/><Column id=\"modiyn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findCodeList</Col><Col id=\"URL\">erp47::com/findCodeList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">findCodeListCallback</Col><Col id=\"outData\">dsCode=dsCode</Col></Row><Row><Col id=\"serviceID\">findCode</Col><Col id=\"URL\">erp47::com/findCode.do</Col><Col id=\"outData\">dsCodeNm=dsCodeNm</Col></Row><Row><Col id=\"serviceID\">batchCode</Col><Col id=\"URL\">erp47::com/batchCode.do</Col><Col id=\"inData\">dsCode=dsCode:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUse", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Y</Col></Row><Row><Col id=\"value\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCodeNm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0%", "0", null, "60", "-62.88%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar1.jpg')");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.8%", "-4", null, "60", "91.3%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("코드관리");
            obj.style.set_color("dodgerblue");
            obj.style.set_font("bold 20 Arial");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "1.92%", "67", null, "27", "91.04%", null, this);
            obj.set_taborder("1");
            obj.set_text("그룹코드");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc02", "absolute", "23.36%", "67", null, "27", "69.6%", null, this);
            obj.set_taborder("2");
            obj.set_text("코드");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc03", "absolute", "45.28%", "67", null, "27", "47.68%", null, this);
            obj.set_taborder("3");
            obj.set_text("코드명");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("codeNameEdit", "absolute", "52.96%", "68", null, "30", "35.84%", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc04", "absolute", "66%", "67", null, "27", "26.96%", null, this);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("codeGrid", "absolute", "2.24%", "103", null, "628", "2.64%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"60\"/><Column size=\"79\"/><Column size=\"206\"/><Column size=\"224\"/><Column size=\"153\"/><Column size=\"147\"/><Column size=\"170\"/><Column size=\"199\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"상세코드\"/><Cell col=\"3\" text=\"코드명\"/><Cell col=\"4\" text=\"상세코드명\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록자IP\"/><Cell col=\"7\" text=\"수정가능여부\"/><Cell col=\"8\" text=\"사용가능여부\"/></Band><Band id=\"body\"><Cell text=\"bind:subCode\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:detailCode\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:codeName\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:detailCodeName\"/><Cell col=\"5\" text=\"bind:regId\"/><Cell col=\"6\" text=\"bind:regIp\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:modiyn\" combodataset=\"dsUse\" combocodecol=\"value\" combodatacol=\"value\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:useYn\" combodataset=\"dsUse\" combocodecol=\"value\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "80.56%", "14", null, "32", "10.64%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::registerBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("DelBtn00", "absolute", "71.92%", "14", null, "32", "19.36%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "89.2%", "14", null, "32", "2.32%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("DelBtn");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("searchCodeBtn", "absolute", "63.12%", "14", null, "32", "28.16%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("searchBtn");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Combo("subcombo", "absolute", "9.2%", "66", null, "30", "78.8%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_value("GD");
            obj.set_text("GD");
            obj.set_innerdataset("dsSubCode");
            obj.set_codecolumn("subcode");
            obj.set_datacolumn("subcode");
            obj.set_index("0");

            obj = new Combo("codecombo", "absolute", "31.04%", "66", null, "30", "56.96%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCodeNm");
            obj.set_codecolumn("code");
            obj.set_datacolumn("code");

            obj = new Radio("useRadio", "absolute", "73.84%", "58", null, "50", "18%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_columncount("2");
            obj.set_innerdataset("dsUse");
            obj.set_codecolumn("value");
            obj.set_datacolumn("value");
            obj.style.set_buttonimage("URL('theme://images/btn_radio_N.png')");


            
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
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_Code");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_Code.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_Code.xfdl", function() {
        /********************************************************************************                                                                            
        코드관리 화면                                           						                                                                         
        @Path			시스템공통            				   				
        @Description	시스템 공통 코드 관리하는 화면
        @Author	  		강현준				    			                        								                                            
        @Create             
        @LastUpdated     
                                 		                    				                   		                    				                                           
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        

        //조회버튼 클릭시 발생하는 이벤트
        this.DelBtn_onclick = function(obj,e)
        {
        	
        		
        		var subCode = this.subcombo.text;
        		var code = this.codecombo.text;
        		var codeName =  this.codeNameEdit.value;
        		var use = this.useRadio.value;
        	
        		var argument = "subCode='"+subCode+"' code='"+code+"' codeName='"+codeName+"' use='"+use+"' ";
        	
        	
        	alert(argument);
        	
        	this.dsService.setColumn(0,4,argument);  //transaction에 넘길 변수값 셋팅.
        	
        	//alert(this.dsService.getColumn(0,4));
        	
        	this.gfnService("findCodeList",true);
        	
        }

        
        //그룹코드 선택시 발생하는 이벤트
        this.subcombo_onitemclick = function(obj,e)
        {
        	
        		this.dsService.setColumn(1,4,"subCode="+e.itemtext);  //transaction에 넘길 변수값 셋팅.
        		this.gfnService("findCode");
        }

        

        //등록버튼 클릭시 발생하는 이벤트
        this.addBtn_onclick = function(obj,e)
        {
        	
        		this.dsCode.addRow();
        		this.dsCode.setColumn(this.codeGrid.currentrow,"subCode",this.subcombo.text);
        		this.dsCode.setColumn(this.codeGrid.currentrow,"code",this.codecombo.text);
        		
        		
        }

        
        //저장버튼 클릭시 발생하는 이벤트
        this.saveBtn_onclick = function(obj,e)
        {
        		this.gfnService("batchCode");
        		
        }

        
        //삭제버튼 클릭시 발생하는 이벤트.
        this.DelBtn00_onclick = function(obj,e)
        {
        		this.dsCode.deleteRow(this.codeGrid.currentrow);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc02.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc03.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc04.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.DelBtn00.addEventHandler("onclick", this.DelBtn00_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.searchCodeBtn.addEventHandler("onclick", this.DelBtn_onclick, this);
            this.subcombo.addEventHandler("onitemclick", this.subcombo_onitemclick, this);

        };

        this.loadIncludeScript("CM_Code.xfdl");

       
    };
}
)();
