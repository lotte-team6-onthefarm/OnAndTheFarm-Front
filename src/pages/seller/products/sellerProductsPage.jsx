import React from 'react';
import {
  MainWrapper,
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import SellerNavbar from '../../../components/seller/common/Navbar/SellerNavbar';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import ProductsDailyViews from '../../../components/seller/products/dailyViews/ProductsDailyViews';
import ProductsActive from '../../../components/seller/products/productsActive/ProductsActive';
import ProductsStatistics from '../../../components/seller/products/productsStatistics/ProductsStatistics';
import ProductsSalesStatistics from '../../../components/seller/products/salesStatistics/ProductsSalesStatistics';

export default function SellerProductsPage() {
  return (
    <MainWrapper>
      <SellerNavbar />
      <RightWrapper>
        <SellerTitle>Products</SellerTitle>
        <PageRow>
          <PageCol width="100%">
            <ProductsSalesStatistics />
          </PageCol>
        </PageRow>
        <PageRow>
          <PageCol width="calc(100% - 400px)" paddingRight="8px">
            <ProductsActive />
          </PageCol>
          <PageCol width="400px">
            <ProductsDailyViews />
          </PageCol>
        </PageRow>
        <PageRow>
          <PageCol width="100%">
            <ProductsStatistics />
          </PageCol>
        </PageRow>
      </RightWrapper>
    </MainWrapper>
  );
}
