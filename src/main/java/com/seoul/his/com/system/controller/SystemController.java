package com.seoul.his.com.system.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.system.service.SystemServiceFacade;
import com.seoul.his.com.system.to.SystemBean;
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
public class SystemController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	SystemServiceFacade systemServiceFacade;
	
	@RequestMapping("com/system/findSystemList.do")
	public void findSystemList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<SystemBean> systemList = systemServiceFacade.findSystemList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, systemList, SystemBean.class);
	}

}
