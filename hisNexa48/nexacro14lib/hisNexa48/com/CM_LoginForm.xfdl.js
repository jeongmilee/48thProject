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
                this.set_name("CM_LoginForm");
                this.set_classname("CM_LoginForm");
                this.set_titletext("LoginForm");
                this._setFormPosition(0,0,635,350);
            }
            this.style.set_background("URL('img::main.jpg') stretch");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"serviceID\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"inData\" type=\"STRING\" size=\"256\"/><Column id=\"outData\" type=\"STRING\" size=\"256\"/><Column id=\"argument\" type=\"STRING\" size=\"256\"/><Column id=\"callbackFunc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"serviceID\">loginCheck</Col><Col id=\"URL\">his::com/loginCheck.do</Col><Col id=\"inData\"/><Col id=\"argument\"/><Col id=\"callbackFunc\">loginCallback</Col><Col id=\"outData\">gdsEmp=gdsEmp</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("idNmEd", "absolute", "80%", "200", null, "30", "2.2%", null, this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "readonly", "white");
            obj.style.setStyleValue("border", "readonly", "1 solid darkgray");
            obj.set_value("박영하");
            this.addChild(obj.name, obj);

            obj = new Edit("pwEd", "absolute", "61.57%", "242", null, "30", "2.2%", null, this);
            obj.set_taborder("9");
            obj.set_password("true");
            obj.style.set_align("center middle");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Edit("idCdEd", "absolute", "61.57%", "200", null, "30", "20.63%", null, this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_align("center middle");
            obj.set_value("45027");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "51.34%", "200", "60", "30", null, null, this);
            obj.set_taborder("11");
            obj.set_text("ID");
            obj.style.set_background("black");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 새굴림");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "51.34%", "242", "60", "30", null, null, this);
            obj.set_taborder("12");
            obj.set_text("PW");
            obj.style.set_background("black");
            obj.style.set_color("white");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 10 새굴림");
            this.addChild(obj.name, obj);

            obj = new Button("loginBtn00", "absolute", "61.26%", "291", null, "32", "20.79%", null, this);
            obj.set_taborder("13");
            obj.style.set_background("@gradation URL('img::searchBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);

            obj = new Button("closeBtn00", "absolute", "80%", "291", null, "32", "2.2%", null, this);
            obj.set_taborder("14");
            obj.style.set_background("@gradation URL('img::closeBtn.png') stretch");
            obj.style.set_border("1 none #999999ff");
            obj.style.set_bordertype("normal 3 3");
            obj.style.set_cursor("hand");
            obj.style.set_gradation("none 0,0 white 100,100 black");
            obj.getSetter("class").set("DelBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 635, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CM_LoginForm");
            		p.set_titletext("LoginForm");
            		p.style.set_background("URL('img::main.jpg') stretch");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("CM_LoginForm.xfdl", "scripts::hrsScripts.xjs");
        this.addIncludeScript("CM_LoginForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("CM_LoginForm.xfdl", function() {
        /********************************************************************************                                                                            
        로그인 화면                                             						                                                                         
        @Path			공통              				   				
        @Description	로그인을 하기 위한 폼							
        @Author	  		임행섭( modification by 강현준) 				    			                        								                                            
        @Create         2016. 11. 25.                             		                    				                                            
        ********************************************************************************/

        // 공통 스크립트
        //include "scripts::hrsScripts.xjs";
        //include "scripts::commonScripts.xjs"; 

        // 아이디 컴포넌트 클릭
        this.id_oneditclick = function(obj,e)
        {
        	this.gfnEmpPopup();
        }

        this.setEmpInfo=function(array) {
        	this.idCdEd.set_value(array[0]);
        	this.idNmEd.set_value(array[1]);
        }

        
        // 로그인버튼 클릭
        this.loginBtn_onclick = function(obj,e)
        {
        	var empId=this.idCdEd.value;
        	var empPw=this.pwEd.value;
        	
        	if(this.gfnIsNull(empId)){
        		alert("사원번호를 입력해주세요.");
        	}else if(this.gfnIsNull(empPw)){
        		alert("비밀번호를 입력해주세요.");
        	}else{
        		var argument = "empNo='"+empId+"' empPw='"+empPw+"'";
        		var row = this.dsService.findRow('serviceID' , "loginCheck");
        		this.dsService.setColumn(row, "argument", argument);
        		this.gfnService("loginCheck");
        	}
        }
        this.message="";
        //로그인 콜백
        this.loginCallback = function(svcID,ErrorCode,ErrorMsg)
        {
        alert(ErrorCode + ErrorMsg + this.message);
        	if(ErrorCode == 1) {
        		alert(this.idNmEd.value+"님 환영합니다." + ErrorCode + ErrorMsg);
        		application.mainframe.visible = true; 
        		trace(application.gdsEmp.saveXML());
        		this.close();
        	}else if(ErrorCode == 2){	
        		alert("비밀번호가 맞지 않습니다." + ErrorCode + ErrorMsg + this.message);
        		this.pwEd.set_value("");
        	}
        }

        // 닫기 버튼 클릭
        this.closeBtn_onclick = function(obj,e)
        {
        	application.exit();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.idNmEd.addEventHandler("oneditclick", this.id_oneditclick, this);
            this.idCdEd.addEventHandler("oneditclick", this.id_oneditclick, this);
            this.loginBtn00.addEventHandler("onclick", this.loginBtn_onclick, this);
            this.closeBtn00.addEventHandler("onclick", this.closeBtn_onclick, this);

        };

        this.loadIncludeScript("CM_LoginForm.xfdl");

       
    };
}
)();
