package com.seoul.his.msv.sup.hosptalpharmacy.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.hosptalpharmacy.dao.HosptalPharmacyDAO;
import com.seoul.his.msv.sup.hosptalpharmacy.exception.HosptalPharmacyException;
import com.seoul.his.msv.sup.hosptalpharmacy.to.HosptalPharmacyBean;

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
public class HosptalPharmacyApplicationServiceImpl implements HosptalPharmacyApplicationService{
	@Autowired
	HosptalPharmacyDAO hosptalpharmacyDAO;
	



	@Override
	public List<HosptalPharmacyBean> findHosptalPharmacyList(Map<String, String> argsMap) {
		List<HosptalPharmacyBean> hosptalpharmacyList = hosptalpharmacyDAO.selectHosptalPharmacyList(argsMap);
		return hosptalpharmacyList;		
	}

}
