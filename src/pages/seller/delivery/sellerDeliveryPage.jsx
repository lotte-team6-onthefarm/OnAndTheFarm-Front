import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SellerDeliveryDetail } from '..';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import DeliveryList from '../../../components/seller/delivery/DeliveryList';

export default function SellerDeliveryPage() {
  return (
    <RightWrapper>
      <SellerTitle>주문 관리</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <Routes>
            <Route path="/" element={<DeliveryList />} />
            <Route path="/:id" element={<DeliveryList />} />
            <Route path="/detail/:id" element={<SellerDeliveryDetail />} />
          </Routes>
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
