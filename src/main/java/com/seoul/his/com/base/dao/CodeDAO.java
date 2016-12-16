package com.seoul.his.com.base.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.com.base.to.CodeBean;
import com.seoul.his.com.base.to.CodeNmBean;


/**
 * @Package  com.seoul.his.com.base.dao
 * @Class    CodeDAO.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 시스템공통 코드 Data Access Object Interface
 *
 * @LastUpdated 
 */
public interface CodeDAO {
    public List<CodeBean> selectCodeList(Map<String, String> argsMap);

    public void insertCode(CodeBean codeBean);

    public void updateCode(CodeBean codeBean);
    
    public void deleteCode(CodeBean codeBean);
    
    public List<CodeNmBean> selectCodePopupList(Map<String, String> argsMap);

    public List<CodeNmBean> selectCode(Map<String, String> argsMap);

}
