package com.seoul.his.msv.sup.generalexam.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.generalexam.applicationService.GeneralExamApplicationService;
import com.seoul.his.msv.sup.generalexam.to.GeneralExamBean;


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
public class GeneralExamServiceFacadeImpl implements GeneralExamServiceFacade{
	@Autowired
	GeneralExamApplicationService generalexamApplicationService;


	@Override
		public List<GeneralExamBean> findGeneralExamList(Map<String, String> argsMap) {
		List<GeneralExamBean> generalexamList = generalexamApplicationService.findGeneralExamList(argsMap);
		return generalexamList;
	}
	
	
	
}
