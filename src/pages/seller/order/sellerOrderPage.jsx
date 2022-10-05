import React from 'react';
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
          <OrderList />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
