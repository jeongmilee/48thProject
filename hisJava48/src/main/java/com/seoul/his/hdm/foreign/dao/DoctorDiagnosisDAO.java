package com.seoul.his.hdm.foreign.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;

public interface DoctorDiagnosisDAO {

	List<CalendarBean> selectCalendarList(String yearMonth);

	List<TrmtSchdBean> selectTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> selectApplyHistoryList(String empNo);

	List<DaySchBean> selectDayScheduleList(String empNo);

}
