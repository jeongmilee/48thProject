package com.seoul.his.hdm.consultationfee.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.consultationfee.to.ConsultationFeeBean;

public interface ConsultationFeeDAO {

	List<ConsultationFeeBean> selectConsultationFeeList(Map<String, String> argsMap);


}
