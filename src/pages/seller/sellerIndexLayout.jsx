import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  SellerDelivery,
  SellerMain,
  SellerProducts,
  SellerPromotion,
  SellerStatistics,
  SellerUsers,
} from '.';
import { MainWrapper } from '../../components/seller/common/Box.style';
import SellerNavbar from '../../components/seller/common/Navbar/SellerNavbar';
import SellerLoginPage from './account/login/sellerLoginPage';

export default function SellerIndexLayout() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <Routes>
        <Route path="/" element={<SellerMain />} />
        <Route path="/login" element={<SellerLoginPage />} />
        <Route path="/products" element={<SellerProducts />} />
        <Route path="/promotion" element={<SellerPromotion />} />
        <Route path="/delivery" element={<SellerDelivery />} />
        <Route path="/statistics" element={<SellerStatistics />} />
        <Route path="/users" element={<SellerUsers />} />
      </Routes>
    </MainWrapper>
  );
}
