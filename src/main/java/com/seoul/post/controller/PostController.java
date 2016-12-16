package com.seoul.post.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.xapi.data.PlatformData;
import com.seoul.his.common.util.DataSetBeanMapper;
import com.seoul.post.service.PostServiceFacade;
import com.seoul.post.to.PostBean;
import com.seoul.post.to.PostCondBean;

/**
 * @Package  com.seoul.his.com.post.controller
 * @Class    PostController.java
 * @Create   2016. 11. 27.
 * @Author   berics
 * @Description 주소 컨트롤러
 *
 * @LastUpdated 
 */
@Controller
public class PostController {

    @Autowired
    private PostServiceFacade postServiceFacade;

    @Autowired
    private DataSetBeanMapper dataSetBeanMapper;

    @RequestMapping("com/post/findSido.do")
    public void findSidoList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        List<PostCondBean> sidoList = postServiceFacade.findSidoList();
        dataSetBeanMapper.beansToDataset(outData, sidoList, "dsPostSi", PostCondBean.class);
    }

    @RequestMapping("com/post/findSigungu.do")
    public void findSigunguList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        String sido = inData.getVariable("sido").getString();
        List<PostCondBean> sigunguList = postServiceFacade.findSigunguList(sido);
        dataSetBeanMapper.beansToDataset(outData, sigunguList, "dsPostSigungu", PostCondBean.class);
    }

    @RequestMapping("com/post/findRoadPost.do")
    public void findRoadNameList(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        PostCondBean postCondBean = dataSetBeanMapper.datasetToBean(inData, PostCondBean.class);
        List<PostBean> roadPostList = postServiceFacade.findRoadPostList(postCondBean);
        dataSetBeanMapper.beansToDataset(outData, roadPostList, "dsRoadPost", PostBean.class);
    }

    @RequestMapping("com/post/findDongPost.do")
    public void findPostListByDong(HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        PlatformData inData = (PlatformData) request.getAttribute("inData");
        PlatformData outData = (PlatformData) request.getAttribute("outData");

        String dong = inData.getVariable("dong").getString();
        List<PostBean> dongPostList = postServiceFacade.findDongPostList(dong);
        dataSetBeanMapper.beansToDataset(outData, dongPostList, "dsDongPost", PostBean.class);
    }

}
