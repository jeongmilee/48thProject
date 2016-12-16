package com.seoul.his.com.system.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.system.exception.SystemException;
import com.seoul.his.com.system.to.SystemBean;



public interface SystemApplicationService {

	List<SystemBean> findSystemList(Map<String, String> argsMap);


}
