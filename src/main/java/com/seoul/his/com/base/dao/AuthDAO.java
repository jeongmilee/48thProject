package com.seoul.his.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.AuthBean;

/**
 * @Package  com.seoul.his.com.base.dao
 * @Class    AuthDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 시스템공통 권한 Data Access Object Interface
 *
 * @LastUpdated 
 */
public interface AuthDAO {

    public List<AuthBean> selectAuthList(Map<String, String> argsMap);

    public void insertAuth(AuthBean authBean);

    public void updateAuth(AuthBean authBean);

    public void deleteAuth(AuthBean authBean);

}
