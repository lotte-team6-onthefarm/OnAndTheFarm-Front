import React, { useEffect } from 'react';
import { useState } from 'react';
import Counter from '../../common/Counter';
import {
  CartItem,
  CartItemImg,
  CartItemContent,
  CartItemDetail,
  CartItemNumber,
  CartItemPrice,
} from './ProductList.style';

export default function ProductListComp(props) {
  const [quantity, setQuantity] = useState(props.number);


  return (
    <CartItem>
      <CartItemImg width="70px" height="70px" src={props.url} alt="" />
      <CartItemContent>
        <CartItemDetail>
          <p>{props.name}</p>
        </CartItemDetail>
        <CartItemNumber>
          {quantity}개
        </CartItemNumber>
        <CartItemPrice>
          <p>{props.price}</p>
        </CartItemPrice>
        <CartItemPrice>
          <p>{Number(props.price)*Number(quantity)}</p>
        </CartItemPrice>
      </CartItemContent>
    </CartItem>
  );
}
