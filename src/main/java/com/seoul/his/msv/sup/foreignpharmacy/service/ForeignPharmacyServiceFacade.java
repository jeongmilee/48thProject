package com.seoul.his.msv.sup.foreignpharmacy.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;


public interface ForeignPharmacyServiceFacade {

	List<ForeignPharmacyBean> findForeignPharmacyList(Map<String, String> argsMap);





}
