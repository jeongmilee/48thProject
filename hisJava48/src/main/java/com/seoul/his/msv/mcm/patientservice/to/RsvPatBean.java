package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsRsvPat")
public class RsvPatBean extends BaseBean {

	private String medDr, medDate, examTm, patNo, patNm, gender, age, tel, note, patType, trmtCostCalcuYb, ntTtYb,
			nwDiv, outpaReceiptNo,trmtYb;

}
