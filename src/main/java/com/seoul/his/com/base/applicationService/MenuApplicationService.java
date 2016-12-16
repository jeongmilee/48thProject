package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.exception.AuthMenuNotFoundException;
import com.seoul.his.com.base.to.MenuBean;

public interface MenuApplicationService {

    public void findMenu(Map<String, String> argsMap) throws AuthMenuNotFoundException;

    public List<MenuBean> findAuthMenuList(Map<String, String> argsMap);

    public List<MenuBean> findAllMenu();

    public List<MenuBean> findMenuList();

    public void batchMenuProcess(List<MenuBean> menu);
}
