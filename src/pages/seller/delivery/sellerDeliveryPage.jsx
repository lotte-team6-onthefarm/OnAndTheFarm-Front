import React from 'react';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import DeliveryList from '../../../components/seller/delivery/deliveryList/DeliveryList';

export default function SellerDeliveryPage() {
  return (
    <RightWrapper>
      <SellerTitle>Delivery</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <DeliveryList />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
