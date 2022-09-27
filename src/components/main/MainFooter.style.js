import styled from 'styled-components';

const StyledFooterDiv = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #202020;
`;

const StyledcontentDiv = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  margin: auto;
`;

const StyledLogoDiv = styled.div`
  width: 40%;
  height: 150px;
  display: flex;
`;

const StyledLinkDiv = styled.div`
  width: 20%;
  height: 150px;
  display: grid;
`;

const LogoImage = styled.img`
  width: 220px;
  margin: auto;
  cursor: pointer;
`;

const FooterLink = styled.a`
display: flex;
margin: auto;
color: #fff;
`;

export { StyledFooterDiv, StyledcontentDiv, StyledLogoDiv, StyledLinkDiv, LogoImage, FooterLink };
