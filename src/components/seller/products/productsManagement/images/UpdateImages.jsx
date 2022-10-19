import React from 'react';
import { HorizontalLine } from '../../../../common/HorizontalLine.style';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import UpdateProductImage from './UpdateProductImage';
export default function UpdateImages(props) {
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#CABDFF" title="상품 이미지" />
      <UpdateProductImage
        title="메인 이미지"
        type="main"
        upNowMainImage={props.upNowMainImage}
        productMainImages={props.productMainImages}
        setImages={props.setProductMainImages}
      />
      <HorizontalLine color="#F2F2F2" />
      <UpdateProductImage
        title="상품 설명 이미지"
        type="product"
        productImages={props.productImages}
        setProductImages={props.setProductImages}
      />
    </WhiteWrapper>
  );
}
