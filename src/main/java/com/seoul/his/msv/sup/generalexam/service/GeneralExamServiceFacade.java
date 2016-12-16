package com.seoul.his.msv.sup.generalexam.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.generalexam.to.GeneralExamBean;


public interface GeneralExamServiceFacade {

	List<GeneralExamBean> findGeneralExamList(Map<String, String> argsMap);





}
