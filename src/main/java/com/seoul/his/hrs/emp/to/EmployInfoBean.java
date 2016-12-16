package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    EmployInfoBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		채용정보 빈
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHmEmployInfo")
public class EmployInfoBean extends BaseBean{


	 String recruLimit		//모집정원
			,employYear		//채용년도
			,employSeq		//채용시퀀스
			,employStartDay	//채용시작일
			,employEndDay	//채용종료일
			,hostDept		//주관부서
			,hireDiv		//고용구분
			,exp			//설명
			,employNm;	//채용명




}
