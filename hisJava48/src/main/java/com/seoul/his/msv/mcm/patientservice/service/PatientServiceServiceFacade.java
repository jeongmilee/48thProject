package com.seoul.his.msv.mcm.patientservice.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.AdrBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalFieldBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;
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
	List<AttentionalPatientBean> findAttentionalPatientList(Map<String, String> argsMap);
}
