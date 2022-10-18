import React, { useEffect } from 'react'; 
import {
  OrderItem,
  OrderItemImg,
  OrderItemContent,
  OrderItemDetail,
  OrderItemNumber,
  OrderItemPrice,
} from './OrderItem.style';

export default function OrderItemComp(props) {

  return (
    <OrderItem>
      <OrderItemImg width="70px" height="70px" src={props.orderProductMainImg} alt="" />
      <OrderItemContent>
        <OrderItemDetail>
          <p>{props.productName}</p>
          <p>{props.orderProductStatus}</p>
        </OrderItemDetail>
        <p>{props.orderProductQty}개</p>
        <OrderItemNumber>
        </OrderItemNumber>
        <OrderItemPrice>
          <p>{props.orderProductPrice}원</p>
        </OrderItemPrice>
      </OrderItemContent>
    </OrderItem>
  );
}
