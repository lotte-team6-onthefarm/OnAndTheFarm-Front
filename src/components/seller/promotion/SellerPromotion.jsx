import React from 'react';
import { PageCol, PageRow, RightWrapper } from '../common/Box.style';
import { SellerTitle } from '../common/Title.style';

export default function SellerPromotion() {
  return (
    <RightWrapper>
      <SellerTitle>Promotion</SellerTitle>
      <PageRow>
        <PageCol width="calc(100% - 400px)">asdkasjdlaksjdlask</PageCol>
        <PageCol width="400px"></PageCol>
      </PageRow>
    </RightWrapper>
  );
}
