package com.seoul.his.com.system.exception;

@SuppressWarnings("serial")
public class SystemException extends Exception{
	public SystemException(String errorMsg){
		super(errorMsg);
	}
}
