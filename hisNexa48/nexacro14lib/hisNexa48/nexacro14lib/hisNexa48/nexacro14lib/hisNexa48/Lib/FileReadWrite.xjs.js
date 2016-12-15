//XJS=FileReadWrite.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        * 파일을 읽는다.
        * @param {form} form component
        * @param {object} config 속성
        				filepath : 파일의 경로(null인경우 파일다이얼로그 오픈)
        				filename : 파일명
        				directory : 기본디렉토리명(%MYDOCUMENT% , %DOCUMENT%, %USERAPP%, %INSTALLROOT%)
        				recordvalue : 파일에 기록한 값
        * @param {object} callback function
        * @example
        * @memberOf this
        */

        this.gfn_readFile = function(pThis,config,callback)
        {	
        	var bDialog = true;
        	var directory;
        	var filename;
        	var recordvalue;
        	var filepath;
        	var recordvalue;
        	var sFileDialog = "file_readwrite";
        	var sVirtualFile = "vfile_readwrite";
        	
        	//기본설정
        	if(!Eco.isEmpty(config))
        	{
        		bDialog = Eco.isEmpty(config.filepath)? true : false;
        		directory = Eco.isEmpty(config.directory) ? "%DOCUMENT%" : config.directory;
        		filename = Eco.isEmpty(config.filename) ? "" : config.filename;
        		recordvalue = Eco.isEmpty(config.recordvalue) ? "" : config.recordvalue;
        		filepath = Eco.isEmpty(config.filepath) ? "" : config.filepath;
        	}
        	
        	//virtualfile 생성	
        	var objVirtualFile = pThis.objects[sVirtualFile];
        	if(Eco.isEmpty(objVirtualFile))
        	{
        		objVirtualFile = new VirtualFile();
        		pThis.addChild(sVirtualFile, objVirtualFile);
        		objVirtualFile.addEventHandler("onsuccess", pThis._gfn_virtualfile_onsuccess, pThis);
        		objVirtualFile.addEventHandler("onerror", pThis._gfn_virtualfile_onerror, pThis);
        	}
        	objVirtualFile._pThis = pThis;
        	objVirtualFile._callback = callback;
        	objVirtualFile._type = "read";
        	if(bDialog)
        	{
        		var objFileDialog = pThis.objects[sFileDialog];

        		if(Eco.isEmpty(objFileDialog))
        		{
        			objFileDialog = new FileDialog();  
        			pThis.addChild(sFileDialog, objFileDialog);
        			objFileDialog.addEventHandler("onclose", function(obj, e){
        				if(e.reason == 1) 
        				{
        					objVirtualFile.open(e.virtualfiles[0].fullpath, nexacro.VirtualFile.openRead);
        				}
        			}, pThis);
        		}
        		objFileDialog.open("FileOpen", FileDialog.LOAD, directory, filename);
        	}
        	else
        	{
        		var bSucc = objVirtualFile.createDirectory(filepath, true);
        		if(bSucc)
        		{
        			objVirtualFile.open(filepath + filename, nexacro.VirtualFile.openRead);
        		}
        	}
        }

        /**
        * 파일을 쓴다.
        * @param {form} form component
        * @param {object} config 속성
        				filepath : 파일의 경로(null인경우 파일다이얼로그 오픈)
        				filename : 파일명
        				directory : 기본디렉토리명(%MYDOCUMENT% , %DOCUMENT%, %USERAPP%, %INSTALLROOT%)
        				recordvalue : 파일에 기록한 값
        * @param {object} callback function
        * @example
        * @memberOf this
        */
        this.gfn_writeFile = function(pThis,config,callback)
        {
        	var bDialog = true;
        	var directory;
        	var filename;
        	var recordvalue;
        	var filepath;
        	var recordvalue;
        	var sFileDialog = "file_readwrite";
        	var sVirtualFile = "vfile_readwrite";
        	
        	if(!Eco.isEmpty(config))
        	{
        		bDialog = Eco.isEmpty(config.filepath)? true : false;
        		directory = Eco.isEmpty(config.directory) ? "%DOCUMENT%" : config.directory;
        		filename = Eco.isEmpty(config.filename) ? "" : config.filename;
        		recordvalue = Eco.isEmpty(config.recordvalue) ? "" : config.recordvalue;
        		filepath = Eco.isEmpty(config.filepath) ? "" : config.filepath;
        	}
        	
        	var objVirtualFile = pThis.objects[sVirtualFile];
        	if(Eco.isEmpty(objVirtualFile))
        	{
        		objVirtualFile = new VirtualFile();
        		pThis.addChild(sVirtualFile, objVirtualFile);
        		objVirtualFile.addEventHandler("onsuccess", pThis._gfn_virtualfile_onsuccess, pThis);
        		objVirtualFile.addEventHandler("onerror", pThis._gfn_virtualfile_onerror, pThis);
        	}
        	objVirtualFile._pThis = pThis;
        	objVirtualFile._callback = callback;
        	objVirtualFile._type = "write";
        	objVirtualFile._record = recordvalue;
        	if(bDialog)
        	{
        		var objFileDialog = pThis.objects[sFileDialog];

        		if(Eco.isEmpty(objFileDialog))
        		{
        			objFileDialog = new FileDialog();  
        			pThis.addChild(sFileDialog, objFileDialog);
        			objFileDialog.addEventHandler("onclose", function(obj, e){
        				if(e.reason == 2){
        					objVirtualFile.open(e.virtualfiles[0].fullpath, nexacro.VirtualFile.openWrite);
        					//objVirtualFile.write(recordvalue);
        				}
        			}, pThis);
        		}	
        		objFileDialog.open("FileSave", FileDialog.SAVE, directory, filename);
        	}
        	else
        	{
        		var bSucc = objVirtualFile.createDirectory(filepath, true);
        		if(bSucc)
        		{
        			objVirtualFile.open(filepath + filename, nexacro.VirtualFile.openWrite);		
        			//objVirtualFile.write(recordvalue);
        		}
        	}
        }

        
        this._gfn_virtualfile_onsuccess = function(obj,e)
        {
        	/*	
        	  e.reason
        		 open         		1    
        		 close        		2    
        		 read         		3    Read data (binarydata, textdata)
        		 readLine     		4    Read Line data (textdata)
        		 seek         		5    
        		 write        		6    
        		 remove       		7    
        		 getFileList  		8    FileAttribute array (fileattributelist)
        		 getFileSize  		9    File size (filesize)
        		 isExist     		10    boolean (fileisexist)
        		 createDirectory 	11
        		 deleteDirectory 	12
        		 renameDirectory 	13
        	*/	  
        	//trace("_gfn_virtualfile_onsuccess : e.reason = " + e.reason);
        	var pThis = obj._pThis;	
        	var callback = obj._callback;
        	
        	switch (e.reason)
        	{
        		case 1:		// open
        			///trace("open!!!");
        			if(obj._type == "read")	 obj.read();
        			if(obj._type == "write") obj.write(obj._record);
        			break;
        		case 2:		// close
        			//trace("close success!!!");	
        			break;							
        		case 3:		// read
        			//trace("read success!!!");
        			callback.call(pThis, e.textdata);
        			obj.close();	
        			break;
        		case 4:		// readLine
        			break;
        			
        		case 5:		// seek
        			break;
        			
        		case 6:		// write
        			//trace("write success!!!");
        			callback.call(pThis, true);
        			obj.close(); 
        			break;
        			
        		case 7:		// remove
        			//trace("remove success!!!");
        			break;
        			
        		case 8:		// getFileList
        			break;
        		case 9:		// getFileSize
        			break;
        			
        		case 10:	// isExist
        			if (e.fileisexist)	
        				trace("존재하는 파일입니다. : " + e.fileisexist);
        			else
        				trace("없는 파일입니다. : " +  e.fileisexist);
        			break;			
        	}
        }

        this._gfn_virtualfile_onerror = function(obj,e)
        {
        	/*
        	0001	Parameter Error
        	1101	I/O Error
        	1102	permission denied
        	1103	Irregular Expression error
        	1104	Can not be removed
        	1105	Does not exist
        	1106	Exist file
        	*/
        	var pThis = obj._pThis;	
        	var callback = obj._callback;
        	trace("에러 ===> "+e.errormsg);
        	
        	callback.call(pThis, false);
        }

        
        // this._gfn_filedialog_onclose = function(obj:FileDialog, e:nexacro.FileDialogEventInfo)
        // {	
        // 	/*
        // 	e.reason
        // 		0  취소
        // 		1  FileDialog.LOAD 옵션으로 열린 후 1개의 파일을 선택하고 닫은 경우
        // 		2  FileDialog.SAVE 옵션으로 열린 후 1개의 파일을 선택하고 닫은 경우
        // 		3  FileDialog.MULTILOAD 옵션으로 열린 후 여러 개의 파일을 선택하고 닫은 경우
        // 		4  FileDialog.SELFOLDER 옵션으로 열린 후 디렉토리만 선택하고 닫은 경우
        // 	*/
        // 	trace("_gfn_filedialog_onclose : e.reason = "+e.reason);	
        // 	
        // 	var sVirtualFile = this._VIRTUAL_FILE;
        // 	var objVirtualFile = this.objects[sVirtualFile];
        // 	if(Eco.isEmpty(objVirtualFile))
        // 	{
        // 		objVirtualFile = new VirtualFile();
        // 		this.addChild(sVirtualFile, objVirtualFile);
        // 		objVirtualFile.addEventHandler("onsuccess", this._gfn_virtualfile_onsuccess, this);
        // 		objVirtualFile.addEventHandler("onerror", this._gfn_virtualfile_onerror, this);
        // 	}	
        // 	
        // 	if(e.reason==1) 
        // 	{
        // 		var rtn = objVirtualFile.open(e.virtualfiles[0].fullpath, nexacro.VirtualFile.openRead);
        // 		objVirtualFile.read();
        // 	}
        // 	else if(e.reason==2) 
        // 	{	
        // 		var rtn = objVirtualFile.open(e.virtualfiles[0].fullpath, nexacro.VirtualFile.openWrite);		
        // 		var bSuc = objVirtualFile.write("test!!");
        // 	}
        // 
        // }

        
        /**
        * 데이타셋을 구분자를 포함한 문자열로 반환
        * @param {dataset} dataset object
        * @param {string} delimeter 구분자값(defualt : 공백)
        * @example
        * @memberOf this
        */
        this.gfn_datasetToString = function(dsObj,delimeter)
        {
        	if(Eco.isEmpty(delimeter)) delimeter = " ";
        	var rtn = "", rtns, value, values;
        	
        	rtns = [];
        	for(var i = 0; i < dsObj.getRowCount(); i++)
        	{
        		values = [];
        		for(var j = 0; j < dsObj.getColCount(); j++)
        		{
        			value = dsObj.getColumn(i, j);
        			values.push(value);
        		}
        		rtns.push(values.join(delimeter));
        	}	
        	return rtns.join("\n");
        }

        /**
        * 그리드의 값을 구분자를 포함한 문자열로 반환
        * @param {dataset} dataset 	object
        * @param {string} delimeter 구분자값(defualt : 공백)
        * @param {string} type  	그리드의 value 또는 text값 설정(default : value)
        * @example
        * @memberOf this
        */
        this.gfn_gridToString = function(grdObj,delimeter,type)
        {
        	if(Eco.isEmpty(delimeter)) 	delimeter = " ";
        	if(Eco.isEmpty(type)) 		type = "value";
        	
        	var dsObj = grdObj.getBindDataset();
        	var rtn = "", rtns, value, values;
        	
        	rtns = [];
        	for(var i = 0; i < dsObj.getRowCount(); i++)
        	{
        		values = [];
        		for(var j = 0; j < grdObj.getCellCount("body"); j++)
        		{
        			if(type == "value") value = grdObj.getCellValue(i, j);
        			else				value = grdObj.getCellText(i, j);
        			values.push(value);
        		}
        		rtns.push(values.join(delimeter));
        	}	
        	return rtns.join("\n");
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
