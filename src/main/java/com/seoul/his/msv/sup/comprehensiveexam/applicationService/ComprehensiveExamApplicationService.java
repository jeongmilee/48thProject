package com.seoul.his.msv.sup.comprehensiveexam.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.comprehensiveexam.exception.ComprehensiveExamException;
import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;


public interface ComprehensiveExamApplicationService {

	List<ComprehensiveExamBean> findComprehensiveExamList(Map<String, String> argsMap);


}
