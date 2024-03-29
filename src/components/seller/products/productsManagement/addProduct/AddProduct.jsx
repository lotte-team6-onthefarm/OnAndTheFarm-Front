import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { postSellerProduct } from '../../../../../apis/seller/product';
import { BlueButton, GreenButton } from '../../../../common/Button.style';
import { PageCol, PageRow } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import CategoryEtc from '../category&etc/CategoryEtc';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import {
  AddProductBtnWrapper,
  ProductManagementWrapper,
} from '../ProductManagement.style';
import TitleDescription from '../title&description/TitleDescription';

export default function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [categoryId, setCategoryId] = useState(1);
  const [productTotalStock, setProductTotalStock] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productDetailShort, setProductDetailShort] = useState('');
  const [productOriginPlace, setProductOriginPlace] = useState('');
  const [productStatus, setProductStatus] = useState('selling');
  const [productMainImages, setProductMainImages] = useState('');
  const [productImages, setProductImages] = useState([]);

  const queryClient = useQueryClient();

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  // InnerComponent
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
    <CategoryEtc
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      productOriginPlace={productOriginPlace}
      setProductOriginPlace={setProductOriginPlace}
    />,
    <Images
      productMainImages={productMainImages}
      setProductMainImages={setProductMainImages}
      productImages={productImages}
      setProductImages={setProductImages}
    />,
  ];
  const submitData = {
    // 상품 정보 데이터 객체화
    productName: productName,
    productPrice: productPrice,
    categoryId: categoryId,
    productTotalStock: productTotalStock,
    productDetail: productDetail,
    productOriginPlace: productOriginPlace,
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
    } else if (productPrice === '') {
      alert('가격을 입력해주세요');
    } else if (productTotalStock === '') {
      alert('상품 재고를 입력해주세요');
    } else if (productStatus === '') {
      alert('판매상태를 선택해주세요');
    } else if (productMainImages === '') {
      alert('상품 메인 이미지를 등록해주세요');
    } else if (productImages.length === 0) {
      alert('상품 상세 이미지를 선택해주세요');
    } else if (categoryId === '') {
      alert('상품 카테고리를 선택해주세요');
    } else if (productOriginPlace === '') {
      alert('원산지를 입력해주세요');
    } else {
      return true;
    }
    return false;
  };

  const actionImgCompress = async (fileSrc, data) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.5,
    };
    try {
      // 압축 결과
      let compressedFile;
      // Feed Image 데이터 추가
      compressedFile = await imageCompression(productMainImages[0], options);
      formData.append('images', compressedFile);

      for (let i = 0; i < productImages.length; i++) {
        compressedFile = await imageCompression(productImages[i], options);
        formData.append('images', compressedFile);
      }

      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );

      // 상품 추가 API
      addProduct(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const addProductBtn = () => {
    if (productStatus === 'soldout') {
      // 판매상태가 soldout이면 재고 0으로 수정
      setProductTotalStock(0);
    }
    // 상품 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      actionImgCompress();
    }
  };

  const addPreviewBtn = () => {};
  // useMutation
  const { mutate: addProduct } = useMutation(postSellerProduct, {
    onSuccess: () => {
      // 상품 리스트 페이지로 이동
      queryClient.invalidateQueries('sellerProducts');
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
      <AddProductBtnWrapper>
        <div>
          <BlueButton onClick={addPreviewBtn} width="120px">
            미리보기
          </BlueButton>
          <GreenButton onClick={addProductBtn} width="120px">
            상품등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </>
  );
}
