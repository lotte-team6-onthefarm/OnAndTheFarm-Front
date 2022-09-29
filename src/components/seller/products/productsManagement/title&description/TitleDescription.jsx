import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductContentWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';

export default function TitleDescription(props) {
  const id = props.id;
  console.log(id);
  return (
    <WhiteWrapper width="1380px" marginBottom="10px">
      <SubTitle color="#FFBC99" title="이름 및 설명" />
      <ProductInput
        title="상품 이름"
        placeholder="상품 이름 입력"
      ></ProductInput>
      <ProductInput
        title="상품 한줄 설명"
        placeholder="상품 한줄 설명 입력"
      ></ProductInput>
      <ProductContentWrapper>
        <div className="title">상품 설명(SummerNote)</div>
        <div className="content"></div>
      </ProductContentWrapper>
    </WhiteWrapper>
  );
}
