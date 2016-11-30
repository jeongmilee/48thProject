package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.mcm.patientservice.dao.AttentionalCodeDAO;
import com.seoul.his.msv.mcm.patientservice.dao.AttentionalPatientDAO;
import com.seoul.his.msv.mcm.patientservice.dao.PatientServiceDAO;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
import com.seoul.his.msv.mcm.patientservice.to.PatientServiceBean;

/**
 * @Package com.seoul.his.acc.budget.applicationService
 * @Class AccBudgetApplicationServiceImpl.java
 * @Create 2016. 6. 27.
 * @Author jeong
 * @Description
 *
 * @LastUpdated
 */

@Component
public class PatientServiceApplicationServiceImpl implements PatientServiceApplicationService {
	@Autowired
	PatientServiceDAO patientserviceDAO;
	@Autowired
	AttentionalPatientDAO attentionalPatientDAO;
	@Autowired
	AttentionalCodeDAO attentionalCodeDAO;


	@Override
	public List<PatientServiceBean> findPatientServiceList(Map<String, String> argsMap) {
		List<PatientServiceBean> patientserviceList = patientserviceDAO.selectPatientServiceList(argsMap);
		return patientserviceList;
	}

	/* 관심환자관리 */
	@Override
	public List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap) {
		List<AttentionalPatientBean> attentionalPatientList = attentionalPatientDAO.selectAttentionalPatientList(argsMap);
		return attentionalPatientList;
	}

	/* 관심분류코드관리 */
	@Override
	public List<AttentionalCodeBean> findAttentionalCodeList(Map<String, String> argsMap) {
		List<AttentionalCodeBean> attentionalCodeList = attentionalCodeDAO.selectAttentionalCodeList(argsMap);
		return attentionalCodeList;
	}
}
