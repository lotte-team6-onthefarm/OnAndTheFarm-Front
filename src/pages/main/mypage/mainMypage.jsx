import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MypageNavbar from '../../../components/main/mypage/MypageNavbar';
import MainLikes from '../likes/mainLikes';
import { MypageDiv, MypageContentDiv } from './mainMypage.style';
import MainMypageHome from './mainMypageHome';
import MainMypageOrderCancel from './mainMypageOrderCancel';
import MainMypageOrderDetail from './mainMypageOrderDetail';
import MainMypageOrderList from './mainMypageOrderList';
import MainMypagePosts from './mainMypagePosts';
import MainMypageProfile from './mainMypageProfile';
import MainMypageQna from './mainMypageQna';
import MainMypageReview from './mainMypageReview';
import MainMypageReviewList from './mainMypageReviewList';

export default function MainMypage() {
  return (
    <MypageDiv>
      <MypageNavbar></MypageNavbar>
      <MypageContentDiv>
        <Routes>
          <Route path="/" element={<MainMypageHome />} />
          <Route path="/profile" element={<MainMypageProfile />} />
          <Route path="/likes" element={<MainLikes />} />
          <Route path="/review/addlist" element={<MainMypageReview />} />
          <Route path="/review/myreview" element={<MainMypageReviewList />} />
          <Route path="/review/qna" element={<MainMypageQna />} />
          <Route path="/orders/list" element={<MainMypageOrderList />} />
          <Route path="/orders/cancel" element={<MainMypageOrderCancel />} />
          <Route path="/orders/detail" element={<MainMypageOrderDetail />} />
          <Route path="/posts" element={<MainMypagePosts />} />
        </Routes>
      </MypageContentDiv>
    </MypageDiv>
  );
}
