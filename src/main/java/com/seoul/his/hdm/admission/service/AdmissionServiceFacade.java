package com.seoul.his.hdm.admission.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.AdmissionBean;


public interface AdmissionServiceFacade {

	List<AdmissionBean> findAdmissionList(Map<String, String> argsMap);





}
