import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { AddDisplayBlockWrapper } from './AddDisplayBlock.styled';

export default function AddDisplayBlock(props) {
  const setBlockBtn = moduleName => {
    props.setBlock(moduleName);
  };
  return (
    <WhiteWrapper height="450px">
      <div style={{ fontSize: '18px' }}>블록 모음</div>
      <AddDisplayBlockWrapper>
        {props.blocks.map((block, idx) => {
          return (
            <div
              key={idx}
              className="displayBlockImgDiv"
              onClick={() => {
                setBlockBtn(block.moduleName);
              }}
            >
              <img src={block.moduleImgSrc} alt="" />
              <div className="displayBlockTitle">{block.moduleName}</div>
            </div>
          );
        })}
      </AddDisplayBlockWrapper>
    </WhiteWrapper>
  );
}
