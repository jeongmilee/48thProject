package com.seoul.his.msv.mcm.patientservice.dao;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.RsvPatBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

public interface TreatmentReservationDAO {

	List<DaySchBean> selectDayScheduleList(Map<String, String> argsMap);

	List<TimeSchBean> selectTimeScheduleList(Map<String, String> argsMap);

	List<RsvPatBean> selectRsvByPatList(Map<String, String> argsMap);

}
