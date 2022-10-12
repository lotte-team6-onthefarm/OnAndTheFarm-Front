import styled from 'styled-components';

const FeedScrapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 66.666%;
  margin-top: 30px;
`;
const ScrapImgWrapper = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 4px;
  margin: 0px 5px 10px 5px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    transition: all 0.1s linear;
    cursor: pointer;
    :hover {
      transform: scale(1.03);
    }
  }
  div {
    color: white;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px;
    font-size: 12px;
  }
`;

export { FeedScrapWrapper, ScrapImgWrapper };
