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
import { HiOutlineShare } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiImages } from 'react-icons/bi';
import { useQuery } from 'react-query';
import { getProfileInfo } from '../../../apis/sns/profile';

export default function SnsUser(props) {
  const navigate = useNavigate();
  const followerNavigator = () => {
    navigate(`/sns/${props.id}/follower`);
  };
  const followeeNavigator = () => {
    navigate(`/sns/${props.id}/followee`);
  };

  const { data, isLoading } = useQuery(
    ['profileInfo', props.id],
    () => getProfileInfo({ memberId: props.id }),
    {
      onSuccess: res => {
        console.log(res, 'ress');
      },
      onError: () => {},
    },
  );

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
              <Link to={`/sns/${props.id}/mysns`}>
                <UserInfoNickName>{data.memberName}</UserInfoNickName>
              </Link>
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
                  <Link to="/mypage/profile">설정</Link>
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
