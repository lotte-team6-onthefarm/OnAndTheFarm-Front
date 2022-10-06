import { React, useState } from 'react';
import WellcomeMessage from '../../../components/main/WellcomeMessage';
import { StyledBoxDiv, SocialLoginButton } from './userLoginPage.style';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export default function UserLoginPage() {
  const navigate = useNavigate();
  const REACT_APP_KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REACT_APP_NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const state = encodeURI("http://localhost:3000/login/success/naver")

  const loginKakao = () => {
    const kakao_url = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/login/success/kakao&response_type=code`;
    window.location.href = kakao_url
  };
  const loginNaver = () => {
    const naver_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_NAVER_CLIENT_ID}&redirect_uri=http://localhost:3000/login/success/naver&state=${state}`;
    window.location.href = naver_url
  };
  return (
    <StyledBoxDiv>
      <WellcomeMessage message="OnAndTheFarm에 오신것을 환영합니다." />
      <p style={{margin:"20px 0"}}>소셜로그인으로 간편하게 서비스를 이용해 보세요</p>
      <SocialLoginButton color="#fee500" width="100%" onClick={loginKakao}><RiKakaoTalkFill /> <span>&nbsp; &nbsp; 카카오로 로그인</span></SocialLoginButton>
      <SocialLoginButton color="#21c603" width="100%" onClick={loginNaver}><SiNaver /> <span>&nbsp; &nbsp; 네이버로 로그인</span></SocialLoginButton>
      <SocialLoginButton color="#3c5a9a" width="100%"><AiFillGoogleCircle /> <span>&nbsp; &nbsp; 구글로 로그인</span></SocialLoginButton>
    </StyledBoxDiv>
  );
}
