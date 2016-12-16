package com.seoul.his.msv.sup.physicaltherapy.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.physicaltherapy.to.PhysicalTherapyBean;

public interface PhysicalTherapyDAO {

	List<PhysicalTherapyBean> selectPhysicalTherapyList(Map<String, String> argsMap);


}
