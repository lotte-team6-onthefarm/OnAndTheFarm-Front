import styled from 'styled-components';

const CarouselImgDiv = styled.div`
  width: 650px;
  position: relative;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: ${props => props.width};
  height: ${props => props.height};
  div {
    position: absolute;
  }
  .tooltip .tooltip-content {
    position: absolute;
    /* overflow: hidden; */
    z-index: 99999 !important;
    /* position: relative !important; */
    display: none;
    align-items: center;
    width: 250px;
    height: 100px;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
    background-color: hsla(0, 0%, 100%, 0.86);
    border-radius: 5px;
    padding: 0;
    color: white;
    text-align: center;
    position: absolute;
    z-index: 1;
    bottom: 180%;
    left: 50%;
    margin-left: -125px;
  }
  .tooltip .tooltip-content::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: hsla(0, 0%, 100%, 0.86) transparent transparent transparent;
  }
  .tooltip:hover .tooltip-content {
    display: flex;
  }
`;

const CarouselImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const ProgressiveImageDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SpinnerDiv = styled.div`
  display: inline-block;
  left: 250px;
  top: 245px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export { CarouselImgDiv, CarouselImg, ProgressiveImageDiv, SpinnerDiv };
