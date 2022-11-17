import styled from 'styled-components';

const CartContentDiv = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
  display: flex;
`;

const CartListDiv = styled.div`
  width: 920px;
  padding: 30px;
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

const ProductCategoryDiv = styled.div`
  width: 210px;
  height: 100%;
  padding: 20px 5px;
  border: solid 1px lightgray;
  border-radius: 5px;
  top: 0;
  position: sticky;
`;

const CartPriceHeader = styled.div`
  padding: 20px;
`;

const CartPriceRow = styled.div`
  color: ${props =>
    props.selectedCategory === props.idx ? '#40AA54' : 'black'};
  padding: 3px 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background: #f2f2f2;
    cursor: pointer;
    border-radius: 8px;
  }
`;

const CartPriceTotal = styled.h3`
  text-align: right;
  padding: 20px;
  span {
    color: red;
  }
`;

const ProductListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchInputWithIcon = styled.input`
  width: calc(100% - 15px);
  height: 40px;
  margin-top: 5px;
  padding-left: 15px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 20px;
`;

export {
  CartContentDiv,
  CartListDiv,
  CartListHeader,
  CartItems,
  ProductCategoryDiv,
  CartPriceHeader,
  CartPriceRow,
  CartPriceTotal,
  ProductListDiv,
  SearchInputWithIcon,
};
