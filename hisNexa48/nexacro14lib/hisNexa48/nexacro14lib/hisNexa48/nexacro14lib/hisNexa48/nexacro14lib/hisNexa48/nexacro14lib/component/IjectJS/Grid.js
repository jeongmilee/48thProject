
if ( !JsNamespace.exist("Iject.Grid") )
{
	JsNamespace.declare("Iject.Grid", {		
		
		// 정렬이 토글될 때 취소를 실행할지 여부
		// true 일 경우 오름차순/내림차순/취소 반복
		// false 일 경우 오름차순/내림차순 반복
		SORT_TOGGLE_CANCEL : true,

		// 정렬 표시자 구분 (text or image)
		MARKER_TYPE : "image",

		// Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정 
		// [오름차순표시, 내림차순표시]
		MARKER : ["URL('img::grd_sort_up.png')", "URL('img::grd_sort_dn.png')"],	// ["▲", "▼"]

		/**
		 * @class 그리드 기능 설정 및 초기화
		 * @param o:Form
		 * @param obj:Grid or Array
		 * @param config:object 기능설정파라미터
					copypaste 	- 복사 & 붙여넣기
					checkall 	- 전체체크
					sorting: 	- 정렬
					freezing 	- 틀고정
					filter 		- 필터
					find 		- 찾기
					replace 	- 수정
					updatecontrol - 데이타셋 updatecontrol제어
		 * @return None
		 */ 
		init : function(o, obj, config)
		{
			var pThis = o;
			var bCopyPaste = false;
			var bCheckAll = false;
			var bSort = false;
			var bFreezing = false;
			var bFilter = false;
			var bFind = false;
			var bReplace = false;
			var bUpdateControl = true;

			if(!Eco.isEmpty(config.copypaste)) 	bCopyPaste = config.copypaste;			
			if(!Eco.isEmpty(config.checkall)) 	bCheckAll = config.checkall;
			if(!Eco.isEmpty(config.sorting)) 	bSort = config.sorting;
			if(!Eco.isEmpty(config.freezing)) 	bFreezing = config.freezing;
			if(!Eco.isEmpty(config.filter)) 	bFilter = config.filter;
			if(!Eco.isEmpty(config.find)) 		bFind = config.find;
			if(!Eco.isEmpty(config.replace)) 	bReplace = config.replace;
			if(!Eco.isEmpty(config.updatecontrol)) 	bUpdateControl = config.updatecontrol;
			
			var objGrids = null;
			if(obj instanceof Grid){
				objGrids = [];
				objGrids.push(obj);
			}
			else{
				objGrids = obj;
			}

			var objGrid;
			for(var i = 0; i < objGrids.length; i++)
			{
				objGrid = objGrids[i];
				
				//복사&붙여넣기
				if(bCopyPaste){	
					var objGridCopyPaste = Eco.XComp.getUserProperty(pThis, "objGridCopyPaste");
					if(Eco.isEmpty( objGridCopyPaste )){
						objGridCopyPaste = Iject.Grid.CopyPaste.init(pThis);
						Eco.XComp.setUserProperty(pThis, "objGridCopyPaste", objGridCopyPaste);
					}
					objGridCopyPaste.addGrid(objGrid);			
				}			
				//전체체크
				if(bCheckAll)
				{			
					//바인드 데이타셋에 그리드 객체 저장
					var dsObj = objGrid.getBindDataset();
					Eco.XComp.setUserProperty(dsObj, "_gridobj", objGrid);					
					Eco.XComp.setUserProperty(dsObj, "_updatecontrol", bUpdateControl);
					
					//이벤트 추가
					objGrid.addEventHandler("onheadclick", this._common_checkall_onheadclick, pThis);				
					dsObj.addEventHandler("cancolumnchange", this._common_checkall_cancolumnchange, pThis);
					dsObj.addEventHandler("oncolumnchanged", this._common_checkall_oncolumnchanged, pThis);					
				}
				//정렬
				if(bSort){
					if ( Eco.XComp.getUserProperty(objGrid, "init_grid_sort")) return;
					objGrid.addEventHandler("onheadclick", this._common_sort_onheadclick, pThis);
					Eco.XComp.setUserProperty(objGrid, "init_grid_sort", true);						
				}
			}//end for
		},
		/**
		 * @class 전체선택 헤더클릭 이벤트		 
		 * @param obj:Grid
		 * @param e:Event
		 * @return None
		 */ 
		_common_checkall_onheadclick : function(obj, e)
		{
			Iject.Grid.checkAll(obj, e);
		},
		/**
		 * @class 전체선택 데이타셋 변경 전 이벤트
		 * @param obj:Dataset
		 * @param e:Event
		 * @return None
		 */ 		
		_common_checkall_cancolumnchange : function(obj, e)
		{		
			//rowtype저장
			obj._rowtype = obj.getRowType(e.row);
		},
		/**
		 * @class 전체선택 데이타셋 변경이벤트	 
		 * @param obj:Dataset
		 * @param e:Event
		 * @return None
		 */ 		
		_common_checkall_oncolumnchanged : function(obj, e)
		{
			var CHK_COL = e.columnid;
			
			//헤더 체크박스 선택확인
			var nCnt = obj.getCaseCount(CHK_COL+"=='1'");
			var gridobj = Eco.XComp.getUserProperty(obj, "_gridobj");
			var colidx = gridobj.getBindCellIndex("body", CHK_COL);
			
			if(nCnt != obj.rowcount)
			{			
				gridobj.setCellProperty("head", colidx, "text", '0');
			}
			else
			{
				gridobj.setCellProperty("head", colidx, "text", '1');
			}

			//데이타셋 rowtype확인(normal이였던 경우 update > normal로 변경)
			var bUpdateControl = Eco.XComp.getUserProperty(obj, "_updatecontrol");
			
			////bUpdateControl - false : rowtype 변경안됨, true : rowtype 자동변경
			if(!bUpdateControl)
			{
				if(obj._rowtype == Dataset.ROWTYPE_NORMAL)
				{
					obj.set_updatecontrol(false);
					obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
					obj.set_updatecontrol(true);
				}
			}
		},
		/**
		 * @class 그리드 Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
		 * @param obj:Grid
		 * @param e:GridClickEventInfo
		 * @return None
		 */  
		checkAll : function (obj, e)
		{
			var val;
			var columnid;
			var dsObj;
			var colidx = e.cell;
						
			if (obj.readonly == true) return;

			dsObj = obj.getBindDataset();
			if (Eco.isEmpty(dsObj))	return;
			
			var strType = obj.getCellProperty("head", colidx, "displaytype");
			if (strType != "checkbox") return;
			
			columnid = Iject.Grid.getBindColumnNameByIndex(obj, colidx);
			if (Eco.isEmpty(columnid))	return;
										
			// Head셋팅
			val = obj.getCellProperty("head", colidx, "text");
			if (Eco.isEmpty(val) || val == ""){
				val = "0";
			}

			if (val == "0"){
				obj.setCellProperty("head", colidx, "text", '1');
				val = "1";
			} else {
				obj.setCellProperty("head", colidx, "text", '0');
				val = "0";
			}
			
			// Body셋팅
			for (var i=0; i<dsObj.rowcount; i++){
				dsObj.setColumn(i, columnid, val);			
			}
		},
		/**
		 * @class 그리드 헤더의 체크해제
		 * @param obj:Grid
		 * @param idx:Integer cell idx (default : 0)
		 * @return None
		 */ 		
		clearCheck : function(obj, idx)
		{
			if(Eco.isEmpty(idx)) idx = 0;
			obj.setCellProperty("head", idx, "text", '0');
		},
		/**
		 * @class 정렬 헤더클릭 이벤트		 
		 * @param obj:Grid
		 * @param e:Event
		 * @return None
		 */
		_common_sort_onheadclick : function(obj, e)
		{
			Iject.Grid.sort(obj, e);
		},
		/**
		 * @class 정렬 
		 * @param obj:Grid
		 * @param e:Event
		 * @return None
		 */
		sort : function(obj, e)
		{
			if(obj.getCellProperty("head", e.cell, "displaytype") == "checkbox") return;
			
			var multiple = false;
	
			// Shift 키
			if ( e.shiftKey ) multiple = true;
				
			// Ctrl 키
			if ( e.ctrlKey ) multiple = true;
			
			// 정렬 상태 변경이 성공하면 정렬을 실행한다.
			if ( Iject.Grid.setSortStatus(obj, e.cell, multiple) )
			{
				Iject.Grid.executeSort(obj);
			}
		},
		/**
		 * 정렬 상태를 지정한다. (실제 소팅 처리는 executeSort 에서 담당한다.)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {number} headCellIndex 대상 head cell index
		 * @param {boolean=} isMultiple 다중선택여부
		 * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
		 * @return {boolean} 상태 변경 여부
		 */
		setSortStatus : function(grid, headCellIndex, isMultiple, sortStatus)
		{	
			// head cell index 에 해당하는 body cell index
			var bodyCellIndex = Iject.Grid.getBodyCellIndex(grid, headCellIndex);
			if ( bodyCellIndex < 0 ) return false;
			
			// body cell index 에 해당하는 바인드 컬럼명
			var columnName = Iject.Grid.getBindColumnNameByIndex(grid, bodyCellIndex);
			if ( Eco.isEmpty(columnName) ) 
			{
				Eco.Logger.warn({message:"Check Grid body cell bind value", stack:true});
				return false;
			}
			
			if ( Eco.isEmpty(isMultiple) ) isMultiple = false;

			if ( Eco.isEmpty(sortStatus) ) sortStatus = -1;
			
			// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
			if ( Eco.isUndefined(Eco.XComp.getUserProperty(grid, "sortInfos")) )
			{
				Eco.XComp.setUserProperty(grid, "sortInfos", {});
			}
			
			// 정렬대상컬럼 (순서중요)
			if ( Eco.isUndefined(Eco.XComp.getUserProperty(grid, "sortItems")) )
			{
				Eco.XComp.setUserProperty(grid, "sortItems", []);
			}	
			
			var sortInfos = Eco.XComp.getUserProperty(grid, "sortInfos"),
				sortItems = Eco.XComp.getUserProperty(grid, "sortItems"),
				sortInfo = sortInfos[columnName],
				sortItem,
				status;
			
			if ( Eco.isEmpty(sortInfo) )
			{
				var headText = grid.getCellText(-1, headCellIndex);
				
				// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
				// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
				var refCell = this.getGridCellObject(grid, "head", headCellIndex);
				
				sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
			}

			// set sort status
			if ( isMultiple ) 
			{		
				status = sortInfo.status;
				if ( sortStatus == -1 ) 
				{
					if ( status == 0 ) 
					{
						sortInfo.status = 1;
					} 
					else if ( status == 1 ) 
					{
						sortInfo.status = 2;
					} 
					else if ( status == 2 ) 
					{
						sortInfo.status = ( Iject.Grid.SORT_TOGGLE_CANCEL ? 0 : 1);
					}
				}
				else 
				{
					sortInfo.status = sortStatus;
				}
			}
			else 
			{
				for (var p in sortInfos) 
				{
					if ( sortInfos.hasOwnProperty(p) )
					{
						sortInfo = sortInfos[p];
						
						if ( p == columnName ) 
						{
							status = sortInfo.status;
							if ( sortStatus == -1 ) 
							{
								if ( status == 0 ) 
								{
									sortInfo.status = 1;
								} 
								else if ( status == 1 ) 
								{
									sortInfo.status = 2;
								} 
								else if ( status == 2) 
								{
									sortInfo.status = ( Iject.Grid.SORT_TOGGLE_CANCEL ? 0 : 1);
								}
							} 
							else 
							{
								sortInfo.status = sortStatus;
							}
						} 
						else 
						{
							sortInfo.status = 0;
						}
						
						if ( sortInfo.status == 0 )
						{
							for (var j=0, len2=sortItems.length; j<len2; j++) 
							{
								if ( sortItems[j] !== columnName ) 
								{
									Eco.array.removeAt(sortItems, j);
									break;
								}
							}
						}
					}
				}
			}
			
			// 컬럼정보 등록
			if ( !Eco.array.contains(sortItems, columnName) )
			{
				sortItems.push(columnName);
			}
			return true;
		},
		/**
		 * 정렬 적용
		 * @param {Grid} grid 대상 Grid Component
		 */
		executeSort : function(grid) 
		{
			var sortInfo, 
				sortItem,
				sortInfos = Eco.XComp.getUserProperty(grid, "sortInfos"),
				sortItems = Eco.XComp.getUserProperty(grid, "sortItems"),
				columnName,
				status,
				cell,
				sortString = "";
				
			if ( Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems) ) return;

			// keystring 조합
			for (var i=0; i<sortItems.length; i++) 
			{
				columnName = sortItems[i];
				sortInfo = sortInfos[columnName];
				status = sortInfo.status;
				cell = sortInfo.refCell;
				
				// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
				// 확인하여 없으면 제거해 준다.
				if ( Eco.isEmpty(cell) || grid.getBindCellIndex("body", columnName) < 0 )
				{
					Eco.array.removeAt(sortItems, i);
					sortInfos[columnName] = null;
					delete sortInfos[columnName];
					
					i--;
				}
				else if ( status > 0 ) 
				{
					sortString += (status == 1 ? "+" : "-") + columnName;
				}
			}

			var ds = Eco.XComp.lookup(grid.parent, grid.binddataset);
			
			// keystring 확인
			var curKeyString = ds.keystring;
			var groupKeyString = "";
			
			if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 )
			{
				var sIndex = curKeyString.indexOf("S:");
				var gIndex = curKeyString.indexOf("G:");

				if ( sIndex > -1 )
				{
					groupKeyString = "";
				}
				else
				{
					if ( gIndex < 0 )
					{
						groupKeyString = "G:"+curKeyString;
					}
					else
					{
						groupKeyString = curKeyString;
					}
				}
			}
			else
			{
				var temps = curKeyString.split(",");
				var temp;
				for (var i=0,len=temps.length; i<len; i++)
				{
					temp = temps[i];
					if ( temp.length > 0 && temp.indexOf("S:") < 0 )
					{
						if ( temp.indexOf("G:") < 0 )
						{
							groupKeyString = "G:"+temp;
						}
						else
						{
							groupKeyString = temp;
						}
					}
				}
			}
			
			if ( sortString.length > 0 )
			{
				var sortKeyString = "S:"+sortString;
				
				if ( groupKeyString.length > 0 )
				{
					ds.set_keystring(sortKeyString + "," + groupKeyString);
				}
				else
				{
					ds.set_keystring(sortKeyString);
				}
				
				Eco.XComp.setUserProperty(grid, "sortKeyString", sortKeyString);
			} 
			else
			{		
				ds.set_keystring(groupKeyString);
				
				Eco.XComp.setUserProperty(grid, "sortKeyString", "");
			}

			//Eco.Logger.debug("keystring==>"+ds.keystring);

			// 정렬표시
			var type = Iject.Grid.MARKER_TYPE;
			var index, marker;
			for (var p in sortInfos) 
			{
				if ( sortInfos.hasOwnProperty(p) )
				{
					sortInfo = sortInfos[p];			
					cell = sortInfo.refCell;
					
					if ( cell )
					{
						index = Iject.Grid.getCellObjectIndex(cell);
						
						marker = Eco.decode(sortInfo.status, 1, Iject.Grid.MARKER[0], 2, Iject.Grid.MARKER[1], "");
						
						if ( type == "text" )
						{
							grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
						}
						else if ( type == "image" )
						{
							grid.setCellProperty( "head", index, "style", "background:"+marker + " 50 5;");
						}
					}
				}
			}
		},
		/**
		 * 현재 적용된 모든 정렬을 제거한다.
		 * @param {Grid} grid 대상 Grid Component
		 */
		clearAllSort : function(grid) 
		{
			var sortInfos = Eco.XComp.getUserProperty(grid, "sortInfos");
			var sortItems = Eco.XComp.getUserProperty(grid, "sortItems");
			
			if ( Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems) ) return;
			
			// 정렬상태 초기화.
			Eco.object.Each(sortInfos, function(nm, val, o) {
				val.status = 0;
			});
			
			// 정렬실행
			Iject.Grid.executeSort(grid);
			
			// 정보 초기화
			Eco.XComp.setUserProperty(grid, "sortInfos", {});
			Eco.XComp.setUserProperty(grid, "sortItems", []);
		},

		/**
		 * @class cell index에 해당하는 바인드 컬럼명을 가져온다.
		 * @param obj:Grid
		 * @param idx:Integer cell idx
		 * @return columnid:string
		 */
		getBindColumnNameByIndex : function(grid, index) 
		{
			var text = "";
			var columnid = "";
			var subCell = grid.getCellProperty("body", index, "subcell");
			if ( subCell > 0 )
			{
				text = grid.getSubCellProperty("body", index, 0, "text");
			}
			else
			{
				text = grid.getCellProperty("body", index, "text");
			}
			
			if ( !Eco.isEmpty(text) )
			{
				if ( text.search(/^BIND\(/) > -1 ) 
				{	
					columnid = text.replace(/^BIND\(/, "");
					columnid = columnid.substr(0, columnid.length-1);
				} 
				else if ( text.search(/^bind:/) > -1 ) 
				{
					columnid = text.replace(/^bind:/, "");
				}
			}
			
			return columnid;
		},
		/**
		 * head cell에 match되는 body cell을 얻어온다
		 * @param {Grid} grid 대상 Grid Component
		 * @param {number} headCellIndex head cell index
		 * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
		 */
		getBodyCellIndex : function(grid, headCellIndex, useColspan) 
		{	
			// Max Head Row Index
			var maxHeadRow = 0;
			for (var i=0, len=grid.getCellCount("head"); i<len; i++) 
			{
				var row = grid.getCellProperty("head", i, "row");
				if (maxHeadRow < row) 
				{
					maxHeadRow = row;
				}
			}
			// Max Body Row Index
			var maxBodyRow = 0;
			for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
			{
				var row = grid.getCellProperty("body", i, "row");
				if (maxBodyRow < row) 
				{
					maxBodyRow = row;
				}
			}
			
			if (maxHeadRow == 0 && maxBodyRow == 0) 
			{
				return headCellIndex;
			}
			
			// Body Row 가 1개 이상일 경우
			// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
			// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
			var cellIndex = -1;
			var sRow = -1;
			var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
			var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
			var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));				
			
			if (maxHeadRow > maxBodyRow) 
			{
				sRow = nRow - (maxHeadRow - maxBodyRow);
				sRow = (sRow < 0 ? 0 : sRow);
			}
			else 
			{
				sRow = nRow;
			}
			
			var cRow, cCol, cColspan;
			for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
			{
				cRow = parseInt(grid.getCellProperty("body", i, "row"));
				cCol = parseInt(grid.getCellProperty("body", i, "col"));	
				cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));					

				// colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
				if ( useColspan )
				{
					if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
					{		
						cellIndex = i;
						break;
					}		
				}
				else
				{
					if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
					{		
						cellIndex = i;
						break;
					}
				}
			}
			return cellIndex;
		},
		/**
		 * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
		 * @param {Grid} grid 대상 Grid Component
		 * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
		 * @param {number} index 얻고자 하는 cell 의 index
		 * @return {object} cell object
		 */
		getGridCellObject : function(grid, band, index)
		{
			// 내부속성을 통해 얻어온다.
			var refCell;
			var format = grid._curFormat;
			if (format)
			{
				if ( band == "head" )
				{
					refCell = format._headcells[index];
				}
				else if ( band == "body" )
				{
					refCell = format._bodycells[index];
				}
				else if ( band == "summ" || band == "summary" )
				{
					refCell = format._summcells[index];
				}
			}
			
			return refCell;
		},
		/**
		 * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
		 * @param {object} cell 대상 cell object
		 * @return {number} cell index
		 */
		getCellObjectIndex : function(cell)
		{
			return cell._cellidx;
		}

	}); // end of 'JsNamespace.declare("Iject.Grid",'
	
} // end of 'if ( !JsNamespace.exist("Iject.Grid") )


