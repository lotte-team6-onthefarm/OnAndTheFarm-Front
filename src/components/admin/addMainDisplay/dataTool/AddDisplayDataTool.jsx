import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';

export default function AddDisplayDataTool(props) {
  return (
    <WhiteWrapper height="450px">
      <div style={{ fontSize: '18px' }}>데이터 툴</div>
      <div
        style={{
          marginTop: '10px',
          height: '380px',
          overflow: 'auto',
        }}
      >
        {props.dataTools.map((dataTool, idx) => {
          return (
            <ListTextWrapper
              key={idx}
              style={{
                marginRight: props.dataTools.length > 5 ? '10px' : '0px',
              }}
            >
              <div className="mainTextContent">데이터 툴 리스트 이름</div>
            </ListTextWrapper>
          );
        })}
      </div>
    </WhiteWrapper>
  );
}
