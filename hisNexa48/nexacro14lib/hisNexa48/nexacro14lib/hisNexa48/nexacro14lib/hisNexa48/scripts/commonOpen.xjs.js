//XJS=commonOpen.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
        공통 메뉴 클릭시 화면호출
        @Path		    scripts::commonOpen.xjs
        @Description 	메뉴클릭시 화면호출하는 스크립트
        @Author	    	임행섭( modification by 강현준) 
        @Created on 	2016.11.25
        ********************************************************************************/

        this.gfnOpen = function(sID,sURL,menuName) {
        	var flag = true;
        	var movetap = 0;
        	// 메뉴아이디로 이미 열린 탭이 있는지 검사
        	for (var num=0; num < application.mainframe.frameSet.tabFrame.form.topTab.tabpages.length; num++) {
        		//alert(application.mainframe.frameSet.tabFrame.form.topTab.tabpages[num].url);
        		
        		if(application.mainframe.frameSet.tabFrame.form.topTab.tabpages[num].url == sID){
        			flag = false;
        			movetap = num;
        		}
        	}
        	
        	// 열린 탭이 없다면 새창 객체를 만들고 ADD
        	if (flag) {
        													 
        		application.mainframe.frameSet.tabFrame.form.fn_addTabpage(sID, menuName);
        		
         		var oChildFrame = new ChildFrame(sID, "absolute", 0, 0, 1250, 785, null, null, sURL);
         		oChildFrame.set_showtitlebar(false);
        		oChildFrame.set_resizable(false);
         		oChildFrame.set_dragmovetype("none");
         		oChildFrame.set_scrollbars("alwaysvert");
         		application.mainframe.frameSet.mainFrame.addChild(sID, oChildFrame);
         		oChildFrame.show();
         		
        		
        	} 
        	// 열린 탭이 있다면 해당창 최대화
        	else {
        		if (application.mainframe.frameSet.tabFrame.form.topTab.tabpages[movetap] == null) {
        			return;
        		}
        		var childName = application.mainframe.frameSet.tabFrame.form.topTab.tabpages[movetap].url;
        		var objChild = application.mainframe.frameSet.mainFrame.frames[childName];
        		if (objChild.openstatus == "minimize") {
        			objChild.set_openstatus("maximize");
        		}
        		//objChild.show();
        		objChild.setFocus();
        	}
        	
        	//application.mainframe.frameSet.mainFrame.set_scrollbars("none");
        }
        // 
        // // Create Object  
        // var objChildFrame = new ChildFrame();  
        // objvar ChildFrame = new ChildFrame();
        // objChildFrame.init("ChildFrame00", "absolute", 30, 30, 30, 30, null, null);
        // objChildFrame.init("ChildFrame00", "absolute", 30, 30, 30, 30, null, null, "Base::formurl.xfdl");
        // or  
        // var objChildFrame = new var ChildFrame = new ChildFrame();
        // var objChildFrame = new ChildFrame("ChildFrame00", "absolute", 30, 30, 30, 30, null, null);
        // var objChildFrame = new ChildFrame("ChildFrame00", "absolute", 30, 30, 30, 30, null, null, "Base::formurl.xfdl");
        // 
        // // Add Object to Parent Frame  
        // this.addChild("ChildFrame00", objChildFrame); 
        //  
        // // Insert Object to Parent Frame  
        // this.insertChild(1, "ChildFrame00", objChildFrame); 
        //  
        // // Show Object  
        // objChildFrame.show(); 
        //  
        // // Remove Object form Parent Frame  
        // this.removeChild("ChildFrame00"); 
        //  
        // // Destroy Object  
        // objChildFrame.destroy(); 
        // objChildFrame = null;
        // 
        // 
        // 

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
