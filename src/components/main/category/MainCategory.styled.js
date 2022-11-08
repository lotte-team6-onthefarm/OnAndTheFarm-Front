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
  text-align: center;
  width: 100%;
  border-radius: 8px;
  margin: 0 5px;
  overflow: hidden;
  cursor: pointer;
`;

const MainImageA = styled.a`
  color: inherit;
  text-decoration: none;
`;

const MainSnsImage = styled.img`
  max-width: 88px;
  border-radius: 8px;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.02);
  }
`;

const MainImageSpan = styled.span`
  color: #2f3438;
  font-size: 16px;
  line-height: 20px;
  display: block;
`;

export {
  MainSnsWrapper,
  MainImageWrapper,
  MainSnsImage,
  MainImageA,
  MainSnsBlock,
  MainImageSpan,
};
