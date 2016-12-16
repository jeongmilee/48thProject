package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.AuthBean;

public interface AuthApplicationService {

    public List<AuthBean> findAuthList(Map<String, String> argsMap);

    public void batchAuthProcess(List<AuthBean> auth);
}
