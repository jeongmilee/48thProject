//CSS=EcoLibrary.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal", "deactivate"]);
    this._addCss("VFrameSet", "background", obj, ["normal"]);
    this._addCss("HFrameSet", "background", obj, ["normal"]);
    this._addCss("FrameSet", "background", obj, ["normal"]);
    this._addCss("ChildFrame", "background", obj, ["normal", "deactivate"]);
    this._addCss("TabFramePage", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal", "focused"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("GraphicPath", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Menu", "background", obj, ["normal", "focused"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("Shape", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static", "background", obj, ["normal"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal"]);
    this._addCss("Tabpage", "background", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("CheckBoxControl", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ComboControl>#comboedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("CheckBox.required_input", "background", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss("Radio.required_input", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Edit", "background", obj, ["readonly"]);
    this._addCss("TextArea", "background", obj, ["readonly"]);
    this._addCss("MaskEdit", "background", obj, ["readonly"]);
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "background", obj, ["normal"]);
    this._addCss("Static.WF_sta_Orange", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#2a2b31ff","");
    this._addCss("MainFrame", "border", obj, ["normal", "deactivate"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "border", obj, ["normal"]);
    this._addCss("Alert", "border", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "border", obj, ["normal"]);
    this._addCss("Confirm", "border", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("MainFrame", "bordertype", obj, ["normal", "deactivate"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "bordertype", obj, ["normal"]);
    this._addCss("Static.WFSA_sta_Bg", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("28");
    this._addCss("MainFrame", "menubarheight", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_value("26");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_value("38");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("MainFrame", "color", obj, ["normal", "deactivate"]);
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl", "color", obj, ["normal"]);
    this._addCss("ApplicationMenu", "color", obj, ["selected"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("PopupMenu", "color", obj, ["selected", "focused", "pushed"]);
    this._addCss("Shape", "color", obj, ["normal", "disabled"]);
    this._addCss("Tooltip", "color", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "color", obj, ["normal"]);
    this._addCss("Button.TF_btn_Home", "color", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Tab.TF_tab_MDI", "color", obj, ["normal"]);
    this._addCss("Button.WF_btn_Help", "color", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.WF_btn_Point", "color", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Static.WF_sta_Popup", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl", "background", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("ApplicationMenu", "background", obj, ["normal"]);
    this._addCss("StatusBarControl", "background", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Alert>#okbutton", "background", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Confirm>#okbutton", "background", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "background", obj, ["normal"]);
    this._addCss("Button", "background", obj, ["normal", "focused"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Div>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["normal", "mouseover"]);
    this._addCss("ExportProgress>#progressbar", "background", obj, ["normal"]);
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("ButtonControl", "background", obj, ["normal", "focused"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("Button.TF_btn_MDI", "background", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Static.TF_sta_Bg", "background", obj, ["normal"]);
    this._addCss("Button.WF_btn_Point", "background", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.WF_btn_Prev", "background", obj, ["normal"]);
    this._addCss("Button.WF_btn_Next", "background", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "background", obj, ["normal"]);
    this._addCss("Button.WFSA_btn_Search", "background", obj, ["normal", "focused"]);
    this._addCss("Static.WFSA_sta_Bg", "background", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_header", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #686a6f 0,100 #464850");
    this._addCss("TitleBarControl", "gradation", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame>#TitleBarControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl", "border", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame", "border", obj, ["normal", "deactivate"]);
    this._addCss("ChildFrame>#TitleBarControl", "border", obj, ["normal", "deactivate"]);
    this._addCss("TabFrame", "border", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "focused"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "focused"]);
    this._addCss("Div>#vscrollbar>#trackbar", "border", obj, ["normal", "pushed"]);
    this._addCss("Div>#hscrollbar>#trackbar", "border", obj, ["normal", "pushed"]);
    this._addCss("Menu", "border", obj, ["normal", "focused"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("Shape", "border", obj, ["normal"]);
    this._addCss("Splitter", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Radio.required_input", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "border", obj, ["normal", "pushed"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "border", obj, ["normal", "pushed"]);
    this._addCss("Button.WF_btn_ScheduleChk", "border", obj, ["focused", "selected", "pushed", "mouseover"]);
    this._addCss("Grid.WF_grd_Chart>#controlbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","false","false");
    this._addCss("TitleBarControl", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Button.TF_btn_Home", "bordertype", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDI", "bordertype", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("TitleBarControl", "align", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame>#TitleBarControl", "align", obj, ["normal"]);
    this._addCss("TabFrame", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("CheckBox", "align", obj, ["normal", "focused"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal", "mouseover"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "align", obj, ["normal"]);
    this._addCss("GroupBox", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("PopupMenu", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static", "align", obj, ["normal"]);
    this._addCss("Tooltip", "align", obj, ["normal"]);
    this._addCss("CalendarControl", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("CheckBoxControl", "align", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ComboControl", "align", obj, ["normal"]);
    this._addCss("ComboControl>#comboedit", "align", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "align", obj, ["normal"]);
    this._addCss("EditControl", "align", obj, ["normal"]);
    this._addCss("MaskEditControl", "align", obj, ["normal"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Radio.required_input", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid.LF_grd_TreeMenu", "align", obj, ["normal"]);
    this._addCss("Button.TF_btn_MDI", "align", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Static.WF_sta_Popup", "align", obj, ["normal"]);
    this._addCss("Static.WF_sta_Title", "align", obj, ["normal"]);
    this._addCss("Static.WF_sta_SubTitle", "align", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BlockRT", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_label", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 12 Verdana, antialias bold 12 malgun gothic");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "font", obj, ["normal"]);
    this._addCss("Button.TF_btn_Home", "font", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDI", "font", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIClose", "font", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDINext", "font", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIPrev", "font", obj, ["normal", "focused"]);
    this._addCss("Button.WF_btn_Help", "font", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "icon", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TabFrame", "icon", obj, ["normal"]);
    this._addCss("Alert", "icon", obj, ["normal"]);
    this._addCss("Confirm", "icon", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("TitleBarControl", "font", obj, ["deactivate", "disabled"]);
    this._addCss("TabFrame", "font", obj, ["normal"]);
    this._addCss("ApplicationMenu", "font", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "font", obj, ["normal"]);
    this._addCss("Alert", "font", obj, ["normal"]);
    this._addCss("Alert>#okbutton", "font", obj, ["normal"]);
    this._addCss("Confirm", "font", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "font", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal", "focused"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal", "focused"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("ExportProgress", "font", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "font", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("GraphicPath", "font", obj, ["normal"]);
    this._addCss("Grid>#body", "font", obj, ["normal"]);
    this._addCss("ImageViewer", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("Shape", "font", obj, ["normal"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("Tooltip", "font", obj, ["normal"]);
    this._addCss("ButtonControl", "font", obj, ["normal", "focused"]);
    this._addCss("CalendarControl", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("CheckBoxControl", "font", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ComboControl", "font", obj, ["normal"]);
    this._addCss("ComboControl>#comboedit", "font", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "font", obj, ["normal"]);
    this._addCss("EditControl", "font", obj, ["normal"]);
    this._addCss("MaskEditControl", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextAreaControl", "font", obj, ["normal"]);
    this._addCss("Radio.required_input", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Tab.TF_tab_MDI", "font", obj, ["selected", "focused", "mouseover"]);
    this._addCss("Grid.WF_grd_Chart>#body", "font", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "font", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_LabelLT", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRT", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WF_sta_Orange", "font", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BoxR", "font", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#a9aeb6");
    this._addCss("TitleBarControl", "color", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("TitleBarControl", "padding", obj, ["deactivate", "disabled"]);
    this._addCss("Tab>#extrabutton", "padding", obj, ["normal"]);
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("TitleBarControl", "margin", obj, ["deactivate", "disabled"]);
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "margin", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #707178 0,100 #2c2e34 [47% #4d4e56][53% #3e3f46]");
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("Alert", "bordertype", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("Confirm", "bordertype", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("ExportProgress", "bordertype", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("Splitter", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Button.WF_btn_Help", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Button.WF_btn_Inner", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Button.WF_btn_SearchS", "bordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_margin("0 1 0 1");
    this._addCss("TitleBarControl>#minbutton", "margin", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "margin", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "margin", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "margin", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "margin", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "margin", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "margin", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "margin", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::frame/Titlebar_btn_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("Alert>#okbutton", "imagealign", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "imagealign", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal", "focused"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Div>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("ButtonControl", "imagealign", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "imagealign", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("0 0");
    this._addCss("TitleBarControl>#minbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("Alert>#closebutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("Button", "pusheddrawoffset", obj, ["normal", "focused"]);
    this._addCss("FileDownload", "pusheddrawoffset", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #717279 0,100 #51525b [47% #5d5e67][53% #51525b]");
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["mouseover"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["mouseover"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["mouseover"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "gradation", obj, ["mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "gradation", obj, ["mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "gradation", obj, ["mouseover"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "gradation", obj, ["mouseover"]);
    this._addCss("Alert>#closebutton", "gradation", obj, ["mouseover"]);
    this._addCss("Confirm>#closebutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3c3c44ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "background", obj, ["pushed"]);
    this._addCss("Alert>#closebutton", "background", obj, ["pushed"]);
    this._addCss("Confirm>#closebutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("url('Images::frame/Titlebar_btn_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal", "deactivate"]);
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "image", obj, ["nested"]);

    obj = new nexacro.Style_value("url('Images::frame/Titlebar_btn_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_value("url('Images::frame/Titlebar_btn_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_border("3","solid","red","");
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["deactivate", "nested"]);
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "border", obj, ["deactivate", "nested"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("VFrameSet", "border", obj, ["normal"]);
    this._addCss("HFrameSet", "border", obj, ["normal"]);
    this._addCss("FrameSet", "border", obj, ["normal"]);
    this._addCss("StatusBarControl", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal"]);
    this._addCss("ResizeButtonControl", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBox", "border", obj, ["normal", "focused"]);
    this._addCss("Combo>#combolist>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("Div>#resizebutton", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("Grid>#body", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("Static", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("TextArea>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("CalendarControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBoxControl", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ComboControl>#comboedit", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("CheckBox.required_input", "border", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss("Grid.LF_grd_TreeMenu>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Button.TF_btn_MDIClose", "border", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.TF_btn_MDINext", "border", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDIPrev", "border", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Tab.TF_tab_MDI>#spinupbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("Tab.TF_tab_MDI>#spindownbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "border", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#ResizeButtonControl", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#2a2b31ff","");
    this._addCss("FrameSet", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ChildFrame", "bordertype", obj, ["normal", "deactivate"]);
    this._addCss("TabFrame", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("StepControl", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("ButtonControl", "bordertype", obj, ["normal", "focused"]);
    this._addCss("CalendarControl", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("ComboControl", "bordertype", obj, ["normal"]);
    this._addCss("ComboControl>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("EditControl", "bordertype", obj, ["normal"]);
    this._addCss("MaskEditControl", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Button.TF_btn_MDIClose", "bordertype", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.TF_btn_MDINext", "bordertype", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDIPrev", "bordertype", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Tab.TF_tab_MDI", "bordertype", obj, ["normal"]);
    this._addCss("Tab.TF_tab_MDI>#spinupbutton", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Tab.TF_tab_MDI>#spindownbutton", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "bordertype", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("25");
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_value("0");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","false","false");
    this._addCss("ChildFrame>#TitleBarControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 Verdana, antialias bold 9 malgun gothic");
    this._addCss("ChildFrame>#TitleBarControl", "font", obj, ["normal"]);
    this._addCss("StatusBarControl", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["selected", "focused"]);
    this._addCss("Tab.tab_left", "font", obj, ["selected"]);
    this._addCss("Tab.tab_right", "font", obj, ["selected"]);
    this._addCss("Tab.tab_bottom", "font", obj, ["selected"]);
    this._addCss("Button.WF_btn_Inner", "font", obj, ["normal", "focused"]);
    this._addCss("Button.WF_btn_Point", "font", obj, ["normal", "focused"]);
    this._addCss("Static.WF_sta_SubTitle", "font", obj, ["normal"]);
    this._addCss("Button.WFSA_btn_Search", "font", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 -5");
    this._addCss("ChildFrame>#TitleBarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d5d5d5 0,100 #a5a5a5");
    this._addCss("ChildFrame>#TitleBarControl", "gradation", obj, ["deactivate"]);

    obj = new nexacro.Style_value("url('Images::frame/CTitlebar_btn_min.png')");
    this._addCss("ChildFrame>#TitleBarControl>#minbutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_value("url('Images::frame/CTitlebar_btn_max.png')");
    this._addCss("ChildFrame>#TitleBarControl>#maxbutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_value("url('Images::frame/CTitlebar_btn_normal.png')");
    this._addCss("ChildFrame>#TitleBarControl>#normalbutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_value("url('Images::frame/CTitlebar_btn_close.png')");
    this._addCss("ChildFrame>#TitleBarControl>#closebutton", "image", obj, ["normal", "deactivate", "nested"]);

    obj = new nexacro.Style_background("#efefefff","","","0","0","0","0","true");
    this._addCss("TabFrame", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("TabFrame", "gradation", obj, ["normal"]);
    this._addCss("Form", "gradation", obj, ["normal"]);
    this._addCss("ExportProgress", "gradation", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "gradation", obj, ["normal"]);
    this._addCss("PopupDiv", "gradation", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Splitter", "gradation", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("StepControl", "gradation", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "gradation", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "gradation", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("TabFrame", "color", obj, ["normal"]);
    this._addCss("ApplicationMenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("TabFrame", "buttonbackground", obj, ["normal"]);
    this._addCss("CheckBox", "buttonbackground", obj, ["normal", "focused", "mouseover"]);
    this._addCss("FileUpload", "buttonbackground", obj, ["normal"]);
    this._addCss("Radio", "buttonbackground", obj, ["normal", "mouseover", "selected"]);
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Tab", "buttonbackground", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_left", "buttonbackground", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_right", "buttonbackground", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_bottom", "buttonbackground", obj, ["normal", "mouseover"]);
    this._addCss("CheckBoxControl", "buttonbackground", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("CheckBox.required_input", "buttonbackground", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss("Radio.required_input", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Tab.TF_tab_MDI", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dcdcd4");
    this._addCss("TabFrame", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("2 double #a8a8a2 #ffffff");
    this._addCss("TabFrame", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","false","false");
    this._addCss("TabFrame", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 -8 0 8");
    this._addCss("TabFrame", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("TabFrame", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TabFrame", "tabborder", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TabFrame", "tabbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TabFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TabFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #dbdbd3");
    this._addCss("ApplicationMenu", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("ApplicationMenu", "align", obj, ["normal"]);
    this._addCss("StatusBarControl>#progressbar", "align", obj, ["normal"]);
    this._addCss("Alert>#okbutton", "align", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "align", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal", "focused"]);
    this._addCss("Div", "align", obj, ["normal"]);
    this._addCss("ExportProgress", "align", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("GraphicPath", "align", obj, ["normal"]);
    this._addCss("Grid>#body", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal"]);
    this._addCss("Menu", "align", obj, ["normal", "focused"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("PopupDiv", "align", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Shape", "align", obj, ["normal"]);
    this._addCss("StepControl", "align", obj, ["normal"]);
    this._addCss("Tab", "align", obj, ["normal"]);
    this._addCss("ButtonControl", "align", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_Home", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDIClose", "align", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.TF_btn_MDINext", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDIPrev", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Tab.TF_tab_MDI", "align", obj, ["normal"]);
    this._addCss("Button.WF_btn_Help", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Grid.WF_grd_Chart>#body", "align", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "align", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_header", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("ApplicationMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("ApplicationMenu", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("20 20 20 20");
    this._addCss("ApplicationMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ApplicationMenu", "itembackground", obj, ["normal", "mouseover"]);
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("0,0 #f8fbfdb3 0,100 #92c9f3b3");
    this._addCss("ApplicationMenu", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ApplicationMenu", "checkboximage", obj, ["normal"]);
    this._addCss("Menu", "checkboximage", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("ApplicationMenu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("ApplicationMenu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ApplicationMenu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("ApplicationMenu", "popuppadding", obj, ["normal"]);
    this._addCss("Menu", "popuppadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("ApplicationMenu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("ApplicationMenu", "popupfont", obj, ["normal"]);
    this._addCss("Menu", "popupfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_value("20");
    this._addCss("ApplicationMenu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 6 1 8");
    this._addCss("ApplicationMenu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#fcfcfbff","","1","solid","#fcfcfbff","","1","solid","#e7e7e2ff","","1","solid","#fcfcfbff","");
    this._addCss("ApplicationMenu", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("ApplicationMenu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("ApplicationMenu", "popupitemalign", obj, ["normal"]);
    this._addCss("Menu", "popupitemalign", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ApplicationMenu", "expandimage", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#3da2df");
    this._addCss("ApplicationMenu", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("ApplicationMenu", "popupitembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #94bdd5 0,100 #2f89cd [48% #4da3db][50% #3696d7]");
    this._addCss("ApplicationMenu", "popupitemgradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#4485adff","","3","double","#fcfcfbff","#4485adff","1","solid","#4485adff","","3","double","#fcfcfbff","#4485adff");
    this._addCss("ApplicationMenu", "popupitemborder", obj, ["mouseover"]);

    obj = new nexacro.Style_padding("1 4 1 6");
    this._addCss("ApplicationMenu", "popupitempadding", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("ApplicationMenu", "popupcolor", obj, ["mouseover"]);
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ApplicationMenu", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("ApplicationMenu", "color", obj, ["disabled"]);
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Button.WF_btn_Inner", "color", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #9b9b9b 0,100 #abafb5 [2% #dddddd] [7% #caccd0]");
    this._addCss("StatusBarControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","5","5","false","false","true","true");
    this._addCss("StatusBarControl", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("Images::frame/ico_gripImg.png");
    this._addCss("StatusBarControl", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("StatusBarControl", "progressbargab", obj, ["normal"]);

    obj = new nexacro.Style_value("12");
    this._addCss("StatusBarControl", "progressbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("200");
    this._addCss("StatusBarControl", "progressbarwidth", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl", "zoomcombogab", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl", "zoomcomboheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusBarControl", "zoomcombowidth", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("StatusBarControl", "color", obj, ["normal"]);
    this._addCss("Alert>#okbutton", "color", obj, ["disabled"]);
    this._addCss("Confirm>#okbutton", "color", obj, ["disabled"]);
    this._addCss("Confirm>#cancelbutton", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("ButtonControl", "color", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 0 0 35");
    this._addCss("StatusBarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #abaeb4 0,100 #caccd0");
    this._addCss("StatusBarControl>#progressbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","9","9","true","true","true","true");
    this._addCss("StatusBarControl>#progressbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("StatusBarControl>#progressbar", "color", obj, ["normal"]);
    this._addCss("Form", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["normal", "focused"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("GroupBox", "color", obj, ["normal"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#body", "color", obj, ["normal"]);
    this._addCss("ImageViewer", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("MaskEdit", "color", obj, ["normal"]);
    this._addCss("ProgressBar", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal"]);
    this._addCss("Spin", "color", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal"]);
    this._addCss("ButtonControl", "color", obj, ["normal", "focused"]);
    this._addCss("CalendarControl>#calendaredit", "color", obj, ["normal"]);
    this._addCss("CheckBoxControl", "color", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ComboControl", "color", obj, ["normal"]);
    this._addCss("ComboControl>#comboedit", "color", obj, ["normal"]);
    this._addCss("EditControl", "color", obj, ["normal"]);
    this._addCss("MaskEditControl", "color", obj, ["normal"]);
    this._addCss("SpinControl", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextAreaControl", "color", obj, ["normal"]);
    this._addCss("Radio.required_input", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.MF_btn_IconList", "color", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDI", "color", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIClose", "color", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDINext", "color", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIPrev", "color", obj, ["normal", "focused"]);
    this._addCss("Grid.WF_grd_Chart", "color", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "color", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "color", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "color", obj, ["normal"]);
    this._addCss("Static.WF_sta_SubTitle", "color", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_LabelLT", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRT", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFSA_sta_Label", "color", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_header", "color", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_label", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("StatusBarControl>#progressbar", "smooth", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("StatusBarControl>#progressbar", "direction", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "direction", obj, ["normal"]);
    this._addCss("ProgressBar", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("StatusBarControl>#progressbar", "bartype", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("StatusBarControl>#progressbar", "barcolor", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #8a8c95 0,100 #90929a");
    this._addCss("StatusBarControl>#progressbar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 1 1 1");
    this._addCss("StatusBarControl>#progressbar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 23 0 0");
    this._addCss("StatusBarControl>#progressbar", "margin", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Form", "align", obj, ["normal"]);
    this._addCss("Alert", "align", obj, ["normal"]);
    this._addCss("Confirm", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("Alert", "background", obj, ["normal"]);
    this._addCss("Confirm", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar", "background", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("CalendarControl", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "background", obj, ["normal"]);
    this._addCss("ComboControl", "background", obj, ["normal"]);
    this._addCss("EditControl", "background", obj, ["normal"]);
    this._addCss("MaskEditControl", "background", obj, ["normal", "mouseover"]);
    this._addCss("TextAreaControl", "background", obj, ["normal"]);
    this._addCss("Button.MF_btn_IconList", "background", obj, ["mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDI", "background", obj, ["pushed", "selected"]);
    this._addCss("Grid.WF_grd_Chart", "background", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "background", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BlockRT", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BoxR", "background", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("Tooltip", "bordertype", obj, ["normal"]);
    this._addCss("TextAreaControl", "bordertype", obj, ["normal", "focused", "mouseover", "disabled"]);
    this._addCss("Static.WF_sta_Orange", "bordertype", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_header", "bordertype", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BoxR", "bordertype", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Form", "cursor", obj, ["normal"]);
    this._addCss("Alert", "cursor", obj, ["normal"]);
    this._addCss("Confirm", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Grid.LF_grd_TreeMenu", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Verdana, antialias 9 malgun gothic");
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("Form", "opacity", obj, ["normal"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("StepControl", "opacity", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Form", "padding", obj, ["normal"]);
    this._addCss("Alert", "padding", obj, ["normal"]);
    this._addCss("Confirm", "padding", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Form", "shadow", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "shadow", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "shadow", obj, ["normal"]);
    this._addCss("ListBox", "shadow", obj, ["normal"]);
    this._addCss("StepControl", "shadow", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "shadow", obj, ["normal"]);
    this._addCss("Button.MF_btn_IconList", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_Home", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDI", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIClose", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDINext", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_MDIPrev", "shadow", obj, ["normal", "focused"]);
    this._addCss("Static.WF_sta_Orange", "shadow", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BoxR", "shadow", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Form", "stepalign", obj, ["normal"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("Form", "stepshowtype", obj, ["normal"]);
    this._addCss("PopupDiv", "stepshowtype", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","Images::frame/scrollbarV_BG.png","repeat-y","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","5","5","false","true","false","true");
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "bordertype", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "incbtnsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "decbtnsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("40");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar", "barminsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eaebec 100,0 #d0d6dc");
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#9b9b9bff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","6","6","true","true","true","true");
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::frame/scrollbarV_trackbar_grip.png')");
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Div>#vscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "image", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 1,1 3 #00000033");
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0e0cbff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#e0932fff","");
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "border", obj, ["pushed"]);

    obj = new nexacro.Style_value("url('Images::frame/scrollbarV_trackbar_grip_P.png')");
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("0 1 0 1");
    this._addCss("VScrollBarControl>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#vscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("ListBox>#vscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("TextArea>#vscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#vscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::frame/scrollbarH_BG.png","repeat-x","0","0","0","0","true");
    this._addCss("HScrollBarControl", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eaebec 0,100 #d0d6dc");
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Div>#hscrollbar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "gradation", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("url('Images::frame/scrollbarH_trackbar_grip.png')");
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Div>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "image", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::frame/scrollbarH_trackbar_grip_P.png')");
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "image", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("1 0 1 0");
    this._addCss("HScrollBarControl>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Combo>#combolist>#hscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("ListBox>#hscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("TextArea>#hscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Div.WF_div_View>#hscrollbar>#trackbar", "imagepadding", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::frame/btn_resize.png","","0","0","100","0","true");
    this._addCss("ResizeButtonControl", "background", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#ResizeButtonControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Alert", "color", obj, ["normal"]);
    this._addCss("Confirm", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["mouseover", "selected", "pushed"]);
    this._addCss("Button.WF_btn_Inner", "color", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_margin("");
    this._addCss("Alert", "margin", obj, ["normal"]);
    this._addCss("Confirm", "margin", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Alert", "iconsize", obj, ["normal"]);
    this._addCss("Confirm", "iconsize", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("Alert", "buttonheight", obj, ["normal"]);
    this._addCss("Confirm", "buttonheight", obj, ["normal"]);

    obj = new nexacro.Style_value("60");
    this._addCss("Alert", "buttonwidth", obj, ["normal"]);
    this._addCss("Confirm", "buttonwidth", obj, ["normal"]);

    obj = new nexacro.Style_value("OK");
    this._addCss("Alert", "okbuttontext", obj, ["normal"]);
    this._addCss("Confirm", "okbuttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Alert", "titlebackground", obj, ["normal"]);
    this._addCss("Confirm", "titlebackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #686a6f 0,100 #464850");
    this._addCss("Alert", "titlegradation", obj, ["normal"]);
    this._addCss("Confirm", "titlegradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Alert", "titlefont", obj, ["normal"]);
    this._addCss("Confirm", "titlefont", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Alert", "titlecolor", obj, ["normal"]);
    this._addCss("Confirm", "titlecolor", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("Alert", "titleheight", obj, ["normal"]);
    this._addCss("Confirm", "titleheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 11");
    this._addCss("Alert", "titlepadding", obj, ["normal"]);
    this._addCss("Confirm", "titlepadding", obj, ["normal"]);

    obj = new nexacro.Style_value("Alert");
    this._addCss("Alert", "titletext", obj, ["normal"]);
    this._addCss("Confirm", "titletext", obj, ["normal"]);

    obj = new nexacro.Style_margin("3 3 -5 -5");
    this._addCss("Alert>#closebutton", "margin", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "margin", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::fram/btn_CTitlebarForm_close.png')");
    this._addCss("Alert>#closebutton", "image", obj, ["normal"]);
    this._addCss("Confirm>#closebutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e4e4e4");
    this._addCss("Alert>#okbutton", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Confirm>#okbutton", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Confirm>#cancelbutton", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("FileDownload", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("ButtonControl", "gradation", obj, ["normal", "focused", "selected"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#7d7f80ff","");
    this._addCss("Alert>#okbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Confirm>#okbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Confirm>#cancelbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Button", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);
    this._addCss("ButtonControl", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.WF_btn_Inner", "border", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","true","true");
    this._addCss("Alert>#okbutton", "bordertype", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "bordertype", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "bordertype", obj, ["normal"]);
    this._addCss("Button", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("Button.WF_btn_Point", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Button.WFSA_btn_Search", "bordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Alert>#okbutton", "color", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "color", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","#808080ff","");
    this._addCss("Alert>#okbutton", "focusborder", obj, ["normal"]);
    this._addCss("Confirm>#okbutton", "focusborder", obj, ["normal"]);
    this._addCss("Confirm>#cancelbutton", "focusborder", obj, ["normal"]);
    this._addCss("Button", "focusborder", obj, ["normal", "focused"]);
    this._addCss("ImageViewer", "focusborder", obj, ["normal"]);
    this._addCss("Radio", "focusborder", obj, ["normal"]);
    this._addCss("Radio.required_input", "focusborder", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #efefef");
    this._addCss("Alert>#okbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Confirm>#okbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Confirm>#cancelbutton", "gradation", obj, ["mouseover"]);
    this._addCss("FileDownload", "gradation", obj, ["mouseover"]);
    this._addCss("ButtonControl", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e2e2e2 0,100 #fefefe");
    this._addCss("Alert>#okbutton", "gradation", obj, ["pushed"]);
    this._addCss("Confirm>#okbutton", "gradation", obj, ["pushed"]);
    this._addCss("Confirm>#cancelbutton", "gradation", obj, ["pushed"]);
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);
    this._addCss("ButtonControl", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#d1d1d1ff","","","0","0","0","0","true");
    this._addCss("Alert>#okbutton", "background", obj, ["disabled"]);
    this._addCss("Confirm>#okbutton", "background", obj, ["disabled"]);
    this._addCss("Confirm>#cancelbutton", "background", obj, ["disabled"]);
    this._addCss("FileDownload", "background", obj, ["disabled"]);
    this._addCss("ButtonControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("cancel");
    this._addCss("Confirm", "cancelbuttontext", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #eceeef");
    this._addCss("Button", "gradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_shadow("drop 0,1 1 #00000024");
    this._addCss("Button", "shadow", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal", "focused"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss("Menu", "cursor", obj, ["normal", "focused"]);
    this._addCss("StepControl", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Button", "padding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#2f313cff","");
    this._addCss("Button", "border", obj, ["mouseover", "selected", "pushed"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("ListBox", "border", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl", "border", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,50 #e6e7e8");
    this._addCss("Button", "gradation", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eceeef 0,100 #fefefe");
    this._addCss("Button", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_shadow("drop 0,0 0 #00000050");
    this._addCss("Button", "shadow", obj, ["pushed", "disabled"]);
    this._addCss("Button.WF_btn_Point", "shadow", obj, ["pushed", "disabled"]);
    this._addCss("Button.WFSA_btn_Search", "shadow", obj, ["pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #edeff0");
    this._addCss("Button", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","Images::base/bg_input.png","repeat-x","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#spin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("SpinControl", "background", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss(".required_input", "background", obj, ["normal", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#8e97a0ff","");
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("CalendarControl", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("TextAreaControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "color", obj, ["normal"]);
    this._addCss("GraphicPath", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("CalendarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("CalendarControl", "buttonsize", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("ComboControl", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Calendar", "dayfont", obj, ["normal"]);
    this._addCss("CalendarControl", "dayfont", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("CalendarControl", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal"]);
    this._addCss("CalendarControl", "dayborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_value("32 32");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("CalendarControl", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_align("left bottom");
    this._addCss("Calendar", "popupalign", obj, ["normal"]);
    this._addCss("CalendarControl", "popupalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Menu", "popupbackground", obj, ["normal", "focused"]);
    this._addCss("CalendarControl", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c1c1c1ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("CalendarControl", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("226 265");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar", "usetrailingday", obj, ["normal"]);
    this._addCss("CalendarControl", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffbeff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("CalendarControl", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#fb9906ff","");
    this._addCss("Calendar", "dayborder", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl", "dayborder", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffebbcff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("CalendarControl", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#e2e2e2ff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("CalendarControl>#calendaredit", "background", obj, ["disabled"]);
    this._addCss("ComboControl", "background", obj, ["disabled"]);
    this._addCss("EditControl", "background", obj, ["disabled"]);
    this._addCss("MaskEditControl", "background", obj, ["disabled"]);
    this._addCss("TextAreaControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("CalendarControl>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("ComboControl", "color", obj, ["disabled"]);
    this._addCss("EditControl", "color", obj, ["disabled"]);
    this._addCss("MaskEditControl", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("TextAreaControl", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#316ac5");
    this._addCss("Calendar>#calendaredit", "caretcolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "caretcolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "caretcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "caretcolor", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "caretcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "caretcolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "caretcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea", "caretcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "caretcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "caretcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "caretcolor", obj, ["normal"]);
    this._addCss("EditControl", "caretcolor", obj, ["normal"]);
    this._addCss("MaskEditControl", "caretcolor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "caretcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextAreaControl", "caretcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "compositecolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "compositecolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "compositecolor", obj, ["normal"]);
    this._addCss("Edit", "compositecolor", obj, ["normal"]);
    this._addCss("MaskEdit", "compositecolor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "compositecolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea", "compositecolor", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "compositecolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "compositecolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "compositecolor", obj, ["normal"]);
    this._addCss("EditControl", "compositecolor", obj, ["normal"]);
    this._addCss("MaskEditControl", "compositecolor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "compositecolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextAreaControl", "compositecolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo", "selectcolor", obj, ["focused", "selected"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit", "selectcolor", obj, ["focused"]);
    this._addCss("Grid>#body", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["focused"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea", "selectcolor", obj, ["focused"]);
    this._addCss("CalendarControl>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("EditControl", "selectcolor", obj, ["focused"]);
    this._addCss("MaskEditControl", "selectcolor", obj, ["focused"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.WF_grd_Chart>#body", "selectcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.WF_grd_Message>#body", "selectcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal", "mouseover"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("CalendarControl>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("EditControl", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEditControl", "selectbackground", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextAreaControl", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#2f313cff","");
    this._addCss("Calendar>#calendaredit", "border", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("#316ac5");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("Combo", "selectbackground", obj, ["focused", "selected"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["focused"]);
    this._addCss("CalendarControl>#calendaredit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("EditControl", "selectbackground", obj, ["focused"]);
    this._addCss("MaskEditControl", "selectbackground", obj, ["focused"]);

    obj = new nexacro.Style_background("","Images::base/btn_calendar_N.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "focused", "disabled"]);
    this._addCss("CalendarControl>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_calendar_O.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#dropbutton", "background", obj, ["mouseover"]);
    this._addCss("CalendarControl>#dropbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["disabled"]);
    this._addCss("StepControl", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_N.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_O.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spinupbutton", "background", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_P.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_D.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spinupbutton", "background", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_N.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_O.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_D.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#spindownbutton", "background", obj, ["disabled"]);
    this._addCss("CalendarControl>#spindownbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("39 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#c1c1c1ff","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 Verdana, antialias 11 malgun gothic");
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 19 Verdana, antialias 19 malgun gothic");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("40");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#117dbb");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ca3e26");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#7e8089ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#7e8089ff","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 Verdana, antialias bold 9 malgun gothic");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal", "selected"]);
    this._addCss("CalendarControl>#popupcalendar", "todaycolor", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Calendar>#popupcalendar", "trailingdayborder", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "trailingdayborder", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "trailingdaybackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "trailingdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#c1c1c1");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #868686 [97% #d9d9da][99% #868686]");
    this._addCss("Calendar>#popupcalendar", "weekgradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "weekgradation", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 11 Verdana, antialias bold 11 malgun gothic");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("S M T W T F S");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffbeff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#7e8089ff","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdayborder", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffffbeff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl>#popupcalendar", "sundaybackground", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_border("1","solid","#7e8089ff","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl>#popupcalendar", "sundayborder", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#ffebbcff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#fb9906ff","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["selected"]);
    this._addCss("CalendarControl>#popupcalendar", "saturdayborder", obj, ["selected"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_N.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_O.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_P.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_shadow("drop 0,0 0 #808080");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "shadow", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "shadow", obj, ["pushed"]);
    this._addCss("Div>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "shadow", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "shadow", obj, ["pushed"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Button.WF_btn_ScheduleChk", "shadow", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_N.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_O.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_P.png","stretch","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#b2bbc3ff","");
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["disabled", "readonly"]);
    this._addCss("ImageViewer", "border", obj, ["normal"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled", "readonly"]);
    this._addCss("Spin", "border", obj, ["disabled", "readonly"]);
    this._addCss("TextArea", "border", obj, ["disabled", "readonly"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("ComboControl", "border", obj, ["normal"]);
    this._addCss("EditControl", "border", obj, ["normal", "disabled"]);
    this._addCss("MaskEditControl", "border", obj, ["normal", "disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("TextAreaControl", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["readonly"]);
    this._addCss("Calendar", "border", obj, ["readonly"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("Calendar>#popupcalendar>#monthspin", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 19 Verdana, antialias 19 malgun gothic");
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "selectcolor", obj, ["normal"]);
    this._addCss("EditControl", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEditControl", "selectcolor", obj, ["normal"]);
    this._addCss("TextAreaControl", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("CheckBox", "padding", obj, ["normal", "focused"]);
    this._addCss("Combo>#combolist", "padding", obj, ["normal"]);
    this._addCss("Menu", "padding", obj, ["normal", "focused"]);
    this._addCss("PopupDiv", "padding", obj, ["normal", "disabled", "focused", "mouseover"]);
    this._addCss("PopupMenu", "padding", obj, ["normal"]);
    this._addCss("Radio", "padding", obj, ["normal"]);
    this._addCss("CheckBoxControl", "padding", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Radio.required_input", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.TF_btn_MDIClose", "padding", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.TF_btn_MDINext", "padding", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.TF_btn_MDIPrev", "padding", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Static.WF_sta_Orange", "padding", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_header", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eceeef 0,100 #fefefe");
    this._addCss("CheckBox", "buttongradation", obj, ["normal", "focused"]);
    this._addCss("Radio", "buttongradation", obj, ["normal"]);
    this._addCss("Radio.required_input", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #7d7f80");
    this._addCss("CheckBox", "buttonborder", obj, ["normal", "focused"]);
    this._addCss("FileUpload", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal", "focused", "mouseover"]);
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonbordertype", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("url('Images::base/img_check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "focused"]);
    this._addCss("CheckBoxControl", "buttonimage", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("center middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("19");
    this._addCss("CheckBox", "buttonsize", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("CheckBox", "textpadding", obj, ["normal", "focused"]);
    this._addCss("Radio", "textpadding", obj, ["normal"]);
    this._addCss("CheckBoxControl", "textpadding", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Radio.required_input", "textpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,50 #e6e7e8");
    this._addCss("CheckBox", "buttongradation", obj, ["mouseover"]);
    this._addCss("CheckBox.required_input", "buttongradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #2f313c");
    this._addCss("CheckBox", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #b2bbc3");
    this._addCss("CheckBox", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e2e2e2ff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("url('Images::base/img_check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);
    this._addCss("ComboControl", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("ComboControl", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("Combo", "itempadding", obj, ["normal"]);
    this._addCss("ListBox", "itempadding", obj, ["normal"]);
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);
    this._addCss("ComboControl", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Combo", "itemcolor", obj, ["normal"]);
    this._addCss("ComboControl", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Combo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333637ff","");
    this._addCss("Combo", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["mouseover"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover"]);
    this._addCss("Spin", "border", obj, ["focused", "mouseover", "pushed"]);
    this._addCss("TextArea", "border", obj, ["focused", "mouseover"]);
    this._addCss("ComboControl", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("EditControl", "border", obj, ["mouseover"]);
    this._addCss("MaskEditControl", "border", obj, ["mouseover"]);
    this._addCss("SpinControl", "border", obj, ["focused", "mouseover", "pushed"]);
    this._addCss("TextAreaControl", "border", obj, ["focused", "mouseover"]);

    obj = new nexacro.Style_background("#d7d8dcff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover"]);
    this._addCss("ComboControl", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#7e8089ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["focused", "selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["focused", "selected"]);
    this._addCss("ComboControl", "itemcolor", obj, ["focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#b2bbc4ff","");
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("ComboControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#888888ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["disabled"]);
    this._addCss("ComboControl", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","#000000ff","");
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","false","true","false");
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 7");
    this._addCss("Combo>#comboedit", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Spin>#spinedit", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ComboControl>#comboedit", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#316ac5");
    this._addCss("Combo>#comboedit", "compositecolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Combo>#comboedit", "background", obj, ["focused"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "background", obj, ["normal"]);
    this._addCss("Tab.TF_tab_MDI", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","Images::base/cmb_btn_drop.png","stretch","0","0","0","0","true");
    this._addCss("Combo>#dropbutton", "background", obj, ["normal", "focused"]);
    this._addCss("ComboControl>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#abb1b6ff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("ComboControl>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("ExportProgress>#statustext", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","Images::base/cmb_btn_drop_O.png","stretch","0","0","0","0","true");
    this._addCss("Combo>#dropbutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #cccccc");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["mouseover"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e4e4e4 0,100 #ffffff");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["pushed"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("@gradation","Images::base/cmb_btn_drop_D.png","stretch","0","0","0","0","true");
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #eeeeee");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["disabled"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("7");
    this._addCss("Combo>#combolist>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Combo>#combolist>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("ListBox>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("ListBox>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("TextArea>#vscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("TextArea>#hscrollbar", "scrollbarsize", obj, ["normal"]);
    this._addCss("Div.WF_div_View>#hscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #cdcfd2 100,0 #ffffff");
    this._addCss("Div>#vscrollbar", "gradation", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","1","solid","#b3b6bcff","","1","solid","#b3b6bcff","");
    this._addCss("Div>#vscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#caccd0ff","","","0","0","0","0","true");
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Static.WFT_sta_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dddee0 100,0 #dddee0");
    this._addCss("Div>#vscrollbar>#trackbar", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#b3b6bcff","","","0","0","0","0","true");
    this._addCss("Div>#vscrollbar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Div>#hscrollbar>#trackbar", "background", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #cdcfd2 0,100 #ffffff");
    this._addCss("Div>#hscrollbar", "gradation", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b3b6bcff","","0","none","#808080ff","","0","none","#808080ff","","0","solid","#808080ff","");
    this._addCss("Div>#hscrollbar", "border", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dddee0 0,100 #dddee0");
    this._addCss("Div>#hscrollbar>#trackbar", "gradation", obj, ["mouseover"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::frame/btn_resize.png","","0","0","100","0","true");
    this._addCss("Div>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#resizebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("EditControl", "padding", obj, ["normal"]);
    this._addCss("MaskEditControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#316ac5");
    this._addCss("Edit", "selectbackground", obj, ["focused"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["focused"]);
    this._addCss("TextArea", "selectbackground", obj, ["focused"]);

    obj = new nexacro.Style_background("#e9edefff","","","0","0","0","0","true");
    this._addCss("ExportProgress", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#41536eff","");
    this._addCss("ExportProgress", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("ExportProgress", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3fb3");
    this._addCss("ExportProgress", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("100%");
    this._addCss("ExportProgress", "opacity", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "opacity", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_blur("");
    this._addCss("ExportProgress", "blur", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "blur", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "blur", obj, ["normal"]);

    obj = new nexacro.Style_glow("");
    this._addCss("ExportProgress", "glow", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ExportProgress", "transformation", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "transformation", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "transformation", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ExportProgress>#statustext", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","solid","#b1b5b9b3","");
    this._addCss("ExportProgress>#statustext", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ExportProgress>#statustext", "outerglow", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "outerglow", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ffffff [5% #e5e5e5]");
    this._addCss("ExportProgress>#progressbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6a6a6ab3","");
    this._addCss("ExportProgress>#progressbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 -2 0");
    this._addCss("ExportProgress>#progressbar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("black");
    this._addCss("ExportProgress>#progressbar", "color", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fff15bff 0,100 #d35500ff [5% #fdae3dff]");
    this._addCss("ExportProgress>#progressbar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ExportProgress>#progressbar", "startimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ExportProgress>#progressbar", "endimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ExportProgress>#progressbar", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e4e4e4");
    this._addCss("FileUpload", "buttongradation", obj, ["normal"]);
    this._addCss("Tab", "buttongradation", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_left", "buttongradation", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_right", "buttongradation", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_bottom", "buttongradation", obj, ["normal", "mouseover"]);
    this._addCss("CheckBoxControl", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_margin("0 0 -2 0");
    this._addCss("FileUpload", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("File Search");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b2bbc3ff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "editcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 2 -2 0");
    this._addCss("FileUpload", "editmargin", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#333637ff","");
    this._addCss("FileUpload", "editborder", obj, ["focused", "mouseover"]);

    obj = new nexacro.Style_background("#e2e2e2ff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("FileDownload", "focusborder", obj, ["normal"]);
    this._addCss("Grid", "focusborder", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart", "focusborder", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "focusborder", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#f29335ff","");
    this._addCss("FileDownload", "border", obj, ["focused", "selected"]);
    this._addCss("ButtonControl", "border", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#f48400ff","");
    this._addCss("GroupBox", "border", obj, ["normal"]);
    this._addCss("PopupMenu", "border", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 6 0 6");
    this._addCss("GroupBox", "titlepadding", obj, ["normal"]);

    obj = new nexacro.Style_value("topleft");
    this._addCss("GroupBox", "titlealign", obj, ["normal"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aaaaaa");
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("Static", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c0c0c0ff","");
    this._addCss("Grid", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "border", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_LabelLT", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRT", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "border", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("url('Images::base/ico_treeclose.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::base/ico_treeopen.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::base/ico_treeitem.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#a5b6b6ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefeff 0,100 #d9d9da");
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#9b9b9bff","","0","none","","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "border", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b1b1b1ff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "cellline", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","50","50","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f1f3ff","","","0","0","50","50","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ffffffff","","0","none","","");
    this._addCss("Grid>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("#7e8089 center middle");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ffffffff","","0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "selectborder", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#c3c5cbff","","","0","0","50","50","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#c3c5cbff","","","0","0","50","50","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff center middle");
    this._addCss("Grid>#body", "selectcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #e7e7e7");
    this._addCss("Grid>#summary", "gradation", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Chart>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","false","true","false","true");
    this._addCss("Grid>#vscrollbar>#trackbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 0,0 0 #00000033");
    this._addCss("Grid>#vscrollbar>#trackbar", "shadow", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "shadow", obj, ["pushed"]);

    obj = new nexacro.Style_bordertype("round","4","4","false","false","true","true");
    this._addCss("Grid>#hscrollbar>#trackbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 -16");
    this._addCss("Grid.grd_tree>#body>Cell", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#f48400ff","");
    this._addCss("ImageViewer", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#a5a5a5");
    this._addCss("ImageViewer", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e5e5e5ff","");
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#adb5bdff","");
    this._addCss("ListBox", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 1 0");
    this._addCss("ListBox", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 11 Verdana, antialias bold 11 malgun gothic");
    this._addCss("Menu", "font", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#caccd0");
    this._addCss("Menu", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#b9d8ff");
    this._addCss("Menu", "itemcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 28 0 28");
    this._addCss("Menu", "itempadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::base/menu_bg.png","","0","0","100","50","true");
    this._addCss("Menu", "itembackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("antialias bold 9 Verdana, antialias bold 9 malgun gothic");
    this._addCss("Menu", "itemfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupgradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("2","solid","#3c3c44ff","");
    this._addCss("Menu", "popupborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("Menu", "popupbordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#46586e");
    this._addCss("Menu", "popupcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("antialias bold 9 Verdana, antialias bold 9 malgun gothic");
    this._addCss("Menu", "popupfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("24");
    this._addCss("Menu", "popupitemheight", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 7 0 10");
    this._addCss("Menu", "popupitempadding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("Images::base/ico_menu_expand.png");
    this._addCss("Menu", "expandimage", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#7e8089ff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #36373c 0,100 #4a4b50 [45% #19191b] [50% #101011] [55% #19191b] [95% #34353a]");
    this._addCss("Menu", "itemgradation", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#fe8800");
    this._addCss("Menu", "color", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_value("Images::base/ico_menu_expand_O.png");
    this._addCss("Menu", "expandimage", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ffffff [3% #f2f2f2][25% #ffffff]");
    this._addCss("ProgressBar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#8c98a0ff","");
    this._addCss("ProgressBar", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffc067 0,100 #ff9805");
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 3 3 3");
    this._addCss("ProgressBar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#eaeaeaff","","","0","0","0","0","true");
    this._addCss("ProgressBar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c7c7c7 0,100 #c0c0c0");
    this._addCss("ProgressBar", "bargradation", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#3c3c44ff","");
    this._addCss("PopupDiv", "border", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_shadow("drop 0,1 2 #00000066");
    this._addCss("PopupDiv", "shadow", obj, ["normal", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_background("#f4f7f9ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","1","solid","#f48400ff","","1","solid","#f48400ff","","0","none","#808080ff","");
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::base/ico_PopupMenu.png')");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/cmb_list_BGS.png","repeat-x","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["selected", "focused", "pushed"]);
    this._addCss("ComboControl", "itembackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #7d7f80");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("Images::base/radio_ico.png");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);
    this._addCss("Radio.required_input", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Radio", "buttonsize", obj, ["normal"]);
    this._addCss("Radio.required_input", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #2f313c");
    this._addCss("Radio", "buttonborder", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #eceeef");
    this._addCss("Radio", "buttongradation", obj, ["mouseover", "selected"]);
    this._addCss("Radio.required_input", "buttongradation", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#aaaaaaff","","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("url('Images::base/radio_ico_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("solid #a4acb7 true");
    this._addCss("Shape", "fillbrush", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #a4acb7");
    this._addCss("Shape", "strokepen", obj, ["normal"]);

    obj = new nexacro.Style_shadow("0,0 0t#080808");
    this._addCss("Shape", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("#e5e7ebff","","","0","0","0","0","true");
    this._addCss("Shape", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #e5e7eb");
    this._addCss("Shape", "strokepen", obj, ["disabled"]);

    obj = new nexacro.Style_value("solid #e5e7eb true");
    this._addCss("Shape", "fillbrush", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/bg_input.png","repeat-x","0","0","0","0","true");
    this._addCss("Spin", "background", obj, ["normal", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_N.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f1f1f1");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("Static.WFSA_sta_Bg", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "focused"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "focused"]);
    this._addCss("CalendarControl>#calendaredit", "border", obj, ["mouseover", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("ComboControl>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_O.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spinupbutton", "background", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_P.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_spinup_D.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spinupbutton", "background", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_N.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f1f1f1 0,100 #e4e4e4");
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_O.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spindownbutton", "background", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_P.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spindownbutton", "background", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_spindn_D.png","stretch","0","0","0","0","true");
    this._addCss("Spin>#spindownbutton", "background", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#c5cad1ff","","","0","0","0","0","true");
    this._addCss("Splitter", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#1a9dbcff","","","0","0","0","0","true");
    this._addCss("Splitter", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#34495e");
    this._addCss("Static", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#868686ff","");
    this._addCss("StepControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #868686ff");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #f0f0f0");
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::base/step_Point.png')");
    this._addCss("StepControl", "buttonimage", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("StepControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("16");
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3f");
    this._addCss("StepControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold");
    this._addCss("StepControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("StepControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #ff6600");
    this._addCss("StepControl", "buttonborder", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#abb1b5ff","");
    this._addCss("Tab", "border", obj, ["normal"]);
    this._addCss("Tab.tab_left", "border", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Tab.tab_right", "border", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Tab.tab_bottom", "border", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_bordertype("round","4","4","false","true","true","true");
    this._addCss("Tab", "bordertype", obj, ["normal"]);
    this._addCss("Tab.tab_left", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #abb1b5");
    this._addCss("Tab", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","false","false");
    this._addCss("Tab", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("4 14 5 14");
    this._addCss("Tab", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 0");
    this._addCss("Tab", "buttonmargin", obj, ["normal"]);

    obj = new nexacro.Style_color("#ff6600");
    this._addCss("Tab", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Tab.tab_left", "color", obj, ["mouseover", "selected"]);
    this._addCss("Tab.tab_right", "color", obj, ["mouseover", "selected"]);
    this._addCss("Tab.tab_bottom", "color", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected", "focused"]);
    this._addCss("Tab.tab_left", "buttonbackground", obj, ["selected"]);
    this._addCss("Tab.tab_right", "buttonbackground", obj, ["selected"]);
    this._addCss("Tab.tab_bottom", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Tab", "buttongradation", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spinup_N.png","","0","0","50","50","true");
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spinup_S.png","","0","0","50","50","true");
    this._addCss("Tab>#spinupbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spinup_D.png","","0","0","50","50","true");
    this._addCss("Tab>#spinupbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spindn_N.png","","0","0","50","50","true");
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spindn_S.png","","0","0","50","50","true");
    this._addCss("Tab>#spindownbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_tab_spindn_D.png","","0","0","50","50","true");
    this._addCss("Tab>#spindownbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("url('Images::base/btn_tab_extra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #abb1b5");
    this._addCss("Tab.tab_left", "buttonborder", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Tab.tab_right", "buttonborder", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Tab.tab_bottom", "buttonborder", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","false","true","false");
    this._addCss("Tab.tab_left", "buttonbordertype", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_padding("6 15 8 15");
    this._addCss("Tab.tab_left", "buttonpadding", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_right", "buttonpadding", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_bottom", "buttonpadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","false","true","true");
    this._addCss("Tab.tab_right", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","false","true","false","true");
    this._addCss("Tab.tab_right", "buttonbordertype", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","false","true");
    this._addCss("Tab.tab_bottom", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","4","4","false","false","true","true");
    this._addCss("Tab.tab_bottom", "buttonbordertype", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("TextAreaControl", "align", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 1 7");
    this._addCss("TextArea", "padding", obj, ["normal"]);
    this._addCss("TextAreaControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("TextAreaControl", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_background("#bcd71eff","","","0","0","0","0","true");
    this._addCss("Tooltip", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#a67756ff","");
    this._addCss("Tooltip", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 5 2 5");
    this._addCss("Tooltip", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("225 265");
    this._addCss("CalendarControl", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","true","true");
    this._addCss("CalendarControl>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 19 Verdana,antialias 19 malgun gothic");
    this._addCss("CalendarControl>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 Verdana,antialias 11 malgun gothic");
    this._addCss("CalendarControl>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 Verdana, antialias 11 malgun gothic");
    this._addCss("CalendarControl>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_N.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_O.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalPrev_P.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_N.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_O.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::base/btn_CalNext_P.png","","0","0","50","50","true");
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ffffff");
    this._addCss("CheckBoxControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #b2bbc3");
    this._addCss("CheckBoxControl", "buttonborder", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBoxControl", "buttonalign", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("17");
    this._addCss("CheckBoxControl", "buttonsize", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e4e4e4 0,100 #ffffff");
    this._addCss("CheckBoxControl", "buttongradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("ComboControl", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","Images::base/cmb_btn_drop_O.png","stretch","0","0","0","0","true");
    this._addCss("ComboControl>#dropbutton", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("@gradation","Images::base/cmb_btn_drop_D.png","stretch","0","0","0","0","true");
    this._addCss("ComboControl>#dropbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","Images::base/edit_bg_N.png","repeat-x","0","0","0","0","true");
    this._addCss("EditControl", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#f79a00ff","");
    this._addCss(".required_input", "border", obj, ["normal", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_shadow("drop 0,0 0 #00000024");
    this._addCss(".required_input", "shadow", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss("Button.WF_btn_Inner", "shadow", obj, ["pushed"]);

    obj = new nexacro.Style_value("1 solid #f79a00");
    this._addCss("CheckBox.required_input", "buttonborder", obj, ["normal", "focused", "mouseover", "pushed"]);
    this._addCss("Radio.required_input", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e6e7e8 0,50 #ffffff");
    this._addCss("CheckBox.required_input", "buttongradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Radio.required_input", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 6 0 6");
    this._addCss("Edit", "padding", obj, ["readonly"]);
    this._addCss("MaskEdit", "padding", obj, ["readonly"]);
    this._addCss("Button.WFSA_btn_Search", "padding", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("2c3e50");
    this._addCss("Edit", "color", obj, ["readonly"]);
    this._addCss("TextArea", "color", obj, ["readonly"]);
    this._addCss("MaskEdit", "color", obj, ["readonly"]);
    this._addCss("Spin", "color", obj, ["readonly"]);
    this._addCss("Combo", "color", obj, ["readonly"]);
    this._addCss("Calendar", "color", obj, ["readonly"]);

    obj = new nexacro.Style_padding("1 1 1 1");
    this._addCss("TextArea", "padding", obj, ["readonly"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Spin", "background", obj, ["readonly"]);
    this._addCss("Combo", "background", obj, ["readonly"]);
    this._addCss("Calendar", "background", obj, ["readonly"]);

    obj = new nexacro.Style_value("-3");
    this._addCss("Spin", "buttonsize", obj, ["readonly"]);
    this._addCss("Combo", "buttonsize", obj, ["readonly"]);
    this._addCss("Calendar", "buttonsize", obj, ["readonly"]);

    obj = new nexacro.Style_background("#ff0000ff","","","0","0","0","0","true");
    this._addCss("Spin", "itembackground", obj, ["readonly"]);

    obj = new nexacro.Style_background("#5659e7ff","","","0","0","0","0","true");
    this._addCss("Grid.LF_grd_TreeMenu", "background", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "background", obj, ["normal", "pushed"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "background", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#3f41a7ff","","1","solid","#3f41a7ff","","0","none","#808080ff","","0","none","#808080ff","");
    this._addCss("Grid.LF_grd_TreeMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.LF_grd_TreeMenu", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.LF_grd_TreeMenu", "selectline", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.LF_grd_TreeMenu", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectlinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("Images::class/WF_grd_TreeClose.png");
    this._addCss("Grid.LF_grd_TreeMenu", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("Images::class/WF_grd_TreeItem.png");
    this._addCss("Grid.LF_grd_TreeMenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.LF_grd_TreeMenu", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","#a5b6b6ff","");
    this._addCss("Grid.LF_grd_TreeMenu", "treelinetype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("Images::class/WF_grd_TreeOpen.png");
    this._addCss("Grid.LF_grd_TreeMenu", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("Images::class/WF_grd_TreeCloseO.png");
    this._addCss("Grid.LF_grd_TreeMenu", "treeclosebuttonimage", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('Images::class/WF_grd_TreeItemO.png')");
    this._addCss("Grid.LF_grd_TreeMenu", "treeitemimage", obj, ["mouseover"]);

    obj = new nexacro.Style_value("Images::class/WF_grd_TreeOpenO.png");
    this._addCss("Grid.LF_grd_TreeMenu", "treeopenbuttonimage", obj, ["mouseover"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#5659e7ff","","","0","0","0","0","true");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#5659e7ff","","","0","0","0","0","true");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellbackground2", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","1","solid","#3f41a7ff","","0","none","#808080ff","");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "celllinespace", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#3f41a7");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectgradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#3f41a7ff","","0","none","#808080ff","","0","none","#3f41a7ff","","0","none","#808080ff","");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#fff200");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#fff200");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#fff200");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#3c3fce");
    this._addCss("Grid.LF_grd_TreeMenu>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#3f41a7ff","","","0","0","0","0","true");
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#3f41a7ff","");
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/ScrollbarV_grd_Grip.png')");
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "image", obj, ["normal"]);

    obj = new nexacro.Style_background("#686bf4ff","","","0","0","0","0","true");
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("url('Images::class/ScrollbarV_grd_GripP.png')");
    this._addCss("Grid.LF_grd_TreeMenu>#vscrollbar>#trackbar", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("url('Images::class/ScrollbarH_grd_Grip.png')");
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/ScrollbarH_grd_GripP.png')");
    this._addCss("Grid.LF_grd_TreeMenu>#hscrollbar>#trackbar", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.LF_sta_Bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #3c3c44 100,100 #35353d [85% #3c3c44]");
    this._addCss("Static.LF_sta_Bg", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","Images::class/LF_sta_Logo.png","","0","0","50","50","true");
    this._addCss("Static.LF_sta_Logo", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #5659e6 0,100 #4c4fcf [97% #4245b7]");
    this._addCss("Static.LF_sta_Logo", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("3","solid","#eb707eff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.LF_sta_Logo", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Button.MF_btn_IconList", "align", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","Images::class/MF_002_Eco.png","","0","0","50","50","true");
    this._addCss("Button.MF_btn_IconList", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f7f7f7ff 0,100 #fefefeff [5% #e5e5e5ff]");
    this._addCss("Button.MF_btn_IconList", "gradation", obj, ["normal", "focused"]);
    this._addCss("Button.TF_btn_Home", "gradation", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);
    this._addCss("Button.TF_btn_MDI", "gradation", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#c4c4c3ff","");
    this._addCss("Button.MF_btn_IconList", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("Button.MF_btn_IconList", "bordertype", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Grid.WF_grd_Chart", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 10 Verdana, antialias bold 10 malgun gothic");
    this._addCss("Button.MF_btn_IconList", "font", obj, ["normal", "focused"]);
    this._addCss("Static.WFDA_sta_header", "font", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_label", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 10 0");
    this._addCss("Button.MF_btn_IconList", "padding", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("5","solid","#1abd9cff","");
    this._addCss("Button.MF_btn_IconList", "border", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#5659e7");
    this._addCss("Button.MF_btn_IconList", "color", obj, ["mouseover", "selected", "pushed"]);
    this._addCss("Button.TF_btn_MDI", "color", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Tab.TF_tab_MDI", "color", obj, ["selected", "focused", "mouseover"]);
    this._addCss("Static.WF_sta_Title", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 6 0");
    this._addCss("Button.MF_btn_IconList", "padding", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_border("5","solid","#5659e7ff","");
    this._addCss("Button.MF_btn_IconList", "border", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#939496ff","");
    this._addCss("Button.MF_btn_IconList", "border", obj, ["disabled"]);
    this._addCss("Button.TF_btn_Home", "border", obj, ["normal", "focused", "mouseover", "disabled"]);
    this._addCss("Button.TF_btn_MDI", "border", obj, ["normal", "focused", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ffffff80");
    this._addCss("Button.MF_btn_IconList", "color", obj, ["disabled"]);
    this._addCss("Button.TF_btn_Home", "color", obj, ["disabled"]);
    this._addCss("Button.TF_btn_MDI", "color", obj, ["disabled"]);
    this._addCss("Button.TF_btn_MDIClose", "color", obj, ["disabled"]);
    this._addCss("Button.TF_btn_MDINext", "color", obj, ["disabled"]);
    this._addCss("Button.TF_btn_MDIPrev", "color", obj, ["disabled"]);
    this._addCss("Button.WF_btn_Help", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","Images::class/MDI_btn_Home.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_Home", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 25");
    this._addCss("Button.TF_btn_Home", "padding", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.WF_btn_Help", "padding", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("@gradation","Images::class/MDI_btn_HomeO.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_Home", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","Images::class/MDI_btn_HomeO.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_Home", "background", obj, ["selected", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#939496ff","","1","solid","#939496ff","","1","solid","#ffffffff","","1","solid","#939496ff","");
    this._addCss("Button.TF_btn_Home", "border", obj, ["selected", "pushed"]);
    this._addCss("Button.TF_btn_MDI", "border", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("#eeeeeeff","Images::class/MDI_btn_Home.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_Home", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("Button.TF_btn_MDI", "padding", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Static.WF_sta_Dsc", "padding", obj, ["normal"]);
    this._addCss("Static.WF_sta_DscP", "padding", obj, ["normal"]);
    this._addCss("Static.WF_sta_Popup", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#eeeeeeff","","","0","0","0","0","true");
    this._addCss("Button.TF_btn_MDI", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_Extra.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIClose", "background", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_ExtraO.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIClose", "background", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_color("#1abd9c");
    this._addCss("Button.TF_btn_MDIClose", "color", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Button.TF_btn_MDINext", "color", obj, ["mouseover", "selected", "pushed"]);
    this._addCss("Button.TF_btn_MDIPrev", "color", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnN.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDINext", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnO.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDINext", "background", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnP.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDINext", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnD.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDINext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupN.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIPrev", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupO.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIPrev", "background", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupP.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIPrev", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupD.png","","0","0","50","50","true");
    this._addCss("Button.TF_btn_MDIPrev", "background", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dedfe2 [50% #f8f9f9] [75% #e6e8ea] [95% #e1e2e5]");
    this._addCss("Static.TF_sta_Bg", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("3","solid","#eb707eff","","0","none","","","1","solid","#939496ff","","0","none","","");
    this._addCss("Static.TF_sta_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#939496ff","");
    this._addCss("Tab.TF_tab_MDI", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 12 Verdana,antialias  bold 12 malgun gothic");
    this._addCss("Tab.TF_tab_MDI", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #939496ff");
    this._addCss("Tab.TF_tab_MDI", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","true","false","false");
    this._addCss("Tab.TF_tab_MDI", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c5c7c9ff 0,100 #939496 [5% #b9bbbdff][10% #bfc0c1ff][55% #ccccccff][97% #acaeb0ff]");
    this._addCss("Tab.TF_tab_MDI", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("11 0 11 18");
    this._addCss("Tab.TF_tab_MDI", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.TF_tab_MDI", "showextrabutton", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f7f7f7ff 0,100 #fefefeff [5% #e5e5e5ff]");
    this._addCss("Tab.TF_tab_MDI", "buttongradation", obj, ["selected", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupN.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spinupbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupO.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spinupbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpinupD.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spinupbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnN.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spindownbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnO.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spindownbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::class/MDI_tab_SpindnD.png","","0","0","50","50","true");
    this._addCss("Tab.TF_tab_MDI>#spindownbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","solid","","");
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("Images::class/MDI_tab_Extra.png");
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "imagepadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("Images::class/MDI_tab_SpindnO.png");
    this._addCss("Tab.TF_tab_MDI>#extrabutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#1abd9cff","Images::class/WF_btn_Help.png","","0","0","0","50","true");
    this._addCss("Button.WF_btn_Help", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#08a384ff","");
    this._addCss("Button.WF_btn_Help", "border", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#5659e7ff","Images::class/WF_btn_Help.png","","0","0","0","50","true");
    this._addCss("Button.WF_btn_Help", "background", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#484bd9ff","");
    this._addCss("Button.WF_btn_Help", "border", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_background("#6c849fff","Images::class/WF_btn_Help.png","","0","0","0","0","true");
    this._addCss("Button.WF_btn_Help", "background", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f3f3f3 0,100 #dddddd");
    this._addCss("Button.WF_btn_Inner", "gradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#525969");
    this._addCss("Button.WF_btn_Inner", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_shadow("drop 0,1 2 #00000050");
    this._addCss("Button.WF_btn_Inner", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.WF_btn_Point", "shadow", obj, ["normal", "focused"]);
    this._addCss("Button.WFSA_btn_Search", "shadow", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dedede");
    this._addCss("Button.WF_btn_Inner", "gradation", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e2e2e2 0,100 #f3f3f3");
    this._addCss("Button.WF_btn_Inner", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f3f3f3 0,100 #e3e3e3");
    this._addCss("Button.WF_btn_Inner", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #838996 0,100 #535a6a [5% #717784] [45% #666c7a][50% #5d6473] [55% #5d6473]");
    this._addCss("Button.WF_btn_Point", "gradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#444a56ff","");
    this._addCss("Button.WF_btn_Point", "border", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #a4a9b6 0,100 #7c8290 [40% #696f7c][45% #5c6271][50% #555c6d]");
    this._addCss("Button.WF_btn_Point", "gradation", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #8b909d 0,100 #8f95a4 [5% #666b79]");
    this._addCss("Button.WF_btn_Point", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #737987 0,100 #626979");
    this._addCss("Button.WF_btn_Point", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_color("#b5b9c0");
    this._addCss("Button.WF_btn_Point", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","Images::class/WF_btn_SearchS.png","stretch","0","0","0","0","true");
    this._addCss("Button.WF_btn_SearchS", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #a2a3ab 0,100 #7e8089 [50% #86888f][50% #7e8089]");
    this._addCss("Button.WF_btn_Prev", "gradation", obj, ["normal"]);
    this._addCss("Button.WF_btn_Next", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#666666ff","");
    this._addCss("Button.WF_btn_Prev", "border", obj, ["normal"]);
    this._addCss("Button.WF_btn_Next", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","15","15","true","true","true","true");
    this._addCss("Button.WF_btn_Prev", "bordertype", obj, ["normal"]);
    this._addCss("Button.WF_btn_Next", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/WF_btn_SchedulePrev.png')");
    this._addCss("Button.WF_btn_Prev", "image", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 0,1 1 #00000050");
    this._addCss("Button.WF_btn_Prev", "shadow", obj, ["normal"]);
    this._addCss("Button.WF_btn_Next", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/WF_btn_ScheduleNext.png')");
    this._addCss("Button.WF_btn_Next", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Button.WF_btn_ScheduleChk", "align", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_font("antialias bold 9 Verdana,antialias bold 9 malgun gothic");
    this._addCss("Button.WF_btn_ScheduleChk", "font", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_color("#19191b");
    this._addCss("Button.WF_btn_ScheduleChk", "color", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_background("","Images::class/WF_btn_ScheduleChk.png","","0","0","50","100","true");
    this._addCss("Button.WF_btn_ScheduleChk", "background", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.WF_btn_ScheduleChk", "padding", obj, ["focused", "selected", "pushed", "mouseover"]);

    obj = new nexacro.Style_value("13");
    this._addCss("Div.WF_div_View>#vscrollbar", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 3 0 0");
    this._addCss("Div.WF_div_View>#vscrollbar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b5b7bbff","");
    this._addCss("Grid.WF_grd_Chart", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/WF_grd_TreeClose.png')");
    this._addCss("Grid.WF_grd_Chart", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/WF_grd_TreeOpen.png')");
    this._addCss("Grid.WF_grd_Chart", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::class/WF_grd_TreeItem.png')");
    this._addCss("Grid.WF_grd_Chart", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("Grid.WF_grd_Chart>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.WF_grd_Chart>#body", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f1f3ff","","","0","0","0","0","true");
    this._addCss("Grid.WF_grd_Chart>#body", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_value("#7e8089");
    this._addCss("Grid.WF_grd_Chart>#body", "selectbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.WF_grd_Message>#body", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#c3c5cbff","","","0","0","0","0","true");
    this._addCss("Grid.WF_grd_Chart>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#c3c5cbff","","","0","0","0","0","true");
    this._addCss("Grid.WF_grd_Chart>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.WF_grd_Message>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","Images::class/WF_grd_Launch.png","stretch","0","0","0","0","true");
    this._addCss("Grid.WF_grd_Chart>#controlbutton", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("1 1");
    this._addCss("Grid.WF_grd_Chart>#controlbutton", "pusheddrawoffset", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("url('Images::base/WF_grd_TreeOpen.png')");
    this._addCss("Grid.WF_grd_Message", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("url('Images::base/WF_grd_TreeItem.png')");
    this._addCss("Grid.WF_grd_Message", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","1","solid","#9b9b9bff","");
    this._addCss("Grid.WF_grd_Message>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_color("#546687");
    this._addCss("Static.WF_sta_Dsc", "color", obj, ["normal"]);
    this._addCss("Static.WF_sta_DscP", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_Dsc.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_Dsc", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#ea5810");
    this._addCss("Static.WF_sta_DscP", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_DscP.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_DscP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_Location.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_DscP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_Popup.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_Popup", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 11 Verdana,antialias bold 11 malgun gothic");
    this._addCss("Static.WF_sta_Popup", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_Title.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_Title", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","2","solid","#5659e7ff","","0","none","","");
    this._addCss("Static.WF_sta_Title", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 28");
    this._addCss("Static.WF_sta_Title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 12 Verdana,antialias bold 12 malgun gothic");
    this._addCss("Static.WF_sta_Title", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::class/WF_sta_SubTitle.png","","0","0","0","50","true");
    this._addCss("Static.WF_sta_SubTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 2 19");
    this._addCss("Static.WF_sta_SubTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#939496ff","","0","none","#808080ff","","1","solid","#939496ff","","0","none","#808080ff","");
    this._addCss("Static.WFT_sta_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f8f9ff","","","0","0","0","0","true");
    this._addCss("Static.WFDA_sta_LabelThrough", "background", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_label", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6cbceff","","0","none","","","1","solid","#c6cbceff","","0","none","","");
    this._addCss("Static.WFDA_sta_LabelThrough", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 11");
    this._addCss("Static.WFDA_sta_LabelThrough", "padding", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BlockRT", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockNormal", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRB", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_BlockRTRB", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_label", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Static.WFDA_sta_LabelLT", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "background", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","false","false","false");
    this._addCss("Static.WFDA_sta_LabelLT", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.WFDA_sta_LabelLT", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Button.WFSA_btn_Search", "align", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("0 11 0 0");
    this._addCss("Static.WFDA_sta_LabelLT", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelNormal", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLB", "padding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.WFDA_sta_LabelLTLB", "padding", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","false","false","true","false");
    this._addCss("Static.WFDA_sta_LabelLB", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","true","false","true","false");
    this._addCss("Static.WFDA_sta_LabelLTLB", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","false","true","false","false");
    this._addCss("Static.WFDA_sta_BlockRT", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","5","5","false","false","false","true");
    this._addCss("Static.WFDA_sta_BlockRB", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ff8c00 0,100 #bf430e [5% #fe6900] [45% #ef6906][50% #db5c17] [90% #c84a12][95% #bf430e]");
    this._addCss("Button.WFSA_btn_Search", "gradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#b92c00ff","");
    this._addCss("Button.WFSA_btn_Search", "border", obj, ["normal", "focused", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Button.WFSA_btn_Search", "color", obj, ["normal", "focused", "mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_value("url('Images::class/WFSA_btn_Search.png')");
    this._addCss("Button.WFSA_btn_Search", "image", obj, ["normal", "focused"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.WFSA_btn_Search", "imagealign", obj, ["normal", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffca00 0,100 #f49103 [45% #ef6a06] [50% #d75817] [55% #cb4b16]");
    this._addCss("Button.WFSA_btn_Search", "gradation", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f2a709 0,100 #ff6c00 [5% #dc5d17]");
    this._addCss("Button.WFSA_btn_Search", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#e97b2bff","","","0","0","0","0","true");
    this._addCss("Button.WFSA_btn_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#eaaf8e");
    this._addCss("Button.WFSA_btn_Search", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#ff9000ff","");
    this._addCss("Static.WFSA_sta_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 1,1 1 #00000024");
    this._addCss("Static.WFSA_sta_Bg", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::base/WFSA_sta_Label.png","","0","0","0","50","true");
    this._addCss("Static.WFSA_sta_Label", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss("Static.WFSA_sta_Label", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#c6cbceff","");
    this._addCss("Static.WF_sta_Orange", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#f79a00");
    this._addCss("Static.WF_sta_Orange", "color", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e1e1e1");
    this._addCss("Static.WFDA_sta_header", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#156ab0ff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","","1","solid","#c6c6c6ff","");
    this._addCss("Static.WFDA_sta_header", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6cbceff","");
    this._addCss("Static.WFDA_sta_label", "border", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_BoxR", "border", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 4 11");
    this._addCss("Static.WFDA_sta_BoxR", "padding", obj, ["normal"]);
    this._addCss("Static.WFDA_sta_Box", "padding", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
