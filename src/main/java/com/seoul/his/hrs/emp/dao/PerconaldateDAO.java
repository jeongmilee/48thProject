package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    PerconaldateDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface PerconaldateDAO {
	List<BaseBean> findPerconaldateList(String empNo);

	void insertPerconaldate(BaseBean perconaldateBean);

	void updatePerconaldate(BaseBean perconaldateBean);

	void deletePerconaldate(BaseBean perconaldateBean);

	void destroyPerconaldate(String empNo);
}
