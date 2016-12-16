package com.seoul.his.hrs.emp.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    PerconaldateBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Dataset(name = "dsHmPerconaldate")
public class PerconaldateBean extends BaseBean{



	 String height           //신장
			,weight          //체중
			,eyeseght        //시력
			,colorblind      //색신
			,bloodType       //혈액형
			,medicalHistory  //의료기록
			,religion        //종교
			,empNo           //사번
			,hobby           //취미
			,talent          //특기
			,realestate      //부동산
			,lifeLevel       //생활정도
			,living          //주거
			,citizenship     //시민권
			,perresi         //영주권
			,ctyName;        //국명




	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getEyeseght() {
		return eyeseght;
	}
	public void setEyeseght(String eyeseght) {
		this.eyeseght = eyeseght;
	}
	public String getColorblind() {
		return colorblind;
	}
	public void setColorblind(String colorblind) {
		this.colorblind = colorblind;
	}
	public String getBloodType() {
		return bloodType;
	}
	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}
	public String getMedicalHistory() {
		return medicalHistory;
	}
	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
	public String getReligion() {
		return religion;
	}
	public void setReligion(String religion) {
		this.religion = religion;
	}
	public String getEmpNo() {
		return empNo;
	}
	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}
	public String getHobby() {
		return hobby;
	}
	public void setHobby(String hobby) {
		this.hobby = hobby;
	}
	public String getTalent() {
		return talent;
	}
	public void setTalent(String talent) {
		this.talent = talent;
	}
	public String getRealestate() {
		return realestate;
	}
	public void setRealestate(String realestate) {
		this.realestate = realestate;
	}
	public String getLifeLevel() {
		return lifeLevel;
	}
	public void setLifeLevel(String lifeLevel) {
		this.lifeLevel = lifeLevel;
	}
	public String getLiving() {
		return living;
	}
	public void setLiving(String living) {
		this.living = living;
	}
	public String getCitizenship() {
		return citizenship;
	}
	public void setCitizenship(String citizenship) {
		this.citizenship = citizenship;
	}
	public String getPerresi() {
		return perresi;
	}
	public void setPerresi(String perresi) {
		this.perresi = perresi;
	}
	public String getCtyName() {
		return ctyName;
	}
	public void setCtyName(String ctyName) {
		this.ctyName = ctyName;
	}

}
