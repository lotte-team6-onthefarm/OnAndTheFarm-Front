import React from 'react';
import { useMutation } from 'react-query';
import { postSellerProduct } from '../../../../../apis/seller/product';
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

  const data = {
    productName: 'sibal',
    productPrice: 1300000,
    productCategory: 1,
    productTotalStock: 100,
    productMainImgSrc: '',
    productDetail: ' sibal',
    productOriginPlcae: 'sibal',
    productDeliverCompany: 'HanJIn',
    productStatus: 'soldout',
    productDetailShort: 'sibaaaal',
    productRegisterDate: '202202202',
    productWishCount: '1242034',
    sellerId: 1,
  };

  // useMutation
  const { mutate: addProduct, isLoading: isAddingProduct } = useMutation(
    postSellerProduct,
    {
      onSuccess: (res, variables, context) => {
        console.log(res, '성공');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
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
          addProduct(data);
        }}
      >
        상품등록
      </button>
    </>
  );
}
