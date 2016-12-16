package com.seoul.his.com.base.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;

import com.seoul.his.com.base.to.ServiceBean;

/**
 * @Package  com.seoul.his.com.base.dao
 * @Class    ServiceDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 시스템공통 시스템에러 전산요청 Data Access Object Interface
 *
 * @LastUpdated 
 */
public interface ServiceDAO {
    public List<ServiceBean> selectService(Map<String, String> argsMap);

    public void insertError(ServiceBean service) throws DataAccessException;
}
