import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postUserlogin } from '../../../apis/user/account';
import { isLoginState } from '../../../recoil';

export default function MainKakaoLogin() {
  const [isLogin, setisLogin] = useRecoilState(isLoginState);
  // useeffect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let code = params.get('code');
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
        localStorage.setItem('token',res.data.token.token )
        if (res.data.needRegister) {
          setisLogin(true)
          navigate(`/signup`, { state: res.data.email });
        } else {
          document.location.href= '/';
        }
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return <div>카카오로그인 성공</div>;
}
