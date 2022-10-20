import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import OrderList from '../../../components/seller/order/OrderList';

export default function SellerOrderPage() {
  return (
    <RightWrapper>
      <SellerTitle>취소/반품 관리</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <Routes>
            <Route path="/" element={<OrderList />} />
            <Route path="/:id" element={<OrderList />} />
          </Routes>
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
