package com.seoul.his.com.system.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.seoul.his.com.system.dao.SystemDAO;
import com.seoul.his.com.system.exception.SystemException;
import com.seoul.his.com.system.to.SystemBean;

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
public class SystemApplicationServiceImpl implements SystemApplicationService{
	@Autowired
	SystemDAO systemDAO;
/*

	@Autowired
	private EmpDAO empDAO;
	@Autowired
	private MenuDAO menuDAO;
*/

	@Autowired
	private ResourceBundleMessageSource messageSource;



	@Override
	public List<SystemBean> findSystemList(Map<String, String> argsMap) {
		List<SystemBean> systemList = systemDAO.selectSystemList(argsMap);
		return systemList;		
	}






}
