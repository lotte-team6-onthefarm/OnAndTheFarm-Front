import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductContentWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';
import { HorizontalLine } from '../../../../common/HorizontalLine.style';

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
      <HorizontalLine color="#F2F2F2" />
      <ProductInput
        title="상품 한줄 설명"
        placeholder={
          productDetailShort !== '' ? productDetailShort : '상품 한줄 설명 입력'
        }
        setFunction={setProductDetailShort}
      ></ProductInput>
      <HorizontalLine color="#F2F2F2" />
      <ProductContentWrapper>
        <div className="managementProductTitle">상품 상세 설명</div>
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
