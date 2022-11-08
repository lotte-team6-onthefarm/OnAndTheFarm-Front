import React, { useEffect, useState } from 'react';
import { WhiteWrapper } from '../../seller/common/Box.style';
import { AddDisplayBlockWrapper } from './DisplayBlock.styled';

export default function DisplayBlock(props) {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    setTemp(props.temporaryModuleList);
  }, [props.flag]);

  return (
    <WhiteWrapper height="800px">
      <div style={{ fontSize: '18px' }}>메인 페이지 미리보기</div>
      <AddDisplayBlockWrapper>
        {temp.map((block, idx) => {
          return (
            <div key={idx} className="displayBlockImgDiv">
              <img
                src={
                  props.blocks[block.exhibitionTemporaryModuleName].moduleImgSrc
                }
                alt=""
              />
              <div className="displayBlockTitle">
                {block.exhibitionTemporaryModuleName}
              </div>
            </div>
          );
        })}
      </AddDisplayBlockWrapper>
    </WhiteWrapper>
  );
}
