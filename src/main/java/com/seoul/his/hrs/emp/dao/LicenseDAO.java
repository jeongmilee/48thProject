package com.seoul.his.hrs.emp.dao;

import java.util.List;

import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.dao
 * @Class    LicenseDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

public interface LicenseDAO {
	List<BaseBean> findLicenseList(String empNo);

	void insertLicense(BaseBean licenseBean);

	void updateLicense(BaseBean licenseBean);

	void deleteLicense(BaseBean licenseBean);

	void destroyLicense(String empNo);


}
