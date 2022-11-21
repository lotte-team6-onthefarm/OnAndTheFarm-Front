import React from 'react';
import {
  ShareIconBlock,
  SnsUserBlock,
  UserButtonBlock,
  UserDetailBlock,
  UserDetailImg,
  UserDetailImgBlock,
  UserInfoBlock,
  UserInfoBottom,
  UserInfoFollow,
  UserInfoNickName,
  UserInfoSetting,
} from './SnsUser.styled';
import { GiGroundSprout } from 'react-icons/gi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShop } from 'react-icons/ai';
import { BiBookmark, BiImages } from 'react-icons/bi';
import { useMutation, useQuery } from 'react-query';
import {
  getProfileInfo,
  postAddFollow,
  putCancelFollow,
} from '../../../apis/sns/profile';
import { FollowButton, FollowingButton } from '../follow/follow.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { preLoginUrl, snsNowRole } from '../../../recoil';

export default function SnsUser(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const userToken = localStorage.getItem('token');
  const role = useRecoilValue(snsNowRole);
  const navigate = useNavigate();
  const { state } = useLocation();
  const memberRole = state;
  const followerNavigator = () => {
    navigate(`/sns/${props.id}/follower`);
  };
  const followeeNavigator = () => {
    navigate(`/sns/${props.id}/followee`);
  };
  const { data, isLoading, refetch } = useQuery(
    ['profileInfo', props.id],
    () =>
      getProfileInfo({
        memberId: props.id,
        memberRole: memberRole === null ? role : memberRole,
      }),
    {
      refetchOnMount: true,
      onSuccess: res => {},
      onError: () => {},
    },
  );
  const { mutate: addFollow } = useMutation(postAddFollow, {
    onSuccess: () => {
      refetch();
      console.log('성공');
    },
    onError: () => {
      console.log('에러');
    },
  });
  const { mutate: cancelFollow } = useMutation(putCancelFollow, {
    onSuccess: () => {
      refetch();
      console.log('성공');
    },
    onError: () => {
      console.log('에러');
    },
  });
  const mysnsUrl = () => {
    navigate(`/sns/${props.id}/mysns`, { state: data.memberRole });
  };
  return (
    <SnsUserBlock>
      {!isLoading && !props.countLoading && (
        <>
          <ShareIconBlock>
            {/* <HiOutlineShare /> */}
            {role === 'seller' && (
              <GiGroundSprout color="#40AA54"></GiGroundSprout>
            )}
          </ShareIconBlock>
          <UserDetailBlock>
            <UserDetailImgBlock>
              <UserDetailImg
                className="css-1cqverl e18gdfbl2"
                src={data.memberProfileImage}
              />
            </UserDetailImgBlock>
            <UserInfoBlock>
              <div onClick={mysnsUrl}>
                <UserInfoNickName>{data.memberName}</UserInfoNickName>
              </div>
              <UserInfoBottom>
                <UserInfoFollow>
                  <div onClick={followerNavigator} className="infoFollowButton">
                    <div>팔로워</div>
                    <div>{data.followerCount.toLocaleString()}</div>
                  </div>
                  <div onClick={followeeNavigator} className="infoFollowButton">
                    <div>팔로잉</div>
                    <div>{data.followingCount.toLocaleString()}</div>
                  </div>
                </UserInfoFollow>
                <UserInfoSetting>
                  {data.isModifiable ? (
                    <Link to="/mypage/profile">설정</Link>
                  ) : !data.followStatus ? (
                    <FollowButton
                      width="200px"
                      onClick={() => {
                        // 로그인 페이지 보내주기
                        if (userToken === null) {
                          // 로그인 안했을 때
                          setPreUrl(window.location.href);
                          alert('로그인이 필요한 서비스 입니다.');
                          navigate('/login');
                          return;
                        }

                        addFollow({
                          followerMemberId: props.id,
                          followerMemberRole: memberRole,
                        });
                      }}
                    >
                      팔로우
                    </FollowButton>
                  ) : (
                    <FollowingButton
                      width="200px"
                      onClick={() => {
                        // 로그인 페이지 보내주기
                        if (userToken === null) {
                          // 로그인 안했을 때
                          setPreUrl(window.location.href);
                          alert('로그인이 필요한 서비스 입니다.');
                          navigate('/login');
                          return;
                        }

                        cancelFollow({
                          followerMemberId: props.id,
                          followerMemberRole: memberRole,
                        });
                      }}
                    >
                      팔로잉
                    </FollowingButton>
                  )}
                </UserInfoSetting>
              </UserInfoBottom>
            </UserInfoBlock>
          </UserDetailBlock>
          <UserButtonBlock>
            <Link to={`/sns/${props.id}/feed`}>
              <div>
                <BiImages />
              </div>
              <div>사진</div>
              <div>{props.countData.photoCount.toLocaleString()}</div>
            </Link>
            {data.memberRole === 'user' ? (
              <Link to={`/sns/${props.id}/like`}>
                <div>
                  <AiOutlineHeart />
                </div>
                <div>찜 목록</div>
                <div>{props.countData.wishCount.toLocaleString()}</div>
              </Link>
            ) : (
              <Link to={`/sns/${props.id}/product`}>
                <div>
                  <AiOutlineShop />
                </div>
                <div>판매 상품</div>
                <div>{props.countData.productCount.toLocaleString()}</div>
              </Link>
            )}

            <Link to={`/sns/${props.id}/scrapbook`}>
              <div>
                <BiBookmark />
              </div>
              <div>스크랩북</div>
              <div>{props.countData.scrapCount}</div>
            </Link>
          </UserButtonBlock>
        </>
      )}
    </SnsUserBlock>
  );
}
