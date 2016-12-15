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
                this.set_name("comm_multicombo");
                this.set_classname("comm_multicombo");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,190,29);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_combo", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_combo", "absolute", "0", "31", "229", "272", null, null, this);
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 none #bdbdbdff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "0", "0", null, null, "0", "50", this.pdv_combo);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"187\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.pdv_combo.addChild(obj.name, obj);
            obj = new Button("btn_apply", "absolute", null, null, "80", "40", "5", "5", this.pdv_combo);
            obj.set_taborder("6");
            obj.set_text("적용");
            this.pdv_combo.addChild(obj.name, obj);

            obj = new Button("btn_combo", "absolute", null, "0", "26", null, "0", "0", this);
            obj.set_taborder("1");
            obj.style.set_image("URL('theme://img/cmb_WF_Drop.png')");
            obj.style.set_bordertype("normal 3 3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 229, 272, this.pdv_combo,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("#ffffffff");
            		p.style.set_border("0 none #bdbdbdff");
            		p.set_scrollbars("none");

            	}
            );
            this.pdv_combo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 190, 29, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comm_multicombo");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comm_multicombo.xfdl", function() {
        /**************************************************************************************************
         * 01. 업무구분				: 
         * 02. 화 면 명				: 
         * 03. 화면설명				:  
         * 04. 관련 화면 및 서비스	: 
         * 05. 관련 테이블명			: 
         * 06. 작 성 자				: 
         * 07. 작 성 일				: 
         * 08. 수정이력
         **************************************************************************************************
         *    수정일            이름        사유
         **************************************************************************************************
         *    
         *************************************************************************************************/

        //-------------------------------------------------------------------------------------------------
        // 1. 공통함수 include
        //-------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // Form 전역변수 선언
        //-------------------------------------------------------------------------------------------------
        this.value 	= null;
        this.text 	= null;

        this.pThis 	= null;
        this.fCallback 	= null;

        //-------------------------------------------------------------------------------------------------
        // 2. Form 함수 정의
        //-------------------------------------------------------------------------------------------------
        this.form_onload = function(obj,e)
        {
        	
        }

        //-------------------------------------------------------------------------------------------------
        // 3. Transaction 함수 정의
        //-------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // 4. User 함수 정의
        //-------------------------------------------------------------------------------------------------

        //콜백이 필요한경우 설정필요함
        this.init = function(form,config,fCallback)
        {	
        	this.pThis = form;
        	this.fCallback 	= fCallback;
        	
        	this.innerdataset = config.innerdataset;
        	this.codecolumn = Eco.isEmpty(config.codecolumn) ? Iject.$.COMMCD_CODE : config.codecolumn;
        	this.datacolumn = Eco.isEmpty(config.datacolumn) ? Iject.$.COMMCD_DATA : config.datacolumn;
        	this.checkcolumn = Eco.isEmpty(config.checkcolumn) ? Iject.$.CHK_COL : config.checkcolumn;
        	this.rowcount = Eco.isEmpty(config.rowcount) ? 10 : config.rowcount;
        	this.delimeter = Eco.isEmpty(config.delimeter) ? "," : config.delimeter;
        	
        	//리스트 설정
        	this.ds_list.copyData(this.innerdataset);
        	if(Eco.isEmpty(this.ds_list.colinfos[this.checkcolumn]))
        	{
        		this.ds_list.addColumn(this.checkcolumn, "string");
        	}
        	
        	this.grdObj = this.pdv_combo.grd_list;
        	this.grdObj.setCellProperty("body", 0, "text", "bind:"+this.checkcolumn);
        	this.grdObj.setCellProperty("body", 1, "text", "bind:"+this.datacolumn);
        	
        	var nCnt = this.ds_list.rowcount < this.rowcount ? this.ds_list.rowcount : this.rowcount;
        	var ROW_HEIGHT = 24, offset = 52;
        	var popupheight = nCnt * ROW_HEIGHT + offset;
        	this.pdv_combo.setOffsetHeight(popupheight);
        	
        	this.set_value(config.value);
        	this.set_text(this.value);	
        }

        this.clear = function()
        {
        	this.value = null;
        	this.text = null;
        	this.edt_combo.set_value(null);
        	this.clearCheckColumn();
        }

        this.set_value = function(val)
        {
        	this.value = val;
        	this.setCheckColumn(val);
        }

        this.validate = function()
        {
        	return true;
        }

        this.set_enable = function(b)
        {
        	if(b)
        	{
        		this.btn_combo.set_enable(true);
        	}
        	else
        	{
        		this.btn_combo.set_enable(false);
        	}
        }

        this.set_cssclass = function(css)
        {
        	
        }

        this.set_text = function(val)
        {
        	var sText = null;
        	if(!Eco.isEmpty(val))
        	{
        		var dsObj = this.ds_list, data;
        		var codes = val.split(this.delimeter);
        		var datas = [];
        		for(var i = 0; i < codes.length; i++)
        		{
        			data = dsObj.lookup(this.codecolumn, codes[i], this.datacolumn);
        			if(!Eco.isEmpty(data)) datas.push(data);
        		}
        		sText = datas.join(this.delimeter);
        	}
        	
        	this.text = sText;
        	this.edt_combo.set_value(this.text);
        }

        this.getValues = function()
        {
        	var dsObj = this.ds_list;
        	var values = [];
        	var val = null;
        	for(var i = 0; i < dsObj.rowcount; i++)
        	{
        		var chk = dsObj.getColumn(i, this.checkcolumn);
        		if(chk == '1' || chk == 1)
        		{
        			values.push(dsObj.getColumn(i, this.codecolumn));
        		}
        	}	
        	if(values.length > 0) val = values.join(this.delimeter);
        	
        	return val;
        }

        this.setCheckColumn = function(val)
        {	
        	this.clearCheckColumn();
        	
        	if(!Eco.isEmpty(val))
        	{
        		var dsObj = this.ds_list;
        		var codes = val.split(this.delimeter);
        		for(var i = 0; i < codes.length; i++)
        		{
        			var nRow = dsObj.findRow(this.codecolumn, codes[i]);
        			if(nRow > -1) dsObj.setColumn(nRow, this.checkcolumn, '1');
        		}
        	}
        }

        this.clearCheckColumn = function()
        {
        	var dsObj = this.ds_list;
        	dsObj.set_enableevent(false);
        	for(var i = 0; i < dsObj.rowcount; i++)
        	{
        		dsObj.setColumn(i, this.checkcolumn, '0');
        	}
        	dsObj.set_enableevent(true);
        }

        //-------------------------------------------------------------------------------------------------
        // 5. Event 함수 정의
        //------------------------------------------------------------------------------------------------

        this.btn_combo_onclick = function(obj,e)
        {
        	this.pdv_combo.trackPopupByComponent(this.edt_combo, 0, this.edt_combo.getOffsetHeight()+2, this.pdv_combo.width, this.pdv_combo.height);
        	
        	return;
        	
        	if(!Eco.isEmpty(this.fCallback))
        	{
        		this.fCallback.call(this.pThis, this.value, this.text, "dropdown");
        	}
        }

        this.pdv_combo_btn_apply_onclick = function(obj,e)
        {
        	this.pdv_combo.closePopup();
        }

        this.pdv_combo_oncloseup = function(obj,e)
        {
        	this.set_value(this.getValues());
        	this.set_text(this.value);
        	
        	if(!Eco.isEmpty(this.fCallback))
        	{
        		this.fCallback.call(this.pThis, this.value, this.text, "onchanged");
        	}
        }

        this.pdv_combo_grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell > 0)
        	{
        		var val = this.ds_list.getColumn(e.row, this.checkcolumn);
        		if(Eco.isEmpty(val)) val = '0';
        		if(val == '0') this.ds_list.setColumn(e.row, this.checkcolumn, '1');
        		else if(val == '1') this.ds_list.setColumn(e.row, this.checkcolumn, '0');
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.pdv_combo.addEventHandler("oncloseup", this.pdv_combo_oncloseup, this);
            this.pdv_combo.grd_list.addEventHandler("oncellclick", this.pdv_combo_grd_list_oncellclick, this);
            this.pdv_combo.btn_apply.addEventHandler("onclick", this.pdv_combo_btn_apply_onclick, this);
            this.btn_combo.addEventHandler("onclick", this.btn_combo_onclick, this);

        };

        this.loadIncludeScript("comm_multicombo.xfdl");

       
    };
}
)();
