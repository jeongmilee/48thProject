package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.MedicalConsultationRequestBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;
import com.seoul.his.msv.mcm.patientservice.to.RsvPatBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.service
 *    |_ PatientServiceServiceFacade.java
 * </pre>
 *
 * @date : 2016. 11. 30. 오후 5:44:11
 * @version :
 * @author : Minhyeog
 */

public interface PatientServiceServiceFacade {

	List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap);
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap);
	List<DaySchBean> findDayScheduleList(Map<String, String> argsMap);
	List<TimeSchBean> findTimeScheduleList(Map<String, String> argsMap);
	List<MedicalConsultationRequestBean> findMedicalConsultationRequestList(Map<String, String> argsMap);
	void batchMedicalConsultationRequestProcess(List<MedicalConsultationRequestBean> medicalConsultationRequestList);
	List<RsvPatBean> findRsvByPatList(Map<String, String> argsMap);



}
