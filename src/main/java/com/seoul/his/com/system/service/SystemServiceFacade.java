package com.seoul.his.com.system.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.system.to.SystemBean;


public interface SystemServiceFacade {

	List<SystemBean> findSystemList(Map<String, String> argsMap);


}
