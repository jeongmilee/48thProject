//XJS=commonTransaction.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
        공통 트랜잭션관리
        @Path           scripts::commonTransaction.xjs
        @Description    서비스ID 입력으로 트랜잭션 수행
        @Author         임행섭( modification by 강현준)
        @Create         2016. 11. 25.
        ********************************************************************************/

        
        // @Description 각 Form에서 dsService 데이터셋을 이용해 트랜잭션하는 함수
        //            dsService 데이터셋에 [serviceID, URL, inData, outData, argument, callbackFunc] 컬럼을 생성하고
        //            해당 데이터를 입력하고 사용한다
        // @Param      serviceID : 사용할 트랜잭션아이디
        //            bAsync : 비동기 트랜잭션 true (default), 동기식 트랜잭션이 필요할 경우 false
        // @Usage      this.gfnService("findEmpList"); // 결과값 : findEmpList 트랜잭션를 비동기 방식으로 수행
        //            this.gfnService("findCodeName", false); // 결과값 : findCodeName 트랜잭션을 동기 방식으로 수행
        this.gfnService = function(serviceID,bAsync) {
           var serviceRow         = this.dsService.findRow("serviceID", serviceID);             // 트랜잭션ID
           var serviceURL         = this.dsService.getColumn(serviceRow, "URL");                // URL
           var serviceInData      = this.dsService.getColumn(serviceRow, "inData");             // inData 데이터셋
           var serviceOutData      = this.dsService.getColumn(serviceRow, "outData");           // outData 데이터셋
           var serviceArgument      = this.dsService.getColumn(serviceRow, "argument");         // 인자
           var serviceCallbackFunc = this.dsService.getColumn(serviceRow, "callbackFunc");      // 콜백함수명
           var serviceAsync        = bAsync;
        	
           if (serviceRow < 0) {
              alert("서비스 ID가 없습니다.");
           } else if (typeof serviceURL == "undefined" || serviceURL == "") {
              alert("서비스 URL이 없습니다.");
           }
           
           if (typeof serviceInData == "undefined" || serviceInData == "") {
              serviceInData = null;
           }
              
           if (typeof serviceOutData == "undefined" || serviceOutData == "") {
              serviceOutData = null;
           }
           
           if (typeof serviceArgument == "undefined" || serviceArgument == "") {
              serviceArgument = null;
           }
           
           if (typeof serviceCallbackFunc == "undefined" || serviceCallbackFunc == "") {
              serviceCallbackFunc = "gfnCallbackFunc";
           }
           
           // 트랜잭션 실행시 bAsync값에 따라서 동기화 & 비동기 설정가능
           // 2번째 파라미터로 아무것도 안주면 기본값으로 true 설정하고 비동기 트랜잭션 설정
           if (typeof bAsync != "boolean") {
              serviceAsync = true;
           } else if(bAsync != true) {
              serviceAsync = false;
           } else {
              serviceAsync = true;
           }
           
           // 트랜잭션 실행
           this.transaction(
              serviceID,
              serviceURL,
              serviceInData,
              serviceOutData,
              serviceArgument,
              serviceCallbackFunc,
              bAsync
           );      

           // LOG 출력
           var log = "\n";
           log += "serviceID : " + serviceID          + "\n";
           log += "URL       : " + serviceURL         + "\n";
           log += "InData    : " + serviceInData      + "\n";
           log += "OutData   : " + serviceOutData      + "\n";
           log += "Argument  : " + serviceArgument    + "\n";
           log += "callback  : " + serviceCallbackFunc + "\n";            
           log += "bAsync    : " + bAsync             + "\n";   
           trace(log);
        }

        this.ErrorCode = 1;
        this.ErrorMsg = "";
        this.message = "";

        this.gfnCallbackFunc = function(svcID,ErrorCode,ErrorMsg){
           if (ErrorCode < 1) {
              trace("[" + svcID + "] 에러코드 : " + ErrorCode + "\n" + ErrorMsg);
              this.gfnErrorPopup(svcID, ErrorMsg);
           } else {
              // 트랜잭션 완료
              trace("===== " + svcID + " 트랜잭션 성공 =====\n");
           }
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
