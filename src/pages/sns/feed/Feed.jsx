import React, { useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
  FeedActionList,
  FeedCardWrapper,
  FeedDetailWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './Feed.styled';
import { useInfiniteQuery, useMutation } from 'react-query';
import {
  getAllFeedList,
  postAddFollow,
  putCancelFollow,
} from '../../../apis/sns/profile';
import { useRecoilValue } from 'recoil';
import { snsNowId } from '../../../recoil';
import { followStatus } from '../../../utils/sns/snsFunction';
import {
  putFeedLike,
  putFeedScrap,
  putFeedUnLike,
  putFeedUnScrap,
} from '../../../apis/sns/content';
import { MdBookmark } from 'react-icons/md';

export default function Feed() {
  const id = useRecoilValue(snsNowId);
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };

  const {
    data,
    refetch: getAllFeedListRefetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['allFeedList', id],
    ({ pageParam = 0 }) => getAllFeedList(pageParam, id),
    {
      refetchOnMount: true,
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {},
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        alert('팔로우 성공');
        getAllFeedListRefetch();
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
        getAllFeedListRefetch();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const { mutate: feedLike } = useMutation(putFeedLike, {
    onSuccess: res => {
      alert('좋아요 성공');
      getAllFeedListRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnLike } = useMutation(putFeedUnLike, {
    onSuccess: res => {
      alert('좋아요 취소');
      getAllFeedListRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedScrap } = useMutation(putFeedScrap, {
    onSuccess: res => {
      alert('스크랩 성공');
      getAllFeedListRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnScrap } = useMutation(putFeedUnScrap, {
    onSuccess: res => {
      alert('스크랩 취소');
      getAllFeedListRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });

  const feedLikeFunc = (status, data) => {
    if (status) {
      feedUnLike(data);
    } else {
      feedLike(data);
    }
  };
  const feedScrapFunc = (status, data) => {
    if (status) {
      feedUnScrap(data);
    } else {
      feedScrap(data);
    }
  };
  return (
    <>
      {!isLoading && (
        <FeedDetailWrapper>
          {/* 작성자 */}
          {data.pages.map((page, idx) =>
            page.posts.map((post, idx) => (
              <FeedCardWrapper key={idx}>
                {/* 작성자 */}
                <FeedWriterWrapper followStatus={post.followStatus}>
                  <Link to={`/sns/${post.memberId}/mysns`}>
                    <img src={post.memberProfileImg} alt="" />
                    <span>{post.memberName}</span>
                  </Link>
                  {post.isModifiable ? (
                    ''
                  ) : (
                    <span className="FeedWriterWrapperSpan" />
                  )}
                  <button>
                    {followStatus(post.followStatus, post.isModifiable)}
                  </button>
                </FeedWriterWrapper>
                {/* 컨텐츠 */}
                <FeedItemWrapper>
                  <FeedItemImg onClick={() => feedDetailNavigator(post.feedId)}>
                    <img src={post.feedImageSrc} alt=""></img>
                  </FeedItemImg>
                  <FeedActionList>
                    <Link
                      to
                      onClick={() =>
                        feedLikeFunc(post.feedLikeStatus, {
                          feedId: post.feedId,
                        })
                      }
                    >
                      {post.feedLikeStatus === true ? (
                        <AiFillHeart color="#16B51E" />
                      ) : (
                        <AiOutlineHeart />
                      )}
                      <span>{post.feedLikeCount}</span>
                    </Link>
                    <Link
                      to
                      onClick={() =>
                        feedScrapFunc(post.scrapStatus, { feedId: post.feedId })
                      }
                    >
                      {post.scrapStatus === true ? (
                        <MdBookmark color="#16B51E" />
                      ) : (
                        <BiBookmark />
                      )}
                      <span>{post.feedScrapCount}</span>
                    </Link>
                    <Link to={`/sns/detail/${post.feedId}`}>
                      <BiMessageAlt />
                      <span>{post.feedShareCount}</span>
                    </Link>
                  </FeedActionList>
                  <FeedItemDescription>
                    <div className="card-item-description__content">
                      {post.feedContent}
                    </div>
                  </FeedItemDescription>
                </FeedItemWrapper>
              </FeedCardWrapper>
            )),
          )}
          {(!isFetchingNextPage || !isPreviousData) && <div ref={ref}></div>}
        </FeedDetailWrapper>
      )}
    </>
  );
}
