package com.seoul.his.msv.mcm.patientservice.exception;

@SuppressWarnings("serial")
public class PatientServiceException extends Exception{
	public PatientServiceException(String errorMsg){
		super(errorMsg);
	}
}
