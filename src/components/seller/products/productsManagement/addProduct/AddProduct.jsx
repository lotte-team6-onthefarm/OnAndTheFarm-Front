import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postSellerProduct } from '../../../../../apis/seller/product';
import { PageCol, PageRow } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import CategoryEtc from '../category&etc/CategoryEtc';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import { ProductManagementWrapper } from '../ProductManagement.style';
import TitleDescription from '../title&description/TitleDescription';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');
  const [productTotalStock, setProductTotalStock] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productDetailShort, setProductDetailShort] = useState('');
  const [productOriginPlace, setProductOriginPlace] = useState('');
  const [productDeliveryCompany, setProductDeliveryCompany] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [productMainImages, setProductMainImages] = useState('');
  const [productImages, setProductImages] = useState([]);

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  // InnerComponent
  const innerComponents = [
    <TitleDescription
      setProductName={setProductName}
      setProductDetail={setProductDetail}
      setProductDetailShort={setProductDetailShort}
    />,
    <PriceAmount
      setProductPrice={setProductPrice}
      setProductTotalStock={setProductTotalStock}
      setProductStatus={setProductStatus}
    />,
    <Images
      setProductMainImages={setProductMainImages}
      setProductImages={setProductImages}
    />,
    <CategoryEtc
      setProductCategory={setProductCategory}
      setProductOriginPlace={setProductOriginPlace}
      setProductDeliveryCompany={setProductDeliveryCompany}
    />,
  ];

  const submitData = {
    // 상품 정보 데이터 객체화
    productName: productName,
    productPrice: productPrice,
    productCategory: productCategory,
    productTotalStock: productTotalStock,
    productDetail: productDetail,
    productOriginPlace: productOriginPlace,
    productDeliveryCompany: productDeliveryCompany,
    productStatus: productStatus,
    productDetailShort: productDetailShort,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (productName === '') {
      alert('상품 이름을 입력해주세요');
    } else if (productDetailShort === '') {
      alert('상품 한줄 설명을 입력해주세요');
    } else if (productDetail === '') {
      alert('상품 상세정보를 입력해주세요');
    } else if (productPrice === 0) {
      alert('가격을 입력해주세요');
    } else if (productTotalStock === '') {
      alert('상품 재고를 입력해주세요');
    } else if (productStatus === '') {
      alert('판매상태를 선택해주세요');
    } else if (productMainImages === '') {
      alert('상품 메인 이미지를 등록해주세요');
    } else if (productImages.length === 0) {
      alert('상품 상세 이미지를 선택해주세요');
    } else if (productCategory === '') {
      alert('상품 카테고리를 선택해주세요');
    } else if (productOriginPlace === '') {
      alert('원산지를 입력해주세요');
    } else if (productDeliveryCompany === '') {
      alert('배송업체를 입력해주세요');
    } else {
      return true;
    }
    return false;
  };

  const addProductBtn = () => {
    // 상품 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      // 상품 image 데이터 추가
      formData.append('images', productMainImages[0]);
      for (let i = 0; i < productImages.length; i++) {
        formData.append('images', productImages[i]);
        console.log(productImages[i], ` productImages[${i}]`);
      }
      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
      // 상품 추가 API
      addProduct(formData);
    }
  };
  // useMutation
  const { mutate: addProduct } = useMutation(postSellerProduct, {
    onSuccess: () => {
      // 상품 리스트 페이지로 이동
      navigate('/seller/products');
    },
    onError: () => {
      console.log('에러');
    },
  });

  // useNavigate
  const navigate = useNavigate();
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
      <button onClick={addProductBtn}>상품등록</button>
    </>
  );
}
