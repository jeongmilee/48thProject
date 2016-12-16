package com.seoul.his.msv.sup.pathology.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.pathology.to.PathologyBean;

public interface PathologyDAO {

	List<PathologyBean> selectPathologyList(Map<String, String> argsMap);


}
