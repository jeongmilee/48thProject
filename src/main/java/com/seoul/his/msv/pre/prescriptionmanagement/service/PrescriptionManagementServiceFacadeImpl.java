package com.seoul.his.msv.pre.prescriptionmanagement.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.pre.prescriptionmanagement.applicationService.PrescriptionManagementApplicationService;
import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;


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
public class PrescriptionManagementServiceFacadeImpl implements PrescriptionManagementServiceFacade{
	@Autowired
	PrescriptionManagementApplicationService prescriptionmanagementApplicationService;


	@Override
		public List<PrescriptionManagementBean> findPrescriptionManagementList(Map<String, String> argsMap) {
		List<PrescriptionManagementBean> prescriptionmanagementList = prescriptionmanagementApplicationService.findPrescriptionManagementList(argsMap);
		return prescriptionmanagementList;
	}
	
	
	
}
