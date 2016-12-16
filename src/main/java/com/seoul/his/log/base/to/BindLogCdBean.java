package com.seoul.his.log.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.log.base.to
 * @Class    BindLogCdBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 코드바인드
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsBindLogCd")
public class BindLogCdBean extends BaseBean {

    private String cdDiv,       // 코드구분
                   code,        // 코드
                   secCode,     // 검색조건 코드1
                   thrCode,     // 검색조건 코드2
                   cdNm,        // 코드명
                   dsLogName;   // 데이터셋명
    
}