import { React, useState } from 'react';
import WellcomeMessage from '../../../components/main/WellcomeMessage';
import { StyledBoxDiv, SocialLoginButton } from './userLoginPage.style';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function UserLoginPage() {
  return (
    <StyledBoxDiv>
      <WellcomeMessage message="OnAndTheFarm에 오신것을 환영합니다." />
      <p style={{ margin: '20px 0' }}>
        소셜로그인으로 간편하게 서비스를 이용해 보세요
      </p>
      <SocialLoginButton color="#fee500" width="100%">
        <RiKakaoTalkFill /> <span>&nbsp; &nbsp; 카카오로 로그인</span>
      </SocialLoginButton>
      <SocialLoginButton color="#21c603" width="100%">
        <SiNaver /> <span>&nbsp; &nbsp; 네이버로 로그인</span>
      </SocialLoginButton>
      <SocialLoginButton color="#3c5a9a" width="100%">
        <AiFillGoogleCircle /> <span>&nbsp; &nbsp; 구글로 로그인</span>
      </SocialLoginButton>
    </StyledBoxDiv>
  );
}
