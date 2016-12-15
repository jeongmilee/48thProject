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
                this.set_name("Sample_CommCode");
                this.set_classname("Sample_CommCode");
                this.set_titletext("공통코드 활용");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_CD\">1</Col><Col id=\"TEST_NM\">가나다</Col></Row><Row><Col id=\"TEST_CD\">2</Col><Col id=\"TEST_NM\">1234</Col></Row><Row><Col id=\"TEST_CD\">3</Col><Col id=\"TEST_NM\">라마사</Col></Row><Row><Col id=\"TEST_CD\">4</Col><Col id=\"TEST_NM\">abs</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("Combo00", "absolute", "13", "110", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");

            obj = new Combo("Combo01", "absolute", "165", "110", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");

            obj = new Combo("Combo02", "absolute", "317", "110", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");

            obj = new Combo("Combo03", "absolute", "469", "110", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");

            obj = new Radio("Radio00", "absolute", "8", "196", "325", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");

            obj = new Radio("Radio01", "absolute", "377", "197", "550", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Grid("Grid00", "absolute", "17", "281", "628", "239", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "17", "616", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");

            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("8");
            obj.set_text("@ 공통코드 활용");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "73", "142", "31", null, null, this);
            obj.set_taborder("9");
            obj.set_text("# Combo ");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "153", "142", "31", null, null, this);
            obj.set_taborder("10");
            obj.set_text("# Radio");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "233", "142", "31", null, null, this);
            obj.set_taborder("11");
            obj.set_text("# Grid");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "537", "526", "31", null, null, this);
            obj.set_taborder("12");
            obj.set_text("# Dataset 생성");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "10", "577", "334", "31", null, null, this);
            obj.set_taborder("13");
            obj.set_text("# Form내의  Dataset 활용");
            obj.style.set_font("bold 12 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_CommCode");
            		p.set_titletext("공통코드 활용");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_CommCode.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	//Form 초기화
        	Iject.formOnload(obj);
        	
        	//공통코드 설정
        	this.fn_setCommCode();
        }

        //공통코드 설정
        this.fn_setCommCode = function()
        {
        	/**
        	 * @param codeParam  
        	 
        		group          : 공통코드 group code
        		dataset        : 데이타셋 명
        		component      : bind 대상 obj ( combo, radio, grid )
        		selecttype     : A("전체"),S("선택"),N("")
        		bindcolumn     : grid column
        		edittype       : grid edittype 
        		direction      : radio 컴포넌트 방향(horizontal or vertical
        		
        		sortcolumn     : 공통코드 sort column
        		sorttype       : asc/desc
        		filterstring   : 데이타셋 필터링
        	 */ 
         
        	//파라미터 설정
            var codeParam = [
        		//Combo
        		{group:"TYPE", dataset:"ds_type00", component:this.Combo00}
        		,{group:"TYPE", dataset:"ds_type01", component:this.Combo01, selecttype:"A"}
        		,{group:"TYPE", dataset:"ds_type02", component:this.Combo02, selecttype:"S"}
        		,{group:"TYPE", dataset:"ds_type03", component:this.Combo03, selecttype:"N"}
        		
        		//Radio
        		,{group:"TYPE", dataset:"ds_type04", component:this.Radio00, selecttype:"A"}
        		,{group:"TYPE", dataset:"ds_type05", component:this.Radio01, selecttype:"S"} 
        		
        		//Grid
        		,{group:"TYPE", dataset:"ds_type06", component:this.Grid00, bindcolumn:"Column0"}
        		,{group:"TYPE", dataset:"ds_type07", component:this.Grid00, bindcolumn:"Column1", edittype:false}
        		,{group:"UNIT", dataset:"ds_type08", component:this.Grid00, bindcolumn:"Column2"}
        		,{group:"UNIT", dataset:"ds_type09", component:this.Grid00, bindcolumn:"Column3", edittype:false}
        		
        		//Dataset만 생성
        		,{group:"UNIT", dataset:"ds_type"}
        		
        		//폼 내의 데이타셋 활용(조회된 데이타셋을 활용하여 설정 시)
        		,{dataset:"ds_sample", codecolumn:"TEST_CD", datacolumn:"TEST_NM", component:this.Combo04, selecttype:"A"}
            ];
            
            //공통코드 생성 및 설정
        	Iject.Form.setCommCode(this, codeParam);	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("Sample_CommCode.xfdl");

       
    };
}
)();
