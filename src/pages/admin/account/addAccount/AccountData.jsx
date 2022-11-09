import React, { useEffect } from 'react';
import { useState } from 'react';
import { WhiteButton } from '../../../../components/common/Button.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';

export default function AccountData(props) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas([]);
    let temp = [];
    for (let i = 0; i < props.dataCount.length; i++) {
      temp.push({
        exhibitionCategoryId: props.categoryId,
        exhibitionItemNumber: 1,
        exhibitionItemPriority: i+1,
      });
    }
    setDatas(temp);
  }, [props.isDataListChange]);

  const setDataOnChange = (e, idx) => {
    let newDatas = [...datas];
    newDatas[idx].exhibitionItemNumber = Number(e);
    setDatas(newDatas);
  };

  const saveDataGroup = () => {
    props.saveBtn(datas)
  };

  return (
    <div>
      {props.dataCount.map((data, idx) => (
        <div key={idx}>
          <ProductInput
            title="데이터 아이디"
            placeholder="데이터 아이디 입력"
            setFunction={(event) => setDataOnChange(event, idx)}
          />
        </div>
      ))}
      <div className="accountTemporarySaveBtn">
        {/* <WhiteButton onClick={() => props.saveBtn()}>저장</WhiteButton> */}
        <WhiteButton onClick={saveDataGroup}>저장</WhiteButton>
      </div>
    </div>
  );
}
