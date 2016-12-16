package com.seoul.his.hdm.patient.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.patient.applicationService.PatientApplicationService;
import com.seoul.his.hdm.patient.to.PatientBean;


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
public class PatientServiceFacadeImpl implements PatientServiceFacade{
	@Autowired
	PatientApplicationService patientApplicationService;


	@Override
		public List<PatientBean> findPatientList(Map<String, String> argsMap) {
		List<PatientBean> patientList = patientApplicationService.findPatientList(argsMap);
		return patientList;
	}
	
	
	
}
