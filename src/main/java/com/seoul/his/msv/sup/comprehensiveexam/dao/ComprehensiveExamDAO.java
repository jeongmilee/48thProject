package com.seoul.his.msv.sup.comprehensiveexam.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.comprehensiveexam.to.ComprehensiveExamBean;

public interface ComprehensiveExamDAO {

	List<ComprehensiveExamBean> selectComprehensiveExamList(Map<String, String> argsMap);


}
