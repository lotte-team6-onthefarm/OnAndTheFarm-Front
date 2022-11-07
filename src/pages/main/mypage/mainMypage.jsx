import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HorizontalLine } from '../../../components/common/HorizontalLine.style';
import MypageNavbar from '../../../components/main/mypage/MypageNavbar';
import { MypageDiv, MypageContentDiv } from './mainMypage.style';
import MainMypageProfile from './mainMypageProfile';
import MainMypageOrderLayout from './order/mainMypageOrderLayout';
import MainMypageReviewLayout from './review/mainMypageReviewLayout';

export default function MainMypage() {
  return (
    <MypageDiv>
      <MypageNavbar></MypageNavbar>
      <HorizontalLine color="gray" />
      <MypageContentDiv>
        <Routes>
          <Route path="/profile" element={<MainMypageProfile />} />
          <Route path="/review/*" element={<MainMypageReviewLayout />} />
          <Route path="/orders/*" element={<MainMypageOrderLayout />} />
        </Routes>
      </MypageContentDiv>
    </MypageDiv>
  );
}
