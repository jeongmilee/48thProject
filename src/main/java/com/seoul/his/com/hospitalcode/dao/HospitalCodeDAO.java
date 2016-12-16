package com.seoul.his.com.hospitalcode.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;

public interface HospitalCodeDAO {

	List<HospitalCodeBean> selectHospitalCodeList(Map<String, String> argsMap);


}
