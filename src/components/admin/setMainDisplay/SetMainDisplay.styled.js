import styled from 'styled-components';

const AddMainDisplayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  :nth-child(1) {
    margin-bottom: 20px;
  }
  .addMainDisplaySelect {
    width: 90%;
    height: 40px;
    font-size: 15px;
    padding: 3px 5px;
    border: 1px solid ${props => props.theme.colors.snsGray};
    border-radius: 4px;
    :focus {
      outline: none;
    }
  }
  .addMainDisplayButton {
    display: flex;
    justify-content: center;
  }
`;

const ListTextWrapper = styled.div`
  .mainTextTitle {
    width: 115px;
  }
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .mainTextContent {
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    width: calc(100% - 20px);
    height: 48px;
    border-radius: 4px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  button {
    font-size: 17px;
  }
`;

export { AddMainDisplayWrapper, ListTextWrapper, ButtonDiv };
