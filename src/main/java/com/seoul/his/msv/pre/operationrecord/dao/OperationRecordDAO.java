package com.seoul.his.msv.pre.operationrecord.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;

public interface OperationRecordDAO {

	List<OperationRecordBean> selectOperationRecordList(Map<String, String> argsMap);


}
