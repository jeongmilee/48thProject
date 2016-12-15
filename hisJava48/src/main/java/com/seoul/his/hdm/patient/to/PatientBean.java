package com.seoul.his.hdm.patient.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Dataset(name = "dsPatient")
public class PatientBean extends BaseBean{
	
	private String patNo,			     //환자등록번호
	   patNm,                //환자이름
	   rrn1,                 //주민번호앞자리
	   age,                  //나이
	   tel,                  //전화번호
	   addr,                 //주소
	   barrAss,              //장애종별
	   dtlAddr,              //상세주소
	   zip,                  //우편번호
	   deathDate,            //사망일시
	   note,                 //메모
	   gender,               //성별
	   smsReceiveYb,         //sms수신여부
	   smsReceiveNo,         //sms수신전화번호
	   smsReceiver,          //sms수신자
	   recNwDate,            //최근내원일
	   rrn2,                 //주민번호 뒷자리
	   estbGiho,             //사업장 기호
	   certfctNo,            //증번호
	   insuRrn,              //피보험자 주민등록번호
	   insuRrn1,              //피보험자 주민등록번호1
	   insuNm,               //피보험자 이름
	   applyStartDate,       //적용시작일
	   applyEndDate,         //적용종료일
	   outpaReceiptNo,		 //외래접수번호
	   hosptlzReceiptNo;	 //입원접수번호
	
	
}
