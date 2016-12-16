package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    ItverBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		면접관 정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name="dsHmItver")
public class ItverBean extends BaseBean{
	private String employSeq,	//채용시퀀스
					deptCd, 	//부서코드
					empNo, 		//사원번호
					deptNm, 	//부서명
					empNm;		//사원명

}
