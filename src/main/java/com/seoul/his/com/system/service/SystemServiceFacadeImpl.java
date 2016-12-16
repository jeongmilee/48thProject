package com.seoul.his.com.system.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.com.system.applicationService.SystemApplicationService;
import com.seoul.his.com.system.to.SystemBean;


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
public class SystemServiceFacadeImpl implements SystemServiceFacade{
	@Autowired
	SystemApplicationService systemApplicationService;


	@Override
		public List<SystemBean> findSystemList(Map<String, String> argsMap) {
		List<SystemBean> systemList = systemApplicationService.findSystemList(argsMap);
		return systemList;
	}
	
}
