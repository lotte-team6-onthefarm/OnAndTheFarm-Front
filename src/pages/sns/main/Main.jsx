import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
} from './Main.styled';
import {
  getFeedList,
  getFeedByFollow,
  getFeedByLike,
  getFeedByRecent,
  getFeedByViewCount,
} from '../../../apis/sns/main';
import { postAddFollow } from '../../../apis/sns/profile';
import Loading from '../../../components/common/Loading';
import FeedListComp from '../../../components/sns/main/FeedListComp';
import InputSearch from '../../../components/common/SearchInput';
import { getFeedByTag } from '../../../apis/sns/content';

export default function SnsMainLayout() {
  const [filterList, setFilterList] = useState(0);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('search')!==null){
      setSearchWord(searchParams.get('search'))
      setFilterList(4)
      setUrl('/search');
    }
  }, []);

  const changeFilter = idx => {
    setFilterList(idx);
    setPage(0);
    if (idx === 0) {
      navigate(`/sns/main`);
      setSearchWord('')
      setUrl('');
    } else if (idx === 1) {
      navigate(`/sns/main`);
      setSearchWord('')
      setUrl('/like');
    } else if (idx === 2) {
      navigate(`/sns/main`);
      setSearchWord('')
      setUrl('/view-count');
    } else if (idx === 3) {
      navigate(`/sns/main`);
      setSearchWord('')
      setUrl('/follow');
    } else if (idx === 4) {
      navigate(`/sns/main?search=${searchWord}`);
      setSearchWord(searchWord)
      setUrl('/search');
    }
  };
  // const {
  //   data: searchData,
  //   refetch: refeesdfaseras,
  //   fetchNextPage,
  //   isLoading: getFeedLoading,
  //   isFetchingNextPage,
  //   isPreviousData,
  // } = useInfiniteQuery(
  //   ['getFeedByTag', searchWord],
  //   ({ pageParam = 0 }) => getFeedByTag(searchWord, pageParam),
  //   {
  //     keepPreviousData: true,
  //     getNextPageParam: lastPage =>
  //       !lastPage.isLast ? lastPage.nextPage : undefined,
  //     onSuccess: res => {
  //       console.log(res,'resssss')
  //       // setLoading(true);

  //       // setTimeout(() => {
  //       //   setLoading(false);
  //       // }, 2000);
  //       // queryClient.setQueryData(['getFeed', props.url], oldProfile => {
  //       //   return { oldProfile, ...res.pages[props.page].posts };
  //       // });
  //       // console.log(res);
  //       // if (props.page === 0) {
  //       //   // 0페이지시 초기화후 데이터 넣기
  //       //   setSnsList(res.pages[props.page].posts);
  //       //   props.setPage(props.page + 1);
  //       // }
  //       // if (res.pages[props.page] !== undefined) {
  //       //   setSnsList([...snsList, ...res.pages[props.page].posts]);
  //       //   props.setPage(props.page + 1);
  //       // }
  //     },
  //   },
  // );

  const search = () => {
    setSearchValue(searchWord)
    changeFilter(4)
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }
  return (
    <SnsMainWrapper>
      <SelectWrapper>
        <button onClick={() => changeFilter(0)} className={filterList===0?'selected':''}>최신순</button>
        <button onClick={() => changeFilter(1)} className={filterList===1?'selected':''}>좋아요순</button>
        <button onClick={() => changeFilter(2)} className={filterList===2?'selected':''}>조회수순</button>
        <button onClick={() => changeFilter(3)} className={filterList===3?'selected':''}>팔로우</button>
        <InputSearch
          id="search"
          value={searchWord}
          width="400px"
          onKeyPress={onKeyPress}
          onChange={e => setSearchWord(e.target.value)}
          placeholder="검색하고 싶은 태그명을 입력해 주세요"
          type="text"
          search={search}
        ></InputSearch>
      </SelectWrapper>
      <FeedListComp
        filterList={filterList}
        searchWord={searchValue}
        page={page}
        setPage={setPage}
        url={url}
      ></FeedListComp>
    </SnsMainWrapper>
  );
}
