import { JWPapiSellertoUser, JWTapiSeller } from '..';

// 상품등록
const postSellerProduct = async formData => {
  const response = await JWTapiSeller.post('product/new', formData);
  console.log(response);
  return response.data;
};

// 상품 수정
const putSellerProduct = async data => {
  const response = await JWTapiSeller.put('product/update', data);
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
const getSellerProduct = async pageNo => {
  const response = await JWTapiSeller.get(
    `product/list/orderby/seller/${pageNo}`,
  );
  return response.data.data;
};

// 상품 단건조회
const getProductSeller = async data => {
  console.log(data);
  const response = await JWPapiSellertoUser.get(`product/${data}`);
  return response.data.data;
};

export {
  postSellerProduct,
  putSellerProduct,
  getSellerNewestProduct,
  getSellerProduct,
  getProductSeller,
};
