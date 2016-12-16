package com.seoul.his.msv.pre.nursingmanagement.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.nursingmanagement.exception.NursingManagementException;
import com.seoul.his.msv.pre.nursingmanagement.to.NursingManagementBean;


public interface NursingManagementApplicationService {

	List<NursingManagementBean> findNursingManagementList(Map<String, String> argsMap);


}
