package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    FamilyDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface FamilyDAO {

	List<BaseBean> findFamilyList(String empNo);

	void insertFamily(BaseBean familyBean);

	void updateFamily(BaseBean familyBean);

	void deleteFamily(BaseBean familyBean);

	void destroyFamily(String empNo);
}
