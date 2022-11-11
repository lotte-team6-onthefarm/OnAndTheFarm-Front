import styled from 'styled-components';

const PreOrderContentDiv = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 100px auto;
  display: flex;
`;

const PreOrderListDiv = styled.div`
  width: 800px;
  padding: 30px;
  border: solid 1px lightgray;
  border-radius: 5px;
  .subject {
    color: #000;
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 5px 10px;
  }
`;

const PreOrderListHeader = styled.div`
  width: 100%;
  margin: 10px;
  display: block;
  justify-content: space-between;
`;

const PreOrderItems = styled.div`
  width: 100%;
`;

const PreOrderPriceDiv = styled.div`
  width: 330px;
  height: 100%;
  margin-left: 20px;
  padding: 20px 5px;
  border: solid 1px lightgray;
  border-radius: 5px;
  button {
    margin-top: 40px;
  }
`;

const PreOrderPriceHeader = styled.h2`
  padding: 20px;
`;

const PreOrderPriceRow = styled.div`
  padding: 0 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const PreOrderPriceTotal = styled.h3`
  text-align: right;
  padding: 20px;
  span {
    color: red;
  }
`;

const OrderSelectBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 280px;
  div {
    cursor: pointer;
    border-radius: 4px;
    padding: 10px;
    background-color: ${props => props.theme.colors.gray};
    :hover {
      background-color: ${props => props.theme.colors.logoGreen};
      color: white;
    }
  }
  .orderIsActivate {
    background-color: ${props => props.theme.colors.logoGreen};
    color: white;
  }
`;

export {
  PreOrderContentDiv,
  PreOrderListDiv,
  PreOrderListHeader,
  PreOrderItems,
  PreOrderPriceDiv,
  PreOrderPriceHeader,
  PreOrderPriceRow,
  PreOrderPriceTotal,
  OrderSelectBox,
};
