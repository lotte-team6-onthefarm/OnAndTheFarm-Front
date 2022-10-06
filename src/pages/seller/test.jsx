import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { getSellerMypage, postSellerlogin } from '../../apis/seller/account';
import { getSellerProduct } from '../../apis/seller/product';

export default function Test() {
  // 셀러 로그인
  const { mutate: sellerLogin, isLoading: loginLoading } = useMutation(
    postSellerlogin,
    {
      onSuccess: res => {
        console.log(res);
      },
      onError: {},
    },
  );

  // 셀러별 상품조회
  const {
    isLoading: sellerLoading,
    refetch: sellerRefetch,
    data: sellerProduct,
  } = useQuery(
    'sellerProduct',
    () => getSellerProduct({ sellerId: 1, pageNo: 0 }),
    {
      onSuccess: res => {
        console.log(res, 'sss');
      },
      onError: {},
    },
  );

  return (
    <div>
      <button
        onClick={() => {
          sellerLogin({
            email: 'esson@na1.com',
            password: '1234',
          });
        }}
      >
        셀러 로그인
      </button>
      <button onClick={sellerRefetch}>셀러별 상품조회</button>
      <button>셀러 메인페이지</button>
    </div>
  );
}
