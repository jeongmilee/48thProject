package com.seoul.his.msv.sup.physicaltherapy.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.physicaltherapy.applicationService.PhysicalTherapyApplicationService;
import com.seoul.his.msv.sup.physicaltherapy.to.PhysicalTherapyBean;


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
public class PhysicalTherapyServiceFacadeImpl implements PhysicalTherapyServiceFacade{
	@Autowired
	PhysicalTherapyApplicationService physicaltherapyApplicationService;


	@Override
		public List<PhysicalTherapyBean> findPhysicalTherapyList(Map<String, String> argsMap) {
		List<PhysicalTherapyBean> physicaltherapyList = physicaltherapyApplicationService.findPhysicalTherapyList(argsMap);
		return physicaltherapyList;
	}
	
	
	
}
