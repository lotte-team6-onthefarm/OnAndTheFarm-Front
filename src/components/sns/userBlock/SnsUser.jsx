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
import { BiBookmark } from 'react-icons/bi';
import { RiCoupon3Line } from 'react-icons/ri';

export default function SnsUser() {
  const navigate = useNavigate();
  const followerNavigator = () => {
    navigate('/sns/follower');
  };
  const followeeNavigator = () => {
    navigate('/sns/followee');
  };
  return (
    <SnsUserBlock>
      <ShareIconBlock>
        <HiOutlineShare />
      </ShareIconBlock>
      <UserDetailBlock>
        <UserDetailImgBlock>
          <UserDetailImg
            className="css-1cqverl e18gdfbl2"
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=144&amp;h=144&amp;c=c&amp;webp=1"
            srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=240&amp;h=240&amp;c=c&amp;webp=1 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=320&amp;h=320&amp;c=c&amp;webp=1 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&amp;w=480&amp;h=480&amp;c=c&amp;webp=1 3x"
          />
        </UserDetailImgBlock>
        <UserInfoBlock>
          <UserInfoNickName>벽장꾸미기</UserInfoNickName>
          <UserInfoBottom>
            <UserInfoFollow>
              <div>팔로워</div>
              <div onClick={followerNavigator}>873</div>
              <div>팔로잉</div>
              <div onClick={followeeNavigator}>1</div>
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
            <BiBookmark />
          </div>
          <div>스크랩북</div>
          <div>1</div>
        </Link>
        <Link to>
          <div>
            <AiOutlineHeart />
          </div>
          <div>좋아요</div>
          <div>2</div>
        </Link>
        <Link to>
          <div>
            <RiCoupon3Line />
          </div>
          <div>내 쿠폰</div>
          <div>5</div>
        </Link>
      </UserButtonBlock>
    </SnsUserBlock>
  );
}
