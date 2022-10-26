import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
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
  const param = useParams();
  console.log(param, '111111111;aksgd;la;lfk');
  return (
    <>
      {!countLoading && (
        <SnsMainWrapper>
          <UserWrapper>
            <SnsUser countData={countData}></SnsUser>
          </UserWrapper>
          <WhiteWrapper></WhiteWrapper>
          <Routes>
            <Route path="/mysns/:id" element={<SnsMain countData={countData} />} />
            <Route path="/feed/:id" element={<Feed />} />
            <Route path="/like/:id" element={<Like />} />
            <Route path="/scrapbook/:id" element={<Scrapbook />} />
            <Route path="/follower/:id" element={<Follower />} />
            <Route path="/followee/:id" element={<Followee />} />
          </Routes>
        </SnsMainWrapper>
      )}
    </>
  );
}
