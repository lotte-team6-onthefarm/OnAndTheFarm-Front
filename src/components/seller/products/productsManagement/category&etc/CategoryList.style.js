import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  select {
    width: 250px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    margin-right: 20px;
    option {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export { CategoryListWrapper };
