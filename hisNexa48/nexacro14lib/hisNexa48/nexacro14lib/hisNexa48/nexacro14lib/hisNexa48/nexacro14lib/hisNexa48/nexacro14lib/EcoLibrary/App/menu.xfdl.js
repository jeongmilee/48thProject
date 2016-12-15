(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("menu");
                this.set_classname("menu");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,240,768);
            }
            this.style.set_background("#5659e7ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"namespace\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"docFileName\" type=\"STRING\" size=\"256\"/><Column id=\"mainIconBackground\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"namespace\"/><Col id=\"name\">Namespace</Col><Col id=\"level\">0</Col><Col id=\"docFileName\"/><Col id=\"mainIconBackground\"/></Row><Row><Col id=\"namespace\">Namespace</Col><Col id=\"name\">Namespace</Col><Col id=\"level\">1</Col><Col id=\"docFileName\">JsNamespace</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_001_Namespace.png') center middle;</Col></Row><Row><Col id=\"namespace\"/><Col id=\"name\">Eco</Col><Col id=\"level\">0</Col><Col id=\"mainIconBackground\"/></Row><Row><Col id=\"namespace\">Eco</Col><Col id=\"name\">Eco</Col><Col id=\"level\">1</Col><Col id=\"docFileName\"/><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_002_Eco.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.array</Col><Col id=\"name\">array</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_003_Array.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.date</Col><Col id=\"name\">date</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_004_Date.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.number</Col><Col id=\"name\">number</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_005_Number.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.object</Col><Col id=\"name\">object</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_006_Object.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.string</Col><Col id=\"name\">string</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_007_String.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.Color</Col><Col id=\"name\">Color</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_008_Color.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.Json</Col><Col id=\"name\">Json</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_009_Json.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.Logger</Col><Col id=\"name\">Logger</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_010_Logger.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.LocalStorage</Col><Col id=\"name\">LocalStorage</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_016_LocalStorage.png') center middle;</Col></Row><Row><Col id=\"namespace\"/><Col id=\"name\">XComp</Col><Col id=\"level\">1</Col><Col id=\"mainIconBackground\"/></Row><Row><Col id=\"namespace\">Eco.XComp</Col><Col id=\"name\">XComp</Col><Col id=\"level\">2</Col><Col id=\"docFileName\"/><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_011_XComp.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.XComp.PositionSize</Col><Col id=\"name\">PositionSize</Col><Col id=\"level\">2</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_012_PositionSize.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.XComp.Style</Col><Col id=\"name\">Style</Col><Col id=\"level\">2</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_013_Style.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.XComp.Event</Col><Col id=\"name\">Event</Col><Col id=\"level\">2</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_014_Event.png') center middle;</Col></Row><Row><Col id=\"namespace\">Eco.XComp.Factory</Col><Col id=\"name\">Factory</Col><Col id=\"level\">2</Col><Col id=\"mainIconBackground\">#ffffffff URL('Images::class/MF_015_Factory.png') center middle;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "4", "0", "236", "69", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("LF_sta_Logo");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu", "absolute", "4", "69", null, null, "0", "1", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_cssclass("LF_grd_TreeMenu");
            obj.style.set_treelinetype("3 solid #a5b6b6ff");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:name\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "4", null, null, "0", this);
            obj.set_taborder("1");
            obj.style.set_background("#3c3c44ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 240, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("menu");
            		p.set_titletext("New Form");
            		p.style.set_background("#5659e7ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("menu.xfdl", function() {

        this.grd_menu_oncelldblclick = function(obj,e)
        {
        	var namespace = this.ds_menu.getColumn(e.row, "namespace");
        	
        	if ( Eco.isEmpty(namespace) ) return;
        	
        	this.showWork(namespace);
        	
        	var topFrame = application.mainframe.HFrameSet.VFrameSet.topFrame;
        	
        	topFrame.form.setTitle(namespace);
        }

        this.showWork = function(namespace)
        {	
        	var frameSet = application.mainframe.HFrameSet.VFrameSet.FrameSet;	
        	var name = "workFrame_" + namespace.replace(/\./g, "_");
        	var frame = frameSet.frames[name];
        	
        	if ( frame )
        	{
        		frame.set_openstatus("minimize");
        		frame.set_openstatus("maximize");
        		frame.setFocus();		
        	}
        	else
        	{
        		frame = new ChildFrame();
        		frame.init(name, "absolute", 0, 0, null, null, 0, 0);
        		frame.set_formurl("App::work.xfdl");
        		frame.set_showtitlebar(false);
        		frame.set_openstatus("maximize");
        		frame._namespace = namespace;
        		frameSet.addChild(name, frame);
        		frame.show();
        	}
        }

        this.removeWork = function(namespace)
        {
        	var frameSet = application.mainframe.HFrameSet.VFrameSet.FrameSet;	
        	var name = "workFrame_" + namespace.replace(/\./g, "_");
        	var frame = frameSet.frames[name];
        	
        	if ( frame )
        	{
        		var removed = frameSet.removeChild(name);
        		removed.destroy();
        		
        		// 원래 아래를 실행하지 않아도 제거되기 전 ChildFrame이 
        		// maximize 상태로 되어야 하는데 현재 정상 동작하지 않아서 추가함.
        		frame = frameSet.getActiveFrame();
        		if ( frame )
        		{
        			frame.set_openstatus("minimize");
        			frame.set_openstatus("maximize");
        			frame.setFocus();
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_menu.addEventHandler("oncelldblclick", this.grd_menu_oncelldblclick, this);

        };

        this.loadIncludeScript("menu.xfdl");

       
    };
}
)();
