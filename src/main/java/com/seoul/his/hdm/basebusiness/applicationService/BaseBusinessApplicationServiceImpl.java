package com.seoul.his.hdm.basebusiness.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.basebusiness.dao.BaseBusinessDAO;
import com.seoul.his.hdm.basebusiness.exception.BaseBusinessException;
import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;

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
public class BaseBusinessApplicationServiceImpl implements BaseBusinessApplicationService{
	@Autowired
	BaseBusinessDAO basebusinessDAO;
	



	@Override
	public List<BaseBusinessBean> findBaseBusinessList(Map<String, String> argsMap) {
		List<BaseBusinessBean> basebusinessList = basebusinessDAO.selectBaseBusinessList(argsMap);
		return basebusinessList;		
	}

}
