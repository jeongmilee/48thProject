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
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.MedicalConsultationRequestBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;






/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.controller
 *    |_ MedicalConsultationRequestController.java
 * </pre>
 *
 * @date : 2016. 12. 5. 오후 8:12:39
 * @version :
 * @author : 이정미
 */




@Controller
public class MedicalConsultationRequestController {

	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	PatientServiceServiceFacade patientserviceServiceFacade;

	@RequestMapping("msv/mcm/patientservice/findMedicalConsultationRequestList.do")
	public void findMedicalConsultationRequestList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<MedicalConsultationRequestBean> medicalConsultationRequestList = patientserviceServiceFacade
				.findMedicalConsultationRequestList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, medicalConsultationRequestList, MedicalConsultationRequestBean.class);
	}
	@RequestMapping("msv/mcm/patientservice/batchMedicalConsultationRequestProcess.do")
	public void batchMedicalConsultationRequestProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		List<MedicalConsultationRequestBean> medicalConsultationRequestList = dataSetBeanMapper.datasetToBeans(inData, MedicalConsultationRequestBean.class);
		patientserviceServiceFacade.batchMedicalConsultationRequestProcess(medicalConsultationRequestList);
	}

}