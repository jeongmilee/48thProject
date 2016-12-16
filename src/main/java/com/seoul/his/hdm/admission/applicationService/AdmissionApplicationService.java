package com.seoul.his.hdm.admission.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.exception.AdmissionException;
import com.seoul.his.hdm.admission.to.AdmissionBean;


public interface AdmissionApplicationService {

	List<AdmissionBean> findAdmissionList(Map<String, String> argsMap);


}
