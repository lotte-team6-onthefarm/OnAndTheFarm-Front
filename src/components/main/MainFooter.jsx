import React from 'react';
import {
  FooterLink,
  LogoImage,
  StyledcontentDiv,
  StyledFooterDiv,
  StyledLinkDiv,
  StyledLogoDiv,
} from './MainFooter.style';
import onandthefarmlogo_white from '../../assets/logo_white.png';
import logoGreen from '../../assets/logo_green.png';

export default function MainFooter(props) {
  //   const [clicked, setClicked] = useState(false);
  //false = bars, true = times
  //   const handleClick = () => {
  //     setClicked(!clicked);
  //   };
  return (
    <StyledFooterDiv>
      <StyledcontentDiv>
        <StyledLogoDiv>
          <LogoImage src={logoGreen}></LogoImage>
        </StyledLogoDiv>
        <StyledLinkDiv>
          <FooterLink>ON AND THE FARM</FooterLink>
          <FooterLink>대표자 : 최진영 김성환 손은성 이석원 천예원</FooterLink>
          <FooterLink>주소 : 서울특별시 서초구 서초대로74길 33</FooterLink>
          <FooterLink>
            개인정보관리 책임자 : 최진영(choijin@gmail.com)
          </FooterLink>
        </StyledLinkDiv>
        <StyledLinkDiv>
          <FooterLink className="footerLinkTitle">고객센터</FooterLink>
          <FooterLink>출고/배송 문의 및 입점 제안</FooterLink>
          <FooterLink>상품 CS 및 취소 문의</FooterLink>
          <FooterLink>월~금 : 10:00~17:00 (Break time 12:00~13:00)</FooterLink>
          <FooterLink>tel : 1670-5245</FooterLink>
        </StyledLinkDiv>
      </StyledcontentDiv>
    </StyledFooterDiv>
  );
}
