package com.seoul.his.hrs.appoint.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.hrs.appoint.dao.AppointDAO;
import com.seoul.his.hrs.appoint.to.AppointBean;
import com.seoul.his.hrs.appoint.to.AppointCheckBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.appoint.to.AppointInfoBean;
import com.seoul.his.hrs.emp.to.DeptBean;
import com.seoul.his.hrs.emp.to.EmpBean;

/**
 * 
 * @Package  com.seoul.his.hrs.appoint.applicationService
 * @Class    AppointApplicationServiceImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			발령 AS_Impl
 * @LastUpdated
 */

@Service
public class AppointApplicationServiceImpl implements AppointApplicationService{

	@Autowired
	AppointDAO appointDAO;
	@Override
	public List<DeptBean> findDeptList(Map<String, String> serchDeptList) {
		List<DeptBean> deptList;
		deptList = appointDAO.selectDeptList(serchDeptList);
		return deptList;
	}

	@Override
	public List<EmpBean> findEmpList(Map<String, String> map) {
		List<EmpBean> empList;
		empList = appointDAO.selectEmpList(map);
		return empList;
	}

	@Override
	public void batchAppoint(List<AppointBean> appointInfoList) {
	    for(AppointBean appointBean : appointInfoList){
	    	String status = appointBean.getStatus();
	    	System.out.println(status);
	    	switch(status){
		    	case "inserted":appointDAO.insertAppointInfo(appointBean);break;
		    	case "deleted":appointDAO.deleteAppointInfo(appointBean);break;
		    	case "updated":appointDAO.updateAppointInfo(appointBean);break;
	    	}
	    	
	    }

	}

	@Override
	public List<AppointBean> findAppmtList(Map argsMap) {
		List<AppointBean> appmtList;
		appmtList = appointDAO.selectAppmtList(argsMap);
		return appmtList;
	}

	@Override
	public void batchAppointDetail(
			List<AppointDetailBean> appointDetailInfoList) {
		Map<String, String> map=new HashMap<String, String>();
	    for(AppointDetailBean appointDetailBean : appointDetailInfoList){
	    	String status = appointDetailBean.getStatus();
	    	switch(status){
	    	case "inserted":appointDAO.insertAppointDetailInfo(appointDetailBean);break;
	    	case "deleted":appointDAO.deleteAppointDetailInfo(appointDetailBean);break;
	    	case "updated":appointDAO.updateAppointDetailInfo(appointDetailBean);break;
    	}
	    		
		    
		    	
	    	}
	    }
	

	@Override
	public void modifyrAppointDetail(List<AppointDetailBean> appointDetailInfoList) {
	    for(AppointDetailBean appointDetailBean : appointDetailInfoList){
	    	String detailCheack=appointDetailBean.getCheack();
	    	if(detailCheack==null){
	    	}else{
	    	appointDAO.updateEmp(appointDetailBean);
	    	}
	    }
	}

	@Override
	public List<AppointInfoBean> findAppointInfoList(Map<String, String> map) {
		List<AppointInfoBean> appointList;
		System.out.println(map.get("deptCd")+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		System.out.println(map.get("empNm")+" @@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		appointList = appointDAO.selectAppointInfoList(map);
		return appointList;
	}

	@Override
	public void modifyAppointEmp(List<AppointDetailBean> appointInfoList,Map<String,String> argsMap) {
	    for(AppointDetailBean appointDetailBean : appointInfoList){
	    	String appEmp=argsMap.get("appEmpNo");
	    	if(!appEmp.equals(appointDetailBean.getEmpNo())){
	    	}else{
	    	appointDAO.updateAppointEmp(appointDetailBean);
	    	}
	    }
	}

	@Override
	public List<AppointCheckBean> findCheckAppointList(Map<String, String> argsMap) {
		List<AppointCheckBean> checkAppointList;
		checkAppointList = appointDAO.selectCheckAppointList(argsMap);
		return checkAppointList;
	}

	@Override
	public List<AppointDetailBean> findAppmtDetailList(Map<String, String> argsMap) {
		return appointDAO.selectAppmtDetailList(argsMap);
	}

	@Override
	public void retEmp(Map<String, String> argsMap) {
		appointDAO.retEmp(argsMap);
	}


}
