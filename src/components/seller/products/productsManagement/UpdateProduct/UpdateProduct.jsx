import React, { useState } from 'react';
import { PageCol, PageRow, WhiteWrapper } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import TitleDescription from '../title&description/TitleDescription';
import CategoryEtc from '../category&etc/CategoryEtc';
import { useParams } from 'react-router-dom';
import { ProductManagementWrapper } from '../ProductManagement.style';
import { useQuery } from 'react-query';
import { getProductSeller } from '../../../../../apis/seller/product';

export default function UpdateProduct() {
  const param = useParams();
  const id = param.id;

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');
  const [productCategoryId, setProductCategoryId] = useState(0);
  const [productTotalStock, setProductTotalStock] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productDetailShort, setProductDetailShort] = useState('');
  const [productOriginPlace, setProductOriginPlace] = useState('');
  const [productDeliveryCompany, setProductDeliveryCompany] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [productMainImages, setProductMainImages] = useState('');
  const [productImages, setProductImages] = useState([]);

  const innerComponents = [
    <TitleDescription
      productName={productName}
      setProductName={setProductName}
      productDetail={productDetail}
      setProductDetail={setProductDetail}
      productDetailShort={productDetailShort}
      setProductDetailShort={setProductDetailShort}
    />,
    <PriceAmount
      productPrice={productPrice}
      setProductPrice={setProductPrice}
      productTotalStock={productTotalStock}
      setProductTotalStock={setProductTotalStock}
      productStatus={productStatus}
      setProductStatus={setProductStatus}
    />,
    <Images
      productMainImages={productMainImages}
      setProductMainImages={setProductMainImages}
      productImages={productImages}
      setProductImages={setProductImages}
    />,
    <CategoryEtc
      productCategoryId={productCategoryId}
      productCategory={productCategory}
      setProductCategory={setProductCategory}
      productOriginPlace={productOriginPlace}
      setProductOriginPlace={setProductOriginPlace}
      productDeliveryCompany={productDeliveryCompany}
      setProductDeliveryCompany={setProductDeliveryCompany}
    />,
  ];

  // useQuery
  const { isLoading: getProductSllerLoading, data: products } = useQuery(
    'productSeller',
    () => getProductSeller(id),
    {
      refetchOnMount: true,
      onSuccess: res => {
        setProductName(res.productName);
        setProductPrice(res.productPrice);
        setProductCategory(res.categoryName);
        setProductCategoryId(res.categoryId);
        setProductTotalStock(res.productTotalStock);
        setProductDetail(res.productDetail);
        setProductDetailShort(res.productDetailShort);
        setProductOriginPlace(res.productOriginPlace);
        setProductDeliveryCompany(res.productDeliveryCompany);
        setProductStatus(res.productStatus);
        setProductMainImages(res.productMainImages);
        setProductImages(res.productImages);
      },
      onError: {},
    },
  );
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
