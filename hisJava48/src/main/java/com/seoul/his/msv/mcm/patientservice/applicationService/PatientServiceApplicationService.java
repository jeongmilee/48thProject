package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;

public interface PatientServiceApplicationService {
	List<AdrBean> findAdrList(Map<String, String> argsMap);
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalFieldBean> findAttentionalFieldList(Map<String, String> argsMap);
	List<EmrBean> findEmrList(Map<String, String> argsMap);

	void batchAdrProcess(List<AdrBean> adrList);
	void batchAttentionalFieldProcess(List<AttentionalFieldBean> attentionalFieldList);
	void batchAttentionalPatientProcess(List<AttentionalPatientBean> attentionalPatientList);
	void registerAttentionalPatient(AttentionalPatientBean attentionalPatient);
	List<MedicalConsultationRequestBean> findMedicalConsultationRequestList(Map<String, String> argsMap);
	void batchMedicalConsultationRequestProcess(List<MedicalConsultationRequestBean> medicalConsultationRequestList);
}
