package com.seoul.his.msv.sup.bookingexam.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.msv.sup.bookingexam.applicationService.BookingExamApplicationService;
import com.seoul.his.msv.sup.bookingexam.to.BookingExamBean;


/**
 * @Package  com.seoul.his.acc.budget.service
 * @Class    BudgetServiceFacadeImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class BookingExamServiceFacadeImpl implements BookingExamServiceFacade{
	@Autowired
	BookingExamApplicationService bookingexamApplicationService;


	@Override
		public List<BookingExamBean> findBookingExamList(Map<String, String> argsMap) {
		List<BookingExamBean> bookingexamList = bookingexamApplicationService.findBookingExamList(argsMap);
		return bookingexamList;
	}
	
	
	
}
