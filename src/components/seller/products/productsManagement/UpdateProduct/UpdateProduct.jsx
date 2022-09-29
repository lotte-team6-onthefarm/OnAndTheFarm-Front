import React from 'react';
import { PageCol, PageRow, WhiteWrapper } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import TitleDescription from '../title&description/TitleDescription';
import CategoryEtc from '../category&etc/CategoryEtc';
import { useParams } from 'react-router-dom';
import { ProductManagementWrapper } from '../ProductManagement.style';

export default function UpdateProduct() {
  const param = useParams();
  const id = param.id;
  const innerComponents = [
    <TitleDescription id={id} />,
    <PriceAmount />,
    <Images />,
    <CategoryEtc />,
  ];
  return (
    <>
      <SellerTitle>상품 수정</SellerTitle>
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
    </>
  );
}
