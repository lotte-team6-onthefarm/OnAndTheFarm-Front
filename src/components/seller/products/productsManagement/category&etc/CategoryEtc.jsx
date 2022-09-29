import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductCategoryWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';
import CaetgoryList from './CaetgoryList';
export default function CategoryEtc() {
  return (
    <WhiteWrapper width="1380px">
      <SubTitle color="#B5E4CA" title="카테고리 및 기타" />
      <ProductCategoryWrapper>
        <div className="title">카테고리</div>
        <CaetgoryList />
      </ProductCategoryWrapper>
      <ProductInput
        title="상품 원산지"
        placeholder="상품 원산지 입력"
      ></ProductInput>
      <ProductInput
        title="배송 업체"
        placeholder="배송 업체 입력"
      ></ProductInput>
    </WhiteWrapper>
  );
}
