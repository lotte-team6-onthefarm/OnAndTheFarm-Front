import React from 'react';
import { Link } from 'react-router-dom';
import {
  FollowBlock,
  FollowButton,
  FollowerBlock,
  FollowImageWrapper,
  FollowingButton,
  FollowNameWrapper,
} from './follow.styled';

export default function FollowUser(props) {
  const follow = props.follow;
  return (
    <FollowBlock>
      <FollowerBlock>
        <Link to>
          <FollowImageWrapper>
            <img src={follow.memberImg} alt="" />
          </FollowImageWrapper>
          <FollowNameWrapper>
            <div>{follow.memberName}</div>
          </FollowNameWrapper>
        </Link>
        {follow.followStatus ? (
          <FollowingButton>팔로잉</FollowingButton>
        ) : (
          <FollowButton>팔로우</FollowButton>
        )}
      </FollowerBlock>
    </FollowBlock>
  );
}
