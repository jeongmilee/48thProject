package com.seoul.his.hdm.patient.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.patient.exception.PatientException;
import com.seoul.his.hdm.patient.to.DustBean;
import com.seoul.his.hdm.patient.to.PatientBean;


public interface PatientApplicationService {

	List<PatientBean> findPatientList(Map<String, String> argsMap);


	void batchPatientProcess(List<PatientBean> patientBeanList);




}
