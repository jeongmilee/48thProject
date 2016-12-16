package com.seoul.his.msv.pre.nursingmanagement.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.nursingmanagement.to.NursingManagementBean;

public interface NursingManagementDAO {

	List<NursingManagementBean> selectNursingManagementList(Map<String, String> argsMap);


}
