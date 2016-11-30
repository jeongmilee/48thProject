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
import com.seoul.his.msv.mcm.patientservice.to.AttentionalCodeBean;
import com.seoul.his.msv.mcm.patientservice.to.AttentionalPatientBean;

/**
 * @author : Minhyeog
 * @date : 2016. 11. 30.
 */

@Controller
public class AttentionalPatientController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	@RequestMapping("msv/mcm/patientservice/findAttentionalPatientList.do")
	public void findAttentionalPatientList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<AttentionalPatientBean> attentionalPatientList = patientserviceServiceFacade
				.findAttentionalPatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, attentionalPatientList, AttentionalPatientBean.class);
	}

	@RequestMapping("msv/mcm/patientservice/findAttentionalCodeList.do")
	public void findAttentionalCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<AttentionalCodeBean> attentionalCodeList = patientserviceServiceFacade.findAttentionalCodeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, attentionalCodeList, AttentionalCodeBean.class);
	}
}