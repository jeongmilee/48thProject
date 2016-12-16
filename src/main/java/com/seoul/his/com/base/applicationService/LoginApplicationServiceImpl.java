package com.seoul.his.com.base.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.seoul.his.com.base.dao.MenuDAO;
import com.seoul.his.com.base.exception.IdNotFoundException;
import com.seoul.his.com.base.exception.PwMissMatchException;
import com.seoul.his.hrs.emp.dao.EmpDAO;
import com.seoul.his.hrs.emp.to.EmpBean;

@Component
public class LoginApplicationServiceImpl implements LoginApplicationService {

    @Autowired
    private EmpDAO empDAO;
    @Autowired
    private MenuDAO menuDAO;

    @Autowired
    private ResourceBundleMessageSource messageSource;

    @Override
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException {
        Map<String, Object> login = new HashMap<>();
        List<EmpBean> empList = empDAO.selectEmpList(argsMap);
        if (empList.size() == 0) {
            throw new IdNotFoundException(messageSource.getMessage("idNotFound", null, Locale.KOREAN));
        } else if (empList.get(0).getPassword().equals(argsMap.get("empPw"))) {
            login.put("empInfo", empList.get(0));
        } else {
            throw new PwMissMatchException(messageSource.getMessage("pwMissMatch", null, Locale.KOREAN));
        }
        return login;
    }
}
