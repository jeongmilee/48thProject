package com.seoul.his.hrs.appoint.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.appoint.applicationService.AppointApplicationService;
import com.seoul.his.hrs.appoint.to.AppointBean;
import com.seoul.his.hrs.appoint.to.AppointCheckBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.appoint.to.AppointInfoBean;
import com.seoul.his.hrs.emp.applicationService.EmpApplicationService;
import com.seoul.his.hrs.emp.to.DeptBean;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.service
 * @Class    AppointServiceFacadeImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 SF_Impl
 * @LastUpdated
 */

@Service
public class AppointServiceFacadeImpl implements AppointServiceFacade{

	@Autowired
	AppointApplicationService appointApplicationService;
	@Autowired
	EmpApplicationService empApplicationService;
	
	@Override
	public List<DeptBean> findDeptList(Map<String, String> serchDeptList) {
		return appointApplicationService.findDeptList(serchDeptList);
	}

	@Override
	public List<EmpBean> findEmpList(Map<String, String> map) {
		return appointApplicationService.findEmpList(map);
	}

	@Override
	public void batchAppoint(List<AppointBean> appointInfoList) {
		appointApplicationService.batchAppoint(appointInfoList);
	}

	@Override
	public List<AppointBean> findAppmtList(Map<String,String> argsMap) {
		return appointApplicationService.findAppmtList(argsMap);
	}

	@Override
	public void batchAppointDetail(
			List<AppointDetailBean> appointDetailInfoList) {
		System.out.println("상세등록");
		appointApplicationService.batchAppointDetail(appointDetailInfoList);
		//System.out.println("사원수정");
		//empApplicationService.appointEmp(appointDetailInfoList);
	}

	@Override
	public void modifyAppointDetail(List<AppointDetailBean> appointDetailInfoList) {
		appointApplicationService.modifyrAppointDetail(appointDetailInfoList);
		empApplicationService.appointEmp(appointDetailInfoList);
	}

	@Override
	public List<AppointInfoBean> findAppointInfoList(Map<String, String> map) {
		return appointApplicationService.findAppointInfoList(map);
	}

	@Override
	public void modifyAppointEmp(List<AppointDetailBean> appointInfoList,Map<String,String> argsMap) {
		appointApplicationService.modifyAppointEmp(appointInfoList,argsMap);
	}
	
	@Override
	public List<AppointCheckBean> findCheckAppointList(Map<String, String> queryMap) {
		return appointApplicationService.findCheckAppointList(queryMap);
	}

	@Override
	public List<AppointDetailBean> findAppmtDetailList(Map<String,String> argsMap) {
		return appointApplicationService.findAppmtDetailList(argsMap);
	}

	@Override
	public void retEmp(Map<String, String> argsMap) {
		appointApplicationService.retEmp(argsMap);
	}



}
