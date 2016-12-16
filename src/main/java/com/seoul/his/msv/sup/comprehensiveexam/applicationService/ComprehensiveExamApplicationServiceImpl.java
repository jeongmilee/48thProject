package com.seoul.his.msv.sup.comprehensiveexam.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.comprehensiveexam.dao.ComprehensiveExamDAO;
import com.seoul.his.msv.sup.comprehensiveexam.exception.ComprehensiveExamException;
import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;

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
public class ComprehensiveExamApplicationServiceImpl implements ComprehensiveExamApplicationService{
	@Autowired
	ComprehensiveExamDAO comprehensiveexamDAO;
	



	@Override
	public List<ComprehensiveExamBean> findComprehensiveExamList(Map<String, String> argsMap) {
		List<ComprehensiveExamBean> comprehensiveexamList = comprehensiveexamDAO.selectComprehensiveExamList(argsMap);
		return comprehensiveexamList;		
	}

}
