import React from 'react';
import { ProductStatusWrapper } from '../ProductManagement.style';

export default function ProductStatus() {
  return (
    <ProductStatusWrapper>
      <div className="title">판매 상태</div>
      <div className="statusBtn">
        <div>판매중</div>
        <div>판매일시중지</div>
        <div>판매종료</div>
      </div>
    </ProductStatusWrapper>
  );
}
