
if ( !JsNamespace.exist("Iject.Grid.CopyPaste") )
{

	if (nexacro.Browser == "Runtime" || nexacro.Browser == "IE" ) {
		JsNamespace.declare("Iject.Grid.CopyPaste", {
				/**
				 * constructor
				 * @param {form} scope form object
				 * @param {boolean=} keepData 복사된 데이터 유지여부(default: false)
				 * @param {boolean=} useBlink blink 사용여부(default: false)
				 * @class Util
				 * @classdesc Uitlity class.
				 * @constructor Iject.Grid.CopyPaste				 
				*/
				init: function(scope, keepData, useBlink)
				{
					this.scope = scope;
					this.colSeperator = "	";
					
					this.targetGrid = null; 
					
					var tempBlinkColor = ["#66CC88", "#66CC66", "#66CC44", "#66CC22", "#66CC00"];
					var tempBlinkColor2 = tempBlinkColor.slice(0,4);
					tempBlinkColor2 = tempBlinkColor2.reverse();
					this.blinkColor = tempBlinkColor.concat(tempBlinkColor2);
					//this.blinkTime = [10,10,10,20,100,20,10,10,10];
                    this.blinkTime = [20,20,20,20,120,20,20,20,20];					

					
					//trace("this.blinkColor="+this.blinkColor);
					
					
					if(Eco.isEmpty(keepData)) {
						this.keepData = true;
					} else {
						this.keepData = keepData;
					}

					
					if(Eco.isEmpty(useBlink)) {
						this.useBlink = false;
					} else {
						this.useBlink = useBlink;
					}
					
					
					this.scope.addEventHandler("ontimer", this.blinkTimerHandler(this), this.scope);
										
					return this;
					
				},

				clearClipboard: function()
				{
					system.clearClipboard();
				},
				
				
				/*
				 * 대상 그리드 추가.
				 * @param {grid} grid grid component
				 * @param {function=} copyCallback 복사 후 호출될 함수
				 * @param {function=} pasteCallback 붙여넣기 후 호출될 함수
				 */						
				addGrid: function(grid, copyCallback, pasteCallback)
				{
					if (Eco.isEmpty(grid) || !Eco.isXComponent(grid) || Eco.XComp.typeOf(grid) != "Grid" )
					{
						Eco.Logger.error("first argument named grid is type of Grid.");
						return;
					}		
					
					//area인 경우에만 가능
					if(grid.selecttype != "area") grid.set_selecttype("area");
					
					grid.addEventHandler("onkeydown", this.copyGridCellData(this), this.scope);
					grid.selectBackgroundHandler = [];
					
					if(!Eco.isEmpty(copyCallback) && (typeof(copyCallback) == "function")) {
						grid["copyCallback"] = copyCallback;
					}
					
					if(!Eco.isEmpty(pasteCallback) && (typeof(pasteCallback) == "function")) {
						grid["pasteCallback"] = pasteCallback;
					}
				},
				
		
					
				/**
				 * copy & paste 처리
				 * @param {object} pThis Iject.Grid.CopyPaste
				 */
				copyGridCellData: function(pThis)
				{
					//obj grid 
					//e key event object.
					return function(obj, e) {
						var keycode = e.keycode;

						if(e.ctrlKey && !e.shiftKey && !e.altKey){
							if(keycode == 67){
								var startrow = nexacro.toNumber(obj.selectstartrow),
									endrow   = nexacro.toNumber(obj.selectendrow),
									startcol = nexacro.toNumber(obj.selectstartcol),
									endcol   = nexacro.toNumber(obj.selectendcol);
								
									var copyData = "";
									var colSeperator = pThis.colSeperator;
									
									var checkIndex = {};
									
									obj.selectBackgroundHandler = [];
									
									pThis.targetGrid = null;
																	
									for (var i = startrow; i <= endrow; i++) {
										for (var j = startcol; j <= endcol; j++) {

											if(!checkIndex[j]) {
												pThis.setSelectBgInfo(obj, j); 
												
												checkIndex[j] = 1;
											}
											
											var value = obj.getCellValue(i,j);

											if(!Eco.isEmpty(value) && value != "undefined") //"undefined" <--- bug ???
											{
												if (j < obj.selectendcol) {
													copyData += obj.getCellValue(i,j) + colSeperator;
												} else {
													copyData += obj.getCellValue(i,j);
												}
											}
										}
										
										if (i < obj.selectendrow) {
												copyData += "\r\n";
										}
									}
									
									copyData += "\r\n";
										
									system.clearClipboard();
									system.setClipboard("CF_TEXT",copyData);
									
									pThis.targetGrid = obj;
									
									if(pThis.useBlink && copyData.length > 0) {
										pThis.scope.setTimer(1000, 50);
									}
										
									var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
									pThis.notify("copy", obj, e, areaInfo);									
								
							} else if(keycode == 86) {
								var copyData = system.getClipboard("CF_TEXT");
								copyData = new String(copyData);
								var colSeperator = pThis.colSeperator;
								var rowData = copyData.split("\r\n");
								var rowDataCount = rowData.length - 1;
								
								if(rowDataCount < 1) {
									e.stopPropagation();
									return;
								}
							
								obj.set_enableevent(false);
								obj.set_enableredraw(false); 
								
								//var datasetName = obj.binddataset;
								//var ds = Eco.XComp.lookup(pThis.scope, datasetName);
								var ds = obj.getBindDataset();
								ds.set_enableevent(false); 
								
								var grdCellCount = obj.getCellCount("body");
								var rowCount = ds.getRowCount();
								var startrow = nexacro.toNumber(obj.selectstartrow),
									endrow   = nexacro.toNumber(obj.selectendrow),
									startcol = nexacro.toNumber(obj.selectstartcol),
									endcol = 0;
								
								var currRow = startrow;
								var cellIndex = startcol;
								var maxColumnCount = 0;
								var checkIndex = {};	
								//check current cell editType 
								for (var i = 0; i < rowDataCount; i++) {
									if(rowCount <= currRow)
									{
										ds.addRow();
									}
									
									var columnData = rowData[i].split(colSeperator);
									var columnLoopCount = cellIndex + columnData.length;
									
									
									if(columnLoopCount > grdCellCount) {
										columnLoopCount = grdCellCount;
									}
									
									if(maxColumnCount < columnLoopCount) {
										maxColumnCount = columnLoopCount;
									}
									
									var k = 0;
									for(var j = cellIndex; j < columnLoopCount; j++) {
										if(!checkIndex[j]) {
											pThis.setSelectBgInfo(obj, j);
											
											checkIndex[j] = 1;
										}	
																			
										var colid = obj.getCellProperty("body", j, "text").substr(5);
										var tempValue = columnData[k];
										if(!Eco.isEmpty(tempValue) && tempValue != "undefined") //"undefined" <--- bug ???
										{
											ds.setColumn(currRow, colid, tempValue);
										}
										
										k++;									
									}
									
									currRow++;
								}									
									
								
								ds.rowposition = currRow;	
								
								endrow = endrow + rowDataCount - 1;
								endcol = maxColumnCount - 1;
								
								
								if(!pThis.keepData) {
									pThis.clearClipboard();
								}
																
								obj.set_enableredraw(true);
								obj.set_enableevent(true);
								ds.set_enableevent(true); 
								
								obj.selectArea(startrow, startcol, endrow, endcol);
								
								
								pThis.targetGrid = obj;
								
								if(pThis.useBlink) {
									pThis.scope.setTimer(1000, 50);
								}										
								
								var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
								pThis.notify("paste", obj, e, areaInfo);
																
								//grid enableredraw가 false일 경우 
								//event 전파과정에서 error발생을 막기위한 처리.2015.02.25 버전.
								e.stopPropagation();
									
							}			
						}
					}
				},
				
				notify: function(type, grid, e, areaInfo)
				{
					if(type == "copy") {
						if(grid["copyCallback"]) {
							grid["copyCallback"](grid, e, areaInfo);
						}
					} else if(type == "paste") {
						if(grid["pasteCallback"]) {
							grid["pasteCallback"](grid, e, areaInfo);
						}
					}
				},				
				
				setSelectBgInfo: function(grid, cellIndex)
				{
					var bgHandler = grid.selectBackgroundHandler;
					
					var type = "cell";

					//  nexacro.Style_background
					var selectBgValue = grid.getCellProperty("Body", cellIndex, "selectbackground");
					
					if(Eco.isEmpty(selectBgValue)) {
						type = "body";
						
						//nexacro.Style_value
						selectBgValue = this.getBandCurrentStyle(grid, "body", "selectbackground");
						selectBgValue = selectBgValue.toString();
						
					}
					
					selectBackground = this.getStyleBackground(selectBgValue);
					var handler = this.getSelectBackgroundHandler(type, grid, cellIndex);
					
					
					bgHandler.push({cellIndex:cellIndex, selectBackground: selectBackground, handler:handler});
				},				
				
				
				getSelectBackgroundHandler: function(type, grid, cellIndex)
				{
					if(type == "cell") {
						return function(selectBg) {
							var value = selectBg.toString();
							grid.setCellProperty( "Body", cellIndex, "selectbackground", value);
						};
						
					} else if(type == "body") {
						return function(selectBg) {
							var value = selectBg.toString();
							grid.setBandProperty( "Body", "selectbackground", value);
						};					
					}

				},				
				
				
				/*
				 * style background 객체 반환
				 */
				getStyleBackground: function(value)	
				{
					var styleBackground = new nexacro.Style_background();
					if(typeof(value) == "object") {
						styleBackground = value.clone();
					
					} else if(typeof(value) == "string") {
						styleBackground._setValue(value);
					}
					
					return styleBackground;
				},
				
				getBandCurrentStyle: function(grid, band, propName)	
				{
					var bandObj = grid[band];

					if(Eco.isEmpty(bandObj)) { 
						return "";
					}
					
					var value = bandObj["style"][propName];
					
					if(Eco.isEmpty(value)) {
						var ref_finder = bandObj.bandctrl._ref_css_finder;
						
						if(!ref_finder["normal"]){
							return null;
							
						} else if(ref_finder["normal"][propName]){
							return ref_finder["normal"][propName];
							
						} else {
							return null;
							
						}			
						
					}
						
					return value;		
				},				
				
				
				blinkTimerHandler: function(pThis)
				{
					return function(obj, e) {
						var timerid = e.timerid;
						obj.killTimer(timerid);
						var remainder = timerid%1000;
						//trace("timerid="+timerid + ", remainder="+remainder);
						
						if(remainder < 9) {
							pThis.blinkSelectBg(pThis.blinkColor[remainder]);
							pThis.scope.setTimer(++timerid, pThis.blinkTime[remainder]);
							
						} else {
							pThis.blinkSelectBg(null);
							pThis.initBlinkData();
						}
						
					}
				
				},
				
				initBlinkData: function()
				{
					var grid   = this.targetGrid;
					grid.selectBackgroundHandler = [];
					grid.targetGrid = null;
				},				
				
				blinkSelectBg: function(color)
				{
					var grid   = this.targetGrid;
					var bgHandler = grid.selectBackgroundHandler;
					var len = bgHandler.length;

					var item,
					    handler, 
					    selectBackground,
					    cloneBg;
					    
					for(var i = 0; i < len; i++) {
						item = bgHandler[i];
						selectBackground = item["selectBackground"];
						handler = item["handler"];
						
						if(color === null) {
							cloneBg = selectBackground;
						} else {
							cloneBg = selectBackground.clone();
							cloneBg.set_color(color);
						}
						
						handler(cloneBg);
					}
				
				}				
				
			}); // end of 'JsNamespace.declare("Iject.Grid.CopyPaste",'
		
	} //end of if (nexacro.Browser == "Runtime" && nexacro.Browser=="IE" ) 
	else 
	{
		JsNamespace.declare("Iject.Grid.CopyPaste", {
				/**
				 * constructor
				 * @param {form} scope form object
				 * @param {boolean=} keepData 복사된 데이터 유지여부(default: false)
				 * @param {boolean=} useBlink blink 사용여부(default: false)
				 * @class Util
				 * @classdesc Uitlity class.
				 * @constructor Iject.Grid.CopyPaste				 
				*/
				initialize: function(scope, keepData, useBlink)
				{
					this.scope = scope;
					this.colSeperator = "	";
					
					this.targetGrid  = undefined; 
					this.targetEvent = undefined;
					
					var tempBlinkColor = ["#66CC88", "#66CC66", "#66CC44", "#66CC22", "#66CC00"];
					var tempBlinkColor2 = tempBlinkColor.slice(0,4);
					tempBlinkColor2 = tempBlinkColor2.reverse();
					this.blinkColor = tempBlinkColor.concat(tempBlinkColor2);
					//this.blinkTime = [10,10,10,20,100,20,10,10,10];
                    this.blinkTime = [20,20,20,20,120,20,20,20,20];					
					
					//trace("this.blinkColor="+this.blinkColor);
					
					
					if(Eco.isEmpty(keepData)) {
						this.keepData = false;
					} else {
						this.keepData = keepData;
					}

					
					if(Eco.isEmpty(useBlink)) {
						this.useBlink = false;
					} else {
						this.useBlink = useBlink;
					}
					
					
					this.scope.addEventHandler("ontimer", this.blinkTimerHandler(this), this.scope);
										
					return this;
				},

				
				_createTextarea: function(innerText)
				{
					  var ta = document.createElement('textarea');
					  ta.style.position = 'absolute';
					  ta.style.left = '-1000px';
					  ta.style.top = document.body.scrollTop + 'px';
					  ta.value = innerText;
					  document.body.appendChild(ta);
					  ta.select();
					  
					  return ta;
				},


				pasteData: function(clipText)
				{
					var pThis = this;
					var obj = pThis.targetGrid;
					var e = pThis.targetEvent;
					
					obj.set_enableevent(false);
					obj.set_enableredraw(false); 
					
					//var datasetName = obj.binddataset;
					//var ds = Eco.XComp.lookup(pThis.scope, datasetName);
					var ds = obj.getBindDataset();
					ds.set_enableevent(false); 
					
					var grdCellCount = obj.getCellCount("body");
					var rowCount = ds.getRowCount();
					var startrow = nexacro.toNumber(obj.selectstartrow),
						endrow   = nexacro.toNumber(obj.selectendrow),
						startcol = nexacro.toNumber(obj.selectstartcol),
						endcol   = nexacro.toNumber(obj.selectendcol);
						
					
					var currRow = startrow;
					var cellIndex = startcol;
					
					copyData = clipText;
					var seperator = pThis.colSeperator;
					
					
					var rowData = copyData.split(/[\n\f\r]/); 
					var rowDataCount = rowData.length - 1;
					var checkIndex = {};	

					for (var i = 0; i < rowDataCount; i++) {

						if(rowCount <= currRow)
						{
							ds.addRow();
						}
						
						var columnData = rowData[i].split(seperator);
						var columnLoopCount = cellIndex + columnData.length;
						
						if(columnLoopCount > grdCellCount) {
							columnLoopCount = grdCellCount;
						}
						
						var k = 0;
						for(var j = cellIndex; j < columnLoopCount; j++) {
							if(!checkIndex[j]) {
								pThis.setSelectBgInfo(obj, j);
								
								checkIndex[j] = 1;
							}	
																
							var colid = obj.getCellProperty("body", j, "text").substr(5);
							var tempValue = columnData[k];
							if(!Eco.isEmpty(tempValue) && tempValue != "undefined") //"undefined" <--- bug ???
							{
								ds.setColumn(currRow, colid, tempValue);
							}
							
							k++;									
						}
						
						currRow++;
					}									
						
	
					ds.rowposition = currRow;	
					
					endrow = endrow + rowDataCount - 1;
					endcol = columnLoopCount - 1;								
					
					if(!pThis.keepData) {
						pThis.clearClipboard();
					}
													
					obj.set_enableredraw(true);
					obj.set_enableevent(true);
					ds.set_enableevent(true); 
					
					obj.selectArea(startrow, startcol, endrow, endcol);
					
					
					if(pThis.useBlink) {
						pThis.scope.setTimer(1000, 50);
					}										
					
					var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
					pThis.notify("paste", obj, e, areaInfo);
													
					pThis.targetEvent = undefined;			
				},


				clearClipboard: function()
				{

				},
				
				/*
				 * 대상 그리드 추가.
				 * @param {grid} grid grid component
				 * @param {function=} copyCallback 복사 후 호출될 함수
				 * @param {function=} pasteCallback 붙여넣기 후 호출될 함수
				 */				
				addGrid: function(grid, copyCallback, pasteCallback)
				{
					if (Eco.isEmpty(grid) || !Eco.isXComponent(grid) || Eco.XComp.typeOf(grid) != "Grid" )
					{
						Eco.Logger.error("first argument named grid is type of Grid.");
						return;
					}		
					
					grid.addEventHandler("onkeydown", this.copyGridCellData(this), this.scope);
					grid.selectBackgroundHandler = [];
					
					if(!Eco.isEmpty(copyCallback) && (typeof(copyCallback) == "function")) {
						grid["copyCallback"] = copyCallback;
					}
					
					if(!Eco.isEmpty(pasteCallback) && (typeof(pasteCallback) == "function")) {
						grid["pasteCallback"] = pasteCallback;
					}
				},
				
				
				
					
				/**
				 * copy & paste 처리
				 * @param {object} pThis Iject.Grid.CopyPaste
				 */
				copyGridCellData: function(pThis)
				{
					//obj grid 
					//e key event object.
					return function(obj, e) {
						var keycode = e.keycode;

						if(e.ctrlKey && !e.shiftKey && !e.altKey){
							if(keycode == 67){
								var startrow = nexacro.toNumber(obj.selectstartrow),
									endrow   = nexacro.toNumber(obj.selectendrow),
									startcol = nexacro.toNumber(obj.selectstartcol),
									endcol   = nexacro.toNumber(obj.selectendcol);
									

								var checkIndex = {};
								
								obj.selectBackgroundHandler = [];
								
								pThis.targetGrid = undefined;
								
								var clipText = "";
								var colSeperator = pThis.colSeperator;
								for (var i = startrow; i <= endrow; i++) {
									var copyData = [];
									var styleData = [];
									
									for (var j = startcol; j <= endcol; j++) {
										var value = obj.getCellValue(i,j);
										copyData.push(value);
										
										if(!checkIndex[j]) {
											pThis.setSelectBgInfo(obj, j);
											
											checkIndex[j] = 1;
										}
										
										if (j < endcol) {
											clipText += value + colSeperator;
										} else {
											clipText += value;
										}										
										
										
									}
									
									clipText += "\r\n";
								}
																
								//clipText += "\r\n";
								
								pThis.targetGrid = obj;
								
								var ta = pThis._createTextarea(clipText);
								
								
								pThis.targetGrid["ta"] = ta;
								
								
								pThis.scope.setTimer(777, 100);
								
								if(pThis.useBlink && !Eco.isEmpty(clipText)) {
									pThis.scope.setTimer(1000, 110);
								}
									
								var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
								pThis.notify("copy", obj, e, areaInfo);
								
								e.stopPropagation();
																
							} else if(keycode == 86) {
								pThis.targetGrid = obj;
								pThis.targetEvent = e;
								
								var ta = pThis._createTextarea('');
								pThis.targetGrid["ta"] = ta;
								
								pThis.scope.setTimer(888, 100);
								

								e.stopPropagation();								

							}			
						}
						
					}
				},
				
				
				notify: function(type, grid, e, areaInfo)
				{
					if(type == "copy") {
						if(grid["copyCallback"]) {
							grid["copyCallback"](grid, e, areaInfo);
						}
					} else if(type == "paste") {
						if(grid["pasteCallback"]) {
							grid["pasteCallback"](grid, e, areaInfo);
						}
					}
				},
				

				setSelectBgInfo: function(grid, cellIndex)
				{
					var bgHandler = grid.selectBackgroundHandler;
					
					var type = "cell";

					//  nexacro.Style_background
					var selectBgValue = grid.getCellProperty("Body", cellIndex, "selectbackground");
					
					if(Eco.isEmpty(selectBgValue)) {
						type = "body";
						
						//nexacro.Style_value
						selectBgValue = this.getBandCurrentStyle(grid, "body", "selectbackground");
						selectBgValue = selectBgValue.toString();
						
					}
					
					selectBackground = this.getStyleBackground(selectBgValue);
					var handler = this.getSelectBackgroundHandler(type, grid, cellIndex);
					
					
					bgHandler.push({cellIndex:cellIndex, selectBackground: selectBackground, handler:handler});
				},
				
				
				getSelectBackgroundHandler: function(type, grid, cellIndex)
				{
					if(type == "cell") {
						return function(selectBg) {
							var value = selectBg.toString();
							grid.setCellProperty( "Body", cellIndex, "selectbackground", value);
						};
						
					} else if(type == "body") {
						return function(selectBg) {
							var value = selectBg.toString();
							grid.setBandProperty( "Body", "selectbackground", value);
						};					
					}

				},				
				
				
				/*
				 * style background 객체 반환
				 */
				getStyleBackground: function(value)	
				{
					var styleBackground = new nexacro.Style_background();
					if(typeof(value) == "object") {
						styleBackground = value.clone();
					
					} else if(typeof(value) == "string") {
						styleBackground._setValue(value);
					}
					
					return styleBackground;
				},
				
				getBandCurrentStyle: function(grid, band, propName)	
				{
					var bandObj = grid[band];

					//head나 summ이 없을 경우
					if(Eco.isEmpty(bandObj)) { 
						return "";
					}
					
					var value = bandObj["style"][propName];
					
					if(Eco.isEmpty(value)) {
						var ref_finder = bandObj.bandctrl._ref_css_finder;
						
						if(!ref_finder["normal"]){
							return null;
							
						} else if(ref_finder["normal"][propName]){
							return ref_finder["normal"][propName];
							
						} else {
							return null;
							
						}			
						
					}
						
					return value;		
				},				
				
				
				blinkTimerHandler: function(pThis)
				{
					return function(obj, e) {
						var timerid = e.timerid;
						obj.killTimer(timerid);
						//trace("[timerid] " + timerid);
						if(timerid >= 1000) {
							var remainder = timerid%1000;
							//trace("timerid="+timerid + ", remainder="+remainder);
							
							if(remainder < 9) {
								pThis.blinkSelectBg(pThis.blinkColor[remainder]);
								pThis.scope.setTimer(++timerid, pThis.blinkTime[remainder]);
								
							} else {
								pThis.blinkSelectBg(null);
								pThis.initBlinkData();
							}
						} else {
							if(timerid == 777) { //after copy
								//trace("timer after copy 호출 " + obj);
								var ta = pThis.targetGrid["ta"];
								if(!ta) return;
								
								document.body.removeChild(ta);
								pThis.targetGrid["ta"] = undefined;
								
							} else if(timerid == 888) { //after paste
								//trace("timer after paste 호출 " +   obj);
								var ta = pThis.targetGrid["ta"];
								
								if(!ta) return;
								
								var clipText = ta.value;
								document.body.removeChild(ta);
								pThis.pasteData(clipText);
								pThis.targetGrid["ta"] = undefined;
							}
						}
						
					}
				
				},
				
				initBlinkData: function()
				{
					var grid   = this.targetGrid;
					grid.selectBackgroundHandler = [];
					grid.targetGrid = null;
				},				
				
				blinkSelectBg: function(color)
				{
					var grid   = this.targetGrid;
					var bgHandler = grid.selectBackgroundHandler;
					var len = bgHandler.length;

					var item,
					    handler, 
					    selectBackground,
					    cloneBg;
					    
					for(var i = 0; i < len; i++) {
						item = bgHandler[i];
						selectBackground = item["selectBackground"];
						handler = item["handler"];
						
						if(color === null) {
							cloneBg = selectBackground;
						} else {
							cloneBg = selectBackground.clone();
							cloneBg.set_color(color);
						}
						
						handler(cloneBg);
					}
				
				}	

			}); // end of 'JsNamespace.declare("Iject.Grid.CopyPaste",'
		
	}; //end of if (nexacro.Browser != "Runtime" && nexacro.Browser!="IE" ) 	
	
	
	
} // end of 'if ( !JsNamespace.exist("Iject.Grid.CopyPaste") )


