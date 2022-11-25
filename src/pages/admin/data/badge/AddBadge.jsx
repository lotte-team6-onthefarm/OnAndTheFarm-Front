import React, { useState } from 'react';
import { useMutation } from 'react-query';
import imageCompression from 'browser-image-compression';
import { postExhibitionNewBadge } from '../../../../apis/admin/data';
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

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const submitData = {
    // 뱃지 정보 데이터 객체화
    badgeName: badgeName,
    badgeDetail: badgeDetail,
    badgeConnectUrl: badgeUrl,
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

  const actionImgCompress = async (fileSrc, data) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.5,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(badgeImages[0], options);
      formData.append('images', compressedFile);
      // 상품 데이터 추가
      formData.append(
        'data',
        new Blob([JSON.stringify(submitData)], { type: 'application/json' }),
      );
      addBadgeBtn(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const addBadgeBtn = () => {
    // 상품 등록 버튼
    const isValidation = validataionCheck();
    if (isValidation) {
      actionImgCompress()
    }
  };

  const { mutate: postNewBadge } = useMutation(postExhibitionNewBadge, {
    onSuccess: () => {
      alert('성공');
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
          placeholder={badgeDetail !== '' ? badgeDetail : '뱃지 설명 입력'}
          setFunction={setBadgeDetail}
        ></ProductInput>
        <ProductInput
          title="뱃지 연결 주소"
          placeholder={badgeUrl !== '' ? badgeUrl : '연결 주소 입력'}
          setFunction={setBadgeUrl}
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
          <GreenButton onClick={addBadgeBtn} width="120px">
            뱃지등록
          </GreenButton>
        </div>
      </AddProductBtnWrapper>
    </div>
  );
}
