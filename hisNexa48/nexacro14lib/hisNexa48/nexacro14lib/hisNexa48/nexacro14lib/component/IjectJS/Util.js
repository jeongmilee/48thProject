
/**
 * @fileoverview 넥사크로  공통 Library interface
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject.Util"))
{

	/**
	 * @namespace
	 * @name Iject.Util
	 * @author
	 * @memberof! Iject.Util
	 */
	JsNamespace.declare("Iject.Util", {


		/**
		 * JSON String을 JSON Object으로 변환하여 리턴한다.
		 * @param {object} 변경할JSON문자열
		 * @return {string} 변형문자열
		 * @example
		 * Iject.Util.setJSONToString({a:"aa"});
		 * @memberOf Iject.Util
		 */
		setJSONToString : function(object)
		{
			var isArray = (object.join && object.pop && object.push
			&& object.reverse && object.shift && object.slice && object.splice);
			var results = [];

			for (var i in object) {
				var value = object[i];

				results.push((isArray ? "" : "\"" + i.toString() + "\" : ")
						+ (typeof value == "string" ? "\"" + value + "\"" : value));
			}

			return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
		},

		/**
		 * JSON String을 JSON Object으로 변환하여 리턴한다.
		 * @param {object} obj
		 * @return {object} 변형문자열
		 * @example 
		 *  Iject.Util.setJSONToString({a:"aa"});
		 * @memberOf Iject.Util
		 */
		setStringToJSON : function(strJson)
		{
			return eval("(" + strJson + ")");
		},

		/**
		 * Font Object 생성 반환.
		 * @param {object} obj
		 * @param {number} iFontSize
		 * @param {string} 폰트명
		 * @param {string} sType
		 * @return {array} 변형문자열
		 * @example
		 *   Iject.getObjFont(this.Button00,"12","normal");
		 * @memberOf Iject.Util
		 */
		getObjFont : function (obj,nFontSize,sType)
		{

			var objFont = obj.currentstyle.font;

			sType = (Eco.isEmpty(sType)) ? "normal" : sType;
			objFont.set_size(nFontSize);
			objFont.set_face("Dotum");
			objFont.set_type(sType);
			return objFont;
		},

		/**
		 * 부모창에 존재하는 함수명 검색하여 호출
		 * @param {XaComp} this(현재Form)
		 * @param {string} 찾을Function명
		 * @return
		 * @example
		 *  Iject.Util.searchParentFunc(this,"fn_func").call(this,arg1);
		 * @memberOf Iject.Util
		 */
		searchParentFunc : function(o,fnc)
		{

			var idx = 1;
			var parentStr = "";
			var pThis = o;
			var  i=0;
			var functionName = fnc;
			var isFind = false;

			while(idx<5)
			{

				if(Eco.isFunction(eval(pThis + parentStr + functionName)) == true)
				{
					isFind= true;
					break;
				}
				else
				{

					parentStr =  "parent." + parentStr;
					idx++;
				}

			}

			if(!isFind)
			{
				//Ex.Logger.error({message: "unknown function error !!!" + functionName, elapsed: true});
			}
			else
			{
				isFind = eval(pThis + parentStr + functionName);
			}

			return isFind;
		},

		/**
		 * 메인폼인지 팝업인지 구분
		 * @param {XaComp} 현재Form
		 * @return  p 팝업 M 메인
		 * @example
		 *  var isHost = Iject.Util.isForm() //output : p 팝업 M 메인
		 * @memberOf Iject.Util
		 */
		isForm : function(o)
		{
			var pThis = o;
			if(Eco.isEmpty(pThis.opener))
			{
				return "M";
			}
			else
			{
				return "P";
			}

		},

		/**
		 * 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
		 * @param {XaComp} this(현재Form)
		 * @param {string} 데이터셋명
		 * @return {string} dataset
		 * @example
		 * Iject.Util.isCheckDs(this,"ds_temp");
		 * @memberOf Iject.Util
		 */
		isCheckDs : function(o,sDsNm)
		{

			var pThis = o;
			var oDs =Eco.XComp.lookup(pThis,sDsNm);

			if(Eco.isEmpty(oDs))
			{
				oDs = new Dataset;
				oDs.name = sDsNm;

				pThis.addChild(sDsNm, oDs);
			}
			else
			{
				oDs.clearData();

			}

			return oDs;
		},

		/**
		 * 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
		 * @param {XaComp} this(현재Form)
		 * @param {string} 데이터셋명
		 * @return {string} dataset
		 * @example
		 * Iject.Util.getDataset(this,"ds_temp");
		 * @memberOf Iject.Util
		 */
		getDataset : function(o,sDsNm)
		{

			var pThis = o;
			return Eco.XComp.query(pThis, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
		},

		/**
		 * = 을 배열로 분리 처리
		 * @param {string} objString(inds=inds)
		 * @param {number} 0:배열첫번째값1:배열두번째값
		 * @return {string} return된배열값
		 * @example
		 * Iject.Util.splitDsName("arg1=1 arg2=2",0);  //arg1 arg2
		 * @memberOf Iject.Util
		 */
		splitDsName : function(objString, type)
		{
			var strDsMapping;			//mapping string
			var objArr;					//dataset name array
			var objReturn = new Array();

			strDsMapping = objString.split(" ");

			for (var i = 0; i < strDsMapping.length ; i++ ){
				objArr = strDsMapping[i].split("=");    // objArr = a,cd
				if (type == 0)
					objReturn[i] = objArr[0];
				else
					objReturn[i] = objArr[1];
			}

			return objReturn;
		},


		/**
		 * dataset object에서 키에 해당되는 Row를 찾아서 삭제
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} 서브키칼럼
		 * @param {string} :서브 키값
		 * @return N/A
		 * @example
		 * Iject.Util.deleteData(ObjDs, strIdCol, strId, strSubCol, strSubId);
		 * @memberOf Iject.Util
		 */
		deleteData : function (ObjDs, strIdCol, strId, strSubCol, strSubId)
		{
			var curRow = Iject.Util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			ObjDs.deleteRow(curRow);
		},

		/**
		 * dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} : 서브키칼럼
		 * @param {string} :서브 키값
		 * @return N/A
		 * @example
		 * Iject.Util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
		 * @memberOf Iject.Util
		 */
		findData : function (ObjDs, strIdCol, strId, strSubCol, strSubId)
		{

			if (Eco.isEmpty(strSubCol))
			{
				return ObjDs.findRow(strIdCol, strId.toString());
			}

			return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
		},

		/**
		 * dataset object에서 키에 해당되는 Row를 찾아서 이동
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} : 이동할 Row,
		 * @param {string} :서브키칼럼
		 * @param {string} : 서브 키값
		 * @return N/A
		 * @example
		 * Iject.Util.moveData(ObjDs, strIdCol, strId, newRow, strSubCol, strSubId);
		 * @memberOf Iject.Util
		 */
		moveData : function(ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
		{
			var curRow = Iject.Util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			ObjDs.moveRow(curRow, newRow);
		},

		/**
		 * dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} : 변경할 칼럼
		 * @param {string} :변경값
		 * @param {string} : 서브키칼럼
		 * @param {string} : 서브 키값
		 * @return N/A
		 * @example
		 *  Iject.Util.editData(ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId);
		 * @memberOf Iject.Util
		 */
		editData : function(ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
		{
			var curRow = Iject.Util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			return ObjDs.setColumn(curRow, valCol, newVal);
		},


		/**
		 * dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} : 변경할 칼럼
		 * @param {string} :변경값
		 * @param {string} : 서브키칼럼
		 * @param {string} : 서브 키값
		 * @return N/A
		 * @example
		 *  Iject.Util.getData(ObjDs,nRow,sColId,sVal);
		 * @memberOf Iject.Util
		 */
		getData : function(ObjDs,nRow,sColId,sVal)
		{
			var oData = ObjDs.getColumn(nRow,sColId);

			var oColInfo = ObjDs.getColumnInfo(sColId);
			if(Eco.isEmpty(oColInfo)) return "";
			var sType = oColInfo.type;

			if(Eco.isEmpty(sVal))
			{
				switch(sType.toUpperCase())
				{
					case "STRING" :
						sVal = "";
						break;
					case "BIGDECIMAL" :
					case "INT" :
					case "FLOAT" :
						sVal = 0;
						break;
				}
			}

			var rtnVal = (Eco.isEmpty(oData)) ? sVal : oData;

			return rtnVal;
		},

		/**
		 * dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
		 * @param {object} dataset
		 * @param {string} 키칼럼
		 * @param {string} :키값
		 * @param {string} : dataSet 칼럼
		 * @param {string} :변경값
		 * @param {string} : 서브키칼럼
		 * @param {string} : 서브 키값
		 * @return N/A
		 * @example
		 *  Iject.Util.getLookupData(ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId);
		 * @memberOf Iject.Util
		 */
		getLookupData : function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
		{
			var strVal;
			var curRow = Iject.Util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			if (curRow < 0)
			{
				return "";
			}

			strVal = ObjDs.getColumn(curRow, strInfo);
			if (Eco.isEmpty(strVal))
			{
				return "";
			}

			return strVal;
		},
		
		/**
		 * dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
		 * @param {object} DataSet
		 * @return {boolen} true=변경된데이터가존재,false=변경된데이터가없음
		 * @example
		 *  Iject.Util.getLookupData(this.dsIn);
		 * @memberOf Iject.Util
		 */
		isUpdated : function (objDs)
		{
			if (objDs.getDeletedRowCount() > 0)
			{
				return true;
			}

			if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1)
			{
				return true;
			}
			return false;
		},
		
		/**
		 * dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
		 * @param {object} DataSet
		 * @return {boolen} true=변경된데이터가존재,false=변경된데이터가없음
		 * @example
		 *  Iject.Util.getLookupData(this.dsIn);
		 * @memberOf Iject.Util
		 */
		isNotUpdated : function (objDs)
		{
			return !Iject.Util.isUpdated(objDs);
		},
		
		/**
		 * dataSet의 Row가 변경되었는지 판단하는 함수
		 * @param {object} objDs(DataSet)
		 * @param {number} 체크할 Row index
		 * @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		 * @example
		 * Iject.Util.isUpdatedRow(this.dsin,dsin.rowposition):
		 * @memberOf Iject.Util
		 */
		isUpdatedRow : function (objDs, nRow)
		{
			if (objDs.updatecontrol == true)
			{
				if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4)
				{
					return true;
				}
				return false;
			}

			return false;
		},


		/**
		 * dataSet의 Row 에서 해당 칼럼이 변경되었는지
		 * @param {object} objDs(DataSet)
		 * @param {number} 체크할 Row index
		 * @param {string} 체크할 컬럼값
		 * @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		 * @example
		 *  Iject.Util.isUpdateColumn(objDs, nRow, Column);
		 * @memberOf Iject.Util
		 */
		isUpdateColumn : function (objDs, nRow, Column)
		{
			if (objDs.getRowType(nRow) == 2)
			{
				if (Eco.isEmpty(objDs.getColumn(nRow, Column)))
				{
					return false;
				}
			}
			else
			{
				if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column))
				{
					return false;
				}
			}
			return true;
		},


		/**
		 * Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
		 * @param {object} objDs(DataSet)
		 * @param {string} 호출할 함수
		 * @param {boolen} 변경된 데이터만 호출할지 여부
		 * @return {string} 호출된값
		 * @example
		 *  Iject.Util.allRowDataCall(dsObj, callFncObj, bModifiedOnly);
		 * @memberOf Iject.Util
		 */
		allRowDataCall : function (dsObj, callFncObj, bModifiedOnly)
		{
			var retVal;
			for (var i = 0; i < dsObj.getRowCount(); i++)
			{
				if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4))
				{
					continue;
				}
				retVal = callFncObj(dsObj, i);
				if (Eco.isEmpty(retVal) == false)
				{
					return retVal;
				}
			}
		},


		/**
		 * Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
		 * @param {object} 목적데이타셋dsDs(DataSet)
		 * @param {string} 처리데이타셋
		 * @param {string} 필터표현
		 * @return N/A
		 * @example
		 *   Iject.Util.dsFilter(dsSc,dsTg,sFilterExpr);
		 * @memberOf Iject.Util
		 */
		dsFilter : function(dsSc,dsTg,sFilterExpr)
		{
			var sKeyString = dsSc.keystring;
			if(!Eco.isEmpty(sKeyString))  sKeyString = sKeyString.toString();
			dsSc.set_keystring("");
			dsSc.filter(sFilterExpr);
			dsTg.copyData(dsSc,true);
			dsSc.filter("");
			if(!Eco.isEmpty(sKeyString))  dsSc.set_keystring(sKeyString);
		},


		/**
		 * 입력값이 e-mail Type인지 체크하는 함수
		 * @param  {string} strValue
		 * @return {boolen} true/false
		 * @example
		 *  var res = Iject.Util.checkEmail("hongkildong@naver.com");
		 *  //trace(res)  true
		 * @memberOf Iject.Util
		 */
		checkEmail : function (strValue)
		{
			if (Eco.isEmpty(strValue))
			{
				return false;
			}

			var nIndexOfAt = strValue.indexOf("@");
			var nIndexOfDot = strValue.indexOf(".");
			var nLength = strValue.length;

			// "@" 이 하나도 없거나 맨 끝에 위치한  경우
			if (nIndexOfAt <= 0 || nIndexOfAt == nLength)
			{
				return false;
			}

			// "." 이 하나도 없거나 맨 끝에 위치한 경우
			if (nIndexOfDot <= 0 || nIndexOfDot == nLength)
			{
				return false;
			}

			// "@"이 두개 이상 존재하는 경우
			if (strValue.indexOf("@", nIndexOfAt + 1) != -1)
			{
				return false;
			}

			// ".@" 인 경우 또는 "@."인 경우
			if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".")
			{
				return false;
			}

			// "@" 이후에 "."이 존재하지 않는 경우
			if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1)
			{
				return false;
			}

			// 공백문자가 존재하는 경우
			if (strValue.indexOf(" ") != -1)
			{
				return false;
			}

			return true;
		},

		/**
		 * 해당 PC의 오늘 날짜(korea)를 가져온다.
		 * @return {string} 오늘날짜
		 * @example
		 * Iject.Util.today();
		 * @memberOf Iject.Util
		 */
		today : function ()
		{


			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);

			return strToday;
		},


		/**
		 * 해당 PC의 오늘 날짜+시간를 가져온다.
		 * @return {string} 오늘날짜 + 시간
		 * @example
		 * Iject.Util.todayTime();
		 * @memberOf Iject.Util
		 */
		todayTime : function ()
		{
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getHours(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getMinutes(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getSeconds(), 2);

			return strToday;
		},	

		/**
		 * 입력값이 전화번호 format 인지 체크하는 함수
		 * @param {string} strValue
		 * @return true = 입력값이 전화번호 형태일 경우
		 * @example
		 *  Iject.Util.checkPhone();
		 * @memberOf Iject.Util
		 */
		checkPhone : function (strValue)
		{
			// null 이거나 "-"이 존재하지 않는 경우
			if (Eco.isEmpty(strValue) || (!Eco.isEmpty(strValue) && strValue.indexOf("-") == -1))
			{
				return false;
			}
			else if (strValue.indexOf(".") >= 0)
			{
				return false;
			}
			else
			{
				// "-" 사이의 값이 숫자가 아닌 경우
				var arrNumbers = strValue.split("-");
				for (var i = 0; i < arrNumbers.length; i++)
				{
					if (!nexacro.isNumeric(arrNumbers[i]))
					{
						return false;
					}
				}
			}
			return true;
		},



		/**
		 * 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
		 * @param {string} 설정할 파리미터명
		 * @param {string} p_value - 설정할 값
		 * @return {string} String
		 * @example
		 *     paramStr += Iject.Util.setParam("sql_xml", "gspl_sql_common");
		 * @memberOf Iject.Util
		 */
		setParam : function (p_name, p_value)
		{

			return p_name + "="+this.isReplaceEmpty(p_value)+ "&nbsp;";
		},

		/**
		 * 입력값이 null에 해당되면 val2(대체문자열)로 반환한다.
		 * @param {string} val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
		 * @return {string}  val값이 null에 해당하는 경우 val2값으로 대체 반환
		 * @example
		 *  Iject.Util.isNvl("","####");
		 *  // #####
		 * @memberOf Iject.Util
		 */
		isNvl : function(val,val2)
		{
			var rtnVal = (Eco.isEmpty(val)) ? val2 : val;
			return rtnVal;
		},

		/**
		 * decode 처리
		 * @param {string} val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
		 * @return {string}  val값이 null에 해당하는 경우 val2값으로 대체 반환
		 * @example
		 * Iject.Util.gDecode("aaaa');
		 * @memberOf Iject.Util
		 */
		gDecode : function()
		{

			var varRtnValue = null;
			var arrArgument = arguments;
			var varValue    = arrArgument[0];
			var bIsDefault  = false;
			var nCount      = 0;

			if ((arrArgument.length % 2) == 0) {
				nCount     = arrArgument.length - 1;
				bIsDefault = true;
			} else {
				nCount     = arrArgument.length;
				bIsDefault = false;
			}

			for (var i = 1; i < nCount; i+=2) {
				if (varValue == arrArgument[i]) {
					varRtnValue = arrArgument[i+1];
					i = nCount;
				}
			}

			if (varRtnValue == null && bIsDefault) {
				varRtnValue = arrArgument[arrArgument.length-1];
			}

			return varRtnValue;

		},

		/**
		 * 메시지를 치환
		 * @param {string} 치화활 message
		 * @return {array}  치환할 인자값 array
		 * @example
		 * 	 var msg = "[{0}] 검색가능 일자는 {1} ~ {2} 입니다.";
		 * var convertMsg =  Iject.Util.convertMessage(msg,["알림", "2015-05-01", "2015-05-12"]);
		 * trace(convertMsg); //[알림] 검색가능 일자는 2015-05-01 ~ 2015-05-12 입니다.
		 * @memberOf Iject.Util
		 */
		convertMessage : function(msg, values) {
			return msg.replace(/\{(\d+)\}/g, function() {
				return values[arguments[1]];
			});
		},


		/**
		 * 공백제거
		 * @param {string} 문자열
		 * @return {string} 문자열
		 * @example 
		 *  Iject.Util.trim(" a ");
		 * @memberOf Iject.Util
		 */
		trim : function(sValue)
		{
			if (sValue == null) return "";
			if (new String(sValue).valueOf() == "undefined") return "";
			if (new String(sValue) == null) return "";

			var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

			return retVal;
		},


		/**
		 * 입력값을 체크하여 Null이거나 빈값이면 지정한 값을 리턴
		 * @param {string} inVal 	- 문자열 값
		 * @param {string} emptyVal 	- 대치값
		 * @return {string} 입력값이 Null이거나 공백인 경우 지정한값
		 *						      	Null이거나 공백이 아닌경우 입력값
		 * @example 
		 * var str  ="aaaa"l
		 * var res = Iject.Util.emptyVal(str);
		 * @memberOf Iject.Util
		 */
		emptyVal : function(inVal, emptyVal)
		{
			if(Eco.isEmpty(inVal))
			{
				inVal = emptyVal;
			}
			return inVal;
		},


		/**
		 * Argument 전송된 각 Data 값에 Quote(') 를 붙여준다.
		 * @param {string} 문자열
		 * @return {string}
		 * @example 
		 * var arg1= "aaaa";
		 * Iject.Util.setQuate(arg1);
		 * @memberOf Iject.Util
		 */
		setQuote : function(argString)
		{
			if (Eco.isEmpty(argString))
			{
				argString = "";
			}

			var strVal = new String(argString);
			var strRet = new String("'");

			for (var i = 0; i < strVal.length; i++)
			{
				if (strVal.substr(i, 1) == "'")
				{
					strRet += '"';
				} else if (strVal.substr(i, 1) == '"') {
					strRet += '"';
				} else {
					strRet += strVal.substr(i, 1);
				}
			}

			strRet += "'";
			return strRet;
		},

		/**
		 * 문자열에서 구분자를 추가한다.
		 * @param {string} strValue 	- 문자열
		 * @param {string} tokenNum 	- 스페이스로 구분된 숫자
		 * @param {string} delimiter	- 구분문자
		 * @return {string} 하이픈이 추가된 문자열가 반환된다.
		 * @example
		 * Iject.Util.appendDelimiter(strValue, tokenNum, delimiter);
		 * @memberOf Iject.Util
		 */
		appendDelimiter : function(strValue, tokenNum, delimiter)
		{
			var retVal		= "";
			var strFormat 	= "";
			var strEmpty 	= "";

			if (nexacro.isNumeric(Iject.Util.removeSpace(tokenNum)) )
			{
				var arrToken = tokenNum.split(" ");
				var nTokenCnt = arrToken.length;

				if (nTokenCnt > 0)
				{
					strFormat = strEmpty.padLeft(arrToken[0], "@");
					for (var i=1; i<nTokenCnt; i++)
					{
						strFormat += (delimiter + strEmpty.padLeft(nexacro.toNumber(arrToken[i]), "@"));
					}
				}
			}

			if (strFormat.length < 1)
			{
				retVal = strValue;
			} else {
				var nIndex  = 0;
				var arrTemp = strFormat.split(delimiter);

				for(var i=0; i<arrTemp.length; i++)
				{
					if(i == 0)
					{
						retVal += strValue.substr(nIndex, arrTemp[i].length);
					} else {
						retVal += delimiter + strValue.substr(nIndex, arrTemp[i].length);
					}

					nIndex = nIndex + arrTemp[i].length;
				}
			}

			return retVal;
		},


		/**
		 * 구분자를 제거한다.
		 * @param {string} strValue 	- 문자열
		 * @param {string} 구분자가 포함된 스트링
		 * @param {string} 구분자
		 * @return {string} 구분자가 제거된 스트링이 반환된다.
		 * @example 
		 * Iject.Util.removeDelimiter(strValue, delimiter);
		 * @memberOf Iject.Util
		 */
		removeDelimiter : function(strValue, delimiter)
		{
			return strValue.replace(delimiter, "");
		},
		
		/**
		 * 문자열의 공백제거
		 * @param {string} str 문자열
		 * @return {string} 공백이 제거된 문자열
		 * @example 
		 * Iject.Util.removeSpace("aa bb c d  e");
		 * @memberOf Iject.Util
		 */
		removeSpace : function(str)
		{
			return str.replace(/\s+/g, '');
		},
		
		/**
		 * 문자열에서 하이픈(-)을 추가한다
		 * @param {string} strValue 	- 하이픈이 없는 문자
		 * @param {string} tokenNum 	- 스페이스로 구분된 숫자
		 * @return {string} 하이픈이 추가된 문자열가 반환된다..
		 * @example
		 * var str= "777722222";
		 * var str2 = " ";
		 * Iject.Util.appendHyphen(str,str2);
		 * @memberOf Iject.Util
		 */
		appendHyphen : function(strValue, tokenNum)
		{
			return this.appendDelimiter(strValue, tokenNum, "-");
		},

		/**
		 * 특수문자를 제거한다
		 * @param {string} 문자열
		 * @return {string} 특수문자를 제거한 문자열
		 * @example
		 * Iject.Util.removeSpecialChar(strValue);
		 * @memberOf Iject.Util
		 */
		removeSpecialChar : function(strValue)
		{

			var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>";

			for (i = 0; i < strValue.length; i++)
			{
				for (j = 0; j < strSpecial.length; j++)
				{
					if (strValue.charAt(i) == strSpecial.charAt(j))
					{
						strValue = strValue.replace(strValue.charAt(i), "");
					}
				}
			}

			return strValue;
		},

		/**
		 * 입력받은 Number에 컴마를 추가한다.
		 * @param {string} nNumber String
		 * @param {string} nDetail 출력시 소숫점 이하의 자릿수.(반올림함)
		 * @return {string} (Comma 를 포함하고 있는 숫자)  정상 : Comma 가 포함하고 있는 Number Return
		 * @example 
		 * var nNumber = 1234567;
		 * var nDetail = 2;;
		 * 
		 * Iject.Util.appendComma(nNumber,nDetail)
		 * @memberOf Iject.Util
		 */
		appendComma : function(nNumber,nDetail)
		{
			if (nNumber == null)	return "";
			if (nDetail	== null)	nDetail	= 0;

			nNumber				= parseFloat(nNumber);
			nNumber				= Math.round(nNumber, nDetail);

			var strNumber		= new String(nNumber);
			var arrNumber		= strNumber.split(".");
			var strFormatNum	= "";
			var j = 0;

			for ( i = arrNumber[0].length - 1; i >= 0; i--)
			{
				if (i != strNumber.length && j == 3)
				{
					strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
					j = 0;
				} else {
					strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
				}
				j++;
			}

			if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];

			return strFormatNum;
		},



		/**
		 * 오른쪽 채우기 함수
		 * @param {string} sValue 	- 대상문자열
		 * @param {string} nLength 	- 자리수
		 * @param {string} Char 		- 채울 문자
		 * @return {string} 채운문자
		 * @example
		 * Iject.Util.rpad(sValue, nLength, Char);
		 * @memberOf Iject.Util
		 */
		rpad : function(sValue, nLength, Char)
		{
			if (new String(sValue).valueOf() == "undefined") sValue = "";
			if (Eco.isEmpty(sValue)) sValue = "";

			var strRetVal  = new String(sValue);
			var nIteration = nLength - this.getLengB(strRetVal);

			for (var i = 0; i < nIteration; i++)
			{
				strRetVal = strRetVal + Char;
			}
			return strRetVal;
		},


		/**
		 * 왼쪽 채우기 함수
		 * @param {string} sValue 	- 대상문자열
		 * @param {string} nLength 	- 자리수
		 * @param {string} Char 		- 채울 문자
		 * @return {string}
		 * @example 
		 * Iject.Util.lpad(sValue, nLength, Char);
		 * @memberOf Iject.Util
		 */

		lpad : function(sValue, nLength, Char)
		{
			if (new String(sValue).valueOf() == "undefined") sValue = "";
			if (Eco.isEmpty(sValue)) sValue = "";

			var strRetVal 	= new String(sValue);
			var strChar 	= "";
			var nIteration 	= nLength - this.getLengB(strRetVal);

			for (var i = 0; i < nIteration; i++)
			{
				strChar = Char + strChar;
			}
			return (strChar + strRetVal);
		},

		/**
		 * 입력받은 전체 길이를 계산 결과를 Number Type으로 반환
		 *			  	  문자, 숫자, 특수문자 : 1 로 Count
		 * 			  	  그 외 한글/한자 : 2 로 count
		 * @param {string} Char 		- 채울 문자
		 * @return {string} 대상문자열
		 * @memberOf Iject.Util
		 */
		getLengB : function(sValue)
		{
			var v_ChkStr = sValue.toString();
			var v_cnt = 0;

			for (var i=0; i<v_ChkStr.length; i++)
			{
				if (v_ChkStr.charCodeAt(i) > 127)
				{
					v_cnt += 2;
				} else {
					v_cnt += 1;
				}
			}

			return v_cnt;
		},

		/**
		 * 두 문자열이 모두 존재시 구분자를 더해서 리턴한다.
		 *			  	  문자, 숫자, 특수문자 : 1 로 Count
		 * 			  	  그 외 한글/한자 : 2 로 count
		 * @param {string} strVal1	- 문자1
		 * @param {string} strVal2 	- 문자2
		 * @param {string} delimiter - 구분자
		 * @return {string} 두분자열이 모두 존재시 strVal1 + delimiter + strVal2
		 * @example 
		 * Iject.Util.appendString(strVal1, strVal2, delimiter);
		 * @memberOf Iject.Util
		 */
		appendString : function(strVal1, strVal2, delimiter)
		{
			if(strVal1.length > 0 && strVal2.length > 0)
			{
				return strVal1+delimiter+strVal2;
			}
		},

		/**
		 * 입력 문자열중 숫자값만 남긴다.
		 * @param {string} 입력문자열
		 * @return {string} 숫자문자열
		 * @example
		 *   Iject.Util.getDigit(string);
		 * @memberOf Iject.Util
		 */
		getDigit : function(strValue)
		{
			var regExp = new RegExp("\\D", "g");
			var strRet = strValue.replace(regExp, "");

			return strRet;
		},
		
		/**
		 * 데이타셋 특정컬럼에 대해서 distinct
		 * @param {dataset} Dataset
		 * @return {string} 컬럼명
		 * @example
		 *   Iject.Util.distinct(dataset, string);
		 * @memberOf Iject.Util
		 */
		distinct : function(ds, col)
		{
			if(Eco.isEmpty(ds) || Eco.isEmpty(col)) return false;
			
			var arr = [];
			for(var i = 0; i < ds.rowcount; i++)
			{
				arr.push(ds.getColumn(i, col));
			}

			return Eco.array.unique(arr);
		},

		/**
		 * 한글만으로 되어 있는지 Check한다.
		 * @param {string} str
		 * @return {boolen} Boolean형의 한글 여부
		 * @example  
		 * var str = "한글";
		 * Iject.Util.isKoreanChar(str);
		 * @memberOf Iject.Util
		 */
		isKoreanChar : function(strValue)
		{
			var retVal = true;

			for (i = 0; i < strValue.length; i++)
			{
				if (!((strValue.charCodeAt(i) > 0x3130 && strValue.charCodeAt(i) < 0x318F) || (strValue.charCodeAt(i) >= 0xAC00 && strValue.charCodeAt(i) <= 0xD7A3)))
				{
					retVal = false;
				}
			}

			return retVal;
		},

		/**
		 * 입력된 문자열에서 가운데 부분을 주어진 길이만큼 Return 한다.
		 * @param {string} trString	- 가운데 부문을 얻어올 원본 문자열
		 * @param {string} nIndex 	- 얻어올 첫 글자의 Index
		 * @param {string} nSize 	- 얻어올 글자수
		 * @return {string}  얻어진 문자열.
		 * @example
		 * var str = "adfdasdrere";
		 * Iject.Util.mid(str, 2, 2);
		 * @memberOf Iject.Util
		 */
		mid : function(strString, nIndex, nSize)
		{
			var nStart 	= ((nIndex == null) ? 0 : ((nIndex.toString().length <= 0) ? 0 : nIndex-1));
			var nEnd 	= ((nSize  == null) ? strString.toString().length : ((nSize.toString().length <= 0) ? strString.toString().length : nSize));
			var rtnVal 	= strString.substr(nStart, nEnd);

			return String(rtnVal);
		},

		/**
		 * 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
		 * @param {string} strString	- 대상 문자열
		 * @param {string} nSize		- 얻어올 크기. [Default Value = 0]
		 * @return {string}  오른쪽 부분이 얻어진 문자열.
		 * @example
		 * var str = "adfdasdrere";
		 * Iject.Util.right(str, 2, 2);
		 * @memberOf Iject.Util
		 */
		right : function(strString, nSize)
		{

			var nStart 	= String(strString).length;
			var nEnd 	= Number(nStart) - Number(nSize);
			var rtnVal 	= strString.substring(nStart, nEnd);

			return rtnVal;
		},

		/**
		 * 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
		 * @param {string} strString	- 대상 문자열
		 * @param {string} nSize		- 얻어올 크기. [Default Value = 0]
		 * @return {string} 왼쪽 부분이 얻어진 문자열
		 * @example
		 *  Iject.Util.left(str, 2, 2);
		 * @memberOf Iject.Util
		 */
		left : function(strString, nSize)
		{
			var rtnVal = "";
			if (nSize > String(strString).length || nSize == null)
			{
				rtnVal = strString;
			} else {
				rtnVal = strString.substring(0, nSize);
			}
			return rtnVal;
		},
		
		/**
		 * 전체문자 치환
		 * @param {string} strString	- 대상 문자열
		 * @param {string} nSize		- 얻어올 크기. [Default Value = 0]
		 * @return {string} 왼쪽 부분이 얻어진 문자열
		 * @example
		 *  Iject.Util.left(str, 2, 2);
		 * @memberOf Iject.Util
		 */
		replaceAll : function(str, org, dest)
		{
			return str.split(org).join(dest);
		},
		
		/**
		 * 왼쪽 0값을 제거한다.
		 * @param {string} strString	- 대상 문자열
		 * @return {string} String	변환 문자열
		 * @example
		 *  Iject.Util.lTrimZero(str);
		 * @memberOf Iject.Util
		 */
		lTrimZero : function(strString)
		{
			var pos;
			var sTrim = "0";
			var sOrg = new String(strString);

			for( pos = 0 ; pos < sOrg.length ; pos+=sTrim.length )
			{
				if( sOrg.substr( pos, sTrim.length ) != sTrim )
					break;
			}

			return sOrg.substr(pos);
		},


		/**
		 * 해당 데이터를 암호화 처리
		 * @param {string} strString	- 대상 문자열
		 * @return {string}String	- 변환 문자열
		 * @example 
		 * Iject.Util.encProc(str);
		 * @memberOf Iject.Util
		 */
		encProc : function( sSource )
		{
			if( !Eco.isEmpty( sSource ) )
			{

				var base64 =   nexacro.base64Encode(input)

				return base64;
			} else {
				return "";
			}
		},


		/**
		 * 해당 데이터를 복호화 처리
		 * @param {string} strString	- 대상 문자열
		 * @return {string}String	- 변환 문자열
		 * @example
		 *  Iject.Util.decProc(str);
		 * @memberOf Iject.Util
		 */
		decProc : function (sSource)
		{
			if( !Eco.isEmpty( sSource ) )
			{

				var debase64 = nexacro.base64Decode(sSource);
				return debase64.getText(0);
			} else {
				return "";
			}
		},


		/**
		 * 주민등록번호 여부를 확인한다.
		 * @param {string} sJuminNo 입력문자열(주민번호 13자리)
		 * @return {string}  Boolen 형식의 정합성 체크
		 * @example
		 * var str = "123456-7554545";
		 * Iject.Util.isSSN(str);
		 * @memberOf Iject.Util
		 */
		isSSN : function(sJuminNo)
		{
			sJuminNo = Iject.Util.replaceAll(sJuminNo, "-", "");
			
			var birthYear   = Iject.Util.getBefo(sJuminNo);
			birthYear  += sJuminNo.substr(0, 2);
			var birthMonth 	= sJuminNo.substr(2, 2) - 1;
			var birthDate 	= sJuminNo.substr(4, 2);
			var birth 		= new Date(birthYear, birthMonth, birthDate);

			if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
					birth.getMonth() != birthMonth ||
					birth.getDate() != birthDate)
			{
				return false;
			}

			// Check Sum 코드의 유효성 검사
			buf = new Array(13);
			for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
			for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));

			multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
			for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

			if ((11 - (sum % 11)) % 10 != buf[12])
			{
				return false;
			} else {
				return true;
			}
		},

		/**
		 * 주민번호 뒷 첫번째 자리로 년대를 return 한다
		 * @param {string} strRsrno 입력문자열(주민번호 13자리)
		 * @return {boolen}  Boolen 형식의 정합성 체크
		 * @example
		 *  var str = "123456-7554545";
		 * Iject.Util.getBefo(str);
		 * @memberOf Iject.Util
		 */
		getBefo : function(strRsrno)
		{
			if (strRsrno.toString().length != 13)
			{
				return "N";
			}

			if (!(strRsrno).match(/^\d{6}\d{7}$/))
			{
				return "N";
			}

			var vGb = strRsrno.substr(6,1);

			if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6')
			{
				return '19';
			} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
				return '20';
			}
		},

		/**
		 * 주민번호로 성별을 Return 한다.trRsrn
		 * @param {string} strRsrno 입력문자열(주민번호 13자리)
		 * @return {string}  남자 'M' 여자 'W' 기타 'X'
		 * @example
		 *   var str = "123456-7554545";
		 * Iject.Util.getSex(str);
		 * @memberOf Iject.Util
		 */
		getSex : function(strRsrno)
		{
			strRsrno = Iject.Util.replaceAll(strRsrno, "-", "");
			
			if (!(this.isSSN(strRsrno)))
				return false;

			var vSexGb = strRsrno.substr(6,1);

			if (vSexGb == '1' || vSexGb == '3' || vSexGb == '5' || vSexGb == '7') {
				return "M";
			} else if (vSexGb == '2' || vSexGb == '4' || vSexGb == '6' || vSexGb == '8') {
				return "W";
			} else {
				return "X";
			}
		},

		/**
		 * 생년 월일 또는 주민 번호로 법적연령-만나이를 구한다.
		 * @param {string} sValue	- 생년 월일 또는 주민 번호
		 * @param {string} sDate 	- 기준일자
		 * @return {boolen}  나이 또는 true/false
		 * @example
		 *  var str = "123456-7554545";
		 * Iject.Util.getAge(str);
		 * @memberOf Iject.Util
		 */
		getAge : function(sValue, sDate)
		{
			var vYear;
			var vMonth;
			var vDay;
			
			sValue = Iject.Util.replaceAll(sValue, "-", "");
			
			if (nexacro.trim(sValue).length == 13)
			{
				// 주민번호 정합성 체크
				if (!this.isSSN(sValue)) return false;

				var vBefor = this.getBefo(sValue);
				if (vBefor == "N") return false;

				sValue 	= vBefor + sValue;
				vYear 	= parseInt(sValue.substr(0, 4), 10);
				vMonth 	= parseInt(sValue.substr(4, 2), 10);
				vDay 	= parseInt(sValue.substr(6, 2), 10);

			} else if (Trim(sValue).length == 8) {

				vYear 	= parseInt(sValue.substr(0, 4), 10);
				vMonth 	= parseInt(sValue.substr(4, 2), 10);
				vDay 	= parseInt(sValue.substr(6, 2), 10);

				if (!this.isDate(sValue)) return false;

			} else {
				return false;
			}

			var vCurrentSystemDate;

			if (this.isDate(sDate) == true)
			{
				vCurrentSystemDate = sDate;
			} else if (Eco.isEmpty(sDate) != "") {
				return false;
			}

			var vCurrentSystemYear 	= parseInt(vCurrentSystemDate.substr(0, 4), 10);
			var vCurrentSystemMonth = parseInt(vCurrentSystemDate.substr(4, 2), 10);
			var vCurrentSystemDay 	= parseInt(vCurrentSystemDate.substr(6, 2), 10);
			var vAge = vCurrentSystemYear - vYear;

			if (vMonth > vCurrentSystemMonth)
			{
				vAge = vAge - 1;

			} else if (vMonth == vCurrentSystemMonth) {

				if (vDay > vCurrentSystemDay)
				{
					vAge = vAge - 1;
				}
			}

			if (vAge < 0)
			{
				vAge = 0;
			}

			return vAge;
		},

		/**
		 * 사업자 등록번호 확인
		 * @param {string} 사업자 등록 번호
		 * @return {boolen}  true/false
		 * @example
		 *  var str = "123456-7554545";
		 * Iject.Util.isCompRegNo(str);
		 * @memberOf Iject.Util
		 */
		isCompRegNo : function(sValue)
		{
			if( Eco.isEmpty(sValue) )	return false;
			
			var vCompNo = Iject.Util.replaceAll(sValue, "-", "");
			
			var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
			var i, Sum=0, c2, remander;

			if (vCompNo.length != 10)
				return false;

			for (i = 0; i <= 7; i++)
				Sum += checkID[i] * vCompNo.charAt(i);

			c2 = "0" + (checkID[8] * vCompNo.charAt(8));
			c2 = c2.substring(c2.length - 2, c2.length);

			Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

			remander = (10 - (Sum % 10)) % 10;

			if (Math.floor(vCompNo.charAt(9)) != remander)
				return false;
			return true;

		},

		/**
		 * 법인 등록번호 확인
		 * @param {string} 법인 등록 번호
		 * @return {boolen}  true/false
		 * @example
		 *  var str = "123456-7554545";
		 * Iject.Util.isCorpRegNo(str);
		 * @memberOf Iject.Util
		 */
		isCorpRegNo : function(sValue)
		{
			if( Eco.isEmpty(sValue) )	return false;

			var corpNo = Iject.Util.replaceAll(sValue, "-", "");
			
			corpNo = corpNo.trim();
			if (corpNo.length != 13){
				return false;
			}
			
			var i = 0;
			// Check Sum 코드의 유효성 검사
			var buf = new Array(13);
			for (i = 0; i < 13; i++) buf[i] = parseInt(corpNo.charAt(i));
		 
			var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
			for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

			if(10 - sum.toString().substring(sum.toString().length*1 - 1,sum.toString().length*1)*1 != buf[12]) return false;
		 
			return true;
    			
// 			var checkID = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
// 			var i, Sum=0, c2, remander;
// 
// 			if (vCorpNo.length != 13)
// 				return false;
// 
// 			for (i = 0; i < 12; i++)
// 				Sum += checkID[i] * vCorpNo.charAt(i);
// 
// 			remander = Sum / 10;
// 			var nIndex = remander.toString().indexOf(".");
// 			remander = remander.toString().substring(nIndex + 1, nIndex + 2);
// 			remander = 10 - remander;
// 
// 			if (remander > 9 )
// 				remander = 0;
// 
// 			if (remander == sValue.substring(12, 13))
// 				return true;
// 
// 			return false
		},

		/**
		 * 외국인 등록번호 여부를 확인한다.
		 * @param {string} strNo 입력문자열(등록번호13자리)
		 * @return {boolen}  true/false
		 * @example
		 * var str = "123456-7554545";
		 * Iject.Util.isFrnrIdNo(str);
		 * @memberOf Iject.Util
		 */
		isFrnrIdNo : function(strNo)
		{
			strNo = Iject.Util.replaceAll(strNo, "-", "");
			
			if (strNo.length != 13 || !nexacro.isNumeric(strNo)) return false;

			var month = nexacro.toNumber(strNo.substr(2, 2));
			var day	  = nexacro.toNumber(strNo.substr(4, 2));

			if (month < 1 || month > 12) return false;
			if (day < 1 || day > 31) return false;

			var sum = 0;
			var odd = 0;
			var buf = new Array(13);
			var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];

			for (var i=0; i<13; i++)
			{
				buf[i] = nexacro.toNumber(strNo.charAt(i));
			}

			if (buf[11] < 6) return false;

			odd = buf[7] * 10 + buf[8];
			if((odd%2) != 0) return false;

			for (var i=0; i<12; i++)
			{
				sum += (buf[i] * multipliers[i]);
			}

			sum = 11 - (sum % 11);

			if (sum >= 10) sum -= 10;
			sum += 2;
			if (sum >= 10) sum -= 10;

			if (buf[12] == sum)
			{
				return true;
			} else {
				return false;
			}
		},


		/**
		 * 카드번호 여부를 확인한다.
		 * @param {string}strNo 입력문자열(카드번호13자리)
		 * @return {boolen}  true/false
		 * @example
		 * var str="111111-1111111";
		 *  Iject.Util.isCardNo(str);
		 * @memberOf Iject.Util
		 */
		isCardNo : function(strNo)
		{
			strNo = Iject.Util.replaceAll(strNo, "-", "");
			if (strNo.length < 13 || strNo.length > 19 || !nexacro.isNumeric(strNo)) return false;

			var sum = 0;
			var buf = new Array();

			for (var i=0; i<strNo.length; i++)
			{
				buf[i] = nexacro.toNumber(strNo.charAt(i));
			}

			var temp;
			for (var i=buf.length-1, j=0; i>=0; i--, j++)
			{
				temp = buf[i] * ((j%2) + 1);
				if (temp >= 10)
				{
					temp = temp - 9;
				}
				sum += temp;
			}

			if ((sum % 10) == 0)
			{
				return true;
			} else {
				return false;
			}
		},


		/**
		 * E-메일 형식에 맞는지 Check한다
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * Iject.Util.isEmail("aaaa@naver.com");
		 * @memberOf Iject.Util
		 */
		isEmail : function(strValue)
		{
			var retVal 	= false;
			var sTmp 	= "";
			var sRegExp = "[a-z0-9]+[a-z0-9.,-]+@[a-z0-9]+[a-z0-9.,-]+\\.[a-z0-9]+";

			var regexp = new RegExp(sRegExp,"ig");
			sTmp = regexp.exec(strValue);

			if( sTmp == null )
			{
				retVal = false;
			} else {

				if( ( sTmp.index == 0 ) && (sTmp[0].length == strValue.length ) )
				{
					retVal = true;
				} else {
					retVal = false;
				}
			}
			return retVal;
		},

		/**
		 *핸드폰(모바일) 전화번호 전체 유효성 check
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var sPhone ="010-2123-1111";
		 * Iject.Util.isHandPhone(sPhone);
		 * @memberOf Iject.Util
		 */
		isHandPhone : function(value)
		{
			//var pattern = /^(01[01346-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
			var pattern = /^(01[0179])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;

			return pattern.exec(Iject.Util.removeSpace(value)) ? true : false;
		},

		/**
		 *핸드폰(모바일) 전화번호 앞자리 유효성 체크 (010...)
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "010-1234-3333";
		 *  Iject.Util.isHandPhoneFront(value);
		 * @memberOf Iject.Util
		 */
		isHandPhoneFront : function(value)
		{	
			value = Iject.Util.replaceAll(value, "-", "");
			var pattern = /^(01[0179])/;	// 이전 스크립트 /^(01[0179])$/;
			return pattern.exec(Iject.Util.removeSpace(value)) ? true : false;
		},

		/**
		 *핸드폰(모바일) 전화번호 가운데 유효성 체크(오동작)
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "010-1234-3333";
		 * Iject.Util.isHandPhoneMid(value);
		 * @memberOf Iject.Util
		 */
		isHandPhoneMid : function(value)
		{
			value = Iject.Util.replaceAll(value, "-", "");
			var pattern = /^([1-9]{1}[0-9]{2,3})/;
	
			return pattern.exec(Iject.Util.removeSpace(value)) ? true : false;
		},
	
		/**
		 *핸드폰(모바일) 전화번호 뒷자리 유효성 체크(오동작)
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "010-1234-3333";
		 * Iject.Util.isHandPhoneLast(value);
		 * @memberOf Iject.Util
		 */
		isHandPhoneLast : function(value)
		{
			var pattern = /^([1-9]{1}[0-9]{2,3})$/;
	
			return pattern.exec(Iject.Util.removeSpace(value)) ? true : false;
		},
	
	
		/**
		 *일반 전화번호 유효성 check , 15XX-XXXX도 체크
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "010-1234-3333";
		 * Iject.Util.isPhone(value);
		 * @memberOf Iject.Util
		 */
		isPhone : function(value)
		{
			var pattern = /^(0[2-8][0-5]?|01[01346-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
			var pattern15xx = /^(1544|1566|1577|1588|1644|1688)-?([0-9]{4})$/;
	
			return pattern.exec(value) || pattern15xx.exec(value) ? true : false;
		},
	
	
		/**
		 *년월 정합성 체크
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "20160101";
		 * Iject.Util.isMonth(value);
		 * @memberOf Iject.Util
		 */
		isMonth : function(value)
		{
			var stringWrapper = new String(value);
	
			if( stringWrapper.toString().length !== 8 ) return false;
	
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
	
	
			if( iMonth < 1 || iMonth > 12 ) return false;
	
			return true;
		},
	
		/**
		 * 시간 정합성 체크
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "120101";
		 * Iject.Util.isTime(value);
		 * @memberOf Iject.Util
		 */
		isTime : function(val)
		{
			if (this.isDigit(val) != true)
			{
				return false;
			}
	
			if (val.trim().toString().length != 6)
			{
				return false;
			}
	
			var nHH = nexacro.toNumber(val.toString().substr(0, 2));
			var nMM = nexacro.toNumber(val.toString().substr(2, 2));
			var nSS = nexacro.toNumber(val.toString().substr(4, 2));
	
			if(Eco.isEmpty(nHH) || Eco.isEmpty(nMM) || Eco.isEmpty(nMM))
			{
				return false;
			}
	
			if(nHH > 23 || nHH < 0)
			{
				return false;
			}
	
			if(nMM > 59 || nMM < 0)
			{
				return false;
			}
	
			if(nSS > 59 || nSS < 0)
			{
				return false;
			}
	
			return true;
		},
	
	
		/**
		 * 숫자 정합성 체크
		 * @param {string}
		 * @return {boolen}  true/false
		 * @example
		 * var value = "120101";
		 * Iject.Util.isDigit(value);
		 * @memberOf Iject.Util
		 */
		isDigit : function(val)
		{
			var lvNum;
			var lvFlag 	 = "No";
			var lvRetVal = false;
			var lvLength;
			var i;
	
			if (Eco.isEmpty(val) == true)
			{
				lvFlag 	 = "Yes";
				lvRetVal = false;
				return lvRetVal;
			}
	
			lvLength = val.length;
	
			if ((val.toString().split(".").length > 2) && lvFlag == "No")
			{
				lvFlag 	 = "Yes";
				lvRetVal = false;
			}
	
			if (lvFlag == "No")
			{
				for (i = 0; i < lvLength ; i++)
				{
					lvNum = val.substr(i,1);
					if (i == 0)
					{
						if(nexacro.isNumeric(lvNum) || (lvNum == "-" && val.substr(1, 1) != ".")
								|| (lvNum == "+"  && val.substr(1, 1) != "."))
						{
							lvRetVal = true;
						} else {
							lvRetVal = false;
							break;
						}
					} else {
						if(nexacro.isNumeric(lvNum) || (lvNum == "." && val.substr(i+1, 1).length != 0))
						{
							lvRetVal = true;
						} else {
							lvRetVal = false;
							break;
						}
					}
				}
			}
	
			return lvRetVal;
		},
	
	
		/**
		 * 문자열이 숫자형식에 맞는지 여부 체크
		 * @param {string} sNum ( 체크할 문자열 )
		 * @return {boolen}  true/false
		 * @example
		 * var value = "120101";
		 * Iject.Util.isNum(value);
		 * @memberOf Iject.Util
		 */
		isNum : function(sNum)
		{
			var c;
			var point_cnt = 0;
			var ret = true;
	
			if( Eco.isEmpty(sNum) )	return false;
	
			for( i = 0 ; i < sNum.length ; i++ )
			{
				c = sNum.charAt(i);
				if( i == 0 && ( c == "+" || c == "-" ) );
				else if( c >= "0" && c <= "9" );
				else if( c == "." )
				{
					point_cnt++;
					if( point_cnt > 1 )
					{
						ret = false;
						break;
					}
				} else {
					ret = false;
					break;
				}
			}
	
			return ret;
		},
	
	
		/**
		 * 두 시간간의 차이 계산
		 * @param {string} sStartTime(HHmmss형태의 From 시간) 	( 예 : "033025" )
		 * @param {string}  sEndTime(HHmmss형태의 To 시간) 		( 예 : "034025" )
		 * @param {string}  sType(구하고자하는 타입(시, 분, 초)) ( 예 : "HH" )
		 * @return {boolen}  integer
		 * @example
		 * var sStartTime = "033025";
		 * var sEndTime = "034025";
		 * var sType = "HH";		 * 
		 * Iject.Util.diffTime(sStartTime, sEndTime, sType);
		 * @memberOf Iject.Util
		 */
		diffTime : function(sStartTime, sEndTime, sType)
		{
			var nReturnValue;
			var nFrom_HH = nexacro.toNumber(sStartTime.substring(0, 2));
			var nFrom_mm = nexacro.toNumber(sStartTime.substring(2, 4));
			var nFrom_ss = nexacro.toNumber(sStartTime.substring(4, 6));
	
			var nTo_HH = nexacro.toNumber(sEndTime.substring(0, 2));
			var nTo_mm = nexacro.toNumber(sEndTime.substring(2, 4));
			var nTo_ss = nexacro.toNumber(sEndTime.substring(4, 6));
	
			var nFromTotal_ss = (nFrom_HH * 3600) + (nFrom_mm * 60) + nFrom_ss;
			var nToTotal_ss   = (nTo_HH * 3600) + (nTo_mm * 60) + nTo_ss;
	
			if(sType == "HH")
			{
				return (Math.floor((nToTotal_ss - nFromTotal_ss) / 3600));
			} else if(sType == "mm") {
				return (Math.floor((nToTotal_ss - nFromTotal_ss) / 60));
			} else if(sType == "ss") {
				return (nToTotal_ss - nFromTotal_ss);
			}
		},

		/**
		 * 컴포넌트들의 필수입력여부체크
		 * @param {form} form object
		 * @param {oValidObjList}  컴포넌트 object 배열
		 * @return {boolen}  true/false
		 * @example
			var valid = 	
				[
					{component:this.Edit00, title:this.Static00}
					,{component:this.Combo00, title:this.Static01}
					,{component:this.Calendar00, title:"조회기간"}
				];
				
			if (!Iject.Util.validate(this, valid)) return false;
		 * @memberOf Iject.Util
		 */
		validate : function(o, oValidObjList)
		{
			var pThis = o;
			if(Eco.isEmpty(oValidObjList)) return false;
			
			var oValidObj;
			
			//컴포넌트 Object 목록체크
			if(Eco.isArray(oValidObjList))
			{		
				for(var i = 0; i < oValidObjList.length; i++)
				{			
					oValidObj = oValidObjList[i];
					if(!Iject.Util.validateComp(pThis, oValidObj))
					{
						return false;
					}
				}
			}

			return true;
		},
		
		/**
		 * 컴포넌트의 필수입력여부체크
		 * @param {form} form object
		 * @param {oValidObjList}  컴포넌트 object
		 * @return {boolen}  true/false
		 * @memberOf Iject.Util
		 */
		validateComp : function(o, oValidObj)
		{
			var pThis = o;
			var oComp = oValidObj.component;
			var sComp = oComp.toString();
			var sValue, sTitle, sRtn;
			
			if(oComp instanceof Div || oComp instanceof Tab || oComp instanceof Tabpage)
			{	
				return false;
			}

			if(oComp instanceof Grid)
			{
				var objBindDs = pThis.objects[oComp.binddataset];
				var nCellIdx = -1;
				var sColumn = oValidObj.bindcolumn;
				
				if(Eco.isEmpty(sColumn))
				{
					return false;
				}
				
				for(var i = 0; i < objBindDs.rowcount; i++)
				{
					nCellIdx = oComp.getBindCellIndex("body", sColumn);
					
					//해당컬럼을 에디트 가능한 경우에만 체크
		// 			if(oComp.getCellProperty("body", nCellIdx, "edittype") == "none")
		// 			{
		// 				trace(sColumn + " 의 edittype = none 상태");
		// 				continue;
		// 			}			
					
					sValue = objBindDs.getColumn(i, sColumn);
					
					sTitle = oValidObj.title;
					if(Eco.isEmpty(oValidObj.title))
					{
						sTitle = oComp.getCellProperty("head", nCellIdx, "text");
					}			
					
					if(Eco.isEmpty(sValue))
					{				
						//해당 셀로 커서이동
						oComp.setFocus();
						oComp.setCellPos(nCellIdx);
						objBindDs.set_rowposition(i);
						Iject.alertP(pThis, "errors.required", null, [sTitle], function(svcid, variant){});
						return false;
					}
				}	
			}
			else
			{
				//에디트가 불가능한 상태인 경우 체크하지않음
				if(oComp.readonly == true || oComp.enable == false)
				{
					//trace(sComp+"은 readonly = true or enable = false 상태");
					return true;
				}
				
				if(oValidObj.title instanceof Static) sTitle = oValidObj.title.text;
				else sTitle = oValidObj.title;
				
				sValue = oComp.value;
				
				if(Eco.isEmpty(sValue))
				{
					oComp.setFocus();
					Iject.alertP(pThis, "errors.required", null, [sTitle], function(svcid, variant){});
					return false;
				}
			}			
			
			return true;
		}
	//end function
	});

}