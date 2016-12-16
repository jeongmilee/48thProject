package com.seoul.his.com.base.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.exception.AuthMenuNotFoundException;
import com.seoul.his.com.base.exception.IdNotFoundException;
import com.seoul.his.com.base.exception.PwMissMatchException;
import com.seoul.his.com.base.to.AuthBean;
import com.seoul.his.com.base.to.CodeBean;
import com.seoul.his.com.base.to.CodeNmBean;
import com.seoul.his.com.base.to.MenuBean;
import com.seoul.his.com.base.to.ServiceBean;

public interface ComBaseServiceFacade {
    // 로그인
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException;

    // 코드
    public List<CodeBean> findCodeList(Map<String, String> argsMap);

    public void batchCodeProcess(List<CodeBean> codeList);
    
    public List<CodeNmBean> findCodePopupList(Map<String, String> argsMap);
    
    public List<CodeNmBean> findCode(Map<String, String> argsMap);

    // 권한
    public List<AuthBean> findAuthList(Map<String, String> argsMap);
    
    public void batchAuthProcess(List<AuthBean> auth);
    
    // 메뉴
    public void findMenu(Map<String, String> argsMap) throws AuthMenuNotFoundException;
    
    public List<MenuBean> findAuthMenuList(Map<String, String> argsMap);

    public List<MenuBean> findAllMenu();

    public List<MenuBean> findMenuList();

    public void batchMenuProcess(List<MenuBean> menu);

    // 전산서비스접수
    public List<ServiceBean> findService(Map<String, String> argsMap);

    public void batchErrorProcess(List<ServiceBean> service);
}
