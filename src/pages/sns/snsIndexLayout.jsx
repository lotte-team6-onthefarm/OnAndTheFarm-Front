import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FeedDetail from '../../components/sns/feed/FeedDetail';
import LikeDetail from '../../components/sns/like/LikeDetail';
import ScrapbookDetail from '../../components/sns/scrapbook/ScrapbookDetail';
import SnsUser from '../../components/sns/userBlock/SnsUser';
import SnsMain from '../../components/sns/main/snsMain';
import { SnsMainWrapper, UserWrapper, WhiteWrapper } from './snsMain.style';
import Followee from '../../components/sns/follow/Followee';
import Follower from '../../components/sns/follow/Followerr';
export default function SnsIndexLayout() {
  return (
    <SnsMainWrapper>
      <UserWrapper>
        <SnsUser></SnsUser>
      </UserWrapper>
      <WhiteWrapper></WhiteWrapper>
      <Routes>
        <Route path="/" element={<SnsMain />} />
        <Route path="/feed" element={<FeedDetail />} />
        <Route path="/like" element={<LikeDetail />} />
        <Route path="/scrapbook" element={<ScrapbookDetail />} />
        <Route path="/follower" element={<Follower />} />
        <Route path="/followee" element={<Followee />} />
      </Routes>
    </SnsMainWrapper>
  );
}