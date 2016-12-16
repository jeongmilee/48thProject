package com.seoul.his.com.util.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.com.util.dao.CodeUtilDAO;
import com.seoul.his.com.util.dao.DateUtilDAO;
import com.seoul.his.com.util.to.BindCodeBean;
import com.seoul.his.com.util.to.OutCodeBean;

@Service
public class UtilApplicationServiceImpl implements UtilApplicationService {

    @Autowired
    private CodeUtilDAO codeUtilDAO;
    @Autowired
    private DateUtilDAO dateUtilDAO;

    @Override
    public Map<String, List<OutCodeBean>> bindCode(List<BindCodeBean> bindCodeList) {
        Map<String, List<OutCodeBean>> bindCodeMap = new HashMap<String, List<OutCodeBean>>();
        for (BindCodeBean bcbean : bindCodeList) {
            bindCodeMap.put(bcbean.getDsName(), codeUtilDAO.selectCodeList(bcbean.getCode()));
        }
        return bindCodeMap;
    }

    @Override
    public String findDate(Map<String, String> argsMap) {
        return dateUtilDAO.selectDate(argsMap);
    }

    @Override
    public String findCodeName(Map<String, String> argsMap) {
        return codeUtilDAO.selectCodeName(argsMap);
    }

}