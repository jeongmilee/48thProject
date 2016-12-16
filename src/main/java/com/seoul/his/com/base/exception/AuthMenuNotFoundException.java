package com.seoul.his.com.base.exception;

/**
 * @Package com.seoul.his.com.base.exception
 * @Class IdNotFoundException.java
 * @Create 2016. 11. 27.
 * @Author berics
 * @Description 권한메뉴없음 - Check Exception
 *
 * @LastUpdated
 */
@SuppressWarnings("serial")
public class AuthMenuNotFoundException extends Exception {

    public AuthMenuNotFoundException(String msg) {
        super(msg);
    }

}
