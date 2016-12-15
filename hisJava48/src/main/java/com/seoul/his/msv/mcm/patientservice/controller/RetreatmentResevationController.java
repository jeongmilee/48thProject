package com.seoul.his.msv.mcm.patientservice.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.msv.mcm.patientservice.service.PatientServiceServiceFacade;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.RsvPatBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ RetreatmentResevationController.java
 * </pre>
 *
 * @date : 2016. 12. 2. 오후 2:51:27
 * @version :
 * @author : 이정미
 */

@Controller
public class RetreatmentResevationController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	@RequestMapping("msv/mcm/patientservice/findDayScheduleList.do")
	public void findDayScheduleList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<DaySchBean> DayScheduleList = patientserviceServiceFacade.findDayScheduleList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, DayScheduleList, DaySchBean.class);
	}

	@RequestMapping("msv/mcm/patientservice/findTimeScheduleList.do")
	public void findTimeScheduleList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<TimeSchBean> timeScheduleList = patientserviceServiceFacade.findTimeScheduleList(argsMap);
		List<RsvPatBean> rsvPatList=new ArrayList<RsvPatBean>();
		for (TimeSchBean timeSch : timeScheduleList) {
			rsvPatList.addAll(timeSch.getRsvPatList());
		}
		dataSetBeanMapper.beansToDataset(outData, timeScheduleList, TimeSchBean.class);
		dataSetBeanMapper.beansToDataset(outData, rsvPatList, RsvPatBean.class);
	}
	@RequestMapping("msv/mcm/patientservice/findRsvByPatList.do")
	public void findRsvByPatList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<RsvPatBean> rsvPatList = patientserviceServiceFacade.findRsvByPatList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, rsvPatList, RsvPatBean.class);
	}

}