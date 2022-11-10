import { React, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getUserInfo, postUserInfo } from '../../../apis/user/account';
import { Button } from '../../../components/common/Button';
import ButtonGroup from '../../../components/common/ButtonGroup';
import Input from '../../../components/common/Input';
import {
  UserDetailBlock,
  UserDetailImg,
  UserDetailImgBlock,
  UserInfoSetting,
} from './mainMypageProfile.style';
import { StyledBoxDiv, StyledRowDiv } from '../account/mainSignupPage.style';
import DaumPostApi from '../../../components/common/DaumPostApi';
import Modal from '../../../components/common/Modal';

export default function MainMypageProfile() {
  const [userImg, setUserImg] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPostCode, setUserPostCode] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userDetailAddress, setUserDetailAddress] = useState('');
  const [userGender, setUserGender] = useState(0);
  const [userBirthday, setUserBirthday] = useState('');
  const [profileImages, setProfileImages] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [modal, setModal] = useState(false);

  // 이미지 전송을 위한 FormData
  let formData = new FormData();

  const {
    isLoading: isgetUserInfo,
    // refetch: getUserInfoRefetch,
    // data: userInfo,
  } = useQuery('userInfo', () => getUserInfo(), {
    // refetchOnWindowFocus: true,
    onSuccess: res => {
      if (res.userProfileImg) {
        setUserImg(res.userProfileImg);
      }
      if (res.userEmail) {
        setUserEmail(res.userEmail);
      }
      if (res.userName) {
        setUserName(res.userName);
      }
      if (res.userPhone) {
        setUserPhone(res.userPhone);
      }
      if (res.userZipcode) {
        setUserPostCode(res.userZipcode);
      }
      if (res.userAddress) {
        setUserAddress(res.userAddress);
      }
      if (res.userAddressDetail) {
        setUserDetailAddress(res.userAddressDetail);
      }
      if (res.userSex) {
        setUserGender(res.userSex);
      }
      if (res.userBirthday) {
        setUserBirthday(res.userBirthday);
      }
    },
    onError: () => {
      console.log('에러');
    },
  });

  const { mutate: changeUserInfo, isLoading: isPostUserInfo } = useMutation(
    postUserInfo,
    {
      onSuccess: res => {
        alert('성공');
        URL.revokeObjectURL(imageUrl);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const editInfo = () => {
    const data = {
      userName: userName,
      userPhone: userPhone,
      userAddress: userAddress,
      userAddressDetail: userDetailAddress,
      userZipcode: userPostCode,
      userSex: userGender,
      userBirthday: userBirthday,
    };
    console.log(data)
    formData.append('images', profileImages[0]);
    // 상품 데이터 추가
    formData.append(
      'data',
      new Blob([JSON.stringify(data)], { type: 'application/json' }),
    );
    console.log(formData);
    changeUserInfo(formData);
  };

  const printButtonLabel = event => {
    setUserGender(event);
  };

  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };

  const handleChange = e => {
    URL.revokeObjectURL(imageUrl);
    const url = URL.createObjectURL(e.target.files[0]);
    setImageUrl(url);
    setProfileImages(e.target.files);
  };

  const test = () => {
    console.log(imageUrl);
  };

  return (
    <div>
      {!isgetUserInfo && (
        <StyledBoxDiv>
          <h2>회원정보 수정</h2>
          <StyledRowDiv
            position="start"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <UserDetailBlock>
              <UserDetailImgBlock>
                <UserDetailImg src={imageUrl === '' ? userImg : imageUrl} />
              </UserDetailImgBlock>
              <UserInfoSetting>
                <input
                  type="file"
                  accept="image/*"
                  // accept='image/jpg,impge/png,image/jpeg,image/gif'
                  style={{ display: 'none' }}
                  ref={fileInput}
                  onChange={handleChange}
                />
                <button
                  onClick={() => {
                    fileUploadHandler();
                  }}
                >
                  설정
                </button>
              </UserInfoSetting>
            </UserDetailBlock>
          </StyledRowDiv>
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
              onClick={() => {
                setModal(!modal);
              }}
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
            selected={userGender}
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
            text="정보수정"
            color="#3288E5"
            width="150px"
            onClick={editInfo}
          ></Button>
          {modal && (
            <Modal closeModal={() => setModal(!modal)}>
              <DaumPostApi
                setModal={setModal}
                setAddress={setUserAddress}
                setPostCode={setUserPostCode}
              />
            </Modal>
          )}
        </StyledBoxDiv>
      )}
    </div>
  );
}
