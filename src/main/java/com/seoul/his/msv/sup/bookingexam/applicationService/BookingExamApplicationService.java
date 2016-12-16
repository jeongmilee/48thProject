package com.seoul.his.msv.sup.bookingexam.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.sup.bookingexam.exception.BookingExamException;
import com.seoul.his.msv.sup.bookingexam.to.BookingExamBean;


public interface BookingExamApplicationService {

	List<BookingExamBean> findBookingExamList(Map<String, String> argsMap);


}
