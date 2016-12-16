package com.seoul.his.com.hospitalcode.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.hospitalcode.exception.HospitalCodeException;
import com.seoul.his.com.hospitalcode.to.HospitalCodeBean;


public interface HospitalCodeApplicationService {

	List<HospitalCodeBean> findHospitalCodeList(Map<String, String> argsMap);


}
