package com.seoul.his.msv.sup.hosptalpharmacy.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.hosptalpharmacy.to.HosptalPharmacyBean;

public interface HosptalPharmacyDAO {

	List<HosptalPharmacyBean> selectHosptalPharmacyList(Map<String, String> argsMap);


}
