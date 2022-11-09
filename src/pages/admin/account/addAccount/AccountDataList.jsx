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
import AccountDataGroup from './AccountDataGroup';
import { AddAccountWrapper } from './AddAccount.styled';

export default function AccountDataList(props) {
  // props.setItems

  const [dataCount, setDataCount] = useState([]); // dataInput Length
  const [dataGroupCount, setDataGroupCount] = useState([]); // dataListInput Length
  const [dataGroups, setDataGroups] = useState([]);
  const [datas, setDatas] = useState([]);
  const [totalData, setTotalData] = useState([]);
  useEffect(() => {
    setDataCount([]);
    setDataGroupCount([]);
    let temp = [];
    for (let i = 0; i < props.dataCount; i++) {
      temp.push(i);
    }
    setDataCount(temp);
    temp = [];
    for (let i = 0; i < props.dataGroupCount; i++) {
      temp.push(i);
    }
    setDataGroupCount(temp);
  }, [props.isDataListChange]);

  const setDataOnChange = (e, idx) => {
    let newDatas = [...datas];
    newDatas[idx] = e.target.value;
    setDatas(newDatas);
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
          <AccountDataGroup
            key={idx}
            idx={idx}
            dataGroupCount={dataGroupCount}
            dataCount={dataCount}
            isDataListChange={props.isDataListChange}
            categoryId={props.categoryId}
            pushSubmitData={props.pushSubmitData}
          ></AccountDataGroup>
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
