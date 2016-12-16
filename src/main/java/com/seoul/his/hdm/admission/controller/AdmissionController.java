package com.seoul.his.hdm.admission.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.admission.service.AdmissionServiceFacade;
import com.seoul.his.hdm.admission.to.AdmissionBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 6. 10.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class AdmissionController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	AdmissionServiceFacade admissionServiceFacade;
	
	@RequestMapping("hdm/admission/findAdmissionList.do")
	public void findAdmissionList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<AdmissionBean> admissionList = admissionServiceFacade.findAdmissionList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, admissionList, AdmissionBean.class);
	}
}
