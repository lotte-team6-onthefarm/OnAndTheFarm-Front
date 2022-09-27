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
          <LogoImage src={onandthefarmlogo_white}>
          </LogoImage>
        </StyledLogoDiv>
        <StyledLinkDiv>
          <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
        </StyledLinkDiv>
        <StyledLinkDiv>
        <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
        </StyledLinkDiv>
        <StyledLinkDiv>
        <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
          <FooterLink>
            test
          </FooterLink>
        </StyledLinkDiv>
      </StyledcontentDiv>
    </StyledFooterDiv>
  );
}
