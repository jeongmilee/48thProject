package com.seoul.his.hdm.admission.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.admission.dao.AdmissionDAO;
import com.seoul.his.hdm.admission.exception.AdmissionException;
import com.seoul.his.hdm.admission.to.AdmissionBean;

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
public class AdmissionApplicationServiceImpl implements AdmissionApplicationService{
	@Autowired
	AdmissionDAO admissionDAO;
	



	@Override
	public List<AdmissionBean> findAdmissionList(Map<String, String> argsMap) {
		List<AdmissionBean> admissionList = admissionDAO.selectAdmissionList(argsMap);
		return admissionList;		
	}

}
