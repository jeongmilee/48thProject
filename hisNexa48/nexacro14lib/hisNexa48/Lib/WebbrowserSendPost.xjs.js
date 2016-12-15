//XJS=WebbrowserSendPost.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        * Webbrowser컴포넌트를 사용하여 POST방식으로 데이타를 전송한다.
        * nexacro를 buffer를 지원하지않기때문에 POST방식으로 전송이 불가능(Webbrowser, MSIE Plugin 모두 사용불가능!!!)
        * @param {form} 		objParent - form component
        * @param {webbrowser} 	objWb - webbrowser component
        * @param {string} 		sUrl - 전송할 서버주소
        * @param {string} 		sParam - 파라미터
        * @example
        * @memberOf this
        */

        this.gfn_sendPost = function(objParent,objWb,sUrl,sParam)
        {
        	if(nexacro.Browser == "Runtime"){ //runtime
        		var str;
        		str +='<html>                                                                                                                            '; 
        		str +='<title>                                                                                                                           ';
        		str +='</title>                                                                                                                          ';
        		str +='<head>                                                                                                                            ';
        		str +='<meta charset="UTF-8">                                                                                                            ';
        		str +='</head>                                                                                                                           ';
        		str +='<body>                                                                                                                            ';
        		str +='<form id="postform" name="postform" action="'+sUrl+'" method="post" accept-charset="utf-8">										 ';
        		str +='	<input type="hidden" id="aa" name="aa" value="ID">                                                                           	 ';
        		str +='	<input type="hidden" id="bb" name="bb" value="PW">                                                                           	 ';
        		str +='</form>                                                                                                                           ';
        		str +='<script type="text/javascript">                                                                                                   ';
        		str +='	document.title = "testWeb";                                                                                                      ';
        		str +='	document.postform.submit();                                                                                                      ';
        		str +='</script>                                                                                                                         ';
        		str +='</body>                                                                                                                           ';
        		str +='</html>                                                                                                                           ';

        		objWb.getProperty("document").callMethod("Write", str);
        		objWb.getProperty("document").callMethod("Close");	
        		return;
        	} else if(nexacro.Browser == "IE" && nexacro.BrowserVersion == 8) { //IE8	
        		objWb.set_url(sUrl + "?" + sParam);
        		return;
        	}

        	// html5
        	// add new webbrowser component to initialize web page.
        	
        	var nL = objWb.left;
        	var nT = objWb.top;
        	var nW = objWb.width;
        	var nH = objWb.height;
        	var nR = objWb.right;
        	var nB = objWb.bottom;
        	var sName = objWb.name;
        	
        	objParent.removeChild(objWb.name);
        	objWb.destroy();
        	objWb = null;
        	
        	objWb = new WebBrowser();  
        	objWb.init(sName, "absolute", nL, nT, nW, nH, nR, nB);
        	objParent.addChild(sName, objWb); 
        	objWb.show(); 

        	var iframeObj = document.getElementById(objWb._ifrm_elem._object_id);
        	var iFrameDoc;
        	var iFrameBody;
        	if ( iframeObj.contentDocument ) 
        	{
        		iFrameDoc = iframeObj.contentDocument;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	} else if ( iframeObj.contentWindow ) {
        		iFrameDoc = iframeObj.contentWindow.document;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	}	
        	if(!iFrameBody)
        	{
        		iFrameBody = iFrameDoc.createElement("body");
        		iFrameDoc.appendChild(iFrameBody);   
        	}
        	
        	var form = iFrameDoc.createElement("form");
        	form.id = "postform";
        	form.name = "postform";
        	form.action = sUrl;
        	form.method = "post";
        	iFrameBody.appendChild(form);   
        	
        	var arr = sParam.split(/&/g);
        	var sHtml;
        	for(var i = 0; i < arr.length; i++)
        	{
        		var sValue = "";
        		var arrVal = "";
        		var arr2 = arr[i].split("=");

        		for(var j = 1; j < arr2.length; j++)
        		{
        			if(j == 1) 
        				arrVal += arr2[j];
        			else 
        				arrVal += "=" + arr2[j];			
        		}

        		if(arrVal.length > 0)
        		{
        			sValue = arrVal;
        		} else {
        			sValue = arr2[1];
        		}
        		
        	   if(arr2[0] && arr2[0].length > 0)
        	   {
        			var input = iFrameDoc.createElement("input");
        			input.id 	= arr2[0];
        			input.name 	= arr2[0];
        			input.type 	= "hidden";			
        			input.value	= sValue; 
        			form.appendChild(input);   
        	   }
        	}
        	
        	try {
        		var script = iFrameDoc.createElement('script');
        		script.type = 'text/javascript';
        		script.charset = 'utf-8';
        		script.defer = true;
        		script.async = true;
        		script.onload = function () {
        		}
        		var sDomain = "document.domain = \"" + document.domain + "\";";
        		script.text = [sDomain].join('');
        		iFrameBody.appendChild(script);	
        	} catch (e) {
        	}
        	
        	if(iFrameDoc.getElementById('postform'))
        	{
        		iFrameDoc.getElementById('postform').submit();
        	}

        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
