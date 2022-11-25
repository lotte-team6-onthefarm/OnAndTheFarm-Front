import React, { useState } from 'react';
import { PageCol, PageRow } from '../../../common/Box.style';
import { SellerTitle } from '../../../common/Title.style';
import PriceAmount from '../price&amount/PriceAmount';
import TitleDescription from '../title&description/TitleDescription';
import CategoryEtc from '../category&etc/CategoryEtc';
import imageCompression from 'browser-image-compression';
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
import { GreenButton } from '../../../../common/Button.style';
import UpdateImages from '../images/UpdateImages';
import { useEffect } from 'react';

export default function UpdateProduct() {
  const param = useParams();
  const navigate = useNavigate();
  const id = param.id;

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [productTotalStock, setProductTotalStock] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [productDetailShort, setProductDetailShort] = useState('');
  const [productOriginPlace, setProductOriginPlace] = useState('');
  const [productStatus, setProductStatus] = useState('');
  const [uploadMainImages, setUploadMainImages] = useState(''); // 바뀐 메인 이미지
  const [productImages, setProductImages] = useState([]); // 상품 상세 이미지
  const [delImageId, setDelImageId] = useState([]); // 삭제 리스트
  const [s3ImageId, setS3ImageId] = useState([]); // 바뀐 디테일 이미지
  const [serverMainImage, setServerMainImage] = useState(''); // 현재 메인 이미지
  // useQuery
  const { isLoading: getProductSellerLoading, data: products } = useQuery(
    ['productSeller', id],
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
        setUploadMainImages(res.productMainImgSrc);
        setServerMainImage(res.productMainImgSrc);
        setProductImages(res.productImageList);
        setS3ImageId(
          res.productImageList.map(image => {
            return image.productImgId;
          }),
        );
      },
      onError: {},
    },
  );
  useEffect(() => {
    // 상품재고 상태 바뀔 때 마다 데이터 처리해주기
    if (productStatus === 'soldout') {
      setProductTotalStock(0);
    } else if (productStatus === 'selling') {
      setProductTotalStock(products.productTotalStock);
    }
  }, [productStatus]);
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
      productCategory={productCategory}
      setProductCategory={setProductCategory}
      productOriginPlace={productOriginPlace}
      setProductOriginPlace={setProductOriginPlace}
    />,
    <UpdateImages
      upNowMainImage={serverMainImage} // 서버 이미지
      setUpNowMainImage={setServerMainImage} // 서버 이미지
      productMainImages={uploadMainImages} // 업로드 할 이미지
      setProductMainImages={setUploadMainImages} // 업로드 할 이미지
      productImages={productImages} // 상품 상세 이미지
      setProductImages={setProductImages} // 상품 상세 이미지
      delImageId={delImageId} // 상품 상세 삭제 리스트
      setDelImageId={setDelImageId} // 상품 상세 삭제 리스트
    />,
  ];

  const submitData = {
    // 상품 정보 데이터 객체화
    productId: id,
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
    } else if (productPrice === '') {
      alert('가격을 입력해주세요');
    } else if (productTotalStock === '') {
      alert('상품 재고를 입력해주세요');
    } else if (productStatus === '') {
      alert('판매상태를 선택해주세요');
    } else if (uploadMainImages.length === 0) {
      alert('상품 메인 이미지를 등록해주세요');
    } else if (productImages.length === 0) {
      alert('상품 상세 이미지를 선택해주세요');
    } else if (categoryId === 0) {
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
      // 상품 image 데이터 추가
      if (uploadMainImages !== serverMainImage) {
        // 메인 이미지가 바꼈으면 추가
        compressedFile = await imageCompression(uploadMainImages[0], options);
        formData.append('mainImage', compressedFile);
      }
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
      updateProduct(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductBtn = () => {
    // 상품 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      actionImgCompress();
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
              {/* <BlueButton onClick={updatePreviewBtn} width="120px">
                미리보기
              </BlueButton> */}
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
