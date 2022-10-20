import styled from 'styled-components';

const StyledFooterDiv = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #f9f9f9;
`;

const StyledcontentDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin: auto;
`;

const StyledLogoDiv = styled.div`
  width: 28%;
  height: 150px;
  display: flex;
  position: relative;
`;

const StyledLinkDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 30%;
  .footerLinkTitle {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  /* height: 150px; */
`;

const LogoImage = styled.img`
  position: absolute;
  top: 10px;
  left: 300px;
  width: 190px;
  cursor: pointer;
`;

const FooterLink = styled.div`
  font-size: 14px;
  margin-top: 2px;
`;

export {
  StyledFooterDiv,
  StyledcontentDiv,
  StyledLogoDiv,
  StyledLinkDiv,
  LogoImage,
  FooterLink,
};
