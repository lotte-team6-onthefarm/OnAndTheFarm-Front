import React from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';
import { preLoginUrl } from '../../../recoil';

export default function FeedWriter(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const userToken = localStorage.getItem('token');
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
          onClick={() => {
            // 로그인 페이지 보내주기
            if (userToken === null) {
              // 로그인 안했을 때
              setPreUrl(window.location.href);
              alert('로그인이 필요한 서비스 입니다.');
              navigate('/login');
              return;
            }

            cancelFollow({
              followerMemberId: props.memberId,
              followerMemberRole: props.memberRole,
            });
          }}
        >
          &nbsp;&nbsp;팔로잉
        </button>
      ) : (
        <button
          onClick={() => {
            // 로그인 페이지 보내주기
            if (userToken === null) {
              // 로그인 안했을 때
              setPreUrl(window.location.href);
              alert('로그인이 필요한 서비스 입니다.');
              navigate('/login');
              return;
            }

            addFollow({
              followerMemberId: props.memberId,
              followerMemberRole: props.memberRole,
            });
          }}
        >
          &nbsp;&nbsp;팔로우
        </button>
      )}
    </FeedWriterWrapper>
  );
}
