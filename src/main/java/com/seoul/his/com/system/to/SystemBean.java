package com.seoul.his.com.system.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsSystem")
public class SystemBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
