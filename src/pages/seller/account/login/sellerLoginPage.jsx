import React, { useState } from 'react';
import { Button } from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import StoreLogo from '../../../../assets/storeLogo.png';
import {
  StyledBoxDiv,
  StyledBoxWrapper,
  StyledFind,
  StyledRowDiv,
} from './sellerLoginPage.style';
import { Link, useNavigate } from 'react-router-dom';
import { StoreLogoImg } from '../signup/sellerSignupPage.style';

export default function SellerLoginPage() {
  const [useremail, setUseremail] = useState('');
  const [userpassword, setPassword] = useState('');

  // hook
  const navigate = useNavigate();

  //function
  const signUpBtn = () => {
    navigate('/seller/signup');
  };

  const loginBtn = () => {
    navigate('/seller');
  };

  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={StoreLogo} alt="onandthefarmlogo"></StoreLogoImg>
        <Input
          value={useremail}
          onChange={e => setUseremail(e.target.value)}
          label="이메일"
          placeholder="test@email.com"
          id="email"
          type="email"
        />
        <Input
          value={userpassword}
          onChange={e => setPassword(e.target.value)}
          label="비밀번호"
          placeholder="******"
          id="password"
          type="password"
        />
        <StyledRowDiv position="end">
          <Link to="/seller/searchId">
            <StyledFind>아이디찾기</StyledFind>
          </Link>
          <Link to="/seller/searchPw">
            <StyledFind>비밀번호 찾기</StyledFind>
          </Link>
        </StyledRowDiv>
        <StyledRowDiv position="center" style={{ display: 'flex' }}>
          <Button
            text="로그인"
            color="#40AA54"
            width="130px"
            onClick={loginBtn}
          ></Button>
          <Button
            text="회원가입"
            color="#3288E5"
            width="130px"
            onClick={signUpBtn}
          ></Button>
        </StyledRowDiv>
      </StyledBoxDiv>
    </StyledBoxWrapper>
  );
}
