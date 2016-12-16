package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    EducationDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface EducationDAO {
	List<BaseBean> findEducationList(String empNo);

	void insertEducation(BaseBean educationBean);

	void updateEducation(BaseBean educationBean);

	void deleteEducation(BaseBean educationBean);

	void destroyEducation(String empNo);
}
