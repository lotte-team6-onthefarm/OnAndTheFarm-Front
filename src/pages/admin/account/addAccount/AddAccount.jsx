import React from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postAccountNew } from '../../../../apis/admin/account';
import { BlackButton } from '../../../../components/common/Button.style';
import { HorizontalLine } from '../../../../components/common/HorizontalLine.style';
import { WhiteWrapper } from '../../../../components/seller/common/Box.style';
import ProductInput from '../../../../components/seller/products/productsManagement/ProductInput';
import {
  AddProductBtnWrapper,
  ProductStatusWrapper,
} from '../../../../components/seller/products/productsManagement/ProductManagement.style';
import { getDateNoConnect } from '../../../../utils/commonFunction';
import AccountDataList from './AccountDataList';
import { AddAccountWrapper } from './AddAccount.styled';
export default function AddAccount() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('상품');
  const [categoryId, setCategoryId] = useState(1);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dataCount, setDataCount] = useState('');
  const [dataGroupCount, setDataGroupCount] = useState('');
  const [dataVisible, setDataVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [isDataListChange, setIsDataListChange] = useState(false);
  const navigate = useNavigate();
  const { mutate: accountNew } = useMutation('postAccountNew', postAccountNew, {
    onSuccess: () => {
      alert('구좌 등록 성공');
      navigate('/admin');
    },
  });
  const validataionCheck = () => {
    // 유효성 체크
    if (name === '') {
      alert('이름을 입력해주세요');
      return false;
    } else if (content === '') {
      alert('설명을 입력해주세요');
      return false;
    } else if (startTime === '') {
      alert('시작 시간을 입력해주세요');
      return false;
    } else if (endTime === '') {
      alert('종료 시간을 입력해주세요');
      return false;
    } else if (content === '') {
      alert('설명을 입력해주세요');
      return false;
    } else if (
      submitData.exhibitionItemsFormRequests.length != dataGroupCount
    ) {
      alert('데이터 저장을 확인해주세요');
      return false;
    } else {
      return true;
    }
  };

  const submitData = {
    // 상품 정보 데이터 객체화
    exhibitionAccountCategoryId: categoryId,
    exhibitionAccountName: name,
    exhibitionAccountStartTime: getDateNoConnect(startTime),
    exhibitionAccountEndTime: getDateNoConnect(endTime),
    exhibitionAccountDetail: content,
    exhibitionItemsFormRequests: items,
  };

  const accountNewBtn = () => {
    console.log(submitData, dataGroupCount, '최종 보내주는 데이터');

    const isValidation = validataionCheck();
    if (isValidation) {
      accountNew(submitData);
    }
  };

  const pushSubmitData = inputData => {
    submitData.exhibitionItemsFormRequests.push(inputData);
    console.log(submitData, '최종');
  };

  const visibleDataBtn = () => {
    if (dataGroupCount === '') {
      alert('데이터 그룹 수를 입력해주세요');
      return;
    } else if (dataCount === '') {
      alert('데이터 개수를 입력해주세요');
      return;
    }
    submitData.exhibitionItemsFormRequests = [];
    setIsDataListChange(!isDataListChange);
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
          <ProductStatusWrapper width="100%">
            <div className="managementProductTitle">카테고리</div>
            <div className="statusBtn">
              <div
                className={category === '상품' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('상품');
                  setCategoryId(1);
                }}
              >
                상품
              </div>
              <div
                className={category === 'SNS' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('SNS');
                  setCategoryId(2);
                }}
              >
                SNS
              </div>
              <div
                className={category === '배너' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('배너');
                  setCategoryId(3);
                }}
              >
                배너
              </div>
              <div
                className={category === '뱃지' ? 'statusBtnactive' : ''}
                onClick={() => {
                  setCategory('뱃지');
                  setCategoryId(4);
                }}
              >
                뱃지
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
            title="아이템 리스트 개수"
            placeholder="아이템 리스트 수 입력"
            setFunction={setDataGroupCount}
          />
          <HorizontalLine color="#F2F2F2" />
          <ProductInput
            title="아이템 개수"
            placeholder="아이템 개수 입력"
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
          setItems={setItems}
          dataCount={dataCount}
          dataGroupCount={dataGroupCount}
          accountNewBtn={accountNewBtn}
          categoryId={categoryId}
          isDataListChange={isDataListChange}
          setIsDataListChange={setIsDataListChange}
          pushSubmitData={pushSubmitData}
        />
      )}
    </>
  );
}
