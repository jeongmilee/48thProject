package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.mcm.patientservice.applicationService.PatientServiceApplicationService;
import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;

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

	@Override
	public List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap) {
		List<PatientServiceBean> patientserviceList = patientserviceApplicationService.findPatientServiceList(argsMap);
		return patientserviceList;
	}

	/*	 ADR관리	*/
	@Override
	public List<AdrBean> findAdrList(Map<String, String> argsMap) {
		return patientserviceApplicationService.findAdrList(argsMap);
	}
	@Override
	public void batchAdrProcess(List<AdrBean> adrList) {
		patientserviceApplicationService.batchAdrProcess(adrList);
	}
	/* 관심환자관리 */
	@Override
	public List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap) {
		List<AttentionalPatientBean> attentionalPatientList = patientserviceApplicationService
				.findAttentionalPatientList(argsMap);
		return attentionalPatientList;
	}
	@Override
	public void registerAttentionalPatient(AttentionalPatientBean attentionalPatient) {
		patientserviceApplicationService.registerAttentionalPatient(attentionalPatient);
	}

	/* 관심분류관리 */
	@Override
	public List<AttentionalFieldBean> findAttentionalFieldList(Map<String, String> argsMap) {
		List<AttentionalFieldBean> attentionalFieldList = patientserviceApplicationService
				.findAttentionalFieldList(argsMap);
		return attentionalFieldList;
	}
	@Override
	public void batchAttentionalFieldProcess(List<AttentionalFieldBean> attentionalFieldList) {
		patientserviceApplicationService.batchAttentionalFieldProcess(attentionalFieldList);
	}
}
