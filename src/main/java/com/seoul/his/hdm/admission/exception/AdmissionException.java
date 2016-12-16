package com.seoul.his.hdm.admission.exception;

@SuppressWarnings("serial")
public class AdmissionException extends Exception{
	public AdmissionException(String errorMsg){
		super(errorMsg);
	}
}
