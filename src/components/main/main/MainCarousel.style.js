import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainCarouselDiv = styled.div`
  width: 1130px;
  margin: 0px auto 50px auto;
  h2 {
    margin-left: 15px;
    margin-bottom: 20px;
  }
  button::before {
    color: #c1c1c1;
  }
  .slick-track {
    height: 500px;
  }
`;

const MainCarouselSlider = styled(Slider)`
  .slick-prev {
    left: -30px;
  }
  .slick-next {
    right: -20px;
  }
  .slick-prev:before,
  .slick-next:before {
    line-height: 0;
    display: flex;
    font-size: 35px;
  }
  button {
  }
`;

const CarouselImgDiv = styled.div`
  height: 100%;
  margin: 0 16px;
`;

const CarouselImg = styled.img`
  width: 100%;
`;

export { MainCarouselDiv, MainCarouselSlider, CarouselImgDiv, CarouselImg };
