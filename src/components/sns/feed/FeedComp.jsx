import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  putFeedLike,
  putFeedScrap,
  putFeedUnLike,
  putFeedUnScrap,
} from '../../../apis/sns/content';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
import { preLoginUrl } from '../../../recoil';
import { followStatus } from '../../../utils/sns/snsFunction';
import {
  FeedActionList,
  FeedCardWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './FeedComp.styled';

export default function FeedComp(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const userToken = localStorage.getItem('token');

  let style = {};
  if (props.parent === 'ProfileFeed') {
    style = {
      cardWrapperMaxWidth: '30.6%',
      cardWrapperMinWidth: 0,
      FeedItemImgWidth: '240px',
      FeedItemImgHeight: '240px',
      FeedItemImgImageHeight: '100%',
    };
  } else if (props.parent === 'FeedList') {
    style = {
      cardWrapperMaxWidth: '22%',
      cardWrapperMinWidth: '150px',
      cardWrapperMargin: '0 6.5px',
      FeedItemImgWidth: '250px',
      FeedItemImgHeight: '250px',
      FeedItemImgImageHeight: 0,
    };
  }
  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };

  const { mutate: addFollow } = useMutation(postAddFollow, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: cancelFollow } = useMutation(putCancelFollow, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedLike } = useMutation(putFeedLike, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnLike } = useMutation(putFeedUnLike, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedScrap } = useMutation(putFeedScrap, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnScrap } = useMutation(putFeedUnScrap, {
    onSuccess: () => {
      props.Refetch();
    },
    onError: () => {
      console.log('에러');
    },
  });

  const feedLikeFunc = (status, data) => {
    // 로그인 페이지 보내주기
    if (userToken === null) {
      // 로그인 안했을 때
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    if (status) {
      feedUnLike(data);
    } else {
      feedLike(data);
    }
  };
  const feedScrapFunc = (status, data) => {
    // 로그인 페이지 보내주기
    if (userToken === null) {
      // 로그인 안했을 때
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    if (status) {
      feedUnScrap(data);
    } else {
      feedScrap(data);
    }
  };
  const mysnsUrl = memberRole => {
    navigate(`/sns/${props.post.memberId}/mysns`, { state: memberRole });
  };
  return (
    <FeedCardWrapper
      maxWidth={style.cardWrapperMaxWidth}
      minWidth={style.cardWrapperMinWidth}
      margin={style.cardWrapperMargin}
    >
      {/* 작성자 */}
      <FeedWriterWrapper followStatus={props.post.followStatus}>
        <div onClick={() => mysnsUrl(props.post.memberRole)}>
          <img src={props.post.memberProfileImg} alt="" />
          <span>{props.post.memberName}</span>
        </div>
        {props.post.isModifiable ? (
          ''
        ) : (
          <span className="FeedWriterWrapperSpan" />
        )}
        <button
          onClick={
            !props.post.followStatus
              ? () => {
                  // 로그인
                  if (userToken === null) {
                    // 로그인 안했을 때
                    setPreUrl(window.location.href);
                    alert('로그인이 필요한 서비스 입니다.');
                    navigate('/login');
                    return;
                  }
                  addFollow({
                    followerMemberId: props.post.memberId,
                    followerMemberRole: props.post.memberRole,
                  });
                }
              : () => {
                  // 로그인
                  cancelFollow({
                    followerMemberId: props.post.memberId,
                    followerMemberRole: props.post.memberRole,
                  });
                }
          }
        >
          {followStatus(props.post.followStatus, props.post.isModifiable)}
        </button>
      </FeedWriterWrapper>
      {/* 컨텐츠 */}
      <FeedItemWrapper>
        <FeedItemImg
          onClick={() => feedDetailNavigator(props.post.feedId)}
          width={style.FeedItemImgWidth}
          height={style.FeedItemImgHeight}
          imgHeight={style.FeedItemImgImageHeight}
        >
          <img src={props.post.feedImageSrc} alt=""></img>
        </FeedItemImg>
        <FeedActionList>
          <div
            onClick={() =>
              feedLikeFunc(props.post.feedLikeStatus, {
                feedId: props.post.feedId,
              })
            }
          >
            {props.post.feedLikeStatus === true ? (
              <AiFillHeart color="#16B51E" />
            ) : (
              <AiOutlineHeart />
            )}
            <span>{props.post.feedLikeCount.toLocaleString()}</span>
          </div>
          <div
            onClick={() =>
              feedScrapFunc(props.post.scrapStatus, {
                feedId: props.post.feedId,
              })
            }
          >
            {props.post.scrapStatus === true ? (
              <MdBookmark color="#16B51E" />
            ) : (
              <BiBookmark />
            )}
            <span>{props.post.feedScrapCount.toLocaleString()}</span>
          </div>
          <Link to={`/sns/detail/${props.post.feedId}`}>
            <BiMessageAlt />
            <span>{props.post.feedCommentCount.toLocaleString()}</span>
          </Link>
        </FeedActionList>
        <FeedItemDescription>
          <div className="card-item-description__content">
            {props.post.feedContent}
          </div>
        </FeedItemDescription>
      </FeedItemWrapper>
    </FeedCardWrapper>
  );
}
