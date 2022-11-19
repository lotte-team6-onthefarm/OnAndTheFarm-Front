import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const SELLER_BASE_URL = process.env.REACT_APP_SELLER_BASE_URL;
const ADMIN_BASE_URL = process.env.REACT_APP_ADMIN_BASE_URL;
const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL;

let ACCESS_TOKEN = localStorage.getItem('token');
let REFRESH_TOKEN = localStorage.getItem('refreshToken');

let JWTapiSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

let JWTapiAdmin = axios.create({
  baseURL: ADMIN_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

let JWTapiLogoutSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
    refresh: REFRESH_TOKEN,
  },
});

let JWTapiLogoutAdmin = axios.create({
  baseURL: ADMIN_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
    refresh: REFRESH_TOKEN,
  },
});

const JWTapiSellertoUser = axios.create({
  baseURL: USER_BASE_URL,
  headers: {
    contentType: 'application/json',
    Authorization: ACCESS_TOKEN,
  },
});

const ApiSeller = axios.create({
  baseURL: SELLER_BASE_URL,
  headers: {
    contentType: 'application/json',
  },
});

const BaseApi = axios.create({
  baseURL: '',
  headers: {
    contentType: 'application/json',
  },
});

const CommonJWTapi = () => {
  // seller user 둘 다 필요한 API
  const sellerToken = localStorage.getItem('sellerToken');
  const userToken = localStorage.getItem('token');
  if (sellerToken !== null) {
    return axios.create({
      baseURL: SELLER_BASE_URL,
      headers: {
        contentType: 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    });
  } else if (userToken !== null) {
    return axios.create({
      baseURL: USER_BASE_URL,
      headers: {
        contentType: 'application/json',
        Authorization: ACCESS_TOKEN,
      },
    });
  }
};

// 상품상세정보 이 미지
const getProductDetailImg = async data => {
  const response = await BaseApi.get(data);
  return response.data;
};

JWTapiSeller.interceptors.response.use(
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
          url: `${SELLER_BASE_URL}members/refresh`,
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
          JWTapiSeller = axios.create({
            baseURL: SELLER_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiSeller.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);
JWTapiLogoutSeller.interceptors.response.use(
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
          url: `${SELLER_BASE_URL}members/refresh`,
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
          JWTapiSeller = axios.create({
            baseURL: SELLER_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiSeller.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);
JWTapiLogoutAdmin.interceptors.response.use(
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
          url: `${SELLER_BASE_URL}members/refresh`,
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
          JWTapiSeller = axios.create({
            baseURL: SELLER_BASE_URL,
            headers: {
              contentType: 'application/json',
              Authorization: ACCESS_TOKEN,
            },
          });
          // 새 토큰으로 재요청
          originalConfig.headers['Authorization'] = data.data.data.token.token;
          return await JWTapiSeller.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);


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






export {
  JWTapiSeller,
  JWTapiLogoutSeller,
  ApiSeller,
  JWTapiAdmin,
  JWTapiLogoutAdmin,
  JWTapiSellertoUser,
  CommonJWTapi,
  getProductDetailImg,
};
