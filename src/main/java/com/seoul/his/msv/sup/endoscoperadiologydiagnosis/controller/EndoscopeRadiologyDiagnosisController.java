package com.seoul.his.msv.sup.endoscoperadiologydiagnosis.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.service.EndoscopeRadiologyDiagnosisServiceFacade;
import com.seoul.his.msv.sup.endoscoperadiologydiagnosis.to.EndoscopeRadiologyDiagnosisBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 6. 10.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class EndoscopeRadiologyDiagnosisController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	EndoscopeRadiologyDiagnosisServiceFacade endoscoperadiologydiagnosisServiceFacade;
	
	@RequestMapping("msv/sup/endoscoperadiologydiagnosis/findEndoscopeRadiologyDiagnosisList.do")
	public void findEndoscopeRadiologyDiagnosisList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<EndoscopeRadiologyDiagnosisBean> endoscoperadiologydiagnosisList = endoscoperadiologydiagnosisServiceFacade.findEndoscopeRadiologyDiagnosisList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, endoscoperadiologydiagnosisList, EndoscopeRadiologyDiagnosisBean.class);
	}
}
