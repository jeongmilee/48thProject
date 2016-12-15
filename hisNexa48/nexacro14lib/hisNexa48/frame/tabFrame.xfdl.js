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
                this.set_name("tabFrame");
                this.set_classname("tabFrame");
                this.set_titletext("tabFrame");
                this._setFormPosition(0,0,1250,41);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("topTab", "absolute", "0.64%", "5", null, "33", "2.64%", null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonbackground("#4682b466");
            obj.style.set_buttongradation("liner 0,0 #feffffff 0,100 aliceblue [60% #f2f2efff][70% #ecece9ff]");
            obj.style.set_buttonborder("2 solid transparent");
            obj.style.set_buttonpadding("8 16 8 16");
            obj.style.set_background("transparent");
            obj.style.set_border("0 solid transparent");
            obj.style.set_bordertype("round 3 3");
            obj.style.set_font("12 antialias 맑은 고딕");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage", this.topTab);
            obj.set_text("tabpage1");
            obj.style.set_background("whitesmoke");
            obj.set_dragscrolltype("none");
            this.topTab.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.topTab);
            obj.set_text("tabpage2");
            this.topTab.addChild(obj.name, obj);

            obj = new Button("allCloseBtn", "absolute", "97.68%", "5", null, "29", "0.16%", null, this);
            obj.set_taborder("1");
            obj.set_text("X");
            obj.style.set_background("gainsboro");
            obj.style.set_color("orangered");
            obj.style.set_font("bold 13 antialias 맑은 고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1250, 41, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("tabFrame");
            		p.set_titletext("tabFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("tabFrame.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("tabFrame.xfdl", function() {
        /********************************************************************************                                                                            
        탭 프레임                                            						                                                                         
        @Path			시스템 레이아웃 프레임          				   				
        @Description 	각 화면으로 이동할 수 있는 탭 프레임						
        @Author	  		임행섭( modification by 강현준)
        @Create         2016. 11. 25.                             		                    				                                            
        ********************************************************************************/

        //include "scripts::commonScripts.xjs";

        // 폼 로드시
        this.tabFrame_onload = function(obj,e)
        {
           // 탭 초기화
           for (var i = (this.topTab.tabpages.length-1); i >= 0; i--) {
              this.topTab.removeTabpage(i);
           }
        }

        // 탭 추가 함수
        // @Param (탭페이지에 연결할 URL, 탭에 표시할 텍스트)
        this.fn_addTabpage = function(menuURL,menuNM) 
        {   
           if(this.topTab.insertTabpage("tabpage"+application.gvTabIndex, application.gvTabIndex, menuURL, menuNM) == -1) {
              alert("화면 로딩이 실패하였습니다.");
           } else {
              application.gvTabIndex++;
           }
        }

        // 모든 창 닫기
        this.allCloseBtn_onclick = function(obj,e)
        {
           if (confirm("모든 창을 닫으시겠습니까?")) {
              var tabCnt = this.topTab.tabpages.length;
              for (var i = (this.topTab.tabpages.length-1); i >= 0; i--) {
                 var childName = this.topTab.tabpages[i].url;
                 var objChild = application.mainframe.VFrameSet.FrameSet.frames[childName];
                 application.mainframe.VFrameSet.FrameSet.removeChild(childName);
                 objChild.destroy();
                 objChild = null;   
                 this.topTab.removeTabpage(i);
              }
           }
           application.gvTabIndex = 0;
        }

        // 탭 변경시 기존 탭 작아지고 새로 눌러진 탭 키우기
        this.topTab_onchanged = function(obj,e) 
        {
           if (this.topTab.tabpages[e.postindex] == null) return;
           
           var preChildName  = obj.tabpages[e.preindex].url;
           var postChildName = obj.tabpages[e.postindex].url;
           
           var objPreChild  = application.mainframe.VFrameSet.FrameSet.frames[preChildName];
           var objPostChild = application.mainframe.VFrameSet.FrameSet.frames[postChildName];
           
           objPreChild.set_openstatus("minimize");
           objPostChild.set_openstatus("maximize");
           objPostChild.setFocus();
        }

        // 탭 버튼 옆에 추가적으로 보여지는 extrabutton 을 눌렀을 때 발생하는 이벤트
        this.topTab_onextrabuttonclick = function(obj,e)
        {   
           if (confirm(obj.tabpages[e.index].text + " 탭을 닫으시겠습니까?")) {
              var childName = obj.tabpages[e.index].url;
              var objChild = application.mainframe.VFrameSet.FrameSet.frames[childName];
              application.mainframe.VFrameSet.FrameSet.removeChild(childName);
              objChild.destroy();
              objChild = null;   
              obj.removeTabpage(e.index);
           }
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.tabFrame_onload, this);
            this.topTab.addEventHandler("onchanged", this.topTab_onchanged, this);
            this.topTab.addEventHandler("onextrabuttonclick", this.topTab_onextrabuttonclick, this);
            this.allCloseBtn.addEventHandler("onclick", this.allCloseBtn_onclick, this);

        };

        this.loadIncludeScript("tabFrame.xfdl");

       
    };
}
)();
