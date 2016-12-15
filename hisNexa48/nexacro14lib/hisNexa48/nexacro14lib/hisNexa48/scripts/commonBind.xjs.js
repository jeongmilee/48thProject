//XJS=commonBind.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
        공통 코드 바인드 관리
        @Path		    scripts::commonBind.xjs
        @Description 	시스템 공통 코드 중에서 필요한 코드들만 데이터셋에 바인딩하는 스크립트
        @Author	    	임행섭( modification by 강현준)
        @Create         2016. 11. 25.
        ********************************************************************************/

        // @Description 각 Form에서 dsBindCode 데이터셋을 이용해 필요한 코드들만 트랜잭션해 데이터셋에 바인딩하는 함수
        //				dsBindCode 데이터셋에 [code, dsName] 컬럼을 생성하고
        //				해당 데이터를 입력하고 사용한다
        // @ Usage 		code : 코드그룹코드, dsName : 코드값 가져올 데이터셋 이름을 세팅 (ex: code : GA032(나라그룹코드) | dsName : dsCountry)
        //				this.gfnBind(); // 결과값 : dsBindCode 입력에 따라 각 데이터셋에 각 코드그룹별로 바인딩
        //				바인딩해오는 데이터셋 이름을 의미있는 이름으로 지을것!!! dsGA032(X) dsCountry(O) 				
        this.gfnBind = function() {
        	var outData = "";
        	for (var i = 0; i < this.dsBindCode.rowcount; i++) {
        		outData += " " + this.dsBindCode.getColumn(i,"dsName") + "=" + this.dsBindCode.getColumn(i,"dsName");
            }
            //alert(outData);
            
        	this.transaction(
        		"codeBind",
        		"his::com/bindCode.do",
        		"dsBindCode=dsBindCode",
        		outData,
        		"",
        		"callbackBind"
        		,false
        	);
        }

        this.callbackBind = function(svcID,errorCode,errorMsg) {
        	if(errorCode < 0) {
        		alert("[" + svcID + "] 에러코드 : " + errorCode + "\n" + errorMsg);
        	} else {
        		trace("===== 코드 바인딩 성공 =====\n");
        	}
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
