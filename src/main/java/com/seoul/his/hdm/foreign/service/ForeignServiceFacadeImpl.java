package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.foreign.applicationService.ForeignApplicationService;
import com.seoul.his.hdm.foreign.to.ForeignBean;


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
public class ForeignServiceFacadeImpl implements ForeignServiceFacade{
	@Autowired
	ForeignApplicationService foreignApplicationService;


	@Override
		public List<ForeignBean> findForeignList(Map<String, String> argsMap) {
		List<ForeignBean> foreignList = foreignApplicationService.findForeignList(argsMap);
		return foreignList;
	}
	
	
	
}
