import styled from 'styled-components';
import mainImage from './mainImage.png';

const MainContentDiv = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
`;

const MainBannerDiv = styled.div`
width: 1130px;
height: 580px;
background-image: url(${mainImage});
background-size: cover;
`;

export { MainContentDiv, MainBannerDiv };
