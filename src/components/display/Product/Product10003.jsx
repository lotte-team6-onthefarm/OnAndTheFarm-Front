import React from 'react';
import { useQuery } from 'react-query';
import { getMainProduct } from '../../../apis/user/product';
import Product from '../../common/Product';
import { PopularProductsDiv } from '../../main/products/MainProductsPopular.style';
import ProductComp from './ProductComp';

export default function Product10003() {
  const productList = [
    {
      productId: 100000,
      productName: '포도',
      productPrice: 10000,
      productMainImgSrc:
        'https://lotte-06-s3-db.s3.ap-southeast-1.amazonaws.com/product/10de87ad-fc10-4b34-95de-c68a75b36f69',
      productSoldCount: 0,
      sellerName: '김포도농장',
    },
    {
      productId: 100001,
      productName: '수박',
      productPrice: 10000,
      productMainImgSrc:
        'https://lotte-06-s3-db.s3.ap-southeast-1.amazonaws.com/product/6ad8fd56-ff01-4cb4-ac78-50d4c09b85f8',
      productSoldCount: 0,
      sellerName: '박수박농장',
    },
    {
      productId: 100002,
      productName: '오렌지',
      productPrice: 2000,
      productMainImgSrc:
        'https://lotte-06-s3-db.s3.ap-southeast-1.amazonaws.com/product/7eb9cbe0-86b1-44d6-a083-70eb367cf755',
      productSoldCount: 0,
      sellerName: '오렌지과즙팡팡',
    },
    {
      productId: 100003,
      productName: '네번쨰',
      productPrice: 11111,
      productMainImgSrc:
        'https://lotte-06-s3-db.s3.ap-southeast-1.amazonaws.com/product/45500976-ab7b-41d7-af22-6ab1b93a233f',
      productSoldCount: 0,
      sellerName: '네번째농장',
    },
  ];

  return (
    <>
      <PopularProductsDiv>
        {productList.map((product, index) => {
          return (
            <ProductComp
              key={index}
              product={product}
              padding="0 5px"
            ></ProductComp>
          );
        })}
      </PopularProductsDiv>
    </>
  );
}
