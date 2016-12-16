package com.seoul.his.com.hospitalcode.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.com.hospitalcode.applicationService.HospitalCodeApplicationService;
import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;


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
public class HospitalCodeServiceFacadeImpl implements HospitalCodeServiceFacade{
	@Autowired
	HospitalCodeApplicationService hospitalcodeApplicationService;


	@Override
		public List<HospitalCodeBean> findHospitalCodeList(Map<String, String> argsMap) {
		List<HospitalCodeBean> hospitalcodeList = hospitalcodeApplicationService.findHospitalCodeList(argsMap);
		return hospitalcodeList;
	}
	
	
	
}
