import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductContentWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';

export default function TitleDescription(props) {
  const productName = props.productName;
  const productDetail = props.productDetail;
  const productDetailShort = props.productDetailShort;
  const setProductName = props.setProductName;
  const setProductDetail = props.setProductDetail;
  const setProductDetailShort = props.setProductDetailShort;
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#FFBC99" title="이름 및 설명" />
      <ProductInput
        title="상품 이름"
        placeholder={productName !== '' ? productName : '상품 이름 입력'}
        setFunction={setProductName}
      ></ProductInput>
      <ProductInput
        title="상품 한줄 설명"
        placeholder={
          productDetailShort !== '' ? productDetailShort : '상품 한줄 설명 입력'
        }
        setFunction={setProductDetailShort}
      ></ProductInput>
      <ProductContentWrapper>
        <div className="title">상품 설명(SummerNote)</div>
        <div className="content">
          <textarea
            placeholder={
              productDetail !== '' ? productDetail : '상품 설명 입력'
            }
            onChange={e => {
              setProductDetail(e.target.value);
            }}
          />
        </div>
      </ProductContentWrapper>
    </WhiteWrapper>
  );
}
