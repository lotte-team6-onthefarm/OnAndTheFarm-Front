import React from 'react';
import { useQuery } from 'react-query';
import { AccountDetailTextWrapper } from '../../../../pages/admin/account/accountDetail/AccountDetail.styled';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';
import { getExhibitionAllItem } from '../../../../apis/admin/account';

export default function AddDisplayDataList(props) {
  const { data: item, isLoading } = useQuery(
    ['getExhibitionItems', props.items],
    () => getExhibitionAllItem(props.items),
    { keepPreviousData: true, onSuccess: res => {}, onError: () => {} },
  );
  return (
    <>
      {!isLoading && (
        <WhiteWrapper width="49%" minHeight="300px">
          <ListTextWrapper>
            <div className="mainTextTitle">리스트 이름</div>
            <div className="mainTextContent">{props.itemsName}</div>
          </ListTextWrapper>
          <ListTextWrapper>
            <div className="mainTextTitle">리스트 설명</div>
            <div className="mainTextContent">{props.itemsDetail}</div>
          </ListTextWrapper>
          <div style={{ height: '300px', overflow: 'auto' }}>
            {item.map((i, idx) => {
              return (
                <AccountDetailTextWrapper key={idx}>
                  <div className="accountDetailTitle">데이터 ID</div>
                  <div className="accountItemContent">{i.exhibitionItemId}</div>
                  <div
                    className="accountDetailTitle"
                    style={{ marginLeft: '20px' }}
                  >
                    데이터 순서
                  </div>
                  <input
                    className="accountItemContent"
                    defaultValue={i.exhibitionItemPriority}
                    style={{
                      marginRight: item.length > 4 ? '10px' : '0px',
                    }}
                  />
                </AccountDetailTextWrapper>
              );
            })}
          </div>
        </WhiteWrapper>
      )}
    </>
  );
}
