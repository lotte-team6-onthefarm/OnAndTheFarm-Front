import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SnsUser from '../../components/sns/userBlock/SnsUser';
import SnsMain from '../../components/sns/main/snsMain';
import { SnsMainWrapper, UserWrapper, WhiteWrapper } from './snsMain.style';
import Followee from '../../components/sns/follow/Followee';
import Follower from '../../components/sns/follow/Followerr';
import Feed from './feed/Feed';
import Like from './like/Like';
import Scrapbook from './scrapbook/Scrapbook';
import { useQuery } from 'react-query';
import { getScrapLikeCount } from '../../apis/sns/profile';
export default function SnsIndexLayout() {
  const { data: countData, isLoading: countLoading } = useQuery(
    'scrapLikeCount',
    getScrapLikeCount,
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );

  return (
    <>
      {!countLoading && (
        <SnsMainWrapper>
          <UserWrapper>
            <SnsUser countData={countData}></SnsUser>
          </UserWrapper>
          <WhiteWrapper></WhiteWrapper>
          <Routes>
            <Route path="/mysns" element={<SnsMain countData={countData} />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/like" element={<Like />} />
            <Route path="/scrapbook" element={<Scrapbook />} />
            <Route path="/follower" element={<Follower />} />
            <Route path="/followee" element={<Followee />} />
          </Routes>
        </SnsMainWrapper>
      )}
    </>
  );
}
