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
  // const [dataCount, setDataCount] = useState([]); // dataInput Length
  // const [dataGroupCount, setDataGroupCount] = useState([]); // dataListInput Length
  const [dataGroups, setDataGroups] = useState([]);
  const [datas, setDatas] = useState([]);
  const [itemsName, setItemsName] = useState('');
  const [itemsDetail, setItemsDetail] = useState('');
  const [totalData, setTotalData] = useState([]);
  useEffect(() => {
    setDatas([]);
    setDataGroups([]);
  }, [props]);

  useEffect(() => {
    console.log('드루와?', props.dataCount, props.dataGroupCount, 'eiei');

    for (let i = 0; i < props.dataCount; i++) {
      // dataCount.push(i);
      console.log(i, '소좌푸쉬');
      setDatas([
        {
          exhibitionCategoryId: props.categoryId,
          exhibitionItemPriority: i + 1,
        },
        ...datas,
      ]);
      // datas.push({
      //   exhibitionCategoryId: props.categoryId,
      //   exhibitionItemPriority: i + 1,
      // });
      inputData.push(0); // 더미 데이터
    }
    for (let i = 0; i < props.dataGroupCount; i++) {
      console.log(i, '리스트 푸쉬');
      // dataGroupCount.push(i);
      setDataGroups([{}, ...dataGroups]);
      // dataGroups.push({});
    }
  }, []);

  console.log(datas, dataGroups, '함 보자');
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
        {dataGroups.map((dataGroup, idx) => (
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
            {datas.map((data, idx) => (
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
