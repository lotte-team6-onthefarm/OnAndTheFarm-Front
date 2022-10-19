import React, { useState } from 'react';
import { PageCol, PageRow, WhiteWrapper } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import Images from '../images/Images';
import PriceAmount from '../price&amount/PriceAmount';
import TitleDescription from '../title&description/TitleDescription';
import CategoryEtc from '../category&etc/CategoryEtc';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AddProductBtnWrapper,
  ProductManagementWrapper,
} from '../ProductManagement.style';
import { useMutation, useQuery } from 'react-query';
import {
  getProductSeller,
  putSellerProduct,
} from '../../../../../apis/seller/product';
import { BlueButton, GreenButton } from '../../../../common/Button.style';

export default function UpdateProduct() {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [productTotalStock, setProductTotalStock] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productDetailShort, setProductDetailShort] = useState('');
  const [productOriginPlace, setProductOriginPlace] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [productMainImages, setProductMainImages] = useState(''); // 바뀐 메인 이미지
  const [productImages, setProductImages] = useState([]); // 상품 상세 이미지
  const [delImageId, setDelImageId] = useState([]); // 삭제 리스트
  const [upNowMainImage, setUpNowMainImage] = useState(''); // 현재 메인 이미지

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
      upNowMainImage={upNowMainImage}
      productMainImages={productMainImages}
      setProductMainImages={setProductMainImages}
      productImages={productImages}
      setProductImages={setProductImages}
    />,
    <CategoryEtc
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      productCategory={productCategory}
      setProductCategory={setProductCategory}
      productOriginPlace={productOriginPlace}
      setProductOriginPlace={setProductOriginPlace}
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

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

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
    } else if (categoryId === '') {
      alert('상품 카테고리를 선택해주세요');
    } else if (productOriginPlace === '') {
      alert('원산지를 입력해주세요');
    } else {
      return true;
    }
    return false;
  };

  // useQuery
  const { isLoading: getProductSellerLoading, data: products } = useQuery(
    'productSeller',
    () => getProductSeller(id),
    {
      refetchOnMount: true,
      onSuccess: res => {
        setProductName(res.productName);
        setProductPrice(res.productPrice);
        setProductCategory(res.categoryName);
        setCategoryId(res.categoryId);
        setProductTotalStock(res.productTotalStock);
        setProductDetail(res.productDetail);
        setProductDetailShort(res.productDetailShort);
        setProductOriginPlace(res.productOriginPlace);
        setProductStatus(res.productStatus);
        setUpNowMainImage(res.productMainImgSrc);
        setProductImages(res.productImageList);
      },
      onError: {},
    },
  );
  // useMutation
  const { mutate: updateProduct } = useMutation(putSellerProduct, {
    onSuccess: () => {
      // 상품 리스트 페이지로 이동
      navigate('/seller/products');
    },
    onError: () => {
      console.log('에러');
    },
  });

  const updatePreviewBtn = () => {};
  const updateProductBtn = () => {
    // 상품 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      // 상품 image 데이터 추가
      formData.append('images', productMainImages);
      for (let i = 0; i < productImages.length; i++) {
        formData.append('images', productImages[i]);
      }
      console.log(productMainImages, productImages, submitData, '갈 데이터들');
      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
      // 상품 추가 API
      updateProduct(formData);
    }
  };

  return (
    <>
      {!getProductSellerLoading && (
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
          <AddProductBtnWrapper>
            <div>
              <BlueButton onClick={updatePreviewBtn} width="120px">
                미리보기
              </BlueButton>
              <GreenButton onClick={updateProductBtn} width="120px">
                상품수정
              </GreenButton>
            </div>
          </AddProductBtnWrapper>
        </>
      )}
    </>
  );
}
