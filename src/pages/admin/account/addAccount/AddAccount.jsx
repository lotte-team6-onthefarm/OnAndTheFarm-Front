import React from 'react';
import { useState } from 'react';
import { BlackButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import {
  AddProductBtnWrapper,
  ProductStatusWrapper,
} from '../../../../components/seller/products/productsManagement/ProductManagement.style';
import AccountDataList from './AccountDataList';
import { AddAccountWrapper } from './AddAccount.styled';
export default function AddAccount() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('배너');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dataCount, setDataCount] = useState('');
  const [dataGroupCount, setDataGroupCount] = useState('');

  const [dataVisible, setDataVisible] = useState(false);

  const visibleDataBtn = () => {
    if (dataGroupCount === '') {
      alert('데이터 그룹 수를 입력해주세요');
      return;
    } else if (dataCount === '') {
      alert('데이터 개수를 입력해주세요');
      return;
    }
    setDataVisible(true);
  };
  return (
    <>
      <WhiteWrapper width="100%" marginBottom="10px">
        <AddAccountWrapper>
          <h2>구좌 등록</h2>
          <ProductInput
            title="구좌 이름"
            placeholder="구좌 이름 입력"
            setFunction={setName}
          />
          <HorizontalLine color="#F2F2F2" />
          <ProductInput
            title="구좌 설명"
            placeholder="구좌 설명 입력"
            setFunction={setContent}
          />
          <HorizontalLine color="#F2F2F2" />
          <ProductStatusWrapper>
            <div className="managementProductTitle">카테고리</div>
            <div className="statusBtn">
              <div
                className={category === '배너' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('배너');
                }}
              >
                배너
              </div>
              <div
                className={category === '상품' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('상품');
                }}
              >
                상품
              </div>
              <div
                className={category === 'SNS' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('SNS');
                }}
              >
                SNS
              </div>
              <div
                className={category === '카테고리' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('카테고리');
                }}
              >
                카테고리
              </div>
            </div>
          </ProductStatusWrapper>
          <HorizontalLine color="#F2F2F2" />
          <div style={{ display: 'flex' }}>
            <div className="managementProductTitle">전시 시간</div>
            <input
              type="datetime-local"
              onChange={e => {
                setStartTime(e.target.value);
              }}
            />
            ~
            <input
              type="datetime-local"
              onChange={e => {
                setEndTime(e.target.value);
              }}
            />
          </div>
          <HorizontalLine color="#F2F2F2" />
          <ProductInput
            title="데이터 그룹 개수"
            placeholder="데이터 그룹 수 입력"
            setFunction={setDataGroupCount}
          />
          <HorizontalLine color="#F2F2F2" />
          <ProductInput
            title="데이터 개수"
            placeholder="데이터 개수 입력"
            setFunction={setDataCount}
          />
          <HorizontalLine color="#F2F2F2" />
        </AddAccountWrapper>
        <AddProductBtnWrapper>
          <div>
            <BlackButton onClick={visibleDataBtn} width="120px">
              데이터 추가
            </BlackButton>
          </div>
        </AddProductBtnWrapper>
      </WhiteWrapper>
      {dataVisible && (
        <AccountDataList
          dataCount={dataCount}
          dataGroupCount={dataGroupCount}
        />
      )}
    </>
  );
}
