import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MypageNavbar from '../../../components/main/mypage/MypageNavbar';
import { MypageDiv, MypageContentDiv, MypageNavbarDiv } from './mainMypage.style';
import MainMypageHome from './mainMypageHome';
import MainMypageLikes from './mainMypageLikes';
import MainMypageOrders from './mainMypageOrders';
import MainMypagePosts from './mainMypagePosts';
import MainMypageProfile from './mainMypageProfile';

export default function MainMypage() {
  return (
    <MypageDiv>
      <MypageNavbar></MypageNavbar>
      <MypageContentDiv>
      <Routes>
        <Route path="/" element={<MainMypageHome />} />
        <Route path="/profile" element={<MainMypageProfile />} />
        <Route path="/likes" element={<MainMypageLikes />} />
        <Route path="/posts" element={<MainMypagePosts />} />
        <Route path="/orders" element={<MainMypageOrders />} />


        
      </Routes>
      </MypageContentDiv>
    </MypageDiv>
  );
}
