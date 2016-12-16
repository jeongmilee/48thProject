package com.seoul.his.com.base.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.base.service.ComBaseServiceFacade;
import com.seoul.his.com.base.to.AuthBean;
import com.seoul.his.com.base.to.MenuBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.com.base.controller
 * @Class    MenuController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 메뉴 컨트롤러
 *      
 * @LastUpdated 
 */
@Controller
public class MenuController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    // 메뉴 조회
    @RequestMapping("com/findMenu.do")
    public void findMenu(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        //PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
        comBaseServiceFacade.findMenu(argsMap);
    }


    // 권한에 따른 메뉴목록 조회
    @RequestMapping("com/findAuthMenuList.do")
    public void findAuthMenuList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
        // 조회조건(argsMap) : authCode
        List<MenuBean> authMenuList = comBaseServiceFacade.findAuthMenuList(argsMap);
        List<MenuBean> allMenu = comBaseServiceFacade.findAllMenu();
        datasetBeanMapper.beansToDataset(outData, authMenuList, MenuBean.class);
        datasetBeanMapper.beansToDataset(outData, allMenu, "dsAllMenu", MenuBean.class);
    }

    // 메뉴 목록 조회
    @RequestMapping("com/findMenuList.do")
    public void findMenuList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        List<MenuBean> menuList = comBaseServiceFacade.findMenuList();
        datasetBeanMapper.beansToDataset(outData, menuList, MenuBean.class);
    }

    // 메뉴&권한 CRUD 일괄처리
    @RequestMapping("com/processAuthMenuBatch.do")
    public void processAuthMenuBatch(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<MenuBean> menu = datasetBeanMapper.datasetToBeans(inData, MenuBean.class);
        List<AuthBean> auth = datasetBeanMapper.datasetToBeans(inData, AuthBean.class);
        Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
        String authCode = argsMap.get("authCode");
        for (int i = 0; i < menu.size(); i++) {
            menu.get(i).setAuthCode(authCode);
        }
        comBaseServiceFacade.batchAuthProcess(auth);
        comBaseServiceFacade.batchMenuProcess(menu);
    }
}
