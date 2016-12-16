package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.mcm.patientservice.applicationService.PatientServiceApplicationService;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;


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
public class PatientServiceServiceFacadeImpl implements PatientServiceServiceFacade{
	@Autowired
	PatientServiceApplicationService patientserviceApplicationService;


	@Override
		public List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap) {
		List<PatientServiceBean> patientserviceList = patientserviceApplicationService.findPatientServiceList(argsMap);
		return patientserviceList;
	}
	
	
	
}
