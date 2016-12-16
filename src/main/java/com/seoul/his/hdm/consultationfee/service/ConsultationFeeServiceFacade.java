package com.seoul.his.hdm.consultationfee.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;


public interface ConsultationFeeServiceFacade {

	List<ConsultationFeeBean> findConsultationFeeList(Map<String, String> argsMap);





}
