package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.mcm.patientservice.applicationService.PatientServiceApplicationService;
import com.seoul.his.msv.mcm.patientservice.applicationService.TreatmentReservationApplicationService;
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
 *    |_ PatientServiceServiceFacadeImpl.java
 * </pre>
 *
 * @date : 2016. 11. 30. 오후 5:43:56
 * @version :
 * @author : Minhyeog
 */

@Service
public class PatientServiceServiceFacadeImpl implements PatientServiceServiceFacade {
	@Autowired
	PatientServiceApplicationService patientserviceApplicationService;
	@Autowired
	TreatmentReservationApplicationService treatmentReservationAppService;
	@Override
	public List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap) {
		List<PatientServiceBean> patientserviceList = patientserviceApplicationService.findPatientServiceList(argsMap);
		return patientserviceList;
	}

	/*  관심환자관리  */
	@Override
	public List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap) {
		List<AttentionalPatientBean> attentionalPatientList = patientserviceApplicationService.findAttentionalPatientList(argsMap);
		return attentionalPatientList;
	}

	/* 관심분류코드관리 */
	@Override
	public List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap) {

		List<AttentionalCodeBean> attentionalCodeList = patientserviceApplicationService.findAttentionalCodeList(argsMap);
		return attentionalCodeList;
	}
	/* 외래재진예약관리 */
	@Override
	public List<DaySchBean> findDayScheduleList(Map<String, String> argsMap) {

		return treatmentReservationAppService.findDayScheduleList(argsMap);
	}

	@Override
	public List<TimeSchBean> findTimeScheduleList(Map<String, String> argsMap) {
		return treatmentReservationAppService.findTimeScheduleList(argsMap);
	}

	@Override
	public List<MedicalConsultationRequestBean> findMedicalConsultationRequestList(Map<String, String> argsMap) {
		return patientserviceApplicationService.findMedicalConsultationRequestList(argsMap);
	}

	@Override
	public void batchMedicalConsultationRequestProcess(
			List<MedicalConsultationRequestBean> medicalConsultationRequestList) {
		patientserviceApplicationService.batchMedicalConsultationRequestProcess(medicalConsultationRequestList);
	}

	@Override
	public List<RsvPatBean> findRsvByPatList(Map<String, String> argsMap) {
		return treatmentReservationAppService.findRsvByPatList(argsMap);
	}
}
