import React from 'react';
import { useQuery } from 'react-query';
import { getAllModuleList } from '../../../../apis/exhibition/module';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { AddDisplayBlockWrapper } from './AddDisplayBlock.styled';

export default function AddDisplayBlock(props) {
  const setBlockBtn = moduleName => {
    props.setBlock(moduleName);
  };

  const { data: blocks, isLoading } = useQuery(
    'getAllModuleList',
    getAllModuleList,
    {
      onSuccess: () => {},
    },
  );
  return (
    <WhiteWrapper height="450px">
      <div style={{ fontSize: '18px' }}>모듈 모음</div>
      {!isLoading && (
        <AddDisplayBlockWrapper>
          {blocks.map((block, idx) => {
            return (
              <div
                key={idx}
                className={
                  props.block === block.moduleName
                    ? 'displayBlockImgDivActive'
                    : 'displayBlockImgDiv'
                }
                onClick={() => {
                  setBlockBtn(block.moduleName);
                }}
              >
                <img src={block.moduleImgSrc} alt="" />
                <div
                  className={
                    // props.block === block.moduleName
                    //   ? 'displayBlockTitleActive'
                    //   : 'displayBlockTitle'
                    'displayBlockTitle'
                  }
                >
                  {block.moduleName}
                </div>
              </div>
            );
          })}
        </AddDisplayBlockWrapper>
      )}
    </WhiteWrapper>
  );
}
