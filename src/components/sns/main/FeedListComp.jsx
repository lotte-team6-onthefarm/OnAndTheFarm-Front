import React, { useEffect, useState } from 'react';
import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from 'react-query';
import { useInView } from 'react-intersection-observer';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
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
import { postAddFollow } from '../../../apis/sns/profile';
import Loading from '../../../components/common/Loading';

export default function FeedListComp(props) {
  const navigate = useNavigate();
  const feedDetailNavigator = () => {
    navigate('/sns/detail');
  };

  const [snsList, setSnsList] = useState([]);
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  // useQuery
  // 최신순
  const {
    refetch: refeesdfaseras,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('getFeed', () => getFeedList(props.url, props.page), {
    keepPreviousData: true,
    getNextPageParam: lastPage =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
    onSuccess: res => {
      console.log(res);
      if (props.page === 0) {
        // 0페이지시 초기화후 데이터 넣기
        setSnsList(res.pages[props.page].posts);
        props.setPage(props.page + 1);
      }
      if (res.pages[props.page] !== undefined) {
        setSnsList([...snsList, ...res.pages[props.page].posts]);
        props.setPage(props.page + 1);
      }
    },
  });

  useEffect(() => {
    setSnsList([]);
    queryClient.removeQueries('getFeed');
    console.log(props.filterList, 'filterlist');
    refeesdfaseras();
  }, [props.filterList]);
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  const { mutate: addFollow, isLoading: isPostAddFollow } = useMutation(
    postAddFollow,
    {
      onSuccess: res => {
        alert('팔로우');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const follow = (id, role) => {
    const data = {
      followerMemberId: id,
      followerMemberRole: role,
    };
    addFollow(data);
  };

  return (
    <SnsMainWrapper>
      {!isFetchingNextPage && (
        <FeedDetailWrapper>
          {snsList.map((sns, idx) => (
            <FeedCardWrapper key={idx}>
              <FeedWriterWrapper>
                <Link to>
                  <img src={sns.memberProfileImg} alt="" />
                  <span>{sns.memberName}</span>
                </Link>
                <span className="FeedWriterWrapperSpan" />
                <button onClick={() => follow(sns.memberId, sns.memberRole)}>
                  팔로우
                </button>
              </FeedWriterWrapper>
              <FeedItemWrapper onClick={feedDetailNavigator}>
                <FeedItemImg>
                  <img src={sns.feedImageSrc} alt=""></img>
                </FeedItemImg>
                <FeedActionList>
                  <Link to>
                    <AiOutlineHeart />
                    <span>{sns.feedLikeCount}</span>
                  </Link>
                  <Link to>
                    <BiBookmark />
                    <span>{sns.feedScrapCount}</span>
                  </Link>
                  <Link to>
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
          ))}
        </FeedDetailWrapper>
      )}
      {isFetchingNextPage ? <Loading></Loading> : <div ref={ref}></div>}
    </SnsMainWrapper>
  );
}
