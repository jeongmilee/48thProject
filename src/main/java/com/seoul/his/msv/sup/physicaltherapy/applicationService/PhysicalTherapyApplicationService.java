package com.seoul.his.msv.sup.physicaltherapy.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.physicaltherapy.exception.PhysicalTherapyException;
import com.seoul.his.msv.sup.physicaltherapy.to.PhysicalTherapyBean;


public interface PhysicalTherapyApplicationService {

	List<PhysicalTherapyBean> findPhysicalTherapyList(Map<String, String> argsMap);


}
