import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCoupon3Line } from 'react-icons/ri';
import { BiBookmark } from 'react-icons/bi';
import { NavbarProfileDiv, NavbarProfileTopDiv, NavbarProfileImgDiv, NavbarProfileContentDiv, NavbarProfileButtonDiv } from './NavbarProfile.style';


export default function NavbarPofileComp() {
  return (
    <NavbarProfileDiv>
        <NavbarProfileTopDiv>

        <NavbarProfileImgDiv>
          <img src={require('../../../assets/구데타마.png')} alt="프로필사진" />
        </NavbarProfileImgDiv>
        <h3>최진영</h3>
        <h5>팔로워 | <span>팔로잉</span></h5>
        </NavbarProfileTopDiv>
        <NavbarProfileContentDiv>
          <NavbarProfileButtonDiv>
            <BiBookmark></BiBookmark>
            <p>스크랩북</p>
            <p>2</p>
          </NavbarProfileButtonDiv>
          <NavbarProfileButtonDiv>
            <AiOutlineHeart></AiOutlineHeart>
          <p>좋아요</p>
            <p>25</p>
          </NavbarProfileButtonDiv>
          <NavbarProfileButtonDiv>
            <RiCoupon3Line></RiCoupon3Line>
          <p>내쿠폰</p>
            <p>5</p>
          </NavbarProfileButtonDiv>
        </NavbarProfileContentDiv>
    </NavbarProfileDiv>
  );
}
