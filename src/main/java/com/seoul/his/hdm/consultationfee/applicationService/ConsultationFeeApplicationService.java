package com.seoul.his.hdm.consultationfee.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.consultationfee.exception.ConsultationFeeException;
import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;


public interface ConsultationFeeApplicationService {

	List<ConsultationFeeBean> findConsultationFeeList(Map<String, String> argsMap);


}
