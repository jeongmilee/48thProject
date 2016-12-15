/**
 * @fileoverview 넥사크로 global variable
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.$"))
{

    /**
     * @namespace
     * @name global variable
     * @private
     * @author
     * @memberof!  Iject.$
     */
    JsNamespace.declare("Iject.$", {

        /**
         * 공통 Gobal variable 설정
         *  @private
         * @memberOf Iject.$
         */
		hFrame:"",  
		leftFrame:"",
		loginFrame:"",
		hFrame:"",
		leftFrame:"",
		vFrameSet1:"",
		topFrame:"",
		workFrame:"",   
		mainFrame:"",  
		mdiFrame:"",   
		//httpurl:"",							  	//trnasaction service url
		framesize : "0,50,*,0",  		         							  //defualt seperatesize
		loginSize: {width:450,height:290},
		mainframeSize : {},
		ExtCommonPath :"",
		userid : "",
		usernm :  "",
		
		/**
         * frame variabel setting
         * @private
         * @memberOf Iject.$
         */
		urlLogin :  "Frame::Login.xfdl",       //login url setting
		urlLeft : "Frame::LeftFrame.xfdl",    //leftFrame url setting
		urlTop :  "Frame::TopFrame.xfdl",     //topFrame url setting
		urlMdi : "Frame::MdiFrame.xfdl",     //MDIFrame url setting
		urlMain : "Frame::MainFrame.xfdl",    //MainFrame url setting

		/**
		 * work frame variabel setting
		 * @private
		 * @memberOf Iject.$
		 */
		w_winkey  : "",
	    w_pageurl : "",
	    w_menunm  : "",
	    w_menuid  : "",
        w_title   : "",

		/**
		 * Set Menu Column
		 * @private
		 * @memberOf Iject.$
		 */
		MENU_GRP	 : "MENU_GRP",
		UP_MENU_ID   : "UP_MENU_ID",    //  MENU ID
		MENU_ID      : "MENU_ID",    //  MENU ID
		MENU_NM      : "MENU_NAME",
		MENU_URL     : "MENU_URL",
		MENU_LEVEL     : "MENU_LEVEL",
		MENU_ARGS    : "MENU_ARGS", //메뉴파라메터
		WIN_ID       : "WIN_ID",      //윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
		MAX          : 10,            //열린 메뉴 최대 갯수
		TITLE        : "TITLE",
		Desc_Url     : "Desc_Url",
		Desc_Url_ko  : "Desc_Url_ko",
		
		/**
		 * Common Code Usage
		 * @private
		 * @memberOf Iject.$
		 */
		 COMMCD_GROUP : "GROUP",
		 COMMCD_CODE  : "CODE",
		 COMMCD_DATA  : "DATA",
		 
		 /**
		 * 그리드 체크박스 컬럼명
		 * @private
		 * @memberOf Iject.$
		 */
		 CHK_COL : "_chk"
    });

}
