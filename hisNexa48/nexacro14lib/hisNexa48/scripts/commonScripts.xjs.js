//XJS=commonScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path, "scripts::commonTransaction.xjs");
        this.addIncludeScript(path, "scripts::commonPopup.xjs");
        this.addIncludeScript(path, "scripts::commonBind.xjs");
        this.addIncludeScript(path, "scripts::commonUtil.xjs");
        this.addIncludeScript(path, "scripts::commonOpen.xjs");
        this.addIncludeScript(path, "scripts::commonGrid.xjs");
        this.registerScript(path, function() {

        /********************************************************************************
        공통 스트립트관리
        @Path		    scripts::commonScripts
        @Description 	공통스크립트의 모음
        @Author	   		
        @Create			2016. 11. 25.                             		          
        ********************************************************************************/

        //include "scripts::commonTransaction.xjs";	// 트랜잭션 스크립트
        //include "scripts::commonPopup.xjs";			// 팝업 스크립트
        //include "scripts::commonBind.xjs";			// 코드 바인딩 스크립트
        //include "scripts::commonUtil.xjs";          // 유틸리티 스크립트
        //include "scripts::commonOpen.xjs";          // 화면 관련 스크립트
        //include "scripts::commonGrid.xjs";			// 그리드 관련 스크립트

        
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
