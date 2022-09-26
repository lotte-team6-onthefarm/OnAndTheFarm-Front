import React from 'react';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import SellerNavbar from '../../../components/seller/common/Navbar/SellerNavbar';
import { SellerTitle } from '../../../components/seller/common/Title.style';

export default function SellerUsersPage() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <RightWrapper>
        <SellerTitle>Users</SellerTitle>
        <PageRow>
          <PageCol width="calc(100% - 400px)">asdkasjdlaksjdlask</PageCol>
          <PageCol width="400px"></PageCol>
        </PageRow>
      </RightWrapper>
    </MainWrapper>
  );
}
