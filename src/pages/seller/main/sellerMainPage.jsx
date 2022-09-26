import React from 'react';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import SellerNavbar from '../../../components/seller/common/Navbar/SellerNavbar';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import MainPopularProducts from '../../../components/seller/main/popularProducts/MainPopularProducts';
import MainReviews from '../../../components/seller/main/reviews/MainReviews';
import MainSalesStatistics from '../../../components/seller/main/salesStatistics/MainSalesStatistics';
import MainUserManagement from '../../../components/seller/main/userManagement/MainUserManagement';

export default function SellerMainPage() {
  return (
    <MainWrapper>
      <SellerNavbar />
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
    </MainWrapper>
  );
}
