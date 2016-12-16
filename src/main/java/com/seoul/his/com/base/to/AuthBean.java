package com.seoul.his.com.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsAuth")
public class AuthBean extends BaseBean {
    private String authCode,           // 권한코드
                   authName;           // 권한명
}