package com.seoul.his.msv.sup.bookingexam.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.bookingexam.to.BookingExamBean;


public interface BookingExamServiceFacade {

	List<BookingExamBean> findBookingExamList(Map<String, String> argsMap);





}
