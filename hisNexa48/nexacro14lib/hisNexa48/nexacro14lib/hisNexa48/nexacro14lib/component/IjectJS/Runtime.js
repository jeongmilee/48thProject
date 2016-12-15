/**
 * @fileoverview 넥사크로  공통 Library Runtime js
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Runtime")) {

    /**
     * @namespace
     * @name Iject.Runtime
     * @author
     * @memberof! Iject.Runtime
     */
    JsNamespace.declare("Iject.Runtime", {

        /**
         * login 처리
         * @param {XaComp} this(현재Form)
         * @return
         * @example
         *
         * @memberOf Iject.Runtime
         */
        loginR : function(o)
        {
            //application.mainframe.set_visible("false");
            var pThis = o.mainframe;
            var nScreenWidth;
            var nScreenHeight;
            var arrScreenSize;
            var nMoniterIndex = system.getMonitorIndex(system.cursorx, system.cursory); //모니터번호
            var objScreenSize = system.getScreenRect(nMoniterIndex);
            var nScreenLeft = objScreenSize.left;
            var nScreenTop = objScreenSize.top;
            var nScreenRight = objScreenSize.right;
            var nScreenBottom = objScreenSize.bottom;
                nScreenWidth = nScreenRight - nScreenLeft;
                nScreenHeight = nScreenBottom - nScreenTop;
            
            return;
            
//             application.mainframe.set_showtitlebar(false);
//             application.mainframe.set_left(nScreenLeft+(nScreenWidth/2)-180);
//             application.mainframe.set_top(nScreenTop+(nScreenHeight/2)-180);
//             application.mainframe.set_width(Iject.$.loginSize.width);
//             application.mainframe.set_height(Iject.$.loginSize.height);
// 			trace(application.mainframe.left);
// 			trace(application.mainframe.top);
// 			trace(application.mainframe.width);
// 			trace(application.mainframe.height);

            var oData ={
                id            : "login",             //callback id
                url           : "Frame::login.xfdl",   //url
                showtitlebar  : false,     //title bar
                autosize      : true,       //autosize
                resizable        : false,       //resize
                showstatusbar : false,     //statusbar
                openalign     : "center middle",  //align
                background    : "transparnet",
                args : {}                   // argument
            };

            //팝업 테스트
            Iject.showModal(pThis,oData,function(svcid,variant){

                /*
                 * popup calllback
                 *@param {object}this.fobj
                 *@param {string} this.svcid
                 *@param {string} this.variant
                 */
                var pThis= this.fobj;
                Iject.Runtime.setFrame(pThis);   //frame size open

            });

        },
        
        /**
         * Runtime logout
         * @param
         * @return
         * @example
         *
         * @memberOf Iject.Runtime
         */
        logoutR : function ()
        {
            if(Iject.confirm("로그아웃 하시겠습니까?")) application.exit();
        },

        /**
         * login 처리가 완료됬을때 frame size 조정
         * @param {XaComp} this(현재Form)
         * @return
         * @example
         *  Iject.setFrame(this);
         * @memberOf Iject.Runtime
         */
       setFrame: function(o)
       {
           application.mainframe.set_visible(false);
           Iject.onlogin(); //로그인 처리후 메인 프레임 값 setting

           application.mainframe.set_left(0);
           application.mainframe.set_top(0);
           application.mainframe.set_width(Iject.$.mainframeSize.width);
           application.mainframe.set_height(Iject.$.mainframeSize.height);
           application.mainframe.set_showtitlebar(true);
           application.mainframe.set_visible(true);
       }
    });
}