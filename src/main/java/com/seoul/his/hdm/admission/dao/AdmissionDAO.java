package com.seoul.his.hdm.admission.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.admission.to.AdmissionBean;

public interface AdmissionDAO {

	List<AdmissionBean> selectAdmissionList(Map<String, String> argsMap);


}
