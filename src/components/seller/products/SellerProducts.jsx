import React from 'react';
import { PageCol, PageRow, RightWrapper } from '../common/Box.style';
import { SellerTitle } from '../common/Title.style';
import ProductsDailyViews from './dailyViews/ProductsDailyViews';
import ProductsActive from './productsActive/ProductsActive';
import ProductsStatistics from './productsStatistics/ProductsStatistics';
import ProductsSalesStatistics from './salesStatistics/ProductsSalesStatistics';

export default function SellerProducts() {
  return (
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
  );
}
