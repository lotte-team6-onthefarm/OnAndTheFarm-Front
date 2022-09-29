import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const LeftListBlock = styled.div`
  width: 50%;
  height: 300px;
  background-color: ${props => props.theme.colors.gray};
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  div {
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }
  .active {
    background-color: white;
  }
`;
const RightListBlock = styled.div`
  width: 50%;
  height: 300px;
  overflow: auto;
  div {
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }
  .active {
    color: red;
  }
`;

export { CategoryListWrapper, LeftListBlock, RightListBlock };
