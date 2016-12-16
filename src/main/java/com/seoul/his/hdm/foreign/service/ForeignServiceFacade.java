package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ForeignBean;


public interface ForeignServiceFacade {

	List<ForeignBean> findForeignList(Map<String, String> argsMap);





}
