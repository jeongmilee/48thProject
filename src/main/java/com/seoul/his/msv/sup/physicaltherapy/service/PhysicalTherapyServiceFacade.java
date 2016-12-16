package com.seoul.his.msv.sup.physicaltherapy.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.physicaltherapy.to.PhysicalTherapyBean;


public interface PhysicalTherapyServiceFacade {

	List<PhysicalTherapyBean> findPhysicalTherapyList(Map<String, String> argsMap);





}
