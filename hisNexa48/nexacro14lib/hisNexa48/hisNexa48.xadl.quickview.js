(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "hdm", "form", "./hdm/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "img", "file", "./img/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "scripts", "js", "./scripts/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "com", "form", "./com/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "his", "JSP", "http://localhost:8282/his/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "pic", "JSP", "http://localhost/his/images/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "acc", "form", "./acc/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "hrs", "form", "./hrs/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "log", "form", "./log/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "mcm", "form", "./mcm/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "pre", "form", "./pre/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "sup", "form", "./sup/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "file", "./nexacro14lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "IjectJS", "file", "./nexacro14lib/component/IjectJS/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "EcoLibrary", "file", "./nexacro14lib/component/EcoLibrary/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Lib", "js", "./Lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Guide", "form", "./Guide/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Template", "form", "./Template/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Sample", "form", "./Sample/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Comm", "form", "./Comm/", "", null, "", "0", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gvTabIndex", "0", false);
            this._addVariable("rsvtNo", null, false);
            this._addVariable("gv_system", "PMS", false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gdsPrcsReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"gdsAnspNo\" type=\"STRING\" size=\"256\"/><Column id=\"anspHistNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptNo\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptDate\" type=\"STRING\" size=\"256\"/><Column id=\"buyReceiptRespoWorker\" type=\"STRING\" size=\"256\"/><Column id=\"cust\" type=\"STRING\" size=\"256\"/><Column id=\"custCd\" type=\"STRING\" size=\"256\"/><Column id=\"buyKind\" type=\"STRING\" size=\"256\"/><Column id=\"inptYn\" type=\"STRING\" size=\"256\"/><Column id=\"prcsQnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gdsEmp", this);
            obj.addEventHandler("onrowposchanged", this.dsHmEmp_onrowposchanged, this);
            obj._setContents("<ColumnInfo><Column id=\"payDate\" type=\"STRING\" size=\"256\"/><Column id=\"zipCd\" type=\"STRING\" size=\"256\"/><Column id=\"workStatus\" type=\"STRING\" size=\"256\"/><Column id=\"workPeriod\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"rrn\" type=\"STRING\" size=\"256\"/><Column id=\"retMonthWorkingdays\" type=\"STRING\" size=\"256\"/><Column id=\"retDate\" type=\"STRING\" size=\"256\"/><Column id=\"pms\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"permaddr\" type=\"STRING\" size=\"256\"/><Column id=\"payStep\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"natnt\" type=\"STRING\" size=\"256\"/><Column id=\"mateYn\" type=\"STRING\" size=\"256\"/><Column id=\"localYn\" type=\"STRING\" size=\"256\"/><Column id=\"jobtt\" type=\"STRING\" size=\"256\"/><Column id=\"jobrk\" type=\"STRING\" size=\"256\"/><Column id=\"jobcl\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"hireDiv\" type=\"STRING\" size=\"256\"/><Column id=\"hireDate\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"frignSingleTxrate\" type=\"STRING\" size=\"256\"/><Column id=\"forinNum\" type=\"STRING\" size=\"256\"/><Column id=\"fax\" type=\"STRING\" size=\"256\"/><Column id=\"extsn\" type=\"STRING\" size=\"256\"/><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"empNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"birthday\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"detailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"bankNm\" type=\"STRING\" size=\"256\"/><Column id=\"accountNm\" type=\"STRING\" size=\"256\"/><Column id=\"sts\" type=\"STRING\" size=\"256\"/><Column id=\"lunar\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("nexa");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("hisNexa48.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1255", "965", null, null, this);
            mainframe.set_resizable("false");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("서울병원정보시스템");
            mainframe.set_showcascadestatustext("false");
            mainframe.set_showcascadetitletext("false");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.registerScript("hisNexa48.xadl", function() {
        this.application_onload = function(obj,e)
        {
        	var loginFrame = new ChildFrame();
        	
        	loginFrame.init("LOGIN","absolute", 400, 300, 536, 376,null,null,"com::CM_LoginForm.xfdl");
        	loginFrame.set_openalign("center middle");
        	loginFrame.showModal("LOGIN");
        	
        	Iject.initSystem(obj);
            Iject.appOnload(obj);
        }
        
        });


        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("hisNexa48.xtheme");


    };
}
)();
