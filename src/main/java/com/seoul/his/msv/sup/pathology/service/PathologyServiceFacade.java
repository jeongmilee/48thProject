package com.seoul.his.msv.sup.pathology.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.pathology.to.PathologyBean;


public interface PathologyServiceFacade {

	List<PathologyBean> findPathologyList(Map<String, String> argsMap);





}
