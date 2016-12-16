package com.seoul.his.hrs.emp.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.emp.to.EmpBean;
import com.seoul.his.hrs.emp.to.EmployInfoBean;
import com.seoul.his.hrs.emp.to.FinSufcandiBean;
import com.seoul.his.hrs.emp.to.ItverBean;
import com.seoul.his.hrs.emp.to.JoinCandiBean;
import com.seoul.his.hrs.emp.to.JoinCandiScoreBean;
import com.seoul.his.hrs.emp.to.TestSubjectBean;


/**
 * 
 * @Package  com.seoul.his.hrs.emp.applicationService
 * @Class    EmpApplicationService.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			사원 AS
 * @LastUpdated
 */

public interface EmpApplicationService {

	List<EmpBean> findEmpList(Map<String, String> argsMap);

	List<EmpBean> selectEmpList(Map<String, String> argsMap);//pdf����

	void batchEmpProcess(Map<String, Object> map);

	List<EmpBean> findRetireeList(Map<String, String> argsMap);


	void appointEmp(List<AppointDetailBean> appointDetailList);



	List<EmployInfoBean> findEmployInfoList(Map<String, String> argsMap);

	List<TestSubjectBean> findTestSubjectList(Map<String, String> argsMap);

	List<ItverBean> findItverList(Map<String, String> argsMap);

	void batchEmployProcess(Map<String, Object> map);

	List<JoinCandiBean> findJoinCandiList();

	List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap);

	void batchJoinCandiProcess(Map<String, Object> map);

	List<FinSufcandiBean> findFinSufcandiList();

	void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList);
}


