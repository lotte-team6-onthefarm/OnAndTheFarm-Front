import React from 'react';
import { useState } from 'react';
import CartItemComp from '../../../components/main/cart/CartItem';
import { Button } from '../../../components/common/Button';
import {
  CartContentDiv,
  CartListDiv,
  CartListHeader,
  CartPriceHeader,
  CartPriceRow,
  ProductCategoryDiv,
  ProductListDiv,
} from './mainProductList.style';
import { CATEGORY } from '../../../assets/category/category';
import Product from '../../../components/common/Product';
import InputSearch from '../../../components/common/SearchInput';

export default function MainProductList() {
  const [searchWord, setSearchWord] = useState('');

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
    {
      id: 5,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize',
    },
    {
      id: 6,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize',
    },
    {
      id: 7,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize',
    },
    {
      id: 8,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277222/PFFB4AEF95EF2C68DD7CBA7F847E5C9443123A4929F8CB291AE79280B5D67F84E/file/dims/optimize',
    },
    {
      id: 9,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize',
    },
    {
      id: 10,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize',
    },
    {
      id: 11,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize',
    },
    {
      id: 12,
      name: '사미헌한끼 갈비탕 5팩 1팩700g*5',
      price: '20000',
      number: '3',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277222/PFFB4AEF95EF2C68DD7CBA7F847E5C9443123A4929F8CB291AE79280B5D67F84E/file/dims/optimize',
    },
  ];

  const filters = ['최신순', '가격순', '리뷰순'];

  return (
    <CartContentDiv>
      <ProductCategoryDiv>
        <CartPriceHeader>
          <h2>카테고리</h2>
          <hr />
          <h5>과일</h5>
        </CartPriceHeader>
        {CATEGORY.fruits.map((item, index) => {
          return <CartPriceRow key={index}>{item}</CartPriceRow>;
        })}
      </ProductCategoryDiv>
      <CartListDiv>
        <InputSearch
          id="search"
          value={searchWord}
          width="400px"
          onChange={e => setSearchWord(e.target.value)}
          placeholder="원하시는 상품을 검색해주세요"
          type="text"
        ></InputSearch>
        <p className="subject">과일</p>
        <CartListHeader>
          <div style={{ display: 'flex' }}></div>
          <div>
            <select>
              {filters.map((filter, idx) => {
                return (
                  <option value={filter} key={idx}>
                    {filter}
                  </option>
                );
              })}
            </select>
          </div>
        </CartListHeader>
        <hr />
        <ProductListDiv>
          {items.map((item, index) => {
            return <Product key={index} id={item.id} width="170px"></Product>;
          })}
        </ProductListDiv>
      </CartListDiv>
    </CartContentDiv>
  );
}
