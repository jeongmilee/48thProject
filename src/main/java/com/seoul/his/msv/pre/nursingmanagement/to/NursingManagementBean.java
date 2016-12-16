package com.seoul.his.msv.pre.nursingmanagement.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsNursingManagement")
public class NursingManagementBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
