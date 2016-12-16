package com.seoul.his.hdm.basebusiness.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.basebusiness.to.BaseBusinessBean;

public interface BaseBusinessDAO {

	List<BaseBusinessBean> selectBaseBusinessList(Map<String, String> argsMap);


}
