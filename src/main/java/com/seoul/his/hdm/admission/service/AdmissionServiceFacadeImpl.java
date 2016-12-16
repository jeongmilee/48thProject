package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.admission.applicationService.AdmissionApplicationService;
import com.seoul.his.hdm.admission.to.AdmissionBean;


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
public class AdmissionServiceFacadeImpl implements AdmissionServiceFacade{
	@Autowired
	AdmissionApplicationService admissionApplicationService;


	@Override
		public List<AdmissionBean> findAdmissionList(Map<String, String> argsMap) {
		List<AdmissionBean> admissionList = admissionApplicationService.findAdmissionList(argsMap);
		return admissionList;
	}
	
	
	
}
