package com.seoul.his.hdm.patient.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hdm.patient.service.PatientServiceFacade;
import com.seoul.his.hdm.patient.to.CheckPatientBean;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 6. 10.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class CheckPatientController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceFacade patientServiceFacade;

	@RequestMapping("hdm/patient/findCheckPatientList.do")
	public void findCheckPatientList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<CheckPatientBean> patientList = patientServiceFacade.findCheckPatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, patientList, CheckPatientBean.class);
	}



	@RequestMapping("hdm/patient/batchCheckPatientProcess.do") //xxx.do로 넥사크로에서 요청하는 패키지구조와 xxx.do를 기입
	public void batchCheckPatientProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
	PlatformData inData = (PlatformData) request.getAttribute("inData");
	List<CheckPatientBean> checkPatientBeanList = dataSetBeanMapper.datasetToBeans(inData, CheckPatientBean.class);
	patientServiceFacade.batchCheckPatientProcess(checkPatientBeanList);
	}

}
