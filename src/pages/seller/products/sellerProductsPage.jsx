import React from 'react';
import {
  PageCol,
  PageRow,
  RightWrapper,
} from '../../../components/seller/common/Box.style';
import { SellerTitle } from '../../../components/seller/common/Title.style';
import ProductsStatistics from '../../../components/seller/products/productsStatistics/ProductsStatistics';

export default function SellerProductsPage() {
  return (
    <RightWrapper>
      <SellerTitle>상품 관리</SellerTitle>
      <PageRow>
        <PageCol width="100%">
          <ProductsStatistics />
        </PageCol>
      </PageRow>
    </RightWrapper>
  );
}
