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
  .accountPriorityContent {
    display: flex;
    align-items: center;
    border: solid 1px #d7d7d7;
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    min-height: 48px;
    border-radius: 4px;
  }
`;

const ListTextWrapper = styled.div`
  .mainTextTitle {
    width: 115px;
  }
  .organizeTextTitle {
    width: 170px;
  }
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .mainTextContent {
    cursor: pointer;
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

  .mainTextContentActive {
    cursor: pointer;
    border: none;
    color: white;
    background-color: ${props => props.theme.colors.thickGray};
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

export { AddMainDisplayWrapper, ListTextWrapper };
