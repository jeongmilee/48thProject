package com.seoul.his.hdm.foreign.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.foreign.dao.DoctorDiagnosisDAO;
import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;

@Service
public class DoctorDiagnosisSchdApplicationServiceImpl implements DoctorDiagnosisSchdApplicationService{
	@Autowired
	private DoctorDiagnosisDAO doctorDiagnosisDAO;

	//진료일정달력 조회
	@Override
	public List<CalendarBean> findCalendarList(String yearMonth) {
		return doctorDiagnosisDAO.selectCalendarList(yearMonth);
	}

	//진료일정조회
	@Override
	public List<TrmtSchdBean> findTrmtSchdList(Map<String, String> queryMap) {
		return doctorDiagnosisDAO.selectTrmtSchdList(queryMap);
	}

	//진료일정상세조회
	@Override
	public List<ApplyHistoryBean> findApplyHistoryList(String empNo) {
		return doctorDiagnosisDAO.selectApplyHistoryList(empNo);
	}

	//일별 의사 진료일정
	@Override
	public List<DaySchBean> findDayScheduleList(String empNo){
		return doctorDiagnosisDAO.selectDayScheduleList(empNo);
	}

}
