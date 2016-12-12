package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.mcm.patientservice.dao.AdrDAO;
import com.seoul.his.msv.mcm.patientservice.dao.AttentionalFieldDAO;
import com.seoul.his.msv.mcm.patientservice.dao.AttentionalPatientDAO;
import com.seoul.his.msv.mcm.patientservice.dao.EmrDAO;
import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.EmrBean;

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

	/* 	 EMR 관리	*/
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

	@Override
	public void batchAttentionalFieldProcess(List<AttentionalFieldBean> attentionalFieldList) {
		for (AttentionalFieldBean attentionalFieldBean : attentionalFieldList) {
			String status = attentionalFieldBean.getStatus();
			switch (status) {
			case "inserted":
				attentionalFieldDAO.insertAttentionalField(attentionalFieldBean);
				break;
			case "updated":
				attentionalFieldDAO.updateAttentionalField(attentionalFieldBean);
				break;
			case "deleted":
				attentionalFieldDAO.deleteAttentionalField(attentionalFieldBean);
				break;
			}
		}
	}
	/* ADR 관리 */
	@Override
	public List<AdrBean> findAdrList(Map<String, String> argsMap) {
		return adrDAO.selectAdrList(argsMap);
	}

	@Override
	public void batchAdrProcess(List<AdrBean> adrList) {
		for (AdrBean adrBean : adrList) {
			String status = adrBean.getStatus();
			switch (status) {
			case "inserted":
			case "updated":
				adrDAO.upsertAdr(adrBean);
				break;
			case "deleted":
				adrDAO.deleteAdr(adrBean);
				break;
			}
		}

	}

}
