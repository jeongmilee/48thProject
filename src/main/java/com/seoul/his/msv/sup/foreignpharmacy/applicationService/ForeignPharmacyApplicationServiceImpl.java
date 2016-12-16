package com.seoul.his.msv.sup.foreignpharmacy.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.foreignpharmacy.dao.ForeignPharmacyDAO;
import com.seoul.his.msv.sup.foreignpharmacy.exception.ForeignPharmacyException;
import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;

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
public class ForeignPharmacyApplicationServiceImpl implements ForeignPharmacyApplicationService{
	@Autowired
	ForeignPharmacyDAO foreignpharmacyDAO;
	



	@Override
	public List<ForeignPharmacyBean> findForeignPharmacyList(Map<String, String> argsMap) {
		List<ForeignPharmacyBean> foreignpharmacyList = foreignpharmacyDAO.selectForeignPharmacyList(argsMap);
		return foreignpharmacyList;		
	}

}
