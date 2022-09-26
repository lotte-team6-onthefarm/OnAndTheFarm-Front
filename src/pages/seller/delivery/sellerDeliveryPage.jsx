import React from 'react';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import SellerNavbar from '../../../components/seller/common/Navbar/SellerNavbar';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import DeliveryList from '../../../components/seller/delivery/deliveryList/DeliveryList';

export default function SellerDeliveryPage() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <RightWrapper>
        <SellerTitle>Delivery</SellerTitle>
        <PageRow>
          <PageCol width="100%">
            <DeliveryList />
          </PageCol>
        </PageRow>
      </RightWrapper>
    </MainWrapper>
  );
}
