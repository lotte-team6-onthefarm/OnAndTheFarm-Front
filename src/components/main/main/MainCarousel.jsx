import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainCarouselDiv, MainCarouselSlider, CarouselImgDiv, CarouselImg } from './MainCarousel.style';


export default function MainCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const items = [
    { id: 1, url: "https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize" },
    { id: 2, url: "https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize" },
    { id: 3, url: "https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize" },
    { id: 4, url: "https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277222/PFFB4AEF95EF2C68DD7CBA7F847E5C9443123A4929F8CB291AE79280B5D67F84E/file/dims/optimize" },
  ];


  return (
    <MainCarouselDiv>
        <h2>농산물 큐레이팅</h2>
        <MainCarouselSlider {...settings}>
        {items.map(item => {
            return (
              <div key={item.id}>
                <CarouselImgDiv>
                  <CarouselImg src={item.url} />
                </CarouselImgDiv>
              </div>
            );
          })}
        </MainCarouselSlider>
      </MainCarouselDiv>
  );
}
