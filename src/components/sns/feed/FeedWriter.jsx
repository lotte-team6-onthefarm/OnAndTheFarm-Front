import React from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';

export default function FeedWriter(props) {
  const navigate = useNavigate();
  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        alert('팔로우 성공');
        props.getFeedDetailRefetch();
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
        props.getFeedDetailRefetch();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const mysnsUrl = () => {
    navigate(`/sns/${props.memberId}/mysns`, { state: props.memberRole });
  };
  return (
    <FeedWriterWrapper>
      <div onClick={mysnsUrl}>
        <img src={props.memberProfileImg} alt="프로필이미지" />
        <span>{props.memberName}</span>
      </div>

      {props.isModifiable ? (
        <></>
      ) : props.followStatus ? (
        <button
          onClick={() =>
            cancelFollow({
              followerMemberId: props.memberId,
              followerMemberRole: props.memberRole,
            })
          }
        >
          &nbsp;&nbsp;팔로잉
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
          &nbsp;&nbsp;팔로우
        </button>
      )}
    </FeedWriterWrapper>
  );
}
