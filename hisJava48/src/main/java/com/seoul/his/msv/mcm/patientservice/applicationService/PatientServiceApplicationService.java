package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.MedicalConsultationRequestBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;


public interface PatientServiceApplicationService {

	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap);
	List<MedicalConsultationRequestBean> findMedicalConsultationRequestList(Map<String, String> argsMap);
	void batchMedicalConsultationRequestProcess(List<MedicalConsultationRequestBean> medicalConsultationRequestList);
}
