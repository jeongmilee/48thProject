package com.seoul.his.hdm.outstandingamount.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;


public interface OutstandingAmountServiceFacade {

	List<OutstandingAmountBean> findOutstandingAmountList(Map<String, String> argsMap);





}
