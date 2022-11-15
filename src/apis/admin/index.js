import axios from 'axios';

const ADMIN_BASE_URL = process.env.REACT_APP_ADMIN_BASE_URL;

let ACCESS_TOKEN = localStorage.getItem('token');

let JWTapiAdmin = axios.create({
  baseURL: ADMIN_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

JWTapiAdmin.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response && err.response.status === 406) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        // 리프레시 토큰으로 access토큰 받아오기
        const data = await axios({
          url: `${ADMIN_BASE_URL}members/refresh`,
          method: 'post',
          data: {
            accessToken: ACCESS_TOKEN,
            refreshToken: refreshToken,
          },
        });
        if (data) {
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('token');
          localStorage.setItem('token', data.data.data.token.token);
          localStorage.setItem(
            'refreshToken',
            data.data.data.token.refreshToken,
          );
          ACCESS_TOKEN = data.data.data.token.token;

          // api update
          JWTapiAdmin = axios.create({
            baseURL: ADMIN_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiAdmin.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);

export { JWTapiAdmin };
