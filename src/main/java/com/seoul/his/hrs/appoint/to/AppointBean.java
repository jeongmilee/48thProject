package com.seoul.his.hrs.appoint.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.to
 * @Class    AppointBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name="dsAppoint")
public class AppointBean extends BaseBean{
	String  appmtSeq,      //발령호수
			empNo,		   //사원번호
			appmtDiv,	   //발령구분코드
			appmtSubject,  //발령구분명
			appmtDate,     //발령일자
			transDept,     //발신부서코드
			transDeptNm,   //발신부서명
			empNm,		   //사원명
			appmtyn;	   //발령상세등록유무

}
