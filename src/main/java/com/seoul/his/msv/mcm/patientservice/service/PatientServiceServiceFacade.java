package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;


public interface PatientServiceServiceFacade {

	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);





}
