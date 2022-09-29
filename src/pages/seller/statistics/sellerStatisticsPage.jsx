import React from 'react';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import SellerStatistics from '../../../components/seller/statistics/SellerStatistics';

export default function SellerStatisticsPage() {
  return (
    <RightWrapper>
      <SellerTitle>통계/수치</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <SellerStatistics />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
