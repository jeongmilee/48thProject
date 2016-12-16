package com.seoul.his.msv.pre.operationrecord.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.pre.operationrecord.dao.OperationRecordDAO;
import com.seoul.his.msv.pre.operationrecord.exception.OperationRecordException;
import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class OperationRecordApplicationServiceImpl implements OperationRecordApplicationService{
	@Autowired
	OperationRecordDAO operationrecordDAO;
	



	@Override
	public List<OperationRecordBean> findOperationRecordList(Map<String, String> argsMap) {
		List<OperationRecordBean> operationrecordList = operationrecordDAO.selectOperationRecordList(argsMap);
		return operationrecordList;		
	}

}
