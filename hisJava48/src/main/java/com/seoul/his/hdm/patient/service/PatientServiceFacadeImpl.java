package com.seoul.his.hdm.patient.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.patient.applicationService.CheckPatientApplicationService;
import com.seoul.his.hdm.patient.applicationService.PatientApplicationService;
import com.seoul.his.hdm.patient.to.CheckPatientBean;
import com.seoul.his.hdm.patient.to.DustBean;
import com.seoul.his.hdm.patient.to.PatientBean;


/**
 * @Package  com.seoul.his.acc.budget.service
 * @Class    BudgetServiceFacadeImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class PatientServiceFacadeImpl implements PatientServiceFacade{
	@Autowired
	CheckPatientApplicationService checkPatientApplicationService;
	@Autowired
	PatientApplicationService patientApplicationService;

	@Override
		public List<PatientBean> findPatientList(Map<String, String> argsMap) {
		List<PatientBean> patientList = patientApplicationService.findPatientList(argsMap);
		return patientList;
	}
	
	
	@Override
    public void batchPatientProcess(List<PatientBean> patientBeanList) {
		patientApplicationService.batchPatientProcess(patientBeanList);
    }


	@Override
	public List<CheckPatientBean> findCheckPatientList(Map<String, String> argsMap) {
		List<CheckPatientBean> checkPatientList = checkPatientApplicationService.findCheckPatientList(argsMap);
		return checkPatientList;
	}


	@Override
	public void batchCheckPatientProcess(List<CheckPatientBean> checkPatientBeanList) {
		checkPatientApplicationService.batchCheckPatientProcess(checkPatientBeanList);
		
	}

	
}
