package com.seoul.his.hrs.appoint.applicationService;

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
 * @Package  com.seoul.his.hrs.appoint.applicationService
 * @Class    AppointApplicationService.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 AS
 * @LastUpdated
 */

public interface AppointApplicationService {

	List<DeptBean> findDeptList(Map<String, String> serchDeptList);

	List<EmpBean> findEmpList(Map<String, String> map);

	public void batchAppoint(List<AppointBean> appointInfoList);

	List<AppointBean> findAppmtList(Map<String,String> argsMap);
	
	List<AppointDetailBean> findAppmtDetailList(Map<String,String> argsMap);
	
	void batchAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	void modifyrAppointDetail(List<AppointDetailBean> appointDetailInfoList);

	List<AppointInfoBean> findAppointInfoList(Map<String, String> map);

	void modifyAppointEmp(List<AppointDetailBean> appointInfoList,Map<String,String> argsMap);

	List<AppointCheckBean> findCheckAppointList(Map<String, String> map);
	
	void retEmp(Map<String, String> argsMap);

}
