/**
 * @fileoverview 넥사크로  공통 Library Mdi js
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Mdi")) {

    /**
     * @namespace
     * @name Iject.Mdi
     * @author
     * @memberof! Iject.Mdi
     */
    JsNamespace.declare("Iject.Mdi", {



        /**
         * 메뉴 아이디를  기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * @param {string} menuid
         * @param {object} args
         * @return
         * @example
         *        Iject.Mdi.call(menuid, args);
         * @memberOf Iject.Mdi
         */
        call : function(menuid, args)
        {
            if(Eco.isEmpty(menuid)) return;
            
            var gdsOpen = application.gds_openMenu;    //열린 dataset
            var gdsMenu = application.gds_menu;       //global dataset

            var winid = gdsOpen.lookup(Iject.$.MENU_ID, menuid, Iject.$.WIN_ID);
			var formurl = gdsMenu.lookup(Iject.$.MENU_ID, menuid, Iject.$.MENU_URL);
			
			if(Eco.isEmpty(formurl)) return;
			
            if (!Eco.isEmpty(winid))
            {
                if (Iject.$.mdiFrame.form.isActiveFrame(winid, args) == true)
                {
                    Iject.$.mdiFrame.form.fn_moveTab(winid);
                    Iject.Mdi.redraw(winid, args);
                    Iject.set_frameset("work");
                    return;
                }
            }

            Iject.Mdi.newMdi(menuid, args);
            
            Iject.set_frameset("work");
        },

		/**
         * 화면 URL 로 메뉴를 오픈해준다.(업무화면 내에서 다른 화면 호출시 사용)
         * @param {string} menuurl
         * @param {string} menutitle
         * @param {object} args
         * @return
         * @example
         *        Iject.Mdi.link(menuurl, menutitle, args);
         * @memberOf Iject.Mdi
         */
        link : function(menuurl, menutitle, args)
        {
			if(Eco.isEmpty(menuurl)) return;
			
            var gdsOpen = application.gds_openMenu;    //열린 dataset
            var gdsMenu = application.gds_menu;       //global dataset
            
            var menuid = gdsMenu.lookup(Iject.$.MENU_URL, menuurl, Iject.$.MENU_ID);
            //메뉴에 등록된 화면인 경우
            if(!Eco.isEmpty(menuid))
            {
				menutitle = gdsMenu.lookup(Iject.$.MENU_URL, menuurl, Iject.$.MENU_NM);
            }
            else
            {
				var sidx = menuurl.indexOf("::");
				var eidx = menuurl.indexOf(".");
				menuid = menuurl.substring(sidx+2, eidx);
            }
            var winid = gdsOpen.lookup(Iject.$.MENU_ID, menuid, Iject.$.WIN_ID);

            if (!Eco.isEmpty(winid))
            {
                if (Iject.$.mdiFrame.form.isActiveFrame(winid, args) == true)
                {
                    Iject.$.mdiFrame.form.fn_moveTab(winid);                    
                    Iject.Mdi.redraw(winid, args);                    
                    Iject.set_frameset("work");
                    return;
                }
            }

            Iject.Mdi.linkMdi(menuid, menuurl, menutitle, args);
        },
        /**
         * 화면 URL 로 메뉴를 오픈해준다.(업무화면 내에서 다른 화면 호출시 사용)
         * @param {XaComp} this(현재폼)
         * @param {object} arguments
         * @return
         * @example
         *  var oObj = {
         *       ds : this.ds_menu,
         *       nRow : e.row,
         *       aArg : []
         *   };
         *        Iject.Mdi.call(this,oObj);
         * @memberOf Iject.Mdi
         */
		redraw : function(winid, args)
		{
			var framesInfo = Iject.$.workFrame.frames;
			var cframe = framesInfo[winid];
			cframe.arguments["args"] = args;
			cframe.form.fn_redraw();
		},
        
        /**
         * 신규 생성된 윈도우(프레임) 화면을 gds_openMenu에 등록
         * @private
         * @param {string} winid: 윈도우 생성 키
         * @param {string} menuid: 메뉴아이디
         * @param {string}  strTitle:타이틀
         * @return {boolen} true/false
         * @example
         *     Iject.Mdi.setOpenMenuDs(winid, menuid, strTitle);   // 열린메뉴 화면 삽입
         * @memberOf Iject.Mdi
         */
        setOpenMenuDs : function(winid, menuid, strTitle)
        {
            var gdsOpen = application.gds_openMenu;  //열린 dataset
            var curRow = gdsOpen.addRow();
                gdsOpen.setColumn(curRow, "WIN_ID", winid);
                gdsOpen.setColumn(curRow, "MENU_ID", menuid);
                gdsOpen.setColumn(curRow, "TITLE", strTitle);
        },

        /**
         *  넘어온 아규먼트 처리 설정
         * @param  {XaComp} this(현재form)
         * @return
         * @example
         * Iject.Mdi.setOwnFrameArgs(this);
         * @memberOf Iject.Mdi
         */
        set_argument : function(o)
        {
            Iject.$.w_winkey  = o.getOwnerFrame().arguments["winKey"];
            Iject.$.w_pageurl = o.getOwnerFrame().arguments["pageUrl"];
            Iject.$.w_menunm  = o.getOwnerFrame().arguments["menuNm"];
            Iject.$.w_menuid  = o.getOwnerFrame().arguments["menuId"];
            Iject.$.w_title   = Iject.$.w_menunm+" ("+ Iject.$.w_menuid+")";
        },
		
		 /**
         *  넘어온 아규먼트 처리 설정
         * @param  {XaComp} this(현재form)
         * @return
         * @example
         * Iject.Mdi.setOwnFrameArgs(this);
         * @memberOf Iject.Mdi
         */
        get_argument : function(o)
        {
			var args = o.getOwnerFrame().arguments;
			if(Eco.isEmpty(args)) return null;
			else return o.getOwnerFrame().arguments["args"];
        },
        
        /**
         * gds_openMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * @param {string} menuId
         * @param {number} gds_openMenu의rowpostion
         * @param {object} arguments
         * @return 
         * @example
         *  Iject.Mdi.newMdi(menuid, args);
         * @memberOf Iject.Mdi
         */
        newMdi : function(menuid, args)
        {
            var gdsOpen = application.gds_openMenu;  //열린 dataset
            var gdsMenu = application.gds_menu;      //global dataset
            
            var winid = "win" + menuid + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);
            
            //var winid = "win" + menuid;
            var strTitle = gdsMenu.lookup(Iject.$.MENU_ID, menuid, Iject.$.MENU_NM);
            var sMenuUrl = gdsMenu.lookup(Iject.$.MENU_ID, menuid, Iject.$.MENU_URL);
            var sMenuNm  =  gdsMenu.lookup(Iject.$.MENU_ID, menuid, Iject.$.MENU_NM);

            if(Eco.isEmpty(sMenuUrl)) return;   //pageURl 이 없으면 return

            Iject.Mdi.setOpenMenuDs(winid, menuid, strTitle);   // 열린메뉴 화면 삽입

            var objNewWin = new ChildFrame;
                objNewWin.init(winid, "absolute", 0, 0, Iject.$.workFrame.getOffsetWidth() - 0, Iject.$.workFrame.getOffsetHeight() - 0);

                Iject.$.workFrame.addChild(winid, objNewWin);

                objNewWin.set_tooltiptext(winid);
                objNewWin.arguments = [];
                objNewWin.set_dragmovetype("all");
                objNewWin.set_showtitlebar(false);
                objNewWin.set_resizable(true);
                objNewWin.set_openstatus("maximize");
                objNewWin.set_titletext( strTitle);
                objNewWin.arguments["winKey"]   =  winid;
                objNewWin.arguments["menuId"]   =  menuid;
                objNewWin.arguments["menuNm"]   =  sMenuNm;
                objNewWin.arguments["pageUrl"]  =  sMenuUrl;
                objNewWin.arguments["args"]    =  args;
                objNewWin.set_formurl("Frame::WorkFrame.xfdl");
                objNewWin.show();

            Iject.$.mdiFrame.form.fn_addTab(winid, strTitle);   //mdi tab button add
            Iject.$.mdiFrame.form.isActiveFrame(winid);
        },
        /**
         * gds_openMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * @param {string} menuId
         * @param {number} gds_openMenu의rowpostion
         * @param {object} arguments
         * @return 
         * @example
         *  Iject.Mdi.linkMdi(menuid, nRow, args);
         * @memberOf Iject.Mdi
         */
        linkMdi : function(menuid, menuurl, menutitle, args)
        {
            var gdsOpen = application.gds_openMenu;  //열린 dataset
            var gdsMenu = application.gds_menu;      //global dataset
            
            var winid = "win" + menuid + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);

            var strTitle = menutitle;
            var sMenuUrl = menuurl;
            var sMenuNm  =  menutitle;

            if(Eco.isEmpty(sMenuUrl)) return;   //pageURl 이 없으면 return

            Iject.Mdi.setOpenMenuDs(winid, menuid, strTitle);   // 열린메뉴 화면 삽입

            var objNewWin = new ChildFrame;
                objNewWin.init(winid, "absolute", 0, 0, Iject.$.workFrame.getOffsetWidth() - 0, Iject.$.workFrame.getOffsetHeight() - 0);

                Iject.$.workFrame.addChild(winid, objNewWin);

                objNewWin.set_tooltiptext(winid);
                objNewWin.arguments = [];
                objNewWin.set_dragmovetype("all");
                objNewWin.set_showtitlebar(false);
                objNewWin.set_resizable(true);
                objNewWin.set_openstatus("maximize");
                objNewWin.set_titletext( strTitle);
                objNewWin.arguments["winKey"]   =  winid;
                objNewWin.arguments["menuId"]   =  menuid;
                objNewWin.arguments["menuNm"]   =  sMenuNm;
                objNewWin.arguments["pageUrl"]  =  sMenuUrl;
                objNewWin.arguments["args"]    =  args;
                objNewWin.set_formurl("Frame::WorkFrame.xfdl");
                objNewWin.show();

            Iject.$.mdiFrame.form.fn_addTab(winid, strTitle);   //mdi tab button add
            Iject.$.mdiFrame.form.isActiveFrame(winid);
        }
    });
}