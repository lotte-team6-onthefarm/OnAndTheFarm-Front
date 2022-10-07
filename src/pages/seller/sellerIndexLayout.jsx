import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  SellerDelivery,
  SellerMain,
  SellerProducts,
  SellerOrder,
  SellerPromotion,
  SellerStatistics,
  SellerDeliveryDetail,
} from '.';
import { MainWrapper } from '../../components/seller/common/Box.style';
import SellerNavbar from '../../components/seller/common/navbar/SellerNavbar';

export default function SellerIndexLayout() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <Routes>
        <Route path="/" element={<SellerMain />} />
        <Route path="/products/*" element={<SellerProducts />} />
        <Route path="/promotion" element={<SellerPromotion />} />
        <Route path="/order" element={<SellerOrder />} />
        <Route path="/delivery" element={<SellerDelivery />} />
        <Route path="/delivery/:id" element={<SellerDeliveryDetail />} />
        <Route path="/statistics" element={<SellerStatistics />} />
      </Routes>
    </MainWrapper>
  );
}
