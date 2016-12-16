package com.seoul.his.msv.sup.pathology.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.pathology.dao.PathologyDAO;
import com.seoul.his.msv.sup.pathology.exception.PathologyException;
import com.seoul.his.msv.sup.pathology.to.PathologyBean;

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
public class PathologyApplicationServiceImpl implements PathologyApplicationService{
	@Autowired
	PathologyDAO pathologyDAO;
	



	@Override
	public List<PathologyBean> findPathologyList(Map<String, String> argsMap) {
		List<PathologyBean> pathologyList = pathologyDAO.selectPathologyList(argsMap);
		return pathologyList;		
	}

}
