package com.seoul.his.hdm.patient.exception;

@SuppressWarnings("serial")
public class PatientException extends Exception{
	public PatientException(String errorMsg){
		super(errorMsg);
	}
}
