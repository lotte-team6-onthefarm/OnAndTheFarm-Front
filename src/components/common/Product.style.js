import styled from 'styled-components';

const ProductDiv = styled.div`
  width: ${props => (props.width ? props.width : '200px')};
  margin: 0 7.5px 40px;
  position: relative;
  padding: ${props => (props.padding ? props.padding : '0')};

  .productSoldCountDiv {
    background-color: lightgray;
    /* margin-bottom: 10px; */
    padding: 5px;
    span {
      font-size: 17px;
      font-weight: bold;
    }
    .productSoldCount {
      color: red;
    }
  }
`;
const ProductImgDiv = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
`;

const ProductImgIcons = styled.div`
  position: absolute;
  top: 160px;
  right: 5px;
  z-index: 9;
  svg:nth-child(1) {
    margin: 0 3px;
    border: 2px solid
      ${props => (props.productWishStatus ? '#FF6D59' : 'lightgray')};
    border-radius: 100px;
    background-color: ${props =>
      props.productWishStatus ? '#FF6D59' : 'lightgray'};
    cursor: pointer;
  }
  svg:nth-child(2) {
    margin: 0 3px;
    border: 2px solid
      ${props => (props.productCartStatus ? '#40AA54' : 'lightgray')};
    border-radius: 100px;
    background-color: ${props =>
      props.productCartStatus ? '#40AA54' : 'lightgray'};
    cursor: pointer;
  }
  path {
    color: white;
  }
`;

const ProductImg = styled.img`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.02);
  }
`;

const ProductInfoDiv = styled.div`
  width: 200px;
  p {
    margin-top: 5px;
    span {
      flex-wrap: wrap;
      font-size: 17px;
      line-height: 23px;
      font-weight: 700;
      color: #000;
      margin-right: 4px;
    }
  }
  .productInfoName {
    display: block;
    color: #757575;
    word-break: break-all;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
  }
  .productInfoTitle {
    max-height: 34px;
    margin-top: 5px;
    word-break: break-all;
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    color: #000;
    transition: opacity 0.1s;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
  .productInfoBottom {
    display: flex;
    font-size: 12px;
    color: #9e9e9e;
    line-height: 16px;
    font-weight: 700;
    strong {
      margin-right: 2px;
      color: #424242;
      font-weight: 700;
    }
    span {
      font-size: 12px;
      color: #9e9e9e;
      line-height: 16px;
      font-weight: 700;
    }
  }
  .productInfoButton {
    margin: 8px 0 0;
    display: flex;
    font-weight: 600;
    div {
      :nth-child(1) {
        font-size: 11px;
        padding: 2px 4px;
        color: white;
        border-radius: 4px;
        background-color: rgb(255, 119, 119);
      }
      :nth-child(2) {
        margin-left: 3px;
        font-size: 11px;
        padding: 2px 4px;
        border-radius: 4px;
        color: #4f4e4e;
        background-color: #e6e3e3;
      }
    }
  }
`;

export {
  ProductDiv,
  ProductImgDiv,
  ProductImgIcons,
  ProductImg,
  ProductInfoDiv,
};
