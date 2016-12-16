package com.seoul.his.msv.sup.foreignpharmacy.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.foreignpharmacy.applicationService.ForeignPharmacyApplicationService;
import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;


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
public class ForeignPharmacyServiceFacadeImpl implements ForeignPharmacyServiceFacade{
	@Autowired
	ForeignPharmacyApplicationService foreignpharmacyApplicationService;


	@Override
		public List<ForeignPharmacyBean> findForeignPharmacyList(Map<String, String> argsMap) {
		List<ForeignPharmacyBean> foreignpharmacyList = foreignpharmacyApplicationService.findForeignPharmacyList(argsMap);
		return foreignpharmacyList;
	}
	
	
	
}
