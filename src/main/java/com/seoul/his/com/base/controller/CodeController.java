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
import com.seoul.his.com.base.to.CodeBean;
import com.seoul.his.com.base.to.CodeNmBean;
import com.seoul.his.common.util.DataSetBeanMapper;


/**
 * @Package  com.seoul.his.com.base.controller
 * @Class    CodeController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 시스템공통 코드관리 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class CodeController {

    @Autowired
    private ComBaseServiceFacade comBaseServiceFacade;
    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("com/findCodeList.do")
    public void findCodeList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<CodeBean> codeList = comBaseServiceFacade.findCodeList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, codeList, CodeBean.class);
    }

    @RequestMapping("com/batchCodeProcess.do")
    public void batchCodeProcess(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        List<CodeBean> codeList = dataSetBeanMapper.datasetToBeans(inData, CodeBean.class);
        comBaseServiceFacade.batchCodeProcess(codeList);
    }

    @RequestMapping("com/findCodePopupList.do")
    public void findCodePopupList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<CodeNmBean> codeList = comBaseServiceFacade.findCodePopupList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, codeList, "dsCode", CodeNmBean.class);

    }
   
    @RequestMapping("com/findCode.do")
    public void findCode(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<CodeNmBean> codeList = comBaseServiceFacade.findCode(argsMap);
        dataSetBeanMapper.beansToDataset(outData, codeList, CodeNmBean.class);

    }
}
