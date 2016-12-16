package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    DisabilityBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		장애상태 빈
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsHmDisability")
public class DisabilityBean extends BaseBean{


	 String empNo
			,disabilityApvDay //장애인정일
			,disabilityApvDiv //장애인정구분
			,disabilityType   //장애유형
			,disabilitySeq    //장애시퀀스
			,disabilityGrade  //장애등급
			,intensiveYn      //중증여부
			,note;            //비고
}
