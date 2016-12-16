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
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.com.base.controller
 * @Class    AuthController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 권한관리 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class AuthController {
    
    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("com/findAuthList.do")
    public void findAuthList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
        List<AuthBean> authList = comBaseServiceFacade.findAuthList(argsMap);
        datasetBeanMapper.beansToDataset(outData, authList, AuthBean.class);
    }
}
