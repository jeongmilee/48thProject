package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hdm.foreign.applicationService.DoctorDiagnosisSchdApplicationService;
import com.seoul.his.hdm.foreign.applicationService.ForeignApplicationService;
import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.PatInfoBean;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;

@Service
public class ForeignServiceFacadeImpl implements ForeignServiceFacade {
	@Autowired
	ForeignApplicationService foreignApplicationService;

	@Autowired
	DoctorDiagnosisSchdApplicationService doctorDiagnosisSchdApplicationService;

	@Override
	public List<PatInfoBean> findPatList(Map<String, String> argsMap) {
		return foreignApplicationService.findPatList(argsMap);
	}

	@Override
	public PatInfoBean findPat(Map<String, String> argsMap) {
		return foreignApplicationService.findPat(argsMap);
	}

	@Override
	public List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap) {
		return foreignApplicationService.findDiagnosisReceiptList(argsMap);
	}

	@Override
	public void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		foreignApplicationService.registerDiagnosisReceipt(receiptInfoBean);
	}

	@Override
	public void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean) {
		foreignApplicationService.removeDiagnosisReceipt(receiptInfoBean);
	}

	//진료일정달력조회
    @Override
    public List<CalendarBean> findCalendarList(String yearMonth) {
        return doctorDiagnosisSchdApplicationService.findCalendarList(yearMonth);
    }
    //진료일정조회
    @Override
    public List<TrmtSchdBean> findTrmtSchdList(Map<String, String> argsMap) {
        return doctorDiagnosisSchdApplicationService.findTrmtSchdList(argsMap);
    }
    //진료일정상세조회
    @Override
    public List<ApplyHistoryBean> findApplyHistoryList(String empNo) {
        return doctorDiagnosisSchdApplicationService.findApplyHistoryList(empNo);
    }
    //일별 의사 진료일정
    @Override
    public List<DaySchBean> findDayScheduleList(String empNo){
    	return doctorDiagnosisSchdApplicationService.findDayScheduleList(empNo);
    }


}
