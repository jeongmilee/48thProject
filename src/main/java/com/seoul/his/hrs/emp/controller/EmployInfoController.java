package com.seoul.his.hrs.emp.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hrs.emp.service.EmpServiceFacade;
import com.seoul.his.hrs.emp.to.EmployInfoBean;
import com.seoul.his.hrs.emp.to.FinSufcandiBean;
import com.seoul.his.hrs.emp.to.ItverBean;
import com.seoul.his.hrs.emp.to.JoinCandiBean;
import com.seoul.his.hrs.emp.to.JoinCandiScoreBean;
import com.seoul.his.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.controller
 * @Class    EmployInfoController.java
 * @Create   2016. 11.27
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Controller
public class EmployInfoController {

	@Autowired
	EmpServiceFacade empServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;


	@RequestMapping("hrs/emp/findEmployInfoList.do")
	public void findEmployInfoList (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);


		List<EmployInfoBean> list = empServiceFacade.findEmployInfoList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, EmployInfoBean.class);
	}


	@RequestMapping("hrs/emp/findTestSubject.do")
	public void findTestSubject (HttpServletRequest request,
			HttpServletResponse response) throws Exception{
			PlatformData inData = (PlatformData) request.getAttribute("inData");
			PlatformData outData = (PlatformData)request.getAttribute("outData");
			Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		
			List<TestSubjectBean> list = empServiceFacade.findTestSubject(argsMap);

			dataSetBeanMapper.beansToDataset(outData, list, TestSubjectBean.class);

	}


	@RequestMapping("hrs/emp/findItverList.do")
	public void findItverList (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<ItverBean> list = empServiceFacade.findItverList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, ItverBean.class);
	}


	@RequestMapping("hrs/emp/batchEmployProcess.do")
	public void batchEmployProcess (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");

		Map<String, Object> map = new HashMap<String, Object>();

		List<EmployInfoBean> employInfoList = dataSetBeanMapper.datasetToBeans(inData, EmployInfoBean.class);
		List<ItverBean> itverList = dataSetBeanMapper.datasetToBeans(inData, ItverBean.class);
		List<TestSubjectBean> testSubjectList = dataSetBeanMapper.datasetToBeans(inData, TestSubjectBean.class);


	      map.put("employInfoBean", employInfoList);
	      map.put("itverBean", itverList);
	      map.put("testSubjectBean", testSubjectList);

	      empServiceFacade.batchEmployProcess(map);

		}


	@RequestMapping("hrs/emp/findJoinCandiList.do")
	public void findJoinCandiList (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData outData = (PlatformData)request.getAttribute("outData");

		List<JoinCandiBean> list = empServiceFacade.findJoinCandiList();
		dataSetBeanMapper.beansToDataset(outData, list, JoinCandiBean.class);
	}

	@RequestMapping("hrs/emp/findJoinCandiScore.do")
	public void findJoinCandiScore (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);

		List<JoinCandiScoreBean> list = empServiceFacade.findJoinCandiScore(argsMap);

		dataSetBeanMapper.beansToDataset(outData, list, JoinCandiScoreBean.class);

	}


	@RequestMapping("hrs/emp/mngntJoinCandi.do")
	public void batchJoinCandiProcess (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");

		List<JoinCandiBean> JoinCandiList = dataSetBeanMapper.datasetToBeans(inData, JoinCandiBean.class);
		List<JoinCandiScoreBean> JoinCandiScoreList = dataSetBeanMapper.datasetToBeans(inData, JoinCandiScoreBean.class);

		Map<String, Object> map = new HashMap<String, Object>();

	      map.put("JoinCandiBean", JoinCandiList);
	      map.put("JoinCandiScoreBean", JoinCandiScoreList);

	      empServiceFacade.batchJoinCandiProcess(map);

		}


	@RequestMapping("hrs/emp/findFinSufcandiList.do")
	public void findFinSufcandiList (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData outData = (PlatformData)request.getAttribute("outData");
		List<FinSufcandiBean> list = empServiceFacade.findFinSufcandiList();
		dataSetBeanMapper.beansToDataset(outData, list, FinSufcandiBean.class);
	}



	@RequestMapping("hrs/emp/mngntFinSufcandi.do")
	public void batchFinSufcandiProcess (HttpServletRequest request,
		HttpServletResponse response) throws Exception{
		PlatformData inData = (PlatformData)request.getAttribute("inData");

		List<FinSufcandiBean> finSufcandiList;
		finSufcandiList=dataSetBeanMapper.datasetToBeans(inData, FinSufcandiBean.class);

    	empServiceFacade.batchFinSufcandiProcess(finSufcandiList);

    }

}
