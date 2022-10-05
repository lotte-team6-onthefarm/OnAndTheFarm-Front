import { JWTapiSeller } from '..';

// 상품등록
const postSellerProduct = async data => {
  const response = await JWTapiSeller.post('product/new', data);
  console.log(response);
  return response.data;
};

// 상품 수정
const putSellerProduct = async data => {
  const response = await JWTapiSeller.put('product/update', data);
  return response.data;
};

// 셀러별 상품 최신순 조회
const getSellerProduct = async data => {
  const response = await JWTapiSeller.get(
    `product/list/orderby/seller/${data.sellerId}/${data.pageNo}`,
  );
  return response.data.data;
};

export { postSellerProduct, putSellerProduct, getSellerProduct };
