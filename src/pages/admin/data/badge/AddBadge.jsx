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
export default function AddBadge() {
  const [badgeName, setBadgeName] = useState('');
  const [badgeDetail, setBadgeDetail] = useState('');
  const [badgeUrl, setBadgeUrl] = useState('');
  const [badgeImages, setBadgeImages] = useState('');

  const queryClient = useQueryClient();

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const submitData = {
    // 뱃지 정보 데이터 객체화
    badgeName: badgeName,
    badgeDetail: badgeDetail,
    badgeUrl: badgeUrl,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (badgeName === '') {
      alert('뱃지 이름을 입력해주세요');
    } else if (badgeDetail === '') {
      alert('뱃지 설명을 입력해주세요');
    } else if (badgeUrl === '') {
      alert('연결 주소를 입력해주세요');
    } else if (badgeImages === '') {
      alert('뱃지 예시 이미지를 등록해주세요');
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
      formData.append('images', badgeImages[0]);
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
      <SellerTitle>뱃지 등록</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#FFBC99" title="뱃지 정보" />
        <ProductInput
          title="뱃지 이름"
          placeholder={badgeName !== '' ? badgeName : '뱃지 이름 입력'}
          setFunction={setBadgeName}
        ></ProductInput>
        <HorizontalLine color="#F2F2F2" />
        <ProductInput
          title="뱃지 설명"
          placeholder={
            badgeDetail !== '' ? badgeDetail : '뱃지 설명 입력'
          }
          setFunction={setBadgeDetail}
        ></ProductInput>
        <ProductInput
          title="뱃지 연결 주소"
          placeholder={
            badgeDetail !== '' ? badgeDetail : '연결 주소 입력'
          }
          setFunction={setBadgeDetail}
        ></ProductInput>
      </WhiteWrapper>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#CABDFF" title="뱃지 이미지" />
        <ProductImage
          title="뱃지 이미지"
          type="main"
          productMainImages={badgeImages}
          setImages={setBadgeImages}
        />
      </WhiteWrapper>
      <AddProductBtnWrapper>
        <div>
          <GreenButton onClick={addProductBtn} width="120px">
            뱃지등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </div>
  );
}