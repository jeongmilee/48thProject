
package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;

public interface AttentionalPatientDAO {

	List<AttentionalPatientBean> selectAttentionalPatientList(Map<String, String> argsMap);

	void insertAttentionalPatient(AttentionalPatientBean attentionalPatientBean);
	void updateAttentionalPatient(AttentionalPatientBean attentionalPatientBean);
	void deleteAttentionalPatient(AttentionalPatientBean attentionalPatientBean);

}