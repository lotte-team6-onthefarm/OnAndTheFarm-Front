import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconBox, IconWrapper } from '../../seller/common/Icon.style';
import { NodeFeedWrapper } from './SnsFeed.styled';

export default function NoneFeed(props) {
  return (
    <NodeFeedWrapper>
      <IconWrapper>
        <IconBox>
          <AiOutlinePlus />
        </IconBox>
        {props.text}
      </IconWrapper>
    </NodeFeedWrapper>
  );
}
