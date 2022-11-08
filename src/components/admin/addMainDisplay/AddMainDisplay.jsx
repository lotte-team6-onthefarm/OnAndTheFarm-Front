import React from 'react';
import { useState } from 'react';
import { BlackButton } from '../../common/Button.style';
import { PageCol, WhiteWrapper } from '../../seller/common/Box.style';
import { AddMainDisplayWrapper } from './AddMainDisplay.styled';
import AddDisplayBlock from './block/AddDisplayBlock';
import AddDisplayDataTool from './dataTool/AddDisplayDataTool';
import AddDisplayCategory from './category/AddDisplayCategory';
import AddDisplayAccountList from './accountList/AddDisplayAccountList';
import AddDisplayDatasList from './datasList/AddDisplayDatasList';
import AddDisplayDataList from './dataList/AddDisplayDataList';
import AddDisplayOrganize from './organize/AddDisplayOrganize';
import banner from '../../../assets/모듈/배너.JPG';
import product from '../../../assets/모듈/상품.JPG';
import miniB from '../../../assets/모듈/미니배너.JPG';
import categoryImg from '../../../assets/모듈/카테고리.JPG';
import sns from '../../../assets/모듈/SNS.JPG';
import { useMutation } from 'react-query';
import { postTemporaryNew } from '../../../apis/admin/temporary';

export default function AddMainDisplay() {
  const [block, setBlock] = useState('');
  const [category, setCategory] = useState('상품');
  const [categoryId, setCategoryId] = useState(1);
  const [dataTool, setDataTool] = useState(100054);
  const [account, setAccount] = useState(0);
  const [items, setItems] = useState(0);
  const [itemsName, setItemsName] = useState('');
  const [itemsDetail, setItemsDetail] = useState('');
  const [priority, setPriority] = useState(0);
  // 블록 리스트
  const blocks = [
    { moduleImgSrc: banner, moduleName: '배너 블록' },
    { moduleImgSrc: miniB, moduleName: '미니배너 블록' },
    { moduleImgSrc: product, moduleName: '상품 블록' },
    { moduleImgSrc: categoryImg, moduleName: '카테고리 블록' },
    { moduleImgSrc: sns, moduleName: 'SNS 블록' },
  ];
  // 소재들
  const datas = [1, 2, 3, 4, 5];
  // 데이터 툴
  const dataTools = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const validataionCheck = () => {
    // 유효성 체크
    if (block === '') {
      alert('모듈을 선택해주세요');
      return false;
    } else if (dataTool === 0) {
      alert('데이터 툴을 선택해주세요');
      return false;
    } else if (account === 0) {
      alert('구좌를 선택해주세요');
      return false;
    } else if (items === {}) {
      alert('소재 리스트를 선택해주세요');
      return false;
    } else if (priority === 0) {
      alert('우선순위를 입력해주세요');
      return false;
    } else {
      return true;
    }
  };

  const submitData = {
    // 상품 정보 데이터 객체화
    exhibitionTemporaryCategoryId: categoryId,
    exhibitionTemporaryModuleName: block,
    exhibitionTemporaryDataPicker: dataTool,
    exhibitionTemporaryAccountId: account,
    exhibitionTemporaryItemsId: items,
    exhibitionTemporaryPriority: priority,
  };

  const { mutate: temporaryNew } = useMutation(
    'postTemporaryNew',
    postTemporaryNew,
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );

  const temporaryNewBtn = () => {
    const isValidation = validataionCheck();
    if (isValidation) {
      console.log(submitData, '제출데이터');
    }
  };
  return (
    <>
      <AddMainDisplayWrapper>
        <PageCol width="70%">
          <AddDisplayBlock blocks={blocks} setBlock={setBlock} />
        </PageCol>
        <PageCol width="28%">
          <AddDisplayDataTool dataTools={dataTools} />
        </PageCol>
      </AddMainDisplayWrapper>
      <AddMainDisplayWrapper>
        <PageCol width="100%">
          <AddDisplayCategory
            category={category}
            setCategory={setCategory}
            setCategoryId={setCategoryId}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AddDisplayAccountList
              category={category}
              setAccount={setAccount}
              categoryId={categoryId}
            />
            <WhiteWrapper
              width="30%"
              style={{
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              우선 순위
              <input
                className="accountPriorityContent"
                placeholder="1 - 999"
                onChange={e => {
                  setPriority(e.target.value);
                }}
              />
            </WhiteWrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AddDisplayDatasList
              account={account}
              setItems={setItems}
              setItemsName={setItemsName}
              setItemsDetail={setItemsDetail}
            />
            <AddDisplayDataList
              datas={datas}
              items={items}
              itemsName={itemsName}
              itemsDetail={itemsDetail}
            />
          </div>
          <AddDisplayOrganize />
          <div className="addMainDisplayButton">
            <BlackButton
              style={{ marginTop: '30px' }}
              onClick={temporaryNewBtn}
            >
              등록하기
            </BlackButton>
          </div>
        </PageCol>
      </AddMainDisplayWrapper>
    </>
  );
}
