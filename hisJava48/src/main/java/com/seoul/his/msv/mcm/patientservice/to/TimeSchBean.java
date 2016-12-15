package com.seoul.his.msv.mcm.patientservice.to;

import java.util.List;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsTimeSchedule")
public class TimeSchBean extends BaseBean{

	private	String  medDr,medDate,examTm,rsvCnt,totCnt,rsvPosYn,amPmFlag;
	private List<RsvPatBean> rsvPatList;

}
