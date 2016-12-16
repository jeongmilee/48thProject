package com.seoul.his.msv.sup.pathology.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsPathology")
public class PathologyBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
