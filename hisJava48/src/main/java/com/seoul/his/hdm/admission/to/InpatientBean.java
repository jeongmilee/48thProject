package com.seoul.his.hdm.admission.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsInpatient")
public class InpatientBean extends BaseBean{

	private String  outpaReceiptNo,			 //접수버호
				    trmtDate,                //진료일
				    trmtDept,                //진료과코드
				    trmtDeptNm,				 //진료과명
				    trmtDoct,                //진료의코드
				    trmtDoctNm,				 //진료의명
				    hosptlzYb,               //입원여부
				    hosptlzRsvtYb,           //입원예약여부
				    patType,                 //환자유형
				    trmtCostCalcuYb,         //진찰료계산여부
				    trmtYb,                  //진료여부
				    prescYb,                 //처방여부
				    regDept,                 //등록부서
				    cngDept,                 //변경부서
				    receiptDate,             //접수일
				    dgnsNm,                  //진단명
				    ntTtYb,                  //초/재진여부
				    nwDiv,                   //내원구분
				    patNo,                   //환자등록번호
				    expCd,                   //감면코드
				    expNm,                   //감면명
				    patNm;                   //환자이름
}
