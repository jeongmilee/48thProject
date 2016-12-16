package com.seoul.his.msv.sup.bookingexam.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsBookingExam")
public class BookingExamBean extends BaseBean{
	
	private	String	empNo,empNm;
	
	
}
