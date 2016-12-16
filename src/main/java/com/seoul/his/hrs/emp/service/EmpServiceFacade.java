package com.seoul.his.hrs.emp.service;

import java.util.Map;
import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.emp.to.EmpBean;
import com.seoul.his.hrs.emp.to.EmployInfoBean;
import com.seoul.his.hrs.emp.to.FinSufcandiBean;
import com.seoul.his.hrs.emp.to.ItverBean;
import com.seoul.his.hrs.emp.to.JoinCandiBean;
import com.seoul.his.hrs.emp.to.JoinCandiScoreBean;
import com.seoul.his.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.service
 * @Class    EmpServiceFacade.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			 사원,채용 sf
 * @LastUpdated
 * 			2016. 11. 27.
 */

public interface EmpServiceFacade {

	List<EmpBean> findEmpList(Map<String, String> argsMap);

	List<EmpBean> selectEmpList(Map<String, String> argsMap);

	void batchEmpProcess(Map<String, Object> map);

	List<EmployInfoBean> findEmployInfoList(Map<String, String> argsMap);

	List<TestSubjectBean> findTestSubject(Map<String, String> argsMap);

	List<ItverBean> findItverList(Map<String, String> argsMap);

	void batchEmployProcess(Map<String, Object> argsMap);

	List<JoinCandiBean> findJoinCandiList();

	List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap);

	void batchJoinCandiProcess(Map<String, Object> map);

	List<FinSufcandiBean> findFinSufcandiList();

	void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList);

	List<EmpBean> findRetireeList(Map<String, String> argsMap);

}
