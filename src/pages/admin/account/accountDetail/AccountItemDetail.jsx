import React from 'react';
import { AccountDetailTextWrapper } from './AccountDetail.styled';

export default function AccountItemDetail(props) {
  const exhibitionItemsProductId =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemId;
    });
  const exhibitionItemsPriorityId =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemPriority;
    });
  return (
    <>
      {exhibitionItemsProductId.map((data, idx) => (
        <AccountDetailTextWrapper key={idx}>
          <div className="accountDetailTitle">데이터 ID</div>
          <div className="accountItemContent">
            {exhibitionItemsProductId[idx]}
          </div>
          <div className="accountDetailTitle" style={{ marginLeft: '30px' }}>
            데이터 순서
          </div>
          <div className="accountItemContent">
            {exhibitionItemsPriorityId[idx]}
          </div>
        </AccountDetailTextWrapper>
      ))}
    </>
  );
}
