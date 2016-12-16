package com.seoul.his.hrs.emp.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.common.to.BaseBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    EmpDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */


public interface EmpDAO {

	List<EmpBean> findEmpList(Map<String, String> argsMap);

	List<EmpBean> selectEmpList(Map<String, String> argsMap);

	void insertEmp(BaseBean empBean);

	void updateEmp(BaseBean empBean);

	void deleteEmp(BaseBean empBean);
	
	void appointEmp(AppointDetailBean appointDetailBean);
	
	List<EmpBean> selectRetireeList(Map<String, String> argsMap);

	void updateLoginTimeIp(Map<String, String> argsMap);
}
