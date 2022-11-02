import styled from 'styled-components';

const OrderButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  color: #cccccc;
  div {
    font-size: 18px;
    cursor: pointer;
    :nth-child(1) {
      margin-right: 20px;
      color: ${props => props.state === 'os1' && 'black'};
    }
    :nth-child(2) {
      margin-right: 20px;
      color: ${props => props.state === 'os2' && 'black'};
    }
  }
`;
const OrderDateWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 350px;
  justify-content: space-between;
  div {
    font-size: 18px;
    margin-right: 20px;
  }
`;

const OrderTableWrapper = styled.table`
  width: 100%;
  font-size: 14px;
  margin-top: 20px;
  border-collapse: collapse;
  th {
    text-align: left;
    font-size: 13px;
    color: #6f767e;
  }
  th,
  td {
    padding: 16px 12px;
    font-weight: 600;
    border-collapse: collapse;
    border-bottom: solid 1px ${props => props.theme.colors.gray};
    vertical-align: top;
  }
  .refundTBody {
    :hover {
      cursor: pointer;
      background-color: ${props => props.theme.colors.gray};
    }
  }
  .title {
    font-size: 15px;
    display: flex;
    align-items: center;
    div {
      padding-left: 20px;
    }
    img {
      width: 90px;
      height: 90px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .content {
    padding-top: 25px;
  }
`;

export { OrderButtonWrapper, OrderDateWrapper, OrderTableWrapper };
