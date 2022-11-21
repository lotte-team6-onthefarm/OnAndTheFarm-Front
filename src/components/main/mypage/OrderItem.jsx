import React, { useEffect } from 'react';
import { changeStatusName } from '../../../utils/commonFunction';
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
      <OrderItemImg
        width="70px"
        height="70px"
        src={props.orderProductMainImg}
        alt=""
      />
      <OrderItemContent>
        <OrderItemDetail>
          <p>{props.productName}</p>
          <p>{changeStatusName(props.orderProductStatus)}</p>
        </OrderItemDetail>
        <p className="orderItemNumber">{props.orderProductQty.toLocaleString()}개</p>
        <OrderItemNumber></OrderItemNumber>
        <OrderItemPrice>
          <p>{props.orderProductPrice.toLocaleString()}원</p>
        </OrderItemPrice>
      </OrderItemContent>
    </OrderItem>
  );
}
