import styled from 'styled-components';

const CartContentDiv = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 100px auto;
  display: flex;
`;

const CartListDiv = styled.div`
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

const CartListHeader = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const CartItems = styled.div`
  width: 100%;
`;

const CartPriceDiv = styled.div`
  width: 330px;
  height: 100%;
  margin-left: 20px;
  padding: 20px 5px;
  border: solid 1px lightgray;
  border-radius: 5px;
`;

const CartPriceHeader = styled.h2`
  padding: 20px;
`;

const CartPriceRow = styled.div`
  padding: 0 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const CartPriceTotal = styled.h3`
  text-align: right;
  padding: 20px;
  span {
    color: red;
  }
`;

export {
  CartContentDiv,
  CartListDiv,
  CartListHeader,
  CartItems,
  CartPriceDiv,
  CartPriceHeader,
  CartPriceRow,
  CartPriceTotal,
};
