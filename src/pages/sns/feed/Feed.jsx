import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
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
import { useInfiniteQuery } from 'react-query';
import { getAllFeedList } from '../../../apis/sns/profile';
import { useRecoilState } from 'recoil';
import { snsNowId } from '../../../recoil';
import { followStatus } from '../../../utils/sns/snsFunction';

export default function Feed() {
  const [id, setId] = useRecoilState(snsNowId);
  const { ref, inView } = useInView();
  const {
    data,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['allFeedList', id],
    ({ pageParam = 0 }) => getAllFeedList(pageParam, id),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {},
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
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
                    <Link to>
                      <AiOutlineHeart />
                      <span>{post.feedLikeCount}</span>
                    </Link>
                    <Link to>
                      <BiBookmark />
                      <span>{post.feedScrapCount}</span>
                    </Link>
                    <Link to>
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
          {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
        </FeedDetailWrapper>
      )}
    </>
  );
}
