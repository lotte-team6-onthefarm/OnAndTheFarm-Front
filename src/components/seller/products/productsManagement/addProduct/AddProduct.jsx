import React from 'react';
import { uploadPost } from '../../../../../apis/seller/product';
import { PageCol, PageRow } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import CategoryEtc from '../category&etc/CategoryEtc';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import { ProductManagementWrapper } from '../ProductManagement.style';
import TitleDescription from '../title&description/TitleDescription';

export default function AddProduct() {
  const innerComponents = [
    <TitleDescription />,
    <PriceAmount />,
    <Images />,
    <CategoryEtc />,
  ];
  return (
    <>
      <SellerTitle>상품 등록</SellerTitle>
      {innerComponents.map((innerComponent, idx) => {
        return (
          <PageRow key={idx}>
            <PageCol width="100%">
              <ProductManagementWrapper>
                {innerComponent}
              </ProductManagementWrapper>
            </PageCol>
          </PageRow>
        );
      })}
      <button
        onClick={() => {
          uploadPost();
        }}
      >
        상품등록
      </button>
    </>
  );
}
