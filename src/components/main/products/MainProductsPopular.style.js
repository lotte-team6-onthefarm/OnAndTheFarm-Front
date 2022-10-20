import styled from 'styled-components';

const MainProductsDiv = styled.div`
  width: 1130px;
  height: 100%;
  padding: 50px 0;
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
  /* padding: 0 27px; */
  /* justify-content: space-between; */
`;

export { MainProductsDiv, PopularProductsDiv, MainProductsSubjectDiv };
