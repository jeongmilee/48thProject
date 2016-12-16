package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    MilitaryBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Dataset(name = "dsHmMilitary")
public class MilitaryBean extends BaseBean {

	 String empNo         	//사원번호
			,physiqueGrade 	//체격등위
			,mgroup        	//군별
			,branch         //병과
			,hierarachy     //계급
			,msn           	//군번
			,joinArmyDay    //입대일
			,dischargeDay   //전역일
			,militarySeq;	//병역시퀀스


	public String getMilitarySeq() {
		return militarySeq;
	}
	public void setMilitarySeq(String militarySeq) {
		this.militarySeq = militarySeq;
	}
	public String getEmpNo() {
		return empNo;
	}
	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}
	public String getPhysiqueGrade() {
		return physiqueGrade;
	}
	public void setPhysiqueGrade(String physiqueGrade) {
		this.physiqueGrade = physiqueGrade;
	}
	public String getMgroup() {
		return mgroup;
	}
	public void setMgroup(String mgroup) {
		this.mgroup = mgroup;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getHierarachy() {
		return hierarachy;
	}
	public void setHierarachy(String hierarachy) {
		this.hierarachy = hierarachy;
	}
	public String getMsn() {
		return msn;
	}
	public void setMsn(String msn) {
		this.msn = msn;
	}
	public String getJoinArmyDay() {
		return joinArmyDay;
	}
	public void setJoinArmyDay(String joinArmyDay) {
		this.joinArmyDay = joinArmyDay;
	}
	public String getDischargeDay() {
		return dischargeDay;
	}
	public void setDischargeDay(String dischargeDay) {
		this.dischargeDay = dischargeDay;
	}

}
