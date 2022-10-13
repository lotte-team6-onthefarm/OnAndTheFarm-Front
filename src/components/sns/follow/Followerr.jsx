import React from 'react';
import { FeedDetailWrapper } from '../../../pages/sns/feed/Feed.styled';
import { FollowButton, FollowingButton, FollowWrapper } from './follow.styled';
import FollowUser from './FollowUser';

export default function Follower() {
  const follwers = [
    {
      name: '벽장꾸미기',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1536200387_U.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowingButton>팔로잉</FollowingButton>,
    },
    {
      name: 'Hareumhouse',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/162951211643983469.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowButton>팔로우</FollowButton>,
    },
    {
      name: 'nunuu',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/165517530425741410.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowingButton>팔로잉</FollowingButton>,
    },
    {
      name: '지니지니몬',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166114883729589541.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowingButton>팔로잉</FollowingButton>,
    },
    {
      name: '냥집사',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/164236115463689376.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowButton>팔로우</FollowButton>,
    },
    {
      name: '햇살의화양연화',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/163288238576717300.jpeg?gif=1&w=40&h=40&c=c&webp=1',
      status: <FollowingButton>팔로잉</FollowingButton>,
    },
  ];
  return (
    <FeedDetailWrapper>
      <FollowWrapper>
        <h1>팔로워</h1>
        {follwers.length === 0 ? (
          <div>팔로워가 없습니다.</div>
        ) : (
          <>
            {follwers.map((follow, idx) => {
              return <FollowUser follow={follow} key={idx} />;
            })}
          </>
        )}
      </FollowWrapper>
    </FeedDetailWrapper>
  );
}
