import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import MypageNavbar from '../../../../components/main/mypage/MypageNavbar';
import MypageReviewNavbar from '../../../../components/main/mypage/MypageReviewNavbar';
import { MypageDiv, MypageContentDiv } from '../mainMypage.style';
import MainMypageQna from './mainMypageQna';
import MainMypageReview from './mainMypageReview';
import MainMypageReviewList from './mainMypageReviewList';

export default function MainMypageReviewLayout() {
  return (
    <div>
      <MypageReviewNavbar></MypageReviewNavbar>
      <MypageContentDiv>
        <Routes>
          <Route path="/addlist" element={<MainMypageReview />} />
          <Route path="/myreview" element={<MainMypageReviewList />} />
          <Route path="/qna" element={<MainMypageQna />} />
        </Routes>
      </MypageContentDiv>
    </div>
  );
}
