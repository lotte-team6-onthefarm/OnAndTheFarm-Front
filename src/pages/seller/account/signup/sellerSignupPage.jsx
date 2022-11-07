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
import {
  getSellerEmailConfirm,
  postSellerEmail,
  postSellerSignup,
} from '../../../../apis/seller/account';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../../components/common/Modal';
import DaumPostApi from '../../../../components/common/DaumPostApi';

export default function SellerSignupPage() {
  const [Email, setEmail] = useState('');
  const [Code, setCode] = useState('');
  const [EmailCode, setEmailCode] = useState(false);
  const [EmailSend, setEmailSend] = useState(false);
  const [Password, setPassword] = useState('');
  const [PasswordConfirm, setPasswordconfirm] = useState('');
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [PostCode, setPostCode] = useState('');
  const [Address, setAddress] = useState('');
  const [DetailAddress, setDetailAddress] = useState('');
  const [ShopName, setShopName] = useState('');
  const [BusinessNumber, setBusinessNumber] = useState('');
  const [modal, setModal] = useState(false);

  // hook
  const navigate = useNavigate();

  const signUpBtn = () => {
    if (Email === '') {
      alert('이메일을 입력하세요');
    } else if (!EmailCode) {
      alert('인증번호를 확인해주세요');
    } else if (Password === '') {
      alert('패스워드를 입력하세요');
    } else if (PostCode === '') {
      alert('우편번호를 입력하세요');
    } else if (Address === '') {
      alert('주소를 입력하세요');
    } else if (DetailAddress === '') {
      alert('상세주소를 입력하세요');
    } else if (Phone === '') {
      alert('전화번호를 입력하세요');
    } else if (Name === '') {
      alert('이름을 입력하세요');
    } else if (BusinessNumber === '') {
      alert('사업자 번호를 입력하세요');
    } else if (ShopName === '') {
      alert('쇼핑몰 이름을 입력하세요');
    } else {
      sellerSignup({
        email: Email,
        password: Password,
        zipcode: PostCode,
        address: Address,
        addressDetail: DetailAddress,
        phone: Phone,
        name: Name,
        businessNumber: BusinessNumber,
        shopName: ShopName,
      });
    }
  };

  // 이메일 인증 요청
  const sendEmail = () => {
    setEmailSend(true);
    if (EmailCode) {
      alert('이미 인증이 완료되었습니다');
    } else {
      sellerEmail({ email: Email });
    }
  };

  // 이메일 인증 확인
  const emailConfirm = (email, key) => {
    if (!EmailSend) {
      alert('이메일 인증 버튼을 클릭해주세요');
      return;
    }
    sellerEmailConfirm({ email, key });
  };
  const { mutate: sellerSignup } = useMutation(postSellerSignup, {
    onSuccess: () => {
      alert('회원가입에 성공하였습니다');
      navigate('/seller/login');
    },
    onError: () => {
      alert('입력하신 데이터가 유효하지 않습니다.');
    },
  });

  // 이메일 인증 요청
  const { mutate: sellerEmail } = useMutation(postSellerEmail, {
    onSuccess: () => {
      alert('인증 번호를 전송하였습니다. 이메일을 확인해주세요');
    },
    onError: () => {
      alert('입력하신 데이터가 유효하지 않습니다.');
    },
  });

  // 이메일 번호 인증
  const { mutate: sellerEmailConfirm } = useMutation(getSellerEmailConfirm, {
    onSuccess: () => {
      alert('인증 번호가 일치합니다');
      setEmailCode(true);
    },
    onError: () => {
      alert('인증 번호가 일치하지 않습니다');
    },
  });

  return (
    <StyledBoxWrapper>
      <StyledBoxDiv>
        <StoreLogoImg src={storeLogo} alt="onandthefarmlogo"></StoreLogoImg>
        <StyledRowDiv position="start">
          <Input
            value={Email}
            onChange={e => setEmail(e.target.value)}
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
            onClick={sendEmail}
          ></Button>
        </StyledRowDiv>
        <StyledRowDiv position="start">
          <Input
            value={Code}
            onChange={e => setCode(e.target.value)}
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
            onClick={() => {
              emailConfirm(Email, Code);
            }}
          ></Button>
        </StyledRowDiv>
        <Input
          value={Password}
          onChange={e => setPassword(e.target.value)}
          label="비밀번호"
          placeholder="******"
          id="password"
          type="password"
        />
        <Input
          value={PasswordConfirm}
          onChange={e => setPasswordconfirm(e.target.value)}
          label="비밀번호확인"
          placeholder="******"
          id="passwordconfirm"
          type="password"
        />
        <Input
          value={Name}
          onChange={e => setName(e.target.value)}
          label="이름"
          placeholder="홍길동"
          id="name"
          type="text"
        />
        <StyledRowDiv position="start">
          <Input
            value={Phone}
            onChange={e => setPhone(e.target.value)}
            label="전화번호"
            placeholder="010-1234-5678"
            id="phoe"
            type="text"
          />
        </StyledRowDiv>
        <StyledRowDiv position="start">
          <Input
            value={PostCode}
            onChange={e => setPostCode(e.target.value)}
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
            onClick={() => {
              setModal(!modal);
            }}
          ></Button>
        </StyledRowDiv>
        <Input
          value={Address}
          onChange={e => setAddress(e.target.value)}
          label="주소"
          placeholder="서울시 서초구 서초대로 74길"
          id="address"
          type="text"
        />
        <Input
          value={DetailAddress}
          onChange={e => setDetailAddress(e.target.value)}
          label="상세주소"
          placeholder="3층"
          id="detailaddress"
          type="text"
        />
        <Input
          value={BusinessNumber}
          onChange={e => setBusinessNumber(e.target.value)}
          label="사업자번호"
          placeholder="000-000000-000"
          id="businessnumber"
          type="text"
        />
        <Input
          value={ShopName}
          onChange={e => setShopName(e.target.value)}
          label="쇼핑몰 이름"
          placeholder="온앤더 팜"
          id="shopname"
          type="text"
        />
        <Button
          text="회원가입"
          color="#3288E5"
          width="150px"
          onClick={signUpBtn}
        ></Button>
      </StyledBoxDiv>
      {modal && (
        <Modal closeModal={() => setModal(!modal)}>
          <DaumPostApi
            setModal={setModal}
            setAddress={setAddress}
            setPostCode={setPostCode}
          />
        </Modal>
      )}
    </StyledBoxWrapper>
  );
}
