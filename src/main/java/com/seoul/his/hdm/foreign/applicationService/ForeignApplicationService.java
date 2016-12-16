package com.seoul.his.hdm.foreign.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.exception.ForeignException;
import com.seoul.his.hdm.foreign.to.ForeignBean;


public interface ForeignApplicationService {

	List<ForeignBean> findForeignList(Map<String, String> argsMap);


}
