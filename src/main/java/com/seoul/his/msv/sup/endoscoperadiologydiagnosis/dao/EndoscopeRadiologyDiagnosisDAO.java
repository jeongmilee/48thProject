package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;

public interface EndoscopeRadiologyDiagnosisDAO {

	List<EndoscopeRadiologyDiagnosisBean> selectEndoscopeRadiologyDiagnosisList(Map<String, String> argsMap);


}
