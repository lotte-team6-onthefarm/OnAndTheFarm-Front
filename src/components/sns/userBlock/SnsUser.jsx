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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiImages } from 'react-icons/bi';
import { useMutation, useQuery } from 'react-query';
import {
  getProfileInfo,
  postAddFollow,
  putCancelFollow,
} from '../../../apis/sns/profile';
import { FollowButton, FollowingButton } from '../follow/follow.styled';

export default function SnsUser(props) {
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
    () => getProfileInfo({ memberId: props.id }),
    {
      refetchOnMount: true,
      onSuccess: () => {},
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
    navigate(`/sns/${props.id}/mysns`, { state: memberRole });
  };
  return (
    <SnsUserBlock>
      {!isLoading && !props.countLoading && (
        <>
          <ShareIconBlock>{/* <HiOutlineShare /> */}뭐넣ㅈ;</ShareIconBlock>
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
                    <div>{data.followerCount}</div>
                  </div>
                  <div onClick={followeeNavigator} className="infoFollowButton">
                    <div>팔로잉</div>
                    <div>{data.followingCount}</div>
                  </div>
                </UserInfoFollow>
                <UserInfoSetting>
                  {data.isModifiable ? (
                    <Link to="/mypage/profile">설정</Link>
                  ) : !data.followStatus ? (
                    <FollowButton
                      width="200px"
                      onClick={() =>
                        addFollow({
                          followerMemberId: props.id,
                          followerMemberRole: memberRole,
                        })
                      }
                    >
                      팔로우
                    </FollowButton>
                  ) : (
                    <FollowingButton
                      width="200px"
                      onClick={() =>
                        cancelFollow({
                          followerMemberId: props.id,
                          followerMemberRole: memberRole,
                        })
                      }
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
              <div>{props.countData.photoCount}</div>
            </Link>
            <Link to={`/sns/${props.id}/like`}>
              <div>
                <AiOutlineHeart />
              </div>
              <div>위시 리스트</div>
              <div>{props.countData.wishCount}</div>
            </Link>
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
