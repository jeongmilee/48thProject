package com.seoul.his.msv.sup.comprehensiveexam.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.sup.comprehensiveexam.service.ComprehensiveExamServiceFacade;
import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;
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
public class ComprehensiveExamController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	ComprehensiveExamServiceFacade comprehensiveexamServiceFacade;
	
	@RequestMapping("msv/sup/comprehensiveexam/findComprehensiveExamList.do")
	public void findComprehensiveExamList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<ComprehensiveExamBean> comprehensiveexamList = comprehensiveexamServiceFacade.findComprehensiveExamList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, comprehensiveexamList, ComprehensiveExamBean.class);
	}
}
