package com.seoul.his.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.MenuBean;

/**
 * @Package com.seoul.his.com.base.dao
 * @Class MenuDAO.java
 * @Create 2016. 11. 27.
 * @Author berics
 * @Description 시스템공통 메뉴 Data Access Object Interface
 *
 * @LastUpdated
 */
public interface MenuDAO {

    public MenuBean selectMenu(Map<String, String> argsMap);

    public List<MenuBean> selectAuthMenuList(Map<String, String> argsMap);

    public List<MenuBean> selectAllMenu();

    public List<MenuBean> selectMenuList();

    public void insertMenu(MenuBean menuBean);

    public void deleteMenu(MenuBean menuBean);

}
