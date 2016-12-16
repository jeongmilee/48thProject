package com.seoul.his.hdm.basebusiness.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.basebusiness.applicationService.BaseBusinessApplicationService;
import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;


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
public class BaseBusinessServiceFacadeImpl implements BaseBusinessServiceFacade{
	@Autowired
	BaseBusinessApplicationService basebusinessApplicationService;


	@Override
		public List<BaseBusinessBean> findBaseBusinessList(Map<String, String> argsMap) {
		List<BaseBusinessBean> basebusinessList = basebusinessApplicationService.findBaseBusinessList(argsMap);
		return basebusinessList;
	}
	
	
	
}
