import React from 'react';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import SellerNavbar from '../../../components/seller/common/Navbar/SellerNavbar';
import { SellerTitle } from '../../../components/seller/common/Title.style';

export default function SellerPromotionPage() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <RightWrapper>
        <SellerTitle>Promotion</SellerTitle>
        <PageRow>
          <PageCol width="calc(100% - 400px)"></PageCol>
          <PageCol width="400px"></PageCol>
        </PageRow>
      </RightWrapper>
    </MainWrapper>
  );
}
