package com.seoul.his.com.util.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.seoul.his.com.util.applicationService.UtilApplicationService;
import com.seoul.his.com.util.to.BindCodeBean;
import com.seoul.his.com.util.to.OutCodeBean;

@Service
public class UtilServiceFacadeImpl implements UtilServiceFacade {

    @Autowired
    private UtilApplicationService commUtilAS;

    @Override
    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList)
            throws DataAccessException {

        return commUtilAS.bindCode(bindCodeList);
    }

    @Override
    public String findDate(Map<String, String> argsMap) {
        return commUtilAS.findDate(argsMap);
    }

    @Override
    public String findCodeName(Map<String, String> argsMap) {
        return commUtilAS.findCodeName(argsMap);
    }

}
