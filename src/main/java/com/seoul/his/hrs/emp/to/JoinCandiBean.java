package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    JoinCandiBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *		채용정보 빈
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name="dsHmJoinCandi")
public class JoinCandiBean extends BaseBean{

	 String  employYear		//채용년도
		    ,employNm       //채용명
		    ,hireDiv        //고용구분
		    ,takeNum        //응시번호
		    ,empNm          //사원번호
		    ,rrn            //주민번호
		    ,gender         //성별
		    ,major          //전공
		    ,originSchool   //출신학교
		    ,phone          //휴대폰번호
		    ,birthday       //생년월일
		    ,zipCd			//우편번호
		    ,addr           //주소
		    ,addrDetail		//상세주소
		    ,vtrYn          //보훈여부
		    ,disperYn       //장애인여부
		    ,addScore       //가산점
		    ,docScrScore    //서류전형점수
		    ,prgsPhase      //진행단계
		    ,exp            //설명
		    ,employSeq;     //채용시퀀스

}