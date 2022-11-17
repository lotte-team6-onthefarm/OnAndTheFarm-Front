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

  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  /*해당되는 컴포넌트에 적용*/
  .skeleton-list-item {
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }
`;

export { MainContentDiv, MainDisplayBlock };
