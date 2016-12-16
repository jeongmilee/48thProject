package com.seoul.his.hrs.appoint.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.to
 * @Class    AppointInfoBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsAppointInfo")
public class AppointInfoBean extends BaseBean{
	String empNo,			//사원번호
		   empNm,			//사원명
		   appmtSubject,	//발령구분
		   appmtDate,		//발령일자
		   appmtDeptNm,		//발령부서
		   appmtJobclNm,	//발령직종
		   appmtJobrkNm,	//발령직급
		   appmtJobtt,		//발령직위
		   appmtPstep,		//발령호봉
		   yyPstep,			//연봉
		   pay,				//급여
		   reason,			//사유
		   note,			//비고
		   baseAppmtNm;		//발령근거

}
