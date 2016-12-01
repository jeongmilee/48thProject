package com.seoul.his.com.util.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.seoul.his.com.util.applicationService.UtilApplicationService;
import com.seoul.his.com.util.to.OutCodeBean;
import com.seoul.his.common.util.BindCodeBean;

@Service
public class UtilServiceFacadeImpl implements UtilServiceFacade {

    @Autowired
    private UtilApplicationService commUtilAS;

    @Override
    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList)
            throws DataAccessException {

        return commUtilAS.bindCode(bindCodeList);
    }

}
