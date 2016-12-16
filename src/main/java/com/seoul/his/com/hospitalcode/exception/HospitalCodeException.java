package com.seoul.his.com.hospitalcode.exception;

@SuppressWarnings("serial")
public class HospitalCodeException extends Exception{
	public HospitalCodeException(String errorMsg){
		super(errorMsg);
	}
}
