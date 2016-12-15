package com.seoul.his.hdm.patient.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.patient.dao.CheckPatientDAO;
import com.seoul.his.hdm.patient.dao.PatientDAO;
import com.seoul.his.hdm.patient.exception.PatientException;
import com.seoul.his.hdm.patient.to.CheckPatientBean;
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
public class CheckPatientApplicationServiceImpl implements CheckPatientApplicationService{
	
	@Autowired
	CheckPatientDAO checkPatientDAO;
	



	@Override
	public List<CheckPatientBean> findCheckPatientList(Map<String, String> argsMap) {
		List<CheckPatientBean> checkPatientList = checkPatientDAO.selectCheckPatientList(argsMap);
		return checkPatientList;		
	}




	@Override
	public void batchCheckPatientProcess(List<CheckPatientBean> checkPatientBeanList) {
	        for (CheckPatientBean checkPatientBean : checkPatientBeanList) {
	            if (checkPatientBean.getStatus().equals("inserted")) {
	            	checkPatientDAO.insertCheckPatient(checkPatientBean);
	            } else if (checkPatientBean.getStatus().equals("updated")) {
	            	checkPatientDAO.updateCheckPatient(checkPatientBean);
	            } else if (checkPatientBean.getStatus().equals("deleted")) {
	            	checkPatientDAO.deleteCheckPatient(checkPatientBean);
	            }
	        }
	    
	}




	
	

}
