package com.seoul.his.msv.sup.foreignpharmacy.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.msv.sup.foreignpharmacy.service.ForeignPharmacyServiceFacade;
import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;
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
public class ForeignPharmacyController {
	
	@Autowired
	DataSetBeanMapper dataSetBeanMapper; 
	@Autowired
	ForeignPharmacyServiceFacade foreignpharmacyServiceFacade;
	
	@RequestMapping("msv/sup/foreignpharmacy/findForeignPharmacyList.do")
	public void findForeignPharmacyList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData); 
		List<ForeignPharmacyBean> foreignpharmacyList = foreignpharmacyServiceFacade.findForeignPharmacyList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, foreignpharmacyList, ForeignPharmacyBean.class);
	}
}
