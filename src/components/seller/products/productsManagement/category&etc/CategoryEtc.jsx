import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductCategoryWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';
import CaetgoryList from './CaetgoryList';
import { HorizontalLine } from '../../../../common/HorizontalLine.style';
import { useEffect, useState } from 'react';
export default function CategoryEtc(props) {
  const productCategory = props.productCategory;
  const productOriginPlace = props.productOriginPlace;
  const setCategoryId = props.setCategoryId;
  const setProductOriginPlace = props.setProductOriginPlace;
  const [categoryList, setCategoryList] = useState('과일류');
  // Id : ~25 과일, ~33 곡물, ~64 야채
  useEffect(() => {
    if (props.categoryId > 25 && props.categoryId <= 33) {
      setCategoryList('곡물류');
    } else if (props.categoryId > 33) {
      setCategoryList('채소류');
    }
  }, []);

  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#B5E4CA" title="카테고리 및 원산지" />
      <ProductCategoryWrapper>
        <div className="title">카테고리</div>
        <CaetgoryList
          categoryId={props.categoryId}
          categoryList={categoryList}
          productCategory={productCategory}
          setCategoryId={setCategoryId}
        />
        {/* <UpdateCategoryList
          categoryId={categoryId}
          productCategory={productCategory}
          setCategoryId={setCategoryId}
        /> */}
      </ProductCategoryWrapper>
      <HorizontalLine color="#F2F2F2" />
      <ProductInput
        title="상품 원산지"
        placeholder={
          productOriginPlace !== '' ? productOriginPlace : '상품 원산지 입력'
        }
        setFunction={setProductOriginPlace}
      ></ProductInput>
    </WhiteWrapper>
  );
}
