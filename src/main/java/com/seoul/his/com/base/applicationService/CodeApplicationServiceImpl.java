package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.com.base.dao.CodeDAO;
import com.seoul.his.com.base.to.CodeBean;
import com.seoul.his.com.base.to.CodeNmBean;

@Component
public class CodeApplicationServiceImpl implements CodeApplicationService {
    
    @Autowired
    private CodeDAO codeDAO;

    @Override    
    public List<CodeBean> findCodeList(Map<String, String> argsMap) {
        return codeDAO.selectCodeList(argsMap);
    }

    @Override
    public void batchCodeProcess(List<CodeBean> codeList) {
        for (CodeBean codeBean : codeList) {
            if (codeBean.getStatus().equals("inserted")) {
                codeDAO.insertCode(codeBean);
            } else if (codeBean.getStatus().equals("updated")) {
                codeDAO.updateCode(codeBean);
            } else if (codeBean.getStatus().equals("deleted")) {
                codeDAO.deleteCode(codeBean);
            }
        }
    }
    
    @Override
    public List<CodeNmBean> findCodePopupList(Map<String, String> argsMap) {
        return codeDAO.selectCodePopupList(argsMap);
    }
    
    @Override
    public List<CodeNmBean> findCode(Map<String, String> argsMap) {
        return codeDAO.selectCode(argsMap);
    }
    
}
