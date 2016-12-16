package com.seoul.his.hdm.outstandingamount.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.outstandingamount.service.OutstandingAmountServiceFacade;
import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;
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
public class OutstandingAmountController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	OutstandingAmountServiceFacade outstandingamountServiceFacade;
	
	@RequestMapping("hdm/outstandingamount/findOutstandingAmountList.do")
	public void findOutstandingAmountList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<OutstandingAmountBean> outstandingamountList = outstandingamountServiceFacade.findOutstandingAmountList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, outstandingamountList, OutstandingAmountBean.class);
	}
}
