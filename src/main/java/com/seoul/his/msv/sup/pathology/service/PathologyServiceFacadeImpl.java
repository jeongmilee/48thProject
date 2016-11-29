package com.seoul.his.msv.sup.pathology.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.pathology.applicationService.PathologyApplicationService;
import com.seoul.his.msv.sup.pathology.to.PathologyBean;


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
public class PathologyServiceFacadeImpl implements PathologyServiceFacade{
	@Autowired
	PathologyApplicationService pathologyApplicationService;


	@Override
		public List<PathologyBean> findPathologyList(Map<String, String> argsMap) {
		List<PathologyBean> pathologyList = pathologyApplicationService.findPathologyList(argsMap);
		return pathologyList;
	}
	
	
	
}
