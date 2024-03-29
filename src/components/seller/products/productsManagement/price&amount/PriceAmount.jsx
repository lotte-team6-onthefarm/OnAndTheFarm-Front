import React from 'react';
import { HorizontalLine } from '../../../../common/HorizontalLine.style';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import ProductInput from '../ProductInput';
import ProductStatus from './ProductStatus';
export default function PriceAmount(props) {
  const productPrice = props.productPrice;
  const productTotalStock = props.productTotalStock;
  const productStatus = props.productStatus;
  const setProductPrice = props.setProductPrice;
  const setProductTotalStock = props.setProductTotalStock;
  const setProductStatus = props.setProductStatus;
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#B1E5FC" title="가격 및 수량" />
      <ProductInput
        title="상품 가격"
        placeholder={productPrice !== '' ? productPrice : '가격을 입력해주세요'}
        setFunction={setProductPrice}
      ></ProductInput>
      <HorizontalLine color="#F2F2F2" />
      <ProductInput
        title="상품 재고"
        placeholder={
          productTotalStock !== '' ? productTotalStock : '재고를 입력해주세요'
        }
        setFunction={setProductTotalStock}
      />
      <HorizontalLine color="#F2F2F2" />
      <ProductStatus
        productStatus={productStatus}
        setProductStatus={setProductStatus}
      />
    </WhiteWrapper>
  );
}
