import React from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';

export default function FeedWriter(props) {
  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        alert('팔로우 성공')
        props.getFeedDetailRefetch()
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
        props.getFeedDetailRefetch()
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return (
    <FeedWriterWrapper>
      <Link to>
        <img src={props.memberProfileImg} alt="프로필이미지" />
        <span>{props.memberName}</span>
      </Link>
      <span className="FeedWriterWrapperSpan" />
      {props.followStatus ? (
        <button
          onClick={() =>
            cancelFollow({
              followerMemberId: props.memberId,
              followerMemberRole: props.memberRole,
            })
          }
        >
          팔로잉
        </button>
      ) : (
        <button
          onClick={() =>
            addFollow({
              followerMemberId: props.memberId,
              followerMemberRole: props.memberRole,
            })
          }
        >
          팔로우
        </button>
      )}
    </FeedWriterWrapper>
  );
}
