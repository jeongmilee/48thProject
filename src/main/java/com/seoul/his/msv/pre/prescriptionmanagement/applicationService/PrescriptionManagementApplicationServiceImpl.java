package com.seoul.his.msv.pre.prescriptionmanagement.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.pre.prescriptionmanagement.dao.PrescriptionManagementDAO;
import com.seoul.his.msv.pre.prescriptionmanagement.exception.PrescriptionManagementException;
import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;

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
public class PrescriptionManagementApplicationServiceImpl implements PrescriptionManagementApplicationService{
	@Autowired
	PrescriptionManagementDAO prescriptionmanagementDAO;
	



	@Override
	public List<PrescriptionManagementBean> findPrescriptionManagementList(Map<String, String> argsMap) {
		List<PrescriptionManagementBean> prescriptionmanagementList = prescriptionmanagementDAO.selectPrescriptionManagementList(argsMap);
		return prescriptionmanagementList;		
	}

}
