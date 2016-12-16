package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    CareerDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface CareerDAO {

	List<BaseBean> findCareerList(String empNo);

	void insertCareer(BaseBean careerBean);

	void updateCareer(BaseBean careerBean);

	void deleteCareer(BaseBean careerBean);

	void destroyCareer(String empNo);
}
