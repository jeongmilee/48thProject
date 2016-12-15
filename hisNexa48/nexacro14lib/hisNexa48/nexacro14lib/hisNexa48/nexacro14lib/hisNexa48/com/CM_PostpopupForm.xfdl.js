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
                this.set_name("CM_PostpopupForm");
                this.set_classname("CM_PostpopupForm");
                this.set_titletext("주소검색");
                this._setFormPosition(0,0,700,519);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPostCond", this);
            obj._setContents("<ColumnInfo><Column id=\"sidoCode\" type=\"STRING\" size=\"256\"/><Column id=\"sidoName\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguCode\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguName\" type=\"STRING\" size=\"256\"/><Column id=\"roadKeyword\" type=\"STRING\" size=\"256\"/><Column id=\"dongKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">findSido</Col><Col id=\"URL\">erp47::com/post/findSido.do</Col><Col id=\"inData\"/><Col id=\"outData\">dsPostSi=dsPostSi</Col><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row><Row><Col id=\"serviceID\">findSigungu</Col><Col id=\"URL\">erp47::com/post/findSigungu.do</Col><Col id=\"outData\">dsPostSigungu=dsPostSigungu</Col><Col id=\"callbackFunc\">callbackSigungu</Col><Col id=\"inData\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findRoadPost</Col><Col id=\"URL\">erp47::com/post/findRoadPost.do</Col><Col id=\"outData\">dsRoadPost=dsRoadPost</Col><Col id=\"inData\">dsPostCond=dsPostCond</Col><Col id=\"callbackFunc\"/><Col id=\"argument\"/></Row><Row><Col id=\"serviceID\">findDongPost</Col><Col id=\"URL\">erp47::com/post/findDongPost.do</Col><Col id=\"outData\">dsDongPost=dsDongPost</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPostSi", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sidoCode\" type=\"STRING\" size=\"256\"/><Column id=\"sidoName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDongPost", this);
            obj._setContents("<ColumnInfo><Column id=\"zipCode\" type=\"STRING\" size=\"256\"/><Column id=\"baseAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRoadPost", this);
            obj._setContents("<ColumnInfo><Column id=\"zipCode\" type=\"STRING\" size=\"256\"/><Column id=\"baseAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPostSigungu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sigunguCode\" type=\"STRING\" size=\"256\"/><Column id=\"sigunguName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div04", "absolute", "0.14%", "0", null, "60", "0.43%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("transparent URL('img::titleBar5.jpg')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "41.86%", "-5", null, "60", "42%", null, this);
            obj.set_taborder("1");
            obj.set_text("주소검색");
            obj.style.set_color("dodgerblue");
            obj.style.set_font("bold antialias 20 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Tab("postTab", "absolute", "5.14%", "67", null, "405", "4.57%", null, this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.postTab);
            obj.set_text("지번주소");
            this.postTab.addChild(obj.name, obj);
            obj = new Static("inDoroStc", "absolute", "6.98%", "12", null, "30", "67.62%", null, this.postTab.tabpage1);
            obj.set_taborder("10");
            obj.set_text("읍/면/동 명을 입력하세요");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Edit("dongEdit", "absolute", "32.38%", "12", null, "30", "17.46%", null, this.postTab.tabpage1);
            obj.set_taborder("11");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Grid("dongPostGrid", "absolute", "5.56%", "54", null, "182", "2.7%", null, this.postTab.tabpage1);
            obj.set_taborder("12");
            obj.set_binddataset("dsDongPost");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"392\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:zipCode\"/><Cell col=\"1\" text=\"bind:baseAddr\"/></Band></Format></Formats>");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Static("inDongZipStc", "absolute", "5.71%", "255", null, "26", "83.17%", null, this.postTab.tabpage1);
            obj.set_taborder("13");
            obj.set_text("우편번호");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Static("inDongBaseStc", "absolute", "34.92%", "255", null, "26", "53.97%", null, this.postTab.tabpage1);
            obj.set_taborder("14");
            obj.set_text("기본주소");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Static("inDongDetailStc", "absolute", "5.71%", "296", null, "30", "83.17%", null, this.postTab.tabpage1);
            obj.set_taborder("15");
            obj.set_text("상세주소");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Edit("zipEdit", "absolute", "17.62%", "255", null, "26", "66.35%", null, this.postTab.tabpage1);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Edit("detailEdit", "absolute", "17.62%", "296", null, "31", "3.17%", null, this.postTab.tabpage1);
            obj.set_taborder("17");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Edit("baseEdit", "absolute", "46.83%", "255", null, "28", "3.17%", null, this.postTab.tabpage1);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "83.33%", "12", null, "32", "2.7%", null, this.postTab.tabpage1);
            obj.set_taborder("19");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.postTab.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.postTab);
            obj.set_text("도로명주소");
            this.postTab.addChild(obj.name, obj);
            obj = new Static("inDoStc", "absolute", "0.48%", "11", null, "30", "88.41%", null, this.postTab.tabpage2);
            obj.set_taborder("14");
            obj.set_text("시도");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Static("inGunStc", "absolute", "39.37%", "11", null, "30", "49.52%", null, this.postTab.tabpage2);
            obj.set_taborder("15");
            obj.set_text("시군구");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Combo("sidoCombo", "absolute", "11.9%", "11", null, "32", "63.97%", null, this.postTab.tabpage2);
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("dsPostSi");
            obj.set_codecolumn("sidoCode");
            obj.set_datacolumn("sidoName");
            obj = new Combo("gunguCombo", "absolute", "51.43%", "11", null, "32", "20%", null, this.postTab.tabpage2);
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_innerdataset("dsPostSigungu");
            obj.set_codecolumn("sigunguCode");
            obj.set_datacolumn("sigunguName");
            obj = new Static("inDoroStc", "absolute", "3.02%", "53", null, "30", "76.35%", null, this.postTab.tabpage2);
            obj.set_taborder("18");
            obj.set_text("도로명을 입력하세요");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Edit("doroEdit", "absolute", "23.49%", "54", null, "27", "17.3%", null, this.postTab.tabpage2);
            obj.set_taborder("19");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Grid("doroGrid", "absolute", "1.11%", "90", null, "164", "0.95%", null, this.postTab.tabpage2);
            obj.set_taborder("20");
            obj.set_binddataset("dsRoadPost");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"306\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:zipCode\"/><Cell col=\"1\" text=\"bind:baseAddr\"/></Band></Format></Formats>");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Static("inDongZipStc", "absolute", "3.17%", "267", null, "30", "85.71%", null, this.postTab.tabpage2);
            obj.set_taborder("21");
            obj.set_text("우편번호");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Static("inDongBaseStc", "absolute", "31.11%", "267", null, "30", "57.94%", null, this.postTab.tabpage2);
            obj.set_taborder("22");
            obj.set_text("기본주소");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Static("inDongDetailStc", "absolute", "3.17%", "304", null, "30", "85.71%", null, this.postTab.tabpage2);
            obj.set_taborder("23");
            obj.set_text("상세주소");
            obj.style.set_background("dodgerblue");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("cornsilk");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 돋움");
            obj.getSetter("class").set("AreaStc");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Edit("zipEdit", "absolute", "14.44%", "266", null, "31", "69.21%", null, this.postTab.tabpage2);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Edit("baseEdit", "absolute", "42.54%", "267", null, "33", "0.95%", null, this.postTab.tabpage2);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Edit("detailEdit", "absolute", "14.6%", "305", null, "29", "0.95%", null, this.postTab.tabpage2);
            obj.set_taborder("26");
            this.postTab.tabpage2.addChild(obj.name, obj);
            obj = new Button("searchBtn", "absolute", "81.9%", "9", null, "39", "0.79%", null, this.postTab.tabpage2);
            obj.set_taborder("27");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.postTab.tabpage2.addChild(obj.name, obj);

            obj = new Button("okBtn", "absolute", "42%", "477", null, "36", "41.86%", null, this);
            obj.set_taborder("3");
            obj.style.set_background("@gradation URL('img::okBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 630, 389, this.postTab.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("지번주소");

            	}
            );
            this.postTab.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.postTab.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("도로명주소");

            	}
            );
            this.postTab.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 519, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_PostpopupForm");
            		p.set_titletext("주소검색");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_PostpopupForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_PostpopupForm.xfdl", function() {
        /*TODO : 주소값(우편번호, 기본주소, 상세주소) 넘겨주는 루틴 작성할것	 
               지번주소 우편번호(###-###) 와 도로명주소 우편번호(######) 포맷 맞출것            				                                            
        ********************************************************************************/
        //include "scripts::commonScripts.xjs"

        
        this.CM_PostpopupForm_onload = function(obj,e)
        { //화면 로드 되기전에 시도리스트 가져오기.
        	
        	
        		this.gfnService("findSido");
        }

        this.postTab_tabpage2_sidoCombo_onitemclick = function(obj,e)
        {
          //시도 콤보박스에서 목록 클릭시 군구 리스트 가져오기.
          
        	this.dsService.setColumn(1,4,"sido="+e.itemvalue);
        	this.gfnService("findSigungu");
        	
        }

        
        this.postTab_tabpage2_searchBtn_onclick = function(obj,e)
        {
           //도로명탭에서 조회버튼을 눌렀을 때 ,
           
        	this.dsPostCond.clearData();
        	this.dsPostCond.addRow();
        	this.dsPostCond.setColumn(0, "sidoCode", this.postTab.tabpage2.sidoCombo.value);
        	this.dsPostCond.setColumn(0, "sigunguName", this.postTab.tabpage2.gunguCombo.text);
        	this.dsPostCond.setColumn(0, "roadKeyword", this.postTab.tabpage2.doroEdit.value);
        	//alert(this.postTab.tabpage2.sidoCombo.value);
        	//alert(this.postTab.tabpage2.sidoCombo.text);
        	//alert(this.postTab.tabpage2.gunguCombo.value);
        	//alert(this.postTab.tabpage2.gunguCombo.text);
        	
        	//아 시박 진짜 value랑 text의 명확한 차이를 모르겠다 ㅗ
        	this.gfnService("findRoadPost");
        	
        	
        }

        this.postTab_tabpage1_searchBtn_onclick = function(obj,e)
        {
        	//지번주소탭에서 조회버튼을 눌렀을 때,
        	this.dsService.setColumn(3, 4, "dong=" + this.postTab.tabpage1.dongEdit.value);
        	this.gfnService("findDongPost");
        	
        }

        this.postTab_tabpage1_dongPostGrid_oncellclick = function(obj,e)
        {
        	//지번주소탭에서 그리드 셀 클릭시,
        	this.postTab.tabpage1.zipEdit.set_value(this.dsDongPost.getColumn(this.dsDongPost.rowposition,1));
        	this.postTab.tabpage1.baseEdit.set_value(this.dsDongPost.getColumn(this.dsDongPost.rowposition,0));
        	
        }

        this.postTab_tabpage2_doroGrid_oncellclick = function(obj,e)
        {
        	//도로명탭에서 그리드 셀 클릭시,

        	this.postTab.tabpage2.zipEdit.set_value(this.dsRoadPost.getColumn(this.dsRoadPost.rowposition,1));
        	this.postTab.tabpage2.baseEdit.set_value(this.dsRoadPost.getColumn(this.dsRoadPost.rowposition,0));
        	
        	
        }

        this.okBtn_onclick = function(obj,e)
        // 확인버튼눌렀을때 , 부모프레임으로 값을 전달하는 Function
        // 부모프레임쪽에서는 setPost Function을 만들어서 받아서 쓰기만 하면 된다.
        {
        		var target;
        		if(this.postTab.tabindex == 0){
        					target=this.postTab.tabpage1;
        		
        		}else{
        					target=this.postTab.tabpage2;
        		}
        		
        	this.opener.setPost(target.zipEdit.value, target.baseEdit.value, target.detailEdit.value);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.CM_PostpopupForm_onload, this);
            this.postTab.tabpage1.dongPostGrid.addEventHandler("oncellclick", this.postTab_tabpage1_dongPostGrid_oncellclick, this);
            this.postTab.tabpage1.searchBtn.addEventHandler("onclick", this.postTab_tabpage1_searchBtn_onclick, this);
            this.postTab.tabpage2.sidoCombo.addEventHandler("onitemclick", this.postTab_tabpage2_sidoCombo_onitemclick, this);
            this.postTab.tabpage2.doroGrid.addEventHandler("oncellclick", this.postTab_tabpage2_doroGrid_oncellclick, this);
            this.postTab.tabpage2.searchBtn.addEventHandler("onclick", this.postTab_tabpage2_searchBtn_onclick, this);
            this.okBtn.addEventHandler("onclick", this.okBtn_onclick, this);

        };

        this.loadIncludeScript("CM_PostpopupForm.xfdl");

       
    };
}
)();
