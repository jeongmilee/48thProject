package com.seoul.his.com.base.exception;


/**
 * @Package  com.seoul.his.com.base.exception
 * @Class    IdNotFoundException.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 아이디찾을수없음 - Check Exception
 *
 * @LastUpdated 
 */
@SuppressWarnings("serial")
public class IdNotFoundException extends Exception {
    public IdNotFoundException(String msg) {
        super(msg);
    }
}
