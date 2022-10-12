import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconBox, IconWrapper } from '../../seller/common/Icon.style';
import { NodeFeedWrapper } from './SnsFeed.styled';

export default function NoneFeed(props) {
  return (
    <Link to>
      <NodeFeedWrapper>
        <IconWrapper>
          <IconBox>
            <AiOutlinePlus />
          </IconBox>
          {props.text}
        </IconWrapper>
      </NodeFeedWrapper>
    </Link>
  );
}
