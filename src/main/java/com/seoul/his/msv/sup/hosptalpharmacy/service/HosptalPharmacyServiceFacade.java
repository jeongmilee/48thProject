package com.seoul.his.msv.sup.hosptalpharmacy.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptalpharmacy.to.HosptalPharmacyBean;


public interface HosptalPharmacyServiceFacade {

	List<HosptalPharmacyBean> findHosptalPharmacyList(Map<String, String> argsMap);





}
