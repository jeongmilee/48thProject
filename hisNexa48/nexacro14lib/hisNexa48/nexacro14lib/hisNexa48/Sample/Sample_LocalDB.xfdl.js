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
                this.set_name("Sample_LocalDB");
                this.set_classname("Sample_LocalDB");
                this.set_titletext("Sqlite DB");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new LiteDBConnection("LiteDBConnection00", this);
            obj.set_busytimeout("60000");
            obj.set_preconnect("false");
            obj.set_datasource("C:/workspace/nexa/nexa_src/Sample/demo.s3db");
            this.addChild(obj.name, obj);
            obj = new LiteDBStatement("LiteDBStatement00", this);
            this.addChild(obj.name, obj);
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list00", this);
            obj._setContents("<ColumnInfo><Column id=\"DMD_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SW_HBR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DMD_DOC_CNT\" type=\"INT\" size=\"256\"/><Column id=\"EXM_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DMD_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_FILE_SZ\" type=\"INT\" size=\"256\"/><Column id=\"APND_FILE_CNT\" type=\"INT\" size=\"256\"/><Column id=\"DIAG_FR_DD\" type=\"STRING\" size=\"256\"/><Column id=\"DIAG_END_DD\" type=\"STRING\" size=\"256\"/><Column id=\"DMD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSU_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new LiteDBConnection("LiteDBConnection01", this);
            obj.set_busytimeout("60000");
            obj.set_preconnect("false");
            obj.set_datasource("C:/workspace/nexa/nexa_src/Sample/ddmd_data.db3");
            this.addChild(obj.name, obj);
            obj = new LiteDBStatement("LiteDBStatement01", this);
            this.addChild(obj.name, obj);

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Local DB");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "10", "427", null, "197", "10", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DMD_DOC_ID\"/><Cell col=\"1\" text=\"EXM_DT\"/><Cell col=\"2\" text=\"REG_DT\"/><Cell col=\"3\" text=\"SW_HBR_CD\"/><Cell col=\"4\" text=\"DMD_DOC_CNT\"/><Cell col=\"5\" text=\"EXM_STAT_CD\"/><Cell col=\"6\" text=\"SND_YN\"/><Cell col=\"7\" text=\"DMD_TTL\"/><Cell col=\"8\" text=\"TOT_FILE_SZ\"/><Cell col=\"9\" text=\"APND_FILE_CNT\"/><Cell col=\"10\" text=\"DIAG_FR_DD\"/><Cell col=\"11\" text=\"DIAG_END_DD\"/><Cell col=\"12\" text=\"DMD_NO\"/><Cell col=\"13\" text=\"INSU_TP_CD\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:DMD_DOC_ID\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:EXM_DT\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:SW_HBR_CD\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:DMD_DOC_CNT\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:EXM_STAT_CD\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:SND_YN\"/><Cell col=\"7\" edittype=\"normal\" text=\"bind:DMD_TTL\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:TOT_FILE_SZ\"/><Cell col=\"9\" edittype=\"normal\" text=\"bind:APND_FILE_CNT\"/><Cell col=\"10\" edittype=\"normal\" text=\"bind:DIAG_FR_DD\"/><Cell col=\"11\" edittype=\"normal\" text=\"bind:DIAG_END_DD\"/><Cell col=\"12\" edittype=\"normal\" text=\"bind:DMD_NO\"/><Cell col=\"13\" edittype=\"normal\" text=\"bind:INSU_TP_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "385", "120", "34", "12", null, this);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "63", "120", "34", "144", null, this);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", null, "63", "120", "34", "16", null, this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grd_add00", "absolute", null, "114", "66", "12", "73", null, this);
            obj.set_taborder("8");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grd_del00", "absolute", null, "114", "67", "12", "10", null, this);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "10", "139", null, "189", "10", null, this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_LocalDB");
            		p.set_titletext("Sqlite DB");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_LocalDB.xfdl", function() {
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

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        this.Button02_onclick = function(obj,e)
        {	
        	var r_open = this.LiteDBConnection00.open();
        	if(r_open)
        	{
        		this.LiteDBStatement00.set_ldbconnection(this.LiteDBConnection00);
        		var r_executeQuery = this.LiteDBStatement00.executeQuery("select * from Dataset00");
        	}	
        }

        this.Button03_onclick = function(obj,e)
        {
        	var dsObj = this.ds_list;
        	var r_open = this.LiteDBConnection00.open();
        	if(r_open)
        	{
        		var sql = "", type, delValue;
        		
        		this.LiteDBStatement00.set_ldbconnection(this.LiteDBConnection00);
        		//삭제
        		for(var i = dsObj.getDeletedRowset().length - 1 ; i >= 0 ; i--)
        		{
        			delValue = dsObj.getDeletedRowset()[i];
        			sql = "DELETE FROM Dataset00 WHERE Column0='"+delValue[0]+"'";
        			this.LiteDBStatement00.set_ldbconnection(this.LiteDBConnection00);
        			this.LiteDBStatement00.executeUpdate(sql);
        		}		
        		
        		//추가/수정
        		for(var i = 0 ; i < dsObj.rowcount; i++)
        		{
        			type = dsObj.getRowType(i);
        			
        			if(type == Dataset.ROWTYPE_INSERT)
        			{
        				sql = "insert into Dataset00 ( Column0 ,Column1, Column2, Column3 ) Values ('"+dsObj.getColumn(i,0)+"','"+dsObj.getColumn(i,1)+"','"+dsObj.getColumn(i,2)+"','"+dsObj.getColumn(i,3)+"')";
        				this.LiteDBStatement00.set_ldbconnection(this.LiteDBConnection00);
        				this.LiteDBStatement00.executeUpdate(sql);				
        			}
        			if(type == Dataset.ROWTYPE_UPDATE)
        			{
        				sql = "UPDATE  Dataset00 set Column1='"+dsObj.getColumn(i,1)+"', Column2='"+dsObj.getColumn(i,2)+"', Column3='"+dsObj.getColumn(i,3)+"' where Column0='"+dsObj.getColumn(i,0)+"'";
        				this.LiteDBStatement00.set_ldbconnection(this.LiteDBConnection00);
        				this.LiteDBStatement00.executeUpdate(sql);
        			}
        		}
        	}
        }

        this.btn_grd_add_onclick = function(obj,e)
        {
        	this.ds_list.addRow();
        }

        this.btn_grd_del_onclick = function(obj,e)
        {
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        }

        
        //DB 연결 성공
        this.LiteDBConnection00_onsuccess = function(obj,e)
        {
        	
        }

        //DB 연결 실패
        this.LiteDBConnection00_onerror = function(obj,e)
        {
        	
        }

        //DB 쿼리 성공
        this.LiteDBStatement00_onsuccess = function(obj,e)
        {
        	trace("e.reason = " + e.reason+" / e.returnvalue = " + e.returnvalue);
        	if(e.reason == 7 ) // 조회 
        	{
        		this.ds_list.copyData(e.returnvalue);
        	}
        	if(e.reason == 8 ) //insert 
        	{
        		if(e.returnvalue == 1)
        		{
        			trace("성공");
        		}
        		else if (e.returnvalue == 0)
        		{
        			trace("실패");
        		}
        	}
        }

        //DB 쿼리 실패
        this.LiteDBStatement00_onerror = function(obj,e)
        {
        	
        }

        //조회
        this.Button00_onclick = function(obj,e)
        {	
        	var r_open = this.LiteDBConnection01.open();
        	if(r_open)
        	{
        		this.LiteDBStatement01.set_ldbconnection(this.LiteDBConnection01);
        		var r_executeQuery = this.LiteDBStatement01.executeQuery("select * from TBJFA100");
        	}
        }

        //저장
        this.Button01_onclick = function(obj,e)
        {
        	var r_open = this.LiteDBConnection01.open();
        	var r_executeQuery ="";
        	
        	for(var i = 0 ; i < this.ds_list00.getDeletedRowset().length; i++)
        	{
        		var delValue = this.ds_list00.getDeletedRowset()[i];
        		var sql = "DELETE FROM TBJFA100 WHERE DMD_DOC_ID='"+delValue[0]+"'";
        		trace(" >>> : " + sql);
        		this.LiteDBStatement01.set_ldbconnection(this.LiteDBConnection01);
        		r_executeQuery = this.LiteDBStatement01.executeUpdate(sql);
        	}
        	
        	
        	for(var i = 0 ; i < this.ds_list00.rowcount; i++)
        	{
        		var type = this.ds_list00.getRowType(i);

        		var sql = "";
        		
        		var arr = [];
        		var columns = ["DMD_DOC_ID","EXM_DT", "REG_DT", "SW_HBR_CD", "DMD_DOC_CNT", "EXM_STAT_CD", "SND_YN", "DMD_TTL", "TOT_FILE_SZ", "APND_FILE_CNT"
        		, "DIAG_FR_DD", "DIAG_END_DD", "DMD_NO", "INSU_TP_CD"];
        			
        		for (var j = 0 ; j < columns.length ;j++)
        		{
        			var param = new nexacro.LiteDBParameter;
        			param.set_name(columns[j]);
        			param.set_type(1);
        			param.set_value(this.ds_list00.getColumn(i, columns[j]));
        			arr.push(param);			
        		}
        		this.LiteDBStatement00.set_parameters(arr);
        		
        		if(type == Dataset.ROWTYPE_INSERT)
        		{
        			sql = "insert into TBJFA100 "
        			+"(DMD_DOC_ID ,EXM_DT, REG_DT, SW_HBR_CD, DMD_DOC_CNT, EXM_STAT_CD, SND_YN, DMD_TTL, TOT_FILE_SZ, APND_FILE_CNT, DIAG_FR_DD, DIAG_END_DD, DMD_NO, INSU_TP_CD) Values " 
        			+"(:DMD_DOC_ID,:EXM_DT,:REG_DT,:SW_HBR_CD,:DMD_DOC_CNT,:EXM_STAT_CD,:SND_YN,:DMD_TTL,:TOT_FILE_SZ,:APND_FILE_CNT,:DIAG_FR_DD,:DIAG_END_DD,:DMD_NO,:INSU_TP_CD)";
        			this.LiteDBStatement01.set_ldbconnection(this.LiteDBConnection01);
        			r_executeQuery = this.LiteDBStatement01.executeUpdate(sql);
        			
        		}
        		else if(type == Dataset.ROWTYPE_UPDATE)
        		{
        			sql = "UPDATE  TBJFA100 set EXM_DT='"+this.ds_list00.getColumn(i,1)+"', REG_DT='"+this.ds_list00.getColumn(i,2)+"', SW_HBR_CD='"+this.ds_list00.getColumn(i,3)+"' where DMD_DOC_ID='"+this.ds_list00.getColumn(i,0)+"'";
        			this.LiteDBStatement01.set_ldbconnection(this.LiteDBConnection01);
        			r_executeQuery = this.LiteDBStatement01.executeUpdate(sql);
        		}
        	}	
        }

        

        this.LiteDBConnection01_onsuccess = function(obj,e)
        {
        	
        }

        this.LiteDBConnection01_onerror = function(obj,e)
        {
        	
        }

        this.LiteDBStatement01_onsuccess = function(obj,e)
        {
        	trace("e.reason = " + e.reason+" / e.returnvalue = " + e.returnvalue);
        	if(e.reason == 7 ) // 조회 
        	{
        		trace("LiteDBStatement00_onsuccess = "+e.returnvalue);
        		this.ds_list00.copyData(e.returnvalue);
        		//trace(this.ds_list00.saveXML());
        		this.LiteDBConnection00.close();
        	}
        	if(e.reason == 8 ) //insert 
        	{
        		if(e.returnvalue == 1)
        		{
        			trace("성공");
        		}else if (e.returnvalue == 0)
        		{
        			trace("실패");
        		}
        	}	
        }

        this.LiteDBStatement01_onerror = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.LiteDBConnection00.addEventHandler("onsuccess", this.LiteDBConnection00_onsuccess, this);
            this.LiteDBConnection00.addEventHandler("onerror", this.LiteDBConnection00_onerror, this);
            this.LiteDBStatement00.addEventHandler("onsuccess", this.LiteDBStatement00_onsuccess, this);
            this.LiteDBStatement00.addEventHandler("onerror", this.LiteDBStatement00_onerror, this);
            this.LiteDBConnection01.addEventHandler("onsuccess", this.LiteDBConnection01_onsuccess, this);
            this.LiteDBConnection01.addEventHandler("onerror", this.LiteDBConnection01_onerror, this);
            this.LiteDBStatement01.addEventHandler("onsuccess", this.LiteDBStatement01_onsuccess, this);
            this.LiteDBStatement01.addEventHandler("onerror", this.LiteDBStatement01_onerror, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.btn_grd_add00.addEventHandler("onclick", this.btn_grd_add_onclick, this);
            this.btn_grd_del00.addEventHandler("onclick", this.btn_grd_del_onclick, this);

        };

        this.loadIncludeScript("Sample_LocalDB.xfdl");

       
    };
}
)();
