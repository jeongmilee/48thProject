package com.seoul.his.hdm.outstandingamount.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.outstandingamount.dao.OutstandingAmountDAO;
import com.seoul.his.hdm.outstandingamount.exception.OutstandingAmountException;
import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;

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
public class OutstandingAmountApplicationServiceImpl implements OutstandingAmountApplicationService{
	@Autowired
	OutstandingAmountDAO outstandingamountDAO;
	



	@Override
	public List<OutstandingAmountBean> findOutstandingAmountList(Map<String, String> argsMap) {
		List<OutstandingAmountBean> outstandingamountList = outstandingamountDAO.selectOutstandingAmountList(argsMap);
		return outstandingamountList;		
	}

}
