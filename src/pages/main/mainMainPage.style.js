import styled from 'styled-components';

const MainContentDiv = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
  .lazyActive {
    background-color: #ededed;
  }
`;

const MainDisplayBlock = styled.div`
  .accountTitle {
    width: 97%;
    height: 30px;
    font-size: 25px;
    font-weight: 800;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
  }
  margin-bottom: 60px;
`;

export { MainContentDiv, MainDisplayBlock };
