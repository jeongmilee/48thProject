package com.seoul.his.msv.sup.hosptaldiet.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptaldiet.exception.HosptalDietException;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;


public interface HosptalDietApplicationService {

	List<HosptalDietBean> findHosptalDietList(Map<String, String> argsMap);


}
