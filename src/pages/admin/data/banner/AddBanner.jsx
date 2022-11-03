import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postSellerProduct } from '../../../../apis/seller/product';
import { GreenButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import SubTitle from '../../../../components/seller/common/SubTitle';
import { SellerTitle } from '../../../../components/seller/common/Title.style';
import ProductImage from '../../../../components/seller/products/productsManagement/images/ProductImage';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import { AddProductBtnWrapper } from '../../../../components/seller/products/productsManagement/ProductManagement.style';
export default function AddBanner() {
  const [bannerName, setBannerName] = useState('');
  const [bannerDetail, setBannerDetail] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [bannerImages, setBannerImages] = useState('');

  const queryClient = useQueryClient();

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const submitData = {
    // 모듈 정보 데이터 객체화
    bannerName: bannerName,
    bannerDetail: bannerDetail,
    bannerUrl: bannerUrl,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (bannerName === '') {
      alert('배너 이름을 입력해주세요');
    } else if (bannerDetail === '') {
      alert('배너 설명을 입력해주세요');
    } else if (bannerUrl === '') {
      alert('연결 주소를 입력해주세요');
    } else if (bannerImages === '') {
      alert('배너 예시 이미지를 등록해주세요');
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
      formData.append('images', bannerImages[0]);
      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
    }
    console.log(formData)
    // addProduct(formData);
  };

  const { mutate: addProduct } = useMutation(postSellerProduct, {
    onSuccess: () => {
    },
    onError: () => {
      console.log('에러');
    },
  });

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <SellerTitle>배너 등록</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#FFBC99" title="배너 정보" />
        <ProductInput
          title="배너 이름"
          placeholder={bannerName !== '' ? bannerName : '배너 이름 입력'}
          setFunction={setBannerName}
        ></ProductInput>
        <HorizontalLine color="#F2F2F2" />
        <ProductInput
          title="배너 설명"
          placeholder={
            bannerDetail !== '' ? bannerDetail : '배너 설명 입력'
          }
          setFunction={setBannerDetail}
        ></ProductInput>
        <ProductInput
          title="배너 연결 주소"
          placeholder={
            bannerDetail !== '' ? bannerDetail : '연결 주소 입력'
          }
          setFunction={setBannerDetail}
        ></ProductInput>
      </WhiteWrapper>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#CABDFF" title="배너 이미지" />
        <ProductImage
          title="배너 이미지"
          type="main"
          productMainImages={bannerImages}
          setImages={setBannerImages}
        />
      </WhiteWrapper>
      <AddProductBtnWrapper>
        <div>
          <GreenButton onClick={addProductBtn} width="120px">
            배너등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </div>
  );
}
