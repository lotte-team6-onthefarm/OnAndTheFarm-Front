import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
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
import { getProducts } from '../../../apis/user/product';

export default function MainProductList() {
  const filterList = ['최신순', '낮은가격순', '높은가격순', '높은판매순'];

  const [searchWord, setSearchWord] = useState('');
  const [productList, setProductList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  let data = {
    url: 'all/newest/',
    page: 0,
  };

  useEffect(() => {
    getProduct(data);
  }, []);

  const test = e => {
    setSelectedFilter(e.target.value);
    if (e.target.value === '최신순') {
      data = {
        url: 'all/newest/',
        page: 0,
      };
      getProduct(data);
    } else if (e.target.value === '낮은가격순') {
      data = {
        url: 'orderby/lowprice/',
        page: 0,
      };
      getProduct(data);
    } else if (e.target.value === '높은가격순') {
      data = {
        url: 'orderby/highprice/',
        page: 0,
      };
      getProduct(data);
    } else if (e.target.value === '높은판매순') {
      data = {
        url: 'orderby/soldcount/',
        page: 0,
      };
      getProduct(data);
    }
  };

  const { mutate: getProduct, isLoading: isGetProduct } = useMutation(
    getProducts,
    {
      onSuccess: res => {
        setProductList(res.data);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

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
            <select onChange={test} value={selectedFilter}>
              {filterList.map((filter, idx) => {
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
          {productList.map((product, index) => {
            return (
              <Product key={index} product={product} width="170px"></Product>
            );
          })}
        </ProductListDiv>
      </CartListDiv>
    </CartContentDiv>
  );
}
