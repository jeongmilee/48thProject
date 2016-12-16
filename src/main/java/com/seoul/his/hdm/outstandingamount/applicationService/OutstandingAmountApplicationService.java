package com.seoul.his.hdm.outstandingamount.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.outstandingamount.exception.OutstandingAmountException;
import com.seoul.his.hdm.outstandingamount.to.OutstandingAmountBean;


public interface OutstandingAmountApplicationService {

	List<OutstandingAmountBean> findOutstandingAmountList(Map<String, String> argsMap);


}
