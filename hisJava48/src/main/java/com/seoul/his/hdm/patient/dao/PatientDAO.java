package com.seoul.his.hdm.patient.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.patient.to.PatientBean;

public interface PatientDAO {

	List<PatientBean> selectPatientList(Map<String, String> argsMap);

	void insertPatient(PatientBean patientBean);

	void updatePatient(PatientBean patientBean);

	void deleteEmp(PatientBean patientBean);


}
