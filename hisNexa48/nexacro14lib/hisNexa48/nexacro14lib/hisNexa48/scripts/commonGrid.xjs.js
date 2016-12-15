//XJS=commonGrid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
        그리드 처리 스크립트
        @Path		    scripts::commonGrid.xjs
        @Description 	그리드 관련 유틸리티 스크립트
        @Author	    	임행섭( modification by 강현준) 
        @Create         2016. 11. 25.
        ********************************************************************************/

        
        /*
        @Usage	정렬기능이 필요한 그리드에 onheadclick 이벤트를 설정하고 아래 코드 복사
        		그리드의 컬럼헤드를 클릭하면 ↑ 나 ↓ 이 삽입되며 내림차순, 오름차순으로 정렬
        		다른 컬럼을 선택할 경우 원래 상태로 복구됨
        this.grid_onheadclick = function(obj:Grid, e:nexacro.GridClickEventInfo){
        	if (this.fv_constSortFlag) {
        		this.gfnClearSortMark(obj, e.cell);
        	} else {
        		this.gfnGridSort(obj, e);
        	}
        }
        */

        this.fv_constAscMark = "↓";
        this.fv_constDescMark = "↑";
        this.fv_constSortFlag = false;
        this.fv_constSortMode = false;

        this.gfnGridSort = function(obj,e) {
        	// 컬럼의 정렬방식을 'head'의 text에 "↑ ↓" 여부로 판단
        	// 이미지로 대체 가능
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if (strType == "checkbox") {
        		return;
        	}

        	var bindDs = this.objects[obj.binddataset];
        	if (bindDs.rowcount == 0) {
        		return false;
        	}

        	var BodyColId = (obj.getCellProperty("body", e.col, "text")).toString().split(":");
        	bindDs.set_enableevent(false);
        	for (var i = 0; i < obj.getCellCount("head"); i++) {
        		if (obj.getCellText(-1, i) == "undefined") {
        			continue;
        		}
        		var strHeadText = obj.getCellText(-1, i);
        		if (i == e.cell) {
        			if (strHeadText.substr(strHeadText.length - 1) == this.fv_constAscMark) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.fv_constDescMark);
        				bindDs.set_keystring(("S:-" + BodyColId[1]));
        				this.fv_constSortFlag = true;
        				this.fv_constSortMode = true;
        			} else if (strHeadText.substr(strHeadText.length - 1) == this.fv_constDescMark) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1) + this.fv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        				this.fv_constSortFlag = false;
        				this.fv_constSortMode = true;
        			} else {
        				obj.setCellProperty("head", i, "text", strHeadText + this.fv_constAscMark);
        				bindDs.set_keystring(("S:+" + BodyColId[1]));
        				this.fv_constSortFlag = false;
        				this.fv_constSortMode = true;
        			}
        		} else {
        			// 정렬표시 삭제
        			if (strHeadText.substr(strHeadText.length - 1) == this.fv_constAscMark || strHeadText.substr(strHeadText.length - 1) == this.fv_constDescMark) {
        				obj.setCellProperty("head", i, "text", strHeadText.substr(0, strHeadText.length - 1));
        			}
        		}
        	}
        	bindDs.set_enableevent(true);
        }

        // 그리드 SortMark 제거
        this.gfnClearSortMark = function(obj,nCell) {
        	var nColCnt = obj.getCellCount("head");
        	var sRepText;

        	for (var i = 0; i < nColCnt; i++) {
         		if (nCell != null && nCell == i) {
         			continue;
         		}
        		sRepText = obj.getCellProperty("head", i, "text").split(this.fv_constAscMark).join("").split(this.fv_constDescMark).join("");
        		trace(sRepText);
        		obj.setCellProperty("head", i, "text", sRepText);
        	}
        	var bindDs = this.objects[obj.binddataset];
        	bindDs.set_keystring("");
        	this.fv_constSortFlag = false;
        	this.fv_constSortMode = false;
        }

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
