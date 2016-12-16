package com.seoul.his.log.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoul.his.log.base.to
 * @Class    GdsBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 물품
 *
 * @LastUpdated 
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsGds")
public class GdsBean extends BaseBean {
    private String gdsCd,           // 물품코드
                   gdsNm,           // 물품명
                   ediCd,           // EDI코드
                   vmiYb,           // VMI여부
                   useDept,         // 사용부서
                   stand,           // 규격
                   ordUnit,         // 발주단위
                   subulUnit,       // 수불단위
                   cngQnt,          // 환산수량
                   cust,            // 거래처코드
                   ctrtPrice,       // 계약단가
                   ctrtStartDate,   // 계약시작일
                   ctrtEndDate,     // 계약종료일
                   spliesDiv,       // 저장품구분
                   wh,              // 창고코드
                   rackNo,          // 진열번호
                   insurDiv,        // 보험구분
                   disuseDate,      // 불용일자
                   disuseDiv,       // 불용구분
                   picLoc,          // 그림파일경로
                   note,            // 비고
                   regWorkerId,     // 등록자ID
                   regWorkerIp,     // 등록자IP
                   regDate,         // 등록일시
                   modWorkerId,     // 수정자ID
                   modWorkerIp,     // 수정자IP
                   modDate,         // 수정일시
                   midGrpCd,        // 중분류코드
                   smGrpCd,         // 소분류코드
                   bigGrpCd;        // 대분류코드
}
