import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainCarouselDiv = styled.div`
  width: 1030px;
  margin: 50px auto;
  h2 {
    margin-bottom: 20px;
  }
  button::before {
    color: #c1c1c1;
  }
  .slick-track{
    height: 300px;
  }
`;

const MainCarouselSlider = styled(Slider)``;

const CarouselImgDiv = styled.div`
  margin: 0 16px;
`;

const CarouselImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export { MainCarouselDiv, MainCarouselSlider, CarouselImgDiv, CarouselImg };
