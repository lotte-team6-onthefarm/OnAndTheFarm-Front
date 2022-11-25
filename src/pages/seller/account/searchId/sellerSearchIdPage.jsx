import React, { useState } from 'react';
import { Button } from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import {
  StyledBoxDiv,
  StyledBoxWrapper,
  StyledRowDiv,
} from '../login/sellerLoginPage.style';
import StoreLogo from '../../../../assets/storeLogo.png';
import { StoreLogoImg } from '../signup/sellerSignupPage.style';
import { useMutation } from 'react-query';
import { postSellerSearchId } from '../../../../apis/seller/account';
import { useNavigate } from 'react-router-dom';

export default function SellerSearchIdPage() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const navigate = useNavigate();

  const { mutate: sellerSearchId } = useMutation(
    'postSellerSearchId',
    postSellerSearchId,
    {
      onSuccess: res => {
        alert(`아이디는 ${res.data} 입니다`);
        navigate('/seller/login');
      },
      onError: res => {
      },
    },
  );

  const searchIdButton = () => {
    if (userName === '') {
      alert('이름을 입력해주세요');
      return;
    } else if (userPhone === '') {
      alert('전화번호를 입력해주세요');
      return;
    }
    sellerSearchId({ name: userName, phone: userPhone });
  };
  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={StoreLogo} alt="onandthefarmlogo"></StoreLogoImg>
        <h2>아이디 찾기</h2>
        <Input
          value={userName}
          onChange={e => setUserName(e.target.value)}
          label="이름"
          placeholder="홍길동"
          id="name"
          type="text"
        />
        <Input
          value={userPhone}
          onChange={e => setUserPhone(e.target.value)}
          label="전화번호"
          placeholder="010-1234-5678"
          id="phone"
          type="text"
        />
        <StyledRowDiv position="center" style={{ display: 'flex' }}>
          <Button
            text="아이디 찾기"
            color="#3288E5"
            width="130px"
            onClick={searchIdButton}
          ></Button>
        </StyledRowDiv>
      </StyledBoxDiv>
    </StyledBoxWrapper>
  );
}
