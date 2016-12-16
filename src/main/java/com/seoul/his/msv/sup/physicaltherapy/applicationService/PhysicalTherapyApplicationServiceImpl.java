package com.seoul.his.msv.sup.physicaltherapy.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.physicaltherapy.dao.PhysicalTherapyDAO;
import com.seoul.his.msv.sup.physicaltherapy.exception.PhysicalTherapyException;
import com.seoul.his.msv.sup.physicaltherapy.to.PhysicalTherapyBean;

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
public class PhysicalTherapyApplicationServiceImpl implements PhysicalTherapyApplicationService{
	@Autowired
	PhysicalTherapyDAO physicaltherapyDAO;
	



	@Override
	public List<PhysicalTherapyBean> findPhysicalTherapyList(Map<String, String> argsMap) {
		List<PhysicalTherapyBean> physicaltherapyList = physicaltherapyDAO.selectPhysicalTherapyList(argsMap);
		return physicaltherapyList;		
	}

}
