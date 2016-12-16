package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.exception.EndoscopeRadiologyDiagnosisException;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;


public interface EndoscopeRadiologyDiagnosisApplicationService {

	List<EndoscopeRadiologyDiagnosisBean> findEndoscopeRadiologyDiagnosisList(Map<String, String> argsMap);


}
