package com.seoul.his.com.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsCode")
public class CodeBean extends BaseBean {
    private String code,                // 코드
                   detailCode,          // 상세코드
                   codeName,            // 코드명
                   subCode,             // 서브코드
                   useYn,               // 사용여부
                   editId,              // 수정자ID
                   editIp,              // 수정자IP
                   regId,               // 등록자ID
                   regIp,               // 등록자IP
                   detailCodeName,      // 상세코드명
                   modiyn;              // 수정가능여부

}
