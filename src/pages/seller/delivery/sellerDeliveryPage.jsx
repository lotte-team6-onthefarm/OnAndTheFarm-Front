import React from 'react';
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
      <SellerTitle>주문/배송 관리</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <DeliveryList />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
