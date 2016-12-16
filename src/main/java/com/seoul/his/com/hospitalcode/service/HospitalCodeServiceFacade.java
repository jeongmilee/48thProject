package com.seoul.his.com.hospitalcode.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;


public interface HospitalCodeServiceFacade {

	List<HospitalCodeBean> findHospitalCodeList(Map<String, String> argsMap);





}
