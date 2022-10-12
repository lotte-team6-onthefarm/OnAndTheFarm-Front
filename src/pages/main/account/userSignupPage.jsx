import { React, useState } from 'react';
import { useMutation } from 'react-query';
import { postUserSignup } from '../../../apis/user/account';
import WellcomeMessage from '../../../components/main/WellcomeMessage';
import Input from '../../../components/common/Input';
import { StyledBoxDiv, StyledRowDiv, StyledFind } from './userSignupPage.style';
import { Button } from '../../../components/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonGroup from '../../../components/common/ButtonGroup';
import { nullCheck } from '../../../utils/validation';

export default function UserSignupPage() {
  const { state } = useLocation();

  const [userEmail, setUserEmail] = useState(state);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPostCode, setUserPostCode] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userDetailAddress, setUserDetailAddress] = useState('');
  const [userGender, setUserGender] = useState(0);
  const [userBirthday, setUserBirthday] = useState('');

  const register = () => {
    
    let data = {
      userName: userName,
      userPhone: userPhone,
      userZipcode: userPostCode,
      userAddress: userAddress,
      userAddressDetail: userDetailAddress,
      userSex: userGender,
      userBirthday: userBirthday,
    };
    console.log(data)
    if(nullCheck(data)){
      signupUser(data);
    } else {
      alert('빈 값이 있습니다.')
    }
  };
  const navigate = useNavigate();
  const { mutate: signupUser, isLoading: issignupUser } = useMutation(
    postUserSignup,
    {
      onSuccess: res => {
        alert('회원가입 성공')
        navigate(`/`);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const printButtonLabel = event => {
    setUserGender(event);
  };
  return (
    <StyledBoxDiv>
      <WellcomeMessage message="OnAndTheFarm 회원가입 페이지" />
      <StyledRowDiv position="start">
        <Input
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          label="이메일"
          placeholder="test@email.com"
          id="email"
          type="email"
          disabled={true}
        />
      </StyledRowDiv>
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
      <ButtonGroup
        buttons={['남자', '여자']}
        doSomethingAfterClick={printButtonLabel}
      />
      <Input
        value={userBirthday}
        onChange={e => setUserBirthday(e.target.value)}
        label="생일"
        placeholder="2000-01-01"
        id="birthday"
        type="date"
      />
      <Button
        text="회원가입"
        color="#3288E5"
        width="150px"
        onClick={register}
      ></Button>
    </StyledBoxDiv>
  );
}
