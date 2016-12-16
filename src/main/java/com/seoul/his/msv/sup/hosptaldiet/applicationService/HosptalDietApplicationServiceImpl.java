package com.seoul.his.msv.sup.hosptaldiet.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.hosptaldiet.dao.HosptalDietDAO;
import com.seoul.his.msv.sup.hosptaldiet.exception.HosptalDietException;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;

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
public class HosptalDietApplicationServiceImpl implements HosptalDietApplicationService{
	@Autowired
	HosptalDietDAO hosptaldietDAO;
	



	@Override
	public List<HosptalDietBean> findHosptalDietList(Map<String, String> argsMap) {
		List<HosptalDietBean> hosptaldietList = hosptaldietDAO.selectHosptalDietList(argsMap);
		return hosptaldietList;		
	}

}
