package com.seoul.his.msv.sup.hosptaldiet.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.his.msv.sup.hosptaldiet.service.HosptalDietServiceFacade;
import com.seoul.his.msv.sup.hosptaldiet.to.HosptalDietCodeBean;

/**
 * <pre>
 * com.seoul.his.msv.sup.hosptaldiet.controller
 *    |_ FoodController.java
 *
 * </pre>
 * @date : 2016. 12. 6. 오후 2:20:52
 * @version :
 * @author : 응디꿍디
 */
@Controller
public class FoodController {
	@Autowired
	DataSetBeanMapper dataSetBeanMapper;
	@Autowired
	HosptalDietServiceFacade hosptaldietServiceFacade;

	@RequestMapping("msv/sup/hosptaldiet/findFoodCodeList.do")
	public void findFoodCodeList(HttpServletRequest request, HttpServletResponse response) throws Exception{
	    System.out.println("날아랏!정마얌");
		PlatformData inData = (PlatformData) request.getAttribute("inData");
		PlatformData outData = (PlatformData) request.getAttribute("outData");
		Map<String, String> argsMap = dataSetBeanMapper.variablesToMap(inData);
		List<HosptalDietCodeBean> foodCodeList = hosptaldietServiceFacade.findFoodCodeList(argsMap);
		dataSetBeanMapper.beansToDataset(outData, foodCodeList, HosptalDietCodeBean.class);
	}

}





