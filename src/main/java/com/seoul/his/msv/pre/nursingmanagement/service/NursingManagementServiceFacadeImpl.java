package com.seoul.his.msv.pre.nursingmanagement.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.pre.nursingmanagement.applicationService.NursingManagementApplicationService;
import com.seoul.his.msv.pre.nursingmanagement.to.NursingManagementBean;


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
public class NursingManagementServiceFacadeImpl implements NursingManagementServiceFacade{
	@Autowired
	NursingManagementApplicationService nursingmanagementApplicationService;


	@Override
		public List<NursingManagementBean> findNursingManagementList(Map<String, String> argsMap) {
		List<NursingManagementBean> nursingmanagementList = nursingmanagementApplicationService.findNursingManagementList(argsMap);
		return nursingmanagementList;
	}
	
	
	
}
