package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    DisabilityDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface DisabilityDAO {
	List<BaseBean> findDisabilityList(String empNo);

	void insertDisability(BaseBean disabilityBean);

	void updateDisability(BaseBean disabilityBean);

	void deleteDisability(BaseBean disabilityBean);

	void destroyDisability(String empNo);

}
