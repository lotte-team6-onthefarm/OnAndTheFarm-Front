import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';

export default function AddDisplayDatasList(props) {
  return (
    <WhiteWrapper width="49%" minHeight="300px">
      소재 리스트
      <div
        style={{
          marginTop: '10px',
          height: '400px',
          overflow: 'auto',
        }}
      >
        {props.lists.map((list, idx) => {
          return (
            <ListTextWrapper
              key={idx}
              style={{
                marginRight: props.lists.length > 5 ? '10px' : '0px',
              }}
            >
              <div className="mainTextContent">소재 리스트 이름</div>
            </ListTextWrapper>
          );
        })}
      </div>
    </WhiteWrapper>
  );
}
