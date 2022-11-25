import React from 'react';
import { AddDisplayBlockWrapper, BlockDiv } from './Block.styled';

export default function Block(props) {
  const originalIndex = props.findTemp(props.id).index;

  const dragFunction = (event, type, id) => {
    event.preventDefault();
    event.stopPropagation();
    if (type === 'enter' && props.flag === false) {
      props.setDragItem(id);
      props.setFlag(true);
    }
    if (type === 'drop') {
      props.setDropItem(id);
      props.moveTemp(id);
      props.setFlag(false);
    }
  };
  return (
    <BlockDiv
      className="displayBlockImgDiv"
      onDragOver={event => {
        return dragFunction(event, 'over', props.id);
      }}
      onDrop={event => dragFunction(event, 'drop', props.id)}
      onDragEnter={event => dragFunction(event, 'enter', props.id)}
      onDragLeave={event => dragFunction(event, 'leave', props.id)}
    >
      <img
        src={
          props.allModuleList[props.block.exhibitionTemporaryModuleName]
            .moduleImgSrc
        }
        alt=""
      />
      <div className="displayBlockTitle">
        {props.block.exhibitionTemporaryModuleName}
      </div>
    </BlockDiv>
  );
}
