package com.seoul.his.msv.pre.prescriptionmanagement.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.pre.prescriptionmanagement.service.PrescriptionManagementServiceFacade;
import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;
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
public class PrescriptionManagementController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	PrescriptionManagementServiceFacade prescriptionmanagementServiceFacade;
	
	@RequestMapping("msv/pre/prescriptionmanagement/findPrescriptionManagementList.do")
	public void findPrescriptionManagementList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<PrescriptionManagementBean> prescriptionmanagementList = prescriptionmanagementServiceFacade.findPrescriptionManagementList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, prescriptionmanagementList, PrescriptionManagementBean.class);
	}
}
