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

export default function SnsUser() {
  const navigate = useNavigate();
  const followerNavigator = () => {
    navigate('/sns/follower');
  };
  const followeeNavigator = () => {
    navigate('/sns/followee');
  };

  const { data, isLoading } = useQuery('profileInfo', getProfileInfo, {
    onSuccess: () => {},
    onError: () => {},
  });
  console.log(data);
  return (
    <SnsUserBlock>
      {!isLoading && (
        <>
          <ShareIconBlock>
            <HiOutlineShare />
          </ShareIconBlock>
          <UserDetailBlock>
            <UserDetailImgBlock>
              <UserDetailImg
                className="css-1cqverl e18gdfbl2"
                src={data.memberProfileImage}
              />
            </UserDetailImgBlock>
            <UserInfoBlock>
              <UserInfoNickName>{data.memberName}</UserInfoNickName>
              <UserInfoBottom>
                <UserInfoFollow>
                  <div>팔로워</div>
                  <div onClick={followerNavigator}>{data.followerCount}</div>
                  <div>팔로잉</div>
                  <div onClick={followeeNavigator}>{data.followingCount}</div>
                </UserInfoFollow>
                <UserInfoSetting>
                  <Link to="/users/1462582/edit">설정</Link>
                </UserInfoSetting>
              </UserInfoBottom>
            </UserInfoBlock>
          </UserDetailBlock>
          <UserButtonBlock>
            <Link to>
              <div>
                <BiImages />
              </div>
              <div>사진</div>
              <div>{data.memberName}</div>
            </Link>
            <Link to>
              <div>
                <AiOutlineHeart />
              </div>
              <div>위시 리스트</div>
              <div>{data.memberName}</div>
            </Link>
            <Link to>
              <div>
                <BiBookmark />
              </div>
              <div>스크랩북</div>
              <div>{data.memberName}</div>
            </Link>
          </UserButtonBlock>
        </>
      )}
    </SnsUserBlock>
  );
}
