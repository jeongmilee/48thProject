package com.seoul.his.hdm.patient.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.patient.to.CheckPatientBean;
import com.seoul.his.hdm.patient.to.DustBean;
import com.seoul.his.hdm.patient.to.PatientBean;


public interface PatientServiceFacade {

	List<PatientBean> findPatientList(Map<String, String> argsMap);

	void batchPatientProcess(List<PatientBean> patientBeanList);

	List<CheckPatientBean> findCheckPatientList(Map<String, String> argsMap);

	void batchCheckPatientProcess(List<CheckPatientBean> checkPatientBeanList); 




}
