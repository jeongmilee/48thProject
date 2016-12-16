package com.seoul.his.hdm.consultationfee.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.consultationfee.service.ConsultationFeeServiceFacade;
import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;
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
public class ConsultationFeeController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	ConsultationFeeServiceFacade consultationfeeServiceFacade;
	
	@RequestMapping("hdm/consultationfee/findConsultationFeeList.do")
	public void findConsultationFeeList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<ConsultationFeeBean> consultationfeeList = consultationfeeServiceFacade.findConsultationFeeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, consultationfeeList, ConsultationFeeBean.class);
	}
}
