import React, { useEffect, useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
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
import {
  putFeedLike,
  putFeedScrap,
  putFeedUnLike,
  putFeedUnScrap,
} from '../../../apis/sns/content';

export default function FeedListComp(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const feedDetailNavigator = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };

  const [snsList, setSnsList] = useState([]);
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  // useQuery
  // 최신순
  const {
    data: aaa,
    refetch: refeesdfaseras,
    fetchNextPage,
    isLoading: getFeedLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getFeed', props.url],
    ({ pageParam = 0 }) => getFeedList({url:props.url,searchWord:props.searchWord}, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {
        // setLoading(true);

        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);
        // queryClient.setQueryData(['getFeed', props.url], oldProfile => {
        //   return { oldProfile, ...res.pages[props.page].posts };
        // });
        // console.log(res);
        // if (props.page === 0) {
        //   // 0페이지시 초기화후 데이터 넣기
        //   setSnsList(res.pages[props.page].posts);
        //   props.setPage(props.page + 1);
        // }
        // if (res.pages[props.page] !== undefined) {
        //   setSnsList([...snsList, ...res.pages[props.page].posts]);
        //   props.setPage(props.page + 1);
        // }
      },
    },
  );

  useEffect(() => {
    setSnsList([]);
    queryClient.removeQueries('getFeed');
    refeesdfaseras();
  }, [props.filterList]);
  useEffect(() => {
    // setLoading(true)

    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000);
    if (inView) fetchNextPage();
  }, [inView]);

  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        refeesdfaseras();
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
        refeesdfaseras();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const { mutate: feedLike } = useMutation(putFeedLike, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnLike } = useMutation(putFeedUnLike, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedScrap } = useMutation(putFeedScrap, {
    onSuccess: res => {},
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: feedUnScrap } = useMutation(putFeedUnScrap, {
    onSuccess: res => {},
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
  // if (loading) return <Loading></Loading>;
  return (
    <SnsMainWrapper>
      {!getFeedLoading && (
        <FeedDetailWrapper>
          {aaa.pages.map((page, idx) =>
            page.posts.map((sns, idx) => (
              <FeedCardWrapper key={idx}>
                <FeedWriterWrapper>
                  <Link to>
                    <img src={sns.memberProfileImg} alt="" />
                    <span>{sns.memberName}</span>
                  </Link>
                  <span className="FeedWriterWrapperSpan" />
                  {sns.followStatus ? (
                    <button
                      onClick={() =>
                        cancelFollow({
                          followerMemberId: sns.memberId,
                          followerMemberRole: sns.memberRole,
                        })
                      }
                    >
                      팔로잉
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        addFollow({
                          followerMemberId: sns.memberId,
                          followerMemberRole: sns.memberRole,
                        })
                      }
                    >
                      팔로우
                    </button>
                  )}
                </FeedWriterWrapper>
                <FeedItemWrapper>
                  <FeedItemImg onClick={() => feedDetailNavigator(sns.feedId)}>
                    <img src={sns.feedImageSrc} alt=""></img>
                  </FeedItemImg>
                  <FeedActionList>
                    <Link
                      to
                      onClick={() =>
                        feedLikeFunc(sns.feedLikeStatus, { feedId: sns.feedId })
                      }
                    >
                      <span>
                        {sns.feedLikeStatus === true ? (
                          <AiFillHeart color="#40AA54" />
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </span>
                      <span>{sns.feedLikeCount}</span>
                    </Link>
                    <Link
                      to
                      onClick={() =>
                        feedScrapFunc(sns.scrapStatus, { feedId: sns.feedId })
                      }
                    >
                      <span>
                        {sns.scrapStatus === true ? (
                          <MdBookmark color="#40AA54" />
                        ) : (
                          <BiBookmark />
                        )}
                      </span>
                      <span>{sns.feedScrapCount}</span>
                    </Link>
                    <Link to={`/sns/detail/${sns.feedId}`}>
                      <BiMessageAlt />
                      <span>{sns.feedCommentCount}</span>
                    </Link>
                  </FeedActionList>
                  <FeedItemDescription>
                    <div className="card-item-description__content">
                      {sns.feedContent}
                    </div>
                  </FeedItemDescription>
                </FeedItemWrapper>
              </FeedCardWrapper>
            )),
          )}
        </FeedDetailWrapper>
      )}
      {/* {!isFetchingNextPage&&(setTimeout(() => {
        <Loading></Loading>
        console.log('settimeout')
      }, 3000))}
      <div ref={ref}></div> */}
      {/* <div ref={ref}></div> */}
      
      
      {isFetchingNextPage || isPreviousData ? (
        <Loading></Loading>
      ) : (
        <div ref={ref}></div>
      )}
    </SnsMainWrapper>
  );
}
