package com.seoul.his.hdm.patient.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsDust")
public class DustBean extends BaseBean{
	
	private	String	msrdtDe,msrsteNm,no2,o3,co,so2,pm10,pm25;
	
	
	
	
}
