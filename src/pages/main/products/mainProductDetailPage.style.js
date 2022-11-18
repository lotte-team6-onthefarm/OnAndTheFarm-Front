import styled from 'styled-components';

const ProductDetailDiv = styled.div`
  width: 1130px;
  margin: 50px auto;
  .fixed {
    width: 100px;
    color: #fff;
  }
`;

const ProductTopDiv = styled.div`
  width: 900px;
  height: 500px;
  margin: auto;
  display: flex;
`;

const ProductTopImgDiv = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  overflow: hidden;
  border-radius: 8px;
  /* border: solid red; */
`;

const ProductTopImg = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

const ProductTopContentDiv = styled.div`
  width: 400px;
  padding: 50px;
  h1 {
    margin: 9px 0px 0px;
    span {
      :nth-child(1) {
        display: block;
        color: rgb(117, 117, 117);
        word-break: break-all;
        font-size: 20px;
        font-weight: 400;
        line-height: 13px;
      }
      :nth-child(2) {
        max-height: 500px;
        margin-top: 5px;
        word-break: break-all;
        font-weight: 400;
        /* line-height: 17px; */
        margin: 10px 0px 0px;
        color: rgb(0, 0, 0);
        transition: opacity 0.1s ease 0s;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow-wrap: break-word;
      }
    }
  }
  .production-item-price {
    margin: 20px 0px 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 25px;
    line-height: 30px;
    font-weight: 700;
    span {
      :nth-child(1) {
        color: rgb(53, 197, 240);
        margin-right: 4px;
      }
    }
  }
  .production-item-stats {
    margin: 20px 0 10px;
    font-size: 25px;
    color: rgb(158, 158, 158);
    line-height: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    .production-item-stats--icon {
      display: flex;
      align-items: center;
      color: rgb(53, 197, 240);
      margin-right: 1px;
    }
    strong {
      color: black;
      margin-right: 4px;
    }
  }
  .production-selling-header__promotion {
    display: flex;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
    color: #292929;
    .production-selling-header__promotion__title-wrap {
      span {
        font-size: 14px;
        line-height: 21px;
        color: #828c94;
        margin-right: 10px;
      }
    }
  }
`;

const IconDiv = styled.div`
  svg:nth-child(1) {
    margin: 0 3px;
    border: 2px solid
      ${props => (props.productWishStatus ? '#FF6D59' : 'rgba(0,0,0,0)')};
    color: ${props => (props.productWishStatus ? 'white' : 'white')};
    border-radius: 100px;
    background-color: ${props =>
      props.productWishStatus ? '#FF6D59' : 'rgba(0,0,0,0)'};
    cursor: pointer;
  }
  svg:nth-child(2) {
    margin: 0 3px;
    border: 2px solid
      ${props => (props.productCartStatus ? '#40AA54' : 'rgba(0,0,0,0)')};
    color: ${props => (props.productWishStatus ? 'white' : 'black')};
    border-radius: 100px;
    background-color: ${props =>
      props.productCartStatus ? '#40AA54' : 'rgba(0,0,0,0)'};
    cursor: pointer;
  }
`;

const ProductTabDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  color: #cccccc;
  div {
    font-size: 18px;
    cursor: pointer;
    :nth-child(1) {
      margin-right: 20px;
      color: ${props => props.state === '0' && 'black'};
    }
    :nth-child(2) {
      margin-right: 20px;
      color: ${props => props.state === '1' && 'black'};
    }
    :nth-child(3) {
      color: ${props => props.state === '2' && 'black'};
    }
  }
`;

const ProductDetailContentDiv = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 800px;
`;

const ProductDetailImgDiv = styled.div`
  width: 800px;
  margin: auto;
  display: block;
`;

const ProductDetailImg = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

const LikeItemDescription = styled.div``;

export {
  ProductDetailDiv,
  ProductTopDiv,
  ProductTopImgDiv,
  ProductTopImg,
  IconDiv,
  ProductTopContentDiv,
  ProductTabDiv,
  ProductDetailContentDiv,
  ProductDetailImgDiv,
  ProductDetailImg,
};
