package com.seoul.his.hdm.outstandingamount.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;

public interface OutstandingAmountDAO {

	List<OutstandingAmountBean> selectOutstandingAmountList(Map<String, String> argsMap);


}
