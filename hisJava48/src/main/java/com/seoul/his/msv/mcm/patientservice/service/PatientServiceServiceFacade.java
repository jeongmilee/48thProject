package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrBean;

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
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
	List<AttentionalFieldBean> findAttentionalFieldList(Map<String, String> argsMap);
	List<AdrBean> findAdrList(Map<String, String> argsMap);
	List<EmrBean> findEmrList(Map<String, String> argsMap);
	void batchAdrProcess(List<AdrBean> adrList);
	void batchAttentionalFieldProcess(List<AttentionalFieldBean> attentionalFieldList) ;
	void registerAttentionalPatient(AttentionalPatientBean attentionalPatient);
	void batchAttentionalPatientProcess(List<AttentionalPatientBean> attentionalPatientList );
}
