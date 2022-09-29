import React from 'react';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import SellerPromotion from '../../../components/seller/promotion/SellerPromotion';

export default function SellerPromotionPage() {
  return (
    <RightWrapper>
      <SellerTitle>프로모션</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <SellerPromotion></SellerPromotion>
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
