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
                this.set_name("Sample_Excel");
                this.set_classname("Sample_Excel");
                this.set_titletext("엑셀 Import/Export");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_out", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sabun\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"jikgup\" type=\"STRING\" size=\"256\"/><Column id=\"ipsa_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"DATE\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"marry\" type=\"STRING\" size=\"256\"/><Column id=\"salary\" type=\"STRING\" size=\"256\"/><Column id=\"smemo\" type=\"STRING\" size=\"256\"/><Column id=\"edit_color\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sabun\">31321</Col></Row><Row><Col id=\"sabun\">145151</Col></Row><Row><Col id=\"sabun\">51614</Col></Row><Row><Col id=\"sabun\">323552</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ExcelExport", "absolute", null, "59", "76", "23", "124", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀Export");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport", "absolute", "89.45%", "357", null, "23", "0.98%", null, this);
            obj.set_taborder("1");
            obj.set_text("엑셀Import");
            obj.style.set_background("greenyellow");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "10", "89", null, null, "10", "266", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_out");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"name\"/><Cell col=\"2\" disptype=\"normal\" text=\"dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"email\"/><Cell col=\"6\" disptype=\"normal\" text=\"sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"edit_color\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:email\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:edit_color\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("3");
            obj.set_text("@ 엑셀 Import/Export");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport00", "absolute", null, "58", "98", "23", "10", null, this);
            obj.set_taborder("4");
            obj.set_text("엑셀Import");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Excel");
            		p.set_titletext("엑셀 Import/Export");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Excel.xfdl", function() {
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
        }

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/
        /**
         * Excel Export 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.btn_ExcelExport_onclick = function(obj,e)
        {
        	 Iject.exportExcel(this, this.grd_list);	
        }

        this.btn_ExcelImport_onclick = function(obj,e)
        {
          /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1 
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호 
           */
            var sSheet = "body=sheet1!A2;";  
           
          /*
           * 출력할 dataset 명
           */
        	var ds = this.ds_out;
        	Iject.importExcel(this, sSheet, ds);
        }
        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ExcelExport.addEventHandler("onclick", this.btn_ExcelExport_onclick, this);
            this.btn_ExcelImport.addEventHandler("onclick", this.btn_ExcelImport_onclick, this);
            this.btn_ExcelImport00.addEventHandler("onclick", this.btn_ExcelImport_onclick, this);

        };

        this.loadIncludeScript("Sample_Excel.xfdl");

       
    };
}
)();
