import styled from 'styled-components';

const StyledFooterDiv = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #f9f9f9;
  padding-bottom: 20px;
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
`;

const StyledLinkDiv = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 30%;
  .footerLinkTitle {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const LogoImage = styled.img`
  width: 190px;
  margin: auto;
  cursor: pointer;
  margin-left: 530px;
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
