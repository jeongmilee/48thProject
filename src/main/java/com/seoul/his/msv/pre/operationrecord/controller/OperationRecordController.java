package com.seoul.his.msv.pre.operationrecord.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.pre.operationrecord.service.OperationRecordServiceFacade;
import com.seoul.his.msv.pre.operationrecord.to.OperationRecordBean;
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
public class OperationRecordController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	OperationRecordServiceFacade operationrecordServiceFacade;
	
	@RequestMapping("msv/pre/operationrecord/findOperationRecordList.do")
	public void findOperationRecordList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<OperationRecordBean> operationrecordList = operationrecordServiceFacade.findOperationRecordList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, operationrecordList, OperationRecordBean.class);
	}
}
