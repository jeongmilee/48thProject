/**
 * @fileoverview 넥사크로  공통 Library  Html5 js
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Html5")) {

    /**
     * @namespace
     * @name Iject.Html5
     * @author
     * @memberof! Iject.Html5
     */
    JsNamespace.declare("Iject.Html5", {


        /**
         * Html5용 login 
         * @param
         * @return
         * @example
         *  Iject.loginH(o);
         * @memberOf Iject.Html5
         */
        loginH : function(o)
        {

            Iject.$.vFrameSet.set_separatesize("*,0,0");

        },

        /**
		 * 웹브라우저 favicon ICON 생성
		 * @return
		 * @example
		 * Iject.setFavicon();
		 * @memberOf Iject.Html5
		 */
		setFavicon : function()
		{
			if( nexacro.Browser == "Runtime")  return;
			var linkElement = document.createElement('link');
			linkElement.rel = 'shortcut icon';
			linkElement.type = 'image/ico';
			//linkElement.href = 'http://localhost/images/favicon1.ico';
			linkElement.href = './img/nexacro.ico';

			document.getElementsByTagName('head')[0].appendChild(linkElement);
		},
        
        /**
         * Html5 logout
         * @param 
         * @return
         * @example
         *   Iject.logoutH();
         * @memberOf Iject.Html5
         */
        logoutH : function()
        {
            window.top.location.reload(true);
        },

      

        /**
         * jquery animaition
         * @param {object} animamation 할 컴퍼넌트 object
         * @return {object} animation할 컴퍼넌트 반환.
         * @example
         * $(Iject.Html5.jquery(this.Div00)).animate({left:0},'slow');
         * $(Iject.Html5.jquery(this.Div00)).animate({left:10},'fast');
         * $(Iject.Html5.jquery(this.Div00)).fadeOut(1000);
         * $(Iject.Html5.jquery(this.Div00)).fadeIn(1000);
         * $(Iject.Html5.jquery(this.Div00)).animate({"height": "100px"}, {"queue": false, "duration": 500})
         .animate({"width": "250px"}, 500);
         * @memberOf Iject.Html5
         */
        jquery : function(objID)
        {

            var generateID = "";
            var prtID = objID;
            var i = 0;
            if( nexacro.Browser == "Runtime"|| (nexacro.Browser == "IE" && nexacro.BrowserVersion < 9) ) return;
            while(prtID != application.mainframe){
                if(prtID.toString() == "[object Form]") generateID = "form_" + generateID;
                else generateID = prtID.name + ((generateID != "")?"_":"") + generateID;
                i++;
                prtID = prtID.parent;
            }
            return "#mainframe_" + generateID;
        }



    });
}