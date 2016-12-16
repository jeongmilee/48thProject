package com.seoul.his.hdm.foreign.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.foreign.dao.ForeignDAO;
import com.seoul.his.hdm.foreign.exception.ForeignException;
import com.seoul.his.hdm.foreign.to.ForeignBean;

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
public class ForeignApplicationServiceImpl implements ForeignApplicationService{
	@Autowired
	ForeignDAO foreignDAO;
	



	@Override
	public List<ForeignBean> findForeignList(Map<String, String> argsMap) {
		List<ForeignBean> foreignList = foreignDAO.selectForeignList(argsMap);
		return foreignList;		
	}

}
