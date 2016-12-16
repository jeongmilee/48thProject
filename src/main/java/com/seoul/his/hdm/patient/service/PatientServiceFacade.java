package com.seoul.his.hdm.patient.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.patient.to.PatientBean;


public interface PatientServiceFacade {

	List<PatientBean> findPatientList(Map<String, String> argsMap);





}
