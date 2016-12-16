package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    ItverJoinCantBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name="dsHmItverJoinCant")
public class ItverJoinCantBean extends BaseBean{

	private String employSeq , //채용시퀀스
					deptCode , //부서코드
					empNo ,    //사원번호
					takeNum ,  //응시번호
					score;	   //점수

}
