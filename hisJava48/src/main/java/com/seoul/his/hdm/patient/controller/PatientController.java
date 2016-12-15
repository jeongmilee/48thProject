package com.seoul.his.hdm.patient.controller;

import java.io.InputStreamReader;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.hdm.patient.service.PatientServiceFacade;
import com.seoul.his.hdm.patient.to.DustBean;
import com.seoul.his.hdm.patient.to.PatientBean;
import com.seoul.his.hrs.emp.to.EmpBean;
import com.seoul.his.common.util.DataSetBeanMapper;

/**
 * @Package  com.seoul.his.acc.budget.controller
 * @Class    BudgBimokController.java
 * @Create   2016. 6. 10.
 * @Author   jeong
 * @Description
 *
 * @LastUpdated 
 */

@Controller
public class PatientController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	PatientServiceFacade patientServiceFacade;
	
	@RequestMapping("hdm/patient/findPatientList.do")
	public void findPatientList(HttpServletRequest request,HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<PatientBean> list = patientServiceFacade.findPatientList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, PatientBean.class);
	}
	
	
	
	@RequestMapping("hdm/patient/batchPatientProcess.do") //xxx.do로 넥사크로에서 요청하는 패키지구조와 xxx.do를 기입
	public void batchPatientProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
	PlatformData inData = (PlatformData) request.getAttribute("inData");
	List<PatientBean> PatientBeanList = dataSetBeanMapper.datasetToBeans(inData, PatientBean.class);
	patientServiceFacade.batchPatientProcess(PatientBeanList);
	}

	
	/*
	
	@RequestMapping("hdm/patient/findDustList.do")
	public void findDustList(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		PlatformData outData = (PlatformData) request.getAttribute("outData");		
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	    Calendar c1 = Calendar.getInstance();
		String strToday = sdf.format(c1.getTime());

		URL url = new URL("http://openapi.seoul.go.kr:8088/75446a714b62657238316c5976436f/json/DailyAverageAirQuality/1/1000/"+strToday);
		InputStreamReader isr = new InputStreamReader(url.openConnection().getInputStream(), "UTF-8");
		JSONObject object = (JSONObject)JSONValue.parseWithException(isr);
		JSONObject channel = (JSONObject)(object.get("DailyAverageAirQuality"));
		JSONArray items = (JSONArray)channel.get("row");
		ArrayList<DustBean> dustList=new ArrayList<DustBean>();
		
		for(int i = 0 ; i < items.size(); i++) {
			JSONObject obj1 = (JSONObject)items.get(i);
			DustBean dustBean=new DustBean();
			dustBean.setMsrdtDe(obj1.get("MSRDT_DE").toString());
			dustBean.setMsrsteNm(obj1.get("MSRSTE_NM").toString());
			dustBean.setNo2(obj1.get("NO2").toString());
			dustBean.setO3(obj1.get("O3").toString());
			dustBean.setCo(obj1.get("CO").toString());
			dustBean.setSo2(obj1.get("SO2").toString());
			dustBean.setPm10(obj1.get("PM10").toString());
			dustBean.setPm25(obj1.get("PM25").toString());
			dustList.add(dustBean);
		}
		dataSetBeanMapper.beansToDataset(outData, dustList, DustBean.class);
	}*/
	
}
