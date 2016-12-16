package com.seoul.his.msv.sup.hosptaldiet.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.sup.hosptaldiet.service.HosptalDietServiceFacade;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;
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
public class HosptalDietController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	HosptalDietServiceFacade hosptaldietServiceFacade;
	
	@RequestMapping("msv/sup/hosptaldiet/findHosptalDietList.do")
	public void findHosptalDietList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<HosptalDietBean> hosptaldietList = hosptaldietServiceFacade.findHosptalDietList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, hosptaldietList, HosptalDietBean.class);
	}
}
