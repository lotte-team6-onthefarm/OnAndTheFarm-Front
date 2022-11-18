import React from 'react';
import { useMutation, useQuery } from 'react-query';
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
import { getProducts, getSearchProducts } from '../../../apis/user/product';
import Pagination from '../../../components/common/Pagination';
import InputSearch from '../../../components/common/SearchInput';

export default function MainProductList() {
  const filterList = [
    { id: 0, name: '최신순', value: '/newest' },
    { id: 1, name: '낮은가격순', value: '/lowprice' },
    { id: 2, name: '높은가격순', value: '/highprice' },
    { id: 3, name: '높은판매순', value: '/soldcount' },
  ];

  const CATEGORY = [
    { id: 0, name: '전체보기', value: '/all' },
    { id: 1, name: '바나나/오렌지/수입과일', value: '/banana' },
    { id: 2, name: '단감/곶감', value: '/persimmon' },
    { id: 3, name: '사과/참외/배', value: '/apple' },
    { id: 4, name: '토마토/메론', value: '/tomato' },
    { id: 5, name: '밀감/수박/자두', value: '/mandarin' },
    { id: 6, name: '망고/열대과일', value: '/mango' },
    { id: 7, name: '딸기/블루베리/키위', value: '/strawberry' },
    { id: 8, name: '고구마/감자', value: '/sweetpotato' },
    { id: 9, name: '양파/마늘/생강', value: '/onion' },
    { id: 10, name: '백미', value: '/rice' },
    { id: 11, name: '찹쌀/현미/흑미', value: '/blackrice' },
    { id: 12, name: '당근/우엉/연근/마', value: '/carrot' },
    { id: 13, name: '배추/무/김장재료', value: '/cabbage' },
    { id: 14, name: '포도/복숭아', value: '/grape' },
  ];

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  let categoryNum = 0;
  if (category === 'pear') {
    categoryNum = 1;
  } else if (category === 'apple') {
    categoryNum = 2;
  } else if (category === 'banana') {
    categoryNum = 3;
  } else if (category === 'all') {
    categoryNum = 4;
  }

  // const [searchWord, setSearchWord] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categoryNum);
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setIsSearch] = useState(false);
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
      enabled: !isSearch,
    },
  );
  const {
    isLoading: isSearchLoading,
    refetch: searchProduct,
    isFetching: isSearchFetching,
  } = useQuery(
    ['getSearchProducts', searchValue, nowPage],
    () => getSearchProducts(searchWord, nowPage),
    {
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
        setSearchData(res);
        setIsSearch(true);
      },
      onError: () => {},
      enabled: isSearch,
    },
  );

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    if (searchWord === '') {
      setIsSearch(false);
      return;
    }
    setIsSearch(true);
    setNowPage(0);
    setSearchValue(searchWord);
    searchProduct({
      searchText: searchWord,
      pageNumber: 0,
    });
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
        <div style={{ marginBottom: '20px' }}>
          <InputSearch
            id="search"
            value={searchWord}
            width="400px"
            onKeyPress={onKeyPress}
            onChange={e => {
              setSearchWord(e.target.value);
            }}
            placeholder="원하시는 상품을 검색해주세요"
            type="text"
            search={search}
          ></InputSearch>
        </div>
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
        {isSearch ? (
          <ProductListDiv>
            {!isSearchLoading &&
              !isSearchFetching &&
              searchData.productSearchResponses.map((product, index) => {
                return (
                  <Product
                    key={index}
                    product={product}
                    width="170px"
                  ></Product>
                );
              })}
          </ProductListDiv>
        ) : (
          <ProductListDiv>
            {!isGetProductList &&
              productList.productSelectionResponses.map((product, index) => {
                return (
                  <Product
                    key={index}
                    product={product}
                    width="170px"
                  ></Product>
                );
              })}
          </ProductListDiv>
        )}
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
