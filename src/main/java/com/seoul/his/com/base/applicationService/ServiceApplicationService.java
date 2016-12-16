package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.ServiceBean;

public interface ServiceApplicationService {
    public List<ServiceBean> findService(Map<String, String> argsMap);

    public void batchErrorProcess(List<ServiceBean> service);
}
