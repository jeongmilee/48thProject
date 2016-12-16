package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.exception.PatientServiceException;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;


public interface PatientServiceApplicationService {

	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);


}
