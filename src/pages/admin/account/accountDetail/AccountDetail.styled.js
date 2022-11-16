import styled from 'styled-components';

const AccountDetailTextWrapper = styled.div`
  .accountDetailTitle {
    display: flex;
    align-items: center;
    width: 150px;
  }
  margin-bottom: 20px;
  display: flex;
  .accountDetailContent {
    display: flex;
    align-items: center;
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    width: calc(100% - 20px);
    min-height: 48px;
    border-radius: 4px;
  }
  .accountItemContent {
    display: flex;
    align-items: center;
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    width: calc(42% - 20px);
    min-height: 48px;
    border-radius: 4px;
  }
  .accountOrderItemContent {
    display: flex;
    align-items: center;
    border: none;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.gray};
    padding: 0 10px;
    font-size: 15px;
    font-weight: 600;
    width: calc(30% - 20px);
    min-height: 48px;
    border-radius: 4px;
  }
`;

const AccountDetailTitle = styled.div`
  position: relative;
  .accountDetailNotice {
    position: absolute;
    right: 0;
    top: 0;
    color: red;
    font-size: 14px;
  }
`;

export { AccountDetailTextWrapper, AccountDetailTitle };
