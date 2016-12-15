//CSS=theme.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("MainFrame", "accessibility", obj, ["normal"]);
    this._addCss("ChildFrame", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Button", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "accessibility", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#head", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controledit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "accessibility", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "accessibility", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "accessibility", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "accessibility", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "accessibility", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "accessibility", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "accessibility", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "accessibility", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Title", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "accessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "accessibility", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "accessibility", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "accessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "accessibility", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#summ", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "background", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Radio.essential", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "background", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "background", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Search", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_TodoList", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("CheckBox.chk_Login_Id", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Edit.edi_Login_Id", "background", obj, ["normal", "diabled", "mouseover", "focused"]);

    obj = new nexacro.Style_border("2","solid","#666666ff","");
    this._addCss("MainFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("GroupBox", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("ChildFrame", "font", obj, ["normal"]);
    this._addCss("VScrollBar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Edit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ImageViewer", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("ProgressBar", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "font", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "font", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "font", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "font", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "font", obj, ["normal"]);
    this._addCss("Button.btn_MDI_TabSpinup", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "font", obj, ["normal"]);
    this._addCss("Button.btn_MF_Refresh", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("MainFrame", "gradation", obj, ["normal"]);
    this._addCss("ChildFrame", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Button", "gradation", obj, ["disabled"]);
    this._addCss("Calendar", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controledit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "gradation", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("SpinControl", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Static", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "gradation", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "gradation", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "gradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "gradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "gradation", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "gradation", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "gradation", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_Search", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Title", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "gradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "gradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "gradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "opacity", obj, ["normal"]);
    this._addCss("ChildFrame", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Button", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controledit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "opacity", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "opacity", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab>#extrabutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("TextArea", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "opacity", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "opacity", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "opacity", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "opacity", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "opacity", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "opacity", obj, ["normal"]);
    this._addCss("Static.sta_LF_Logo", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_TabSpindown", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_MDI_Extend", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_Cascade", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_AllClose", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_MDI_Bg", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_CRUD", "opacity", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WF_Search", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "opacity", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "opacity", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "opacity", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "opacity", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "opacity", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "opacity", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "opacity", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "opacity", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Div.div_Login_Bg", "opacity", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);
    this._addCss("ChildFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("26");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#235798ff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "align", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("Calendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Edit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("GroupBox", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "background", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("Form.from_POP", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential", "background", obj, ["normal"]);
    this._addCss("Combo.essential", "background", obj, ["normal"]);
    this._addCss("Spin.essential", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["normal", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_WF_Tree>#body", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "background", obj, ["selected"]);
    this._addCss("Grid.grd_MF_Cal>#body", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "border", obj, ["normal", "pushed", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Menu", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("PopupDiv", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar.essential>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "border", obj, ["normal"]);
    this._addCss("Static.sta_LF_Logo", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_close", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_01", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_03", "border", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Delete", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Title", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_Login_Login", "border", obj, ["normal", "disabed", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_Login_Close", "border", obj, ["normal", "disabed", "mouseover", "focused", "pushed"]);
    this._addCss("CheckBox.chk_Login_Id", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Div.div_Login_Bg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edi_Login_Id", "border", obj, ["normal", "diabled", "mouseover", "focused"]);
    this._addCss("Static.sta_Login_Inputbg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("");
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("VScrollBar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("FileUpload", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#resizebutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ProgressBar", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "color", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.essential>#dropbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_line", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#resizebutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "align", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "align", obj, ["normal"]);
    this._addCss("Button.btn_MDI_TabSpinup", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "align", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("VScrollBar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "background", obj, ["normal"]);
    this._addCss("Div.div_WF_WFBg", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("12");
    this._addCss("VScrollBar", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("VScrollBar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("VScrollBar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("TextArea.essential", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Title", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_Login_Login", "bordertype", obj, ["normal", "disabed", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_Login_Close", "bordertype", obj, ["normal", "disabed", "mouseover", "focused", "pushed"]);
    this._addCss("CheckBox.chk_Login_Id", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Div.div_Login_Bg", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edi_Login_Id", "bordertype", obj, ["normal", "diabled", "mouseover", "focused"]);
    this._addCss("Static.sta_Login_Inputbg", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "cursor", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "cursor", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "cursor", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "cursor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "cursor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_LF_SearchBg", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "cursor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("VScrollBar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "padding", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "padding", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("ImageViewer", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "padding", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#spinupbutton", "padding", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "padding", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.readonly", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar.essential", "padding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "padding", obj, ["normal"]);
    this._addCss("Static.sta_LF_Logo", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "padding", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("13");
    this._addCss("VScrollBar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("VScrollBar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Button", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#dropbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo>#combolist", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "shadow", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controledit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "shadow", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("GroupBox", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ImageViewer", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("MaskEdit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Menu", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("ProgressBar", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TitleBarControl", "shadow", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "shadow", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Combo.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "shadow", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "shadow", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "shadow", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Edit.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TextArea.essential", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "shadow", obj, ["normal"]);
    this._addCss("Static.sta_LF_Logo", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MDI", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "shadow", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "shadow", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "shadow", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "shadow", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "shadow", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "shadow", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "shadow", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_Login_Bg", "shadow", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#cfcfcfff","");
    this._addCss("VScrollBar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.readonly>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton_O.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton_D.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton_O.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton_D.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ImageViewer", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBar", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "align", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "align", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "align", obj, ["normal"]);
    this._addCss("Static.sta_MF_ScheduleArea", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_MF_Article", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "align", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#d4d4d4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#b2b6bfff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Button", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("*>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#resizebutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "imagealign", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "imagealign", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#a4a4a4ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#888c95ff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#dededeff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#dededeff","");
    this._addCss("VScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","","0","none","","","0","none","","","0","none","","");
    this._addCss("HScrollBar", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton2.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton2_O.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_IncButton2_D.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton2.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton2_O.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_DecButton2_D.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("*>#resizebutton", "border", obj, ["normal"]);
    this._addCss("Grid>#resizebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("FileDownload", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Static.sta_POP_Title", "background", obj, ["normal", "disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_SearchSmall", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Button.btn_WF_ShuttleL", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "background", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Button", "border", obj, ["normal", "disabled"]);
    this._addCss("FileDownload", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Download", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Button", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("FileDownload", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_Add", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_Delete", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_Download", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "color", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "color", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "color", obj, ["normal"]);
    this._addCss("Button.btn_MF_ViewType_First", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_MemoDate", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Logout", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "cursor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Extend", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "cursor", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_SearchSmall", "cursor", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Add", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "cursor", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Refresh", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_MemoList", "cursor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Button", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Div", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileDownload", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "font", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("GroupBox", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ListBox", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("PopupDiv", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "font", obj, ["normal", "disabled"]);
    this._addCss("Radio", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab", "font", obj, ["normal", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.readonly", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar.essential", "font", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "font", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin.essential", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuOpen", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_LeftMenuClose", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "font", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_Add", "font", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "font", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "font", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "font", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".Cellgrd_WF_sum01", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum02", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_WF_sum03", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_SearchLabel", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_MF_Cal", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalPrev", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_TodoView", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Search", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_MF_Article", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f8f8f8");
    this._addCss("Button", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "gradation", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_CRUD", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Extend", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Downsize", "padding", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#444444ff","");
    this._addCss("Button", "border", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dfdfdf");
    this._addCss("Button", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("FileDownload", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_SearchSmall", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dfdfdf 0,100 #ffffff");
    this._addCss("Button", "gradation", obj, ["pushed"]);
    this._addCss("Combo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_SearchSmall", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","dotted","#777777ff","");
    this._addCss("Button", "border", obj, ["focused"]);
    this._addCss("Calendar", "border", obj, ["focused"]);
    this._addCss("Calendar>#popupcalendar", "border", obj, ["focused"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["focused"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["focused"]);
    this._addCss("CheckBox", "border", obj, ["focused"]);
    this._addCss("Combo", "border", obj, ["focused"]);
    this._addCss("Combo>#combolist", "border", obj, ["focused"]);
    this._addCss("Edit", "border", obj, ["focused"]);
    this._addCss("FileDownload", "border", obj, ["focused"]);
    this._addCss("FileUpload", "border", obj, ["focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["focused"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["focused"]);
    this._addCss("ImageViewer", "border", obj, ["focused"]);
    this._addCss("ListBox", "border", obj, ["focused"]);
    this._addCss("MaskEdit", "border", obj, ["focused"]);
    this._addCss("Menu", "border", obj, ["focused"]);
    this._addCss("ProgressBar", "border", obj, ["focused"]);
    this._addCss("ProgressBarControl", "border", obj, ["focused"]);
    this._addCss("Radio", "border", obj, ["focused"]);
    this._addCss("Spin", "border", obj, ["focused"]);
    this._addCss("SpinControl", "border", obj, ["focused"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["focused"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["focused"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["focused"]);
    this._addCss("TextArea", "border", obj, ["focused"]);
    this._addCss("Calendar.readonly", "border", obj, ["focused"]);
    this._addCss("Combo.readonly", "border", obj, ["focused"]);
    this._addCss("Spin.readonly", "border", obj, ["focused"]);
    this._addCss("Calendar.essential", "border", obj, ["focused"]);
    this._addCss("CheckBox.essential", "border", obj, ["focused"]);
    this._addCss("Combo.essential", "border", obj, ["focused"]);
    this._addCss("Edit.essential", "border", obj, ["focused"]);
    this._addCss("MaskEdit.essential", "border", obj, ["focused"]);
    this._addCss("Spin.essential", "border", obj, ["focused"]);
    this._addCss("TextArea.essential", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Search", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_ShuttleT", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_ShuttleB", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Custom", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Add", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Delete", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Download", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Upload", "border", obj, ["focused"]);
    this._addCss("Button.btn_WF_Extend", "border", obj, ["focused"]);

    obj = new nexacro.Style_background("#fefdfeff","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#b6b6b6");
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Calendar", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Edit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("FileUpload", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Static.sta_POP_Title", "align", obj, ["normal", "disabled"]);
    this._addCss("Radio", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Calendar.readonly", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "align", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.essential", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Radio.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edt_LF_Search", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_01", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "align", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_WF_Search", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Add", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Download", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "align", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_Title", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "align", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal"]);
    this._addCss("Edit", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);
    this._addCss("GroupBox", "border", obj, ["normal", "mouseover"]);
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "border", obj, ["normal"]);
    this._addCss("Combo.essential", "border", obj, ["normal"]);
    this._addCss("Edit.essential", "border", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "border", obj, ["normal"]);
    this._addCss("Spin.essential", "border", obj, ["normal"]);
    this._addCss("TextArea.essential", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_SearchSmall", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleL", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "buttonsize", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo>#combolist", "color", obj, ["normal", "selected"]);
    this._addCss("Div", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ImageViewer", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupDiv", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TitleBarControl", "color", obj, ["deactivate", "disabled"]);
    this._addCss("Calendar.readonly", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.readonly>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential", "color", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Calendar.essential>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.essential", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Edit.essential", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio.essential", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Spin.essential", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential>#spinedit", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.essential", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_Tree", "color", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "color", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "color", obj, ["normal"]);
    this._addCss("Static.sta_LF_Logo", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("Div.div_WF_SearchBg", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_Title", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Group", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_MF_Article", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "color", obj, ["normal"]);
    this._addCss(".Cellgrd_MF_Belong", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "daybackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daybackground", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "daybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "dayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "dayborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daybordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daybordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Calendar", "daycolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "daycolor", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "daycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["normal", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "dayfont", obj, ["normal", "mouseover", "pushed", "selected"]);
    this._addCss("Calendar.essential", "dayfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Calendar", "daygradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "daygradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daygradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daygradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Calendar", "daysize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar", "daysize", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "daysize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "daysize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Calendar", "popupalign", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupalign", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupalign", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupalign", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupbackground", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#5b6473ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupbordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Calendar", "popupgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popupgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("156 181");
    this._addCss("Calendar", "popupsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "popupsize", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popupsize", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "popuptype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar", "popuptype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "popuptype", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Calendar.readonly", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "popuptype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "popuptype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "popuptype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "popuptype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Calendar", "trailingdaycolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "trailingdaycolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "trailingdaycolor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "trailingdaycolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "usetrailingday", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "usetrailingday", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "usetrailingday", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "usetrailingday", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "viewmonthspin", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Calendar.readonly", "viewyearspin", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar.essential", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#0f7ec5ff","");
    this._addCss("Calendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("Combo", "border", obj, ["mouseover", "selected"]);
    this._addCss("Edit", "border", obj, ["mouseover"]);
    this._addCss("FileDownload", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "pushed"]);
    this._addCss("TextArea", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "daybackground", obj, ["focused"]);
    this._addCss("Calendar.essential", "daybackground", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar", "daycolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "daycolor", obj, ["focused"]);
    this._addCss("Calendar.essential", "daycolor", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_font("bold 8 Tahoma");
    this._addCss("Calendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["mouseover", "focused"]);
    this._addCss("Calendar.readonly", "dayfont", obj, ["focused"]);
    this._addCss("Calendar.essential", "dayfont", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#cae6f7ff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#fdfdfdff","","","0","0","0","0","true");
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("Calendar.essential", "background", obj, ["disabled"]);
    this._addCss("Combo.essential", "background", obj, ["disabled"]);
    this._addCss("Combo.cmb_MF_Order", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cfcfcfff","");
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);
    this._addCss("GroupBox", "border", obj, ["disabled"]);
    this._addCss("ImageViewer", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);
    this._addCss("Calendar.essential", "border", obj, ["disabled"]);
    this._addCss("Combo.essential", "border", obj, ["disabled"]);
    this._addCss("Edit.essential", "border", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "border", obj, ["disabled"]);
    this._addCss("Spin.essential", "border", obj, ["disabled"]);
    this._addCss("TextArea.essential", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aeaeae");
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("Calendar.essential", "color", obj, ["disabled"]);
    this._addCss("Combo.essential", "color", obj, ["disabled"]);
    this._addCss("Combo.essential>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Edit.essential", "color", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "color", obj, ["disabled"]);
    this._addCss("Spin.essential", "color", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinedit", "color", obj, ["disabled"]);
    this._addCss("TextArea.essential", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_MF_Order", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.essential", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.readonly>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Edit.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar.essential>#calendaredit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.essential", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_Search", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Edit.edi_MF_MemoTitle", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectcolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Calendar.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("Calendar.essential>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_padding("1 2 0 0");
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Calendar_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Spinup.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Calendar.readonly>#spinupbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Spinup_D.png')");
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Spindown.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Calendar.readonly>#spindownbutton", "image", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Spindown_D.png')");
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.essential>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#5b6473ff","");
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("22 0 0 0");
    this._addCss("Calendar>#popupcalendar", "ncpadding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("Calendar>#popupcalendar", "headerformat", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Calendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "daybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Calendar>#popupcalendar", "dayfont", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("25");
    this._addCss("Calendar>#popupcalendar", "headerheight", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "headercolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#2b3753ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "headerbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "headerborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "headerbordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Tahoma");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "bodybackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "bodyborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "bodybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("Calendar>#popupcalendar", "weekformat", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "weekcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#2b3753ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "weekbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "todaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fb635eff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "todaybackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "todayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "todaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "todayfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "saturdayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "saturdayfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#5f9dde");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar>#popupcalendar", "sundayborder", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar>#popupcalendar", "sundaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ee6b67");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("8 Tahoma");
    this._addCss("Calendar>#popupcalendar", "sundayfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar", "popupsize", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "popupsize", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#bebebe");
    this._addCss("Calendar>#popupcalendar", "trailingdaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "trailingdaycolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar>#popupcalendar", "usetrailingday", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "usetrailingday", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "saturdaybackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "saturdaycolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#217fedff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar", "sundaybackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar", "sundaycolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalPrev.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalPrev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalPrev_D.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalNext.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalNext_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalNext_D.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo>#combolist", "color", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["mouseover", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ListBox", "color", obj, ["mouseover"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Static.sta_POP_Title", "color", obj, ["normal", "disabled"]);
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("Button.btn_TF_Logout", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_LF_Menu_S", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "color", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "color", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_Number", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Tahoma");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "pushed", "disabled", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_Menu_S", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuOpen", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_RecentMenuClose", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_LF_Search", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpinup.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#monthupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#monthupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpinup_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpinup_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpindown.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpindown_O.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_CalSpindown_D.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#80808000","");
    this._addCss("CheckBox", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Radio", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Radio.essential", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio", "buttonalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_CheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("CheckBox", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonbackgroundimagemode", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("CheckBox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("CheckBox", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload", "buttongradation", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab", "buttongradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("CheckBox.essential", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttongradation", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tab.tab_MDI", "buttongradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "buttongradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("14");
    this._addCss("CheckBox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio", "buttonsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("CheckBox.chk_Login_Id", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 0 1 3");
    this._addCss("CheckBox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_CheckBox_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_CheckBox_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("CheckBox.essential", "color", obj, ["disabled"]);
    this._addCss("Radio.essential", "color", obj, ["disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Combo", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemaccessibility", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemaccessibility", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemaccessibility", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itemaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("PopupMenu", "itembackground", obj, ["normal", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itembackground", obj, ["normal", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itembackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemborder", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);
    this._addCss("Radio", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itemborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["normal", "disabled"]);
    this._addCss("Combo>#combolist", "itembordertype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembordertype", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itembordertype", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itembordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.readonly", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itembordertype", obj, ["normal", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itembordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Combo", "itemcolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemcolor", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemcolor", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemcolor", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemcolor", obj, ["normal", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itemcolor", obj, ["selected", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Combo", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.readonly", "itemfont", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemfont", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Combo", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemgradation", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemgradation", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Menu", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemgradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemgradation", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Radio.essential", "itemgradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itemgradation", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("21");
    this._addCss("Combo", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("FileUpload", "itemheight", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemheight", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itemheight", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itemheight", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itemheight", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itemheight", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("Combo", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo>#combolist", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itempadding", obj, ["normal", "mouseover", "disabled", "focused", "selected"]);
    this._addCss("ListBox", "itempadding", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);
    this._addCss("Combo.readonly", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.essential", "itempadding", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "itempadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#3ca1dcff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover", "disabled", "focused"]);
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("Combo.essential", "itembackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Menu", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio", "itembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo.essential", "itembordertype", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Radio.essential", "itembordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo", "itemcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "itemcolor", obj, ["mouseover", "focused"]);
    this._addCss("Combo.essential", "itemcolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#e9f2f4ff","","","0","0","0","0","true");
    this._addCss("Combo", "itembackground", obj, ["selected"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected", "focused"]);
    this._addCss("Combo.essential", "itembackground", obj, ["selected"]);
    this._addCss("Combo.cmb_MF_Order", "itembackground", obj, ["selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#ccccccff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Combo.essential>#dropbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/cmb_WF_Drop.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/cmb_WF_Drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Combo.cmb_MF_Order>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal", "mouseover", "selected", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal", "mouseover", "disabled", "selected"]);
    this._addCss("ListBox", "border", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_align("");
    this._addCss("Div", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab", "stepalign", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "stepalign", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Tab.tab_MDI", "stepalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_WF_SearchBg", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_WF_WFBg", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Article", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Div.div_MF_Memo_On", "stepalign", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "stepalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("#3da2df");
    this._addCss("Edit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f8f7");
    this._addCss("FileDownload", "gradation", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileDownload", "linespace", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_Logo", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_LF_SearchBg", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Bg", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MDI_Logo", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_Title", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SearchLabel", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel02", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLine", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ScheduleArea", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_CalDate", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoArea", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_TodoTitle", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SelectDay", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Day", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Name", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Label", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDsc", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoMotify", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoClose", "linespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Div.div_Login_Bg", "linespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#b4b4b4");
    this._addCss("FileDownload", "color", obj, ["disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("FileUpload", "buttonaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #b6b6b6");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "buttonfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fcfcfc 0,100 #f7f7f7");
    this._addCss("FileUpload", "buttongradation", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("73");
    this._addCss("FileUpload", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("FileUpload");
    this._addCss("FileUpload", "buttontext", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("FileUpload", "editaccessibility", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#bbbbbbff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "pushed", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("FileUpload", "editfont", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("FileUpload", "editgradation", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 9 0 9");
    this._addCss("FileUpload", "editpadding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#838383ff","");
    this._addCss("FileUpload", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f0f0f0");
    this._addCss("FileUpload", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#898989ff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #838383");
    this._addCss("FileUpload", "buttonborder", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #eaeaea 0,100 #fefefe");
    this._addCss("FileUpload", "buttongradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #bdbdbd");
    this._addCss("FileUpload", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_color("#adadad");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ebebebff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdbdbdff","");
    this._addCss("FileUpload", "editborder", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#6477adff","","1","solid","#c9c9c9ff","","1","solid","#76b9ccff","","0","none","","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "line", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "line", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "line", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectlinetype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectlinetype", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_TreeClose.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_TreeItem.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treeitemmargin", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treeitemmargin", obj, ["normal"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treelinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_TreeOpen.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#6477adff","","1","solid","#6477adff","");
    this._addCss("Grid>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#eaeaeaff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "celllinespace", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "celllinespace", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "celllinespace", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "celllinespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summ", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "celllinetype", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellpadding", obj, ["mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectborder", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectfont", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "selectgradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectgradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("@gradation","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss(".CellEssential", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ededed");
    this._addCss(".CellEssential", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1e1e1ff","","0","none","","","0","none","","","1","solid","#c9c9c9ff","");
    this._addCss("Grid>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "border", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellalign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground2", obj, ["disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellcolor2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellgradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellgradation2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#body", "celllinetype", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("#f1f1ee");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_Tree>#body", "selectborder", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectborder", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectcolor", obj, ["normal", "mouseover"]);
    this._addCss(".Cellgrd_MF_Belong", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#fdfbddff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#fdfbddff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_value("#fdfbdd");
    this._addCss("Grid>#body", "selectbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "cellcolor2", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid>#body", "selectbackground", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#969696");
    this._addCss("Grid>#body", "selectcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_WF_Tree>#body", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#a1d9e9ff","","0","none","","","0","none","","","1","solid","#a1d9e9ff","");
    this._addCss("Grid>#summ", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "border", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("#eefafdff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_background("#eefafdff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#summ", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#76b9ccff","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal", "mouseover", "pushed", "selected", "disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("MaskEdit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("MaskEdit.readonly", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("MaskEdit.essential", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.essential", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_Number", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".Cellgrd_MF_Right", "align", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("TitleBarControl", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Spin.essential>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("3");
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 9");
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.readonly", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("TextArea.essential", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_Label", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox.essential", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI", "buttonborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("GroupBox", "titlebackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("GroupBox", "titlegradation", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleimage", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleview", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "autohotkey", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_MenuBg.png","repeat-x","0","0","0","0","true");
    this._addCss("Menu", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "checkboximage", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "checkboximage", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "expandimage", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "expandimage", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Gulim");
    this._addCss("Menu", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Static.sta_WF_Title", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("");
    this._addCss("Menu", "itemalign", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("PopupMenu", "itemalign", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_MenuBar.png","","0","0","100","50","true");
    this._addCss("Menu", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 25 0 25");
    this._addCss("Menu", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#21367eff","");
    this._addCss("Menu", "popupborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://img/img_WF_MenuItem.png","","0","0","0","50","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#c6c6c6ff","","0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupitemgradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("27");
    this._addCss("Menu", "popupitemheight", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 11 0 29");
    this._addCss("Menu", "popupitempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#87eff8");
    this._addCss("Menu", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#2c4898");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Menu", "popupfont", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_border("1","dotted","#777777ff","");
    this._addCss("Menu", "itemborder", obj, ["focused"]);

    obj = new nexacro.Style_color("#5a280b66");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#2c4898ff","");
    this._addCss("PopupMenu", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Check.png')");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpindown.png')");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("PopupMenu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_value("19");
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("PopupMenu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("PopupMenu", "background", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MF_Data", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_line", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#2c4898ff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_border("");
    this._addCss("PopupMenu", "itemborder", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu", "itemheight", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("");
    this._addCss("PopupMenu", "itempadding", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Radio", "itempadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "itempadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("PopupMenu", "color", obj, ["focused"]);
    this._addCss("Edit.edi_Login_Id", "color", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#bbbbbbff","");
    this._addCss("PopupMenu", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("PopupMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#23386aff","");
    this._addCss("Form.from_POP", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Form.from_POP", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_POP_Title", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_close", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_01", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_03", "bordertype", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #7b829a 0,100 #656b81");
    this._addCss("Static.sta_POP_Title", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","3","solid","#6496fcff","","0","none","","");
    this._addCss("Static.sta_POP_Title", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Static.sta_POP_Title", "font", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_MDI", "font", obj, ["selected"]);
    this._addCss("Button.btn_WF_MDI", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_02", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss(".Cellgrd_MF_Belong", "font", obj, ["normal"]);
    this._addCss(".Cellgrd_MF_Info", "font", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "font", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_POP_Title", "padding", obj, ["normal", "disabled"]);
    this._addCss("Edit.edi_Login_Id", "padding", obj, ["normal", "diabled", "mouseover", "focused"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("ProgressBar", "barcolor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #57b2e5 0,100 #3ea3df");
    this._addCss("ProgressBar", "bargradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "bartype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#8e8e8eff","","1","solid","#e1e1e1ff","","1","solid","#e1e1e1ff","","1","solid","#8e8e8eff","");
    this._addCss("ProgressBar", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "endimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "endimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "progressimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "progressimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("ProgressBar", "startimage", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ProgressBarControl", "startimage", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("ProgressBar", "bargradation", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_RadioBg.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Radio", "buttonborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("normal 0 0");
    this._addCss("Radio", "buttongradation", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "buttongradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Radio.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "itembackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("Radio", "textpadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Radio.essential", "textpadding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_RadioBg_O.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_RadioBg_D.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_Radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);
    this._addCss("Radio.essential", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.readonly", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential", "buttonalign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Spin", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Spin.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ccccccff","","0","none","","","0","none","","");
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("1 9 0 9");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Spin.essential>#spinedit", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e2e2e2");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["mouseover", "selected", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e2e2e2 0,100 #ffffff");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#2c4898ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#dfdfdfff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("1 solid #c1c1c1");
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("10 20 10 20");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_margin("0 -1 0 0");
    this._addCss("Tab", "buttonmargin", obj, ["normal"]);
    this._addCss("Tab.tab_MDI", "buttonmargin", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "buttonmargin", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Tab", "color", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_TF_Admin", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_line("0","","","");
    this._addCss("Tab", "focusborder", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI", "focusborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "focusborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab", "showextrabutton", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI", "showextrabutton", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "stepshowtype", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("TitleBarControl", "stepshowtype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Tab.tab_MDI", "stepshowtype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "stepshowtype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_value("1 solid #2c4898");
    this._addCss("Tab", "buttonborder", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_padding("10 0 10 0");
    this._addCss("Tab", "buttonpadding", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Tab", "font", obj, ["mouseover", "selected"]);
    this._addCss("Static.sta_TF_Admin", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_Search", "font", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle1", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_SubTitle2", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("1 dotted #777777");
    this._addCss("Tab", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://img/tab_SelectLine.png","repeat-x","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Tab", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#extrabutton", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_TabSpinup", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_TabSpindown", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_Extend", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI>#extrabutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_MF_Notice", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpinup.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpindown.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpindown_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabSpindown_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_TabExtra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#666666ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_border("");
    this._addCss("TitleBarControl", "border", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_TB_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_TB_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_TB_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/img_TB_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo.readonly", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Edit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Edit.edt_WF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fcf7efff","","","0","0","0","0","true");
    this._addCss("Calendar.essential", "background", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Combo.essential", "background", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo.essential>#dropbutton", "background", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Spin.essential", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Spin.essential>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("Spin.essential>#spindownbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#eda649ff","");
    this._addCss("Calendar.essential", "border", obj, ["mouseover", "selected"]);
    this._addCss("Combo.essential", "border", obj, ["mouseover", "selected"]);
    this._addCss("Edit.essential", "border", obj, ["mouseover"]);
    this._addCss("MaskEdit.essential", "border", obj, ["mouseover"]);
    this._addCss("Spin.essential", "border", obj, ["mouseover", "pushed"]);
    this._addCss("TextArea.essential", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Calendar.essential>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Combo.essential>#comboedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin.essential>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_EssentialCheckBox.png","","0","0","0","0","true");
    this._addCss("CheckBox.essential", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_EssentialCheck.png')");
    this._addCss("CheckBox.essential", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#fdfdfdff","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Combo.essential>#comboedit", "background", obj, ["disabled"]);
    this._addCss("Edit.essential", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.essential", "background", obj, ["disabled"]);
    this._addCss("Spin.essential>#spinedit", "background", obj, ["disabled"]);
    this._addCss("TextArea.essential", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#eda649ff","");
    this._addCss("Combo.essential>#dropbutton", "border", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/cmb_WF_EssentialDrop.png')");
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/cmb_WF_EssentialDrop_P.png')");
    this._addCss("Combo.essential>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffffff","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.essential", "background", obj, ["normal"]);
    this._addCss("MaskEdit.essential", "background", obj, ["normal"]);
    this._addCss("TextArea.essential", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#fcf7efff","theme://img/img_WF_Essential.png","","0","0","0","0","true");
    this._addCss("Edit.essential", "background", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.essential", "background", obj, ["mouseover", "focused"]);
    this._addCss("TextArea.essential", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_EssentialRadioBg.png","","0","0","0","0","true");
    this._addCss("Radio.essential", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/img_WF_EssentialRadio.png')");
    this._addCss("Radio.essential", "buttonimage", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#eda649ff","","0","none","","","0","none","","");
    this._addCss("Spin.essential>#spinedit", "border", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_EssentialSpinup_O.png')");
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_EssentialSpinup_P.png')");
    this._addCss("Spin.essential>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_EssentialSpindown_O.png')");
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_EssentialSpindown_P.png')");
    this._addCss("Spin.essential>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Open_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuOpen", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Open_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuOpen", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Open_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuOpen", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Open_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuOpen", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Close_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuClose", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Close_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuClose", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Close_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuClose", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_TF_Close_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_TF_LeftMenuClose", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#0077dbff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Tahoma, Dotum");
    this._addCss("Button.btn_TF_Logout", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_TF_Admin", "font", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#0096e4ff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#005fbaff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["pushed"]);

    obj = new nexacro.Style_color("#bacbd9");
    this._addCss("Button.btn_TF_Logout", "color", obj, ["pushed"]);

    obj = new nexacro.Style_background("#9d9d9dff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Logout", "background", obj, ["disabled"]);
    this._addCss("Button.btn_TF_Admin", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#d3d3d3");
    this._addCss("Button.btn_TF_Logout", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#0068bfff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Admin", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#bcddf9");
    this._addCss("Button.btn_TF_Admin", "color", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#0083d0ff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Admin", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#0053a2ff","theme://img/btn_TF_Logout.png","repeat-x","0","0","0","0","true");
    this._addCss("Button.btn_TF_Admin", "background", obj, ["pushed"]);

    obj = new nexacro.Style_color("#89b0d4");
    this._addCss("Button.btn_TF_Admin", "color", obj, ["pushed"]);

    obj = new nexacro.Style_color("#cfcfcf");
    this._addCss("Button.btn_TF_Admin", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_TF_Admin.png","","0","0","0","50","true");
    this._addCss("Static.sta_TF_Admin", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("2 0 0 25");
    this._addCss("Static.sta_TF_Admin", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#e2e2e2ff","","","0","0","0","0","true");
    this._addCss("Static.sta_TF_TopBg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ffffffff","","0","none","","");
    this._addCss("Static.sta_TF_TopBg", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_TF_TopBg2", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#0068bfff","","","0","0","0","0","true");
    this._addCss("Static.sta_TF_TopBg2", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Menu_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Menu", "background", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_color("#96a4b7");
    this._addCss("Button.btn_LF_Menu", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Menu_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Menu", "background", obj, ["pushed"]);
    this._addCss("Button.btn_LF_Menu_S", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Menu_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Menu", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#4b5764");
    this._addCss("Button.btn_LF_Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuOpen_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuOpen", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuOpen_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuOpen", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuOpen_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuOpen", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuOpen_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuOpen", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuClose_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuClose", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuClose_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuClose", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuClose_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuClose", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_RecentMenuClose_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_RecentMenuClose", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Search_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Search_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_LF_Search_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_LF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/edt_LF_Search_N.png","stretch","3","3","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#718298");
    this._addCss("Edit.edt_LF_Search", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 25 0 13");
    this._addCss("Edit.edt_LF_Search", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("#e8e9ea");
    this._addCss("Edit.edt_LF_Search", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#161e2a");
    this._addCss("Edit.edt_LF_Search", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/edt_LF_Search_S.png","stretch","3","3","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://img/edt_LF_Search_D.png","stretch","3","3","0","0","true");
    this._addCss("Edit.edt_LF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#4b5b6eff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_Tree>#body", "background", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Tree", "line", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_LF_CloseBtn.png')");
    this._addCss("Grid.grd_LF_Tree", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_LF_Item.png')");
    this._addCss("Grid.grd_LF_Tree", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_LF_OpenBtn.png')");
    this._addCss("Grid.grd_LF_Tree", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_TreeBg.png","stretch","15","15","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_TreeBg.png","stretch","15","15","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellcolor", obj, ["mouseover"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellcolor2", obj, ["mouseover"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_Tree>#body", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss("Grid.grd_LF_Tree>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#0077e7");
    this._addCss("Grid.grd_LF_Tree>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Gulim");
    this._addCss("Grid.grd_LF_Tree>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#eff1faff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_Tree>#body", "cellbackground", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#092d97");
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#b2b2b2");
    this._addCss("Grid.grd_LF_Tree>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_TreeBg2.png","stretch","15","15","0","0","true");
    this._addCss("Grid.grd_LF_TreeMy", "background", obj, ["normal"]);
    this._addCss("Grid.grd_LF_TreeMy>#body", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_TreeBg2.png","stretch","15","15","0","0","true");
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_TreeBg2.png","stretch","15","15","0","0","true");
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#8192aa");
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#8192aa");
    this._addCss("Grid.grd_LF_TreeMy>#body", "cellcolor2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_LF_TreeBg_O.png') stretch 15,15");
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Grid.grd_LF_TreeMy>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_ResentMenuBg.png","stretch","20","20","0","0","true");
    this._addCss("Grid.grd_LF_TreeRecentMenu", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_ResentMenuBg.png","stretch","20","20","0","0","true");
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/grd_LF_ResentMenuBg.png","stretch","20","20","0","0","true");
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "cellpadding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_LF_ResentMenuBgS.png') stretch 20,20");
    this._addCss("Grid.grd_LF_TreeRecentMenu>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_LF_Logo.png","","0","0","0","0","true");
    this._addCss("Static.sta_LF_Logo", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#2c3949ff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_SearchBg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","double","#212b39ff","#3a4757ff","0","none","","");
    this._addCss("Static.sta_LF_SearchBg", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpinup_N.png')");
    this._addCss("Button.btn_MDI_TabSpinup", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpinup_O.png')");
    this._addCss("Button.btn_MDI_TabSpinup", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpinup_P.png')");
    this._addCss("Button.btn_MDI_TabSpinup", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpindown_N.png')");
    this._addCss("Button.btn_MDI_TabSpindown", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpindown_O.png')");
    this._addCss("Button.btn_MDI_TabSpindown", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabSpindown_P.png')");
    this._addCss("Button.btn_MDI_TabSpindown", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Extend_N.png')");
    this._addCss("Button.btn_MDI_Extend", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button.btn_MDI_Extend", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Cascade", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_AllClose", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Extend_O.png')");
    this._addCss("Button.btn_MDI_Extend", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Extend_P.png')");
    this._addCss("Button.btn_MDI_Extend", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Cascade_N.png')");
    this._addCss("Button.btn_MDI_Cascade", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Cascade_O.png')");
    this._addCss("Button.btn_MDI_Cascade", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_Cascade_P.png')");
    this._addCss("Button.btn_MDI_Cascade", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_AllClose_N.png')");
    this._addCss("Button.btn_MDI_AllClose", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_AllClose_O.png')");
    this._addCss("Button.btn_MDI_AllClose", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_AllClose_P.png')");
    this._addCss("Button.btn_MDI_AllClose", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/sta_MDI_Bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Static.sta_MDI_Bg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#272f39ff","theme://img/sta_MDI_Logo.png","","0","0","50","50","true");
    this._addCss("Static.sta_MDI_Logo", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/tab_MDI_Bg_N.png","stretch","5","5","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("15 10 12 12");
    this._addCss("Tab.tab_MDI", "buttonpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#c9ccd0");
    this._addCss("Tab.tab_MDI", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_MDI_01", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Tab.tab_MDI", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_01", "font", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_MF_Label", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member", "font", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "font", obj, ["normal"]);
    this._addCss("Tab.tab_MF_Notice", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/tab_MDI_Bg_S.png","stretch","5","5","0","0","true");
    this._addCss("Tab.tab_MDI", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_padding("15 0 12 0");
    this._addCss("Tab.tab_MDI", "buttonpadding", obj, ["selected", "disabled"]);

    obj = new nexacro.Style_color("#383838");
    this._addCss("Tab.tab_MDI", "color", obj, ["selected"]);

    obj = new nexacro.Style_color("#5c6066");
    this._addCss("Tab.tab_MDI", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MDI_TabExtra.png')");
    this._addCss("Tab.tab_MDI>#extrabutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Tab.tab_MDI>#extrabutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/tab_MDI_Bg_N.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","solid","#e1dedbff","","0","none","","","0","none","","");
    this._addCss("Button.btn_WF_MDI", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Button.btn_WF_MDI", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#6d6d6c");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f5f4");
    this._addCss("Button.btn_WF_MDI", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#585756");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_font("bold underline 9 Dotum");
    this._addCss("Button.btn_WF_MDI", "font", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#f2f0efff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#afaead");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_TabExtra.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_TabExtra.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["mouseover", "pushed", "focused", "selected", "normal", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#e1dedbff","");
    this._addCss("Button.btn_MDI_close", "border", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/MDI_btnN.png","stretch","2","0","0","0","true");
    this._addCss("Button.btn_MDI_01", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 13");
    this._addCss("Button.btn_MDI_01", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Button.btn_MDI_02", "padding", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_WF_SubTitle1", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/MDI_btnO.png","stretch","2","0","0","0","true");
    this._addCss("Button.btn_MDI_01", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_color("#373737");
    this._addCss("Button.btn_MDI_02", "color", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/MDI_btnE.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_03", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#9e9e9eff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 1,100 #f9f9f9");
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_shadow("outer 0,1 1 #00000019");
    this._addCss("Button.btn_WF_CRUD", "shadow", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Search", "shadow", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#9e9e9eff","","1","solid","#9e9e9eff","","1","solid","#7a7a7aff","","1","solid","#9e9e9eff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("30%");
    this._addCss("Button.btn_WF_CRUD", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#2c4898ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#21367eff","");
    this._addCss("Button.btn_WF_Search", "border", obj, ["normal", "mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Search.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_WF_Search", "imagealign", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 7 0 7");
    this._addCss("Button.btn_WF_Search", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #2c4898 0,100 #213a80");
    this._addCss("Button.btn_WF_Search", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #041e65 0,100 #213571");
    this._addCss("Button.btn_WF_Search", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#92a0c8ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#8c97bbff","");
    this._addCss("Button.btn_WF_Search", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_SearchSmall.png')");
    this._addCss("Button.btn_WF_SearchSmall", "image", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_SearchSmall_D.png')");
    this._addCss("Button.btn_WF_SearchSmall", "image", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #ecedec");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Button.btn_WF_ShuttleT", "gradation", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Button.btn_WF_ShuttleB", "gradation", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleL.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dad9da 0,100 #fdfcfd");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleT", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_ShuttleB", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleL_P.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ececed");
    this._addCss("Button.btn_WF_ShuttleL", "gradation", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleR", "gradation", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleT", "gradation", obj, ["disabled"]);
    this._addCss("Button.btn_WF_ShuttleB", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleL_D.png')");
    this._addCss("Button.btn_WF_ShuttleL", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleR.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleR_P.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleR_D.png')");
    this._addCss("Button.btn_WF_ShuttleR", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleT.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleT_P.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleT_D.png')");
    this._addCss("Button.btn_WF_ShuttleT", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleB.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleB_P.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_ShuttleB_D.png')");
    this._addCss("Button.btn_WF_ShuttleB", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#c9c9c9ff","","0","none","","","0","none","","");
    this._addCss("Button.btn_WF_Custom", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Add", "border", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_color("#2c4898");
    this._addCss("Button.btn_WF_Custom", "color", obj, ["mouseover", "selected", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Add", "color", obj, ["mouseover", "selected", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Delete", "color", obj, ["mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_font("underline 9 Gulim");
    this._addCss("Button.btn_WF_Custom", "font", obj, ["mouseover", "selected", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Add", "font", obj, ["mouseover", "selected", "pushed"]);
    this._addCss("Button.btn_WF_Delete", "font", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_color("#b5b5b5");
    this._addCss("Button.btn_WF_Custom", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Add", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_Delete", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_Add.png","","0","0","0","50","true");
    this._addCss("Button.btn_WF_Add", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("Button.btn_WF_Add", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_WF_Delete.png","","0","0","0","50","true");
    this._addCss("Button.btn_WF_Delete", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","theme://img/btn_WF_Download.png","","0","0","0","50","true");
    this._addCss("Button.btn_WF_Download", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","false","true","false");
    this._addCss("Button.btn_WF_Download", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("1 0 0 25");
    this._addCss("Button.btn_WF_Download", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Upload", "padding", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","theme://img/btn_WF_Upload.png","","0","0","0","50","true");
    this._addCss("Button.btn_WF_Upload", "background", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","false","true","false","true");
    this._addCss("Button.btn_WF_Upload", "bordertype", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Extend.png')");
    this._addCss("Button.btn_WF_Extend", "image", obj, ["normal", "mouseover", "selected", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_WF_Downsize.png')");
    this._addCss("Button.btn_WF_Downsize", "image", obj, ["normal", "mouseover", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#f2f7f8ff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_SearchBg", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#8daab4ff","");
    this._addCss("Div.div_WF_SearchBg", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#a3a7b4ff","");
    this._addCss("Grid.grd_WF_Tree", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_Tree>#body", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f8f8f9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8f8f9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_Tree>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 14");
    this._addCss("Grid.grd_WF_Tree>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffefd8ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum01", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#fefff2ff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#faf1ffff","","","0","0","0","0","true");
    this._addCss(".Cellgrd_WF_sum03", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_Subtitle1.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle1", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_WF_Subtitle2.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SubTitle2", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Static.sta_WF_SubTitle2", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Search", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_WF_SearchLabel.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_SearchLabel", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("4 0 0 9");
    this._addCss("Static.sta_WF_SearchLabel", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_DetailLabel01", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c9c9c9ff","");
    this._addCss("Static.sta_WF_DetailLabel01", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e1dfdfff","");
    this._addCss("Static.sta_WF_DetailLabel02", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#444444ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_DetailLine", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_MF_Cal_bg.png","","0","0","0","0","true");
    this._addCss("Button.btn_MF_Cal", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_List", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_New", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_Cal_N.png')");
    this._addCss("Button.btn_MF_Cal", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_Cal_S.png')");
    this._addCss("Button.btn_MF_Cal", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_List_N.png')");
    this._addCss("Button.btn_MF_List", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_List_S.png')");
    this._addCss("Button.btn_MF_List", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_New_N.png')");
    this._addCss("Button.btn_MF_New", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_New_S.png')");
    this._addCss("Button.btn_MF_New", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MF_CalPrev", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_CalNext", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_CalPrev.png')");
    this._addCss("Button.btn_MF_CalPrev", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_CalNext.png')");
    this._addCss("Button.btn_MF_CalNext", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_MF_TodoView.png","","0","0","50","0","true");
    this._addCss("Button.btn_MF_TodoView", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_Search.png')");
    this._addCss("Button.btn_MF_Search", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_MF_ViewBul.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_ViewType", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 Verdana");
    this._addCss("Button.btn_MF_ViewType", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_MF_MemoDate", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#f96362");
    this._addCss("Button.btn_MF_ViewType", "color", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_First", "color", obj, ["mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MF_ViewType_on", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss(".Cellgrd_MF_Info", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 Verdana");
    this._addCss("Button.btn_MF_ViewType", "font", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_MF_ViewType_First", "font", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_MF_ViewType_on", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("Button.btn_MF_ViewType_on", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_Refresh.png')");
    this._addCss("Button.btn_MF_Refresh", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_Refresh_O.png')");
    this._addCss("Button.btn_MF_Refresh", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_MemoList.png')");
    this._addCss("Button.btn_MF_MemoList", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://img/btn_MF_MemoList_O.png')");
    this._addCss("Button.btn_MF_MemoList", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_prev_N.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_prev", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_prev_O.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_prev", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_prev_P.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_prev", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_prev_D.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_prev", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_next_N.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_next", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_next_O.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_next", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_next_P.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_next", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/btn_paging_next_D.gif","","0","0","0","0","true");
    this._addCss("Button.btn_WA_next", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#f96362ff","");
    this._addCss("Edit.edi_MF_Search", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#4e3326");
    this._addCss("Edit.edi_MF_MemoTitle", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("Edit.edi_MF_MemoTitle", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("#3586ccff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_ScheduleArea", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 20 Arial");
    this._addCss("Static.sta_MF_CalDate", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_TodoArea", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_SearchArea", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Tab.tab_MF_Notice", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_MF_TodoArea", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_MF_TodoTitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_TodoTitle", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("antialias 15 Arial");
    this._addCss("Static.sta_MF_TodoTitle", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_ChartTitle", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_MemoTitle", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 23");
    this._addCss("Static.sta_MF_TodoTitle", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#959b9f");
    this._addCss("Static.sta_MF_SelectDay", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 43 Arial");
    this._addCss("Static.sta_MF_SelectDay", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#575757");
    this._addCss("Static.sta_MF_Day", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 11 Arial");
    this._addCss("Static.sta_MF_Day", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Number", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/img_MF_Number.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_Number", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("1 25 0 0");
    this._addCss("Static.sta_MF_Number", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Static.sta_MF_Name", "align", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_MF_PhotoImg.png","","0","0","50","0","true");
    this._addCss("Static.sta_MF_Name", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold 10 Dotum");
    this._addCss("Static.sta_MF_Name", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("antialias 11 Tahoma");
    this._addCss("Static.sta_MF_Group", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("5");
    this._addCss("Static.sta_MF_Group", "linespace", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/icon_MF_MemberLabel.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_Label", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Static.sta_MF_Label", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_MF_Data", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Cal", "color", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Member", "color", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e6e6e6ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_MF_line", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#e0e0e0ff","");
    this._addCss("Static.sta_MF_SearchArea", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_MF_Search.png","stretch","6","6","0","0","true");
    this._addCss("Static.sta_MF_Search", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 8 Tahoma");
    this._addCss("Static.sta_MF_Search", "font", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#e0e0e0ff","","0","none","","");
    this._addCss("Static.sta_MF_ChartTitle", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_padding("3 0 0 19");
    this._addCss("Static.sta_MF_ChartTitle", "padding", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#8c7e6e");
    this._addCss("Static.sta_MF_MemoDsc", "color", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.txt_MF_MemoContent", "color", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Static.sta_MF_MemoDsc", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo.cmb_MF_Order", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_MF_MemoMotify.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_MemoMotify", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/sta_MF_Memoclose.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_MemoClose", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("4");
    this._addCss("TextArea.txt_MF_MemoContent", "linespace", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#767575");
    this._addCss("Combo.cmb_MF_Order", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo.cmb_MF_Order>#comboedit", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#767575");
    this._addCss("Combo.cmb_MF_Order", "itemcolor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("8 Dotum");
    this._addCss("Combo.cmb_MF_Order", "itemfont", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_Article", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c3c3c3ff","");
    this._addCss("Div.div_MF_Article", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_shadow("outer 2,2 4 #0000000d");
    this._addCss("Div.div_MF_Article", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f6f7efff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_Memo", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e2e2d9ff","");
    this._addCss("Div.div_MF_Memo", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fffef0ff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_Memo_On", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d8d6c4ff","");
    this._addCss("Div.div_MF_Memo_On", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 10 Tahoma");
    this._addCss("Grid.grd_MF_Cal", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_Cal>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellbackground", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_Cal>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "cellbackground2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_TodoList>#body", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellbackground2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("#3586cc");
    this._addCss("Grid.grd_MF_Cal>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_MF_Cal>#body", "selectbackground", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 11 Aria");
    this._addCss("Grid.grd_MF_Cal>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_MF_Cal>#head", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","");
    this._addCss("Grid.grd_MF_Cal>#body", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid.grd_MF_Cal>#body", "cellcolor", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid.grd_MF_Cal>#body", "cellcolor2", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 10 Tahoma");
    this._addCss("Grid.grd_MF_Cal>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","");
    this._addCss("Grid.grd_MF_Cal>#body", "cellline", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 10 Tahoma");
    this._addCss("Grid.grd_MF_Cal>#body", "selectfont", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_Cal>#body", "cellbackground", obj, ["disabled"]);
    this._addCss(".Cellgrd_MF_disabled", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MF_Cal>#body", "cellbackground2", obj, ["disabled"]);
    this._addCss(".Cellgrd_MF_disabled", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#c8c8c8");
    this._addCss("Grid.grd_MF_Cal>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#c8c8c8");
    this._addCss("Grid.grd_MF_Cal>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_value("#f1f1f1");
    this._addCss("Grid.grd_MF_Cal>#body", "selectbackground", obj, ["disabled"]);
    this._addCss(".Cellgrd_MF_disabled", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#c8c8c8");
    this._addCss("Grid.grd_MF_Cal>#body", "selectcolor", obj, ["disabled"]);
    this._addCss(".Cellgrd_MF_disabled", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("Dotum,9");
    this._addCss("Grid.grd_MF_TodoList", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_TodoList>#body", "cellcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_TodoList>#body", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid.grd_MF_TodoList>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "cellfont", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#body", "cellfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_MF_TodoList>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Member>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_MF_Notice>#body", "selectbackground", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_MF_TodoList>#body", "selectcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid.grd_MF_Member>#body", "selectcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("Grid.grd_MF_Notice>#head", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#6f6f6f");
    this._addCss("Grid.grd_MF_Notice>#body", "cellcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#6f6f6f");
    this._addCss("Grid.grd_MF_Notice>#body", "cellcolor2", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#6f6f6f");
    this._addCss("Grid.grd_MF_Notice>#body", "selectcolor", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Grid.grd_MF_Notice>#body", "selectfont", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Grid.grd_MF_Notice>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss(".Cellgrd_MF_Belong", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#f96362");
    this._addCss(".Cellgrd_MF_Info", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#f96362");
    this._addCss(".Cellgrd_MF_Info", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/grd_MF_Noticebul.png","","0","0","0","50","true");
    this._addCss(".Cellgrd_MF_Notice", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://img/grd_MF_Noticebul.png","","0","0","0","50","true");
    this._addCss(".Cellgrd_MF_Notice", "background2", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss(".Cellgrd_MF_Notice", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://img/grd_MF_Noticebul.png') left middle");
    this._addCss(".Cellgrd_MF_Notice", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#c8c8c8");
    this._addCss(".Cellgrd_MF_disabled", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#c8c8c8");
    this._addCss(".Cellgrd_MF_disabled", "color2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d0d0d0ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.tab_MF_Notice", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#edededff","","","0","0","0","0","true");
    this._addCss("Tab.tab_MF_Notice", "buttonbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("1 solid #d0d0d0");
    this._addCss("Tab.tab_MF_Notice", "buttonborder", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("12 20 12 20");
    this._addCss("Tab.tab_MF_Notice", "buttonpadding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Tab.tab_MF_Notice", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Tab.tab_MF_Notice", "showextrabutton", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://img/Login_btnN.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_Login", "background", obj, ["normal", "disabed"]);

    obj = new nexacro.Style_background("","theme://img/Login_btnO.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_Login", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://img/Login_btnP.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_Login", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://img/login_closebtnN.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_Close", "background", obj, ["normal", "disabed"]);

    obj = new nexacro.Style_background("","theme://img/login_closebtnO.png","","0","0","0","0","true");
    this._addCss("Button.btn_Login_Close", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_font("9,Gulim");
    this._addCss("CheckBox.chk_Login_Id", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#e0e4ef");
    this._addCss("CheckBox.chk_Login_Id", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("CheckBox.chk_Login_Id", "aling", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("CheckBox.chk_Login_Id", "buttonbackground", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #525252");
    this._addCss("CheckBox.chk_Login_Id", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","1","1","true","true","true","true");
    this._addCss("CheckBox.chk_Login_Id", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://img/chk_img.png')");
    this._addCss("CheckBox.chk_Login_Id", "buttonimage", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("2 0 0 5");
    this._addCss("CheckBox.chk_Login_Id", "textpadding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("1 solid #ff6600");
    this._addCss("CheckBox.chk_Login_Id", "buttonborder", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #043688");
    this._addCss("CheckBox.chk_Login_Id", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("CheckBox.chk_Login_Id", "buttonimage", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://img/Login_bg.png","","0","0","0","0","true");
    this._addCss("Div.div_Login_Bg", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_font("9, Verdana");
    this._addCss("Edit.edi_Login_Id", "font", obj, ["normal", "diabled", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#c9c9c9");
    this._addCss("Edit.edi_Login_Id", "color", obj, ["normal", "diabled"]);

    obj = new nexacro.Style_background("","theme://img/Login_Input.png","stretch","5","0","0","0","true");
    this._addCss("Static.sta_Login_Inputbg", "background", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
