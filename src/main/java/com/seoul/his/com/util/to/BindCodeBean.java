package com.seoul.his.com.util.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsBindCode")
public class BindCodeBean extends BaseBean {

    private String code,            // 코드그룹코드
                   dsName;          // 데이터셋명

}