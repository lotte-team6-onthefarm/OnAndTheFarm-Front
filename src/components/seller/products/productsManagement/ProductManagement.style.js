import styled from 'styled-components';

const ProductManagementWrapper = styled.div`
  .title {
    margin-bottom: 10px;
  }
`;

const ProductTextWrapper = styled.div`
  .managementProductTitle {
    width: 150px;
  }
  margin-bottom: 20px;
  display: flex;
  input {
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    width: calc(100% - 20px);
    height: 48px;
    border-radius: 4px;
    :focus {
      outline-color: #6d6e6e;
    }
  }
`;

const ProductImageWrapper = styled.div`
  .managementProductTitle {
    width: 150px;
  }
  display: flex;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 10px 0;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 4px;
  }
  button {
    border-radius: 4px;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
  .productImagePreview {
    width: 280px;
    height: 280px;
    object-fit: contain;
  }
  .deleteImage {
    color: red;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const ProductCategoryWrapper = styled.div`
  .managementProductTitle {
    width: 150px;
  }
  display: flex;
  margin-bottom: 20px;
  select {
    width: 150px;
  }
`;

const ProductContentWrapper = styled.div`
  display: flex;
  .managementProductTitle {
    width: 150px;
  }
  .content {
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 4px;
    textarea {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      border-radius: 4px;
      resize: none;
      background-color: ${props => props.theme.colors.gray};
      padding: 10px;
      border: none;
      font-size: 15px;
      font-weight: 600;
      :focus {
        outline-color: #6d6e6e;
      }
    }
  }
`;

const ProductStatusWrapper = styled.div`
  .managementProductTitle {
    width: 150px;
  }
  display: flex;
  .statusBtn {
    display: flex;
    width: 100%;
    div {
      border: solid 1px gray;
      color: gray;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 40px;
      :nth-last-child(n + 2) {
        border-right: none;
      }
      /* :nth-child(2) {
        border-right: none;
      } */
      :hover {
        cursor: pointer;
      }
    }
    .statusBtnactive {
      color: white;
      background-color: ${props => props.theme.colors.thickGray};
    }
  }
`;

const AddProductBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  button:nth-child(1) {
    margin-right: 50px;
  }
  margin-top: 30px;
`;

const UpdateImageViewWrapper = styled.div`
  div:nth-child(1) {
    position: relative;
    div {
      font-size: 15px;
      background-color: red;
      padding: 0px 5px;
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 4px;
      cursor: pointer;
      color: white;
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
  AddProductBtnWrapper,
  UpdateImageViewWrapper,
};
