//XJS=commonUtil.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************                                                                            
        공통 유틸                                                                                                                                          
        @Path          scripts::commonUtil.xjs                                            
        @Description   공통 유틸리티 함수들을 모은 스크립트                        
        @Author        임행섭( modification by 강현준)                                                                                                                    
        @Create        2016. 11. 25.                                                                                                               
        ********************************************************************************/

        
        // @Description  서버시간을 가져오는 함수
        // @Param        format : DB 날짜값 형식을 지정한다 (ex "yyyy-MM-dd")
        // @Usage        var date = this.gfnDate("yyyy/mm/dd");   
        this.serverDate = "";
        this.gfnDate = function(format) {
           this.transaction(
              "findDate",
              "his::com/findDate.do",
              "",
              "",
              "format=" + format,
              "",
              false
           );
           return this.serverDate;
        }

        // @Description  로컬시간을 다양한 형식으로 바꿔주는 함수
        // @Param        format : 특정 날짜값 형식을 지정한다 (ex "Y-m-d" "pm H:i")
        // @Usage        var date = this.gfnFormatDate("y-m-d h:i:s AM");
        this.gfnFormatDate = function(format) {    
           var date = new Date();
           return format.replace(/(Y|y|m|d|h|H|i|s|am|pm)/gi,
              function($1) {
                 switch ($1) {    
                    case 'Y' : return date.getFullYear();                                               // Y : 4자리 연도
                    case 'y' : return date.getFullYear().toString().substr(2);                          // y : 2자리 연도
                    case 'm' : return (date.getMonth() + 1).toString().padLeft(2,"0");                  // m : 월
                    case 'd' : return date.getDate().toString().padLeft(2,"0");                         // d : 일
                    case 'h' : return ((h= date.getHours() % 12) ? h : 12).toString().padLeft(2,"0");   // h : 1 - 12 시
                    case 'H' : return date.getHours().toString().padLeft(2,"0");                        // H : 0 - 23 시
                    case 'i' : return date.getMinutes().toString().padLeft(2,"0");                      // i : 분
                    case 's' : return date.getSeconds().toString().padLeft(2,"0");                      // s : 초
                    case 'AM': return date.getHours() < 12 ? 'AM' : 'PM';                               // AM : AM PM 표시
                    case 'pm': return date.getHours() < 12 ? 'am' : 'pm';                               // pm : am pm 표시
                 }
              });
        }

        // @Description  로컬일자 가져오는 함수 (yyyyMMdd 형식)
        // @Usage        var date = this.gfnLocalDate();
        this.gfnLocalDate = function() {
           var date = new Date();   
            var sRtn = date.getFullYear()                         + "-"
                    + (date.getMonth()+1).toString().padLeft(2, "0")  + "-"
                       + date.getDate().toString().padLeft(2, "0");
           return sRtn;
        }

        // @Description  로컬시간 가져오는 함수 (hh:mm:ss 형식)
        // @Usage        var date = this.gfnLocalTime();
        this.gfnLocalTime = function() {
           var date = new Date();   
            var sRtn = date.getHours().toString().padLeft(2, "0")        + ":"
                       + date.getMinutes().toString().padLeft(2, "0")    + ":"
                       + date.getSeconds().toString().padLeft(2, "0");
           return sRtn;
        }

        // @Description  IP주소 가져오는 함수
        // @Usage        var ip = this.gfnUserIP(); // 리턴값 : "192.168.xxx.xxx"
        this.gfnUserIP = function() {
           // 확장모듈 로딩
           var Extension = {};
           var strPATH = "C:/Dev/ExtCommonV13.dll";
           nexacro._addExtensionModule(Extension, strPATH);
           var ip = Extension._ext_getIPAddress()[2];
           // 확장모듈 모두 내리기
           nexacro._clearExtensionModule();   
           return ip;
        }

        // @Description  코드명 가져오는 함수
        // @Param        code : 코드그룹코드
        //               detailCode : 상세코드
        // @Usage        var codeName = this.gfnCodeName("GA032", "KR"); // 리턴값 : "한국"
        this.codeName = "";
        this.gfnCodeName = function(code,detailCode) {
           this.transaction(
              "findCodeName",
              "his::com/findCodeName.do",
              "",
              "dsOutCode=dsOutCode",
              "code=" + code + " detailCode=" + detailCode,
              "",
              false
           );
           return this.codeName;
        }

        // @Description NULL값 체크 함수 - true:값이없다 false:값이있다
        // @Param      sValue : 체크할 값
        // @Usage      var a;  alert(this.gfnIsNull(a));   // 결과값 : true
        this.gfnIsNull = function(sValue) {
           if (new String(sValue).valueOf() == "[Undefined]") return true;
           else if (new String(sValue).valueOf() == "undefined") return true;
           else if (new String(sValue).valueOf() == "NaN") return true;
           else if (new String(sValue).length == 0) return true;
           else if (new String(sValue) == null) return true;
           else if (sValue == null) return true;                             
           else if (sValue == undefined) return true;       
           else return false;                                                                       
        }

        
        this.gfnNullValue = function(sValue) {
        	return (this.gfnIsNull(sValue) == true ? "" : sValue);
        }

        // @Description  데이터셋 LIKE 필터링 문자열 함수
        // @Param        columnName : 필터링할 데이터셋 컬럼명
        //               keyword : 필터링 키워드
        // @Usage        this.dsTest.filter(this.gfnLike("COL1", "ABC")); // 결과값 : dsTest 데이터셋의 COL1 컬럼이 '%ABC' 로 필터링됨
        this.gfnLike = function(columnName,keyword) {
           return "String(" + columnName + ").indexOf('" + keyword + "') >= 0";
        }

        // @Description  데이터셋의 특정 컬럼을 대상으로 유효하지 않은 데이터(NULL, undefined, NAN, ""...) 행을 모두 제거하는 함수
        // @Param        dataset : 대상 데이터셋
        //               checkColumn : 대상 데이터셋의 기준 컬럼명
        // @Usage        this.gfnClearInvalidData(dsTest, "COL1"); // 결과값 : dsTest 데이터셋의 COL1 컬럼을 기준으로 유효하지않은 값이 있는 모든 행 삭제
        this.gfnClearInvalidData = function(dataset,checkColumn) {
           var rowCount = dataset.rowcount;
           var delCnt = 0;
           for (var i = rowCount - 1; i >= 0; i--) {
              var check = dataset.getColumn(i, checkColumn);
              if (check == "" || check == null) {
                 dataset.deleteRow(i);
                 delCnt++;
              }
           }
           if (delCnt > 0) {
              alert("유효하지 않은 행 " + delCnt + "개가 삭제되었습니다.");
           }
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
