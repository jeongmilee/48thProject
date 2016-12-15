/**
 * @fileoverview 넥사크로  공통 Library
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject"))
{

	/**
	 * @namespace
	 * @name Iject
	 * @author
	 * @memberof! Iject
	 * @author  copyright 2015 TOBESOFT {J}
	 */
	JsNamespace.declare("Iject", {

		initSystem : function(app)
		{
			var svcurl_pms = ["http://localhost:8282/", "http://devpms.nongshim.com/", "http://pms.nongshim.com/"];
			var svcurl_rms = ["http://localhost:8282/", "http://devrms.nongshim.com/", "http://rms.nongshim.com/"];
			
			var sXadl = application.xadl;
			//adl명에 따라서 시스템 구분
			if(sXadl.indexOf("hisNexa48.xadl") > -1 || sXadl.indexOf("hisNexa48_ex.xadl") > -1) application.gv_system = "PMS";
			else if(sXadl.indexOf("hisNexa48.xadl") > -1) 								application.gv_system = "RMS";
			
			var objSvcUrl = null;
			
			if(application.gv_system == "PMS") objSvcUrl = svcurl_pms;
			else if(application.gv_system == "RMS") objSvcUrl = svcurl_rms;
			
			//접속url에 따라 서비스url설정
			if(sXadl.indexOf("http://localhost") > -1 || sXadl.indexOf("file://") > -1){
				application.services["svcurl"].url = "http://localhost:8282/";
				application.services["svcpms"].url = svcurl_pms[0];
				application.services["svcrms"].url = svcurl_rms[0];
				
				application.gv_location = "LOCAL";				
			}else if(sXadl.indexOf("dev") > -1){
				application.services["svcurl"].url = "http://dev.nongshim.com/";
				application.services["svcpms"].url = svcurl_pms[1];
				application.services["svcrms"].url = svcurl_rms[1];
				
				application.gv_location = "DEV";				
			}else{
				application.services["svcurl"].url = "http://nx.nongshim.com/";
				application.services["svcpms"].url = svcurl_pms[2];
				application.services["svcrms"].url = svcurl_rms[2];
				
				application.gv_location = "OPR";				
			}
			trace(">>>>> sXadl 		= "+sXadl);
			trace(">>>>> gv_system 	= "+application.gv_system);
			trace(">>>>> gv_location= "+application.gv_location);
			trace(">>>>> svcurl 	= "+application.services["svcurl"].url);
			trace(">>>>> svcpms 	= "+application.services["svcpms"].url);
			trace(">>>>> svcrms 	= "+application.services["svcrms"].url);
		},
		 /**
		 * Application 최초 로딩시 처리되는 함수 
		 * @parma {XaComp} application 
		 * @example
		 * this.application_onload = function(obj:Application, e:nexacro.LoadEventInfo)
		 *	{
		 *	   //초기 application onload setting
		 *	   Iject.appOnload(obj);
		 *	}
         *
		 * @memberOf Iject
		 */
	      appOnload : function(app)
	      {
	            var o = app;
	         	Iject.$.vFrameSet      = o.mainframe.VFrameSet;                                			//VFrameSet
	 			Iject.$.loginFrame     = o.mainframe.VFrameSet.LoginFrame; 				   				//LoginFrame
	 			Iject.$.topFrame       = o.mainframe.VFrameSet.TopFrame;  								//TopFrame	 			
	 			Iject.$.hFrameSet      = o.mainframe.VFrameSet.HFrameSet;                      			//HFrame
	 			Iject.$.leftFrame      = o.mainframe.VFrameSet.HFrameSet.LeftFrame;            			//leftFrame
	 			Iject.$.vFrameSet1     = o.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			//VFrameSet1
	 			Iject.$.mainFrame      = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.MainForm; 			//mainform
	 			Iject.$.mdiFrame       = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiFrame;           //mdi frame	 			
	 			Iject.$.workFrame      = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame;          //WorkForm
	 			
	 			
	 			Iject.$.httpurl        = Iject.defaultSvcUrl();//o.services["svcpms"].url;							  	//trnasaction service url
	 			Iject.$.loginSize      = {width:450,height:290};
	 			Iject.$.mainframeSize  = {width: o.mainframe.width,height: o.mainframe.height};
	 			Iject.$.ExtCommonPath  = (nexacro.Browser =="Runtime" ? system.convertRealPath("%USERAPP%"+"Component/ExtCommonV13.dll") :"");
				
				 if( nexacro.Browser != "Runtime"
				   || (nexacro.Browser == "IE" && nexacro.BrowserVersion > 9) ) {
				     Iject.Html5.setFavicon();  //favicon setting
					 nexacro.loadJSLibraries(["./nexacro14lib/component/IjectJS/ExtApi/jquery-1.10.2.js"]);
				   }
				
	 			Iject.login(o);//로그인처리
	      },
		
		/**
		 * form onload 기본 함수
		 * @public
		 * @param  {XaComp} this(현재폼)
		 * @return
		 * @example
		 * this.form_onload = function(obj:Form, e:nexacro.LoadEventInfo)
		 *	{
		 *		Iject.formOnload(obj);
		 *		
		 *	}
		 * @memberOf Iject
		 */
		formOnload : function(o)
		{
			var pThis = o;
  			//폼 이벤트추가(ctrl + shift + f12)
			pThis.addEventHandler("onkeydown",function(obj,e){	
				if(e.ctrlKey && e.shiftKey && e.keycode == 123){
					Iject.Form.showFormInfo(pThis);
				}
			},  pThis);
			
			//컴포넌트 목록 구하기
			var oComp = Eco.XComp.query(pThis, "typeOf == 'Grid'||typeOf == 'Combo'","");
			
			//컴포넌트별 설정
			for (var i = 0; i < oComp.length; i++){
				Iject.setCompDefault(oComp[i]);
			}
		},
		
		/**
		 * 컴포넌트의 공통속성 설정
		 * @public
		 * @param  {comp} component
		 * @return
		 * @memberOf Iject
		 */
		setCompDefault : function(comp)
		{
			var strType = comp.toString().toUpperCase();
			switch (strType){
				case "[OBJECT GRID]":
					comp.set_nodatatext("검색결과가 없습니다.");
					//comp.set_autoenter("select");
					//comp.set_autofittype("col");
					break;
				case "[OBJECT COMBO]":
					comp.set_displayrowcount(15);
					break;					
// 				case "[OBJECT BUTTON]":
// 					break;

// 				case "[OBJECT EDIT]":
// 					break;
// 				case "[OBJECT MASKEDIT]":
// 					break;
// 				case "[OBJECT TEXTAREA]":
// 					break;
// 				case "[OBJECT CALENDAR]":
// 					break;
// 				case "[OBJECT RADIO]":
// 					break;
// 				case "[OBJECT CHECKBOX]":
// 					break;
// 				case "[OBJECT LISTBOX]":
// 					break;
// 				case "[OBJECT SPIN]":
// 					break;
// 				case "[OBJECT DIV]":
// 					break;
				default:
					break;
			}			
		},

		/**
		 * logout 처리시 실행되는 함수
		 * @param  {XaComp} this(현재폼)
		 * @return
		 * @example
		 * @memberOf Iject
		 */
		login : function(o)
		{
			Iject.set_frameset("login");
			return;
			/*
			if(nexacro.Browser == "Runtime")
			{
				Iject.Runtime.loginR(o);
			}
			else
			{
				Iject.Html5.loginH(o);
			}
			*/
		},

		/**
		 * 로그인 처리후 메인 프레임 값 setting
		 * @param  
		 * @return
		 * @example
		 * Iject.setSeprateFrame()
		 * @memberOf Iject
		 */
		onlogin : function()
		{			
			Iject.$.userid = application.gds_userInfo.getColumn(0,"USER_ID");
			Iject.$.usernm = application.gds_userInfo.getColumn(0,"USER_NM");

			//Iject.$.mainFrame.form.fn_set();  //mainframe argument setting
			//Iject.$.topFrame.form.fn_set();  //topframe argument setting
			
			Iject.set_frameset("onlogin|view|main");
		},

		/**
		 * logout 처리 함수
		 * @param   
		 * @return
		 * @example
		 * Iject.logout();
		 * @memberOf Iject
		 */
		logout : function()
		{
			Iject.set_frameset("login");
			return;
			/*
			if(nexacro.Browser == "Runtime")
			{
				Iject.Runtime.logoutR(); //Runtime
			}
			else
			{
				Iject.Html5.logoutH();   //html5
			}
			*/
		},
		/**
		 * 프레임셋제어
		 * @param   
		 * @return
		 * @example
		 * Iject.set_frameset();
		 * @memberOf Iject
		 */
		set_frameset : function(value)
		{
			var type;
			var types = value.split("|");
			for(var i = 0; i < types.length; i++)
			{
				type = types[i];
				switch(type)
				{
					//vframeset
					
					//로그인 화면 보이기
					case "login" : 
						Iject.$.vFrameSet.set_separatesize("*,0,0,0");
						break;
					//로그인 후 업무영역 보이기
					case "onlogin" : 
						Iject.$.vFrameSet.set_separatesize("0,50,*,0");
						break;
						
					//hframeset
					
					//메뉴화면 전체 보이기
					case "show" : 
						Iject.$.hFrameSet.set_separatesize("270,*");
						break;
					//메뉴화면 숨기기
					case "hide" : 
						Iject.$.hFrameSet.set_separatesize("60,*");
						break;
						
					//vframeset1
					
					//메인화면 보이기
					case "main" : 
						Iject.$.vFrameSet1.set_separatesize("*,0,0");
						break;
					//업무화면 보이기
					case "work" : 
						Iject.$.vFrameSet1.set_separatesize("0,40,*");
						break;
					default : 
						break;
				}
			}
		},
						
		/**
		 * 엑셀 익스포트 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {object} Grid
		 * @param  {string} 파일명
		 * @param  {string} sheet명
		 * @return
		 * @example
		 *  Iject.exportExcel(this,this.grd_list);
		 * @memberOf Iject
		 */
		exportExcel : function(o,oGrid,sFileName,strSheet)
		{

			var pThis = o;
			var dToday = new Date();
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";
			var strType = oGrid.toString().toUpperCase();
			var strSheet = Eco.isEmpty(strSheet) ? "sheet" :strSheet;
            var strExportFileName = Eco.isEmpty(sFileName) ?  dToday.getTime() : (dToday.getTime() + "_" + sFileName);
			var exportObj = new ExcelExportObject();

			exportObj.clear();
			//onsuccess
			exportObj.addEventHandler("onsuccess", function(obj,e){
			}, pThis);

			
			//onerror
			exportObj.addEventHandler("onerror", function(obj,e){
				 trace(" =========== Excel Export onerror event start============");
				 trace(" =========== e.eventid : " + e.eventid + " ============");
				 trace(" =========== e.fromobject : " + e.fromobject + " ============");
				 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
				 trace("=========== e.errorcode : " + e.errorcode + " ============");
				 trace("=========== e.errormsg) : " + e.errormsg + " ============");
			}, pThis);

			exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
			exportObj.set_exportuitype("exportprogress");    // set
			exportObj.set_exporturl(sSvcUrl);
			exportObj.set_exportfilename(strExportFileName);

			if(strType == "[OBJECT GRID]")
			{
				oGrid = oGrid;
				sSheetName = strSheet+"1";
				exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");

			}
			else
			{
				for(var i=0; i<obj.length; i++)
				{
					sSheetName = strSheet+(i+1);
					oGrid = oGrid[i];
					exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
				}
			}

			exportObj.exportData();

		},

		/**
		 * excel import 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {string} sheet명
		 * @param  {object} dataset명
		 * @return N/A
		 * @example
		 * var sSheet = "body=sheet1!A2;";  
		 * var ds = this.ds_out;
	     * Iject.importExcel(this,sSheet,ds);
		 * @memberOf Iject
		 */
		importExcel : function(o,sSheet,ds)
		{

			var pThis = o;
			var dsName = ds.name;
			var ds_importTemp = Iject.Util.isCheckDs(pThis,"ds_importTemp");	
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";			
			var importObj = new nexacro.ExcelImportObject("importExcel",pThis);
			
			 Iject.$["fobj"] = pThis;
			 ds.clearData();		
			 ds_importTemp.copyData(ds);			
			 pThis["ds_import"] = ds;
			 
			importObj.set_importtype(nexacro.ImportTypes.EXCEL);
			
			
			//onsuccess
			importObj.addEventHandler("onsuccess",function(obj,e){
			
				var dsFromData = this["ds_importTemp"];   //엑셀데이타
				var dsToData = this["ds_import"];   //원본
				
				 var arrCol = [];
				
				 for(var i=0; i< dsToData.getColCount();i++)
				{
					 var sToCol =  dsToData.getColID(i);
					 var sFromCol = dsFromData.getColID(i);
					 arrCol[i] =  sToCol + "=" + sFromCol;
				}
				
			    dsToData.clearData();  //원본삭제
				dsFromData.set_enableevent(false);
				for(var i=0; i < dsFromData.getRowCount(); i++)
				{
				    var addRow = dsToData.addRow();
				    dsToData.copyRow(addRow,dsFromData,i,arrCol.join(","));

				}
				dsFromData.set_enableevent(true);
				dsToData.applyChange();
				dsFromData.clear();
			
			},  pThis);
			
			//onerror
			importObj.addEventHandler("onerror", function (obj,e) {
				
		     trace(" =========== Excel Import onerror event start============");
			 trace(" =========== e.eventid : " + e.eventid + " ============");
			 trace(" =========== e.fromobject : " + e.fromobject + " ============");
			 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
			 trace("=========== e.errorcode : " + e.errorcode + " ============");
			 trace("=========== e.errormsg) : " + e.errormsg + " ============");
			 trace("======================   end   =========================");
					
			},pThis);
			
			importObj.set_importurl(sSvcUrl);
            Eco.Logger.debug({message:"#### ExceImport start log ###", stack:true,elapsed: true});
			importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds_importTemp.name+"=outDs]");
		},

		/**
		 * 공통 팝업 modal
		 *@param {XaComp} this(현재폼)
		 *@param {object} arguments
		 *@param {string | function} callback인자값
		 *@return
		 * callback function
		 * @example
		 * var oData ={
         *id  : "singledetail",   //callback id
         *url : "sample::Pattern_01.xfdl",   //url
         *showtitlebar : true, //title bar
         *autoSize  : true,    //autosize
         *resizable    : false,   //resize
         *showtatusbar : false,  //statusbar
         *openalign    : "center middle",  //align
         *args :{'arg1':'55555',
         *        'arg2':'333333'
         *      }          // argument
         * };
         * 
		 * //팝업 테스트
		 *Iject.showModal(this,oData,function(){
         *
		 * var pThis= this.fobj;
    	 *
	     * trace(" pThis.name : " + pThis.name);
	     * });
		 * @memberOf Iject
		 */
		showModal : function(o,oData,fncCallback)
		{
			var pThis = o;
			var id = oData.id + "_" + Math.round(Math.random() * 1000000);
			var background = Eco.isEmpty(oData.background) ? "" : oData.background;
			if(Eco.isEmpty(oData)){
				Eco.Logger.error({message: "unKnown calback argument!!!", elapsed: true});
				return;
			}

			var cf = new ChildFrame;
			cf.init(id);
			cf.set_formurl(oData.url);
			cf.set_showtitlebar(oData.showtitlebar);
			cf.set_layered(false);
			cf.set_autosize(oData.autosize);
			cf.set_resizable(oData.resizable);
			cf.set_showstatusbar(oData.showstatusbar);
			cf.set_openalign(oData.openalign); //화면의 중앙에 위치
			cf.style.set_background(background);   //backround color
			cf.set_dragmovetype("none");
			
			//cf.arguments = {};
			//cf.arguments[pThis.name] = pThis.name;
			//cf.arguments["fObj"] = pThis;
			//cf.arguments["popup_oArg"] = oData.args;
			//cf.arguments["p_callback"] = fncCallback;
			//pThis.variant  = "";
			//var popWin = new ChildFrame;

			cf.showModal(id, pThis.getOwnerFrame() ,oData.args,  pThis ,function(svcid,variant){
				var p_variant = Eco.isEmpty(this.variant) ? variant : this.variant;
				this.variant = "";
				fncCallback.call(this, svcid, p_variant);
			});
		},

		/**
		 * 공통 팝업 close
		 * @param {XaComp} this(현재FORM)
		 * @param {string|object|array} arguments
		 * @return
		 * @example
		 *  //문자열
		 *  var str = "testArgq11111111111111111111";      
	     *   Iject.close(this,str);
	     *   //array
	     *   var arr = ["array","testvalue1", "testvalue2", "testvalue3"];
         *   Iject.close(this,arr);
         *  //json 문자열   
         *  var objJson = {key1:"1111",key2:"2222",key3:"3333"};    
    	 *	Iject.close(this,objJson);
		 * @memberOf Iject
		 */
		close : function (o,variant)
		{
			var pThis  = o;

			if(pThis.opener && typeof variant != "string")
			{
				variant = Eco.isEmpty(variant) ? "" : variant;
				pThis.opener.variant = variant;
				pThis.close();
			}
			else
			{
				pThis.close(variant);
			}
		},

		/**
		 * 공통 팝업 open
		 * @param {XaComp} this(현재폼)
		 * @param {string} id
		 * @param {string} url
		 * @param {object} arguments
		 * @param {string} callback명
		 * @return
		 * @example
		 *   Iject.open(this,"pOpen","aa::aa.xfdl",{arg1:"aaa},"fn_popCallbac");
		 * @memberOf Iject
		 */
		open : function(o,sId,url,oArg,fnCallback)
		{

			var bSucc;
			var nScreenWidth;
			var pThis = o;
			var nScreenHeight;
			var arrScreenSize;
			var nLeft   =  (application.mainframe.width / 2) - Math.round(pThis.width / 2);
			var nTop    = (application.mainframe.height / 2) - Math.round(pThis.height / 2) ;

			var cf= pThis.getOwnerFrame();
			var bSucc = application.open(sId ,url,cf, oArg, "showtitlebar=true showstatusbar=false",nLeft, nTop,null,null,pThis);

			if(!bSucc) 	Eco.Logger.error({message: "modaless open error", elapsed: true});
		},
		
		/**
		 * alert 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @param {array}  치환문자배열
		 * @return
		 * @example
		 * Iject.alert("처리되었습니다.","완료");
		 * @memberOf Iject
		 */
		alert : function(sMsg, sCaption, aReplace)
		{
			var pCaption = Eco.isEmpty(sCaption) ? "알림" : sCaption;
			
			application.alert(Iject.getCommonMsg(sMsg, aReplace), pCaption);
		},

		/**
		 * confirm 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @param {array}  치환문자배열
		 * @return {boolen} true/false
		 * @example
		 * var isConfirm = Iject.confirm("처리하시겠습니까?","캡션");
		 *    if(isConfirm) alert("정상");
		 * @memberOf Iject
		 */
		confirm : function(sMsg,sCaption, aReplace)
		{
			var pCaption = Eco.isEmpty(sCaption) ? "확인" : sCaption;
						
			return application.confirm(Iject.getCommonMsg(sMsg, aReplace), pCaption);
		},
		
		/**
		 * Modal Popup alert 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @param {array}  치환문자배열
		 * @return
		 * @example
		 * Iject.alertP("처리되었습니다.","완료");
		 * @memberOf Iject
		 */
		alertP : function(o, sMsg, sCaption, aReplace, fncCallback)
		{
			var pCaption = Eco.isEmpty(sCaption) ? "알림" : sCaption;
			
			var oData = {msg:Iject.getCommonMsg(sMsg, aReplace), caption:pCaption, type:"alert", callback:fncCallback};
			
			Iject.messageP(o, oData);
		},
		
		/**
		 * Modal Popup confirm 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @param {array}  치환문자배열
		 * @return
		 * @example
		 * Iject.confirmP("처리되었습니다.","완료");
		 * @memberOf Iject
		 */		
		confirmP : function(o, sMsg, sCaption, aReplace, fncCallback)
		{
			var pCaption = Eco.isEmpty(sCaption) ? "알림" : sCaption;
			
			var oData = {msg:Iject.getCommonMsg(sMsg, aReplace), caption:pCaption, type:"confirm", callback:fncCallback};
			
			Iject.messageP(o, oData);
		},
		
		/**
		 * 공통메세지 팝업 오픈
		 * @param {object} oData
		 * @return
		 * @memberOf Iject
		 */					
		messageP : function(o, oParam)
		{
			var pThis = o;
			var fncCallback = oParam.callback;
			
			var oData ={
				id  : "common_message",             //callback id
				url : "Comm::comm_message.xfdl",   //url
				showtitlebar : false,     //title bar
				autosize  : true,       //autosize
				resizable    : false,       //resize
				showtatusbar : false,     //statusbar
				openalign    : "center middle",  //align
				args :  oParam  
			};
			Iject.showModal(pThis, oData, function(svcid, variant){			
				oParam.callback.call(pThis, svcid, variant);
			});
		},
				
		/**
		 * 공통메세지 가져오기
		 * @param {string} message
		 * @param {array}  치환문자배열
		 * @return
		 * @example
		 * Iject.getCommonMsg("에러코드{0},에러메세지{1}", ["900", "Error"])
		 * @memberOf Iject
		 */		
		getCommonMsg : function(sMsg, aReplace)
		{
			var sMsgNm = application.gds_message.lookup("MSG_CD", sMsg, "MSG_NM");
			if(Eco.isEmpty(sMsgNm)) sMsgNm = sMsg;
			if(Eco.isEmpty(aReplace)) return sMsgNm;
			return Iject.Util.convertMessage(sMsgNm, aReplace);	
		},
				
		/**
		 * 	developer log message print
		 * @param {XaComp} this(현재Form)
		 * @param  {object} arguments  
		 * @return 
		 * @example
		 *   
		 *    Iject.log({name : "fn_function",msg:{"logmessage":"aaaaaaaaaaaaaaaa"}});   
		 *    or
		 *    Iject.log({name : "fn_function",msg:"logmessage",info:"error"});   //에러일경우
		 * 
		 * @memberOf Iject
		 */
		log : function(oData)
		{
		   if(typeof arguments[0] != "object") return;
		 
		    var pArguments =  oData || {};
			var sName      = oData.name || "";
			var sMsg       = oData.msg || "";
			var sErrror    = oData.info || "info";
			var nDate = Eco.date.getMaskFormatString(new Date(), "yyyy년 MM월 dd일 tt hh시 mm분 ss초");
			var dataString, levelString;
		    var resultMessage = "\n";	
			    resultMessage +=  "========================= LOG PRINT("+sErrror+") ==============";
			    resultMessage +=  "\n  (TimeStamp : " + nDate + ")";
			    resultMessage +=  "\n==============================================================";
			    resultMessage += "\n  [Name]      : " + sName;   
			    resultMessage += "\n  [Browser]   : " + nexacro.Browser;   
		        resultMessage += "\n  [Arguments] : " + [].join.call(arguments.callee.caller.arguments);    //넘어온 아규먼트 	
		    
		    if(!Eco.isEmpty(sMsg))
		    {
		         resultMessage +=  "\n === CURRENT MESSAGE ===";
		         if(typeof sMsg == "object")
		         {
		            for(key in sMsg)
					{
				    	resultMessage += "\n  ["+key+"] : " +sMsg[key] +" ";    //넘어온 아규먼트
					}
		         }
		         else
		         {
		            resultMessage += "\n  "+sMsg + " ";    //넘어온 아규먼트
		        }
		      
		    }
		    resultMessage  += "\n===================== COMPLETE LOG ======================\n";  

		    if(sErrror == "error")
		    {
				  var e = new Error(resultMessage);
					  throw e;		
		    }
		    else
		    {
		      application.trace(resultMessage);
		    }
		   
		},


		 /**
		 * 공통 트랜잭션 함수
		 * @param {XaComp} this(현재FORM)
		 * @param {object} arguments  
		 * @param {string | function} callback명
		 * @return N/A
		 * @example
		 * var oDatas =  {
		 *	  sController : "loginCheck.do",
		 *	  inds :["dsin=dsin"],
		 *	  outds :[
		 *		 "gds_userInfo=gds_userInfo",
		 *		 "gds_message=gds_message",
		 *		 "gds_config=gds_userInfo"
		 *		 ],
		 *	  args  : [
		 *		  "V_USER_ID=chulsoo",
		 *		  "V_USER_PWD=test123"
		 *	  ],
		 *	  bAsync : true, // 비동기여부 (true : async  false: sync)
		 *	  nDataType : 0, // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
		 *	  bCompress :false,	
		 *	};
		 *		
		 *   Iject.transaction(this,oDatas,function(){
		 *	 //nexacro request callback function
		 *
		 *	});
		 * @memberOf Iject
		 */
		transaction : function(o,oData,callback)
		{			
			if(Eco.isEmpty(oData)) return;
			var pThis = o;
			var strHttpUrl         =  Eco.isEmpty(oData.svcurl) ? Iject.defaultSvcUrl() : oData.svcurl;//application.services["svcurl"].url;
			var oSvc 	           =
			    {
					oForm     : pThis,
					svcid      :oData.svcid, //service id
					callback   : callback
		        };
			 
			 //callback명
		    var sController        = Eco.isEmpty(oData.controller) ? "" : oData.controller;	//controller id
		    var sURL               = strHttpUrl + sController;       							//service url
			var inputDataset       = Eco.isEmpty(oData.inds)        ? "" :oData.inds.join(" ");   //input dataset
		    var outputDataset      = Eco.isEmpty(oData.outds)       ? "" :oData.outds.join(" ");  //output dataset
		    var strArgument        = Eco.isEmpty(oData.args)        ? "" : oData.args.join(" ");  // argument  변환
		    var bAsync             = Eco.isEmpty(oData.async)      ? true : oData.async;        // 비동기여부 (true : async  false: sync)
		    var nDataType          = Eco.isEmpty(oData.dataType)   ?  false : oData.dataType;
		    var bCompress          = Eco.isEmpty(oData.compress)   ? false : oData.compress; 		
   		    
			
   		    if(!Eco.isFunction(pThis.transactionCallback))
   		    {
   		         //callback 처리
				nexacro.Form.prototype.transactionCallback = function(oSvc,nErrorcode,strErrorMsg)
				{
					var strSvcId    = oSvc.svcid;       // service id
					var svcCallback = oSvc.callback; //콜벡명

					if(Eco.isEmpty(svcCallback)) return;

					//check callback function
					if(typeof svcCallback == "function" )
					{				
						svcCallback.call(this,strSvcId,nErrorcode,strErrorMsg);						
					}
					//callback in string 일경우
					else if(typeof svcCallback == "string")
					{
						if(!Eco.isFunction(this[svcCallback]))return;
						this[svcCallback].call(this,strSvcId,nErrorcode,strErrorMsg);
					}
					else
					{
						//Eco.Logger.error({message: "unKnown calback argument!!!", elapsed: true});
					}
				};
   		    }
   		    //Eco.Logger.debug({message:"#### transaction  start  ###", stack:true, elapsed: true});
   		    trace(">>> sURL = " + sURL);
			pThis.transaction(oSvc, sURL,inputDataset, outputDataset,strArgument,"transactionCallback",bAsync);

		},
		
		defaultSvcUrl : function()
		{
			var svc = "";
			var sys = application.gv_system;
			if(sys == "PMS")
			{
				svc = application.services["svcpms"].url;
			}
			else if(sys == "RMS")
			{
				svc = application.services["svcrms"].url;
			}
			return svc;
		}
				
	});
	
}