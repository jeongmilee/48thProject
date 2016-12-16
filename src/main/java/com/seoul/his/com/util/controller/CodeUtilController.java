package com.seoul.his.com.util.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.com.util.service.UtilServiceFacade;
import com.seoul.his.com.util.to.BindCodeBean;
import com.seoul.his.com.util.to.OutCodeBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.com.util.controller
 * @Class    CodeUtilController.java
 * @Create   2016. 5. 31.
 * @Author   berics
 * @Description 코드관련 유틸리티 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class CodeUtilController {

    @Autowired
    private UtilServiceFacade utilServiceFacade;
    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("com/bindCode.do")
    public void bindCode(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<BindCodeBean> bindCodeList = dataSetBeanMapper.datasetToBeans(inData,
                BindCodeBean.class);
        Map<String, List<OutCodeBean>> bindCodeMap = utilServiceFacade.bindCode(bindCodeList);
        dataSetBeanMapper.bindCode(outData, bindCodeMap, bindCodeList, OutCodeBean.class);
    }

    @RequestMapping("com/findCodeName.do")
    public void findCodeName(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        String codeName = utilServiceFacade.findCodeName(argsMap);
        dataSetBeanMapper.addVariable(outData, "codeName", codeName);
    }
}