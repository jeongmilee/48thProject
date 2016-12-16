package com.seoul.his.hrs.appoint.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.to
 * @Class    AppointCheckBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsAppointCk")
public class AppointCheckBean extends BaseBean {

	String appmtDate	//발령일
	, empNo				//사원번호
	, empNm				//사원명
	, appmtSubject;		//발령구분명
}
