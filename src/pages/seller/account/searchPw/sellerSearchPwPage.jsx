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
import {
  postSellerPasswd,
  postSellerSearchPw,
} from '../../../../apis/seller/account';
import { useNavigate } from 'react-router-dom';

export default function SellerSearchPwPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [newPw, setNewPw] = useState('');
  const [isId, setIsId] = useState(false);

  const navigate = useNavigate();

  const { mutate: sellerSearchPw } = useMutation(
    'postSellerSearchPw',
    postSellerSearchPw,
    {
      onSuccess: () => {
        alert('새로운 비밀번호를 설정해주세요');
        setIsId(true);
      },
      onError: res => {
      },
    },
  );
  const { mutate: sellerChangePasswd } = useMutation(
    'postSellerPasswd',
    postSellerPasswd,
    {
      onSuccess: () => {
        alert('비밀번호 변경이 완료되었습니다');
        navigate('/seller/login');
      },
      onError: res => {
      },
    },
  );

  const searchPwButton = () => {
    if (userName === '') {
      alert('이름을 입력해주세요');
      return;
    } else if (userEmail === '') {
      alert('이메일을 입력해주세요');
      return;
    }
    sellerSearchPw({ name: userName, sellerEmail: userEmail });
  };

  const changePwButton = () => {
    if (userEmail === '') {
      alert('이메일을 입력해주세요');
      return;
    } else if (newPw === '') {
      alert('새로운 비밀번호를 입력해주세요');
      return;
    }
    sellerChangePasswd({ email: userEmail, password: newPw });
  };
  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={StoreLogo} alt="onandthefarmlogo"></StoreLogoImg>
        {isId ? (
          <>
            <h2>비밀번호 수정</h2>
            <Input
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              label="아이디"
              placeholder="text@email.com"
              id="email"
              type="email"
            />
            <Input
              value={newPw}
              onChange={e => setNewPw(e.target.value)}
              label="새로운 비밀번호"
              placeholder="********"
              id="pw"
              type="password"
            />
            <StyledRowDiv position="center" style={{ display: 'flex' }}>
              <Button
                text="비밀번호 수정"
                color="#3288E5"
                width="130px"
                onClick={changePwButton}
              ></Button>
            </StyledRowDiv>
          </>
        ) : (
          <>
            <h2>비밀번호 찾기</h2>
            <Input
              value={userName}
              onChange={e => setUserName(e.target.value)}
              label="이름"
              placeholder="홍길동"
              id="name"
              type="text"
            />
            <Input
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
              label="아이디"
              placeholder="text@email.com"
              id="email"
              type="email"
            />
            <StyledRowDiv position="center" style={{ display: 'flex' }}>
              <Button
                text="비밀번호 찾기"
                color="#3288E5"
                width="130px"
                onClick={searchPwButton}
              ></Button>
            </StyledRowDiv>
          </>
        )}
      </StyledBoxDiv>
    </StyledBoxWrapper>
  );
}
