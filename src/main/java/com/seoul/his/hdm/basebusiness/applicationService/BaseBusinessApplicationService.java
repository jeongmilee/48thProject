package com.seoul.his.hdm.basebusiness.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.basebusiness.exception.BaseBusinessException;
import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;


public interface BaseBusinessApplicationService {

	List<BaseBusinessBean> findBaseBusinessList(Map<String, String> argsMap);


}
