import React from 'react';
import { useState } from 'react';
import { WhiteButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import AccountData from './AccountData';

export default function AccountDataGroup(props) {
  let inputData = {
    exhibitionItemsName: '',
    exhibitionItemsDetail: '',
    exhibitionItemFormRequests: [],
  };

  const [data, setData] = useState(0);
  const [itemsName, setItemsName] = useState('');
  const [itemsDetail, setItemsDetail] = useState('');

  const saveBtn = datas => {
    inputData.exhibitionItemsName = itemsName;
    inputData.exhibitionItemsDetail = itemsDetail;
    inputData.exhibitionItemFormRequests = datas;
    console.log(inputData, '들어가는 데이터');
    props.pushSubmitData(inputData);
    // dataGroups[idx]에 넣기
  };
  return (
    <div>
      <h3 style={{ marginBottom: '10px' }}>{props.idx + 1}</h3>
      <ProductInput
        title="아이템 리스트 이름"
        placeholder="아이템 리스트 이름 입력"
        setFunction={setItemsName}
      />
      <ProductInput
        title="아이템 리스트 설명"
        placeholder="아이템 리스트 설명 입력"
        setFunction={setItemsDetail}
      />
      <HorizontalLine color="#F2F2F2" />
      <AccountData
        dataCount={props.dataCount}
        saveBtn={saveBtn}
        categoryId={props.categoryId}
        isDataListChange={props.isDataListChange}
      />
      <HorizontalLine color="#F2F2F2" />
    </div>
  );
}
