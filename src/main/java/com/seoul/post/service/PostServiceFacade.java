package com.seoul.post.service;

import java.util.List;

import com.seoul.post.to.PostBean;
import com.seoul.post.to.PostCondBean;

public interface PostServiceFacade {

    public List<PostCondBean> findSidoList();

    public List<PostCondBean> findSigunguList(String sido);

    public List<PostBean> findRoadPostList(PostCondBean postCondBean);

    public List<PostBean> findDongPostList(String dong);
}
