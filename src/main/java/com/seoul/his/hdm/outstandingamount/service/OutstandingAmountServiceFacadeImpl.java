package com.seoul.his.hdm.outstandingamount.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.outstandingamount.applicationService.OutstandingAmountApplicationService;
import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;


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
public class OutstandingAmountServiceFacadeImpl implements OutstandingAmountServiceFacade{
	@Autowired
	OutstandingAmountApplicationService outstandingamountApplicationService;


	@Override
		public List<OutstandingAmountBean> findOutstandingAmountList(Map<String, String> argsMap) {
		List<OutstandingAmountBean> outstandingamountList = outstandingamountApplicationService.findOutstandingAmountList(argsMap);
		return outstandingamountList;
	}
	
	
	
}
