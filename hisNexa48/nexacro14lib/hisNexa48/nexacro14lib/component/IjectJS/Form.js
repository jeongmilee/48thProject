/**
 * @fileoverview 넥사크로  공통 Library Form js
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Form")) {

    /**
     * @namespace
     * @name Iject.Form
     * @author
     * @memberof! Iject.Form
     */
    JsNamespace.declare("Iject.Form", {
		showFormInfo : function(pThis)
		{
			var oData ={
				id  : "_form_info_popup",             //callback id
				url : "Comm::comm_forminfo.xfdl",   //url
				showtitlebar : true,     //title bar
				autosize  : true,       //autosize
				resizable    : true,       //resize
				showtatusbar : false,     //statusbar
				openalign    : "center middle",  //align
				args :  {oForm:pThis}    
			};
			
			//Modal Popup 오픈			//callback
			Iject.showModal(pThis, oData, function(svcid, variant){

			});
		},
        /**
         * 공통코드 처리
         * @param {XaComp} this(현재Form)
         * @return
         * @example
         *
         * @memberOf Iject.Form
         */
        setCommCode : function(o, codeparam, dsObj)
        {
			var pThis = o;
			var param = codeparam;
            if(Eco.isEmpty(dsObj)) dsObj = application.gds_commcode; 
			dsObj.set_enableevent(false);
						
			var group, dsInner, dsInnerNm, datacolumn, selecttype, bindcolumn, edittype, align, sortcolumn, sorttype, filterstring, direction;
			var oComponent;
			for(var i = 0; i < param.length; i++)
			{
				group 		= param[i].group;
				oComponent  = param[i].component;
				dsInnerNm 	= param[i].dataset;
				
				codecolumn  = param[i].codecolumn==undefined ? Iject.$.COMMCD_CODE : param[i].codecolumn;
				datacolumn  = param[i].datacolumn==undefined ? Iject.$.COMMCD_DATA : param[i].datacolumn;
				selecttype  = param[i].selecttype==undefined ? "" : param[i].selecttype;

				bindcolumn  = param[i].bindcolumn;
				edittype	= param[i].edittype;
				align 		= param[i].align==undefined?"center":param[i].align;

				sortcolumn	= param[i].sortcolumn;
				sorttype	= param[i].sorttype==undefined ? "asc" : param[i].sorttype;
				filterstring= param[i].filterstring==undefined ? "" : param[i].filterstring;
				direction   = param[i].r_direction==undefined ? "horizontal" : param[i].direction;		
				
				//데이타셋 생성
				if(!Eco.isEmpty(group))
				{
					dsInner = Iject.Util.isCheckDs(pThis, dsInnerNm);
				
					//값복사 시작
					if (Eco.isEmpty(filterstring))
					{
						dsObj.filter(Iject.$.COMMCD_GROUP+".toString() == '"+group+"'");
					}
					else
					{
						dsObj.filter(Iject.$.COMMCD_GROUP+".toString() == '"+group+"' && "+filterstring);
					}
					var nRowCnt = dsInner.copyData(dsObj, true);
				}
				//폼 내의 데이타셋 사용
				else
				{
					dsInner = Iject.Util.getDataset(pThis, dsInnerNm);
				}
				
				//정렬
				if (!Eco.isEmpty(sortcolumn))
				{
					if (!Eco.isEmpty(sorttype))
					{
						sorttype = "asc";
					}
					dsInner.keystring = "S:"+(sorttype=="asc"?"+":"-")+sortcolumn;
					dsInner.updateSortGroup();
				}
				
				//초기값 설정		
				if (!Eco.isEmpty(selecttype))
				{
					var sDummyName = Eco.decode(selecttype, "A", "전체", "S", "선택", "", "");
					
					dsInner.insertRow(0);
					dsInner.setColumn(0, codecolumn, "");
					dsInner.setColumn(0, datacolumn, sDummyName);
				}
				
				//Combo
				if (oComponent instanceof Combo)
				{
					oComponent.set_innerdataset(dsInner);
					oComponent.set_codecolumn(codecolumn);
					oComponent.set_datacolumn(datacolumn);
					oComponent.set_index(0);
				}
				//Radio
				else if (oComponent instanceof Radio)
				{
					oComponent.set_innerdataset(dsInner);
					oComponent.set_codecolumn(codecolumn);
					oComponent.set_datacolumn(datacolumn);
					oComponent.set_index(0);
					
					if (direction == "horizontal")   oComponent.set_columncount(dsInner.rowcount);			
					else if(direction == "vertical") oComponent.set_rowcount(dsInner.rowcount); 
				}
				else if (oComponent instanceof Grid)
				{
					var nCellIdx = oComponent.getBindCellIndex( "body", bindcolumn);

					if (Eco.isEmpty(bindcolumn) || nCellIdx == -1)
					{
						continue;
					}
					//실제로 해당되는 컬럼 display, edit type 변경 및 Dataset 바인딩
					oComponent.setCellProperty("body", nCellIdx, "displaytype", "combo");
					
					//edittype = false인경우에만 edittype = none
					if (Eco.isEmpty(edittype) || edittype == "true")
					{					
						oComponent.setCellProperty("body", nCellIdx, "edittype", "combo");
					}
					oComponent.setCellProperty("body", nCellIdx, "combodataset", dsInner.name);
					oComponent.setCellProperty("body", nCellIdx, "combocodecol", codecolumn);
					oComponent.setCellProperty("body", nCellIdx, "combodatacol", datacolumn);
					oComponent.setCellProperty("body", nCellIdx, "align", align);
				}
			}
			
			dsObj.filter("");
			dsObj.set_enableevent(true);
        },
        /**
         * 컴포넌트 생성
         * @param {component} pComp - 컨테이너 컴포넌트
         * @param {string} xComp - 컴포넌트 유형
         * @param {string} compnm - 컴포넌트ID
         * @param {int} nLeft - 컴포넌트 left
         * @param {int} nTop - 컴포넌트 top
         * @param {int} nWidth - 컴포넌트 width
         * @param {int} nHeight - 컴포넌트 height
         * @param {int} nRight - 컴포넌트 right
         * @param {int} nBottom - 컴포넌트 bottom         
         * @return
         * @example
         *
         * @memberOf Iject.Form
         */
        getXComp : function(pComp, xComp, compnm, nLeft, nTop, nWidth, nHeight, nRight, nBottom)
		{
			var comp = pComp.components[compnm];
			if(Eco.isEmpty(comp))
			{
				switch(xComp)
				{
					case "Div":
						comp = new Div(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
					case "Static":
						comp = new Static(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
					case "Button":
						comp = new Button(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
					case "Tab":
						comp = new Tab(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
					case "Tabpage":
						comp = new Tabpage(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
					case "Combo":
						comp = new Combo(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;		
					case "Radio":
						comp = new Radio(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;	
					case "Checkbox":
						comp = new Checkbox(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;	
					case "Grid":
						comp = new Grid(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;	
					case "ImageViewer":
						comp = new ImageViewer(compnm, "absolute", nLeft, nTop, nWidth, nHeight, nRight, nBottom);
						break;
				}
				pComp.addChild(compnm, comp);
				comp.show();
			}
			return comp;
		}


    });
}