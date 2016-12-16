package com.seoul.his.hdm.consultationfee.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.consultationfee.applicationService.ConsultationFeeApplicationService;
import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;


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
public class ConsultationFeeServiceFacadeImpl implements ConsultationFeeServiceFacade{
	@Autowired
	ConsultationFeeApplicationService consultationfeeApplicationService;


	@Override
		public List<ConsultationFeeBean> findConsultationFeeList(Map<String, String> argsMap) {
		List<ConsultationFeeBean> consultationfeeList = consultationfeeApplicationService.findConsultationFeeList(argsMap);
		return consultationfeeList;
	}
	
	
	
}
