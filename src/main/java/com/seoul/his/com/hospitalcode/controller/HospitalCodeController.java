package com.seoul.his.com.hospitalcode.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.hospitalcode.service.HospitalCodeServiceFacade;
import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;
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
public class HospitalCodeController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	HospitalCodeServiceFacade hospitalcodeServiceFacade;
	
	@RequestMapping("com/hospitalcode/findHospitalCodeList.do")
	public void findHospitalCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<HospitalCodeBean> hospitalcodeList = hospitalcodeServiceFacade.findHospitalCodeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hospitalcodeList, HospitalCodeBean.class);
	}
}
