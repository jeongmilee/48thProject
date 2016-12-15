//XJS=wonScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
        원무공통 스크립트
        @Path		    scripts::wonScripts.xjs
        @Description 	원무공통 스크립트
        @Author	 		임행섭( modification by 강현준)
        @Create         2016. 11. 25.      
        ********************************************************************************/

        // 환자등록번호조회팝업
        this.gfnPatPopup = function() {
        	return application.open(
        			"WS_PatPopupForm",
        			"hdm::WS_PatPopupForm.xfdl",
        			this.parent,
        			{},
        			"showtitlebar=true showstatusbar=false",
        			110, 110,
        			this
        	);
        }

        
        //병실조회 팝업
        this.openHroomDialog = function(){		
        	return application.open(
        			"WBhosptlzHroomMngntPopupForm"
        			,"hdm::WB_HosptlzHroomMngntPopupForm.xfdl"
        			,this.parent
        			,null
        			,"showtitlebar=true showstatusbar=false"
        			,250,300,this);
        }

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
