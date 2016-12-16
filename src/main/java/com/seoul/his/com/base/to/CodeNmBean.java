package com.seoul.his.com.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsCodeNm")
public class CodeNmBean extends BaseBean {
    private String code,                // 코드
                   codeName;            // 코드명
}
