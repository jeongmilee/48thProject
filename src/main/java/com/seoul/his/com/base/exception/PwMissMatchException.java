package com.seoul.his.com.base.exception;

/**
 * @Package com.seoul.his.com.base.exception
 * @Class IdNotFoundException.java
 * @Create 2016. 11. 27.
 * @Author berics
 * @Description 패스워드틀림 - Check Exception
 *
 * @LastUpdated
 */
@SuppressWarnings("serial")
public class PwMissMatchException extends Exception {

    public PwMissMatchException(String msg) {
        super(msg);
    }

}
