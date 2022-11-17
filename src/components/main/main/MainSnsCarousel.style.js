import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SnsCarouselDiv = styled.div`
  width: 1130px;
  height: 255px;
  button::before {
    color: #c1c1c1;
  }
  .slick-track {
    height: 200px;
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

const SnsDiv = styled.div`
  height: 206px;
  margin: 0 10px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
`;

const CarouselImgDiv = styled.div`
  position: relative;
  display: flex;
  height: 208px;
  min-width: 0px;
  flex-flow: column;
  a {
    position: absolute;
    inset: 0px;
    cursor: pointer;
    text-decoration: none;
  }
`;

const RankDiv = styled.div`
  position: absolute;
  padding: 8px;
  font-size: 0px;
  z-index: 1;
  top: 0px;
  left: 0px;
  div {
    display: inline-block;
    font-size: 0px;
    line-height: 1;
    position: absolute;
    top: 0px;
    left: 12px;
    span {
      position: absolute;
      top: 4px;
      left: 0px;
      right: 0px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 700;
      color: rgb(255, 255, 255);
      text-align: center;
    }
  }
`;

const UserNameDiv = styled.div`
  position: absolute;
  padding: 8px;
  font-size: 0px;
  z-index: 1;
  left: 7px;
  bottom: -187px;
  span {
    overflow: hidden;
    display: inline-block;
    max-width: 100px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.2);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const CarouselImg = styled.img`
  margin: 0px 20px 0px 0px;
  padding: 0px;
  flex-shrink: 0;
  scroll-snap-align: start;
  width: calc((100% - 40px));
  height: 100%;
  object-fit: cover;
  top: 0px;
  left: 0px;
  transition: transform 0.2s ease 0s;

  span {
    overflow: hidden;
    display: inline-block;
    max-width: 100px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export {
  SnsCarouselDiv,
  MainCarouselSlider,
  SnsDiv,
  RankDiv,
  CarouselImgDiv,
  UserNameDiv,
  CarouselImg,
};
