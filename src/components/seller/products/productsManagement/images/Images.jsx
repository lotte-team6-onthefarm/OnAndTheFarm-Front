import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import ProductImage from './ProductImage';
export default function Images(props) {
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#CABDFF" title="상품 이미지" />
      <ProductImage
        title="메인 이미지"
        type="main"
        setImages={props.setProductMainImages}
      />
      <ProductImage
        title="상품 설명 이미지"
        type="product"
        setImages={props.setProductImages}
      />
    </WhiteWrapper>
  );
}
