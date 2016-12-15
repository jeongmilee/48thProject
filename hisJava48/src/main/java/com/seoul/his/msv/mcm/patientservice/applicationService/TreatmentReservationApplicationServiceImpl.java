package com.seoul.his.msv.mcm.patientservice.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seoul.his.msv.mcm.patientservice.dao.TreatmentReservationDAO;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;
import com.seoul.his.msv.mcm.patientservice.to.RsvPatBean;
import com.seoul.his.msv.mcm.patientservice.to.TimeSchBean;

/**
 * <pre>
 * com.seoul.his.msv.mcm.patientservice.applicationService
 *    |_ TreatmentReservationApplicationServiceImpl.java
 * </pre>
 *
 * @date : 2016. 12. 2. 오후 3:11:06
 * @version :
 * @author : 이정미
 */




@Component
public class TreatmentReservationApplicationServiceImpl implements TreatmentReservationApplicationService {
	@Autowired
	TreatmentReservationDAO treatmentReservationDAO;
	@Override
	public List<DaySchBean> findDayScheduleList(Map<String, String> argsMap) {
		return treatmentReservationDAO.selectDayScheduleList(argsMap);
	}
	@Override
	public List<TimeSchBean> findTimeScheduleList(Map<String, String> argsMap) {
		return treatmentReservationDAO.selectTimeScheduleList(argsMap);
	}
	@Override
	public List<RsvPatBean> findRsvByPatList(Map<String, String> argsMap) {
		return treatmentReservationDAO.selectRsvByPatList(argsMap);
	}

}
