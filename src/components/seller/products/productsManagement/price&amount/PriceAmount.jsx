import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import ProductInput from '../ProductInput';
import ProductStatus from './ProductStatus';
export default function PriceAmount(props) {
  const setProductPrice = props.setProductPrice;
  const setProductTotalStock = props.setProductTotalStock;
  const setProductStatus = props.setProductStatus;
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#B1E5FC" title="가격 및 수량" />
      <ProductInput
        title="상품 가격"
        placeholder="30,000"
        setFunction={setProductPrice}
      ></ProductInput>
      <ProductInput
        title="상품 재고"
        요
        placeholder="5"
        setFunction={setProductTotalStock}
      />
      <ProductStatus setProductStatus={setProductStatus} />
    </WhiteWrapper>
  );
}
