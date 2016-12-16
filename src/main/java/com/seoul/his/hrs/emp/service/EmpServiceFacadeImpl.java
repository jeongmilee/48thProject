package com.seoul.his.hrs.emp.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.emp.applicationService.EmpApplicationService;
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
 * @Class    EmpServiceFacadeImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Service
public class EmpServiceFacadeImpl implements EmpServiceFacade {

	@Autowired
	EmpApplicationService empApplicationService;



	@Override
	public List<EmpBean> findEmpList(Map<String, String> argsMap) {
		return empApplicationService.findEmpList(argsMap);
	}


	@Override
	public List<EmpBean> selectEmpList(Map<String, String> argsMap) { //pdf ���ϰ����´�
		return empApplicationService.selectEmpList(argsMap);
	}



	@Override
	public void batchEmpProcess(Map<String, Object> map) {
		 empApplicationService.batchEmpProcess(map);

	}


	@Override
	public List<EmployInfoBean> findEmployInfoList(
			Map<String, String> argsMap) {
		return empApplicationService.findEmployInfoList(argsMap);

	}

	@Override
	public List<TestSubjectBean> findTestSubject(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findTestSubjectList(argsMap);
	}

	@Override
	public List<ItverBean> findItverList(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findItverList(argsMap);
	}

	@Override
	public void batchEmployProcess(Map<String, Object> map){
		empApplicationService.batchEmployProcess(map);

	}

	@Override
	public List<JoinCandiBean> findJoinCandiList() {
		return empApplicationService.findJoinCandiList();
	}

	@Override
	public List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap) {
		// TODO Auto-generated method stub
		return empApplicationService.findJoinCandiScore(argsMap);
	}

	@Override
	public void batchJoinCandiProcess(Map<String, Object> map) {
		empApplicationService.batchJoinCandiProcess(map);
	}

	@Override
	public List<FinSufcandiBean> findFinSufcandiList() {
		// TODO Auto-generated method stub
		return empApplicationService.findFinSufcandiList();
	}


	/* (non-Javadoc)
	 * @see com.erp45.hrs.emp.service.EmpServiceFacade#batchFinSufcandiProcess(java.util.List)
	 */
	@Override
	public void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList) {

		empApplicationService.batchFinSufcandiProcess(finSufcandiList);
	}


	@Override
	public List<EmpBean> findRetireeList(Map<String, String> argsMap) {
		return empApplicationService.findRetireeList(argsMap);
	}



//	@Override
//	public void batchFinSufcandiProcess(Map<String, Object> map) {
//		employInfoAS.batchFinSufcandiProcess(map);
//	}



}


