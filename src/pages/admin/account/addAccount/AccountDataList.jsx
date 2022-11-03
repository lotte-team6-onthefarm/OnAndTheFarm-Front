import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BlackButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import { AddProductBtnWrapper } from '../../../../components/seller/products/productsManagement/ProductManagement.style';
import { AddAccountWrapper } from './AddAccount.styled';

export default function AccountDataList(props) {
  console.log(props);
  const [data, setData] = useState([]);
  const [dataGroup, setDataGroup] = useState([]);
  useEffect(() => {
    setData([]);
    setDataGroup([]);
  }, [props]);
  for (let i = 0; i < props.dataCount; i++) {
    data.push(i);
  }
  for (let i = 0; i < props.dataGroupCount; i++) {
    dataGroup.push(i);
  }
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <AddAccountWrapper>
        <h2>데이터 등록</h2>
        {dataGroup.map(idx => (
          <div key={idx}>
            <h3 style={{ marginBottom: '10px' }}>{idx + 1}</h3>
            <ProductInput
              title="데이터 그룹 이름"
              placeholder="데이터 그룹 이름 입력"
            />
            <ProductInput
              title="데이터 그룹 설명"
              placeholder="데이터 그룹 설명 입력"
            />
            <HorizontalLine color="#F2F2F2" />
            {data.map(idx => (
              <div key={idx}>
                <ProductInput
                  title="데이터 아이디"
                  placeholder="데이터 아이디 입력"
                  key={idx}
                />
              </div>
            ))}
            <HorizontalLine color="#F2F2F2" />
          </div>
        ))}
      </AddAccountWrapper>

      <AddProductBtnWrapper>
        <div>
          <BlackButton width="120px">등록</BlackButton>
        </div>
      </AddProductBtnWrapper>
    </WhiteWrapper>
  );
}
