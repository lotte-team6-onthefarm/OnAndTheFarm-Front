import React from 'react';
import { WhiteWrapper } from '../../../common/Box.style';
import SubTitle from '../../../common/SubTitle';
import { ProductCategoryWrapper } from '../ProductManagement.style';
import ProductInput from '../ProductInput';
import CaetgoryList from './CaetgoryList';
import { HorizontalLine } from '../../../../common/HorizontalLine.style';
export default function CategoryEtc(props) {
  const categoryId = props.categoryId;
  const productCategory = props.productCategory;
  const productOriginPlace = props.productOriginPlace;
  // const productDeliveryCompany = props.productDeliveryCompany;
  const setCategoryId = props.setCategoryId;
  const setProductOriginPlace = props.setProductOriginPlace;
  // const setProductDeliveryCompany = props.setProductDeliveryCompany;

  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#B5E4CA" title="카테고리 및 원산지" />
      <ProductCategoryWrapper>
        <div className="title">카테고리</div>
        <CaetgoryList
          categoryId={categoryId}
          productCategory={productCategory}
          setCategoryId={setCategoryId}
        />
      </ProductCategoryWrapper>
      <HorizontalLine color="#F2F2F2" />
      <ProductInput
        title="상품 원산지"
        placeholder={
          productOriginPlace !== '' ? productOriginPlace : '상품 원산지 입력'
        }
        setFunction={setProductOriginPlace}
      ></ProductInput>
      {/* <HorizontalLine color="#F2F2F2" /> */}
      {/* <ProductInput
        title="배송 업체"
        placeholder={
          productDeliveryCompany !== ''
            ? productDeliveryCompany
            : '배송 업체 입력'
        }
        setFunction={setProductDeliveryCompany}
      ></ProductInput> */}
    </WhiteWrapper>
  );
}
