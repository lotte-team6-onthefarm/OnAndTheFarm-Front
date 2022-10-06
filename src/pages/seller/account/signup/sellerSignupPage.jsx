import React, { useState } from 'react';
import { Button } from '../../../../components/common/Button';
import Input from '../../../../components/common/Input';
import storeLogo from '../../../../assets/storeLogo.png';
import {
  StoreLogoImg,
  StyledBoxDiv,
  StyledBoxWrapper,
  StyledRowDiv,
} from './sellerSignupPage.style';

export default function SellerSignupPage() {
  const [userEmail, setUserEmail] = useState('');
  const [userCode, setUserCode] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordconfirm] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPostCode, setUserPostCode] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userDetailAddress, setUserDetailAddress] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userBirthday, setUserBirthday] = useState('');

  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={storeLogo} alt="onandthefarmlogo"></StoreLogoImg>
        {/* <h2>회원가입</h2> */}
        <StyledRowDiv position="start">
          <Input
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
            label="이메일"
            placeholder="test@email.com"
            id="email"
            type="email"
          />
          <Button
            text="이메일 인증"
            color="#3288E5"
            margin="auto auto 20px"
            width="150px"
          ></Button>
        </StyledRowDiv>
        <StyledRowDiv position="start">
          <Input
            value={userCode}
            onChange={e => setUserCode(e.target.value)}
            label="인증번호"
            placeholder=""
            id="code"
            type="text"
          />
          <Button
            text="인증번호 확인"
            color="#3288E5"
            margin="auto auto 20px"
            width="150px"
          ></Button>
        </StyledRowDiv>
        <Input
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          label="비밀번호"
          placeholder="******"
          id="password"
          type="password"
        />
        <Input
          value={userPasswordConfirm}
          onChange={e => setUserPasswordconfirm(e.target.value)}
          label="비밀번호확인"
          placeholder="******"
          id="passwordconfirm"
          type="password"
        />
        <Input
          value={userName}
          onChange={e => setUserName(e.target.value)}
          label="이름"
          placeholder="홍길동"
          id="name"
          type="text"
        />
        <StyledRowDiv position="start">
          <Input
            value={userPhone}
            onChange={e => setUserPhone(e.target.value)}
            label="전화번호"
            placeholder="010-1234-5678"
            id="phoe"
            type="text"
          />
          <Button
            text="중복확인"
            color="#3288E5"
            margin="auto auto 20px"
            width="150px"
          ></Button>
        </StyledRowDiv>
        <StyledRowDiv position="start">
          <Input
            value={userPostCode}
            onChange={e => setUserPostCode(e.target.value)}
            label="우편번호"
            placeholder="012345"
            id="postcode"
            type="text"
          />
          <Button
            text="우편번호 찾기"
            color="#3288E5"
            margin="auto auto 20px"
            width="150px"
          ></Button>
        </StyledRowDiv>
        <Input
          value={userAddress}
          onChange={e => setUserAddress(e.target.value)}
          label="주소"
          placeholder="서울시 서초구 서초대로 74길"
          id="address"
          type="text"
        />
        <Input
          value={userDetailAddress}
          onChange={e => setUserDetailAddress(e.target.value)}
          label="상세주소"
          placeholder="3층"
          id="detailaddress"
          type="text"
        />
        <Input
          value={userGender}
          onChange={e => setUserGender(e.target.value)}
          label="성별"
          placeholder="남/여"
          id="gender"
          type="text"
        />
        <Input
          value={userBirthday}
          onChange={e => setUserBirthday(e.target.value)}
          label="생일"
          placeholder="2000-01-01"
          id="birthday"
          type="text"
        />
        <Button text="회원가입" color="#3288E5" width="150px"></Button>
      </StyledBoxDiv>
    </StyledBoxWrapper>
  );
}
