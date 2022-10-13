import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { HiOutlineShare } from 'react-icons/hi';
import { SideButtonWrapper } from '../../../pages/sns/feedDetail/FeedDetail.styled';

export default function SideButton(props) {
  const icons = {
    heart: <AiOutlineHeart />,
    scrap: <BiBookmark />,
    comment: <BiMessageAlt />,
    share: <HiOutlineShare />,
  };
  const icon = props.icon;
  const count = props.count;
  return (
    <SideButtonWrapper>
      <span>
        <span>{icons[icon]}</span>
      </span>
      <span>{count}</span>
    </SideButtonWrapper>
  );
}
