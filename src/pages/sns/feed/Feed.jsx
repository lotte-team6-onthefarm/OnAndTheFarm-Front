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
import { useQuery, useInfiniteQuery } from 'react-query';
import { getAllFeedList } from '../../../apis/sns/profile';
import { useState } from 'react';
import { followStatus } from '../snsCommotFunc';

export default function Feed() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery(
    'allFeedList',
    () => getAllFeedList(page),
    {
      onSuccess: () => {},
    },
  );
  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   'allFeedList',
  //   () => getAllFeedList(page),
  //   {
  //     keepPreviousData: true,
  //     getNextPageParam: lastPage =>
  //       !lastPage.isLast ? lastPage.nextPage : undefined,
  //     onSuccess: res => {
  //       setPage(page + 1);
  //     },
  //   },
  // );

  // useEffect(() => {
  //   if (inView) fetchNextPage();
  // }, [inView]);

  const navigate = useNavigate();
  const feedDetailNavigator = () => {
    navigate('/sns/detail');
  };
  return (
    <>
      {!isLoading && (
        <FeedDetailWrapper>
          {/* 작성자 */}
          {data.posts.map((post, idx) => (
            <FeedCardWrapper key={idx}>
              {/* 작성자 */}
              <FeedWriterWrapper followStatus={post.followStatus}>
                <Link to>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6192/6192662.png"
                    alt=""
                  />
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
              <FeedItemWrapper onClick={feedDetailNavigator}>
                <FeedItemImg>
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
          ))}
          {/* {isFetchingNextPage ? <Loading></Loading> : <div ref={ref}></div>} */}
        </FeedDetailWrapper>
      )}
    </>
  );
}
