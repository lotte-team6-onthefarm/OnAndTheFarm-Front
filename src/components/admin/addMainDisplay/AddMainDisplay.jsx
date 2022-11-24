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
import { useMutation } from 'react-query';
import {
  getTemporaryAll,
  postTemporaryNew,
} from '../../../apis/admin/temporary';
import { putExhibitionItemPriority } from '../../../apis/admin/account';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

export default function AddMainDisplay() {
  const { state } = useLocation();
  const [block, setBlock] = useState('');
  const [category, setCategory] = useState('상품');
  const [categoryId, setCategoryId] = useState(1);
  const [dataTool, setDataTool] = useState(0);
  const [account, setAccount] = useState(0);
  const [items, setItems] = useState(0);
  const [itemsName, setItemsName] = useState('');
  const [itemsDetail, setItemsDetail] = useState('');
  const [priority, setPriority] = useState(0);
  const [itemPriorityList, setItemPriorityList] = useState([]);
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTime(state);
  }, [state]);

  const validataionCheck = () => {
    // 유효성 체크
    if (block === '') {
      alert('모듈을 선택해주세요');
      return false;
    } else if (dataTool === 0) {
      alert('데이터 피커를 선택해주세요');
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
    time: time,
  };

  // 임시 테이블에 추가
  const { mutate: temporaryNew } = useMutation(
    'postTemporaryNew',
    postTemporaryNew,
    {
      onSuccess: () => {
        navigate('/admin/display/set');
      },
      onError: () => {},
    },
  );

  // 소재 순서 정렬하는 api 보내기
  const { mutate: exhibitionItemPriority } = useMutation(
    'putExhibitionItemPriority',
    putExhibitionItemPriority,
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );

  const temporaryNewBtn = () => {
    const isValidation = validataionCheck();
    if (isValidation) {
      temporaryNew(submitData);
      // 소재 순서 정렬하는 api 보내기
      exhibitionItemPriority({
        exhibitionItemPriorityUpdateFormRequests: itemPriorityList,
      });
    }
  };

  const {
    isLoading: isGetTemporaryAll,
    refetch: getTemporaryAllRefetch,
    data: temporaryList,
  } = useQuery('getTemporaryAll', () => getTemporaryAll(time), {
    enabled: time !== '',
    onSuccess: res => {
      setPriority(res.length + 1);
    },
    onError: () => {
      console.log('에러');
    },
  });

  return (
    <>
      <AddMainDisplayWrapper>
        <PageCol width="70%">
          <AddDisplayBlock block={block} setBlock={setBlock} />
        </PageCol>
        <PageCol width="28%">
          <AddDisplayDataTool dataTool={dataTool} setDataTool={setDataTool} />
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
                value={priority}
                disabled={true}
              />
            </WhiteWrapper>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AddDisplayDatasList
              account={account}
              items={items}
              setItems={setItems}
              setItemsName={setItemsName}
              setItemsDetail={setItemsDetail}
            />
            <AddDisplayDataList
              items={items}
              itemsName={itemsName}
              itemsDetail={itemsDetail}
              itemPriorityList={itemPriorityList}
              setItemPriorityList={setItemPriorityList}
            />
          </div>
          <AddDisplayOrganize
            block={block}
            category={category}
            dataTool={dataTool}
            account={account}
            itemsName={itemsName}
            itemsDetail={itemsDetail}
            priority={priority}
          />
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
