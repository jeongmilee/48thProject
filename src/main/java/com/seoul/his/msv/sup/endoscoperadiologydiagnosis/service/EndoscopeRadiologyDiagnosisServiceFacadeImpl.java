package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.applicationService.EndoscopeRadiologyDiagnosisApplicationService;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;


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
public class EndoscopeRadiologyDiagnosisServiceFacadeImpl implements EndoscopeRadiologyDiagnosisServiceFacade{
	@Autowired
	EndoscopeRadiologyDiagnosisApplicationService endoscoperadiologydiagnosisApplicationService;


	@Override
		public List<EndoscopeRadiologyDiagnosisBean> findEndoscopeRadiologyDiagnosisList(Map<String, String> argsMap) {
		List<EndoscopeRadiologyDiagnosisBean> endoscoperadiologydiagnosisList = endoscoperadiologydiagnosisApplicationService.findEndoscopeRadiologyDiagnosisList(argsMap);
		return endoscoperadiologydiagnosisList;
	}
	
	
	
}
