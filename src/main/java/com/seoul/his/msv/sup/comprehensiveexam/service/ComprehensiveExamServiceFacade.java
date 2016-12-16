package com.seoul.his.msv.sup.comprehensiveexam.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;


public interface ComprehensiveExamServiceFacade {

	List<ComprehensiveExamBean> findComprehensiveExamList(Map<String, String> argsMap);





}
