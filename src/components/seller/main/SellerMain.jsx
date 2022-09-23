import React from 'react';
import SellerNavbar from '../common/Navbar/SellerNavbar';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../common/Box.style';
import MainUserManagement from './userManagement/MainUserManagement';
import MainSalesStatistics from './salesStatistics/MainSalesStatistics';
import MainPopularProducts from './popularProducts/MainPopularProducts';
import MainReviews from './reviews/MainReviews';
import { SellerTitle } from '../common/Title.style';

export default function SellerMain() {
  return (
    <RightWrapper>
      <SellerTitle>Dashboard</SellerTitle>
      <PageRow>
        <PageCol width="calc(100% - 400px)" paddingRight="8px">
          <MainUserManagement />
          <MainSalesStatistics />
        </PageCol>
        <PageCol width="400px">
          <MainPopularProducts />
          <MainReviews />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
