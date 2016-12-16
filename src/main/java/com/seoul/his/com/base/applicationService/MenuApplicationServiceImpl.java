package com.seoul.his.com.base.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import com.seoul.his.com.base.dao.MenuDAO;
import com.seoul.his.com.base.exception.AuthMenuNotFoundException;
import com.seoul.his.com.base.to.MenuBean;

@Component
public class MenuApplicationServiceImpl implements MenuApplicationService {

    @Autowired
    private MenuDAO menuDAO;

    @Autowired
    ResourceBundleMessageSource messageSource;

    @Override
    public void findMenu(Map<String, String> argsMap) throws AuthMenuNotFoundException {
        MenuBean menu = menuDAO.selectMenu(argsMap);
        try {
            menu.getMenuName();
        } catch (NullPointerException e) {
            throw new AuthMenuNotFoundException(
                    messageSource.getMessage("authMenuNotFound", null, null));
        }
    }

    @Override
    public List<MenuBean> findMenuList() {
        return menuDAO.selectMenuList();
    }

    @Override
    public List<MenuBean> findAllMenu() {
        return menuDAO.selectAllMenu();
    }

    @Override
    public List<MenuBean> findAuthMenuList(Map<String, String> argsMap) {
        return menuDAO.selectAuthMenuList(argsMap);
    }

    @Override
    public void batchMenuProcess(List<MenuBean> menu) {
        for (MenuBean menuBean : menu) {
            if (menuBean.getStatus().equals("inserted")) {
                menuDAO.insertMenu(menuBean);
            } else if (menuBean.getStatus().equals("deleted")) {
                menuDAO.deleteMenu(menuBean);
            }
        }

    }
}
