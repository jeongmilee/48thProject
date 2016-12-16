package com.seoul.his.hdm.consultationfee.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.hdm.consultationfee.dao.ConsultationFeeDAO;
import com.seoul.his.hdm.consultationfee.exception.ConsultationFeeException;
import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;

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
public class ConsultationFeeApplicationServiceImpl implements ConsultationFeeApplicationService{
	@Autowired
	ConsultationFeeDAO consultationfeeDAO;
	



	@Override
	public List<ConsultationFeeBean> findConsultationFeeList(Map<String, String> argsMap) {
		List<ConsultationFeeBean> consultationfeeList = consultationfeeDAO.selectConsultationFeeList(argsMap);
		return consultationfeeList;		
	}

}
