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
                this.set_name("Sample_Grid");
                this.set_classname("Sample_Grid");
                this.set_titletext("그리드 기능");
                this._setFormPosition(0,0,1024,860);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_top01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">1</Col><Col id=\"C\">2</Col><Col id=\"D\">3</Col></Row><Row><Col id=\"B\">4.2</Col><Col id=\"C\">5.2</Col><Col id=\"D\">6.2</Col></Row><Row><Col id=\"B\">A</Col><Col id=\"C\">B</Col><Col id=\"D\">C</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_top", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">1</Col><Col id=\"C\">2</Col><Col id=\"D\">3</Col></Row><Row><Col id=\"B\">4.2</Col><Col id=\"C\">5.2</Col><Col id=\"D\">6.2</Col></Row><Row><Col id=\"B\">100</Col><Col id=\"C\">200</Col><Col id=\"D\">300</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bottom", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row><Col id=\"B\">11</Col><Col id=\"C\">22</Col><Col id=\"D\">33</Col></Row><Row><Col id=\"B\">14.2</Col><Col id=\"C\">15.2</Col><Col id=\"D\">16.2</Col></Row><Row><Col id=\"B\">500</Col><Col id=\"C\">600</Col><Col id=\"D\">700</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_checkall", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\"/><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\"/><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column1\">3</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\"/><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column1\">4</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\"/><Col id=\"Column4\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sort", this);
            obj.set_enableevent("true");
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" size=\"256\" type=\"STRING\"/><Column id=\"col2\" size=\"256\" type=\"STRING\"/><Column id=\"col3\" size=\"256\" type=\"STRING\"/><Column id=\"col4\" size=\"256\" type=\"STRING\"/><Column id=\"col5\" size=\"256\" type=\"STRING\"/><Column id=\"col6\" size=\"256\" type=\"STRING\"/><Column id=\"col7\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">2</Col><Col id=\"col3\">2G</Col><Col id=\"col4\">SCH-W420</Col><Col id=\"col5\">20081223</Col><Col id=\"col6\">235000</Col><Col id=\"col7\">320000</Col></Row><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">2</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">SCH-M490</Col><Col id=\"col5\">20090111</Col><Col id=\"col6\">353000</Col><Col id=\"col7\">420000</Col></Row><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">2</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">SCH-W270</Col><Col id=\"col5\">20090209</Col><Col id=\"col6\">498000</Col><Col id=\"col7\">680000</Col></Row><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">1</Col><Col id=\"col3\">2G</Col><Col id=\"col4\">SCH-W570</Col><Col id=\"col5\">20081201</Col><Col id=\"col6\">351000</Col><Col id=\"col7\">510000</Col></Row><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">SCH-W550</Col><Col id=\"col5\">20090125</Col><Col id=\"col6\">150000</Col><Col id=\"col7\">610000</Col></Row><Row><Col id=\"col1\">AnyCall</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">SCH-W750</Col><Col id=\"col5\">20090225</Col><Col id=\"col6\">589000</Col><Col id=\"col7\">860000</Col></Row><Row><Col id=\"col1\">cyon</Col><Col id=\"col2\">2</Col><Col id=\"col3\">2G</Col><Col id=\"col4\">LG-KH2100</Col><Col id=\"col5\"/><Col id=\"col6\">256000</Col><Col id=\"col7\">370000</Col></Row><Row><Col id=\"col1\">cyon</Col><Col id=\"col2\">2</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">LG-KU6000</Col><Col id=\"col5\">20090212</Col><Col id=\"col6\">430000</Col><Col id=\"col7\">590000</Col></Row><Row><Col id=\"col1\">cyon</Col><Col id=\"col2\">1</Col><Col id=\"col3\">2G</Col><Col id=\"col4\">LG-KU9100</Col><Col id=\"col5\">20081205</Col><Col id=\"col6\">360000</Col><Col id=\"col7\">630000</Col></Row><Row><Col id=\"col1\">cyon</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">LG-KH8000</Col><Col id=\"col5\"/><Col id=\"col6\">470000</Col><Col id=\"col7\">720000</Col></Row><Row><Col id=\"col1\">cyon</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">LG-KH6500</Col><Col id=\"col5\">20090219</Col><Col id=\"col6\">560000</Col><Col id=\"col7\">840000</Col></Row><Row><Col id=\"col1\">팬택&amp;큐리</Col><Col id=\"col2\">2</Col><Col id=\"col3\">2G</Col><Col id=\"col4\">canU-S1000</Col><Col id=\"col5\">20090303</Col><Col id=\"col6\">270000</Col><Col id=\"col7\">410000</Col></Row><Row><Col id=\"col1\">팬택&amp;큐리</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">canU801EX</Col><Col id=\"col5\"/><Col id=\"col6\"/><Col id=\"col7\">600000</Col></Row><Row><Col id=\"col1\">팬택&amp;큐리</Col><Col id=\"col2\">1</Col><Col id=\"col3\">3G</Col><Col id=\"col4\">canU502S</Col><Col id=\"col5\">20090109</Col><Col id=\"col6\">300000</Col><Col id=\"col7\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox02", "absolute", "10", "741", null, "217", "10", null, this);
            obj.set_text("정렬");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "10", "64", null, "440", "10", null, this);
            obj.set_text("Copy & Paste");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ 그리드 기능");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bottom", "absolute", "529", "116", null, "161", "19", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bottom");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/><Cell col=\"3\" text=\"D\"/><Cell col=\"4\" text=\"E\"/><Cell col=\"5\" text=\"F\"/><Cell col=\"6\" style=\"background2: ;\" text=\"G\"/><Cell col=\"7\" text=\"H\"/></Band><Band id=\"body\" style=\"selectbackground:#dbeef3ff;selectcolor:#222222ff;cellline:1 solid #808080ff ;cellpadding:0 2 0 0;cellalign:right middle;\"><Cell edittype=\"normal\" style=\"selectbackground:EXPR((currow%2)?'#e8f587ff':'#fdd695ff');\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:C\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:D\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:E\"/><Cell col=\"5\" edittype=\"normal\" style=\"background2: ;\" text=\"bind:F\"/><Cell col=\"6\" edittype=\"normal\" style=\"background2: ;\" text=\"bind:G\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:H\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_top", "absolute", "24", "116", "476", "161", null, null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_top");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/><Cell col=\"3\" text=\"D\"/><Cell col=\"4\" text=\"E\"/><Cell col=\"5\" text=\"F\"/><Cell col=\"6\" text=\"G\"/><Cell col=\"7\" text=\"H\"/></Band><Band id=\"body\" style=\"selectbackground:#dbeef3ff;selectcolor:#222222ff;cellline:1 solid #808080ff ;cellpadding:0 2 0 0;cellalign:right middle;\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" style=\"selectbackground: ;\" text=\"bind:C\"/><Cell col=\"3\" edittype=\"normal\" style=\"selectbackground: ;\" text=\"bind:D\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:E\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:F\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:G\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:H\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "24", "301", "476", "176", null, null, this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            obj.set_url("Sample::Sample_Grid_Sub.xfdl");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "529", "334", null, "143", "19", null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            obj.set_url("Sample::Sample_Grid_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "528", "307", "105", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Div");
            obj.style.set_font("bold antialias 11 Verdana");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "10", "525", null, "179", "10", null, this);
            obj.set_text("전체선택");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_checkall", "absolute", "28", "557", "378", "130", null, null, this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_checkall");
            obj.set_cellsizingtype("none");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:_chk\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "423", "557", "97", "34", null, null, this);
            obj.set_taborder("11");
            obj.set_text("데이타셋확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_onOff", "absolute", "529", "80", "62", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("on / off");
            this.addChild(obj.name, obj);

            obj = new Static("st_msg", "absolute", "534", "180", "480", "42", null, null, this);
            obj.set_taborder("13");
            obj.set_text("◀ cell > <b v='true'>selectbackground</b>: EXPR((currow%2)?'#e8f587ff':'#fdd695ff')");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.style.set_background("yellow");
            obj.style.set_border("3 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sort", "absolute", "28", "768", "580", "174", null, null, this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_sort");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"Merge1\"/><Cell col=\"4\" rowspan=\"2\" text=\"col5\"/><Cell col=\"5\" colspan=\"2\" text=\"Merge2\"/><Cell row=\"1\" text=\"col1\" expandshow=\"hide\"/><Cell row=\"1\" col=\"1\" text=\"col2\"/><Cell row=\"1\" col=\"2\" text=\"col3\"/><Cell row=\"1\" col=\"3\" text=\"col4\"/><Cell row=\"1\" col=\"5\" text=\"col6\"/><Cell row=\"1\" col=\"6\" text=\"col7\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:col2\" combodataset=\"ds_type\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"2\" text=\"bind:col3\"/><Cell col=\"3\" text=\"bind:col4\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:col5\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:col6\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:col7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "632", "768", "120", "50", null, null, this);
            obj.set_taborder("16");
            obj.set_text("소트초기화");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "532", "538", null, "156", "16", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 860, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Grid");
            		p.set_titletext("그리드 기능");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data", "", "ds_sort");
            this._addPreloadList("fdl", "Sample::Sample_Grid_Sub.xfdl");
            this._addPreloadList("fdl", "Sample::Sample_Grid_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_Grid.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 샘플
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  
         * 04. 작성일   : 
         * 05. 작성자   : 
         * 06. 수정이력 : 
         ***********************************************************************************
         *     수정일     작성자   내용
         ***********************************************************************************
         *     
         **********************************************************************************/

        
        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/

        
        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.form_onload = function(obj,e)
        {
        	//기본 공통  함수 초기화
        	Iject.formOnload(obj);
        	
        	//그리드 복사&붙여넣기 설정
        	var config = { copypaste:true };
        	Iject.Grid.init(this, [this.grd_top, this.grd_bottom], config);
        	
        	//전체체크 설정
        	//updatecontrol - false : rowtype 변경안됨, true : rowtype 자동변경
        	config = { copypaste:true, checkall:true, sorting:true, updatecontrol:true};
        	Iject.Grid.init(this, this.grd_checkall, config);	
        	
        	//정렬 설정
        	config = { sorting:true };
        	Iject.Grid.init(this, this.grd_sort, config);	
        }

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/

        
        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        
        this.btn_onOff_onclick = function(obj,e)
        {
        	if(this.st_msg.visible){
        		this.st_msg.set_visible(false);
        	} else {
        		this.st_msg.set_visible(true);
        	}
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(this.ds_checkall.saveXML("ds_checkall", "a"));
        }

        this.Button01_onclick = function(obj,e)
        {
        	Iject.Grid.clearAllSort(this.grd_sort);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bottom.addEventHandler("oncolumnchanged", this.ds_bottom_oncolumnchanged, this);
            this.ds_bottom.addEventHandler("onrowposchanged", this.ds_bottom_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_checkall.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.btn_onOff.addEventHandler("onclick", this.btn_onOff_onclick, this);
            this.grd_sort.addEventHandler("onmouseenter", this.grd_sort_onmouseenter, this);
            this.grd_sort.addEventHandler("onmouseleave", this.grd_sort_onmouseleave, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Sample_Grid.xfdl");
        this.loadPreloadList();
       
    };
}
)();
