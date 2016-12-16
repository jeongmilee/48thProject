package com.seoul.his.msv.sup.foreignpharmacy.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.foreignpharmacy.to.ForeignPharmacyBean;

public interface ForeignPharmacyDAO {

	List<ForeignPharmacyBean> selectForeignPharmacyList(Map<String, String> argsMap);


}
