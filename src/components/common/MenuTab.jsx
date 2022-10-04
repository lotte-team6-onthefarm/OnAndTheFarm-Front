import React, { useState } from 'react';
import { DeliveryButtonWrapper } from '../seller/delivery/Delivery.style';

export default function MenuTab(props) {
  // usestate
  const [deliveryState, setDeliveryState] = useState('0'); // 0 : 배송처리 1 : 배송중 2 : 배송완료
  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };

  return (
    <DeliveryButtonWrapper state={deliveryState}>
      <div onClick={() => deliveryStateHandler('0')}>상품 설명</div>
      <div onClick={() => deliveryStateHandler('1')}>리뷰 목록</div>
      <div onClick={() => deliveryStateHandler('2')}>문의 사항</div>
    </DeliveryButtonWrapper>
  );
}
