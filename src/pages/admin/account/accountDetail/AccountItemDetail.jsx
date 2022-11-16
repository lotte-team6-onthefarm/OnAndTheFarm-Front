import React from 'react';
import { AccountDetailTextWrapper } from './AccountDetail.styled';

export default function AccountItemDetail(props) {
  const exhibitionItemNumber =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemNumber;
    });
  const exhibitionItemsPriorityId =
    props.items.exhibitionAccountItemDetailResponseList.map(item => {
      return item.exhibitionItemPriority;
    });
  return (
    <>
      {exhibitionItemNumber.map((data, idx) => (
        <AccountDetailTextWrapper key={idx}>
          <div className="accountDetailTitle">데이터 ID</div>
          <div className="accountItemContent">{exhibitionItemNumber[idx]}</div>
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
