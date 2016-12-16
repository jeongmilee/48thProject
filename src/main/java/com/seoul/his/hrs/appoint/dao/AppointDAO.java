package com.seoul.his.hrs.appoint.dao;

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
 * @Package  com.seoul.his.hrs.appoint.dao
 * @Class    AppointDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 DAO
 * @LastUpdated
 */


public interface AppointDAO {

	List<DeptBean> selectDeptList(Map<String, String> serchDeptList);
	List<EmpBean> selectEmpList(Map<String, String> map);
	void insertAppointInfo(AppointBean appointBean);
	void updateAppointInfo(AppointBean appointBean);
	void deleteAppointInfo(AppointBean appointBean);
	List<AppointBean> selectAppmtList(Map<String,String> argsMap);
	void insertAppointDetailInfo(AppointDetailBean appointDetailBean);
	void updateAppointDetailInfo(AppointDetailBean appointDetailBean);
	void deleteAppointDetailInfo(AppointDetailBean appointDetailBean);
	void updateEmp(AppointDetailBean appointDetailBean);
	List<AppointInfoBean> selectAppointInfoList(Map<String, String> map);
	void updateAppointEmp(AppointDetailBean appointDetailBean);
	List<AppointCheckBean> selectCheckAppointList(Map<String, String> argsMap);
	List<AppointDetailBean> selectAppmtDetailList(Map<String, String> argsMap);
	void retEmp(Map<String, String> argsMap);
}
