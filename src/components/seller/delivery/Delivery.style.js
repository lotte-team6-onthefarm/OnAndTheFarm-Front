import styled from 'styled-components';

const DeliveryWrapper = styled.div``;
const DeliveryButtonWrapper = styled.div`
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
const DeliveryDateWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 350px;
  justify-content: space-between;
  div {
    font-size: 18px;
    margin-right: 20px;
  }
`;
const DeliveryTableWrapper = styled.div`
  display: flex;
  table {
    text-align: center;
    border-collapse: collapse;
  }
  thead tr {
    background-color: ${props => props.theme.colors.gray};
    height: 50px;
  }
  tbody {
    tr {
      border-bottom: solid 1px gray;
    }
    td {
      padding: 20px 0;
      :first-child {
        cursor: pointer;
      }
    }
  }
  button {
    border: none;
    width: 120px;
    padding: 5px 0;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const WaybillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  select {
    padding: 5px 10px;
    border-radius: 8px;
  }
  input {
    text-align: center;
    border: none;
    outline: none;
  }
`;
export {
  DeliveryWrapper,
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  WaybillWrapper,
};
