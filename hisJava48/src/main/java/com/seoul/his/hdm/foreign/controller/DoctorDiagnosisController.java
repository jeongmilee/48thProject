package com.seoul.his.hdm.foreign.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hdm.foreign.service.ForeignServiceFacade;
import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;

@Controller
public class DoctorDiagnosisController {

    @Autowired
	private DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	private ForeignServiceFacade foreignServiceFacade;

	//진료일정달력 조회
	@RequestMapping("hdm/foreign/findCalendarList.do")
	public void findCalendarList (HttpServletRequest request, HttpServletResponse response) throws Exception{

    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	String yearMonth=inData.getVariable("yearMonth").getString();
    	List<CalendarBean> calendarList=foreignServiceFacade.findCalendarList(yearMonth);
    	dataSetBeanMapper.beansToDataset(outData, calendarList, CalendarBean.class);
    }

	//진료일정 조회
	@RequestMapping("hdm/foreign/findTrmtSchdList.do")
	public void findTrmtSchdList (HttpServletRequest request, HttpServletResponse response) throws Exception{

    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
    	List<TrmtSchdBean> trmtSchdList=foreignServiceFacade.findTrmtSchdList(argsMap);
    	dataSetBeanMapper.beansToDataset(outData, trmtSchdList, TrmtSchdBean.class);
    }

	//진료일정 상세조회
	@RequestMapping("hdm/foreign/findApplyHistoryList.do")
	public void findApplyHistoryList (HttpServletRequest request, HttpServletResponse response) throws Exception{

    	PlatformData inData = (PlatformData) request.getAttribute("inData");
    	PlatformData outData = (PlatformData) request.getAttribute("outData");
    	String empNo= inData.getVariable("empNo").getString();
    	List<ApplyHistoryBean> applyHistoryList;
    	applyHistoryList=foreignServiceFacade.findApplyHistoryList(empNo);
    	dataSetBeanMapper.beansToDataset(outData, applyHistoryList, ApplyHistoryBean.class);
    }

	//일별 의사 진료현황
	@RequestMapping("hdm/foreign/findDayScheduleList.do")
	public void findDayScheduleList (HttpServletRequest request, HttpServletResponse response) throws Exception{

			PlatformData inData = (PlatformData) request.getAttribute("inData");
	    	PlatformData outData = (PlatformData) request.getAttribute("outData");
	    	String empNo= inData.getVariable("empNo").getString();
	    	List<DaySchBean> daySchList;
	    	daySchList=foreignServiceFacade.findDayScheduleList(empNo);
	    	dataSetBeanMapper.beansToDataset(outData, daySchList, DaySchBean.class);
	    }
}
