import React from 'react';
import { Link } from 'react-router-dom';
import {
  FollowBlock,
  FollowerBlock,
  FollowImageWrapper,
  FollowNameWrapper,
} from './follow.styled';

export default function FollowUser(props) {
  const follow = props.follow;
  return (
    <FollowBlock>
      <FollowerBlock>
        <Link to>
          <FollowImageWrapper>
            <img src={follow.src} alt="" />
          </FollowImageWrapper>
          <FollowNameWrapper>
            <div>{follow.name}</div>
          </FollowNameWrapper>
        </Link>
        {follow.status}
      </FollowerBlock>
    </FollowBlock>
  );
}
