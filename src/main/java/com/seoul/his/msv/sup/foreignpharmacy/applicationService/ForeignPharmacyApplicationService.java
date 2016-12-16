package com.seoul.his.msv.sup.foreignpharmacy.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.foreignpharmacy.exception.ForeignPharmacyException;
import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;


public interface ForeignPharmacyApplicationService {

	List<ForeignPharmacyBean> findForeignPharmacyList(Map<String, String> argsMap);


}
