package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.dao.EndoscopeRadiologyDiagnosisDAO;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.exception.EndoscopeRadiologyDiagnosisException;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;

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
public class EndoscopeRadiologyDiagnosisApplicationServiceImpl implements EndoscopeRadiologyDiagnosisApplicationService{
	@Autowired
	EndoscopeRadiologyDiagnosisDAO endoscoperadiologydiagnosisDAO;
	



	@Override
	public List<EndoscopeRadiologyDiagnosisBean> findEndoscopeRadiologyDiagnosisList(Map<String, String> argsMap) {
		List<EndoscopeRadiologyDiagnosisBean> endoscoperadiologydiagnosisList = endoscoperadiologydiagnosisDAO.selectEndoscopeRadiologyDiagnosisList(argsMap);
		return endoscoperadiologydiagnosisList;		
	}

}
