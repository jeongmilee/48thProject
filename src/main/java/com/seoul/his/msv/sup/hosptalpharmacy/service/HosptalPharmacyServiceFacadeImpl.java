package com.seoul.his.msv.sup.hosptalpharmacy.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.hosptalpharmacy.applicationService.HosptalPharmacyApplicationService;
import com.seoul.his.msv.sup.hosptalpharmacy.to.HosptalPharmacyBean;


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
public class HosptalPharmacyServiceFacadeImpl implements HosptalPharmacyServiceFacade{
	@Autowired
	HosptalPharmacyApplicationService hosptalpharmacyApplicationService;


	@Override
		public List<HosptalPharmacyBean> findHosptalPharmacyList(Map<String, String> argsMap) {
		List<HosptalPharmacyBean> hosptalpharmacyList = hosptalpharmacyApplicationService.findHosptalPharmacyList(argsMap);
		return hosptalpharmacyList;
	}
	
	
	
}
