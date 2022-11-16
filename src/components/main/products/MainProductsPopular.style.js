import styled from 'styled-components';

const MainProductsDiv = styled.div`
  width: 1130px;
  height: 100%;
`;

const MainProductsSubjectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-size: xx-large;
    font-weight: 800;
  }
`;

const PopularProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainProductDiv = styled.div`
  width: ${props => (props.width ? props.width : '200px')};
  margin: 0 7.5px 0px;
  position: relative;
  padding: ${props => (props.padding ? props.padding : '0')};

  .productSoldCountDiv {
    background-color: ${props => props.theme.colors.gray};
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

export {
  MainProductsDiv,
  PopularProductsDiv,
  MainProductsSubjectDiv,
  MainProductDiv,
};
