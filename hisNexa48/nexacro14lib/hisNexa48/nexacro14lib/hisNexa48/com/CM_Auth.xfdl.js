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
                this.set_name("CM_Auth");
                this.set_classname("CM_Auth");
                this.set_titletext("권한 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findAuthList</Col><Col id=\"URL\">erp47::com/findAuthList.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">authCallback</Col><Col id=\"outData\">dsAuth=dsAuth</Col></Row><Row><Col id=\"serviceID\">findAuthMenuList</Col><Col id=\"URL\">erp47::com/findAuthMenuList.do</Col><Col id=\"outData\">dsMenu=dsMenu</Col></Row><Row><Col id=\"serviceID\">findAllMenu</Col><Col id=\"URL\">erp47::com/findAllMenu.do</Col><Col id=\"outData\">dsAllMenu=dsAllMenu</Col></Row><Row><Col id=\"serviceID\">processAuthBatch</Col><Col id=\"URL\">erp47::com/authMenuBatch.do</Col><Col id=\"inData\">dsAuth=dsAuth:u dsMenu=dsMenu:u</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"authCode\" type=\"STRING\" size=\"256\"/><Column id=\"authName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuCode\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"authCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAllMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"menuCode\" type=\"STRING\" size=\"256\"/><Column id=\"menuName\" type=\"STRING\" size=\"256\"/><Column id=\"menuLevel\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0%", "0", null, "60", "-21.78%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar2.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "44.16%", "-4", null, "60", "44%", null, this);
            obj.set_taborder("1");
            obj.set_text("권한 관리");
            obj.style.set_color("dodgerblue");
            obj.style.set_font("bold antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc", "absolute", "1.56%", "77", null, "27", "91.41%", null, this);
            obj.set_taborder("2");
            obj.set_text("권한명");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Edit("authEdt", "absolute", "9.28%", "78", null, "26", "82.71%", null, this);
            obj.set_taborder("3");
            obj.getSetter("class").set("AreaEdt");
            this.addChild(obj.name, obj);

            obj = new Grid("authGrid", "absolute", "1.56%", "120", null, "580", "74.51%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsAuth");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"권한코드\"/><Cell col=\"1\" text=\"권한명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"expr:(dataset.getRowType(currow) == 2 || dataset.getRowType(currow) == 4) ? 'normal' : 'none'\" text=\"bind:authCode\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:authName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc00", "absolute", "28.52%", "77", null, "27", "64.45%", null, this);
            obj.set_taborder("5");
            obj.set_text("메뉴관리");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("menuGrid", "absolute", "28.61%", "120", null, "580", "32.81%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"148\"/><Column size=\"84\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메뉴코드\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"expr:getRowType(currow)==1?&quot;none&quot;:&quot;normal&quot;\" text=\"bind:menuCode\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:menuName\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:menuLevel\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:useYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("subCodeStc01", "absolute", "73.05%", "77", null, "27", "20.02%", null, this);
            obj.set_taborder("7");
            obj.set_text("전체메뉴");
            obj.style.set_background("dodgerblue");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.addChild(obj.name, obj);

            obj = new Grid("allMenuGrid", "absolute", "73.44%", "120", null, "580", "2.73%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("dsAllMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"194\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메뉴코드\"/><Cell col=\"1\" text=\"메뉴명\"/></Band><Band id=\"body\"><Cell text=\"bind:menuCode\"/><Cell col=\"1\" text=\"bind:menuName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("searchAuthBtn", "absolute", "18.16%", "75", null, "32", "74.32%", null, this);
            obj.set_taborder("9");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addAuthBtn", "absolute", "3.71%", "708", null, "32", "87.5%", null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation URL('img::addBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delAuthBtn", "absolute", "14.55%", "708", null, "32", "76.66%", null, this);
            obj.set_taborder("11");
            obj.style.set_background("@gradation URL('img::deleteBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("addMenuBtn", "absolute", "68.36%", "376", null, "32", "27.93%", null, this);
            obj.set_taborder("12");
            obj.style.set_background("@gradation URL('img::miniBtn1.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("delMenuBtn", "absolute", "68.36%", "416", null, "32", "27.93%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::miniBtn2.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("batchAuthMenuBtn", "absolute", "80.76%", "708", null, "32", "10.45%", null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::saveBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_Auth");
            		p.set_titletext("권한 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_Auth.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_Auth.xfdl", function() {
        /********************************************************************************                                                                            
        권한 & 메뉴 관리 화면                                           						                                                                         
        @Path			시스템공통            				   				
        @Description	권한과 메뉴를 관리하기 위한 화면							
        @Author	  		임행섭(modification by 강현준)			    			                        								                                            
        @Create         2016. 5. 27.          
        @LastUpdated    2016. 11. 25.  
        	권한그리드에서 권한추가나 권한명 변경시 권한코드 편집 가능하도록 기능 추가
        	권한메뉴 추가시 전체메뉴 한칸 밑으로 내려가도록 편의기능 추가
        ********************************************************************************/

        //include "scripts::commonScripts.xjs"

        //권한 조회 버튼
        this.searchAuthBtn_onclick = function(obj,e)
        {	
        	
        	//검색어 셋팅
        	this.dsService.setColumn(0,4,"authName=" + this.authEdt.text);
        	
        	//권한 검색
        	this.gfnService("findAuthList");
        	
        	//권한 전체임임임임수정
        	this.gfnService("findAllMenu");
        }

        // 클릭한 권한에 대한 메뉴
        this.authGrid_oncellclick = function(obj,e)
        {
        	this.dsService.setColumn(1, 4, "authCode=" + this.dsAuth.getColumn(e.row,"authCode")); 
        	this.gfnService("findAuthMenuList");
        }

        //권한 추가
        this.addAuthBtn_onclick = function(obj,e)
        {
        	this.dsAuth.addRow();
        }

        //권한 삭제
        this.delAuthBtn_onclick = function(obj,e)
        {
        	this.dsAuth.deleteRow(this.authGrid.currentrow);
        }

        //권한 메뉴 추가
        this.addMenuBtn_onclick = function(obj,e)
        {
        	var menuCode  = this.dsAllMenu.getColumn(this.allMenuGrid.currentrow, "menuCode");
        	var menuName  = this.dsAllMenu.getColumn(this.allMenuGrid.currentrow, "menuName");
        	var menuLevel = this.dsAllMenu.getColumn(this.allMenuGrid.currentrow, "menuLevel");
        	var useYn 	  = this.dsAllMenu.getColumn(this.allMenuGrid.currentrow, "useYn");
        	var authCode  = this.dsAuth.getColumn(this.authGrid.currentrow, "authCode");
        	
        	this.dsMenu.addRow();
        	this.dsMenu.setColumn(this.menuGrid.currentrow, "menuCode", menuCode);
        	this.dsMenu.setColumn(this.menuGrid.currentrow, "menuName", menuName);
        	this.dsMenu.setColumn(this.menuGrid.currentrow, "menuLevel", menuLevel);
        	this.dsMenu.setColumn(this.menuGrid.currentrow, "useYn", useYn);
        	this.dsMenu.setColumn(this.menuGrid.currentrow, "authCode", authCode);
        	
        	// 전체메뉴 그리드 한칸 아래로 이동
        	this.dsAllMenu.set_rowposition(this.allMenuGrid.currentrow + 1);
        }

        //권한 메뉴 삭제
        this.delMenuBtn_onclick = function(obj,e)
        {
        	this.dsMenu.deleteRow(this.menuGrid.currentrow);
        }

        //일괄처리
        this.batchAuthMenuBtn_onclick = function(obj,e)
        {
        	if(confirm("일괄처리 하시겠습니까?")){
        		this.dsService.setColumn(3, 4, "authCode=" + this.dsAuth.getColumn(this.authGrid.currentrow, "authCode"));
        		this.gfnService("processAuthBatch");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.subCodeStc.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.authGrid.addEventHandler("oncellclick", this.authGrid_oncellclick, this);
            this.subCodeStc00.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.subCodeStc01.addEventHandler("onclick", this.subCodeStc_onclick, this);
            this.searchAuthBtn.addEventHandler("onclick", this.searchAuthBtn_onclick, this);
            this.addAuthBtn.addEventHandler("onclick", this.addAuthBtn_onclick, this);
            this.delAuthBtn.addEventHandler("onclick", this.delAuthBtn_onclick, this);
            this.addMenuBtn.addEventHandler("onclick", this.addMenuBtn_onclick, this);
            this.delMenuBtn.addEventHandler("onclick", this.delMenuBtn_onclick, this);
            this.batchAuthMenuBtn.addEventHandler("onclick", this.batchAuthMenuBtn_onclick, this);

        };

        this.loadIncludeScript("CM_Auth.xfdl");

       
    };
}
)();
