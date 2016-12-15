package com.seoul.his.hdm.patient.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.patient.to.CheckPatientBean;
import com.seoul.his.hdm.patient.to.PatientBean;

public interface CheckPatientDAO {

	List<CheckPatientBean> selectCheckPatientList(Map<String, String> argsMap);

	void insertCheckPatient(CheckPatientBean CheckPatientBean);

	void updateCheckPatient(CheckPatientBean CheckPatientBean);

	void deleteCheckPatient(CheckPatientBean CheckPatientBean);


}
