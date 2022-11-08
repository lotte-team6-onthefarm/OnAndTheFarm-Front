import React from 'react';
import { useState } from 'react';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';

export default function AccountData(props) {
  const [data, setData] = useState(0);
  return (
    <ProductInput
      title="데이터 아이디"
      placeholder="데이터 아이디 입력"
      setFunction={setData}
    />
  );
}
