package com.seoul.his.hdm.basebusiness.exception;

@SuppressWarnings("serial")
public class BaseBusinessException extends Exception{
	public BaseBusinessException(String errorMsg){
		super(errorMsg);
	}
}
