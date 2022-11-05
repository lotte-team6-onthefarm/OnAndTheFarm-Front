import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postModuleAdd } from '../../../../apis/exhibition/module';
import { GreenButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import SubTitle from '../../../../components/seller/common/SubTitle';
import { SellerTitle } from '../../../../components/seller/common/Title.style';
import ProductImage from '../../../../components/seller/products/productsManagement/images/ProductImage';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import { AddProductBtnWrapper } from '../../../../components/seller/products/productsManagement/ProductManagement.style';

export default function AddModule() {
  const [moduleName, setModuleName] = useState('');
  const [moduleContent, setModuleContent] = useState('');
  const [moduleImages, setModuleImages] = useState('');
  
  const navigate = useNavigate();

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const submitData = {
    // 모듈 정보 데이터 객체화
    moduleName: moduleName,
    moduleContent: moduleContent,
  };

  const validataionCheck = () => {
    // 유효성 체크
    if (moduleName === '') {
      alert('모듈 이름을 입력해주세요');
    } else if (moduleContent === '') {
      alert('모듈 설명을 입력해주세요');
    } else if (moduleImages === '') {
      alert('모듈 예시 이미지를 등록해주세요');
    } else {
      return true;
    }
    return false;
  };

  const addModuletBtn = () => {
    // 모듈 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      // 모듈 image 데이터 추가
      formData.append('image', moduleImages[0]);
      // 모듈 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
    }
    addModule(formData);
  };

  const { mutate: addModule } = useMutation(postModuleAdd, {
    onSuccess: (res) => {
      alert('모듈이 등록되었습니다.')
      navigate(`/admin/module`);
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
            moduleContent !== '' ? moduleContent : '모둘 간단 설명 입력'
          }
          setFunction={setModuleContent}
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
          <GreenButton onClick={addModuletBtn} width="120px">
            모듈등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </div>
  );
}
