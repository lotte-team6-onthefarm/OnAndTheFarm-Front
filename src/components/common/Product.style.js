import styled from 'styled-components';

const ProductDiv = styled.div`
  width: 200px;
  height: 300px;
  margin: 0 15px 40px;
`
const ProductImgDiv = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`

const ProductImgIcons = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
  svg{
    margin: 0 3px;
    border: 2px solid lightgrey;
    border-radius: 100px;
    background-color: lightgrey;
  }
  path{
    color: white;
  }
`;

const ProductImg = styled.img`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
`;

const ProductInfoDiv = styled.div`
  width: 200px;
  height: 150px;
  p{
    margin-top: 5px;
  }
`;


export { ProductDiv, ProductImgDiv, ProductImgIcons, ProductImg, ProductInfoDiv };
