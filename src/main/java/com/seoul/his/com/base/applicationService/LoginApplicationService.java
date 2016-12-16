package com.seoul.his.com.base.applicationService;

import java.util.Map;

import com.seoul.his.com.base.exception.IdNotFoundException;
import com.seoul.his.com.base.exception.PwMissMatchException;

public interface LoginApplicationService {
    public Map<String, Object> login(Map<String, String> argsMap)
            throws IdNotFoundException, PwMissMatchException;
}
