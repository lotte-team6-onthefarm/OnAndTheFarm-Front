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
import { snsNowId } from '../../recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
export default function SnsIndexLayout() {
  const [id, setId] = useRecoilState(snsNowId); // client 전역
  const param = useParams();
  const { data: countData, isLoading: countLoading } = useQuery(
    ['scrapLikeCount', id],
    () => getScrapLikeCount(id),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
  useEffect(() => {
    setId(param.id);
  }, [param]);
  return (
    <>
      {!countLoading && (
        <SnsMainWrapper>
          <UserWrapper>
            <SnsUser countData={countData} id={id}></SnsUser>
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
