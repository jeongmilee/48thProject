package com.seoul.his.hrs.appoint.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.to
 * @Class    AppointDetailBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsAppointDetail")
public class AppointDetailBean extends BaseBean {


	String  appmtSeq,	  //발령호수
		    empNo,		  //사원번호
		    currDept,	  //현부서
		    currDeptNm,   //현부서명
		    appmtPstep,   //발령호봉
		    baseAppmtCd,  //발령근거코드
		    baseAppmtNm,  //발령근거
			yyPstep,	  //연봉
			pay,		  //급여
			appmtJobtt,   //발령직위
			appmtJobcl,   //발령직종
			appmtJobclNm, //발령직종명
			appmtJobrk,   //발령직급
			appmtJobrkNm, //발령직급명
			appmtDept,	  //발령부서
			appmtDeptNm,  //발령부서명
			reason,		  //사유
			note,		  //비고
			empNm,		  //사원명
			cheack;		  //체크박스
}
