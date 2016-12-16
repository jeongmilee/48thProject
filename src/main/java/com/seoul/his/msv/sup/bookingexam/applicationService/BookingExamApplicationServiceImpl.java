package com.seoul.his.msv.sup.bookingexam.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.sup.bookingexam.dao.BookingExamDAO;
import com.seoul.his.msv.sup.bookingexam.exception.BookingExamException;
import com.seoul.his.msv.sup.bookingexam.to.BookingExamBean;

/**
 * @Package  com.seoul.his.acc.budget.applicationService
 * @Class    AccBudgetApplicationServiceImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated 
 */

@Component
public class BookingExamApplicationServiceImpl implements BookingExamApplicationService{
	@Autowired
	BookingExamDAO bookingexamDAO;
	



	@Override
	public List<BookingExamBean> findBookingExamList(Map<String, String> argsMap) {
		List<BookingExamBean> bookingexamList = bookingexamDAO.selectBookingExamList(argsMap);
		return bookingexamList;		
	}

}
