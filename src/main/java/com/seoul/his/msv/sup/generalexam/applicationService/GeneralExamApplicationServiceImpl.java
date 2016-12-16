package com.seoul.his.msv.sup.generalexam.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.generalexam.dao.GeneralExamDAO;
import com.seoul.his.msv.sup.generalexam.exception.GeneralExamException;
import com.seoul.his.msv.sup.generalexam.to.GeneralExamBean;

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
public class GeneralExamApplicationServiceImpl implements GeneralExamApplicationService{
	@Autowired
	GeneralExamDAO generalexamDAO;
	



	@Override
	public List<GeneralExamBean> findGeneralExamList(Map<String, String> argsMap) {
		List<GeneralExamBean> generalexamList = generalexamDAO.selectGeneralExamList(argsMap);
		return generalexamList;		
	}

}
