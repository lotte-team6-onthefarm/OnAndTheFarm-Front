import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../../common/Button';
import Counter from '../../common/Counter';
import {
  CartItem,
  CartItemImg,
  CartItemContent,
  CartItemDetail,
  CartItemNumber,
  CartItemPrice,
} from './OrderProductComp.style';

export default function OrderProductComp(props) {
  const [quantity, setQuantity] = useState(props.number);

  const buttonClick = () =>{
    props.modalChange()
    props.setSelectData(props.id)
  }

  return (
    <CartItem>
      <CartItemImg width="70px" height="70px" src={props.url} alt="" />
      <CartItemContent>
        <CartItemDetail>
          <p>{props.name}</p>
        </CartItemDetail>
        <CartItemNumber>{quantity}개</CartItemNumber>
        <CartItemPrice>
          <p>{props.price}</p>
        </CartItemPrice>
        <CartItemPrice>
          <p>{props.status}</p>
          <p>{props.orderstatus}</p>
        </CartItemPrice>
        <CartItemPrice>
        {props.status === 'activated' &&
          props.orderstatus === 'deliveryCompleted' ? (
            <Button
              text="환불요청"
              color="#3288E5"
              margin="auto auto 20px"
              width="150px"
              onClick={buttonClick}
            ></Button>
          ) : (
            ''
          )}{props.status === 'activated' &&
          (props.orderstatus === 'deliveryProgress' || props.orderstatus === 'activated') ? (
            <Button
              text="주문취소"
              color="#3288E5"
              margin="auto auto 20px"
              width="150px"
              onClick={buttonClick}
            ></Button>
          ) : (
            ''
          )}
        </CartItemPrice>
      </CartItemContent>
    </CartItem>
  );
}
