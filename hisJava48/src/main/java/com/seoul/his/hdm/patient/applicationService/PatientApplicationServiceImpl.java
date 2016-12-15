package com.seoul.his.hdm.patient.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.patient.dao.PatientDAO;
import com.seoul.his.hdm.patient.exception.PatientException;
import com.seoul.his.hdm.patient.to.DustBean;
import com.seoul.his.hdm.patient.to.PatientBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 6. 27.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class PatientApplicationServiceImpl implements PatientApplicationService{
	@Autowired
	PatientDAO patientDAO;
	



	@Override
	public List<PatientBean> findPatientList(Map<String, String> argsMap) {
		List<PatientBean> patientList = patientDAO.selectPatientList(argsMap);
		return patientList;		
	}




	@Override
	public void batchPatientProcess(List<PatientBean> patientBeanList) {
	        for (PatientBean patientBean : patientBeanList) {
	            if (patientBean.getStatus().equals("inserted")) {
	            	patientDAO.insertPatient(patientBean);
	            } else if (patientBean.getStatus().equals("updated")) {
	            	System.out.println("11111여기까지");
	            	patientDAO.updatePatient(patientBean);
	            } else if (patientBean.getStatus().equals("deleted")) {
	            	patientDAO.deleteEmp(patientBean);
	            }
	        }
	    
	}

	
	

}
