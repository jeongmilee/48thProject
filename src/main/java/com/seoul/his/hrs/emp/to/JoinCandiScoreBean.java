package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    JoinCandiScoreBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			과목점수 빈
 * @LastUpdated
 */
@Setter
@Getter
@ToString
@Dataset(name="dsHmJoinCandiScore")
public class JoinCandiScoreBean extends BaseBean{

		private String  takeNum,    //응시번호
						employSeq,	//채용시퀀스
						subjectCd,	//과목코드
						subjectScore,
						itverScore;

}
