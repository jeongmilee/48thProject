package com.seoul.his.hrs.appoint.service;

import java.util.Map;
import java.util.List;

import com.seoul.his.hrs.appoint.to.AppointBean;
import com.seoul.his.hrs.appoint.to.AppointCheckBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.appoint.to.AppointInfoBean;
import com.seoul.his.hrs.emp.to.DeptBean;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.service
 * @Class    AppointServiceFacade.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 SF
 * @LastUpdated
 */


public interface AppointServiceFacade {

	public List<DeptBean> findDeptList(Map<String, String> serchDeptList);

	public List<EmpBean> findEmpList(Map<String, String> map);

	public void batchAppoint(List<AppointBean> appointInfoList);

	public List<AppointBean> findAppmtList(Map<String,String> argsMap);

	public void batchAppointDetail(
			List<AppointDetailBean> appointDetailInfoList);
	
	public List<AppointDetailBean> findAppmtDetailList(Map<String,String> argsMap);
	
	public void modifyAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	public List<AppointInfoBean> findAppointInfoList(Map<String, String> map);

	public void modifyAppointEmp(List<AppointDetailBean> appointInfoList,Map<String,String> argsMap);

	public List<AppointCheckBean> findCheckAppointList(Map<String, String> map);
	
	public void retEmp(Map<String, String> argsMap);
}
