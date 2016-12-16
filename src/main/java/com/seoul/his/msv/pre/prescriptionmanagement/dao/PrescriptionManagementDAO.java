package com.seoul.his.msv.pre.prescriptionmanagement.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;

public interface PrescriptionManagementDAO {

	List<PrescriptionManagementBean> selectPrescriptionManagementList(Map<String, String> argsMap);


}
