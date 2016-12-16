package com.seoul.his.msv.sup.pathology.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.pathology.exception.PathologyException;
import com.seoul.his.msv.sup.pathology.to.PathologyBean;


public interface PathologyApplicationService {

	List<PathologyBean> findPathologyList(Map<String, String> argsMap);


}
