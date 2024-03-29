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
import { useNavigate } from 'react-router-dom';
import { StoreLogoImg } from '../signup/sellerSignupPage.style';
import { useMutation } from 'react-query';
import { postSellerlogin } from '../../../../apis/seller/account';

export default function SellerLoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  // hook
  const navigate = useNavigate();

  //function
  const signUpBtn = () => {
    navigate('/seller/signup');
  };

  const loginBtn = () => {
    if (email === '') {
      alert('이메일을 입력하세요');
    } else if (password === '') {
      alert('패스워드를 입력하세요');
    } else {
      sellerLogin({ email: email, password: password });
    }
  };
  const { mutate: sellerLogin } = useMutation(postSellerlogin, {
    onSuccess: res => {
      if (localStorage.getItem('token') !== undefined) {
        // 셀러 로그인 시 유저 정보 있으면 셀러 토큰 제거
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }
      if (localStorage.getItem('recoil-persist') !== undefined) {
        // 셀러 로그인 시 유저 정보가 있으면 제거
        localStorage.removeItem('recoil-persist');
      }

      if (res.data.role === 'admin') {
        localStorage.setItem('role', 'admin');
        localStorage.setItem('token', res.data.token.token);
        localStorage.setItem('refreshToken', res.data.token.refreshToken);
        document.location.href = '/admin';
      } else {
        localStorage.setItem('role', 'seller');
        localStorage.setItem('token', res.data.token.token);
        localStorage.setItem('refreshToken', res.data.token.refreshToken);
        document.location.href = '/seller';
      }
    },
    onError: () => {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    },
  });

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      loginBtn();
    }
  };
  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={StoreLogo} alt="onandthefarmlogo"></StoreLogoImg>
        <Input
          value={email}
          onChange={e => setemail(e.target.value)}
          label="이메일"
          placeholder="test@email.com"
          id="email"
          type="email"
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          label="비밀번호"
          placeholder="******"
          id="password"
          type="password"
          onKeyPress={onKeyPress}
        />
        <StyledRowDiv position="end">
          <StyledFind onClick={() => navigate('/seller/searchId')}>
            아이디찾기
          </StyledFind>
          <StyledFind onClick={() => navigate('/seller/searchPw')}>
            비밀번호 찾기
          </StyledFind>
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
