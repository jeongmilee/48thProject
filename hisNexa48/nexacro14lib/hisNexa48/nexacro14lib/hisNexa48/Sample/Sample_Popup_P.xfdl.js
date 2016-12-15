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
                this.set_name("Sample_Popup_P");
                this.set_classname("Test035_pop");
                this.set_titletext("팝업창");
                this._setFormPosition(0,0,800,400);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">aaa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">bbb</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">222</Col><Col id=\"Column2\">333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "20", "50", "220", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("문자열 반환");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "20", "93", "220", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Array 반환(문자열)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "20", "180", "220", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Array 반환(문자열 && 데이타셋)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "455", "83", "241", "82", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "456", "207", "241", "82", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "616", "48", "77", "24", null, null, this);
            obj.set_taborder("5");
            obj.set_text("행 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "20", "223", "220", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Json 반환(문자열 && 데이타셋)");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "20", "136", "220", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("데이타셋");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "10", "341", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_text("호출한 부모장으로 파라미터 전달");
            obj.style.set_color("red");
            obj.style.set_font("bold 12 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Test035_pop");
            		p.set_titletext("팝업창");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Popup_P.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  
         * 04. 작성일   : 
         * 05. 작성자   : 
         * 06. 수정이력 : 
         ***********************************************************************************
         *     수정일     작성자   내용
         ***********************************************************************************
         *     
         ***********************************************************************************
        */
        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/

        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.form_onload = function (obj,e)
        {
        	Iject.formOnload(obj);
        	
        	//부모창에서 전달된 파라미터 받기
        	trace(" this.parent.arg1 : " +this.parent.arg1);
        	trace(" this.parent.arg2 : " +this.parent.arg2);    
        	
        	//Tip. 팝업유무 판단하기
        	if(Iject.Util.isForm(obj) == "P") trace("Popup Open!!!");
        	else if(Iject.Util.isForm(obj) == "M") trace("Mainframe Form Open!!!");
        }

        // String 반환
        this.Button00_onclick = function(obj,e)
        {
        	var str = "testArgq11111111111111111111";

        	Iject.close(this, str);	
        }

        // Array 반환
        this.Button01_onclick = function(obj,e)
        {	
        	var arr = ["testvalue0", "testvalue1"];
            Iject.close(this, arr);    
        }

        // Dataset 반환
        this.Button05_onclick = function(obj,e)
        {	
        	//방법1		
        	this.opener.ds_rtn_1.copyData(this.ds_1);
        	
        	//방법2
            var ds2XML = this.ds_2.saveXML();
        	
        	Iject.close(this, ds2XML);
        }

        // Array 반환(n개의 데이타셋 반환)
        this.Button02_onclick = function(obj,e)
        {
        	//방법 1
        	//Dataset 인 경우, saveXML() 함수를 사용해서 string값으로 리턴시킨다.
        	//팝업 콜백에서 loadXml() 함수를 사용하여 다시 dataset으로 변환해준다.
        	//saveXML 시 'a' 옵션을 주면 row정보까지 string으로 전달할 수 있다.
        	var obj = ["testvalue", this.ds_1.saveXML("ds_1", "a"), this.ds_1.saveXML()];
        	Iject.close(this, obj);
        	
        	//방법 2
        	//데이타셋 객체를 생성하여 copyData(), assign()(row정보포함) 함수로 복사한다.
        	//주의!!! 바로 데이타셋을 전달할 경우 해당 팝업이 사라지면서 데이타셋도 사라지게된다.
        	
        // 	var dsRtn1 = new Dataset("ds_1");
        // 	dsRtn1.assign(this.ds_1);
        // 	
        // 	var dsRtn2 = new Dataset();
        // 	dsRtn2.copyData(this.ds_2);	
        // 	
        // 	var obj = [dsRtn1, dsRtn2];
        // 	Iject.close(this, obj);	
        }

        // Object Json 반환(n개의 데이타셋 반환)
        this.Button04_onclick = function(obj,e)
        {	
        	var dsRtn1 = new Dataset("ds_1");
        	dsRtn1.assign(this.ds_1);
        	
        	var objJson = {key1:"1111", key2:["test00", "test01"], key3:dsRtn1};     

            Iject.close(this, objJson);
        }

        
        this.Button03_onclick = function(obj,e)
        {
        	this.ds_1.deleteRow(this.ds_1.rowposition);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);

        };

        this.loadIncludeScript("Sample_Popup_P.xfdl");

       
    };
}
)();
