package com.seoul.his.log.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoul.his.log.base.to
 * @Class WhBean.java
 * @Create 2016. 11. 27.
 * @Author berics
 * @Description 창고
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsWh")
public class WhBean extends BaseBean {
    private String whCd,            // 창고코드
                   whNm,            // 창고명
                   ioCfmtCd,        // 입출형태코드
                   ioCfmt,          // 입출형태(입고, 출고)
                   ioTypeCd,        // 입출유형코드
                   ioType,          // 입출유형 : 입,출고에 대한 상세(ex 청고출고)
                   useYb,           // 사용여부
                   applyStartDate,  // 적용시작일자
                   applyEndDate,    // 적용종료일자
                   note;            // 비고

}
