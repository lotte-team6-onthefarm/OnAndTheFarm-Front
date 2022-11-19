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
  CartItemTotalPrice,
} from './CartItem.style';

export default function CartItemComp(props) {
  const [bChecked, setChecked] = useState(false);
  const [quantity, setQuantity] = useState(props.number);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    props.checkedItemHandler(target.id, target.checked, quantity);
  };

  const allCheckHandler = () => {
    if (props.likeListSize === props.checkedItems.size) {
      setChecked(props.isAllChecked);
    } else if (props.checkedItems.size === 0) {
      setChecked(props.isAllChecked);
    }
  };

  useEffect(() => allCheckHandler(), [props.checkedItems.size]);
  useEffect(() => props.changeCount(props.id, quantity), [quantity]);

  return (
    <CartItem>
      <input
        id={props.id}
        type="checkbox"
        checked={bChecked}
        onChange={e => checkHandler(e)}
      />
      <CartItemImg width="70px" height="70px" src={props.url} alt="" />
      <CartItemContent>
        <CartItemDetail>
          <p>{props.name}</p>
        </CartItemDetail>
        <CartItemNumber>
          <Counter value={quantity} setQuantity={setQuantity} />
        </CartItemNumber>
        <CartItemPrice>
          <p>{props.price.toLocaleString()}</p>
        </CartItemPrice>
        <CartItemTotalPrice>
          <div>
            {(Number(props.price) * Number(quantity)).toLocaleString()}
            <span>&nbsp;원</span>
          </div>
        </CartItemTotalPrice>
      </CartItemContent>
    </CartItem>
  );
}
