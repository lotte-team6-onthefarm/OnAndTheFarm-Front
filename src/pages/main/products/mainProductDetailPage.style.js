import styled from 'styled-components';

const ProductDetailDiv = styled.div`
  width: 1130px;
  margin: 100px auto;
`;

const ProductTopDiv = styled.div`
  width: 900px;
  height: 500px;
  margin: auto;
  display: flex;
`;

const ProductTopImgDiv = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  display: flex;
`;

const ProductTopImg = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

const ProductTopContentDiv = styled.div`
  width: 400px;
  padding: 20px;
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
  width: 800px;
`;

const ProductDetailImgDiv = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
`;

const ProductDetailImg = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
`;



export {
  ProductDetailDiv,
  ProductTopDiv,
  ProductTopImgDiv,
  ProductTopImg,
  ProductTopContentDiv,
  ProductTabDiv,
  ProductDetailContentDiv,
  ProductDetailImgDiv,
  ProductDetailImg
};
