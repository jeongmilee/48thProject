package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.MedicalConsultationRequestBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

public interface MedicalConsultationRequestDAO {

	List<MedicalConsultationRequestBean> findMedicalConsultationRequestList(Map<String, String> argsMap);

	void insertMedicalConsultationRequest(MedicalConsultationRequestBean medicalConsultationRequest);

	void updateMedicalConsultationRequest(MedicalConsultationRequestBean medicalConsultationRequest);

	void deleteMedicalConsultationRequest(String cfrnTrmtNo);


}
