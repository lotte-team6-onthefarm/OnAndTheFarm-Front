import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';
import { HiOutlineShare } from 'react-icons/hi';

import { SideButtonWrapper } from '../../../pages/sns/feedDetail/FeedDetail.styled';

export default function SideButton(props) {
  const icons = {
    heart: <AiOutlineHeart />,
    fillHeart: <AiFillHeart />,
    scrap: <BiBookmark />,
    fillScrap: <MdBookmark />,
    comment: <BiMessageAlt />,
    share: <HiOutlineShare />,
  };
  return (
    <SideButtonWrapper status={props.status}>
      <span>
        <span
          onClick={
            (props.method,
            () =>
              props.setStatus !== undefined && props.setStatus(!props.status))
          }
        >
          {props.icon === 'heart' && props.status === true ? (
            <span className="fillIcons">{icons['fillHeart']}</span>
          ) : props.icon === 'scrap' && props.status === true ? (
            <span className="fillIcons">{icons['fillScrap']}</span>
          ) : (
            icons[props.icon]
          )}
        </span>
      </span>
      <span>{props.count}</span>
    </SideButtonWrapper>
  );
}
