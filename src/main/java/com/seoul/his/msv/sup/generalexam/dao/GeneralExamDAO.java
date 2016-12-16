package com.seoul.his.msv.sup.generalexam.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.generalexam.to.GeneralExamBean;

public interface GeneralExamDAO {

	List<GeneralExamBean> selectGeneralExamList(Map<String, String> argsMap);


}
