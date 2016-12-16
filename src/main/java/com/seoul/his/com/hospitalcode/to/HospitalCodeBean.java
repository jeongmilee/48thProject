package com.seoul.his.com.hospitalcode.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsHospitalCode")
public class HospitalCodeBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
