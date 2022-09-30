import JWTapiFileSeller from '../index.js';

// 상품정보 수정
const uploadPost = async () => {
  console.log('helo');
  const response = await JWTapiFileSeller.post('seller/product/new', {
    productName: 'sibal',
    productPrice: 1300000,
    productCategory: 1,
    productTotalStock: 100,
    productMainImgSrc: '',
    productDetail: ' sibal',
    productOriginPlcae: 'sibal',
    productDeliverCompany: 'HanJIn',
    productStatus: 'soldout',
    productDetailShort: 'sibaaaal',
    productRegisterDate: '202202202',
    productWishCount: '1242034',
    sellerId: 1,
  });
  console.log(response);
  return response.data;
};
export { uploadPost };
