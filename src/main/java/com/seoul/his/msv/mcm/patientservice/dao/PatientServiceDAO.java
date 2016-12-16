package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;

public interface PatientServiceDAO {

	List<PatientServiceBean> selectPatientServiceList(Map<String, String> argsMap);


}
