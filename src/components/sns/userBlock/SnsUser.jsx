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
    navigate('/sns/follower');
  };
  const followeeNavigator = () => {
    navigate('/sns/followee');
  };

  const { data, isLoading } = useQuery(
    'profileInfo',
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
              <Link to="/sns/mysns">
                <UserInfoNickName>{data.memberName}</UserInfoNickName>
              </Link>
              <UserInfoBottom>
                <UserInfoFollow>
                  <div onClick={followerNavigator}>
                    <div>팔로워</div>
                    <div>{data.followerCount}</div>
                  </div>
                  <div onClick={followeeNavigator}>
                    <div>팔로워</div>
                    <div>{data.followerCount}</div>
                  </div>
                </UserInfoFollow>
                <UserInfoSetting>
                  <Link to="/mypage/profile">설정</Link>
                </UserInfoSetting>
              </UserInfoBottom>
            </UserInfoBlock>
          </UserDetailBlock>
          <UserButtonBlock>
            <Link to="/sns/feed">
              <div>
                <BiImages />
              </div>
              <div>사진</div>
              <div>{props.countData.photoCount}</div>
            </Link>
            <Link to="/sns/like">
              <div>
                <AiOutlineHeart />
              </div>
              <div>위시 리스트</div>
              <div>{props.countData.wishCount}</div>
            </Link>
            <Link to="/sns/scrapbook">
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
