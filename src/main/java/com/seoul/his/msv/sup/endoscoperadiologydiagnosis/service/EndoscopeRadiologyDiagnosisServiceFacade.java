package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;


public interface EndoscopeRadiologyDiagnosisServiceFacade {

	List<EndoscopeRadiologyDiagnosisBean> findEndoscopeRadiologyDiagnosisList(Map<String, String> argsMap);





}
