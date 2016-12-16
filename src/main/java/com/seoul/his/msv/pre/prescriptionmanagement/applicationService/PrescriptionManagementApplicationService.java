package com.seoul.his.msv.pre.prescriptionmanagement.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.pre.prescriptionmanagement.exception.PrescriptionManagementException;
import com.seoul.his.msv.pre.prescriptionmanagement.to.PrescriptionManagementBean;


public interface PrescriptionManagementApplicationService {

	List<PrescriptionManagementBean> findPrescriptionManagementList(Map<String, String> argsMap);


}
