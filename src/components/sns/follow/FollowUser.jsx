import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
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
  const queryClient = useQueryClient();

  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        alert('팔로우 성공');
        props.refetch();

        queryClient.invalidateQueries('profileInfo');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const { mutate: cancelFollow, isLoading: isPostCancelFollow } = useMutation(
    putCancelFollow,
    {
      onSuccess: res => {
        alert('팔로우 취소');
        props.refetch();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  return (
    <FollowBlock>
      <FollowerBlock>
        <Link to={`/sns/${follow.memberId}/mysns`}>
          <FollowImageWrapper>
            <img src={follow.memberImg} alt="" />
          </FollowImageWrapper>
          <FollowNameWrapper>
            <div>
              {follow.memberName}
              {follow.memberRole}
            </div>
          </FollowNameWrapper>
        </Link>
        {follow.isModifiable ? (
          ''
        ) : follow.followStatus ? (
          <FollowingButton
            onClick={() =>
              cancelFollow({
                followerMemberId: follow.memberId,
                followerMemberRole: follow.memberRole,
              })
            }
          >
            팔로우 취소
          </FollowingButton>
        ) : (
          <FollowButton
            onClick={() =>
              addFollow({
                followerMemberId: follow.memberId,
                followerMemberRole: follow.memberRole,
              })
            }
          >
            팔로우
          </FollowButton>
        )}
      </FollowerBlock>
    </FollowBlock>
  );
}
