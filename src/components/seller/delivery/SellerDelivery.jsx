import React from 'react';
import { PageCol, PageRow, RightWrapper } from '../common/Box.style';
import { SellerTitle } from '../common/Title.style';
import DeliveryList from './deliveryList/DeliveryList';

export default function SellerDelivery() {
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
