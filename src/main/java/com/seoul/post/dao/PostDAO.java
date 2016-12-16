package com.seoul.post.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.seoul.post.to.PostBean;
import com.seoul.post.to.PostCondBean;


public interface PostDAO {

    List<PostCondBean> selectSidoList();

    List<PostCondBean> selectSigunguList(@Param("sido") String sido);

    List<PostBean> selectRoadPostList(PostCondBean postCondBean);

    List<PostBean> selectDongPostList(@Param("dong") String dong);

}
