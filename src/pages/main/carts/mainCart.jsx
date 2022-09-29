import React from 'react';
import { useState } from 'react';
import CartItemComp from '../../../components/main/cart/CartItem';
import { Button } from '../../../components/common/Button';
import {
  CartContentDiv,
  CartListDiv,
  CartPriceDiv,
  CartListHeader,
  CartItems,
  CartPriceHeader,
  CartPriceRow,
  CartPriceTotal,
} from './mainCart.style';

export default function MainCart() {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [allChecked, setChecked] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    if (items.length === checkedItems.size) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(items.map(({ id }) => String(id))));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(setCheckedItems);
      setIsAllChecked(false);
    }
  };

  const checkHandler = ({ target }) => {
    setChecked(!allChecked);
    allCheckedHandler(target.checked);
  };

  const items = [
    {
      id: 1,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize',
    },
    {
      id: 2,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize',
    },
    {
      id: 3,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize',
    },
    {
      id: 4,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277222/PFFB4AEF95EF2C68DD7CBA7F847E5C9443123A4929F8CB291AE79280B5D67F84E/file/dims/optimize',
    },
  ];

  return (
    <CartContentDiv>
      <CartListDiv>
        <p className="subject">장바구니</p>
        <CartListHeader>
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              checked={allChecked}
              onChange={e => checkHandler(e)}
              style={{ margin: 'auto' }}
            />
            <p style={{ margin: 'auto 20px' }}>전체선택</p>
          </div>
          <div>
            <Button text="계속 담아두기" color="#40AA54" width="130px"></Button>
            <Button
              text="선택삭제"
              color="#40AA54"
              width="130px"
              margin="auto auto auto 20px"
            ></Button>
          </div>
        </CartListHeader>
        <hr />
        <CartItems>
          {items.map((item, index) => {
            return (
              <CartItemComp
                key={index}
                id={item.id}
                url={item.url}
                name={item.name}
                number={item.number}
                price={item.price}
                checkedItemHandler={checkedItemHandler}
                isAllChecked={isAllChecked}
              ></CartItemComp>
            );
          })}
        </CartItems>
      </CartListDiv>
      <CartPriceDiv>
        <CartPriceHeader>결제예정금액</CartPriceHeader>
        <CartPriceRow>
          <p>상품금액</p>
          <p>000원</p>
        </CartPriceRow>
        <CartPriceRow>
          <p>할인금액</p>
          <p>000원</p>
        </CartPriceRow>
        <CartPriceRow>
          <p>배송비</p>
          <p>000원</p>
        </CartPriceRow>
        <CartPriceTotal>
          <span>20000</span>원
        </CartPriceTotal>
        <Button
              text="주문하기"
              color="#40AA54"
              width="130px"
              margin="0 0 0 150px"
            ></Button>
      </CartPriceDiv>
    </CartContentDiv>
  );
}
