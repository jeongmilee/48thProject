package com.seoul.his.msv.pre.operationrecord.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;


public interface OperationRecordServiceFacade {

	List<OperationRecordBean> findOperationRecordList(Map<String, String> argsMap);





}
