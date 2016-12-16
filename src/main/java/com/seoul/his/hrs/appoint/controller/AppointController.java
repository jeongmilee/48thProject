package com.seoul.his.hrs.appoint.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hrs.appoint.service.AppointServiceFacade;
import com.seoul.his.hrs.appoint.to.AppointBean;
import com.seoul.his.hrs.appoint.to.AppointCheckBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.appoint.to.AppointInfoBean;
import com.seoul.his.hrs.emp.to.DeptBean;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.controller
 * @Class    AppointController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 Controller
 * @LastUpdated
 */

@Controller
public class AppointController {

	@Autowired
	private AppointServiceFacade appointServiceFacade;
	@Autowired
	private DataSetBeanMapper datasetBeanMapper;

	@RequestMapping("hrs/appoint/findSerchList.do")
	public void findSerchList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		
		Map<String,String> argsMap=datasetBeanMapper.variablesToMap(inData);

		List<DeptBean> deptList = appointServiceFacade.findDeptList(argsMap);

		datasetBeanMapper.beansToDataset(outData, deptList, DeptBean.class);
	}

	@RequestMapping("hrs/appoint/findEmpList.do")
	public void findEmpList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap=datasetBeanMapper.variablesToMap(inData);

		 List<EmpBean> empList = appointServiceFacade.findEmpList(argsMap);

		datasetBeanMapper.beansToDataset(outData, empList, EmpBean.class);

	}

	//발령등록
	@RequestMapping("hrs/appoint/batchAppoint.do")
	public void batchAppoint(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("출력0");
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<AppointBean> appointInfoList;

		appointInfoList=datasetBeanMapper.datasetToBeans(inData, AppointBean.class);
		for(AppointBean appointBean : appointInfoList){
			System.out.println(appointBean.getEmpNm());
		}
		appointServiceFacade.batchAppoint(appointInfoList);
	}

	@RequestMapping("hrs/appoint/findAppmtList.do")
	public void findAppmtList(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap = datasetBeanMapper.variablesToMap(inData);
		List<AppointBean> appmtList = appointServiceFacade.findAppmtList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, appmtList, AppointBean.class);


	}
	
	@RequestMapping("hrs/appoint/findAppmtDetailList.do")
	public void findAppmtDetailList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap = datasetBeanMapper.variablesToMap(inData);
		List<AppointDetailBean> appmtDetailList = appointServiceFacade.findAppmtDetailList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, appmtDetailList, AppointDetailBean.class);
		

	}
	
	//발령상세등록
	@RequestMapping("hrs/appoint/batchAppointDetail.do")
	public void batchAppointDetail(HttpServletRequest request, HttpServletResponse response) throws Exception {

		System.out.println("출력1");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		
		List<AppointDetailBean> appointDetailInfoList;
		
		appointDetailInfoList=datasetBeanMapper.datasetToBeans(inData, AppointDetailBean.class);
		appointServiceFacade.batchAppointDetail(appointDetailInfoList);
	}

	@RequestMapping("hrs/appoint/modifyAppointDetail.do")
	public void modifyAppoint(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<AppointDetailBean> appointInfoList;

		appointInfoList=datasetBeanMapper.datasetToBeans(inData, AppointDetailBean.class);

		appointServiceFacade.modifyAppointDetail(appointInfoList);
	}

	@RequestMapping("hrs/appoint/findAppointInfo.do")
		public void findAppointInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {

			PlatformData outData = (PlatformData) request.getAttribute("outData");
			PlatformData inData = (PlatformData) request.getAttribute("inData");
			Map<String,String> argsMap=datasetBeanMapper.variablesToMap(inData);

			List<AppointInfoBean> appointList;

			appointList = appointServiceFacade.findAppointInfoList(argsMap);

			datasetBeanMapper.beansToDataset(outData, appointList, AppointInfoBean.class);
		}
	
	//수정
	@RequestMapping("hrs/appoint/modifyAppointEmp.do")
	public void modifyAppointEmp(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("출력");
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		List<AppointDetailBean> appointInfoList;
		Map<String,String> argsMap = datasetBeanMapper.variablesToMap(inData);
		appointInfoList=datasetBeanMapper.datasetToBeans(inData, AppointDetailBean.class);

		appointServiceFacade.modifyAppointEmp(appointInfoList,argsMap);
	}
	
	@RequestMapping("hrs/appoint/findcheckAppList.do")
	public void checkAppoint(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		
		List<AppointCheckBean> checkAppointList;
		
		checkAppointList = appointServiceFacade.findCheckAppointList(argsMap);
		
		datasetBeanMapper.beansToDataset(outData, checkAppointList, AppointCheckBean.class);
		
		
	}
	
	@RequestMapping("hrs/appoint/retEmp.do")
	public void retEmp(HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String, String> argsMap = datasetBeanMapper.variablesToMap(inData);
		
		appointServiceFacade.retEmp(argsMap);
	}
	
}
