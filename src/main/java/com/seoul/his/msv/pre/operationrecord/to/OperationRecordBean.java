package com.seoul.his.msv.pre.operationrecord.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsOperationRecord")
public class OperationRecordBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
