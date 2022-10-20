import styled from 'styled-components';

const MainSnsWrapper = styled.div`
  width: 1130px;
  margin-bottom: 50px;
  align-items: center;
  p {
    font-size: xx-large;
    font-weight: 800;
    margin-bottom: 25px;
  }
`;

const MainSnsBlock = styled.div`
  display: flex;
`;

const MainImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 8px;
  margin: 0 5px;
  overflow: hidden;
  cursor: pointer;
`;

const MainSnsImage = styled.img`
  height: 100%;
  border-radius: 8px;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.02);
  }
`;

export { MainSnsWrapper, MainImageWrapper, MainSnsImage, MainSnsBlock };
