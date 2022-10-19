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
import Product from '../../../components/common/Product';
import InputSearch from '../../../components/common/SearchInput';
import { getProducts } from '../../../apis/user/product';
import Pagination from '../../../components/common/Pagination';

export default function MainProductList() {
  const filterList = ['최신순', '낮은가격순', '높은가격순', '높은판매순'];

  const [searchWord, setSearchWord] = useState('');
  const [productList, setProductList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const CATEGORY = [
    { id: 0, name: '전체보기' },
    { id: 1, name: '바나나/오렌지/수입과일' },
    { id: 2, name: '단감/복숭아/딸기' },
    { id: 3, name: '사과/참외' },
    { id: 4, name: '호두/땅콩/견과류' },
    { id: 5, name: '포도/배/키위' },
    { id: 6, name: '밤/대추/곶감/건과일' },
    { id: 7, name: '냉동과일' },
    { id: 8, name: '토마토/메론' },
    { id: 9, name: '밀감/수박/자두' },
    { id: 10, name: '기타/국산과일' },
  ];

  let data = {
    url: 'all/newest/',
    page: 0,
  };

  useEffect(() => {
    getProductList(data);
  }, []);

  const test = e => {
    setSelectedFilter(e.target.value);
    if (e.target.value === '최신순') {
      data = {
        url: 'all/newest/',
        page: 0,
      };
      getProductList(data);
    } else if (e.target.value === '낮은가격순') {
      data = {
        url: 'orderby/lowprice/',
        page: 0,
      };
      getProductList(data);
    } else if (e.target.value === '높은가격순') {
      data = {
        url: 'orderby/highprice/',
        page: 0,
      };
      getProductList(data);
    } else if (e.target.value === '높은판매순') {
      data = {
        url: 'orderby/soldcount/',
        page: 0,
      };
      getProductList(data);
    }
  };

  const { mutate: getProductList, isLoading: isGetProductList } = useMutation(
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
        </CartPriceHeader>
        {CATEGORY.map((item, index) => {
          return <CartPriceRow key={index} idx={index} selectedCategory={selectedCategory} onClick={()=>setSelectedCategory(index)}>{item.name}</CartPriceRow>;
        })}
      </ProductCategoryDiv>
      <CartListDiv>
        {/* <InputSearch
          id="search"
          value={searchWord}
          width="400px"
          onChange={e => setSearchWord(e.target.value)}
          placeholder="원하시는 상품을 검색해주세요"
          type="text"
        ></InputSearch> */}

        <CartListHeader>
          <p className="subject">{CATEGORY[selectedCategory].name}</p>
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
        <ProductListDiv>
          {productList.map((product, index) => {
            return (
              <Product key={index} product={product} width="170px"></Product>
            );
          })}
        </ProductListDiv>
      <Pagination value={currentPage} setPage={setCurrentPage} ></Pagination>
      </CartListDiv>
    </CartContentDiv>
  );
}
