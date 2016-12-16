package com.seoul.his.msv.pre.nursingmanagement.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.pre.nursingmanagement.dao.NursingManagementDAO;
import com.seoul.his.msv.pre.nursingmanagement.exception.NursingManagementException;
import com.seoul.his.msv.pre.nursingmanagement.to.NursingManagementBean;

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
public class NursingManagementApplicationServiceImpl implements NursingManagementApplicationService{
	@Autowired
	NursingManagementDAO nursingmanagementDAO;
	



	@Override
	public List<NursingManagementBean> findNursingManagementList(Map<String, String> argsMap) {
		List<NursingManagementBean> nursingmanagementList = nursingmanagementDAO.selectNursingManagementList(argsMap);
		return nursingmanagementList;		
	}

}
