import styled from 'styled-components';

const ProductStatisticsTable = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  border: solid 1px black;
  th,
  td {
    padding: 8px 0;
    text-align: center;
    border-collapse: collapse;
    border: solid 1px black;
  }
`;

const ProductStatisticsButton = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const StatusTd = styled.td`
  color: ${props => (props.status === 1 ? 'green' : 'red')};
  font-weight: ${props => (props.status === 1 ? '550' : '100')};
`;

export { ProductStatisticsTable, StatusTd, ProductStatisticsButton };
