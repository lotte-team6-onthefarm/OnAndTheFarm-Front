import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import ProductInput from '../ProductInput';
import ProductStatus from './ProductStatus';
export default function PriceAmount() {
  return (
    <WhiteWrapper width="1380px" marginBottom="10px">
      <SubTitle color="#B1E5FC" title="가격 및 수량" />
      <ProductInput
        title="상품 가격"
        placeholder="상품 가격 입력"
      ></ProductInput>
      <ProductInput
        title="상품 재고"
        요
        placeholder="상품 재고 수 입력"
      ></ProductInput>
      <ProductStatus />
    </WhiteWrapper>
  );
}
