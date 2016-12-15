package com.seoul.his.msv.mcm.patientservice.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsMedicalConsultationRequest")
public class MedicalConsultationRequestBean extends BaseBean {

	private String patNo, patDiv, patNm, cfrnTrmtNo, trmtDeptNm, trmtDate, trmtTime, trmtDept, hroom, mtDoct,
			hopeDoctNm, hopeDate, hopeDoct, callYN, adrYN, emeYN, ward, respDoctNm, RespDoct, respDate, respCon,
			respType, askingDoct, askingDept, askingDeptNm, askingDate, askingDiv, askingCon, askingCau, askingDoctNm,
			respDept, respDeptNm;

}
