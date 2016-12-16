package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    EmpSearchBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		사원검색정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsEmpSearch")
public class EmpSearchBean extends BaseBean{

	String searchJobtt,   //직위 검색조건
		   searchEmpnm,   //성명 검색조건
		   searchEmpno,   //사번 검색조건
		   searchJobrk,   //직급 검색조건
		   searchDeptCd,  //부서 검색조건
		   searchJobcl,   //직종 검색조건
		   searchHirediv, //고용구분 검색조건
		   employYear;    //채용년도 검색조건

}
