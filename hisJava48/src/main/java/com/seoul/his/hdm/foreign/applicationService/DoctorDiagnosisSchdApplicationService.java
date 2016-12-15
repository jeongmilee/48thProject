package com.seoul.his.hdm.foreign.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;

public interface DoctorDiagnosisSchdApplicationService {

	List<CalendarBean> findCalendarList(String yearMonth);

	List<TrmtSchdBean> findTrmtSchdList(Map<String, String> queryMap);

	List<ApplyHistoryBean> findApplyHistoryList(String empNo);

	List<DaySchBean> findDayScheduleList(String empNo);
}
