import React from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
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
import { snsNowId, snsNowRole } from '../../recoil';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Products from './seller/Products';
export default function SnsIndexLayout() {
  const [id, setId] = useRecoilState(snsNowId); // client 전역
  const [role, setRole] = useRecoilState(snsNowRole); // client 전역
  const param = useParams();
  const { state } = useLocation();
  const { data: countData, isLoading: countLoading } = useQuery(
    ['scrapLikeCount', id],
    () => getScrapLikeCount({ memberId: id, memberRole: role }),
    {
      refetchOnMount: true,
      onSuccess: () => {},
      onError: () => {},
    },
  );
  useEffect(() => {
    if (state !== null) {
      setRole(state);
    }
    setId(param.id);
  }, [param]);
  return (
    <>
      {!countLoading && (
        <SnsMainWrapper>
          <UserWrapper>
            <SnsUser countData={countData} id={id} role={role}></SnsUser>
          </UserWrapper>
          <WhiteWrapper></WhiteWrapper>
          <Routes>
            <Route path="/mysns" element={<SnsMain countData={countData} />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/like" element={<Like />} />
            <Route path="/product" element={<Products />} />
            <Route path="/scrapbook" element={<Scrapbook />} />
            <Route path="/follower" element={<Follower />} />
            <Route path="/followee" element={<Followee />} />
          </Routes>
        </SnsMainWrapper>
      )}
    </>
  );
}
