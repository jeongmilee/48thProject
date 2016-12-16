package com.seoul.his.com.util.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsOutCode")
public class OutCodeBean extends BaseBean {

    private String code,            // 코드그룹코드
                   value,           // 코드명
                   bigValue;        // 상세코드명

}