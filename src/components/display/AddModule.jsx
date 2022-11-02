import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postSellerProduct } from '../../apis/seller/product';
import { BlueButton, GreenButton } from '../common/Button.style';
import { HorizontalLine } from '../common/HorizontalLine.style';
import { WhiteWrapper } from '../seller/common/Box.style';
import SubTitle from '../seller/common/SubTitle';
import { SellerTitle } from '../seller/common/Title.style';
import ProductImage from '../seller/products/productsManagement/images/ProductImage';
import ProductInput from '../seller/products/productsManagement/ProductInput';
import { AddProductBtnWrapper } from '../seller/products/productsManagement/ProductManagement.style';

export default function AddModule() {
  const [moduleName, setModuleName] = useState('');
  const [moduleDetail, setModuleDetail] = useState('');
  const [moduleImages, setModuleImages] = useState('');

  const queryClient = useQueryClient();

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const submitData = {
    // 모듈 정보 데이터 객체화
    moduleName: moduleName,
    moduleDetail: moduleDetail,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (moduleName === '') {
      alert('모듈 이름을 입력해주세요');
    } else if (moduleDetail === '') {
      alert('모듈 설명을 입력해주세요');
    } else if (moduleImages === '') {
      alert('모듈 예시 이미지를 등록해주세요');
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
      formData.append('images', moduleImages[0]);
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
      <SellerTitle>모듈 등록</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#FFBC99" title="모듈 정보" />
        <ProductInput
          title="모듈 이름"
          placeholder={moduleName !== '' ? moduleName : '모듈 이름 입력'}
          setFunction={setModuleName}
        ></ProductInput>
        <HorizontalLine color="#F2F2F2" />
        <ProductInput
          title="모듈 간단 설명"
          placeholder={
            moduleDetail !== '' ? moduleDetail : '모둘 간단 설명 입력'
          }
          setFunction={setModuleDetail}
        ></ProductInput>
      </WhiteWrapper>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#CABDFF" title="모듈 예시 이미지" />
        <ProductImage
          title="메인 이미지"
          type="main"
          productMainImages={moduleImages}
          setImages={setModuleImages}
        />
      </WhiteWrapper>
      <AddProductBtnWrapper>
        <div>
          <GreenButton onClick={addProductBtn} width="120px">
            상품등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </div>
  );
}