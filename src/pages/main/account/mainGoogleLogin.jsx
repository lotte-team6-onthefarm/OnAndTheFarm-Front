import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postUserlogin } from '../../../apis/user/account';
import Loading from '../../../components/common/Loading';
import { isLoginState, preLoginUrl, snsNowId } from '../../../recoil';

export default function MainGoogleLogin() {
  const [id, setId] = useRecoilState(snsNowId);
  const [isLogin, setisLogin] = useRecoilState(isLoginState);
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  // useeffect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let code = params.get('code');
    let data = {
      code: code,
      provider: 'google',
      state: 'test',
    };
    loginUser(data);
  }, []);

  const navigate = useNavigate();

  const { mutate: loginUser, isLoading: isLoginUser } = useMutation(
    postUserlogin,
    {
      onSuccess: res => {
        setId(res.data.userId);
        if (localStorage.getItem('token') !== undefined) {
          // 유저 로그인 시 셀러 정보 있으면 셀러 토큰 제거
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('token');
          localStorage.removeItem('role');
        }
        localStorage.setItem('token', res.data.token.token);
        localStorage.setItem('refreshToken', res.data.token.refreshToken);
        localStorage.setItem('role', 'user');
        setTimeout(() => {
          setisLogin(true);
          if (preUrl === '') {
            document.location.href = '/';
          } else {
            const url = preUrl;
            setPreUrl('');
            document.location.href = url;
          }
        }, [1000]);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return <Loading />;
}
