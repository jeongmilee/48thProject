package com.seoul.his.hrs.emp.dao;

import java.util.Map;
import java.util.List;

import com.seoul.his.common.to.BaseBean;
import com.seoul.his.hrs.emp.to.EmployInfoBean;
import com.seoul.his.hrs.emp.to.FinSufcandiBean;
import com.seoul.his.hrs.emp.to.ItverBean;
import com.seoul.his.hrs.emp.to.JoinCandiBean;
import com.seoul.his.hrs.emp.to.JoinCandiScoreBean;
import com.seoul.his.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    EmployInfoDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface EmployInfoDAO {

	 List<EmployInfoBean> findEmployInfoList(Map<String, String> argsMap);

	 List<TestSubjectBean> findTestSubjectList(Map<String, String> argsMap);

	 List<ItverBean> findItverList(Map<String, String> argsMap);

	void insertEmployInfo(BaseBean baseBean);

	void updateEmployInfo(BaseBean baseBean);

	void delectEmployInfo(BaseBean baseBean);

	void insertItver(BaseBean baseBean);

	void updateItver(BaseBean baseBean);

	void delectItver(BaseBean baseBean);

	void insertTestSubject(BaseBean baseBean);

	void updateTestSubject(BaseBean baseBean);

	void delectTestSubject(BaseBean baseBean);

	 List<JoinCandiBean> findJoinCandiList();

	 List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap);

	void insertJoinCandi(BaseBean baseBean);

	void updateJoinCandi(BaseBean baseBean);

	void delectJoinCandi(BaseBean baseBean);

	void insertJoinCandiScore(BaseBean baseBean);

	void updateJoinCandiScore(BaseBean baseBean);

	void delectJoinCandiScore(BaseBean baseBean);

	 List<FinSufcandiBean> findFinSufcandiList();

	void insertFinSufcandi(FinSufcandiBean finSufcandiBean);

	void updateFinSufcandi(FinSufcandiBean finSufcandiBean);

	void deleteFinSufcandi(FinSufcandiBean finSufcandiBean);
}
