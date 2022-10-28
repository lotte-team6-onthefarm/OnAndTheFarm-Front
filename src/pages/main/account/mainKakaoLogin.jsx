import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postUserlogin } from '../../../apis/user/account';
import Loading from '../../../components/common/Loading';
import { isLoginState, snsNowId } from '../../../recoil';

export default function MainKakaoLogin() {
  const [id, setId] = useRecoilState(snsNowId);
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
        setId(res.data.userId);
        if (localStorage.getItem('sellerToken') !== undefined) {
          // 유저 로그인 시 셀러 정보 있으면 셀러 토큰 제거
          localStorage.removeItem('sellerToken');
        }
        localStorage.setItem('token', res.data.token.token);
        if (res.data.needRegister) {
          setisLogin(true);
          navigate(`/signup`, { state: res.data.email });
          document.location.href = '/signup';
        } else {
          setTimeout(() => {
            // 1초동안 로딩
            document.location.href = '/';
          }, [1000]);
        }
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return <Loading />;
}
