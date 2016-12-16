package com.seoul.his.msv.pre.operationrecord.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.pre.operationrecord.applicationService.OperationRecordApplicationService;
import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;


/**
 * @Package  com.seoul.his.acc.budget.service
 * @Class    BudgetServiceFacadeImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class OperationRecordServiceFacadeImpl implements OperationRecordServiceFacade{
	@Autowired
	OperationRecordApplicationService operationrecordApplicationService;


	@Override
		public List<OperationRecordBean> findOperationRecordList(Map<String, String> argsMap) {
		List<OperationRecordBean> operationrecordList = operationrecordApplicationService.findOperationRecordList(argsMap);
		return operationrecordList;
	}
	
	
	
}
