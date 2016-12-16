package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    FinSufcandiBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		최종합격자 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name="dsHmFinSufcandi")
public class FinSufcandiBean extends BaseBean {

	private  String empNo	//사원번호
			 , empNm		//사원명
			 , hireDiv      //고용구분
			 , rrn          //주민등록번호
			 , gender       //성별
			 , birthday     //생년월일
			 , addr         //주소
			 , phone        //핸드폰
			 , deptCd       //부서코드
			 , workPlace    //근무지
			 , jobrk        //직급
			 , pstep        //호봉
			 , vtrYn        //보훈여부
			 , disperYn     //장애인여부
			 , fornerYn     //외국인여부
			 , resCty       //거주국
			 , zipCd		//우편번호
			 , detailAddr   //상세주소
			 , sts          //상태
			 , takeNum      //응시번호
			 , employSeq;   //채용시퀀스

}
