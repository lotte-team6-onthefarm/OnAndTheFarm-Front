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

export default function SellerSearchIdPage() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

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
          <Button text="아이디 찾기" color="#3288E5" width="130px"></Button>
        </StyledRowDiv>
      </StyledBoxDiv>
    </StyledBoxWrapper>
  );
}
