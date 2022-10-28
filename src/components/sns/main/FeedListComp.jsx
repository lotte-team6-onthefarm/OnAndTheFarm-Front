import React, { useEffect, useState, useRef } from 'react';
import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from 'react-query';
import { useInView } from 'react-intersection-observer';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FeedWriter from '../../../components/sns/feed/FeedWriter';
import {
  SnsMainWrapper,
  SelectWrapper,
  FeedActionList,
  FeedCardWrapper,
  FeedDetailWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './FeedListComp.styled';
import {
  getFeedByFollow,
  getFeedByLike,
  getFeedByRecent,
  getFeedByViewCount,
  getFeedList,
} from '../../../apis/sns/main';
import { postAddFollow, putCancelFollow } from '../../../apis/sns/profile';
import Loading from '../../../components/common/Loading';
import FeedComp from '../feed/FeedComp';

export default function FeedListComp(props) {
  const myRef = useRef();
  const param = useParams();
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  // useQuery
  // 최신순
  const {
    data,
    refetch: getFeedListRefetch,
    fetchNextPage,
    isLoading: getFeedLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFeed', props.url],
    ({ pageParam = 0 }) =>
      getFeedList({ url: props.url, searchWord: props.searchWord }, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: () => {},
    },
  );

  useEffect(() => {
    queryClient.removeQueries('getFeed');
    getFeedListRefetch();
  }, [props.filterList,props.searchWord]);
  useEffect(() => {
    if (inView||myRef.current.offsetTop<document.body.offsetHeight) fetchNextPage();
  }, [inView,getFeedLoading]);
  return (
    <SnsMainWrapper>
      {!getFeedLoading && (
        <FeedDetailWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((post, idx) => (
              <FeedComp
                post={post}
                Refetch={getFeedListRefetch}
                parent="FeedList"
                key={idx}
              />
            )),
          )}
        </FeedDetailWrapper>
      )}

      {isFetchingNextPage || isPreviousData ? (
        <Loading></Loading>
      ) : (
        <div ref={ref}></div>
      )}
      <div ref={myRef}></div>
    </SnsMainWrapper>
  );
}
