package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.mcm.patientservice.dao.AdrDAO;
import com.seoul.his.msv.mcm.patientservice.dao.AttentionalFieldDAO;
import com.seoul.his.msv.mcm.patientservice.dao.AttentionalPatientDAO;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.applicationService
 *    |_ PatientServiceApplicationServiceImpl.java
 * </pre>
 *
 * @date : 2016. 12. 5. 오전 10:09:57
 * @version :
 * @author : Minhyeog
 */

@Component
public class PatientServiceApplicationServiceImpl implements PatientServiceApplicationService {

	@Autowired
	AttentionalPatientDAO attentionalPatientDAO;
	@Autowired
	AttentionalFieldDAO attentionalFieldDAO;
	@Autowired
	AdrDAO adrDAO;
	@Autowired
	EmrDAO emrDAO;
	@Autowired
	MedicalConsultationRequestDAO medicalConsultationRequestDAO;

	@Override
	public List<EmrBean> findEmrList(Map<String, String> argsMap) {
		return emrDAO.selectEmrList(argsMap);
	}


	/* 관심환자관리 */
	@Override
	public List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap) {
		List<AttentionalPatientBean> attentionalPatientList = attentionalPatientDAO
				.selectAttentionalPatientList(argsMap);
		return attentionalPatientList;
	}
	@Override
	public void registerAttentionalPatient(AttentionalPatientBean attentionalPatient) {
		attentionalPatientDAO.insertAttentionalPatient(attentionalPatient);
	}

	@Override
	public void  batchAttentionalPatientProcess(List<AttentionalPatientBean> attentionalPatientList ){
		for (AttentionalPatientBean attentionalPatientBean : attentionalPatientList) {
			String status = attentionalPatientBean.getStatus();
			switch (status) {
			case "inserted":
				attentionalPatientDAO.insertAttentionalPatient(attentionalPatientBean);
				break;
			case "updated":
				attentionalPatientDAO.updateAttentionalPatient(attentionalPatientBean);
				break;
			case "deleted":
				attentionalPatientDAO.deleteAttentionalPatient(attentionalPatientBean);
				break;
			}
		}
	}

	/* 관심분류코드관리 */
	@Override
	public List<AttentionalFieldBean> findAttentionalFieldList(Map<String, String> argsMap) {
		List<AttentionalFieldBean> attentionalCodeList = attentionalFieldDAO.selectAttentionalFieldList(argsMap);
		return attentionalCodeList;
	}
}
