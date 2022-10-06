import styled from 'styled-components';

const ProductManagementWrapper = styled.div`
  .title {
    margin-bottom: 10px;
  }
`;

const ProductTextWrapper = styled.div`
  margin-bottom: 20px;
  input {
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    width: calc(100% - 20px);
    height: 48px;
    border-radius: 12px;
    :focus {
      outline-color: #6d6e6e;
    }
  }
`;

const ProductImageWrapper = styled.div`
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.gray};
    :hover {
      button {
        border: solid 2px #6d6e6e;
      }
    }
  }
  button {
    border-radius: 8px;
    padding: 10px 30px;
    font-size: 20px;
    border: none;
    background-color: white;
    cursor: pointer;
  }
`;

const ProductCategoryWrapper = styled.div`
  margin-bottom: 20px;
  select {
    width: 150px;
  }
`;

const ProductContentWrapper = styled.div`
  .content {
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 12px;
  }
`;

const ProductStatusWrapper = styled.div`
  .statusBtn {
    display: flex;
    justify-content: center;
    border: solid 1px black;
    div {
      color: gray;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
      :nth-child(1) {
        border-right: solid 1px gray;
      }
      :nth-child(2) {
        border-right: solid 1px gray;
      }
      :hover {
        cursor: pointer;
        color: black;
        background-color: #b1e5fc;
      }
    }
  }
`;

export {
  ProductManagementWrapper,
  ProductTextWrapper,
  ProductImageWrapper,
  ProductCategoryWrapper,
  ProductContentWrapper,
  ProductStatusWrapper,
};
