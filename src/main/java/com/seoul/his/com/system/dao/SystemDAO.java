package com.seoul.his.com.system.dao;

import java.util.List;
import java.util.Map;


import com.seoul.his.com.system.to.SystemBean;

public interface SystemDAO {

	List<SystemBean> selectSystemList(Map<String, String> argsMap);

}
