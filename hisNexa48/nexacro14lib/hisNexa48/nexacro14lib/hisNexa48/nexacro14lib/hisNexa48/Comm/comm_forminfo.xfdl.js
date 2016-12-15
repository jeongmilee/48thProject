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
                this.set_name("comm_forminfo");
                this.set_classname("comm_forminfo");
                this.set_titletext("화면정보(개발용)");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"xml\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">3</Col><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">4</Col><Col id=\"Column4\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gvariables", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gdatasets", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"xml\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gxml", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "10", "10", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_preload("true");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("Form");
            obj.style.set_background("#ffffffff");
            this.Tab00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "10", "15", "244", null, null, "15", this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "265", "15", null, null, "10", "15", this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("Application");
            obj.style.set_background("#ffffffff");
            this.Tab00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "10", "57", "244", null, null, "15", this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_binddataset("ds_gdatasets");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "265", "57", null, null, "10", "15", this.Tab00.tabpage2);
            obj.set_taborder("1");
            obj.set_binddataset("ds_gxml");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "5.98%", "16", null, "28", "77.99%", null, this.Tab00.tabpage2);
            this.Tab00.tabpage2.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Tab00.tabpage2.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">v</Col><Col id=\"datacolumn\">variable</Col></Row><Row><Col id=\"codecolumn\">d</Col><Col id=\"datacolumn\">dataset</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj = new Static("Static00", "absolute", "0.6%", "20", null, "20", "95.42%", null, this.Tab00.tabpage2);
            obj.set_taborder("3");
            obj.set_text("global");
            obj.style.set_align("right middle");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "10", "57", null, "386", "10", null, this.Tab00.tabpage2);
            obj.set_taborder("4");
            obj.set_binddataset("ds_gvariables");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:value\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("Form");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("Application");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comm_forminfo");
            		p.set_titletext("화면정보(개발용)");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comm_forminfo.xfdl", function() {
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
        	var pThis = this.parent.oForm;
        	   
        	if(!Eco.isEmpty(pThis)) this.set_forminfo(pThis);
        	this.set_application();
        	
        	this.page1 = this.Tab00.tabpage1;
        	this.page2 = this.Tab00.tabpage2;
        	
        	this.Tab00.tabpage2.Radio00.set_index(0);
        	this.Tab00.tabpage2.Grid00.set_visible(false);
        	this.Tab00.tabpage2.Grid01.set_visible(false);
        	this.Tab00.tabpage2.Grid02.set_visible(true);
        }

        this.form_close = function(obj,e)
        {
        	Iject.close(this);
        }

        this.set_forminfo = function(pThis)
        {
        	this.ds_list.clearData();
        	this.ds_list.set_enableevent(false);
        	var oComp = Eco.XComp.query(pThis, "typeOf == 'Dataset'","");
        	for (var i = 0; i < oComp.length; i++){
        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow, "name", oComp[i].name);
        		this.ds_list.setColumn(nRow, "xml", oComp[i].saveXML());
        	}
        	this.ds_list.set_rowposition(-1);
        	this.ds_list.set_enableevent(true);
        }

        this.set_application = function()
        {
        	//variables
        	this.ds_gvariables.clearData();
        	var vars = application._variables; 
        	for(var i in vars) 
        	{ 
        		var nRow = this.ds_gvariables.addRow();
        		this.ds_gvariables.setColumn(nRow, "name", vars[i]);
        		this.ds_gvariables.setColumn(nRow, "value", application.getVariable(vars[i]));
        	} 
        	//serviceurl
        	for(var i = 0; i < application.services.length; i++)
        	{
        		var prefixid = application.services[i].prefixid;
        		if(prefixid.substring(0, 3) == "svc")
        		{
        			var nRow = this.ds_gvariables.addRow();
        			this.ds_gvariables.setColumn(nRow, "name", prefixid);
        			this.ds_gvariables.setColumn(nRow, "value", application.services[i].url);
        		}
        	}
        	//datasets
        	this.ds_gdatasets.clearData();
        	var datasets = application._datasets; 
        	for(var i in datasets) 
        	{ 
        		var nRow = this.ds_gdatasets.addRow();
        		this.ds_gdatasets.setColumn(nRow, "name", datasets[i].name);
        		this.ds_gdatasets.setColumn(nRow, "xml", datasets[i].saveXML());
        	} 
        }

        this.Tab00_tabpage1_Grid00_oncellclick = function(obj,e)
        {
        	this.ds_detail.loadXML(this.ds_list.getColumn(e.row, "xml"));
        	this.Tab00.tabpage1.Grid01.createFormat();
        }

        this.Tab00_tabpage2_Grid00_oncellclick = function(obj,e)
        {
        	this.ds_gxml.loadXML(this.ds_gdatasets.getColumn(e.row, "xml"));
        	this.Tab00.tabpage2.Grid01.createFormat();
        }

        this.Tab00_tabpage2_Radio00_onitemchanged = function(obj,e)
        {
        	if(e.postindex == 0)
        	{
        		this.Tab00.tabpage2.Grid00.set_visible(false);
        		this.Tab00.tabpage2.Grid01.set_visible(false);
        		this.Tab00.tabpage2.Grid02.set_visible(true);
        	}
        	else if(e.postindex == 1)
        	{
        		this.Tab00.tabpage2.Grid00.set_visible(true);
        		this.Tab00.tabpage2.Grid01.set_visible(true);
        		this.Tab00.tabpage2.Grid02.set_visible(false);	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onclose", this.form_close, this);
            this.Tab00.tabpage1.Grid00.addEventHandler("oncellclick", this.Tab00_tabpage1_Grid00_oncellclick, this);
            this.Tab00.tabpage2.Grid00.addEventHandler("oncellclick", this.Tab00_tabpage2_Grid00_oncellclick, this);
            this.Tab00.tabpage2.Radio00.addEventHandler("onitemchanged", this.Tab00_tabpage2_Radio00_onitemchanged, this);

        };

        this.loadIncludeScript("comm_forminfo.xfdl");

       
    };
}
)();
