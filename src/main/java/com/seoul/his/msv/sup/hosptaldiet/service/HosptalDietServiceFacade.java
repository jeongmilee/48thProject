package com.seoul.his.msv.sup.hosptaldiet.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;


public interface HosptalDietServiceFacade {

	List<HosptalDietBean> findHosptalDietList(Map<String, String> argsMap);





}
