import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useInfiniteQuery } from 'react-query';
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

export default function SnsMainLayout() {
  const [filterList, setFilterList] = useState(0);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const changeFilter = idx => {
    setFilterList(idx);
    setPage(0);
    if (idx === 0) {
      setUrl('');
    } else if (idx === 1) {
      setUrl('/like');
    } else if (idx === 2) {
      setUrl('/view-count');
    } else if (idx === 3) {
      setUrl('/follow');
    }
  };
  return (
    <SnsMainWrapper>
      <SelectWrapper>
        <button onClick={() => changeFilter(0)}>최신순</button>
        <button onClick={() => changeFilter(1)}>좋아요순</button>
        <button onClick={() => changeFilter(2)}>조회수순</button>
        <button onClick={() => changeFilter(3)}>팔로우</button>
        <InputSearch
          id="search"
          value={searchWord}
          width="400px"
          onChange={e => setSearchWord(e.target.value)}
          placeholder="검색하고 싶은 태그명을 입력해 주세요"
          type="text"
        ></InputSearch>
      </SelectWrapper>
      <FeedListComp
        filterList={filterList}
        page={page}
        setPage={setPage}
        url={url}
      ></FeedListComp>
    </SnsMainWrapper>
  );
}
