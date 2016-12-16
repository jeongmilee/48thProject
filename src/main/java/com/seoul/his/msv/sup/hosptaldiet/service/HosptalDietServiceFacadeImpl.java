package com.seoul.his.msv.sup.hosptaldiet.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.hosptaldiet.applicationService.HosptalDietApplicationService;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;


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
public class HosptalDietServiceFacadeImpl implements HosptalDietServiceFacade{
	@Autowired
	HosptalDietApplicationService hosptaldietApplicationService;


	@Override
		public List<HosptalDietBean> findHosptalDietList(Map<String, String> argsMap) {
		List<HosptalDietBean> hosptaldietList = hosptaldietApplicationService.findHosptalDietList(argsMap);
		return hosptaldietList;
	}
	
	
	
}
