package com.seoul.his.hdm.basebusiness.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;


public interface BaseBusinessServiceFacade {

	List<BaseBusinessBean> findBaseBusinessList(Map<String, String> argsMap);





}
