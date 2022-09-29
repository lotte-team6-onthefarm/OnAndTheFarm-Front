import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import ProductImage from './ProductImage';
export default function Images() {
  return (
    <WhiteWrapper width="1380px" marginBottom="10px">
      <SubTitle color="#CABDFF" title="상품 이미지" />
      <ProductImage title="메인 이미지"></ProductImage>
      <ProductImage title="상품 설명 이미지"></ProductImage>
    </WhiteWrapper>
  );
}
