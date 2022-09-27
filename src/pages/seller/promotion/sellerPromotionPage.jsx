import React from 'react';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';

export default function SellerPromotionPage() {
  return (
    <RightWrapper>
      <SellerTitle>Promotion</SellerTitle>
      <PageRow>
        <PageCol width="calc(100% - 400px)"></PageCol>
        <PageCol width="400px"></PageCol>
      </PageRow>
    </RightWrapper>
  );
}
