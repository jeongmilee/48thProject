package com.seoul.his.hrs.emp.controller;

import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.hrs.emp.service.EmpServiceFacade;
import com.seoul.his.hrs.emp.to.CareerBean;
import com.seoul.his.hrs.emp.to.DisabilityBean;
import com.seoul.his.hrs.emp.to.EducaBean;
import com.seoul.his.hrs.emp.to.EmpBean;
import com.seoul.his.hrs.emp.to.FamilyBean;
import com.seoul.his.hrs.emp.to.LicenseBean;
import com.seoul.his.hrs.emp.to.MilitaryBean;
import com.seoul.his.hrs.emp.to.PerconaldateBean;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;



/**
 * 
 * @Package  com.seoul.his.hrs.emp.controller
 * @Class    EmpController.java
 * @Create   2016. 11.27.
 * @Author   berics
 * @Description
 *			사원 Controller
 * @LastUpdated
 */


@Controller
public class EmpController {
	@Autowired
	EmpServiceFacade empServiceFacade;
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;

	@RequestMapping("hrs/emp/findEmpList.do")
	public void findEmpList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		
		List<EmpBean> list = empServiceFacade.findEmpList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, EmpBean.class);
	}


	@RequestMapping("hrs/emp/findRetireeList.do")
	public void findRetireeList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		HashMap<String, String> argsMap;
		argsMap = (HashMap<String, String>) request.getAttribute("argsMap");

		List<EmpBean> list = empServiceFacade.findRetireeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, list, EmpBean.class);
	}



	@RequestMapping("hrs/emp/registerEmpImage.do")
	public void registerEmpImage(HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		PlatformData inData = (PlatformData) request.getAttribute("inData");
		DataSet imgDs = inData.getDataSet("dsImage");
		FileOutputStream out = null;
		String imgName = null;

		int imgDatasetRow = imgDs.getRowCount();
		for (int i = 0; i < imgDatasetRow; i++) {
			imgName = (String) imgDs.getObject(i, "imgNm");

			//byte[] file = (byte[]) imgDs.getObject(i, "imgBinary");
			byte[] file = imgDs.getBlob(i, "imgBinary");

			if (imgName != null) {
				//	out = new FileOutputStream("///106.242.162.222//Apache2.2//htdocs//img//" + imgName);
				out = new FileOutputStream("C:/Dev/Server/apache-httpd-2.2.25/htdocs/his/images/hrsImg/" + imgName);
				out.write(file);
				out.flush();
				System.out.println("이미지 이름 : " + imgName);
				out.close();
				out = null;
			} else {
				System.out.println("이미지가 NULL 입니다.");
			}
		}
	}


	@SuppressWarnings("unchecked")
	@RequestMapping("hrs/emp/selectEmpList.do")
	public void selectEmpList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		Map<String,String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		System.out.println("Check"+argsMap);
		List<EmpBean> list = empServiceFacade.selectEmpList(argsMap);

		List<CareerBean> careerList = new ArrayList<CareerBean>();
		List<DisabilityBean> disabilityList = new ArrayList<DisabilityBean>();
		List<EducaBean> educationList = new ArrayList<EducaBean>();
		List<FamilyBean> familyList = new ArrayList<FamilyBean>();
		List<LicenseBean> licenseList = new ArrayList<LicenseBean>();
		List<MilitaryBean> militaryList = new ArrayList<MilitaryBean>();
		List<PerconaldateBean> perconaldateList = new ArrayList<PerconaldateBean>();


		for (EmpBean empBean : list) {

			List<CareerBean> careerBeanList = empBean.getCareerList();
			if(careerBeanList!=null)
			careerList.addAll(careerBeanList);
			List<DisabilityBean> disabilityBeanList = empBean
					.getDisabilityList();
			if(disabilityBeanList!=null)
			disabilityList.addAll(disabilityBeanList);
			List<EducaBean> educationBeanList = empBean
					.getEducationBeanList();
			if(educationBeanList!=null)
			educationList.addAll(educationBeanList);
			List<FamilyBean> familyBeanList = empBean.getFamilyList();
			if(familyBeanList!=null)
			familyList.addAll(familyBeanList);
			List<LicenseBean> licenseBeanList = empBean.getLicenseList();
			if(licenseBeanList!=null)
			licenseList.addAll(licenseBeanList);
			List<MilitaryBean> militaryBeanList = empBean.getMilitaryList();
			if(militaryBeanList!=null)
			militaryList.addAll(militaryBeanList);
			List<PerconaldateBean> perconaldateBeanList = empBean
					.getPerconaldateList();
			if(perconaldateBeanList!=null)
			perconaldateList.addAll(perconaldateBeanList);
		}



		dataSetBeanMapper.beansToDataset(outData, list, EmpBean.class);

		dataSetBeanMapper.beansToDataset(outData, careerList, CareerBean.class);
		dataSetBeanMapper.beansToDataset(outData, disabilityList, DisabilityBean.class);
		dataSetBeanMapper.beansToDataset(outData, educationList, EducaBean.class);
		dataSetBeanMapper.beansToDataset(outData, familyList, FamilyBean.class);
		dataSetBeanMapper.beansToDataset(outData, licenseList, LicenseBean.class);
		dataSetBeanMapper.beansToDataset(outData, militaryList, MilitaryBean.class);
		dataSetBeanMapper.beansToDataset(outData, perconaldateList, PerconaldateBean.class);

	}






	@RequestMapping("hrs/emp/mngntEmp.do")
	public void batchEmpProcess(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		PlatformData inData = (PlatformData) request.getAttribute("inData");

		Map<String, Object> map = new HashMap<String, Object>();

		List<EmpBean> empList = dataSetBeanMapper.datasetToBeans(inData,
				EmpBean.class);
		map.put("empList", empList);

		List<FamilyBean> familyList = dataSetBeanMapper.datasetToBeans(inData,
				FamilyBean.class);
		map.put("familyList", familyList);

		List<EducaBean> educationList = dataSetBeanMapper.datasetToBeans(inData,
				EducaBean.class);
		map.put("educationList", educationList);

		List<CareerBean> careerList = dataSetBeanMapper.datasetToBeans(inData,
				CareerBean.class);
		map.put("careerList", careerList);

		List<LicenseBean> licenseList = dataSetBeanMapper.datasetToBeans(inData,
				LicenseBean.class);
		map.put("licenseList", licenseList);

		List<PerconaldateBean> perconaldateList = dataSetBeanMapper.datasetToBeans(
				inData, PerconaldateBean.class);
		map.put("perconaldateList", perconaldateList);

		List<MilitaryBean> militaryList = dataSetBeanMapper.datasetToBeans(inData,
				MilitaryBean.class);
		map.put("militaryList", militaryList);

		List<DisabilityBean> disabilityList = dataSetBeanMapper.datasetToBeans(
				inData, DisabilityBean.class);
		map.put("disabilityList", disabilityList);

		empServiceFacade.batchEmpProcess(map);

	}






	@RequestMapping("hrs/emp/findEmpReport.do")
	ModelAndView findEmrReport(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HashMap<String, String> argsMap = new HashMap<String,String>();
		System.out.println("Check"+argsMap);

       String empno = request.getParameter("empCode");
        System.out.println(empno);
		argsMap.put("empNo", empno);

		List<EmpBean> list = empServiceFacade.selectEmpList(argsMap);


		JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(list);

//		// :: jasperReportsMultiFormatView를 활용하는 방법이다.
//		// :: 파라미터의 종류 : csv, pdf , xls , html
		ModelAndView mav = new ModelAndView();
		mav.setViewName("empReport-view");
		// <== 원하는 형식의 파라미터를 받아주고 (참고 : 필자는 pdf를 파라미터로 넣어주었다)
		String format = request.getParameter("format");
		mav.addObject("format", "pdf");
		mav.addObject("source", source);

		return mav;

	}

}


//@RequestMapping("emp/pdfView.do")//����
//public ModelAndView pdfView(HttpServletRequest request, HttpServletResponse response) throws Exception {
//	String empCode = request.getParameter("empCode");
//	List<EmpBean> list = empServiceFacade.EmpList(empCode);
//	System.out.println("---------"+list.get(0).getDeptName());
//
//	JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(list);
//	// :: jasperReportsMultiFormatView�� Ȱ���ϴ� ����̴�.
//	// :: �Ķ������ ���� : csv, pdf , xls , html
//	ModelAndView mav = new ModelAndView();
//	mav.setViewName("multiformat-view");
//	// <== ���ϴ� ������ �Ķ���͸� �޾��ְ� (���� : ���ڴ� pdf�� �Ķ���ͷ� �־��־���)
//	String format = request.getParameter("format");
//	mav.addObject("format", "pdf");// �̷��� ������ �ֱ⸸ �ϸ� �ȴ�.
//	mav.addObject("source", source);
//
//	return mav;
//}

//@RequestMapping("/searchSlipListPDF.do") //�켺
//ModelAndView searchSlipListPDF(HttpServletRequest request,HttpServletResponse response){
//
//	String slipNo = request.getParameter("slipNo");
//	String format = request.getParameter("format");
//
//	ModelAndView mav = new ModelAndView();
//
//	List<SlipPDFBean> slipPDFList = slipServiceFacade.searchSlipListPDF(slipNo);
//
//	JRBeanCollectionDataSource source=new JRBeanCollectionDataSource(slipPDFList,false);
//
//	mav.setViewName("multiformat-view");//  <==  ���ϴ� ������ �Ķ���͸� �޾��ְ�   (���� : ���ڴ� pdf�� �Ķ���ͷ� �־��־���)
//	mav.addObject("format",format );//  �̷��� ������ �ֱ⸸ �ϸ� �ȴ�.
//	mav.addObject("source",source );
//
//	return mav;

//@RequestMapping("hrs/emp/findEmpReport.do") //����
//ModelAndView findEmrReport(HttpServletRequest request, HttpServletResponse response) throws Exception {
//
//	HashMap<String, String> argsMap;
//	argsMap = (HashMap<String, String>) request.getAttribute("argsMap");
//	System.out.println("Check"+argsMap);
//
//
//
//	argsMap.put("empNo", "43001");
//
//	List<EmpBean> list = empServiceFacade.selectEmpList(argsMap);
//
//
//	JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(list);
//
//	// :: jasperReportsMultiFormatView�� Ȱ���ϴ� ����̴�.
//	// :: �Ķ������ ���� : csv, pdf , xls , html
//	ModelAndView mav = new ModelAndView();
//	mav.setViewName("empReport-view");
//	// <== ���ϴ� ������ �Ķ���͸� �޾��ְ� (���� : ���ڴ� pdf�� �Ķ���ͷ� �־��־���)
//	String format = request.getParameter("format");
//	mav.addObject("format", format);// �̷��� ������ �ֱ⸸ �ϸ� �ȴ�.
//	mav.addObject("source", source);
//
//	return mav;