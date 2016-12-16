package com.seoul.his.msv.sup.hosptaldiet.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietBean;

public interface HosptalDietDAO {

	List<HosptalDietBean> selectHosptalDietList(Map<String, String> argsMap);


}
