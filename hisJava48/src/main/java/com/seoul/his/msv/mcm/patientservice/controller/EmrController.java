package com.seoul.his.msv.mcm.patientservice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.msv.mcm.patientservice.service.PatientServiceServiceFacade;
import com.seoul.his.msv.mcm.patientservice.to.EmrBean;

 /**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ EmrController.java
 * </pre>
 *
 * @date : 2016. 12. 7. 오후 9:15:51
 * @version :
 * @author : Minhyeog
 */

@Controller
public class EmrController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

    // Emr 조회
    @RequestMapping("msv/mcm/patientservice/findEmrList.do")
    public void findEmrList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");
        Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
        List<EmrBean> emrList = patientserviceServiceFacade.findEmrList(argsMap);
        dataSetBeanMapper.beansToDataset(outData, emrList, EmrBean.class);
    }
}
