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
const DeliveryTableWrapper = styled.table`
  width: 100%;
  cursor: pointer;
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
  tbody {
    :hover {
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
      width: 80px;
    }
  }
  .content {
    padding-top: 25px;
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
