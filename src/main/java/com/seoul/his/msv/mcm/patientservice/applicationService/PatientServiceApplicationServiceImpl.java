package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.mcm.patientservice.dao.PatientServiceDAO;
import com.seoul.his.msv.mcm.patientservice.exception.PatientServiceException;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class PatientServiceApplicationServiceImpl implements PatientServiceApplicationService{
	@Autowired
	PatientServiceDAO patientserviceDAO;
	



	@Override
	public List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap) {
		List<PatientServiceBean> patientserviceList = patientserviceDAO.selectPatientServiceList(argsMap);
		return patientserviceList;		
	}

}
