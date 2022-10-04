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

export { postSellerProduct, putSellerProduct };
