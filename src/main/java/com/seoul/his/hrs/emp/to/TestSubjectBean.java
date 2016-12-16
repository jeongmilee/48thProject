package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    TestSubjectBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */


@Getter
@Setter
@ToString
@Dataset(name="dsHmTestSubject")
public class TestSubjectBean extends BaseBean {

	private String employSeq;
	private String subjectCd;
	private String subjectNm;

	//List<JoinCandiScoreBean> joinCandiScoreBean;


	/*@Remove
	public List<JoinCandiScoreBean> getJoinCandiScoreBean() {
		return joinCandiScoreBean;
	}
	@Remove
	public void setJoinCandiScoreBean(List<JoinCandiScoreBean> joinCandiScoreBean) {
		this.joinCandiScoreBean = joinCandiScoreBean;
	}*/

}
