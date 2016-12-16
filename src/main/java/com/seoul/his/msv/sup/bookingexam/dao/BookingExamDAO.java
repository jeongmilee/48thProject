package com.seoul.his.msv.sup.bookingexam.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.bookingexam.to.BookingExamBean;

public interface BookingExamDAO {

	List<BookingExamBean> selectBookingExamList(Map<String, String> argsMap);


}
