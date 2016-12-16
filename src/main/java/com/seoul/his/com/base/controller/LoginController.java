package com.seoul.his.com.base.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.base.exception.IdNotFoundException;
import com.seoul.his.com.base.exception.PwMissMatchException;
import com.seoul.his.com.base.service.ComBaseServiceFacade;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * @Package  com.seoul.his.com.base.controller
 * @Class    LoginController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 로그인 컨트롤러
 *      TODO : login 메서드 강제형변환 코드 수정할것
 * @LastUpdated 
 */
@Controller
public class LoginController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;

    @Autowired
    private DataSetBeanMapper datasetBeanMapper;

    @RequestMapping("com/loginCheck.do")
    public void loginCheck(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        Map<String, String> argsMap  = datasetBeanMapper.variablesToMap(inData);

        // empInfo, authMenuList 리턴됨.
        Map<String, Object> login = null;
        EmpBean empBean = null;
        try {
            login = comBaseServiceFacade.login(argsMap);
            empBean = (EmpBean) login.get("empInfo");
        } catch (IdNotFoundException | PwMissMatchException e) {
            outData.getVariableList().add("ExceptionMsg", e.getMessage());
        }

        datasetBeanMapper.beanToDataset(outData, empBean, EmpBean.class);

    }
}
