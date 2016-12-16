package com.seoul.his.msv.pre.prescriptionmanagement.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;


public interface PrescriptionManagementServiceFacade {

	List<PrescriptionManagementBean> findPrescriptionManagementList(Map<String, String> argsMap);





}
