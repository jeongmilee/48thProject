package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.CodeBean;
import com.seoul.his.com.base.to.CodeNmBean;

public interface CodeApplicationService {
    public List<CodeBean> findCodeList(Map<String, String> argsMap);

    public void batchCodeProcess(List<CodeBean> codeList);

    public List<CodeNmBean> findCode(Map<String, String> argsMap);
    
    public List<CodeNmBean> findCodePopupList(Map<String, String> argsMap);
}
