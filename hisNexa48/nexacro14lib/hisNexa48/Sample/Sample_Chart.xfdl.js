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
                this.set_name("Sample_Chart");
                this.set_classname("Sample_Chart");
                this.set_titletext("eCharts");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "10", "10", null, "41", "10", null, this);
            obj.set_taborder("0");
            obj.set_text("@ Chart");
            obj.style.set_background("whitesmoke");
            obj.style.set_border("1 solid black");
            obj.style.set_color("black");
            obj.style.set_padding("0 0 0 20");
            obj.style.set_font("bold 14 Dotum");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "12", "122", "1002", "478", null, null, this);
            obj.set_taborder("1");
            obj.getSetter("titletext").set("E-Charts");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "12", "75", "120", "34", null, null, this);
            obj.set_taborder("2");
            obj.set_text("draw");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample_Chart");
            		p.set_titletext("eCharts");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample_Chart.xfdl", function() {
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
        * Component Event Function
        ***********************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	var option = {
        		tooltip: {
        			show: true
        		},
        		legend: {
        			data:['Sales']
        		},
        		xAxis : [
        			{
        				type : 'category',
        				data : ['Shirts', 'Sweaters', 'Chiffon Shirts', 'Pants', 'High Heels', 'Socks']
        			}
        		],
        		yAxis : [
        			{
        				type : 'value'
        			}
        		],
        		series : [
        			{
        				name:'Sales',
        				type:'bar',
        				data:[5, 20, 40, 10, 10, 20]
        			}
        		]
        	};
        	this.gfn_drawChart(this.WebBrowser00, option);
        }

        this.gfn_drawChart = function(web,option)
        {	
        	if(nexacro.Browser == "Runtime")
        	{
        		web.set_url("http://localhost:9503/eChart.html");
        		web.option = option;
        		return;
        	}
        	if(nexacro.Browser == "IE" && nexacro.BrowserVersion == 8)
        	{
        		return;
        	}
        	var sOption = Eco.Json.encode(option);
        	
        	var html = "";
        	html += '<!DOCTYPE html>';
        	html += '<head>';
        	html += '    <meta charset="utf-8">';
        	html += '    <title>ECharts</title>';
        	html += '</head>';
        	html += '<body>';
        	html += '    <div id="main" style="height:400px"></div>';
        	html += '    <script src="http://echarts.baidu.com/build/dist/echarts.js"></script>';
        	html += '    <script type="text/javascript">';
        	html += '        require.config({';
        	html += '            paths: {';
        	html += '                echarts: "http://echarts.baidu.com/build/dist"';
        	html += '            }';
        	html += '        });';
        	html += '        require(';
        	html += '            [';
        	html += '                "echarts",';
        	html += '                "echarts/chart/bar",';
        	html += '                "echarts/chart/line"';
        	html += '            ],';
        	html += '            function (ec) {';
        	html += '                var myChart = ec.init(document.getElementById("main"));';
        	html += '                var option = '+sOption+';';
        	html += '                myChart.setOption(option); ';
        	html += '            }';
        	html += '        );';
        	html += '    </script>';
        	html += '</body>';
        	
        // 	trace(web.document);
        // 	web.getProperty("document").callMethod("Open");
        // 	web.getProperty("document").callMethod("Write", html);
        // 	web.getProperty("document").callMethod("Close");	
        	
        	var doc = web.document;
        	doc.open();
        	doc.write(html);
        	doc.close();
        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("draw", obj.option);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample_Chart.xfdl");

       
    };
}
)();
