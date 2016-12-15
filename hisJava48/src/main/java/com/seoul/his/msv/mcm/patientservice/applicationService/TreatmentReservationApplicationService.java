package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.RsvPatBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

public interface TreatmentReservationApplicationService {

	List<DaySchBean> findDayScheduleList(Map<String, String> argsMap);

	List<TimeSchBean> findTimeScheduleList(Map<String, String> argsMap);

	List<RsvPatBean> findRsvByPatList(Map<String, String> argsMap);

}
