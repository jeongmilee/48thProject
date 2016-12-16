package com.seoul.his.msv.pre.operationrecord.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.operationrecord.exception.OperationRecordException;
import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;


public interface OperationRecordApplicationService {

	List<OperationRecordBean> findOperationRecordList(Map<String, String> argsMap);


}
