package com.seoul.his.log.base.to;

import java.util.List;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.annotation.Remove;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package com.seoul.his.log.base.to
 * @Class MidGrpCdBean.java
 * @Create 2016. 11. 27.
 * @Author berics
 * @Description 물품분류코드-중분류
 *
 * @LastUpdated
 */
@Getter
@Setter
@ToString
@Dataset(name = "dsMidGrpCd")
public class MidGrpCdBean extends BaseBean {
    private String midGrpCd,        // 중분류코드
                   midGrpCdNm,      // 중분류코드명
                   useYb,           // 사용여부
                   userRegPossYb,   // 사용자등록가능여부
                   regWorkerId,     // 등록자ID
                   regWorkerIp,     // 등록자IP
                   regDate,         // 등록일시
                   modWorkerId,     // 수정자ID
                   modWorkerIp,     // 수정자IP
                   modDate,         // 수정일시
                   bigGrpCd;        // 대분류코드

    public List<SmGrpCdBean> smGrpCdList; // 소분류코드 목록

    @Remove
    public List<SmGrpCdBean> getSmGrpCdList() {
        return smGrpCdList;
    }

    @Remove
    public void setSmGrpCdList(List<SmGrpCdBean> smGrpCdList) {
        this.smGrpCdList = smGrpCdList;
    }
}
