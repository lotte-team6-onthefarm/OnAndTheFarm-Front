import React from 'react';
import { AccountDetailTextWrapper } from '../../../../pages/admin/account/accountDetail/AccountDetail.styled';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';

export default function AddDisplayDataList(props) {
  return (
    <WhiteWrapper width="49%" minHeight="300px">
      <ListTextWrapper>
        <div className="mainTextTitle">리스트 이름</div>
        <div className="mainTextContent">이름</div>
      </ListTextWrapper>
      <ListTextWrapper>
        <div className="mainTextTitle">리스트 설명</div>
        <div className="mainTextContent">설명</div>
      </ListTextWrapper>
      <div style={{ height: '300px', overflow: 'auto' }}>
        {props.datas.map((data, idx) => {
          return (
            <AccountDetailTextWrapper key={idx}>
              <div className="accountDetailTitle">데이터 ID</div>
              <div className="accountItemContent">1</div>
              <div
                className="accountDetailTitle"
                style={{ marginLeft: '20px' }}
              >
                데이터 순서
              </div>
              <input
                className="accountItemContent"
                defaultValue={idx + 1}
                style={{
                  marginRight: props.datas.length > 4 ? '10px' : '0px',
                }}
              />
            </AccountDetailTextWrapper>
          );
        })}
      </div>
    </WhiteWrapper>
  );
}
