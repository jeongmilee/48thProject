package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    FamilyBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		가족정보 빈
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsHmFamily")
public class FamilyBean extends BaseBean{

	String famSeq  //가족시퀀스
		  ,empNo   //사원번호
		  ,name    //성명
		  ,relt    //관계
		  ,spptYn  //부양여부
		  ,rrn;    //주민번호

}
