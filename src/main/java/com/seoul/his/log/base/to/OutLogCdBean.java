package com.seoul.his.log.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.log.base.to
 * @Class    OutLogCdBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 바인드된 코드 출력용
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsOutLogCd")
public class OutLogCdBean extends BaseBean {

    private String code,    // 코드 
                   value;   // 코드명

}