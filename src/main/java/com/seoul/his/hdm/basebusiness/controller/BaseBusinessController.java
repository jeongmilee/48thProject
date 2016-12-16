package com.seoul.his.hdm.basebusiness.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.basebusiness.service.BaseBusinessServiceFacade;
import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;
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
public class BaseBusinessController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	BaseBusinessServiceFacade basebusinessServiceFacade;
	
	@RequestMapping("hdm/basebusiness/findBaseBusinessList.do")
	public void findBaseBusinessList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<BaseBusinessBean> basebusinessList = basebusinessServiceFacade.findBaseBusinessList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, basebusinessList, BaseBusinessBean.class);
	}
}
