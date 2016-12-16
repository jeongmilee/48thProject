package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    DeptBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		부서 빈
 * @LastUpdated
 */		
@Getter
@Setter
@ToString
@Dataset(name = "dsDept")
public class DeptBean extends BaseBean{
	String deptCd,   			    //부서코드
		   deptNm,				    //부서명
		   sectionManagerNm,	    //상위부서
		   level;					//레벨
}
