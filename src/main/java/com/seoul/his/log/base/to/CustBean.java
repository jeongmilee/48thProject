package com.seoul.his.log.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.log.base.to
 * @Class    CustBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 거래처
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsCust")
public class CustBean extends BaseBean {
    private String custCd,          // 거래처코드
                   custNm,          // 거래처명
                   adptDt,          // 등록일자
                   bussNo,          // 사업자등록번호
                   zipCd,           // 우편번호
                   addr,            // 주소
                   telNo,           // 전화번호
                   faxNo,           // FAX번호
                   bankCd,          // 은행코드
                   accNo,           // 계좌번호
                   busCtgNm,        // 업종명
                   busShpNm,        // 업태명
                   prsdntNm,        // 대표자명
                   resNo,           // 주민등록번호
                   dpstr,           // 예금주
                   useYn,           // 사용여부
                   gpUseYn,         // 인사사용여부
                   gdUseYn,         // 구매사용여부
                   cardYn,          // 카드가맹점여부
                   riUseYn,         // 동위원소거래처여부
                   hospCls;         // 병원구분
}
