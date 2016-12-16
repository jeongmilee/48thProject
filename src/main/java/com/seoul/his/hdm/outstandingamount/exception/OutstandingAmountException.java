package com.seoul.his.hdm.outstandingamount.exception;

@SuppressWarnings("serial")
public class OutstandingAmountException extends Exception{
	public OutstandingAmountException(String errorMsg){
		super(errorMsg);
	}
}
