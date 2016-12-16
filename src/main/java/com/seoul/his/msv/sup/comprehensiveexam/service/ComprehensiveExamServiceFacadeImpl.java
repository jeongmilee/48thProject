package com.seoul.his.msv.sup.comprehensiveexam.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.comprehensiveexam.applicationService.ComprehensiveExamApplicationService;
import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;


/**
 * @Package  com.seoul.his.acc.budget.service
 * @Class    BudgetServiceFacadeImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class ComprehensiveExamServiceFacadeImpl implements ComprehensiveExamServiceFacade{
	@Autowired
	ComprehensiveExamApplicationService comprehensiveexamApplicationService;


	@Override
		public List<ComprehensiveExamBean> findComprehensiveExamList(Map<String, String> argsMap) {
		List<ComprehensiveExamBean> comprehensiveexamList = comprehensiveexamApplicationService.findComprehensiveExamList(argsMap);
		return comprehensiveexamList;
	}
	
	
	
}
