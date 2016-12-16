package com.seoul.his.msv.sup.generalexam.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.generalexam.exception.GeneralExamException;
import com.seoul.his.msv.sup.generalexam.to.GeneralExamBean;


public interface GeneralExamApplicationService {

	List<GeneralExamBean> findGeneralExamList(Map<String, String> argsMap);


}
