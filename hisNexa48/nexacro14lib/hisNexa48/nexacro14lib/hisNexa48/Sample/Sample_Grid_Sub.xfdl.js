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
                this.set_name("Sample_Grid_Sub");
                this.set_classname("Sample_Grid");
                this.set_titletext("그리드 기능(하위폼)");
                this._setFormPosition(0,0,560,195);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_subBottom", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"B\">852</Col><Col id=\"A\">741</Col><Col id=\"C\">963</Col></Row><Row><Col id=\"A\"/><Col id=\"B\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_subTop", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"A\" type=\"STRING\" size=\"256\"/><Column id=\"B\" type=\"STRING\" size=\"256\"/><Column id=\"C\" type=\"STRING\" size=\"256\"/><Column id=\"D\" type=\"STRING\" size=\"256\"/><Column id=\"E\" type=\"STRING\" size=\"256\"/><Column id=\"F\" type=\"STRING\" size=\"256\"/><Column id=\"G\" type=\"STRING\" size=\"256\"/><Column id=\"H\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"B\">456</Col><Col id=\"A\">123</Col></Row><Row><Col id=\"A\">789</Col><Col id=\"B\">10</Col></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row><Col id=\"B\"/><Col id=\"C\"/><Col id=\"D\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_subTop", "absolute", "0", "0", "47.68%", null, null, "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_subTop");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/></Band><Band id=\"body\" style=\"selectbackground:#dbeef3ff;selectcolor:#222222ff;cellline:1 solid #808080ff ;cellpadding:0 2 0 0;cellalign:right middle;\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" style=\"selectbackground: ;\" text=\"bind:C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_subBottom", "absolute", "51.25%", "0", null, null, "0", "0", this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_subBottom");
            obj.set_selecttype("area");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"A\"/><Cell col=\"1\" text=\"B\"/><Cell col=\"2\" text=\"C\"/></Band><Band id=\"body\" style=\"selectbackground:#dbeef3ff;selectcolor:#222222ff;cellline:1 solid #808080ff ;cellpadding:0 2 0 0;cellalign:right middle;\"><Cell edittype=\"normal\" text=\"bind:A\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:B\"/><Cell col=\"2\" edittype=\"normal\" style=\"selectbackground: ;\" text=\"bind:C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 560, 195, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Grid");
            		p.set_titletext("그리드 기능(하위폼)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Grid_Sub.xfdl", function() {
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
        	var oConfig = { copypaste:true };
        	Iject.Grid.init(this, [this.grd_subTop, this.grd_subBottom], oConfig);		
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

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("Sample_Grid_Sub.xfdl");

       
    };
}
)();
