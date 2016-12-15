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
                this.set_name("Sample_PivotGrid");
                this.set_classname("Sample_PivotGrid");
                this.set_titletext("Pivot 형 그리드");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT\" type=\"STRING\" size=\"256\"/><Column id=\"RST\" type=\"STRING\" size=\"256\"/><Column id=\"ACHV_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTTRANS_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTTRANS\" type=\"STRING\" size=\"256\"/><Column id=\"SALES\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMMDD\">20160921</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"HOUR\">17</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col></Row><Row><Col id=\"YYYYMMDD\">20160921</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160921</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160921</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160922</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160922</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160922</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160922</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160923</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160923</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160923</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160923</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160924</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160924</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160924</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160924</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160925</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160925</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160925</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160925</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160926</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160926</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160926</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160926</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row><Row><Col id=\"YYYYMMDD\">20160927</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">17</Col></Row><Row><Col id=\"YYYYMMDD\">20160927</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">18</Col></Row><Row><Col id=\"YYYYMMDD\">20160927</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">19</Col></Row><Row><Col id=\"YYYYMMDD\">20160927</Col><Col id=\"TGT\">3243000</Col><Col id=\"RST\">1860000</Col><Col id=\"ACHV_RATE\">55.7</Col><Col id=\"CUST_TOT\">258</Col><Col id=\"CUSTTRANS_AVG\">7000</Col><Col id=\"CUST\">20</Col><Col id=\"CUSTTRANS\">6540</Col><Col id=\"SALES\">130400</Col><Col id=\"HOUR\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_view", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMMDD\" type=\"string\" size=\"256\"/><Column id=\"TGT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"RST\" type=\"bigdecimal\" size=\"256\"/><Column id=\"ACHV_RATE\" type=\"float\" size=\"256\"/><Column id=\"CUST_TOT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"CUSTTRANS_AVG\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUST_17\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUSTTRANS_17\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_SALES_17\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUST_18\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUSTTRANS_18\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_SALES_18\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUST_19\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUSTTRANS_19\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_SALES_19\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUST_20\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_CUSTTRANS_20\" type=\"bigdecimal\" size=\"256\"/><Column id=\"COL_SALES_20\" type=\"bigdecimal\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Pivot Grid");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "10", "104", "438", "317", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"YYYYMMDD\"/><Cell col=\"1\" disptype=\"normal\" text=\"TGT\"/><Cell col=\"2\" disptype=\"normal\" text=\"RST\"/><Cell col=\"3\" disptype=\"normal\" text=\"ACHV_RATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"CUST_TOT\"/><Cell col=\"5\" disptype=\"normal\" text=\"CUSTTRANS_AVG\"/><Cell col=\"6\" disptype=\"normal\" text=\"CUST\"/><Cell col=\"7\" disptype=\"normal\" text=\"CUSTTRANS\"/><Cell col=\"8\" disptype=\"normal\" text=\"SALES\"/><Cell col=\"9\" disptype=\"normal\" text=\"HOUR\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:YYYYMMDD\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:TGT\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:RST\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:ACHV_RATE\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:CUST_TOT\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:CUSTTRANS_AVG\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CUST\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:CUSTTRANS\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:SALES\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:HOUR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "552", "105", null, "317", "10", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_view");
            obj._setContents("<Formats><Format id=\"default\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "467", "104", "74", "50", null, null, this);
            obj.set_taborder("3");
            obj.set_text("pivot");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_view", "absolute", "10", "434", null, "323", "10", null, this);
            obj.set_taborder("4");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_view");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"52\" band=\"left\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"목표\"/><Cell col=\"2\" text=\"실적\"/><Cell col=\"3\" text=\"달성률\"/><Cell col=\"4\" text=\"격수\"/><Cell col=\"5\" text=\"격단가\"/><Cell col=\"6\" text=\"구분\"/><Cell col=\"7\" text=\"17시\"/><Cell col=\"8\" text=\"18시\"/><Cell col=\"9\" text=\"19시\"/><Cell col=\"10\" text=\"20시\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" style=\"align:center middle;\" text=\"bind:YYYYMMDD\"/><Cell col=\"1\" rowspan=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:TGT\"/><Cell col=\"2\" rowspan=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RST\"/><Cell col=\"3\" rowspan=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:ACHV_RATE\"/><Cell col=\"4\" rowspan=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CUST_TOT\"/><Cell col=\"5\" rowspan=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:CUST_TOT\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"매출\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:COL_SALES_17\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"6\" style=\"align:center middle;\" text=\"격수\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:COL_CUST_17\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"2\" col=\"6\" style=\"align:center middle;\" text=\"격단가\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\" text=\"bind:COL_CUSTTRANS_17\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" edittype=\"normal\" style=\"align:right middle;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "68", "298", "28", null, null, this);
            obj.set_taborder("5");
            obj.set_text("★ 샘플화면 : 시간대별 매출속보");
            obj.style.set_font("bold 11 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_PivotGrid");
            		p.set_titletext("Pivot 형 그리드");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_PivotGrid.xfdl", function() {
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
        this.fn_convertList = function(yyyymmdds,hours)
        {	
        	//view dataset 초기화
        	this.ds_view.set_enableevent(false);
        	this.ds_view.clear();
        	
        	//view dataset 컬럼정보 생성
        	this.ds_view.addColumn("YYYYMMDD", "string");
        	this.ds_view.addColumn("TGT", "bigdecimal");
        	this.ds_view.addColumn("RST", "bigdecimal");
        	this.ds_view.addColumn("ACHV_RATE", "float");
        	this.ds_view.addColumn("CUST_TOT", "bigdecimal");
        	this.ds_view.addColumn("CUSTTRANS_AVG", "bigdecimal");
        	
        	//추가컬럼(list dataset의 갑변경시 활용)
        	for(var i = 0; i < hours.length; i++)
        	{
        		this.ds_view.addColumn("COL_CUST_"+hours[i], "bigdecimal");
        		this.ds_view.addColumn("COL_CUSTTRANS_"+hours[i], "bigdecimal");
        		this.ds_view.addColumn("COL_SALES_"+hours[i], "bigdecimal");
        	}
        	
        	//view dataset 값 추가
        	var yyyymmdd, hour, tgt, rst, achvRate, custTot, custtransAvg, cust, custtrans, sales;
        	var fRow, aRow;
        	for(var i = 0; i < yyyymmdds.length; i++)
        	{
        		yyyymmdd = yyyymmdds[i];
        		nRow = this.ds_list.findRow("YYYYMMDD", yyyymmdd);
        		
        		if(nRow < 0) continue;
        		
        		tgt = this.ds_list.getColumn(nRow, "TGT");
        		rst = this.ds_list.getColumn(nRow, "RST");
        		achvRate = this.ds_list.getColumn(nRow, "ACHV_RATE");
        		custTot = this.ds_list.getColumn(nRow, "CUST_TOT");
        		custtransAvg = this.ds_list.getColumn(nRow, "CUSTTRANS_AVG");
        		
        		aRow = this.ds_view.addRow();
        		this.ds_view.setColumn(aRow, "YYYYMMDD", yyyymmdd);
        		this.ds_view.setColumn(aRow, "TGT", tgt);
        		this.ds_view.setColumn(aRow, "RST", rst);
        		this.ds_view.setColumn(aRow, "ACHV_RATE", achvRate);
        		this.ds_view.setColumn(aRow, "CUST_TOT", custTot);
        		this.ds_view.setColumn(aRow, "CUSTTRANS_AVG", custtransAvg);
        		
        		for(var j = 0; j < hours.length; j++)
        		{
        			hour = hours[j];
        			fRow = this.ds_list.findRowExpr("YYYYMMDD=='"+yyyymmdd+"'&&HOUR=='"+hour+"'");
        			if(fRow > -1)
        			{
        				this.ds_view.setColumn(aRow, "COL_CUST_"+hour, this.ds_list.getColumn(fRow, "CUST"));
        				this.ds_view.setColumn(aRow, "COL_CUSTTRANS_"+hour, this.ds_list.getColumn(fRow, "CUSTTRANS"));
        				this.ds_view.setColumn(aRow, "COL_SALES_"+hour, this.ds_list.getColumn(fRow, "SALES"));
        			}
        		}
        	}
        	this.ds_view.set_enableevent(true);
        	this.ds_view.set_rowposition(0);
        	
        	//trace(this.ds_view.saveXML());
        }

        //view dataset에 맞게 그리드 포맷을 생성한다.
        this.fn_drawGridFormat = function(hours)
        {
        	var sFormats = "";
        	sFormats += '<Formats>\n';
        	sFormats += '<Format id="default">\n';
        	sFormats += '  <Columns>\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="80" band="left" />\n';
        	sFormats += '    <Column size="52" band="left" />\n';
        	
        	for(var i = 0; i < hours.length; i++)
        	{
        		sFormats += '    <Column size="70" />\n';
        	}
        	
        	sFormats += '  </Columns>\n';
        	sFormats += '  <Rows>\n';
        	sFormats += '    <Row size="24" band="head" />\n';
        	sFormats += '    <Row size="24" />\n';
        	sFormats += '    <Row size="24" />\n';
        	sFormats += '    <Row size="24" />\n';
        	sFormats += '  </Rows>\n';
        	sFormats += '  <Band id="head">\n';
        	sFormats += '    <Cell text="일자"/>\n';
        	sFormats += '    <Cell col="1" text="목표"/>\n';
        	sFormats += '    <Cell col="2" text="실적"/>\n';
        	sFormats += '    <Cell col="3" text="달성률"/>\n';
        	sFormats += '    <Cell col="4" text="격수"/>\n';
        	sFormats += '    <Cell col="5" text="격단가"/>\n';
        	sFormats += '    <Cell col="6" text="구분"/>\n';
        	
        	for(var i = 0; i < hours.length; i++)
        	{
        		sFormats += '    <Cell col="'+(i+7)+'" text="'+hours[i]+'시"/>\n';
        	}
        	
        	sFormats += '  </Band>\n';
        	sFormats += '  <Band id="body">\n';
        	sFormats += '    <Cell rowspan="3" style="align:center&#32;middle;" text="bind:YYYYMMDD"/>\n';
        	sFormats += '    <Cell col="1" rowspan="3" displaytype="number" style="align:right&#32;middle;" text="bind:TGT"/>\n';
        	sFormats += '    <Cell col="2" rowspan="3" displaytype="number" style="align:right&#32;middle;" text="bind:RST"/>\n';
        	sFormats += '    <Cell col="3" rowspan="3" displaytype="number" style="align:right&#32;middle;" text="bind:ACHV_RATE"/>\n';
        	sFormats += '    <Cell col="4" rowspan="3" displaytype="number" style="align:right&#32;middle;" text="bind:CUST_TOT"/>\n';
        	sFormats += '    <Cell col="5" rowspan="3" displaytype="number" style="align:right&#32;middle;" text="bind:CUSTTRANS_AVG"/>\n';
        	
        	sFormats += '    <Cell row="0" col="6" style="align:center&#32;middle;" text="매출"/>\n';
        	sFormats += '    <Cell row="1" col="6" style="align:center&#32;middle;" text="격수"/>\n';
        	sFormats += '    <Cell row="2" col="6" style="align:center&#32;middle;" text="격단가"/>\n';
        	
        	for(var i = 0; i < hours.length; i++)
        	{
        		sFormats += '    <Cell row="0" col="'+(7+i)+'" displaytype="number" edittype="normal" style="align:right&#32;middle;" text="bind:COL_SALES_'+hours[i]+'"/>\n';
        		sFormats += '    <Cell row="1" col="'+(7+i)+'" displaytype="number" edittype="normal" style="align:right&#32;middle;" text="bind:COL_CUST_'+hours[i]+'"/>\n';
        		sFormats += '    <Cell row="2" col="'+(7+i)+'" displaytype="number" edittype="normal" style="align:right&#32;middle;" text="bind:COL_CUSTTRANS_'+hours[i]+'"/>\n';
        	}	
        	
        	sFormats += '  </Band>\n';
        	sFormats += '</Format>\n';
        	sFormats += '</Formats>\n';
        	//trace(sFormats);
        	this.grd_view.set_enableevent(false);
        	this.grd_view.set_formats(sFormats);
        	this.grd_view.set_enableevent(true);
        }

        /***********************************************************************************
        * Component Event Function
        ***********************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	/**
        	처리 순서
        	0. 동적생성을 위한 제어 변수를 구한다.(그룹컬럼, 동적컬럼)
        	1. 조회된 로우형 데이타셋을 피벗형 데이타셋으로 변환한다.
        	2. 이때 컬럼명은 동적생성되는 컬럼에 맞게 명명해준다.
        	3. 피벗형 데이타셋에 맞춰 그리드 포맷을 생성해준다.
        	4. 피벗형 데이타셋의 값이 변경될 때 로우형 데이타셋의 값을 변경해준다.	 
        	**/
        	
        	//view dataset 생성을 위한 값 추출
        	var yyyymmdds = Iject.Util.distinct(this.ds_list, "YYYYMMDD");
        	var hours = Iject.Util.distinct(this.ds_list, "HOUR");
        	
        	//피벗형 데이타셋 생성
        	this.fn_convertList(yyyymmdds, hours);
        	
        	//그리드 포맷 생성
        	this.fn_drawGridFormat(hours);			
        		
        	//샘플용
        	this.Grid01.createFormat();
        }

        //list dataset의 값을 변경한다.
        this.ds_view_oncolumnchanged = function(obj,e)
        {
        	var columnid = e.columnid;
        	var value = e.newvalue;
        	var nRow = e.row;
        	var yyyymmdd = obj.getColumn(nRow, "YYYYMMDD"), hour, col;
        	var cols = columnid.split("_");
        	
        	if(cols[0] == "COL")
        	{
        		col = cols[1];
        		hour = cols[2];
        		var nRow = this.ds_list.findRowExpr("YYYYMMDD=='"+yyyymmdd+"'&&HOUR=='"+hour+"'");
        		if(nRow > -1)
        		{
        			this.ds_list.setColumn(nRow, col, value);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_view.addEventHandler("oncolumnchanged", this.ds_view_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample_PivotGrid.xfdl");

       
    };
}
)();
