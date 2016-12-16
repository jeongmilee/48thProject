package com.seoul.his.hdm.foreign.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ForeignBean;

public interface ForeignDAO {

	List<ForeignBean> selectForeignList(Map<String, String> argsMap);


}
