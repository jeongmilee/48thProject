//XJS=commonPopup.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        
        /********************************************************************************                                                                       *
        공통 팝업창 관리
        @Path			scripts::commonPopup.xjs
        @Description	공통으로 사용하는 Popup창 띄우는 스크립트
        @Author	    	임행섭( modification by 강현준)
        @Creat			2016. 11. 25.
        ********************************************************************************/

        // popupId는 열고자 하는 팝업창폼 이름입니다.
        // param 으로 데이터셋이나 변수를 부모창에서 아래와같이 던지세요.
        // popupForm 은 폼이름이고, popupFolder는 폼이 속한 폴더명입니다.
        // var param = {empNo:empNo, belongYear:belongYear, dsHyDependentInsurance:this.dsHyDependentInsurance, dsHyDeductionData:this.dsHyDeductionData};
        // popupId 와 popupFolder,popupForm 는 필수로 넘기셔야 합니다.
        // 자식창에서 param 받을때 onload함수에서 this.parent.empNo 형식으로 받으면되요. 
        // 데이터셋일경우 this.parent.dsHyDependentInsurance 로 받아서 copy데이터 처리하면됩니다.

        // @Description
        // @Param
        // @Usage
        this.gfnPopup = function(popupId,popupFolder,param,callbackFunc) {
        	var childFrame = new ChildFrame; 		
        	childFrame.init(popupId , "absolute", 0, 0, 0, 0, 0, 0, popupFolder+"::"+popupId+".xfdl");
        	childFrame.set_openalign("center middle");
        	childFrame.showModal(popupId, this.getOwnerFrame(), param, this, callbackFunc);
        }

        // 시스템 공통 코드 팝업
        this.gfnCodePopup = function(code,args) {   //open에 대해서는 도움말을 보고 참고해서 해석하세용~
        	return application.open(
        		"코드팝업",
        		"com::CM_CodepopupForm.xfdl",
        		this.parent,
        		{code:code , args:args},
        		"showtitlebar=true showstatusbar=false",
        		110, 110,
        		this
        	);
        }

        // 의사 팝업
        this.gfnDoctPopup = function(deptCode,deptName) {
        	return application.open(
        		"의사팝업",
        		"com::CM_DoctPopupForm.xfdl",
        		this.parent,
        		{deptCd:deptCode, deptNm:deptName},
        		"showtitlebar=true showstatusbar=false",
        		110, 110,
        		this
        	);
        }

        // 에러 팝업
        this.gfnErrorPopup = function(svcID,errorMsg) {
           return application.open(
        	   "에러팝업",
        	   "com::CM_ErrorPopupForm.xfdl",
        	   this.parent,
        	   {svcID:svcID, errorMsg:errorMsg},
        	   "showtitlebar=true showstatusbar=false",
        	   200, 300,
        	   this
           );
        }

        // 주소 팝업
        this.gfnPostPopup = function() {
           return application.open(
        	   "우편번호팝업",
        	   "com::CM_PostPopupForm.xfdl",
        	   this.parent,
        	   null,
        	   "showtitlebar=true showstatusbar=false",
        	   110, 110,
        	   this
           );
        }

        // 회계 팝업
        this.gfnAccountPopup = function() {
           return application.open(
        	   "회계팝업",
        	   "acc::AB_AccountPopupForm.xfdl",
        	   this.parent,
        	   "",
        	   "showtitlebar=true showstatusbar=false",
        	   110, 110,
        	   this
           );
        }

        // 사원팝업
        this.gfnEmpPopup = function() {
           return application.open(
        	   "사원팝업",
        	   "hrs::HM_EmpPopupForm.xfdl",
        	   this.parent,
        	   null,
        	   "showtitlebar=true showstatusbar=false",
        	   110, 110,
        	   this
           );
        }
        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
