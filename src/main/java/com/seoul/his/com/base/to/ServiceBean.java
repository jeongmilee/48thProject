package com.seoul.his.com.base.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsComService")
public class ServiceBean extends BaseBean {
    private String receiveNo,       // 접수번호
                   empName,         // 사원명
                   empNo,           // 사원번호
                   serviceGubun,    // 서비스종류
                   processyn,       // 처리여부
                   receiveDate,     // 접수일
                   imgfile,         // 첨부파일
                   inData,          // 서비스내용
                   imgData;         // 첨부내용
}
