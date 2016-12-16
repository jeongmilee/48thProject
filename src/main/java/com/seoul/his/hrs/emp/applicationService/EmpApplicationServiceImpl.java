package com.seoul.his.hrs.emp.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoul.his.common.to.BaseBean;
import com.seoul.his.hrs.appoint.to.AppointDetailBean;
import com.seoul.his.hrs.emp.dao.CareerDAO;
import com.seoul.his.hrs.emp.dao.DisabilityDAO;
import com.seoul.his.hrs.emp.dao.EducationDAO;
import com.seoul.his.hrs.emp.dao.EmpDAO;
import com.seoul.his.hrs.emp.dao.EmployInfoDAO;
import com.seoul.his.hrs.emp.dao.FamilyDAO;
import com.seoul.his.hrs.emp.dao.LicenseDAO;
import com.seoul.his.hrs.emp.dao.MilitaryDAO;
import com.seoul.his.hrs.emp.dao.PerconaldateDAO;
import com.seoul.his.hrs.emp.to.CareerBean;
import com.seoul.his.hrs.emp.to.DisabilityBean;
import com.seoul.his.hrs.emp.to.EducaBean;
import com.seoul.his.hrs.emp.to.EmpBean;
import com.seoul.his.hrs.emp.to.EmployInfoBean;
import com.seoul.his.hrs.emp.to.FamilyBean;
import com.seoul.his.hrs.emp.to.FinSufcandiBean;
import com.seoul.his.hrs.emp.to.ItverBean;
import com.seoul.his.hrs.emp.to.JoinCandiBean;
import com.seoul.his.hrs.emp.to.JoinCandiScoreBean;
import com.seoul.his.hrs.emp.to.LicenseBean;
import com.seoul.his.hrs.emp.to.MilitaryBean;
import com.seoul.his.hrs.emp.to.PerconaldateBean;
import com.seoul.his.hrs.emp.to.TestSubjectBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.applicationService
 * @Class    EmpApplicationServiceImpl.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *			사원AS_Impl
 * @LastUpdated
 */

@Service
public class EmpApplicationServiceImpl implements EmpApplicationService {
	@Autowired
	EmpDAO empDAO;

	@Autowired
	MilitaryDAO militaryDAO;
	@Autowired
	LicenseDAO licenseDAO;
	@Autowired
	PerconaldateDAO perconaldateDAO;
	@Autowired
	FamilyDAO familyDAO;
	@Autowired
	EducationDAO educationDAO;
	@Autowired
	DisabilityDAO disabilityDAO;
	@Autowired
	CareerDAO careerDAO;
	@Autowired
	EmployInfoDAO employinfoDAO;

	@Override
	public List<EmpBean> findEmpList(Map<String, String> argsMap) {
		return empDAO.findEmpList(argsMap);
	}

	@Override
	public List<EmpBean> selectEmpList(Map<String, String> argsMap) {
		return empDAO.selectEmpList(argsMap);
	}

	@Override
	public List<EmpBean> findRetireeList(Map<String, String> argsMap) {
		return empDAO.selectRetireeList(argsMap);
	}



	@SuppressWarnings("unchecked")
	@Override
	public void batchEmpProcess(Map<String, Object> map) {


			List<EmpBean> empList = (List<EmpBean>) map.get("empList");
			List<FamilyBean> familyList = (List<FamilyBean>) map.get("familyList");
			List<EducaBean> educationList = (List<EducaBean>) map
					.get("educationList");
			List<CareerBean> careerList = (List<CareerBean>) map.get("careerList");
			List<LicenseBean> licenseList = (List<LicenseBean>) map
					.get("licenseList");
			List<PerconaldateBean> perconaldateList = (List<PerconaldateBean>) map
					.get("perconaldateList");
			List<MilitaryBean> militaryList = (List<MilitaryBean>) map
					.get("militaryList");
			List<DisabilityBean> disabilityList = (List<DisabilityBean>) map
					.get("disabilityList");

			for (BaseBean empBean : empList) {
				if (empBean.getStatus() == "inserted") {
					empDAO.insertEmp(empBean);
				} else if (empBean.getStatus() == "updated") {
					empDAO.updateEmp(empBean);
				} else if (empBean.getStatus() == "deleted") {
					EmpBean emp = (EmpBean) empBean;
					String empNo = emp.getEmpNo();
					careerDAO.destroyCareer(empNo);
					disabilityDAO.destroyDisability(empNo);
					educationDAO.destroyEducation(empNo);
					familyDAO.destroyFamily(empNo);
					licenseDAO.destroyLicense(empNo);
					militaryDAO.destroyMilitary(empNo);
					perconaldateDAO.destroyPerconaldate(empNo);

					empDAO.deleteEmp(empBean);
				}
			}

			for (BaseBean militaryBean : militaryList) {
				if (militaryBean.getStatus() == "inserted") {
					militaryDAO.insertMilitary(militaryBean);
				} else if (militaryBean.getStatus() == "updated") {
					militaryDAO.updateMilitary(militaryBean);
				} else if (militaryBean.getStatus() == "deleted") {
					militaryDAO.deleteMilitary(militaryBean);
				}
			}

			for (BaseBean disabilityBean : disabilityList) {
				if (disabilityBean.getStatus() == "inserted") {
					disabilityDAO.insertDisability(disabilityBean);
				} else if (disabilityBean.getStatus() == "updated") {
					disabilityDAO.updateDisability(disabilityBean);
				} else if (disabilityBean.getStatus() == "deleted") {
					disabilityDAO.deleteDisability(disabilityBean);
				}
			}

			for (BaseBean familyBean : familyList) {
				if (familyBean.getStatus() == "inserted") {
					familyDAO.insertFamily(familyBean);
				} else if (familyBean.getStatus() == "updated") {
					familyDAO.updateFamily(familyBean);
				} else if (familyBean.getStatus() == "deleted") {
					familyDAO.deleteFamily(familyBean);
				}
			}

			for (BaseBean educationBean : educationList) {
				if (educationBean.getStatus() == "inserted") {
					educationDAO.insertEducation(educationBean);
				} else if (educationBean.getStatus() == "updated") {
					educationDAO.updateEducation(educationBean);
				} else if (educationBean.getStatus() == "deleted") {
					educationDAO.deleteEducation(educationBean);
				}
			}

			for (BaseBean careerBean : careerList) {
				if (careerBean.getStatus() == "inserted") {
					careerDAO.insertCareer(careerBean);
				} else if (careerBean.getStatus() == "updated") {
					careerDAO.updateCareer(careerBean);
				} else if (careerBean.getStatus() == "deleted") {
					careerDAO.deleteCareer(careerBean);
				}
			}

			for (BaseBean licenseBean : licenseList) {
				if (licenseBean.getStatus() == "inserted") {
					licenseDAO.insertLicense(licenseBean);
				} else if (licenseBean.getStatus() == "updated") {
					licenseDAO.updateLicense(licenseBean);
				} else if (licenseBean.getStatus() == "deleted") {
					licenseDAO.deleteLicense(licenseBean);
				}
			}

			for (BaseBean perconaldateBean : perconaldateList) {
				if (perconaldateBean.getStatus() == "inserted") {
					perconaldateDAO.insertPerconaldate(perconaldateBean);
				} else if (perconaldateBean.getStatus() == "updated") {
					perconaldateDAO.updatePerconaldate(perconaldateBean);
				} else if (perconaldateBean.getStatus() == "deleted") {
					perconaldateDAO.deletePerconaldate(perconaldateBean);
				}
			}

		}



	   @Override
		public List<EmployInfoBean> findEmployInfoList(Map<String, String> argsMap) {
			return employinfoDAO.findEmployInfoList(argsMap);
		}

	   @Override
		public List<TestSubjectBean> findTestSubjectList(Map<String, String> argsMap) {
			return employinfoDAO.findTestSubjectList(argsMap);
		}

	   @Override
		public List<ItverBean> findItverList(Map<String, String> argsMap) {
			return employinfoDAO.findItverList(argsMap);
		}

	@SuppressWarnings("unchecked")
	@Override
	public void batchEmployProcess(Map<String, Object> map) {
		List<EmployInfoBean> employInfoList = (List<EmployInfoBean>) map.get("employInfoBean");
		List<ItverBean> itverList = (List<ItverBean>) map.get("itverBean");
		List<TestSubjectBean> testSubjectList = (List<TestSubjectBean>) map.get("testSubjectBean");

	    for(BaseBean empBean : employInfoList){
	         String status = empBean.getStatus();
	         if(status.equals("inserted")) employinfoDAO.insertEmployInfo(empBean);
	         else if(status.equals("updated")) employinfoDAO.updateEmployInfo(empBean);
	         else if(status.equals("deleted")) employinfoDAO.delectEmployInfo(empBean);
	    }

	    for(BaseBean itverBean : itverList){
	         String status = itverBean.getStatus();
	         if(status.equals("inserted")) employinfoDAO.insertItver(itverBean);
	         else if(status.equals("updated")) employinfoDAO.updateItver(itverBean);
	         else if(status.equals("deleted")) employinfoDAO.delectItver(itverBean);
	    }

	    for(BaseBean testSubjectBean : testSubjectList){
	         String status = testSubjectBean.getStatus();
	         if(status.equals("inserted")) employinfoDAO.insertTestSubject(testSubjectBean);
	         else if(status.equals("updated")) employinfoDAO.updateTestSubject(testSubjectBean);
	         else if(status.equals("deleted")) employinfoDAO.delectTestSubject(testSubjectBean);

	    }


	}


	@Override
	public List<JoinCandiBean> findJoinCandiList() {
	   System.out.println("joinAS");
	   return employinfoDAO.findJoinCandiList();
	}


	 @Override
		public List<JoinCandiScoreBean> findJoinCandiScore(Map<String, String> argsMap) {
			return employinfoDAO.findJoinCandiScore(argsMap);
		}



	 @SuppressWarnings("unchecked")
	@Override
		public void batchJoinCandiProcess(Map<String, Object> map) {
			List<JoinCandiBean> joinCandiList = (List<JoinCandiBean>) map.get("JoinCandiBean");
			List<JoinCandiScoreBean> joinCandiScoreList = (List<JoinCandiScoreBean>) map.get("JoinCandiScoreBean");

		    for(BaseBean joinCandi : joinCandiList){
		         String status = joinCandi.getStatus();
		         if(status.equals("inserted")) employinfoDAO.insertJoinCandi(joinCandi);
		         else if(status.equals("updated")) employinfoDAO.updateJoinCandi(joinCandi);
		         else if(status.equals("deleted")) employinfoDAO.delectJoinCandi(joinCandi);
		    }

		    for(BaseBean joinCandiScore : joinCandiScoreList){
		         String status = joinCandiScore.getStatus();
		         if(status.equals("inserted")) employinfoDAO.insertJoinCandiScore(joinCandiScore);
		         else if(status.equals("updated")) employinfoDAO.updateJoinCandiScore(joinCandiScore);
		         else if(status.equals("deleted")) employinfoDAO.delectJoinCandiScore(joinCandiScore);
		    }
		}

	 @Override
		public List<FinSufcandiBean> findFinSufcandiList() {
			return employinfoDAO.findFinSufcandiList();
		}

	 @Override
	public void batchFinSufcandiProcess(List<FinSufcandiBean> finSufcandiList) {
		 for(FinSufcandiBean finSufcandiBean: finSufcandiList){
				switch(finSufcandiBean.getStatus()){
				 case "inserted": employinfoDAO.insertFinSufcandi(finSufcandiBean);break;
				 case "updated":  employinfoDAO.updateFinSufcandi(finSufcandiBean);break;
				 case "deleted":  employinfoDAO.deleteFinSufcandi(finSufcandiBean);break;

				}
			}
		}

	@Override
	public void appointEmp(List<AppointDetailBean> appointDetailList) {
		for(AppointDetailBean appointDetailBean : appointDetailList){	
			 empDAO.appointEmp(appointDetailBean);		
		}
	}

}