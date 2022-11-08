import { JWPapiSellertoUser, JWTapiSeller, JWTapiSellertoUser } from '..';

// 상품등록
const postSellerProduct = async formData => {
  const response = await JWTapiSeller.post('product/new', formData);
  return response.data;
};

// 상품 수정
const putSellerProduct = async formData => {
  const response = await JWTapiSeller.put('product/update', formData);
  return response.data;
};

// 셀러별 상품 최신순 조회
const getSellerNewestProduct = async data => {
  const response = await JWTapiSeller.get(
    `product/list/all/newest/${data.pageNo}`,
  );
  return response.data.data;
};

// 셀러별 상품 조회
const getSellerProduct = async (data, status) => {
  const response = await JWTapiSeller.get(
    `product/list/orderby/seller/${data.sellerId}/${data.pageNo}`,
  );
  if (status === 'InfiniteQuery') {
    return {
      posts: response.data.data,
      nextPage: data.pageNo + 1,
      isLast: Boolean(response.data.data.totalPage - 1 === data.pageNo),
    };
  }
  return response.data.data;
};

// 셀러가 등록한 내 상품 조회 -> 내 토큰으로 확인하는 것
const getSellerMyProduct = async (pageNo, status) => {
  const response = await JWTapiSeller.get(
    `product/list/selling-product/by-seller/${pageNo}`,
  );
  if (status === 'InfiniteQuery') {
    return {
      posts: response.data.data,
      nextPage: pageNo + 1,
      isLast: Boolean(response.data.data.totalPage - 1 === pageNo),
    };
  }
  return response.data.data;
};

// 셀러가 일시정지 한 내 상품 조회
const getSellerPauseProduct = async pageNo => {
  const response = await JWTapiSeller.get(
    `product/list/pause-product/by-seller/${pageNo}`,
  );
  return response.data.data;
};

// 상품 단건조회
const getProductSeller = async data => {
  const response = await JWTapiSellertoUser.get(`product/detail/${data}`);
  return response.data.data;
};

export {
  postSellerProduct,
  putSellerProduct,
  getSellerNewestProduct,
  getSellerProduct,
  getProductSeller,
  getSellerPauseProduct,
  getSellerMyProduct,
};
