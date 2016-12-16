//package com.erp45.hrs.emp.to;
//
//import com.erp45.common.annotation.DataSet;
//import com.erp45.common.to.BaseBean;
//
//
//
//@DataSet(name = "dsHmEmp")
//public class EmpBean extends BaseBean {
//
//	String frignSingleTxrate, //�ܱ��δ��ϼ���
//		   empNo,             //�����ȣ
//		   empNm,			  //�����
//		   jobtt,			  //����
//		   jobcl,			  //����
//		   jobrk,		      //����
//		   rrn,				  //�ֹε�Ϲ�ȣ
//		   birthday,		  //�������
//		   gender,			  //����
//		   mateYn,			  //���������
//		   addr,			  //�ּ�
//		   zipCd,			  //�����ȣ
//		   permaddr,		  //���ص����
//		   tel,				  //��ȭ��ȣ
//		   phone,			  //�޴�����ȣ
//		   extsn,			  //������ȭ��ȣ
//		   fax,				  //�ѽ���ȣ
//		   password,		  //��й�ȣ
//		   image,		      //�̹������ϸ�
//		   natnt,			  //����
//		   localYn,			  //���ܱ��ο���
//		   forinNum,		  //�ܱ��ε�Ϲ�ȣ
//		   deptCd,		      //�μ��ڵ�
//		   hireDiv,		      //��뱸��
//		   workStatus,		  //��������
//		   workPeriod,	      //�ټӳ��
//		   retDate,	          //�����
//		   retMonthWorkingdays,//����������
//		   payStep,		      //ȣ��
//		   pms,				  //����
//		   hireDate,		  //�Ի���
//		   detailAddr,		  //���ּ�
//		   email,			  //�̸����ּ�
//		   deptNm,			  //�μ���
//		   bankNm,		      //�����
//		   accountNm,		  //���¹�ȣ
//		   payDate,           //�޿���
//		   sts,				  //����
//		   loginIp,           //��������ip
//	       loginTime;         //�������ӽð�
//
//
//	public String getLoginIp() {
//		return loginIp;
//	}
//	public void setLoginIp(String loginIp) {
//		this.loginIp = loginIp;
//	}
//	public String getLoginTime() {
//		return loginTime;
//	}
//	public void setLoginTime(String loginTime) {
//		this.loginTime = loginTime;
//	}
//	public String getZipCd() {
//		return zipCd;
//	}
//	public void setZipCd(String zipCd) {
//		this.zipCd = zipCd;
//	}
//	public String getPayDate() {
//		return payDate;
//	}
//	public void setPayDate(String payDate) {
//		this.payDate = payDate;
//	}
//	public String getSts() {
//		return sts;
//	}
//	public void setSts(String sts) {
//		this.sts = sts;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getBankNm() {
//		return bankNm;
//	}
//	public void setBankNm(String bankNm) {
//		this.bankNm = bankNm;
//	}
//	public String getAccountNm() {
//		return accountNm;
//	}
//	public void setAccountNm(String accountNm) {
//		this.accountNm = accountNm;
//	}
//	public String getDeptNm() {
//		return deptNm;
//	}
//	public void setDeptNm(String deptNm) {
//		this.deptNm = deptNm;
//	}
//	public String getDetailAddr() {
//		return detailAddr;
//	}
//	public void setDetailAddr(String detailAddr) {
//		this.detailAddr = detailAddr;
//	}
//	public String getPms() {
//		return pms;
//	}
//
//	public void setPms(String pms) {
//		this.pms = pms;
//	}
//
//	public String getFrignSingleTxrate() {
//		return frignSingleTxrate;
//	}
//
//	public void setFrignSingleTxrate(String frignSingleTxrate) {
//		this.frignSingleTxrate = frignSingleTxrate;
//	}
//
//	public String getEmpNo() {
//		return empNo;
//	}
//
//	public String getHireDate() {
//		return hireDate;
//	}
//
//	public void setHireDate(String hireDate) {
//		this.hireDate = hireDate;
//	}
//
//	public void setEmpNo(String empNo) {
//		this.empNo = empNo;
//	}
//
//	public String getEmpNm() {
//		return empNm;
//	}
//
//	public void setEmpNm(String empNm) {
//		this.empNm = empNm;
//	}
//
//	public String getJobtt() {
//		return jobtt;
//	}
//
//	public void setJobtt(String jobtt) {
//		this.jobtt = jobtt;
//	}
//
//	public String getJobcl() {
//		return jobcl;
//	}
//
//	public void setJobcl(String jobcl) {
//		this.jobcl = jobcl;
//	}
//
//	public String getJobrk() {
//		return jobrk;
//	}
//
//	public void setJobrk(String jobrk) {
//		this.jobrk = jobrk;
//	}
//
//	public String getRrn() {
//		return rrn;
//	}
//
//	public void setRrn(String rrn) {
//		this.rrn = rrn;
//	}
//
//	public String getBirthday() {
//		return birthday;
//	}
//
//	public void setBirthday(String birthday) {
//		this.birthday = birthday;
//	}
//
//	public String getGender() {
//		return gender;
//	}
//
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//
//	public String getMateYn() {
//		return mateYn;
//	}
//
//	public void setMateYn(String mateYn) {
//		this.mateYn = mateYn;
//	}
//
//	public String getAddr() {
//		return addr;
//	}
//
//	public void setAddr(String addr) {
//		this.addr = addr;
//	}
//
//	public String getPermaddr() {
//		return permaddr;
//	}
//
//	public void setPermaddr(String permaddr) {
//		this.permaddr = permaddr;
//	}
//
//	public String getTel() {
//		return tel;
//	}
//
//	public void setTel(String tel) {
//		this.tel = tel;
//	}
//
//	public String getPhone() {
//		return phone;
//	}
//
//	public void setPhone(String phone) {
//		this.phone = phone;
//	}
//
//	public String getExtsn() {
//		return extsn;
//	}
//
//	public void setExtsn(String extsn) {
//		this.extsn = extsn;
//	}
//
//	public String getFax() {
//		return fax;
//	}
//
//	public void setFax(String fax) {
//		this.fax = fax;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getImage() {
//		return image;
//	}
//
//	public void setImage(String image) {
//		this.image = image;
//	}
//
//	public String getNatnt() {
//		return natnt;
//	}
//
//	public void setNatnt(String natnt) {
//		this.natnt = natnt;
//	}
//
//	public String getLocalYn() {
//		return localYn;
//	}
//
//	public void setLocalYn(String localYn) {
//		this.localYn = localYn;
//	}
//
//	public String getForinNum() {
//		return forinNum;
//	}
//
//	public void setForinNum(String forinNum) {
//		this.forinNum = forinNum;
//	}
//
//	public String getHireDiv() {
//		return hireDiv;
//	}
//
//	public void setHireDiv(String hireDiv) {
//		this.hireDiv = hireDiv;
//	}
//
//	public String getWorkStatus() {
//		return workStatus;
//	}
//
//	public void setWorkStatus(String workStatus) {
//		this.workStatus = workStatus;
//	}
//
//	public String getWorkPeriod() {
//		return workPeriod;
//	}
//
//	public void setWorkPeriod(String workPeriod) {
//		this.workPeriod = workPeriod;
//	}
//
//	public String getRetMonthWorkingdays() {
//		return retMonthWorkingdays;
//	}
//
//	public void setRetMonthWorkingdays(String retMonthWorkingdays) {
//		this.retMonthWorkingdays = retMonthWorkingdays;
//	}
//
//	public String getPayStep() {
//		return payStep;
//	}
//
//	public void setPayStep(String payStep) {
//		this.payStep = payStep;
//	}
//
//
//	public String getDeptCd() {
//		return deptCd;
//	}
//
//	public void setDeptCd(String deptCd) {
//		this.deptCd = deptCd;
//	}
//
//	public String getRetDate() {
//		return retDate;
//	}
//
//	public void setRetDate(String retDate) {
//		this.retDate = retDate;
//	}
//
//
//
//}






package com.seoul.his.hrs.emp.to;

import java.util.List;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.annotation.Remove;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @Package  com.seoul.his.hrs.emp.to
 * @Class    EmpBean.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description
 *
 * @LastUpdated
 */

@Getter
@Setter
@ToString
@Dataset(name = "gdsEmp")
public class EmpBean extends BaseBean {

		List<CareerBean> careerList;			//경력리스트
		List<DisabilityBean> disabilityList;	//장애리스트
		List<EducaBean> educationBeanList;	//교육리스트
		List<FamilyBean> familyList;			//가족리스트
		List<LicenseBean> licenseList;			//자격리스트
		List<MilitaryBean> militaryList;		//병역리스트
		List<PerconaldateBean> perconaldateList;//인적사항리스트

	@Remove
	public List<CareerBean> getCareerList() {
		return careerList;
	}
	@Remove
	public void setCareerList(List<CareerBean> careerList) {
		this.careerList = careerList;
	}
	@Remove
	public List<DisabilityBean> getDisabilityList() {
		return disabilityList;
	}
	@Remove
	public void setDisabilityList(List<DisabilityBean> disabilityList) {
		this.disabilityList = disabilityList;
	}
	@Remove
	public List<EducaBean> getEducationBeanList() {
		return educationBeanList;
	}
	@Remove
	public void setEducationBeanList(List<EducaBean> educationBeanList) {
		this.educationBeanList = educationBeanList;
	}
	@Remove
	public List<FamilyBean> getFamilyList() {
		return familyList;
	}
	@Remove
	public void setFamilyList(List<FamilyBean> familyList) {
		this.familyList = familyList;
	}
	@Remove
	public List<LicenseBean> getLicenseList() {
		return licenseList;
	}
	@Remove
	public void setLicenseList(List<LicenseBean> licenseList) {
		this.licenseList = licenseList;
	}
	@Remove
	public List<MilitaryBean> getMilitaryList() {
		return militaryList;
	}
	@Remove
	public void setMilitaryList(List<MilitaryBean> militaryList) {
		this.militaryList = militaryList;
	}
	@Remove
	public List<PerconaldateBean> getPerconaldateList() {
		return perconaldateList;
	}
	@Remove
	public void setPerconaldateList(List<PerconaldateBean> perconaldateList) {
		this.perconaldateList = perconaldateList;
	}


	String frignSingleTxrate, //외국인단일세율
		   empNo,             //사원번호
		   empNm,			  //사원명
		   jobtt,			  //직위
		   jobcl,			  //직종
		   jobrk,		      //직급
		   rrn,				  //주민등록번호
		   birthday,		  //생년월일
		   gender,			  //성별
		   mateYn,			  //배우자유무
		   addr,			  //주소
		   zipCd,			  //우편번호
		   permaddr,		  //기준등록지
		   tel,				  //전화번호
		   phone,			  //휴대폰번호
		   extsn,			  //원내전화번호
		   fax,				  //팩스번호
		   password,		  //비밀번호
		   image,		      //이미지파일명
		   natnt,			  //국적
		   localYn,			  //내외국인여부
		   forinNum,		  //외국인등록번호
		   deptCd,		      //부서코드
		   hireDiv,		      //고용구분
		   workStatus,		  //재직상태
		   workPeriod,	      //근속년수
		   retDate,	          //퇴사일
		   retMonthWorkingdays,//퇴직예정일
		   payStep,		      //호봉
		   pms,				  //권한
		   hireDate,		  //입사일
		   detailAddr,		  //상세주소
		   email,			  //이메일주소
		   deptNm,			  //부서명
		   bankNm,		      //은행명
		   accountNm,		  //계좌번호
		   payDate,           //급여일
		   sts,				  //상태
		   loginIp,           //최종접속ip
	       loginTime;         //최종접속시간



}
















