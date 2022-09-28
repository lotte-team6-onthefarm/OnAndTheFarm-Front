import styled from 'styled-components';

const MainProductsDiv = styled.div`
  width: 930px;
  height: 100%;
  padding: 100px;
`;

const MainProductsSubjectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: xx-large;
    font-weight: 800;
  }
`;

const PopularProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { MainProductsDiv, PopularProductsDiv, MainProductsSubjectDiv };
