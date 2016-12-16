package com.seoul.his.com.hospitalcode.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.com.hospitalcode.dao.HospitalCodeDAO;
import com.seoul.his.com.hospitalcode.exception.HospitalCodeException;
import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;

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
public class HospitalCodeApplicationServiceImpl implements HospitalCodeApplicationService{
	@Autowired
	HospitalCodeDAO hospitalcodeDAO;
	



	@Override
	public List<HospitalCodeBean> findHospitalCodeList(Map<String, String> argsMap) {
		List<HospitalCodeBean> hospitalcodeList = hospitalcodeDAO.selectHospitalCodeList(argsMap);
		return hospitalcodeList;		
	}

}
