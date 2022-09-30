import styled from 'styled-components';

const MainPopularProductsTable = styled.table`
  text-align: left;
  th {
    font-size: 13px;
    color: #6f767e;
  }
  td {
    img {
      margin-right: 10px;
    }
    :nth-child(1) {
      font-size: 17px;
      font-weight: bold;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 10px;
      :hover {
        color: ${props => props.theme.colors.blue};
      }
    }
    :nth-child(2) {
      font-size: 16px;
    }
  }
`;

export { MainPopularProductsTable };
