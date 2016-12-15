package com.seoul.his.hdm.patient.to;

import com.seoul.his.common.annotation.Dataset;
import com.seoul.his.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString

@Dataset(name = "dsCheckPatient")
public class CheckPatientBean extends BaseBean{
	
	private String 
	patNo, 						    //환자등록번호 1
	patNm, 						//환자이름
	rrn1,                 //주민번호앞자리
	checkPatSeq, 				//체크환자등록번호 1
	postStartDate, 			// 게시 시작일
	postEndDate, 				//게시종료일 1
	importance, 					//중요도
	regDate, 						//등록일 1
	finModDate, 					//최종 수정일 1
	regWorker, 					//등록자 1
	finModWorker, 				//최종 수정자 1
	receiptYb, 					//접수여부
	othersDelPossYb, 		//타인 삭제 가능 여부 1
	checkNtc; 						//체크사항 1			
}
