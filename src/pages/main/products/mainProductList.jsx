import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
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
import { getProducts } from '../../../apis/user/product';
import Pagination from '../../../components/common/Pagination';
import { useParams } from 'react-router-dom';

export default function MainProductList() {
  const filterList = [
    { id: 0, name: '최신순', value: '/newest' },
    { id: 1, name: '낮은가격순', value: '/lowprice' },
    { id: 2, name: '높은가격순', value: '/highprice' },
    { id: 3, name: '높은판매순', value: '/soldcount' },
  ];

  const CATEGORY = [
    { id: 0, name: '전체보기', value: '/all' },
    { id: 1, name: '배,단감', value: '/pear' },
    { id: 2, name: '사과,토마토', value: '/apple' },
    { id: 3, name: '바나나,포도', value: '/banana' },
    { id: 4, name: '호두/땅콩/견과류', value: '/all' },
    { id: 5, name: '포도/배/키위', value: '/all' },
    { id: 6, name: '밤/대추/곶감/건과일', value: '/all' },
    { id: 7, name: '냉동과일', value: '/all' },
    { id: 8, name: '토마토/메론', value: '/all' },
    { id: 9, name: '밀감/수박/자두', value: '/all' },
    { id: 10, name: '기타/국산과일', value: '/all' },
  ];

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  let categoryNum = 0
  if (category === 'pear') {
    categoryNum =1;
  } else if (category === 'apple') {
    categoryNum =2;
  } else if (category === 'banana') {
    categoryNum =3;
  } else if (category === 'all') {
    categoryNum =4;
  }

  // const [searchWord, setSearchWord] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoryNum);
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: isGetProductList,
    refetch: getProductListRefetch,
    data: productList,
  } = useQuery(
    ['getProducts', selectedCategory, selectedFilter, nowPage],
    () =>
      getProducts({
        url: `${CATEGORY[selectedCategory].value}${filterList[selectedFilter].value}`,
        page: nowPage,
      }),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const test = () => {
    console.log(selectedCategory);
    console.log(selectedFilter);
  };

  return (
    <CartContentDiv>
      <ProductCategoryDiv>
        <CartPriceHeader>
          <h2>카테고리</h2>
        </CartPriceHeader>
        {CATEGORY.map((item, index) => {
          return (
            <CartPriceRow
              key={index}
              idx={index}
              selectedCategory={selectedCategory}
              onClick={() => {
                setSelectedFilter(0);
                setSelectedCategory(index);
                setNowPage(0);
              }}
            >
              {item.name}
            </CartPriceRow>
          );
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
            <select
              onChange={e => setSelectedFilter(e.target.value)}
              value={selectedFilter}
            >
              {filterList.map((filter, idx) => {
                return (
                  <option value={idx} key={idx}>
                    {filter.name}
                  </option>
                );
              })}
            </select>
          </div>
        </CartListHeader>
        <ProductListDiv>
          {!isGetProductList &&
            productList.productSelectionResponses.map((product, index) => {
              return (
                <Product key={index} product={product} width="170px"></Product>
              );
            })}
        </ProductListDiv>
        {totalPage !== 0 && (
          <Pagination
            nowPage={nowPage + 1}
            totalPage={totalPage}
            selectedCategory={selectedCategory}
            selectedFilter={selectedFilter}
            productList={productList}
            setPage={setNowPage}
          ></Pagination>
        )}
      </CartListDiv>
    </CartContentDiv>
  );
}
