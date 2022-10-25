import styled from 'styled-components';

const CarouselImgDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const CarouselImg = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

export { CarouselImgDiv, CarouselImg };
