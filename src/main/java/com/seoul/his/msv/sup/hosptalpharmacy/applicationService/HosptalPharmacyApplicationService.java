package com.seoul.his.msv.sup.hosptalpharmacy.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptalpharmacy.exception.HosptalPharmacyException;
import com.seoul.his.msv.sup.hosptalpharmacy.to.HosptalPharmacyBean;


public interface HosptalPharmacyApplicationService {

	List<HosptalPharmacyBean> findHosptalPharmacyList(Map<String, String> argsMap);


}
