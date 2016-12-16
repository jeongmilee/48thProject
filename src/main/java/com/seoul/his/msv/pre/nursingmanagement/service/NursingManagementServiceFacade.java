package com.seoul.his.msv.pre.nursingmanagement.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.nursingmanagement.to.NursingManagementBean;


public interface NursingManagementServiceFacade {

	List<NursingManagementBean> findNursingManagementList(Map<String, String> argsMap);





}
