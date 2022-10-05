import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postUserlogin } from '../../../apis/user/account';

export default function MainKakaoLogin() {
  // useeffect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let code = params.get('code');
    console.log("params.get('code') >>> ", code);
    let data = {
      code: code,
      provider: 'kakao',
      state: 'test',
    };
    loginUser(data);
  }, []);

  const navigate = useNavigate();

  const { mutate: loginUser, isLoading: isLoginUser } = useMutation(
    postUserlogin,
    {
      onSuccess: res => {
        console.log(res, '성공');
        if (res.data.needRegister) {
          navigate(`/signup`, { state: res.data.email });
        } else {
          navigate(`/`);
        }
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return <div>카카오로그인 성공</div>;
}
