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
} from './CartItem.style';

export default function CartItemComp(props) {
  const [bChecked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(props.number);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    props.checkedItemHandler(target.id, target.checked);
  };

  const allCheckHandler = () => setChecked(props.isAllChecked);

  useEffect(() => allCheckHandler(), [props.isAllChecked]);
  return (
    <CartItem>
      <input id={props.id} type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} />
      <CartItemImg width="70px" height="70px" src={props.url} alt="" />
      <CartItemContent>
        <CartItemDetail>
          <p>{props.name}</p>
        </CartItemDetail>
        <CartItemNumber>
          <Counter value={props.number} setQuantity={setQuantity}/>
        </CartItemNumber>
        <CartItemPrice>
          <p>{props.price}</p>
        </CartItemPrice>
      </CartItemContent>
    </CartItem>
  );
}
