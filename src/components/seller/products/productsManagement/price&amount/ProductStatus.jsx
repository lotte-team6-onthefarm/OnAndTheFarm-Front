import React from 'react';
import { ProductStatusWrapper } from '../ProductManagement.style';

// selling : 판매중
// soldout : 재고가 부족(모든 옵션의 재고가 부족한 경우)
// pause : 판매자가 판매를 일시 정지

export default function ProductStatus(props) {
  const setProductStatus = props.setProductStatus;
  const statusHandler = num => {
    if (num === 0) {
      setProductStatus('selling');
    } else if (num === 1) {
      setProductStatus('soldout');
    } else if (num === 2) {
      setProductStatus('pause');
    }
  };
  return (
    <ProductStatusWrapper>
      <div className="title">판매 상태</div>
      <div className="statusBtn">
        <div
          onClick={() => {
            statusHandler(0);
          }}
        >
          판매중
        </div>
        <div
          onClick={() => {
            statusHandler(1);
          }}
        >
          판매일시중지
        </div>
        <div
          onClick={() => {
            statusHandler(2);
          }}
        >
          판매종료
        </div>
      </div>
    </ProductStatusWrapper>
  );
}
