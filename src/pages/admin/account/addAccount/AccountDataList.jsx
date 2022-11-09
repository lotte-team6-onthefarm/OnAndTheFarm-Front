import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BlackButton,
  WhiteButton,
} from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import { AddProductBtnWrapper } from '../../../../components/seller/products/productsManagement/ProductManagement.style';
import { AccountDetailTitle } from '../accountDetail/AccountDetail.styled';
import AccountData from './AccountData';
import { AddAccountWrapper } from './AddAccount.styled';

export default function AccountDataList(props) {
  // props.setItems
  let inputData = [];
  const [dataCount, setDataCount] = useState([]); // dataInput Length
  const [dataGroupCount, setDataGroupCount] = useState([]); // dataListInput Length
  const [dataGroups, setDataGroups] = useState([]);
  const [datas, setDatas] = useState([]);
  const [itemsName, setItemsName] = useState('');
  const [itemsDetail, setItemsDetail] = useState('');
  const [totalData, setTotalData] = useState([]);
  useEffect(() => {
    setDataCount([]);
    setDataGroupCount([]);
  }, [props]);
  for (let i = 0; i < props.dataCount; i++) {
    console.log(props.dataCount);
    dataCount.push(i);
  }
  for (let i = 0; i < props.dataGroupCount; i++) {
    dataGroupCount.push(i);
  }

  const setDataOnChange = (e, idx) => {
    let newDatas = [...datas];
    newDatas[idx] = e.target.value;
    setDatas(newDatas);
  };

  const saveBtn = idx => {
    console.log(inputData, '들어가는 데이터');
    // dataGroups[idx]에 넣기
  };

  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <AddAccountWrapper>
        <AccountDetailTitle>
          <h2 style={{ marginBottom: '30px' }}>데이터 등록</h2>
          <div className="accountDetailNotice">
            * 데이터 등록 시 하단의 저장 버튼을 눌러주세요
          </div>
        </AccountDetailTitle>
        {dataGroupCount.map((dataGroup, idx) => (
          <div key={idx}>
            <h3 style={{ marginBottom: '10px' }}>{idx + 1}</h3>
            <ProductInput
              title="데이터 그룹 이름"
              placeholder="데이터 그룹 이름 입력"
              setFunction={setItemsName}
            />
            <ProductInput
              title="데이터 그룹 설명"
              placeholder="데이터 그룹 설명 입력"
              setFunction={setItemsDetail}
            />
            <HorizontalLine color="#F2F2F2" />
            {dataCount.map((data, idx) => (
              <div key={idx}>
                <AccountData />
              </div>
            ))}
            <div className="accountTemporarySaveBtn">
              <WhiteButton onClick={() => saveBtn(idx)}>저장</WhiteButton>
            </div>
            <HorizontalLine color="#F2F2F2" />
          </div>
        ))}
      </AddAccountWrapper>

      <AddProductBtnWrapper>
        <div>
          <BlackButton width="120px" onClick={props.accountNewBtn}>
            등록
          </BlackButton>
        </div>
      </AddProductBtnWrapper>
    </WhiteWrapper>
  );
}
