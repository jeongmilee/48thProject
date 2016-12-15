package com.seoul.his.hdm.foreign.service;

import java.util.List;
import java.util.Map;

import com.seoul.his.hdm.foreign.to.ApplyHistoryBean;
import com.seoul.his.hdm.foreign.to.CalendarBean;
import com.seoul.his.hdm.foreign.to.PatInfoBean;
import com.seoul.his.hdm.foreign.to.ReceiptInfoBean;
import com.seoul.his.hdm.foreign.to.TrmtSchdBean;
import com.seoul.his.msv.mcm.patientservice.to.DaySchBean;


public interface ForeignServiceFacade {

	public List<ReceiptInfoBean> findDiagnosisReceiptList(Map<String, String> argsMap);

	public void registerDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);

	public void removeDiagnosisReceipt(ReceiptInfoBean receiptInfoBean);

	public PatInfoBean findPat(Map<String, String> argsMap);

	public List<PatInfoBean> findPatList(Map<String, String> argsMap);


	//의사진료일정조회
	List<CalendarBean> findCalendarList(String yearMonth);

    List<TrmtSchdBean> findTrmtSchdList(Map<String, String> argsMap);

    List<ApplyHistoryBean> findApplyHistoryList(String empNo);

    List<DaySchBean> findDayScheduleList(String empNo);


	/*CalcuOutpaTrmtCostBean calcuOutpaTrmtCost(Map<String, Object> procedureMap) throws Exception;

	void registerRece(OutpaTrmtCostBean outpaTrmtCost);

	OutpaTrmtCostBean findRece(Map<String, String> argsMap);*/

}
