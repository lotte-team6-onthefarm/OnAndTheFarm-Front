import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import MypageOrderNavbar from '../../../../components/main/mypage/MypageOrderNavbar';
import MypageReviewNavbar from '../../../../components/main/mypage/MypageReviewNavbar';
import { MypageDiv, MypageContentDiv } from '../mainMypage.style';
import MainMypageOrderCancel from './mainMypageOrderCancel';
import MainMypageOrderDetail from './mainMypageOrderDetail';
import MainMypageOrderList from './mainMypageOrderList';

export default function MainMypageOrderLayout() {
  return (
    <div>
      <MypageOrderNavbar></MypageOrderNavbar>
      <MypageContentDiv>
        <Routes>
          <Route path="/list" element={<MainMypageOrderList />} />
          <Route path="/cancel" element={<MainMypageOrderCancel />} />
          <Route path="/detail" element={<MainMypageOrderDetail />} />
        </Routes>
      </MypageContentDiv>
    </div>
  );
}
